import React from 'react'
import Container from '@mui/material/Container'
import { Card, CardContent, Grid } from '@mui/material'
import { merchantPartnerConst } from './MerchantPartnerConst'
import BannerSection from 'components/atoms/banner/commonBannerSection'

const MerchantPartner = () => {
  const bannerConst = {
    title: 'Merchant Partners',
    image: '/images/banners/merchant-partners-banner.jpeg',
    description: `We've integrated with the below merchant partners.`
  }
  return (
    <div>
      <BannerSection>{bannerConst}</BannerSection>
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
