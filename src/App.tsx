import React from 'react'
import { Box } from '@chakra-ui/react'
import './App.css'
import Header from './components/Header/Header'
import Footer from 'components/Footer/Footer'
import Homepage from 'components/Homepage/Homepage'

const App = () => {
  return (
    <div>
      <Header></Header>
      <Box display="flex" flexDirection="column" minH="inherit">
        <Homepage></Homepage>
      </Box>
      <Footer></Footer>
    </div>
  )
}

export default App
