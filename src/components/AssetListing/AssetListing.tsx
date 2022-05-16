import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box, Grid } from '@mui/material'
import { useParams } from 'react-router'
import axios from 'axios'
import assetListingStyle from './AssetListingStyle'
import { useNavigate } from 'react-router-dom'
import BootstrapBlueBtn from 'components/atoms/buttons/BootStrapBlueBtn'
import { LoaderContext } from 'contexts/LoaderContext'

const AssetListing = () => {
  let [rowdata, setrowdata] = useState([])
  const params = useParams()
  const navigate = useNavigate()
  const classes = assetListingStyle()
  const { setLoading } = React.useContext(LoaderContext)

  useEffect(() => {
    fetchAssets()
  }, [])

  function fetchAssets() {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL ?? 'http://localhost:3030/'
    setLoading(true)
    axios.get(`/assets/search?query=${params.product ?? ''}`).then((result: any) => {
      const rowData: any = []
      result.data.forEach((prod: any) => {
        let ownerName = prod.preAdvice.owner.ethAddress
        rowData.push({
          id: prod._id,
          assetImg: `${process.env.REACT_APP_PINATA}${prod.product.labelImage}`,
          assetName: prod.product.longName,
          assetId: prod.assetId ?? prod._id,
          location: prod.preAdvice.arrivalWarehouse.name,
          owner: ownerName
        })
      })
      setrowdata(rowData)
      setLoading(false)
    })
  }

  function handleOnClick(param: any) {
    navigate(`/asset-home/${param}`)
  }

  return (
    <div className={classes.root}>
      <Container className="container">
        <Box className="result-found-div">
          <b>Search Results for:</b> <span>{params.product}</span>
        </Box>
        <Grid container className="grid-container web-header cell-heading ">
          <Grid item xs={12} sm={6} lg={4.6}>
            <Box>Asset</Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={1.1}>
            <Box>Asset ID</Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={2.5}>
            <Box>Warehouse Name</Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={2.5}>
            <Box>Owner</Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={1}></Grid>
        </Grid>
        {rowdata.map((item: any) => (
          <Grid container className="grid-container" key={item.assetId}>
            <Grid item xs={12} sm={6} lg={4.6}>
              <Box className="cell-heading mobile-header">Asset</Box>
              <Box sx={{ display: 'flex' }}>
                <img src={item.assetImg} alt="Asset Img" className="asset-img" />
                <div className="asset-data asset-name">{item.assetName}</div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={1} key={item.id}>
              <Box className="cell-heading mobile-header">Asset ID</Box>
              <div className="asset-data">{item.assetId}</div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2.5} key={item.id}>
              <Box className="cell-heading mobile-header">Warehouse Name</Box>
              <div className="asset-data">{item.location}</div>
            </Grid>
            <Grid item xs={12} sm={6} lg={2.9} key={item.id}>
              <Box className="cell-heading mobile-header">Owner</Box>
              <div className="asset-data">{item.owner}</div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={1}
              key={item.id}
              sx={{ display: 'flex' }}
              flexDirection="row">
              <BootstrapBlueBtn onClick={() => handleOnClick(item.assetId)} className="view-btn">
                VIEW
              </BootstrapBlueBtn>
            </Grid>
          </Grid>
        ))}
      </Container>
    </div>
  )
}

export default AssetListing
