import { styled } from '@material-ui/styles'
import { DataGrid } from '@mui/x-data-grid'

// min height and max height takes into account the top bar
const StyledDataGrid = styled(DataGrid)({
  border: 'none',
  minHeight: '225px',
  height: 'calc(100vh - 300px)',
  lineHeight: '51px',

  '& .MuiDataGrid-columnHeaders': {
    background: '#e2e8f0'
  },
  '& .MuiDataGrid-cell': {
    'font-size': '13px',
    display: 'block',
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
  }
})

export default StyledDataGrid
