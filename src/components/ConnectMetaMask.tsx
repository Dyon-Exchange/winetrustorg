import React, { useEffect } from 'react'
import { Button } from '@material-ui/core'

//export const WalletContext = React.createContext();

const ConnectMetaMask = () => {

  /*interface IWalletContext {
    provider: undefined;
    isMetaMaskInstalled: boolean | undefined;
    walletConnected: boolean;
    networkDetails: undefined;
    isConnected: boolean;
  }*/

  //const [provider, setProvider] = useState();
  //const [IsMetamaskInstalled, setIsMetamaskInstalled] = useState(false);
  //const [walletaddress, setWalletAddress] = useState();

  //Rinkeby and Ethereum only
  const supportNetwork = ['0x4','0x1'] 
  
  useEffect(() => {
    if (window.ethereum !== undefined) {
      window.ethereum.on('chainChanged', () => {
        connectMetaMask()
      })
    }
  })

  async function connectMetaMask() {
    const chainId = await window.ethereum.request({ method: 'eth_chainId' })
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    //const selectedAddress = await window.ethereum.request({method: 'eth_selectedAddress'});
    console.log(chainId)
    //check if connected to the supported network
    if (supportNetwork.includes(chainId)) {
      //setIsMetamaskInstalled(false);
      alert('Please connect to either Ethereum or Rinkeby')
    } else {
      //setIsMetamaskInstalled(true);
      //setWalletAddress(accounts[0]);
      console.log(`Connected with ${accounts[0]}`)
    }
  }

  return (
    <div className="content">
      <Button onClick={connectMetaMask}>Connect to Metamask</Button>
    </div>
  )
}

export default ConnectMetaMask
