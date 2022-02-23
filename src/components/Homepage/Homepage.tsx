import { Box, Card, CardContent, Container, Grid, InputAdornment, Typography } from '@mui/material'
import React, { useState } from 'react'
import { RoutesPath } from '../../constants'
import { Link, useNavigate } from 'react-router-dom'
import './Homepage.css'
import { wtProblemsConst } from './WtProblemsConst'
import { TextField } from '@material-ui/core'

const Homepage = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  function handleKeyDown(e: any) {
    if (e.keyCode === 13) {
      e.preventDefault()
      search()
    }
  }
  function search() {
    navigate(`search/${name}`)
  }
  return (
    <div>
      <div className="banner-section">
        <div className="banner-div">
          <img className="banner-img" src="/images/banners/home-banner.jpg" alt="Wine Trust Home" />
        </div>
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
            <Box sx={{ width: '58%', textAlign: 'center', m: '0 auto' }}>
              <Typography variant="h2" sx={{ mb: '1.5rem', fontSize: '4.1rem', color: '#fff' }}>
                Trust and Security
              </Typography>
              <Typography
                component="div"
                sx={{
                  mb: '1.5rem',
                  fontSize: '1.5rem',
                  color: '#c9d4df',
                  width: '88%',
                  ml: 'auto',
                  mr: 'auto'
                }}>
                WineTrust is the most secure way to own and store fine wine & spirits today.
              </Typography>
              <Link to={RoutesPath.SECURITY} className="btn btn-light learn-more-btn">
                Learn More
                <span className="arrow-image"></span>
              </Link>
              <Box
                style={{
                  display: 'flex',
                  columnGap: '10px',
                  alignContent: 'center',
                  justifyContent: 'space-between',
                  border: '1px solid white',
                  color: 'white',
                  borderRadius: '5px',
                  marginTop: '6%'
                }}>
                <Typography
                  component="div"
                  style={{
                    marginTop: 'auto',
                    borderRadius: '5px 0px 0px 5px',
                    marginBottom: 'auto',
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(60px)',
                    overflow: 'hidden',
                    margin: '0px'
                  }}>
                  <div style={{ padding: '10px 20px' }}>
                    Enter the name of a product or your token ID
                  </div>
                </Typography>
                <TextField
                  id="outlined-start-adornment"
                  value={name}
                  onChange={e => {
                    setName(e.target.value)
                  }}
                  onKeyDown={handleKeyDown}
                  style={{ color: 'white', width: '42%' }}
                  InputProps={{
                    style: {
                      color: 'white',
                      borderRadius: '5px',
                      border: 'none',
                      padding: '5px 0px'
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <img
                          src="/images/general/search-icon.svg"
                          alt="WineTrust Search"
                          onClick={search}
                          style={{ cursor: 'pointer', paddingRight: '16px' }}
                        />
                      </InputAdornment>
                    ),
                    disableUnderline: true
                  }}
                />
              </Box>
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
      </div>
      <div id="wt-revolution" className="wt-revolution">
        <div className="wt-revolution-img">
          <img src="/images/homepage/revolution.png" alt="wt-revolution-img"></img>
        </div>
        <div className="wt-revolution-desc">
          <h2 className="section-title">A Trust Revolution</h2>
          <ul>
            <li>
              WineTrust is an independent and completely secure wine custodian, backed by public
              blockchain technology.
            </li>
            <li>
              WineTrust is a network of top-quality warehouses in multiple locations around the
              world. WineTrust stores the highest quality wines and spirits in perfect physical and
              digital condition.
            </li>
            <li>
              WineTrust is independent of any merchant. It is governed and run jointly by a
              professional management team and its users, all of whom share in its economic
              benefits.
            </li>
          </ul>
        </div>
      </div>

      <Box sx={{ background: '#f9fcff' }}>
        <Container sx={{ p: '100px 0' }}>
          <Box sx={{ width: '76%', textAlign: 'center', margin: 'auto' }}>
            <h2 className="section-title text-align-center">
              WineTrust addresses the most important problems facing fine wine & spirits owners
            </h2>
            <p className="sub-title">
              WineTrust is the first full service fine wine & spirits custodian backed by public
              ledger blockchain technology. Legal ownership is recorded on an immutable public
              blockchain ledger. Owners no longer must accept a merchant’s or exchange’s assurances
              over what they own.
            </p>
          </Box>
          <Grid
            container
            spacing={4}
            sx={{ p: '70px 0', justifyContent: 'center', maxWidth: '1100px' }}>
            {wtProblemsConst.map((item: any) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className="card-shadow border-radius-22" sx={{ minHeight: '250px' }}>
                  <CardContent sx={{ p: '1.5rem 3rem', textAlign: 'center' }}>
                    <img src={item.icon} alt={item.desc} />
                    <p className="story-desc">{item.desc}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default Homepage
