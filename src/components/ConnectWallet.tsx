import { Avatar, Box, IconButton, MenuList, Tooltip } from '@mui/material'
import * as React from 'react'
import { WalletContext } from '../contexts/WalletContext'
import BootstrapBlueBtn from './atoms/buttons/BootStrapBlueBtn'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { RoutesPath } from '../constants'
import { useNavigate } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const customStyles = makeStyles({
  root: {
    '& .logged-in-btn': {
      width: 'auto!important',
      '& .profile-text': {
        marginRight: '10px',
        letterSpacing: 'initial',
        fontSize: '18px',
        color: '#212925',
        fontWeight: 400,
        fontFamily: 'Gilroy'
      }
    }
  }
})

const ConnectWallet = () => {
  const classes = customStyles()
  const { walletConnected, connectAccount, loggedIn, login, currentUserInfo } =
    React.useContext(WalletContext)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
  const [initials, setInitials] = React.useState<string>()
  const navigate = useNavigate()

  React.useEffect(() => {
    const userFirstName = currentUserInfo?.user?.firstName
    const userLastName = currentUserInfo?.user?.lastName
    let userInitials = userFirstName ? userFirstName.charAt(0) : ''
    userInitials = userInitials + (userLastName ? userLastName.charAt(0) : '')
    userInitials = userInitials ? userInitials : 'U'
    console.log(userInitials)
    setInitials(userInitials)
  }, [currentUserInfo])

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleGotoProfile = async () => {
    if (!loggedIn) {
      await login()
    }
    handleCloseUserMenu()
    navigate(RoutesPath.PROFILESETTING)
  }

  return (
    <div className={classes.root}>
      {!walletConnected ? (
        <BootstrapBlueBtn variant="contained" disableRipple size="small" onClick={connectAccount}>
          Connect Wallet
        </BootstrapBlueBtn>
      ) : (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton
              onClick={window.innerWidth > 900 ? handleOpenUserMenu : handleGotoProfile}
              sx={{ p: 0 }}
              className="logged-in-btn">
              <Box sx={{ display: { xs: 'block', sm: 'none' } }} className="profile-text">
                Profile
              </Box>

              <Avatar
                alt="Unnamed"
                src={currentUserInfo?.user?.profileImage}
                sx={{
                  background: 'linear-gradient(rgb(0, 41, 84) 0%, rgba(0, 41, 84, 0) 100%)',
                  border: '1px solid white',
                  borderRadius: '50%'
                }}>
                {initials}
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px', zIndex: '9999', position: 'absolute' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            disableScrollLock>
            <MenuList sx={{ padding: 0 }}>
              <MenuItem key={123} onClick={handleGotoProfile}>
                Profile
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      )}
    </div>
  )
}
export default ConnectWallet
