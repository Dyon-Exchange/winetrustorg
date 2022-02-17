import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { RoutesPath } from '../../constants'
import { Link } from 'react-router-dom'
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
      <div className="banner-section">
        <Container
          style={{
            position: 'relative',
            zIndex: '0'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              justifyContent: 'center'
            }}>
            <Box sx={{ width: '58%' }}>
              <Typography variant="h2" sx={{ mb: '1.5rem', fontSize: '4.1rem', color: '#fff' }}>
                Trust and Security
              </Typography>
              <Typography
                component="div"
                sx={{ mb: '1.5rem', fontSize: '1.5rem', color: '#c9d4df' }}>
                WineTrust is the most secure way to own and store fine wine & spirts today.
              </Typography>
              <Link to={RoutesPath.SECURITY} className="btn btn-light learn-more-btn">
                Learn More
                <span className="arrow-image"></span>
              </Link>
              <a
                href="#story"
                className="btn scroll-down position-absolute start-50 bottom-0 mb-5 text-center translate-middle-x">
                <p className="mb-2 text-white text-uppercase">
                  <small>Scroll Down</small>
                </p>
                <img src="/images/general/arrow-down.svg" alt="Wine Trust Scroll Down" />
              </a>
            </Box>
          </Box>
        </Container>
        <div className="banner-div">
          <img className="banner-img" src="/images/banners/home-banner.jpg" alt="Wine Trust Home" />
        </div>
      </div>
      <div id="wt-revolution" className="wt-revolution">
        <div className="wt-revolution-img">
          <img src="/images/homepage/revolution.png" alt="wt-revolution-img"></img>
        </div>
        <div className="wt-revolution-desc">
          <h2 className="section-title">A Trust Revolution</h2>
          <ul>
            <li>
              WineTrust is an independent and completely secure wine custodian, backed by public
              blockchain technology.
            </li>
            <li>
              WineTrust is a network of top-quality warehouses in multiple locations around the
              world. WineTrust stores the highest quality wines and spirits in perfect physical and
              digital condition.
            </li>
            <li>
              WineTrust is independent of any merchant. It is governed and run jointly by a
              professional management team and its users, all of whom share in its economic
              benefits.
            </li>
          </ul>
        </div>
      </div>

      <div className="homepage-container">
        <div className="section-header-container centered-text">
          <h2 className="section-title">
            WineTrust addresses the most important problems facing fine wine & spirits owners
          </h2>
          <p className="mb-0 sub-title">
            WineTrust is the first full service fine wine & spirits custodian backed by public
            ledger blockchain technology. Legal ownership is recorded on an immutable public
            blockchain ledger. Owners no longer must accept a merchant’s or exchange’s assurances
            over what they own.
          </p>
        </div>
        <div className="soln-card-container top">
          <div className="soln-card">
            <img src="/images/general/ownership.svg" alt="WineTrust Ownership" />
            <div className="card-text">
              WineTrust guarantees ownership independent of any merchant
            </div>
          </div>
          <div className="soln-card">
            <img src="/images/general/audit.svg" alt="Winetrust Audit" />
            <div className="card-text">
              WineTrust provides an independent audit trail of every case / bottle in the protocol
            </div>
          </div>
          <div className="soln-card">
            <img src="/images/general/certified.svg" alt="Winetrust Certified" />
            <div className="card-text">
              WineTrust provides an independent audit trail of every case / bottle in the protocol
            </div>
          </div>
        </div>
        <div className="soln-card-container bottom">
          <div className="soln-card">
            <img src="/images/general/marketplace.svg" alt="WineTrust Marketplace" />
            <div className="card-text">
              WineTrust is a gateway to digital marketplaces – allowing owners sell their wines for
              the best prices
            </div>
          </div>
          <div className="soln-card">
            <img src="/images/general/wt-connect.svg" alt="Winetrust Connect" />
            <div className="card-text">
              WineTrust is a gateway to digital marketplaces – allowing owners sell their wines for
              the best prices
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
