import { styled } from '@material-ui/styles'
import { DataGrid } from '@mui/x-data-grid'

// min height and max height takes into account the top bar
const StyledDataGrid = styled(DataGrid)({
  border: 'none',
  minHeight: '300px',
  height: 'calc(100vh - 200px)',
  lineHeight: '62px!important',

  '& .MuiDataGrid-columnHeaders': {
    background: '#e2e8f0'
  },
  '& .MuiDataGrid-cell': {
    'font-size': '13px',
    display: 'block!important',
    borderBottom: 'none'
  },
  '& .MuiDataGrid-iconButtonContainer, .MuiDataGrid-menuIcon': {
    display: 'none'
  },
  '& .MuiDataGrid-columnHeader:hover .MuiDataGrid-iconButtonContainer, .MuiDataGrid-columnHeader:hover .MuiDataGrid-menuIcon':
    {
      display: 'block'
    },
  '& .MuiDataGrid-columnSeparator': {
    visibility: 'hidden'
  },
  '& .MuiDataGrid-footerContainer': {
    marginTop: '-12px'
  }
})

export default StyledDataGrid
