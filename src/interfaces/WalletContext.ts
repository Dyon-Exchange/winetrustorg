import { UserDetails } from './Userdetails'
import { NetworkDetails } from './NetworkDetails'
import { providers } from 'ethers'

export interface IWalletContext {
  userDetails: UserDetails | undefined
  provider: providers.JsonRpcSigner | undefined
  initialising: boolean
  isMetaMaskInstalled: boolean | undefined
  walletConnected: boolean
  connectAccount: () => Promise<void>
  networkDetails: NetworkDetails | undefined
}
