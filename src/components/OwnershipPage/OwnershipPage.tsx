import React from 'react'
import Container from '@mui/material/Container'
import { Box, CardContent, Grid, Typography } from '@mui/material'
import { Card } from '@material-ui/core'
import { wtTokenConst } from './WtTokenConst'
import BannerWithScroll from 'components/atoms/banner/BannerWithScroll'
import ownershipStyles from './OwnershipStyle'

const bannerConst = {
  title: 'Ownership & Governance',
  image: '/images/banners/ownership-banner.jpg',
  description: `WineTrust is unlike any other fine wine & spirits custodian.`
}

const OwnershipPage = () => {
  const classes = ownershipStyles()
  return (
    <div className={classes.root}>
      <BannerWithScroll>{bannerConst}</BannerWithScroll>
      <Container className="container-padding">
        <Box className="section-outer-wrapper">
          <div className="wt-ownership-img">
            <img src="/images/ownershipPage/story.png" />
          </div>
          <Box className="section-box">
            <Typography variant="h2" sx={{ mb: '1.5rem' }}>
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
        <Container className="container-padding">
          <Typography variant="h2" sx={{ textAlign: 'center', mb: '2rem' }}>
            WineTrust tokens provide
          </Typography>
          <Grid container spacing={4} className="grid-container">
            {wtTokenConst.map((item: any) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className="card">
                  <CardContent className="card-content">
                    <img src={item.icon} />
                    <p className="card-title">{item.title}</p>
                    <p className="card-desc">{item.desc}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box className="section-outer-wrapper">
            <div className="wt-ownership-img">
              <img src="/images/ownershipPage/story-2.png" />
            </div>
            <Box className="section-box">
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
