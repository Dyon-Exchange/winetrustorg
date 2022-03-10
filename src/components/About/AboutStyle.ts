import { makeStyles } from '@material-ui/core/styles'

const aboutStyles = makeStyles(theme => {
  return {
    root: {
      '& .container-padding': {
        paddingTop: '80px',
        paddingBottom: '80px',
        '& .section-outer': {
          [theme.breakpoints.up('md')]: {
            width: '52%'
          }
        }
      }
    }
  }
})

export default aboutStyles
