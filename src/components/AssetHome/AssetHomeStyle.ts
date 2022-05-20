import { makeStyles } from '@material-ui/core/styles'

const customStyles = makeStyles(theme => {
  return {
    root: {
      '& .image-gallery-icon': {
        transform: 'translateY(-50%) scale(0.4)'
      },
      '& .asset-container': {
        paddingTop: '100px',
        paddingBottom: '100px',
        maxWidth: '1350px'
      },
      '& .open-sea-img': {
        height: '32px',
        width: '32px',
        marginRight: '10px'
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
      '& .image-gallery-thumbnail .image-gallery-thumbnail-image': {
        width: 'auto',
        maxHeight: '150px'
      },
      '& .image-gallery-content.left .image-gallery-slide .image-gallery-image': {
        maxHeight: '465px'
      },
      '& .img-outer': {
        width: '40%',
        textAlign: 'center',
        marginBottom: '38px',
        '& img': {
          maxWidth: '100%'
        },
        [theme.breakpoints.between('xs', 'sm')]: {
          width: '100%'
        }
      },
      [theme.breakpoints.up('md')]: {
        '& .flex': {
          display: 'flex',
          justifyContent: 'space-between'
        },
        '& .asset-spec-wrapper': {
          width: '50%',
          marginLeft: theme.spacing(9)
        },

        '& .buy-on-opensea': {
          padding: '10px 25px'
        }
      }
    }
  }
})

export default customStyles
