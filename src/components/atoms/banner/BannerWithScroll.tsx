import { Box, Container, Typography } from '@mui/material'
import React from 'react'

interface Props {
  children: {
    title: string
    description: string
    image: string
  }
}

const BannerWithScroll: React.FC<Props> = ({ children }) => {
  return (
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
              {children.title}
            </Typography>
            <Typography component="div" sx={{ mb: '1.5rem', fontSize: '1.5rem', color: '#c9d4df' }}>
              {children.description}
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
        <img className="banner-img" src={children.image} alt="WineTrust Network" />
      </div>
    </div>
  )
}
export default BannerWithScroll
