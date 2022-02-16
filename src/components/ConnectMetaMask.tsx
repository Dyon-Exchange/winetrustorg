import React, { useEffect } from 'react'
import { Button } from '@material-ui/core'

const ConnectMetaMask = () => {
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
    if (chainId !== '0x4' && chainId !== '0x1') {
      alert('Please connect to either Ethereum or Rinkeby')
    } else {
      let wallet = accounts[0]
      console.log(`Connected with ${wallet}`)
    }
  }

  return (
    <div className="content">
      <Button onClick={connectMetaMask}>Connect to Metamask</Button>
    </div>
  )
}

export default ConnectMetaMask
