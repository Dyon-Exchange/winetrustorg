import { makeStyles } from '@material-ui/core/styles'

const ownershipStyles = makeStyles(theme => {
  return {
    root: {
      '& .container-padding': {
        paddingTop: '80px',
        paddingBottom: '80px'
      },
      '& .section-outer-wrapper': {
        '& .section-box': {
          alignSelf: 'center',
          [theme.breakpoints.up('md')]: {
            paddingLeft: '3rem'
          },
          [theme.breakpoints.between('xs', 'sm')]: {
            '& h2': {
              textAlign: 'center'
            }
          }
        },
        [theme.breakpoints.up('md')]: {
          display: 'flex'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
          '& .wt-ownership-img img': {
            width: '90%'
          }
        },
        [theme.breakpoints.between('sm', 960)]: {
          '& .wt-ownership-img img': {
            width: '60%'
          }
        },
        [theme.breakpoints.between('xs', 'md')]: {
          '& .wt-ownership-img ': {
            textAlign: 'center',
            marginBottom: '70px'
          }
        }
      },
      '& .grid-container': {
        paddingBottom: '70px',
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

export default ownershipStyles
