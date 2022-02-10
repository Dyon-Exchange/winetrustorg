import React, { createContext, useCallback, useEffect, useState, useMemo, ReactNode } from "react";
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
    const [chainid, setChainId] = useState();
    useMemo(() => {
        if(walletaddress != 'undefined') {
            if(window.ethereum) {
                window.ethereum.on('chainChanged', () => {
                    //window.location.reload();
                    connectMetaMask();
                })

                /*window.ethereum.on('accountsChanged', () => {
                    //window.location.reload();
                    connectMetaMask();
                })*/
            }
            else {
                alert("Please install Mask");
            }
        }
    });

    async function connectMetaMask() {
            const _chainId = await window.ethereum.request({ method: 'eth_chainId'});
            setChainId(_chainId);
            //check if connected to the supported network
            if(chainid != '0x4' && chainid != '0x1') {
                alert("Please connect to either Ethereum or Rinkeby");
            } 
            else {
                const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
                let wallet = accounts[0];
                setWalletAddress(wallet);
                alert(`Connected with ${walletaddress}`)
            }
    };

    return (
        <div>
            <Button onClick={connectMetaMask}>Connect to Metamask</Button>
        </div>
    
    );
}

export default ConnectMetaMask
