import React, { createContext, useCallback, useEffect, useState, ReactNode } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { providers } from "ethers";
import { Button } from '@material-ui/core';

import { SUPPORTED_NETWORKS } from "./network";

interface IWalletContext {
  userDetails: UserDetails | undefined;
  provider: providers.JsonRpcSigner | undefined;
  initialising: boolean;
  isMetaMaskInstalled: boolean | undefined;
  walletConnected: boolean;
  connectAccount: () => Promise<void>;
  userRoles: WineTrustTokenInstanceHook["userRoles"] | undefined;
  networkDetails: NetworkDetails | undefined;
  wineTrustTokenAPI:
    | WineTrustTokenInstanceHook["wineTrustTokenAPI"]
    | undefined;
}

const INITIAL_WALLET_CONTEXT = {
  userDetails: undefined,
  provider: undefined,
  initialising: true,
  isMetaMaskInstalled: undefined,
  walletConnected: false,
  connectAccount: async () => {},
  userRoles: undefined,
  networkDetails: undefined,
  wineTrustTokenAPI: undefined,
};

const ConnectMetaMask = () => {
    const [walletaddress, setWalletAddress] = useState();
    
    async function connectMetaMask() {
        if(window.ehtereum) {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            const chainId = await window.ethereum.request({ method: 'eth_chainId'});
            //check if connected to the supported network
            if(chainId != '4' || chainId != 1) {
                alert("Please connect to either Mainnet or Rinkeby");
            } 
            else {
                let wallet = accounts[0];
                setWalletAddress(wallet);
            }
        } 
        else {
            // Show alert if Ethereum provider is not detected
            alert("Please install Mask");
        }
    };


    return (
        <div>
            <Button onClick={connectMetaMask}>Connect to Metamask</Button>
        </div>
    
    );
}

export default ConnectMetaMask
