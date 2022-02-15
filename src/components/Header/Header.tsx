import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import SearchProductAsset from '../SearchProductAsset'
import ConnectMetaMask from '../ConnectMetaMask'
import './Header.css'

const pages = ['Home', 'Security', 'Ownership', 'Network', 'Technology', 'About']
const settings = ['Profile', 'Account', 'Connect to MetaMask', 'Dashboard', 'Logout']

interface HeaderProps {
  screenName: React.ReactChild
}

const getHeaderInfo = (screenName: any) => {
  const headerInfo = {
    url: '/images/banners/home-banner.jpg'
  }
  switch (screenName) {
    case 'homepage':
      headerInfo.url = headerInfo.url.toString()
      break
    default:
      break
  }
  return headerInfo
}

const Header: React.FC<HeaderProps> = ({ screenName }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const headerInfo = getHeaderInfo(screenName)

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        background: `url(${headerInfo.url}) no-repeat`,
        height: '100vh',
        backgroundPosition: 'center'
      }}>
      <Container
        maxWidth="xl"
        style={{
          background: 'linear-gradient( 180deg, #002954 0%, rgba(0, 41, 84, 0) 100%)',
          padding: '20px'
        }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <img src="/logo/logo.png" alt="Wine Trust logo" className="logo-img" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}>
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="white">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <img src="/logo/logo.png" alt="Wine Trust logo" className="logo-img" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: { md: 'flex-end' },
              paddingRight: { md: '50px' }
            }}>
            {pages.map(page => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{ color: 'white', paddingRight: '30px', textTransform: 'capitalize' }}>
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" component={ConnectMetaMask}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      <div className="header-menu-desc">
        <h1>Trust and Security</h1>
        <h2>WineTrust is the most secure way to own and store fine wine & spirts today.</h2>
        <a href="/security" className="btn btn-light learn-more-btn">
          Learn More
          <span className="arrow-image"></span>
        </a>
        <a
          href="#wt-revolution"
          className="btn scroll-down position-absolute start-50 bottom-0 mb-5 text-center translate-middle-x">
          <p className="mb-2 text-white text-uppercase">
            <small>Scroll Down</small>
          </p>
          <img src="/images/general/arrow-down.svg" alt="Wine Trust Scroll Down" />
        </a>
        <SearchProductAsset></SearchProductAsset>
      </div>
    </AppBar>
  )
}
export default Header
