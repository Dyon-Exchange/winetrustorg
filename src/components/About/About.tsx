import React from 'react'
import Container from '@mui/material/Container'
import { Box, Typography } from '@mui/material'
// import { foundersConst1 } from './FounderConst1'
// import { foundersConst2 } from './FounderConst2'

const About = () => {
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
            <Box sx={{ width: '58%' }}>
              <Typography variant="h2" sx={{ mb: '1.5rem', fontSize: '4.1rem', color: '#fff' }}>
                About
              </Typography>
              <Typography
                component="div"
                sx={{ mb: '1.5rem', fontSize: '1.5rem', color: '#c9d4df' }}>
                WineTrust is an ecosystem dedicated to providing trust, security, and liquidity to
                fine wine & spirits ownership. It is a network of physical warehouses backed by the
                latest immutable blockchain ledger technology.
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
          <img className="banner-img" src="/images/banners/home-banner.jpg" alt="Wine Trust Home" />
        </div>
      </div>
      <Container className="section-padding">
        <Box sx={{ width: '52%' }}>
          <p>
            Today, the WineTrust ecosystem encompasses many of the world’s highest quality fine wine
            & spirits storage facilities.
          </p>
          <p>
            Conceived by industry insiders with an intimate knowledge of the issues faced by fine
            wine & spirits, WineTrust is changing the relationship between owners of fine wine &
            spirits and their service provider.
          </p>
        </Box>
      </Container>

      {/* Founders are commented as of now by J */}

      {/* <Box sx={{ background: '#f9fcff' }}>
        <Container sx={{ p: '100px 0' }}>
          <h2 className="section-title text-align-center">Founders</h2>
          <Box sx={{ display: { xs: 'block', md: 'flex' }, m: '0 4rem' }}>
            <Grid container spacing={4}>
              {foundersConst1.map((item: any) => (
                <Grid item xs={12} sm={6} md={4} sx={{ maxHeight: '80%' }}>
                  <Card
                    sx={{
                      backgroundColor: 'transparent',
                      boxShadow: 'none!important'
                    }}>
                    <CardMedia component="img" height="80%" image={item.img} />
                    <CardContent
                      className="card-shadow"
                      sx={{
                        width: '75%',
                        backgroundColor: '#fff',
                        transform: 'translateY(-52%)',
                        margin: 'auto',
                        pl: '20px'
                      }}>
                      <p className="story-title margin-tb-5">{item.name}</p>
                      <p className="story-desc">{item.designation}</p>
                      <CardActions disableSpacing sx={{ p: '0' }}>
                        <IconButton aria-label="twitter" sx={{ p: '0' }}>
                          <img src="/images/general/twitter.svg" />
                        </IconButton>
                        <IconButton aria-label="linkedin" sx={{ p: '0', pl: '10px' }}>
                          <img src="/images/general/linkedin.svg" />
                        </IconButton>
                      </CardActions>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
      <Container sx={{ p: '100px 0' }}>
        <h2 className="section-title text-align-center">Founders</h2>
        <Box sx={{ display: { xs: 'block', md: 'flex' }, m: '0 4rem' }}>
          <Grid container spacing={4} sx={{ pb: '70px' }}>
            {foundersConst2.map((item: any) => (
              <Grid item xs={12} sm={6} md={4} sx={{ maxHeight: '80%' }}>
                <Card
                  sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none!important'
                  }}>
                  <CardMedia component="img" height="100%" image={item.img} />
                  <CardContent
                    sx={{
                      width: '75%',
                      backgroundColor: '#fff',
                      transform: 'translateY(-52%)',
                      margin: 'auto',
                      pl: '20px'
                    }}
                    className="card-shadow">
                    <p className="story-title margin-tb-5">{item.name}</p>
                    <p className="story-desc">{item.designation}</p>
                    <CardActions disableSpacing sx={{ p: '0' }}>
                      <IconButton aria-label="twitter" sx={{ p: '0' }}>
                        <img src="/images/general/twitter.svg" />
                      </IconButton>
                      <IconButton aria-label="linkedin" sx={{ p: '0', pl: '10px' }}>
                        <img src="/images/general/linkedin.svg" />
                      </IconButton>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container> */}
    </div>
  )
}

export default About
