import React from 'react'
import Container from '@mui/material/Container'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { merchantPartnerConst } from './MerchantPartnerConst'

const MerchantPartner = () => {
  return (
    <div>
      <div className="banner-section small-banner banner-gradient">
        <Container
          style={{
            position: 'relative',
            zIndex: '0'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '80vh',
              justifyContent: 'center'
            }}>
            <Box sx={{ width: '58%' }}>
              <Typography variant="h2" sx={{ mb: '1.5rem', fontSize: '4.1rem', color: '#fff' }}>
                Merchant Partners
              </Typography>
              <Typography
                component="div"
                sx={{ mb: '1.5rem', fontSize: '1.5rem', color: '#c9d4df' }}>
                We've integrated with the below merchant partners.
              </Typography>
            </Box>
          </Box>
        </Container>
        <div className="banner-div">
          <img
            className="banner-img small-banner"
            src="/images/banners/merchant-partners-banner.jpeg"
            alt="Wine Trust Home"
          />
        </div>
      </div>
      <Container>
        <Grid container spacing={4} sx={{ m: '70px 0' }}>
          {merchantPartnerConst.map((item: any) => (
            <Grid item xs={12} sm={6} md={4} sx={{ maxHeight: '80%' }}>
              <Card className="card-shadow">
                <CardContent sx={{ textAlign: 'center' }}>
                  <img src={item.icon} />
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

export default MerchantPartner
