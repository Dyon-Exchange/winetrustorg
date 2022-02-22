import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
import './Header.css'
import { useLocation } from 'react-router-dom'
import ProfileSetting from '../ProfileSetting/ProfileSetting'

import { HeaderMenu } from '../../constants'

const settings = ['Profile', 'Account', 'Connect to MetaMask', 'Redeem Token', 'Dashboard', 'Logout']

const Header = () => {
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const supportNetwork = ['0x4','0x1']
  const [walletaddress, setwalletaddress] = useState();
  const [chainid, setchainid] = useState();
  const [isconnected, setisconnected] = useState(false);
  const [warned, setwarned] = useState(false);
  const [showprofile, setshowprofile] = useState(false);

  useEffect(() => {
    if (window.ethereum !== undefined && !warned) {
      window.ethereum.on('chainChanged', () => {
            connectMetaMask()
      })
    }
  }, [walletaddress,chainid])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
    console.log(`OpenNavMenu ${event.currentTarget}`)
  }

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
    console.log(`OpenUserMenu ${event.currentTarget}`)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
    console.log(`CloseNavMenu`)
  }

  const handleCloseUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(null)
    const { curSetting } = event.currentTarget.dataset
    const id  = event.currentTarget.dataset.id
    console.log(`${curSetting} ${id}`)
    //temporary logic check
    if(curSetting === "Connect to MetaMask") {
      console.log("connect to metamask")
      connectMetaMask();
    }
    if(curSetting === "Profile") {
      console.log("User Profile")
      //make sure that user is connected to Metamask otherwise warn
      if(!isconnected) {
        alert(`Please connect to Metamask in order to create or edit your profile`);
      }
      else {
        //render ProfileSetting component to a new page
        setshowprofile(true);
        
      }
    }
  }

  async function connectMetaMask() {
    
    const chainId = await window.ethereum.request({ method: 'eth_chainId' })
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    })
    //const selectedAddress = await window.ethereum.request({method: 'eth_selectedAddress'});
    console.log(chainId, supportNetwork, supportNetwork.includes(chainId))
    //check if connected to the supported network
    if (supportNetwork.includes(chainId)) {
      await setwalletaddress(accounts[0]);
      await setchainid(chainId)
      await setisconnected(true);
      console.log(`Connected with ${walletaddress} on ${chainid} ${isconnected}`)
      
    } else {
      await setisconnected(false);
      await setwarned(true)
      alert(`Please connect to either Ethereum or Rinkeby ${chainid} ${isconnected}`)
    }
  }

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
              {settings.map( (setting, index: any) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} data-cur-setting={setting} id={index}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        {
            showprofile && <ProfileSetting />
        }
        
      </Container>
    </AppBar>
  )
}
export default Header
