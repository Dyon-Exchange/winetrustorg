import React, { useEffect } from 'react'
import BootstrapBlueBtn from './atoms/buttons/BootStrapBlueBtn'

const ConnectMetaMask = () => {
  //Rinkeby and Ethereum only
  const supportNetwork = ['0x4', '0x1']

  useEffect(() => {
    if (window.ethereum !== undefined) {
      window.ethereum.on('chainChanged', () => {
        connectMetaMask()
      })
    }
  })

  async function connectMetaMask() {
    if (window.ethereum !== undefined) {
      alert('Please install metamask')
    }

    const chainId = await window.ethereum.request({ method: 'eth_chainId' })
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    console.log(supportNetwork)
    console.log(chainId)
    if (supportNetwork.includes(chainId)) {
      alert('Please connect to either Ethereum or Rinkeby')
    } else {
      console.log(`Connected with ${accounts[0]}`)
    }
  }

  return (
    <BootstrapBlueBtn
      variant="contained"
      disableRipple
      size="medium"
      style={{ borderRadius: '5px' }}
      sx={{ p: '6px 25px!important' }}
      onClick={connectMetaMask}>
      Connect
    </BootstrapBlueBtn>
  )
}

export default ConnectMetaMask
