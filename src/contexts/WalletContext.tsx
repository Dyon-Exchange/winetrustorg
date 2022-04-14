import detectEthereumProvider from '@metamask/detect-provider'
import { providers } from 'ethers'
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import Web3 from 'web3'
import { useNavigate } from 'react-router-dom'

import { SUPPORTED_NETWORKS } from '../constants'
import {
  IUserDetails,
  NetworkDetails,
  IWalletContext,
  ILoggedInDetails,
  IUserData
} from '../interfaces'
import axios from 'axios'
import { convertWeiToNumber } from '../helpers/ethers/convertValue'
import { AuthDetails } from 'interfaces/AuthDetails'
import useLocalStorage from 'hooks/localStorage/useLocalStorage'
import { authRequest, createUserRequest, searchUsersRequest } from 'api/auth/auhtentication'

const INITIAL_WALLET_CONTEXT = {
  loggedInDetails: undefined,
  setCurrentUserInfo: () => {},
  currentUserInfo: {},
  userDetails: undefined,
  provider: undefined,
  initialising: true,
  isMetaMaskInstalled: undefined,
  walletConnected: false,
  connectAccount: async () => {},
  userRoles: undefined,
  networkDetails: undefined,
  wineTrustTokenAPI: undefined,
  loggedIn: false,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  authDetails: undefined
}

export const WalletContext = createContext<IWalletContext>(INITIAL_WALLET_CONTEXT)

export const WalletContextProvider = ({ children }: { children: ReactNode }) => {
  const authStorageKey = 'wt-auth'
  const wtLoggedInUserInfo = 'wt-logged-inuser-info'

  // loading state for initialising the context
  const [initialising, setInitialising] = useState(true)

  const [userDetails, setUserDetails] = useState<IUserDetails | undefined>()
  const [provider, setProvider] = useState<providers.JsonRpcSigner | undefined>()

  const [networkDetails, setNetworkDetails] = useState<NetworkDetails>()

  const [authDetails, setAuthDetails] = useLocalStorage<AuthDetails | undefined>(
    authStorageKey,
    undefined
  )

  const navigate = useNavigate()

  const [loggedInDetails, setLoggedInDetails] = useLocalStorage<ILoggedInDetails>(
    wtLoggedInUserInfo,
    {}
  )

  const setCurrentUserInfo = useCallback(
    (data: ILoggedInDetails) => {
      setLoggedInDetails(data)
    },
    [setLoggedInDetails]
  )

  const currentUserInfo = useMemo(() => {
    return loggedInDetails
  }, [loggedInDetails])

  const isMetaMaskInstalled = window.ethereum?.isMetaMask
  const walletConnected = userDetails !== undefined && provider !== undefined && !initialising

  const loggedIn = useMemo(() => {
    if (!authDetails?.accessToken) {
      delete axios.defaults.headers.common['Authorization']
      return false
    }
    //setting authorize token to header in axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${authDetails?.accessToken}`
    return true
  }, [authDetails?.accessToken])

  const clearConnectedAccount = useCallback(() => {
    setProvider(undefined)
    setUserDetails(undefined)
    setLoggedInDetails(undefined)
    setAuthDetails(undefined)
  }, [setProvider, setUserDetails, setAuthDetails, setLoggedInDetails])

  // will setup wallet context to the currently selected metamask account
  const connectAccount = useCallback(async () => {
    try {
      const webProvider = (await detectEthereumProvider({
        mustBeMetaMask: true
      })) as providers.ExternalProvider | providers.JsonRpcFetchFunc

      const ethersProvider = new providers.Web3Provider(webProvider)
      const [address] = await ethersProvider.send('eth_requestAccounts', [])
      const balance = await ethersProvider.getBalance(address)

      setProvider(ethersProvider.getSigner())
      setUserDetails({
        address,
        balance: convertWeiToNumber(balance.toString())
      })
    } catch (err) {
      console.log(err)
    }
  }, [setProvider, setUserDetails])

  // automatically connect metamask account if one is already connected
  useEffect(() => {
    ;(async () => {
      try {
        const webProvider = (await detectEthereumProvider({
          mustBeMetaMask: true
        })) as providers.ExternalProvider | providers.JsonRpcFetchFunc

        // early return if metamask isn't installed or enabled
        if (!webProvider) {
          // set initialising to false
          setInitialising(false)
          return
        }

        const initialisedProvider = new providers.Web3Provider(webProvider)
        const accounts = await initialisedProvider.listAccounts()

        // if any accounts exists call the connect function
        if (accounts.length > 0) {
          await connectAccount()
        }

        // set initialising to false
        setInitialising(false)
      } catch (err) {
        console.error(err)
      }
    })()
  }, [connectAccount])

  // set up metamask account change event listener
  useEffect(() => {
    if (!window.ethereum) return

    const handleAccountChange = async () => {
      clearConnectedAccount()
      // setup wallet context again with the new selected account
      // await connectAccount()
      navigate('/')
    }

    const handleChainChanged = (chainIdString: string) => {
      const chainId = parseInt(chainIdString, 16)
      const onSupportedNetwork = SUPPORTED_NETWORKS.some(
        ({ chainId: supportedNetworkChainId }) => supportedNetworkChainId === chainId
      )
      setNetworkDetails({
        chainId,
        onSupportedNetwork
      })
    }

    // Grab the initial chain the user is connected to
    ;(async () => {
      const chainId = await (window.ethereum as any).request({
        method: 'eth_chainId'
      })
      handleChainChanged(chainId)
    })()

    // setup listener
    window.ethereum.on('accountsChanged', handleAccountChange)
    window.ethereum.on('chainChanged', handleChainChanged)

    return () => {
      window.ethereum.removeListener('accountsChanged', handleAccountChange)
      window.ethereum.removeListener('chainChanged', handleChainChanged)
    }
  }, [clearConnectedAccount, connectAccount])

  const login = useCallback(async () => {
    if (!userDetails) {
      return
    }

    let user
    const users = await searchUsersRequest(userDetails.address)
    if (users.length > 0) {
      user = users[0]
    } else {
      user = await createUserRequest(userDetails.address)
    }

    const signature = await handleSignMessage(user)

    const { token, user: userInfo } = await authRequest(userDetails.address, signature)
    setAuthDetails({ accessToken: token, address: userDetails.address })
    setLoggedInDetails({ user: userInfo })
  }, [setAuthDetails, userDetails, setLoggedInDetails])

  const handleSignMessage = ({ ethAddress, nonce }: IUserData) => {
    const web3 = new Web3(Web3.givenProvider)

    return new Promise<string>((resolve, reject) =>
      web3.eth.personal.sign(
        web3.utils.fromUtf8(`I am signing my one-time nonce: ${nonce}`),
        ethAddress,
        'test password!',
        (err, signature) => {
          if (err) return reject(err)
          return resolve(signature)
        }
      )
    )
  }

  const signup = useCallback(async () => {}, [])
  const logout = useCallback(() => {}, [])

  return (
    <WalletContext.Provider
      value={{
        loggedInDetails,
        setCurrentUserInfo,
        currentUserInfo,
        userDetails,
        provider,
        initialising,
        isMetaMaskInstalled,
        walletConnected,
        connectAccount,
        networkDetails,
        loggedIn,
        login,
        signup,
        logout,
        authDetails
      }}>
      {children}
    </WalletContext.Provider>
  )
}
