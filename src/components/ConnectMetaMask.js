import React, { createContext, useCallback, useEffect, useState, useMemo, ReactNode } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { providers } from "ethers";
import { Button } from '@material-ui/core';

import { SUPPORTED_NETWORKS } from "./network";

const ConnectMetaMask = () => {
    const [walletaddress, setwalletaddress] = useState();
    const [chainid, setchainid] = useState();
    useEffect(() => {
         window.ethereum.on('chainChanged', () => {
                    //window.location.reload();
                    connectMetaMask();
        })
    });

    async function connectMetaMask() {
            const chainId = await window.ethereum.request({ method: 'eth_chainId'});
             const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            console.log(chainId);
            //check if connected to the supported network
            if(chainId != '0x4' && chainId != '0x1') {
                alert("Please connect to either Ethereum or Rinkeby");
            } 
            else {
               
                let wallet = accounts[0];
                alert(`Connected with ${wallet}`)
            }
    };

    return (
        <div>
            <Button onClick={connectMetaMask}>Connect to Metamask</Button>
        </div>
    
    );
}

export default ConnectMetaMask
