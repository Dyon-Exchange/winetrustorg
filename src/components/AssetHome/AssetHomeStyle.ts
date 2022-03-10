import { makeStyles } from '@material-ui/core/styles'

const customStyles = makeStyles(theme => {
  return {
    root: {
      '& .asset-container': {
        paddingTop: '100px',
        paddingBottom: '100px'
      },
      '& .asset-spec-wrapper': {
        '& .MuiBox-root': {
          display: 'flex',
          justifyContent: 'space-between',
          '& p': {
            margin: '0.8em 0'
          },
          '& p:first-child': {
            fontWeight: 500,
            width: '234px',
            textAlign: 'left'
          },
          '& p:last-child': {
            textAlign: 'right'
          }
        }
      },
      '& .sectionMargin': {
        marginTop: '4rem'
      },
      '& .section-padding': {
        padding: '3rem 0'
      },
      '& .asset-desc': {
        backgroundColor: '#e8ebeb',
        padding: '22px',
        borderRadius: '6px',
        marginBottom: theme.spacing(5)
      },
      '& .section-border': {
        borderTop: '2px solid #e9eef3'
      },
      '& .carousel-img': {
        [theme.breakpoints.between('xs', 470)]: {
          width: '100%'
        },
        width: '92%'
      },
      '& .img-outer': {
        width: '40%',
        textAlign: 'center',
        height: '552px',
        marginBottom: '38px',
        '& img': {
          height: '100%'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
          width: '100%'
        }
      },
      [theme.breakpoints.up('md')]: {
        '& .flex': {
          display: 'flex'
        },
        '& .asset-spec-wrapper': {
          width: '50%',
          marginLeft: theme.spacing(9)
        }
      }
    }
  }
})

export default customStyles
