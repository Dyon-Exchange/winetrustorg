import React, { Fragment } from 'react'
import { Box } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'

import './App.css'
import * as constants from './constants'

import { apolloClient } from './api/apolloClient/client'

import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import Homepage from 'components/Homepage/Homepage'
import About from 'components/About/About'
import NetworkPage from 'components/NetworkPage/NetworkPage'
import Security from 'components/Security/Security'
import OwnershipPage from 'components/OwnershipPage/OwnershipPage'
import TechnologyPage from 'components/TechnologyPage/TechnologyPage'
import WarehousePartner from 'components/WarehousePartnerPage/WarehousePartnerPage'
import MerchantPartner from 'components/MerchantPartner/MerchantPartner'
import ProfileSetting from 'components/ProfileSetting/ProfileSetting'
import AssetListing from 'components/AssetListing/AssetListing'
import AssetHome from 'components/AssetHome/AssetHome'
import WalletHome from 'components/WalletHome/WalletHome'
import ContactUs from 'components/ContactUs/ContactUs'
import PageNotFound from 'components/PageNotFound/PageNotFound'
import { WalletContextProvider } from 'contexts/WalletContext'
import { LoaderContextProvider } from 'contexts/LoaderContext'
import PrivacyPolicyPage from 'components/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditions from 'components/TermsAndConditions/TermsAndConditions'
import Portfolio from 'components/Portfolio/Portfolio'
import Faqs from 'components/FAQ/Faq'

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <WalletContextProvider>
        <LoaderContextProvider>
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
                  path={constants.RoutesPath.PORTFOLIO}
                  element={
                    <Fragment>
                      <Portfolio />
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
                <Route
                  path={constants.RoutesPath.WAREHOUSEPARTNER}
                  element={
                    <Fragment>
                      <WarehousePartner />
                    </Fragment>
                  }
                />
                <Route
                  path={constants.RoutesPath.MERCHANTPARTNER}
                  element={
                    <Fragment>
                      <MerchantPartner />
                    </Fragment>
                  }
                />
                <Route
                  path={constants.RoutesPath.PROFILESETTING}
                  element={
                    <Fragment>
                      <ProfileSetting />
                    </Fragment>
                  }
                />
                <Route
                  path={constants.RoutesPath.ASSETLISTING}
                  element={
                    <Fragment>
                      <AssetListing />
                    </Fragment>
                  }
                />
                <Route
                  path={constants.RoutesPath.ASSETHOME}
                  element={
                    <Fragment>
                      <AssetHome />
                    </Fragment>
                  }
                />
                <Route
                  path={constants.RoutesPath.WALLETHOME}
                  element={
                    <Fragment>
                      <WalletHome />
                    </Fragment>
                  }
                />
                <Route
                  path={constants.RoutesPath.CONTACTUS}
                  element={
                    <Fragment>
                      <ContactUs />
                    </Fragment>
                  }
                />
                <Route
                  path={constants.RoutesPath.PRIVACYPOLICY}
                  element={
                    <Fragment>
                      <PrivacyPolicyPage />
                    </Fragment>
                  }
                />
                <Route
                  path={constants.RoutesPath.TERMSANDCONDITIONS}
                  element={
                    <Fragment>
                      <TermsAndConditions />
                    </Fragment>
                  }
                />
                <Route
                  path={constants.RoutesPath.FAQS}
                  element={
                    <Fragment>
                      <Faqs />
                    </Fragment>
                  }
                />
                <Route
                  path="/*"
                  element={
                    <Fragment>
                      <PageNotFound />
                    </Fragment>
                  }
                />
              </Routes>
            </Box>
            <Footer />
          </BrowserRouter>
        </LoaderContextProvider>
      </WalletContextProvider>
    </ApolloProvider>
  )
}

export default App
