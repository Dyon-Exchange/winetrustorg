import { makeStyles } from '@material-ui/core/styles'

const assetListingStyle = makeStyles({
  root: {
    '& .MuiDataGrid-row': {
      border: '1px solid rgba(224, 224, 224, 1)',
      marginTop: '8px',
      borderRadius: '6px',
      width: 'calc(100% - 6px)'
    },
    '& .MuiDataGrid-columnHeaders': {
      width: 'calc(100% - 1px)',
      borderRadius: '6px'
    },
    '& .MuiDataGrid-columnHeaderTitleContainer': {
      justifyContent: 'normal!important'
    }
  },
  resultFoundDiv: {
    background: '#e2e8f0',
    padding: '12px 18px',
    marginBottom: '30px',

    '& span': {
      marginLeft: '10px'
    }
  }
})

export default assetListingStyle
