import React from 'react'
import Container from '@mui/material/Container'
import './NetworkPage.css'
import { Box, Typography } from '@mui/material'

const NetworkPage = () => {
  return (
        <section className="banner-section">
            <Container style={{
            position: 'relative',
            zIndex: '0'
            }}>
                <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                    justifyContent: 'center'
                 }}>
                    <Box sx={{width:'58%'}}>
                        <Typography 
                            variant="h2" sx={{ mb: '1.5rem', fontSize: '4.1rem' }}
                        >Network</Typography>
                        <Typography 
                            component="div" 
                            sx={{mb: '1.5rem', fontSize: '1.5rem', color: '#c9d4df'}}>
                            WineTrust is a network of the world’s most trusted and most secure, Government regulated, dedicated fine wine and spirits storage facilities.
                        </Typography>
                        <a href="#story" className="btn scroll-down position-absolute start-50 bottom-0 mb-5 text-center translate-middle-x">
                            <p className="mb-2 text-white text-uppercase">
                                <small>Scroll Down</small>
                            </p>
                            <img src="/images/general/arrow-down.svg" alt="Wine Trust Scroll Down" />
                        </a>
                    </Box>
                </Box>
            </Container>
            <div className="banner-div">
                <img className="banner-img" src="/images/banners/network.png" alt="Banner Image"/>
            </div>
        </section>
      
  )
}

export default NetworkPage
