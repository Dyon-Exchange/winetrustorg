import { makeStyles } from '@material-ui/core/styles'

const assetListingStyle = makeStyles(theme => {
  return {
    root: {
      '& .container': {
        paddingTop: '150px',
        paddingBottom: '100px'
      },
      '& .MuiButton-root:hover': {
        backgroundColor: '#1565c0'
      },
      '& .view-btn': {
        color: '#fff',
        cursor: 'pointer',
        padding: '16px 29px 15px',
        margin: '10px',
        marginTop: 0,
        fontSize: '13px',
        marginLeft: 0
      },
      '& .redeem-btn': {
        cursor: 'pointer',
        padding: '12px 30px 12px',
        fontSize: '13px',
        margin: '10px',
        border: '1px solid #1483F8',
        marginTop: 0
      },
      '& .grid-container': {
        marginBottom: '30px',
        border: '1px solid rgba(224, 224, 224, 1)',
        borderRadius: '6px'
      },
      '& .asset-data': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize: '13px',
        lineHeight: '38px',
        padding: '14px'
      },
      '& .cell-heading': {
        background: '#e2e8f0',
        padding: '14px',
        fontWeight: 500
      },

      '& .MuiGrid-root>.MuiGrid-item': {
        paddingLeft: 0
      },
      '& .web-header': {
        display: 'none'
      },
      '& .result-found-div': {
        background: '#e2e8f0',
        padding: '12px 18px',
        marginBottom: '30px',

        '& span': {
          marginLeft: '10px'
        }
      },
      [theme.breakpoints.up(1200)]: {
        '& .grid-container': {
          marginBottom: '10px'
        },
        '& .mobile-header': {
          display: 'none'
        },
        '& .web-header': {
          display: 'flex',
          justifyContent: 'space-between'
        },
        '& .view-btn': {
          marginTop: '10px'
        },
        '& .redeem-btn': {
          marginTop: '10px'
        },
        '& .container': {
          paddingTop: '200px'
        }
      }
    },
    portfolioProfile: {
      '& .profile-outer': {
        textAlign: 'center',
        marginBottom: '30px',
        '& .profile-img': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10px',
          '& img': {
            width: '150px',
            height: '150px',
            objectFit: 'cover',
            borderRadius: '50%',
            marginRight: '20px'
          }
        },
        '& .address': {
          wordWrap: 'break-word'
        }
      },
      [theme.breakpoints.between('xs', 350)]: {
        '& .profile-outer': {
          textAlign: 'unset',
          '& .profile-img': {
            display: 'block!important'
          }
        }
      }
    }
  }
})

export default assetListingStyle
