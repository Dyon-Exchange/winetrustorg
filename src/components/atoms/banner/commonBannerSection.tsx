import { Box, Container, Typography } from '@mui/material'
import React from 'react'

// const useStyles = makeStyles(theme => ({
//   hidden: {
//     display: '-webkit-box',
//     WebkitLineClamp: 4,
//     overflow: 'hidden',
//     WebkitBoxOrient: 'vertical',
//     'margin-bottom': '5px'
//   }
// }))
interface Props {
  children: {
    title: string
    description: string
    image: string
  }
}
const BannerSection: React.FC<Props> = ({ children }) => {
  return (
    <div className="banner-section small-banner">
      <div className="banner-gradient">
        <Container
          style={{
            position: 'relative',
            zIndex: '9'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '585px',
              justifyContent: 'center'
            }}>
            <Box sx={{ width: '58%' }}>
              <Typography variant="h1" sx={{ mb: '1.5rem', color: '#fff' }}>
                {children.title}
              </Typography>
              {children.description ? (
                <Typography
                  component="div"
                  sx={{ mb: '1.5rem', fontSize: '1.5rem', color: '#c9d4df' }}>
                  {children.description}
                </Typography>
              ) : (
                ''
              )}
            </Box>
          </Box>
        </Container>
      </div>
      <div className="banner-div">
        <img className="banner-img small-banner" src={children.image} alt="Wine Trust Home" />
      </div>
    </div>
  )
}

export default BannerSection
