import { makeStyles } from '@material-ui/core/styles'

const customStyles = makeStyles(theme => {
  return {
    root: {
      '& .asset-container': {
        paddingTop: '100px',
        paddingBottom: '100px'
      },
      '& .asset-container.loading': {
        paddingTop: 'calc(100vh - 415px)'
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
          maxWidth: '100%'
        },
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        maxWidth: '92%'
      },
      '& .img-outer': {
        width: '40%',
        textAlign: 'center',
        maxHeight: '450px',
        marginBottom: '38px',
        '& img': {
          maxHeight: '100%',
          maxWidth: '100%',
          paddingTop: '10px'
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
