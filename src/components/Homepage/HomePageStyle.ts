import { makeStyles } from '@material-ui/core/styles'

const homePageStyles = makeStyles(theme => {
  return {
    spaceBetWeenFlex: {
      [theme.breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    },

    fontWeight600: {
      fontWeight: 600
    },

    cardShadow: {
      boxShadow: '1px 0px 10px 3px rgb(7 35 41 / 3%)'
    },

    officesGrid: {
      padding: '70px 0',
      justifyContent: 'center',

      '& .MuiCard-root': {
        minHeight: '250px'
      },

      '& .MuiCardContent-root': {
        padding: '1.5rem 3rem'
      }
    },

    contactForGrid: {
      height: '120px',
      marginBottom: '70px',

      '& .grid-item-box': {
        display: 'flex',
        paddingLeft: '40px',
        alignItems: 'center'
      },

      '& .MuiDivider-root': {
        height: '50%',
        alignSelf: 'center'
      }
    },

    homeTopBlock: {
      width: '60%',
      textAlign: 'center',
      margin: '0 auto',

      '& .top-heading': {
        marginBottom: '1.5rem',
        fontFamily: '-apple-system',
        fontWeight: '100',
        fontSize: '3.1rem',
        color: '#fff',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },

      '& .learn-more-btn': {
        borderRadius: '5px',
        fontFamily: 'Gilroy',
        fontWeight: '700',
        fontSize: '1rem',
        padding: '0.5rem 1.5rem'
      },
      '& .search-heading': {
        color: '#fff',
        float: 'left',
        marginLeft: '12px'
      },

      '& .search-bar': {
        background: '#fff',
        width: '100%',
        border: '1px solid #fff',
        padding: '0 12px',
        borderRadius: '5px'
      },
      '& .MuiAvatar-root': {
        width: '21px',
        height: '9px'
      }
    }
  }
})

export default homePageStyles
