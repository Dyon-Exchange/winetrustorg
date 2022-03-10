import { makeStyles } from '@material-ui/core/styles'

const bannerStyles = makeStyles(theme => {
  return {
    bannerContent: {
      width: '58%',
      '& .banner-desc': {
        marginBottom: '1.5rem',
        color: '#c9d4df'
      },
      [theme.breakpoints.between('xs', 600)]: {
        width: '100%'
      },
      [theme.breakpoints.between('sm', 'md')]: {
        width: '70%'
      },
      [theme.breakpoints.between('xs', 'sm')]: {
        '& .banner-desc': {
          fontSize: '18px',
          lineHeight: '30px'
        }
      },
      [theme.breakpoints.up('md')]: {
        '& .banner-desc': {
          fontSize: '24px',
          lineHeight: '40px'
        }
      }
    }
  }
})
export default bannerStyles
