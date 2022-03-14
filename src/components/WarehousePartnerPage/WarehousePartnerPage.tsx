import React from 'react'
import Container from '@mui/material/Container'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { warehousePartnerConst } from './WarehousePartnerConst'

const WarehousePartner = () => {
  return (
    <div>
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
      <Container>
        <Grid container spacing={4} sx={{ p: '70px 0' }}>
          {warehousePartnerConst.map((item: any) => (
            <Grid item xs={12} sm={6} md={4} sx={{ maxHeight: '80%' }}>
              <Card className="card-shadow">
                <CardContent sx={{ textAlign: 'center' }}>
                  <img src={item.icon} alt={item.icon} />
                  <p>{item.text}</p>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default WarehousePartner
