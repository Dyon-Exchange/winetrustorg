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
import Security from 'components/Security/Security'
import OwnershipPage from 'components/OwnershipPage/OwnershipPage'
import TechnologyPage from 'components/TechnologyPage/TechnologyPage'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Box display="flex" flexDirection="column" minH="inherit">
        <Routes>
          <Route
            path={constants.RoutesPath.HOMEPAGE}
            element={
              <Fragment>
                <Homepage />
              </Fragment>
            }
          />
          <Route
            path={constants.RoutesPath.ABOUT}
            element={
              <Fragment>
                <About />
              </Fragment>
            }
          />
          <Route
            path={constants.RoutesPath.NETWORK}
            element={
              <Fragment>
                <NetworkPage />
              </Fragment>
            }
          />
          <Route
            path={constants.RoutesPath.SECURITY}
            element={
              <Fragment>
                <Security />
              </Fragment>
            }
          />
          <Route
            path={constants.RoutesPath.OWNERSHIP}
            element={
              <Fragment>
                <OwnershipPage />
              </Fragment>
            }
          />
          <Route
            path={constants.RoutesPath.TECHNOLOGY}
            element={
              <Fragment>
                <TechnologyPage />
              </Fragment>
            }
          />
        </Routes>
      </Box>
      <Footer />
    </BrowserRouter>
  )
}

export default App
