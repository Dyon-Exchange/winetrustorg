import React from 'react'
import Container from '@mui/material/Container'
import { Box, Typography } from '@mui/material'
import { warehousePartnerConst } from './WarehousePartnerConst'
import warehousePartnerStyles from './WarehousePartnerStyle'

const WarehousePartner = () => {
  const classes = warehousePartnerStyles()
  return (
    <div className={classes.root}>
      <div className="banner-section small-banner">
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
                Warehouse Partners
              </Typography>
              <Typography
                component="div"
                sx={{ mb: '1.5rem', fontSize: '1.5rem', color: '#c9d4df' }}>
                We've integrated with the below warehouse partners.
              </Typography>
            </Box>
          </Box>
        </Container>
        <div className="banner-div">
          <img
            className="banner-img small-banner"
            src="/images/banners/home-banner.jpg"
            alt="Wine Trust Home"
          />
        </div>
      </div>
      <Container className="container">
        {warehousePartnerConst.map((item: any) => (
          <div className="partners-outer">
            <h2 className="mobile-title">{item.title}</h2>
            <div className="partners-img">
              <img src={item.image} width="100%" />
            </div>
            <div className="partners-desc">
              <h2 className="web-title">{item.title}</h2>
              <div className="compartment-desc-text">{item.description}</div>
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default WarehousePartner
