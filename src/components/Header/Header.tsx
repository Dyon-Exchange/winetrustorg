import * as React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@material-ui/core/Button'
import { HeaderMenu, RoutesPath } from '../../constants'
import './Header.css'
import headerStyles from './HeaderStyle'
import SideDrawer from 'components/SideDrawer/SideDrawer'
import ConnectWallet from 'components/ConnectWallet'

const Header = () => {
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(false)

  const handleOpenNavMenu = () => {
    setAnchorElNav(true)
  }

  const handleCloseNavMenu = (val: any) => {
    setAnchorElNav(val)
  }

  const classes = headerStyles()
  return (
    <AppBar position="static" className={classes.appBar}>
      <Container
        style={{
          backgroundColor: '#002954',
          position: 'absolute',
          width: '100%',
          maxWidth: '100%'
        }}>
        <Toolbar disableGutters style={{ margin: 'auto', zIndex: '9999' }}>
          <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: 'flex' }}>
            <Link to={RoutesPath.HOMEPAGE}>
              <img src="/logo/logo.png" alt="Wine Trust logo" className="logo-img" />
            </Link>
          </Typography>
          <Box className="menu-items">
            {HeaderMenu.filter(menu => menu.isDesktopVis).map(menu => (
              <Button
                onClick={() => navigate(menu.url)}
                key={menu.menuName}
                className="menu-items-btn">
                {menu.menuName}
              </Button>
            ))}
            <ConnectWallet />
          </Box>

          <Box className="mobile-menu">
            <Box className="connect-wallet-btn">
              <ConnectWallet />
            </Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit">
              <img src="/images/general/menu.svg" alt="WineTrust" />
            </IconButton>
            <SideDrawer sendDataToParent={handleCloseNavMenu}>{anchorElNav}</SideDrawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
