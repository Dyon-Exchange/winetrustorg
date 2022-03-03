import { makeStyles } from '@material-ui/core/styles'

const homePageStyles = makeStyles(theme => {
  return {
    homeTopBlock: {
      width: '60%',
      textAlign: 'center',
      margin: '0 auto',

      '& .top-heading': {
        marginBottom: '1.5rem',
        color: '#fff',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
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
    },

    revolutionContainer: {
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      },
      '& .wt-revolution-desc': {
        alignSelf: 'center',
        paddingLeft: '78px'
      }
    }
  }
})

export default homePageStyles
