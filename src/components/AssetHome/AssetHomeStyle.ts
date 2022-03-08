import { makeStyles } from '@material-ui/core/styles'

const customStyles = makeStyles(theme => {
  return {
    flex: {
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    sectionMargin: {
      marginTop: '4rem'
    },
    sectionPadding: {
      padding: '3rem 0'
    },
    spaceBetWeenFlex: {
      display: 'flex',
      justifyContent: 'space-between',
      '& p': {
        margin: '0.8em 0'
      }
    },
    assetDetailBox: {
      [theme.breakpoints.up('md')]: {
        width: '50%',
        marginLeft: theme.spacing(9)
      },
      '& p': {
        fontSize: '18px'
      },
      '& .heading': {
        fontWeight: 500
      }
    },
    assetDesc: {
      backgroundColor: '#e8ebeb',
      padding: '22px',
      borderRadius: '6px',
      marginBottom: theme.spacing(5)
    },
    sectionBorder: {
      borderTop: '2px solid #e9eef3'
    },
    carouselImg: {
      [theme.breakpoints.between('xs', 470)]: {
        width: '100%'
      },
      width: '92%'
    },
    bottleImgOuter: {
      width: '40%',
      textAlign: 'center',
      height: '552px',
      '& img': {
        height: '100%'
      }
    }
  }
})

export default customStyles
