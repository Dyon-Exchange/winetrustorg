import React from 'react'
import { WalletContext } from 'contexts/WalletContext'
import BootstrapBlueBtn from 'components/atoms/buttons/BootStrapBlueBtn'
import { Box, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PortfolioProfile from './PortfolioProfile'

const getDataFromAttribute = (item: { attributes: any[] }, key: string) => {
  let keyData = '-'
  item.attributes.forEach((itemData: { trait_type: any; value: string }) => {
    if (itemData.trait_type === key) {
      keyData = itemData.value
    }
  })
  return keyData
}

export const LoggedInPortfolio = (data: any) => {
  const navigate = useNavigate()

  const navigateToAsset = (param: any) => {
    navigate(`/asset-home/${param}`)
  }

  const { userDetails, loggedIn, loggedInDetails } = React.useContext(WalletContext)
  const rowdata = data.data

  const owner =
    loggedIn && loggedInDetails?.user?.firstName && loggedInDetails?.user?.lastName
      ? loggedInDetails?.user?.firstName + ' ' + loggedInDetails?.user?.lastName
      : userDetails?.address

  return (
    <div>
      <PortfolioProfile />
      <Grid container className="grid-container web-header cell-heading ">
        <Grid item xs={12} sm={6} lg={3.1}>
          <Box>Asset</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={2.3}>
          <Box>Asset ID</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3.1}>
          <Box>Warehouse Name</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={2.5}>
          <Box>Owner</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={1}></Grid>
      </Grid>

      {rowdata.map((item: any) => (
        <Grid container className="grid-container">
          <Grid item xs={12} sm={6} lg={3} key={item.id}>
            <Box className="cell-heading mobile-header">Asset</Box>
            <Box sx={{ display: 'flex' }}>
              <img
                src={`https://ipfs.io/ipfs/${item.image.replace('ipfs://', '')}`}
                alt=""
                className="asset-img"
              />
              <div className="asset-data">{item.name}</div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={2.3} key={item.id}>
            <Box className="cell-heading mobile-header">Asset ID</Box>
            <div className="asset-data">{getDataFromAttribute(item, 'ID Number')}</div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} key={item.id}>
            <Box className="cell-heading mobile-header">Warehouse Name</Box>
            <div className="asset-data">{getDataFromAttribute(item, 'Warehouse ID')}</div>
          </Grid>
          <Grid item xs={12} sm={6} lg={2.5} key={item.id}>
            <Box className="cell-heading mobile-header">Owner</Box>
            <div className="asset-data">{owner}</div>
          </Grid>
          <Grid item xs={12} sm={6} lg={1} key={item.id}>
            <BootstrapBlueBtn
              onClick={() => navigateToAsset(getDataFromAttribute(item, 'ID Number'))}
              className="view-btn">
              VIEW
            </BootstrapBlueBtn>
          </Grid>
        </Grid>
      ))}
    </div>
  )
}
