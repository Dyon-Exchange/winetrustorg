import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import StyledDataGrid from '../atoms/tables/StyledDataGrid'
import { useParams } from 'react-router'
import axios from 'axios'
import assetListingStyle from './AssetListingStyle'
import { useNavigate } from 'react-router-dom'
import BootstrapBlueBtn from 'components/atoms/buttons/BootStrapBlueBtn'

const AssetListing = () => {
  let [rowdata, setrowdata] = useState([])
  const params = useParams()
  const navigate = useNavigate()
  const classes = assetListingStyle()

  useEffect(() => {
    fetchAssets(params)
  }, [])

  const assetsTableColumns: GridColDef[] = [
    {
      field: 'asset',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      headerName: 'Asset',
      minWidth: 300,
      renderCell: params => {
        return (
          <div className={classes.wrapText}>
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
      minWidth: 200,
      cellClassName: 'blue-text'
    },
    {
      field: 'location',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      headerName: 'Warehouse Name',
      minWidth: 280
    },
    {
      field: 'owner',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      headerName: 'Owner',
      minWidth: 250
    },
    {
      field: '',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      flex: 1,
      minWidth: 80,
      align: 'center',
      renderCell: (param: GridValueGetterParams) => (
        <BootstrapBlueBtn onClick={() => handleOnClick(param)} className="view-btn">
          VIEW
        </BootstrapBlueBtn>
      )
    }
  ]
  function fetchAssets(params: any) {
    let queryStr = `${process.env.REACT_APP_PRODUCT_SEARCH_ENDPOINT}${params.product}`
    axios.get(queryStr).then((result: any) => {
      const rowData: any = []
      result.data.forEach((prod: any) => {
        let ownerName = prod.preAdvice.owner.firstName + ' ' + prod.preAdvice.owner.lastName
        rowData.push({
          id: prod._id,
          assetImg: '/images/assetImg.jpeg',
          assetName: prod.product.longName,
          assetId: prod._id,
          location: prod.preAdvice.arrivalWarehouse.name,
          owner: ownerName
        })
      })
      setrowdata(rowData)
    })
  }

  function handleOnClick(params: any) {
    navigate(`/asset-home/${params.row.assetId}`)
  }
  return (
    <div>
      <Container sx={{ mt: '14%', pb: '10%' }}>
        <Box className={classes.resultFoundDiv}>
          <b>Search Results for:</b> <span>{params.product}</span>
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
