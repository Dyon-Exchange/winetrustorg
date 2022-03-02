import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import StyledDataGrid from '../atoms/tables/StyledDataGrid'
import { useParams } from 'react-router'
import axios from 'axios'
import assetListingStyle from './AssetListingStyle'

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
    field: 'tokenId',
    headerClassName: 'super-app-theme--header',
    headerAlign: 'center',
    headerName: 'Token ID',
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
  const classes = assetListingStyle()

  useEffect(() => {
    fetchAssets(params)
  }, [])

  function fetchAssets(params: any) {
    let rowCounter = 1
    let queryStr = `${process.env.REACT_APP_PRODUCT_SEARCH_ENDPOINT}${params.product}`
    axios.get(queryStr).then((result: any) => {
      const rowData: any = []
      result.data.forEach((prod: any) => {
        let ownerName = prod.preAdvice.owner.firstName + ' ' + prod.preAdvice.owner.lastName
        rowData.push({
          id: rowCounter++,
          assetImg: '/images/assetImg.jpeg',
          assetName: prod.product.simpleName,
          tokenId: prod.product.id,
          location: prod.warehouseLocationNo,
          owner: ownerName
        })
      })
      setrowdata(rowData)
    })
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
        />
      </Container>
    </div>
  )
}

export default AssetListing
