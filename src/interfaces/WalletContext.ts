import { providers } from 'ethers'

import { UserDetails } from './Userdetails'
import { NetworkDetails } from './NetworkDetails'
import { AuthDetails } from './AuthDetails'

export interface IWalletContext {
  userDetails: UserDetails | undefined;
  provider: providers.JsonRpcSigner | undefined;
  initialising: boolean;
  isMetaMaskInstalled: boolean | undefined;
  walletConnected: boolean;
  connectAccount: () => Promise<void>;
  networkDetails: NetworkDetails | undefined;
  loggedIn: boolean;
  login: () => Promise<void>;
  signup: () => Promise<void>;
  logout: () => void;
  authDetails: AuthDetails | undefined;
}
