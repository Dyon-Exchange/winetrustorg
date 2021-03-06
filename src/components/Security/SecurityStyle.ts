import { makeStyles } from '@material-ui/core/styles'

const securityStyles = makeStyles(theme => {
  return {
    root: {
      '& .container-padding': {
        paddingTop: '100px',
        paddingBottom: '100px'
      },
      '& .section-container': {
        paddingTop: '50px',
        '& .section-outer-box': {
          alignSelf: 'center',
          [theme.breakpoints.up('md')]: {
            paddingRight: '2rem'
          },
          [theme.breakpoints.between('xs', 'sm')]: {
            '& h2': {
              textAlign: 'center'
            }
          }
        },
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          '& img': {
            width: '50%'
          }
        }
      },
      '& .grid-container': {
        '& .card': {
          borderRadius: '22px',
          minHeight: '338px',
          boxShadow: '0px 10px 20px rgb(7 35 41 / 3%)',
          '& .card-content': {
            padding: '1.5rem 3rem',
            '& .card-desc': {
              fontSize: '0.875em',
              color: '#304151;',
              lineHeight: 1.8
            },
            '& .card-title': {
              fontSize: '16px',
              marginBottom: '1rem',
              fontWeight: 700
            }
          }
        }
      }
    }
  }
})

export default securityStyles
