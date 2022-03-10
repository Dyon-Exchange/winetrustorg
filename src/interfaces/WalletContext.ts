import { providers } from 'ethers'

import { IUserDetails } from './UserDetails'
import { NetworkDetails } from './NetworkDetails'
import { AuthDetails } from './AuthDetails'
import { ILoggedInDetails } from './LoggedInDetails'

export interface IWalletContext {
  loggedInDetails: ILoggedInDetails | undefined
  currentUserInfo: ILoggedInDetails | undefined
  userDetails: IUserDetails | undefined
  provider: providers.JsonRpcSigner | undefined
  initialising: boolean
  isMetaMaskInstalled: boolean | undefined
  walletConnected: boolean
  connectAccount: () => Promise<void>
  networkDetails: NetworkDetails | undefined
  loggedIn: boolean
  login: () => Promise<void>
  signup: () => Promise<void>
  logout: () => void
  setCurrentUserInfo: (data: ILoggedInDetails) => void
  authDetails: AuthDetails | undefined
}
