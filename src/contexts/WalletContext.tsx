import detectEthereumProvider from '@metamask/detect-provider'
import { providers } from 'ethers'
import React, { createContext, useCallback, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

import { SUPPORTED_NETWORKS } from '../constants'
import { UserDetails, NetworkDetails, IWalletContext } from '../interfaces'
import { convertWeiToNumber } from '../helpers/ethers/convertValue'

const INITIAL_WALLET_CONTEXT = {
  userDetails: undefined,
  provider: undefined,
  initialising: true,
  isMetaMaskInstalled: undefined,
  walletConnected: false,
  connectAccount: async () => {},
  userRoles: undefined,
  networkDetails: undefined,
  wineTrustTokenAPI: undefined
}

export const WalletContext = createContext<IWalletContext>(INITIAL_WALLET_CONTEXT)

export const WalletContextProvider = ({ children }: { children: ReactNode }) => {
  // loading state for initialising the context
  const [initialising, setInitialising] = useState(true)

  const [userDetails, setUserDetails] = useState<UserDetails | undefined>()
  const [provider, setProvider] = useState<providers.JsonRpcSigner | undefined>()

  const [networkDetails, setNetworkDetails] = useState<NetworkDetails>()

  const isMetaMaskInstalled = window.ethereum?.isMetaMask

  const walletConnected = userDetails !== undefined && provider !== undefined && !initialising

  const clearConnectedAccount = useCallback(() => {
    setProvider(undefined)
    setUserDetails(undefined)
  }, [setProvider, setUserDetails])

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
      await connectAccount()
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

  return (
    <WalletContext.Provider
      value={{
        userDetails,
        provider,
        initialising,
        isMetaMaskInstalled,
        walletConnected,
        connectAccount,
        networkDetails
      }}>
      {children}
    </WalletContext.Provider>
  )
}
