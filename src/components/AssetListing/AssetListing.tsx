import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import { GridColDef, GridRowParams } from '@mui/x-data-grid'
import StyledDataGrid from '../atoms/tables/StyledDataGrid'
import { useParams } from 'react-router'
import axios from 'axios'
import assetListingStyle from './AssetListingStyle'
import { useNavigate } from 'react-router-dom'

const assetsTableColumns: GridColDef[] = [
  {
    field: 'asset',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    headerName: 'Asset',
    minWidth: 180,
    flex: 1,
    renderCell: params => {
      return (
        <div>
          <img src={params.row.assetImg} alt="Asset Img" className="asset-img" />
          {params.row.assetName}
        </div>
      )
    }
  },
  {
    field: 'assetId',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    headerName: 'Asset ID',
    minWidth: 100,
    flex: 1,
    cellClassName: 'blue-text'
  },
  {
    field: 'location',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    headerName: 'Warehouse Name',
    minWidth: 100,
    flex: 1
  },
  {
    field: 'owner',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    headerName: 'Owner',
    flex: 1,
    minWidth: 100
  }
]

const AssetListing = () => {
  let [rowdata, setrowdata] = useState([])
  const params = useParams()
  const navigate = useNavigate()
  const classes = assetListingStyle()

  useEffect(() => {
    fetchAssets(params)
  }, [])

  function fetchAssets(params: any) {
    let queryStr = `${process.env.REACT_APP_PRODUCT_SEARCH_ENDPOINT}${params.product}`
    axios.get(queryStr).then((result: any) => {
      const rowData: any = []
      result.data.forEach((prod: any) => {
        let ownerName = prod.preAdvice.owner.firstName + ' ' + prod.preAdvice.owner.lastName
        rowData.push({
          id: prod._id,
          assetImg: '/images/assetImg.jpeg',
          assetName: prod.product.simpleName,
          assetId: prod._id,
          location: prod.warehouseLocationNo,
          owner: ownerName
        })
      })
      setrowdata(rowData)
    })
  }

  function handleOnClick(params: GridRowParams) {
    navigate(`/asset-home/${params.row.assetId}`)
  }
  return (
    <div>
      <Container sx={{ mt: '14%', pb: '10%' }}>
        <Box className={classes.resultFoundDiv}>
          <b>Result Found:</b> <span>{params.product}</span>
        </Box>
        <StyledDataGrid
          disableSelectionOnClick
          disableColumnSelector
          columns={assetsTableColumns}
          rows={rowdata}
          className={classes.root}
          onRowClick={(params: GridRowParams) => handleOnClick(params)}
        />
      </Container>
    </div>
  )
}

export default AssetListing
