import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import bannerStyles from './bannerStyle'
interface Props {
  children: {
    title: string
    description: string
    image: string
  }
}

const BannerWithScroll: React.FC<Props> = ({ children }) => {
  const classes = bannerStyles()
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
          <Box className={classes.bannerContent}>
            <Typography variant="h1" sx={{ mb: '1.5rem', color: '#fff' }}>
              {children.title}
            </Typography>
            <Typography component="p" className="banner-desc">
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
