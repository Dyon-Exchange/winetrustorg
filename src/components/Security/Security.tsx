import React from 'react'
import Container from '@mui/material/Container'
import './Security.css'
import { Box, Typography } from '@mui/material'

const SecurityPage = () => {
  return (
    <section className="banner-section">
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
            <Typography variant="h2" sx={{ mb: '1.5rem', fontSize: '4.1rem' }}>
              Security
            </Typography>
            <Typography component="div" sx={{ mb: '1.5rem', fontSize: '1.5rem', color: '#c9d4df' }}>
              Security of ownership is everything. Total security of title, condition and provenance
              are the foundations of WineTrust.
            </Typography>
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
        <img className="banner-img" src="/images/banners/security.png" alt="WineTrust Network" />
      </div>
    </section>
  )
}

export default SecurityPage
