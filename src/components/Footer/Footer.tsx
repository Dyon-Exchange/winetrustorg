import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { RoutesPath } from '../../constants'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <Container sx={{ pt: '50px', pb: '50px' }}>
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            justifyContent: 'space-between',
            alignSelf: 'center',
            color: '#fff'
          }}>
          <div className="logo-desc">
            <div className="ft-logo">
              <Link to={RoutesPath.HOMEPAGE}>
                <img src="/logo/logo.png" alt="wine trust" className="ft-logo-img" />
              </Link>
            </div>
            <div className="ft-desc">
              WineTrust is the most secure way to own and store fine wine & spirits today.
            </div>
            <div style={{ marginTop: '18px' }} className="social-icon-margin">
              <a href="https://twitter.com/winetrustorg" target="_blank" rel="noreferrer">
                <img src="/images/general/twitter_black.svg" alt="wine-trust twitter-logo" />
              </a>
              <a href="https://medium.com/@winetrust" target="_blank" rel="noreferrer">
                <img src="/images/general/medium-logo.svg" alt="wine-trust medium-logo" />
              </a>
            </div>
          </div>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <div id="wine-trust-info" className="footer-links">
                <div className="footer-title">Winetrust</div>
                <Link to={RoutesPath.HOMEPAGE}>Home</Link>
                <Link to={RoutesPath.ABOUT}>About</Link>
                <Link to={RoutesPath.CONTACTUS}>Contact Us</Link>
                <Link to={RoutesPath.FAQS}>FAQs</Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div id="technology-info" className="footer-links">
                <div className="footer-title">Technology</div>
                <Link to={RoutesPath.TECHNOLOGY}>Technology</Link>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div id="alliance-info" className="footer-links">
                <div className="footer-title">Alliance</div>
                <Link to={RoutesPath.WAREHOUSEPARTNER}>Warehouse Partners</Link>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <div className="footer-bottom">
        <div>
          Copyright© 2022. <span className="blue-text"> WineTrust </span> All rights reserved.
        </div>
        <div className="tnc-policy">
          <Link to={RoutesPath.TERMSANDCONDITIONS}>Terms and Conditions</Link>
          <Link to={RoutesPath.PRIVACYPOLICY}>Privacy Policy Page</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
