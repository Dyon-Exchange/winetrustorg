import { makeStyles } from '@material-ui/core/styles'

const contactUsStyles = makeStyles(theme => {
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

    contactFormOuter: {
      [theme.breakpoints.up('md')]: {
        padding: '2.5rem 8rem 5rem 8rem'
      },
      margin: '5rem 0',

      '& .contactForm': {
        display: 'block'
      },

      '& .fieldWrapper': {
        [theme.breakpoints.up('md')]: {
          width: '46%'
        }
      },

      '& #first-name': {
        color: '#0896CC'
      },

      '& .MuiFormLabel-root': {
        color: '#212925'
      },

      '& .MuiTextField-root': {
        width: '100%',
        marginTop: '2%',
        marginBottom: '6%'
      },

      '& textarea': {
        width: '100%',
        marginTop: '2%',
        height: '100px'
      },

      '& .MuiCheckbox-root': {
        padding: '0',
        paddingRight: '6px',
        verticalAlign: 'sub'
      },
      '& .checkbox-outer': {
        margin: '8px 0 24px 0'
      },
      '& .MuiAvatar-root': {
        width: '21px',
        height: '9px'
      }
    }
  }
})

export default contactUsStyles
