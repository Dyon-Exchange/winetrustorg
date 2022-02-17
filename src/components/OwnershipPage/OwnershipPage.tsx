import React from 'react'
import Container from '@mui/material/Container'
import { Box, CardContent, Grid, Typography } from '@mui/material'
import { Card } from '@material-ui/core'
import './OwnershipPage.css'
import { wtTokenConst } from './WtTokenConst'

const OwnershipPage = () => {
  return (
    <div>
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
            <Box>
              <Typography variant="h2" sx={{ mb: '1.5rem', fontSize: '4.1rem', color: '#fff' }}>
                Ownership & Governance
              </Typography>
              <Typography
                component="div"
                sx={{ mb: '1.5rem', fontSize: '1.5rem', color: '#c9d4df' }}>
                WineTrust is unlike any other fine wine & spirits custodian.
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
          <img
            className="banner-img"
            src="/images/banners/ownership-banner.jpg"
            alt="Banner Image"
          />
        </div>
      </div>
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
        <Container sx={{ p: '100px 0' }}>
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
