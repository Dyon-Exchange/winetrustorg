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
      }
    }
  }
})

export default securityStyles
