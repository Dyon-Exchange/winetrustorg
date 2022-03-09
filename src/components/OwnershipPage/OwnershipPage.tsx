import React from 'react'
import Container from '@mui/material/Container'
import { Box, CardContent, Grid, Typography } from '@mui/material'
import { Card } from '@material-ui/core'
import './OwnershipPage.css'
import { wtTokenConst } from './WtTokenConst'
import BannerWithScroll from 'components/atoms/banner/BannerWithScroll'

const bannerConst = {
  title: 'Ownership & Governance',
  image: '/images/banners/ownership-banner.jpg',
  description: `WineTrust is unlike any other fine wine & spirits custodian.`
}

const OwnershipPage = () => {
  return (
    <div>
      <BannerWithScroll>{bannerConst}</BannerWithScroll>
      <Container sx={{ p: '100px 0' }}>
        <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
          <img src="/images/ownershipPage/story.png" />
          <Box sx={{ alignSelf: 'center', pl: '3rem' }}>
            <Typography variant="h2" sx={{ fontSize: '2.2rem', fontWeight: '700', mb: '1.5rem' }}>
              WineTrust is governed by its users
            </Typography>
            <Box sx={{ mb: '3rem' }}>
              <p>
                WineTrust is run by a professional management team, but is governed by users, who
                share in its economic success and make major decisions.
              </p>
              <p>
                When you deposit wine or spirits into WineTrust storage you receive WineTrust tokens
                (the more you deposit, the more you get). These tokens give you rights over
                governance of the protocol and a distribution of profits from WineTrust.
              </p>
            </Box>
          </Box>
        </Box>
      </Container>

      <Box sx={{ background: '#f9fcff' }}>
        <Container sx={{ pt: '100px', pb: '100px' }}>
          <Typography
            variant="h2"
            sx={{ fontSize: '2.25rem', fontWeight: '700', textAlign: 'center', mb: '2rem' }}>
            WineTrust tokens provide
          </Typography>
          <Grid container spacing={4} sx={{ pb: '70px' }}>
            {wtTokenConst.map((item: any) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className="card">
                  <CardContent sx={{ p: '1.5rem 3rem' }}>
                    <img src={item.icon} />
                    <p className="story-title">{item.title}</p>
                    <p className="story-desc">{item.desc}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: { xs: 'block', md: 'flex' }, m: '0 4rem' }}>
            <img src="/images/ownershipPage/story-2.png" />
            <Box sx={{ alignSelf: 'center', pl: '7rem' }}>
              <p>
                Early adopters of WineTrust (i.e., those transferring wine into the protocol first)
                get extra ‘founder’ tokens. So all owners of fine wine & spirits are encouraged to
                sign up and transfer their holdings to benefit from this.
              </p>
              <p>
                In addition, there are automatic bonus releases of tokens for those holding assets
                for a longer time in WineTrust
              </p>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  )
}

export default OwnershipPage
