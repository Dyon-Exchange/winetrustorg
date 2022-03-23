import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  InputAdornment,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import { RoutesPath } from '../../constants'
import { useNavigate } from 'react-router-dom'
import './Homepage.css'
import { wtProblemsConst } from './WtProblemsConst'
import { TextField } from '@material-ui/core'
import BootstrapBlueBtn from 'components/atoms/buttons/BootStrapBlueBtn'
import homePageStyles from './HomePageStyle'

const Homepage = () => {
  const classes = homePageStyles()
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
          <div className="banner-img"></div>
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
            <Box className={classes.homeTopBlock}>
              <Typography variant="h1" className="top-heading">
                The most secure way to own and store Fine Wine & Spirits
              </Typography>

              <BootstrapBlueBtn
                variant="contained"
                disableRipple
                size="small"
                endIcon={<Avatar src={'/images/general/arrow-right-white.svg'} />}
                onClick={() => {
                  navigate(RoutesPath.SECURITY)
                }}>
                Learn More
              </BootstrapBlueBtn>
              <Box sx={{ marginTop: '34px', position: 'relative' }}>
                <Box className="search-heading">Find a Token or Product:</Box>
                <TextField
                  id="outlined-start-adornment"
                  placeholder="Enter your token ID or product name to search"
                  value={name}
                  onChange={e => {
                    setName(e.target.value)
                  }}
                  onKeyDown={handleKeyDown}
                  className="search-bar"
                  InputProps={{
                    style: {
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
          </Box>
        </Container>
      </div>
      <Container className={classes.revolutionContainer}>
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
      </Container>

      <Box sx={{ background: '#f9fcff' }}>
        <Container className={classes.gridContiner}>
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
          <Grid container spacing={4} sx={{ p: '70px 0', justifyContent: 'center' }}>
            {wtProblemsConst.map((item: any) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
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
