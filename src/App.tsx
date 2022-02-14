import React from 'react'
import { Box, Link } from '@chakra-ui/react'
import './App.css'
import ConnectMetaMask from './components/ConnectMetaMask'
//import ProfileSettings from './components/WineTrustProfile'
import SearchProductAsset from './components/SearchProductAsset'
import TopBar from './components/TopBar'

const App = () => {
  return (
    <Box display="flex" flexDirection="column" minH="inherit">
      <TopBar />
   </Box>
  )
}

export default App
