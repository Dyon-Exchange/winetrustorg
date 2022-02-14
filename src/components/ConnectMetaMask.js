import React, { createContext, useCallback, useEffect, useState, useMemo, ReactNode } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { providers } from "ethers";
import { Button } from '@material-ui/core';

import { SUPPORTED_NETWORKS } from "./network";

const ConnectMetaMask = () => {
    const [walletaddress, setwalletaddress] = useState();
    const [chainid, setchainid] = useState();
    const [isconnected, setisconnected] = useState(false);
    
    useEffect(() => {
        //if(isconnected = false) {
            window.ethereum.on('chainChanged', () => {
                connectMetaMask();
            })
        //}
         
    });

    async function connectMetaMask() {
            const chainId = await window.ethereum.request({ method: 'eth_chainId'});
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            //const selectedAddress = await window.ethereum.request({method: 'eth_selectedAddress'});
            console.log(chainId);
            //check if connected to the supported network
            if(chainId != '0x4' && chainId != '0x1') {
                //setisconnected(false);
                alert("Please connect to either Ethereum or Rinkeby");
            } 
            else {
               
                let wallet = accounts[0];
                setwalletaddress(wallet);
                //setisconnected(true);
                console.log(`Connected with ${wallet}`)
            }
    };

    return (
        <div className="content">
            <Button onClick={connectMetaMask}>Connect to Metamask</Button>
        </div>
    
    );
}

export default ConnectMetaMask
