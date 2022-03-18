import { makeStyles } from '@material-ui/core/styles'

const warehousePartnerStyles = makeStyles(theme => {
  return {
    root: {
      '& .container': {
        paddingTop: '60px',
        paddingBottom: '80px'
      },
      '& .partners-outer': {
        display: 'block',
        paddingBottom: '4%',
        marginTop: '20px',
        '& .partners-desc': {
          '& h2': {
            marginTop: 0
          }
        }
      },

      [theme.breakpoints.between('xs', 'sm')]: {
        '& .partners-outer': {
          '& .mobile-title': {
            display: 'block'
          },
          '& .web-title': {
            display: 'none'
          },
          '& .partners-img': {
            width: '100%'
          },
          '& .partners-desc': {
            marginTop: '20px',
            width: '100%'
          }
        },
        '& div.container > .partners-outer:nth-of-type(even)': {
          '& .partners-desc': {
            paddingRight: 0
          }
        },
        '& div.container > .partners-outer:nth-of-type(odd)': {
          '& .partners-desc': {
            paddingLeft: 0
          }
        }
      },
      [theme.breakpoints.up('md')]: {
        '& .partners-outer': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '60px',
          '& .web-title': {
            display: 'block'
          },
          '& .mobile-title': {
            display: 'none'
          },
          '& .partners-img': {
            width: '50%'
          },
          '& .partners-desc': {
            width: '50%'
          }
        },
        '& div.container > .partners-outer:nth-of-type(even)': {
          flexDirection: 'row-reverse',
          '& .partners-desc': {
            paddingRight: '50px'
          }
        },
        '& div.container > .partners-outer:nth-of-type(odd)': {
          '& .partners-desc': {
            paddingLeft: '50px'
          }
        }
      }
    }
  }
})

export default warehousePartnerStyles
