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
        padding: '16px 30px 15px',
        margin: '10px',
        marginTop: 0
      },
      '& .grid-container': {
        marginBottom: '30px',
        justifyContent: 'flex-end',
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
      '& .asset-data:last-child': {
        textOverflow: 'unset'
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
          marginBottom: '10px',
          justifyContent: 'unset'
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
    }
  }
})

export default assetListingStyle
