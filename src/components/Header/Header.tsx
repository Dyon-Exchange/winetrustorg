import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

import { HeaderMenu, RoutesPath } from '../../constants'

import { WalletContext } from '../../contexts/WalletContext'
import BootstrapBlueBtn from '../atoms/buttons/BootStrapBlueBtn'

import './Header.css'

const Header = () => {
  const { walletConnected, connectAccount } = React.useContext(WalletContext)
  const navigate = useNavigate()

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

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: 'transparent',
        backgroundPosition: 'center'
      }}>
      <Container
        style={{
          backgroundColor: '#002954',

          position: 'absolute',
          width: '100%',
          maxWidth: '100%'
        }}>
        <Toolbar disableGutters style={{ maxWidth: '88%', margin: 'auto', zIndex: '9999' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
            <Link to={RoutesPath.HOMEPAGE}>
              <img src="/logo/logo.png" alt="Wine Trust logo" className="logo-img" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <img src="/images/general/menu.svg" />
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
                display: { xs: 'block', md: 'none' },
                zIndex: '9999'
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
              paddingRight: { md: '30px' }
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
          {!walletConnected ? (
            <BootstrapBlueBtn
              variant="contained"
              disableRipple
              size="medium"
              style={{ borderRadius: '5px' }}
              sx={{ p: '6px 25px!important' }}
              onClick={connectAccount}>
              Connect Wallet
            </BootstrapBlueBtn>
          ) : (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Unnamed"
                    src="/static/images/avatar/2.jpg"
                    sx={{
                      background: 'linear-gradient(rgb(0, 41, 84) 0%, rgba(0, 41, 84, 0) 100%)',
                      border: '1px solid white',
                      borderRadius: '50%'
                    }}
                  />
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
                <MenuItem key={123} onClick={() => navigate(RoutesPath.PROFILESETTING)}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
