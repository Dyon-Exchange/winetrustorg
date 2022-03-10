import { makeStyles } from '@material-ui/core/styles'

const networkStyles = makeStyles(theme => {
  return {
    container: {
      textAlign: 'center',
      paddingTop: '100px',
      paddingBottom: '100px',
      '& #dataMap': {
        width: '100%',
        height: '625px',
        position: 'relative',
        marginBottom: '10px'
      },
      '& .datamap-text': {
        fontSize: '18px',
        color: '#5C6B79',
        width: '64%',
        textAlign: 'center',
        margin: 'auto',
        [theme.breakpoints.between('xs', 'sm')]: {
          width: '100%',
          fontSize: '16px'
        }
      },
      '& .semi-bold': {
        fontWeight: '600'
      },
      [theme.breakpoints.between('xs', 991)]: {
        '& #dataMap': {
          height: '250px'
        }
      }
    }
  }
})

export default networkStyles
