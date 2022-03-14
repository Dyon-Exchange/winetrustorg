import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import StyledDataGrid from '../atoms/tables/StyledDataGrid'
import { makeStyles } from '@material-ui/core/styles'
import { useParams } from 'react-router'
import axios from 'axios'
import BannerSection from 'components/atoms/banner/commonBannerSection'

const useStyles = makeStyles({
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
  }
})

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
    headerName: 'Location',
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

const bannerConst = {
  title: 'Wallet Home',
  image: '/images/banners/home-banner.jpg',
  description: ''
}
const WalletHome = () => {
  let [rowdata, setrowdata] = useState([])
  const params = useParams()

  useEffect(() => {
    fetchAssets(params)
  }, [params])

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

  const classes = useStyles()

  return (
    <div>
      <BannerSection>{bannerConst}</BannerSection>
      <Box sx={{ background: '#e2e8f0', p: '12px 0' }}>
        <Container>
          <b>Result Found:</b> <span style={{ marginLeft: '10px' }}>{params.product}</span>
        </Container>
      </Box>
      <Container sx={{ pt: '4%', pb: '10%' }}>
        <h3>My Assets</h3>
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

export default WalletHome
