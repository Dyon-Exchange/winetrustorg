import { makeStyles } from '@material-ui/core/styles'

const sideDrawerStyles = makeStyles(theme => {
  return {
    root: {
      flexShrink: 0,
      '&.MuiDrawer-root': {
        zIndex: 9999
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        width: 300,
        '& .MuiDrawer-paper': {
          width: 300
        }
      },
      [theme.breakpoints.up('sm')]: {
        width: 400,
        '& .MuiDrawer-paper': {
          width: 400
        }
      },
      '& .MuiList-root': {
        '& a': {
          textDecoration: 'none',
          color: '#212925',

          '& span.MuiTypography-root': {
            fontSize: '18px'
          }
        }
      },
      [theme.breakpoints.up(600)]: {
        '& .connect-wallet-btn': {
          display: 'none'
        }
      }
    }
  }
})

export default sideDrawerStyles
