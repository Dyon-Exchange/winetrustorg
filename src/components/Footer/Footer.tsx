import { Box, Container } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { RoutesPath } from '../../constants'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <Container sx={{ p: '50px 0' }}>
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            justifyContent: 'space-between',
            alignSelf: 'center',
            color: '#fff'
          }}>
          <div className="logo-desc">
            <div className="ft-logo">
              <img src="/logo/logo.png" alt="wine trust" className="ft-logo-img" />
            </div>
            <div className="ft-desc">
              WineTrust is the most secure way to own and store fine wine & spirts today.
            </div>
            <div style={{ marginTop: '18px' }} className="social-icon-margin">
              <img src="/images/general/twitter_black.svg" />
              <img src="/images/general/linkedin_black.svg" />
              <img src="/images/general/github_black.svg" />
              <img src="/images/general/telegram_black.svg" />
            </div>
          </div>
          <div id="wine-trust-info" className="footer-links">
            <div className="footer-title">Winetrust</div>
            <Link to={RoutesPath.HOMEPAGE}>Home</Link>
            <Link to={RoutesPath.ABOUT}>About</Link>
            <Link to={RoutesPath.ABOUT}>
              <span className="blue-text">Careers -</span>
            </Link>
            <Link to={RoutesPath.ABOUT}>Contact Us</Link>
            <a href="#id">FAQs</a>
          </div>
          <div id="technology-info" className="footer-links">
            <div className="footer-title">Technology</div>
            <a href="#id">Technology</a>
            <a href="#id">WineTrust Protocol</a>
            <a href="#id">WineTrust Token</a>
            <a href="#id">Run a Node</a>
          </div>
          <div id="alliance-info" className="footer-links">
            <div className="footer-title">Alliance</div>
            <a href="/warehouse-partners">Warehouse Partners</a>
            <a href="/merchant-partners">Merchant Partners</a>
          </div>
        </Box>
      </Container>
      <div className="footer-bottom">
        <div>
          Copyright© 2022. <span className="blue-text"> Wine Trust </span> All rights reserved.
        </div>
        <div className="tnc-policy">
          <div>Terms and Conditions</div>
          <div>Privacy Policy Page</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
