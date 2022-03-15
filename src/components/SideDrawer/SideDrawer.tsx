import { Box, Drawer } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItemText from '@mui/material/ListItemText'
import { HeaderMenu } from '../../constants'
import { NavLink } from 'react-router-dom'
import sideDrawerStyles from './SideDrawerStyle'
import ConnectWallet from 'components/ConnectWallet'

interface Props {
  children: boolean
  sendDataToParent: any
}

const SideDrawer: React.FC<Props> = ({ children, sendDataToParent }) => {
  const classes = sideDrawerStyles()
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start'
  }))

  const theme = useTheme()
  const [open, setOpen] = useState(children)

  useEffect(() => {
    setOpen(children)
  }, [children])

  const handleDrawerClose = () => {
    setOpen(false)
    sendDataToParent(false)
  }

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      className={classes.root}
      open={open}
      onBackdropClick={() => handleDrawerClose()}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          Back {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <Box className="connect-wallet-btn" onClick={handleDrawerClose}>
          <ConnectWallet />
        </Box>
        {HeaderMenu.map(menu => (
          <NavLink to={menu.url} onClick={handleDrawerClose}>
            <ListItem button key={menu.menuName}>
              <ListItemText primary={menu.menuName} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Drawer>
  )
}

export default SideDrawer
