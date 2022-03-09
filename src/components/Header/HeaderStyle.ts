import { makeStyles } from '@material-ui/core/styles'

const headerStyles = makeStyles(theme => {
  return {
    appBar: {
      backgroundColor: 'transparent',
      backgroundPosition: 'center',
      '& .menu-items': {
        flexGrow: 1
      },
      '& .menu-items-btn': {
        color: '#fff',
        display: 'block',
        paddingRight: '30px',
        textTransform: 'capitalize'
      },
      [theme.breakpoints.up('md')]: {
        '& .menu-items': {
          display: 'flex',
          justifyContent: 'flex-end',
          paddingRight: '30px'
        },
        '& .mobile-menu': {
          display: 'none'
        }
      },
      [theme.breakpoints.between('md', 1200)]: {
        '& .menu-items-btn': {
          paddingRight: '20px'
        }
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        '& .menu-items': {
          display: 'none'
        },
        '& .mobile-menu': {
          marginLeft: 'auto',
          display: 'flex'
        }
      },
      [theme.breakpoints.between('xs', 600)]: {
        '& .connect-wallet-btn': {
          display: 'none'
        }
      }
    }
  }
})

export default headerStyles
