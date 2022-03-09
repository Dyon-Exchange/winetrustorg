import { makeStyles } from '@material-ui/core/styles'

const bannerStyles = makeStyles(theme => {
  return {
    bannerContent: {
      width: '58%',
      [theme.breakpoints.between('xs', 600)]: {
        width: '100%'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '70%'
      }
    }
  }
})
export default bannerStyles
