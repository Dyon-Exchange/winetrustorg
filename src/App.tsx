import React, { Fragment } from 'react'
import { Box } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import * as constants from './constants'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Homepage from 'components/Homepage/Homepage'
import About from 'components/About/About'
import NetworkPage from 'components/NetworkPage/NetworkPage'
import OwnershipPage from 'components/OwnershipPage/OwnershipPage'

const App = () => {
  return (
    <BrowserRouter>
      <Box display="flex" flexDirection="column" minH="inherit">
        <Routes>
          <Route
            path={constants.RoutesPath.HOMEPAGE}
            element={
              <Fragment>
                <Header />
                <Homepage />
                <Footer></Footer>
              </Fragment>
            }
          />
          <Route
            path={constants.RoutesPath.ABOUT}
            element={
              <Fragment>
                <Header />
                <About />
                <Footer></Footer>
              </Fragment>
            }
          />
          <Route
            path={constants.RoutesPath.NETWORK}
            element={
              <Fragment>
                <Header />
                <NetworkPage />
                <Footer></Footer>
              </Fragment>
            }
          />
          <Route
            path={constants.RoutesPath.OWNERSHIP}
            element={
              <Fragment>
                <Header />
                <OwnershipPage />
                <Footer></Footer>
              </Fragment>
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
