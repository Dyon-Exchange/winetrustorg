import { makeStyles } from '@material-ui/core/styles'

const contactUsStyles = makeStyles(theme => {
  return {
    root: {
      '& .semi-bold': {
        fontWeight: 600
      },

      '& .card-shadow': {
        boxShadow: '1px 0px 10px 3px rgb(7 35 41 / 3%)'
      },

      '& .offices-grid': {
        padding: '70px 0',
        justifyContent: 'center',

        '& .MuiCard-root': {
          minHeight: '250px'
        },

        '& .MuiCardContent-root': {
          padding: '1.5rem 3rem'
        }
      },
      '& .contact-for-grid': {
        height: '120px',
        marginBottom: '70px',

        '& .grid-item-box': {
          display: 'flex',
          paddingLeft: '10px',
          alignItems: 'center'
        },
        '& .divider-outer': {
          alignSelf: 'center'
        },
        '& .MuiDivider-root': {
          height: '100%'
        }
      },
      '& .contact-form-outer': {
        margin: '5rem 0',

        '& .contact-form': {
          display: 'block'
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
      },
      '& .mobile-divider': {
        display: 'none'
      },
      '& .web-divider': {
        display: 'none'
      },
      '& .grid-item': {
        padding: '0 20px'
      },
      [theme.breakpoints.between('xs', 900)]: {
        '& .mobile-divider': {
          display: 'block'
        },
        '& .contact-for-grid': {
          height: 'auto',
          '& .grid-item-box': {
            padding: '20px 0'
          }
        },
        '& .contact-form-outer': {
          padding: '1rem 1rem 5rem 1rem'
        }
      },

      [theme.breakpoints.up(900)]: {
        '& .space-bt-flex': {
          display: 'flex',
          justifyContent: 'space-between'
        },
        '& .web-divider': {
          display: 'block'
        },
        '& .contact-form-outer': {
          padding: '2.5rem 8rem 5rem 8rem'
        },
        '& .field-wrapper': {
          width: '46%'
        },
        '& .divider-outer': {
          height: '50%'
        }
      }
    }
  }
})

export default contactUsStyles
