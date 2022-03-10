import { makeStyles } from '@material-ui/core/styles'

const technologyStyles = makeStyles(theme => {
  return {
    root: {
      '& .container-padding': {
        paddingTop: '80px',
        paddingBottom: '80px'
      },
      '& .section-outer-wrapper': {
        '& .section-box': {
          alignSelf: 'center',

          '&.right-section': {
            [theme.breakpoints.up('md')]: {
              paddingLeft: '3rem'
            }
          },
          '&.left-section': {
            [theme.breakpoints.up('md')]: {
              paddingRight: '3rem'
            }
          }
        },
        [theme.breakpoints.up('md')]: {
          display: 'flex'
        },
        [theme.breakpoints.between('sm', 960)]: {
          '& .section-img img': {
            width: '60%'
          }
        },
        [theme.breakpoints.between('xs', 'sm')]: {
          '& .section-img img': {
            width: '90%'
          },
          '& .section-img': {
            textAlign: 'center',
            marginBottom: '70px'
          },
          '& .left-section': {
            order: 1
          },
          flexDirection: 'column',
          display: 'flex'
        }
      }
    }
  }
})

export default technologyStyles
