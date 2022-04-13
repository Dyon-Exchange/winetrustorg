import { makeStyles } from '@material-ui/core/styles'

const homePageStyles = makeStyles(theme => {
  return {
    homeTopBlock: {
      width: '60%',
      textAlign: 'center',
      margin: '0 auto',
      '& .learn-more-btn': {
        marginLeft: '8px'
      },
      [theme.breakpoints.between('xs', 700)]: {
        width: '100%'
      },
      '& .top-heading': {
        marginBottom: '1.5rem',
        color: '#fff',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        transitionDuration: '.4s',
        transitionTimingFunction: 'ease'
      },
      '& .search-heading': {
        color: '#fff',
        float: 'left',
        marginLeft: '12px'
      },

      '& .search-bar': {
        background: '#fff',
        width: '94%',
        border: '1px solid #fff',
        padding: '0 12px',
        borderRadius: '5px'
      },
      '& .MuiAvatar-root': {
        width: '21px',
        height: '9px'
      }
    },

    revolutionContainer: {
      '& .wt-revolution-desc': {
        alignSelf: 'center'
      },
      [theme.breakpoints.up('md')]: {
        display: 'flex!important',
        paddingLeft: '78px!important',
        '& .wt-revolution-desc': {
          marginLeft: '70px'
        }
      },
      [theme.breakpoints.between('xs', 'md')]: {
        '& .wt-revolution-desc': {
          marginTop: '40px'
        },
        '& .section-title, .wt-revolution-img': {
          textAlign: 'center'
        }
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        '& .wt-revolution-img img': {
          width: '90%'
        }
      },
      [theme.breakpoints.between('sm', 960)]: {
        '& .wt-revolution-img img': {
          width: '60%'
        }
      }
    },
    gridContiner: {
      paddingTop: '100px',
      paddingBottom: '100px'
    }
  }
})

export default homePageStyles
