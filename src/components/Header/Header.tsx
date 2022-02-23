import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
// import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
// import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import './Header.css'
import { useLocation } from 'react-router-dom'

import { HeaderMenu } from '../../constants'
import BootstrapBlueBtn from './../atoms/buttons/BootStrapBlueBtn'

// const settings = ['Profile', 'Account', 'Connect to MetaMask', 'Dashboard', 'Logout']

const Header = () => {
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget)
  // }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null)
  // }
  const HeaderBgColor = () => {
    const location = useLocation()
    const path = location.pathname.split('/')[1]
    return path + '-header'
  }

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: 'transparent',
        backgroundPosition: 'center'
      }}>
      <Container
        style={{
          background: 'linear-gradient( 180deg, #002954 0%, rgba(0, 41, 84, 0) 100%)',
          zIndex: '1000',
          position: 'absolute',
          width: '100%',
          maxWidth: '100%'
        }}
        className={HeaderBgColor()}>
        <Toolbar disableGutters style={{ maxWidth: '88%', margin: 'auto' }}>
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
              {HeaderMenu.map(menu => (
                <MenuItem key={menu.menuName}>
                  <Typography textAlign="center" color="white">
                    <Link to={menu.url}>{menu.menuName}</Link>
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
            {HeaderMenu.map(menu => (
              <Button
                onClick={() => navigate(menu.url)}
                key={menu.menuName}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{ color: 'white', paddingRight: '30px', textTransform: 'capitalize' }}>
                {menu.menuName}
              </Button>
            ))}
          </Box>
          <BootstrapBlueBtn
            variant="contained"
            disableRipple
            size="medium"
            sx={{ p: '6px 25px!important' }}>
            Log In
          </BootstrapBlueBtn>
          {/* <Box sx={{ flexGrow: 0 }}>
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
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
