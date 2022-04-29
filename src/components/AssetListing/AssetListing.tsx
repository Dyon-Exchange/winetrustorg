import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box, Grid } from '@mui/material'
import { useParams } from 'react-router'
import axios from 'axios'
import assetListingStyle from './AssetListingStyle'
import { useNavigate } from 'react-router-dom'
import BootstrapBlueBtn from 'components/atoms/buttons/BootStrapBlueBtn'
import { LoaderContext } from 'contexts/LoaderContext'
import { BurnTokenModal } from './BurnTokenModal'
import BootstrapWhiteBtn from 'components/atoms/buttons/BootStrapWhiteBtn'
import { BurnTokenConfirmModal } from './BurnTokenConfirmModal'
import { ToastContainer } from 'react-toastify'
import { WalletContext } from 'contexts/WalletContext'
import { toast } from 'react-toastify'

interface CurrentReedemAsset {
  assetId: string
  assetName: string
}

const AssetListing = () => {
  let [rowdata, setrowdata] = useState([])
  const [openBurnTokenModal, setOpenBurnTokenModal] = useState(false)
  const [openBurnTokenConfirmModal, setOpenBurnTokenConfirmModal] = useState(false)
  const { currentUserInfo } = React.useContext(WalletContext)
  const params = useParams()
  const navigate = useNavigate()
  const classes = assetListingStyle()
  const { setLoading } = React.useContext(LoaderContext)
  const [currentReedeemAsset, setCurrentReedemAsset] = useState<CurrentReedemAsset | undefined>(
    undefined
  )
  const [currentConfirmReedeemAsset, setCurrentConfirmReedemAsset] = useState<
    CurrentReedemAsset | undefined
  >(undefined)

  useEffect(() => {
    fetchAssets()
  }, [])

  function fetchAssets() {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL ?? 'http://localhost:3030/'
    setLoading(true)
    axios.get(`/assets/search?query=${params.product}`).then((result: any) => {
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

  const showBurnTokenModal = (assetId: string, assetName: string) => {
    console.log(assetId)
    setCurrentReedemAsset({
      assetId,
      assetName
    })
    setOpenBurnTokenModal(true)
  }

  const showConfirmRedemption = () => {
    const confirmRedemptionData = currentReedeemAsset
      ? {
          assetId: currentReedeemAsset?.assetId,
          assetName: currentReedeemAsset?.assetName
        }
      : undefined

    if (confirmRedemptionData) {
      setCurrentConfirmReedemAsset(confirmRedemptionData)
      setOpenBurnTokenConfirmModal(true)
    }
    setOpenBurnTokenModal(false)
    setCurrentReedemAsset(undefined)
  }

  const redeemAsset = () => {
    if (
      !currentUserInfo ||
      !currentUserInfo.user ||
      !currentUserInfo.user.email ||
      !currentUserInfo.user.firstName ||
      !currentUserInfo.user.phoneNumber?.countryCode ||
      !currentUserInfo.user.phoneNumber?.phoneNumber
    ) {
      toast.error('Please fill all the delivery details before burning the token', {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined
      })
    } else {
      toast.success('Token has been burned successfully !', {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined
      })
      setOpenBurnTokenConfirmModal(false)
    }
  }

  function handleOnClick(param: any) {
    navigate(`/asset-home/${param}`)
  }

  return (
    <div className={classes.root}>
      <ToastContainer />
      <Container className="container">
        {currentReedeemAsset ? (
          <BurnTokenModal
            open={openBurnTokenModal}
            redeemCallback={() => showConfirmRedemption()}
            assetName={currentReedeemAsset?.assetName}
            assetId={currentReedeemAsset?.assetId}
            onCloseCallback={() => setOpenBurnTokenModal(false)}></BurnTokenModal>
        ) : (
          ''
        )}
        {currentConfirmReedeemAsset ? (
          <BurnTokenConfirmModal
            open={openBurnTokenConfirmModal}
            redeemConfirmCallback={() => redeemAsset()}
            assetName={currentConfirmReedeemAsset?.assetName}
            assetId={currentConfirmReedeemAsset?.assetId}
            onCloseCallback={() => setOpenBurnTokenConfirmModal(false)}></BurnTokenConfirmModal>
        ) : (
          ''
        )}
        <Box className="result-found-div">
          <b>Search Results for:</b> <span>{params.product}</span>
        </Box>
        <Grid container className="grid-container web-header cell-heading ">
          <Grid item xs={12} sm={6} lg={4}>
            <Box>Asset</Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={1.1}>
            <Box>Asset ID</Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={2.5}>
            <Box>Warehouse Name</Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={2.4}>
            <Box>Owner</Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={2}></Grid>
        </Grid>
        {rowdata.map((item: any) => (
          <Grid container className="grid-container" key={item.assetId}>
            <Grid item xs={12} sm={6} lg={3.9}>
              <Box className="cell-heading mobile-header">Asset</Box>
              <Box sx={{ display: 'flex' }}>
                <img src={item.assetImg} alt="Asset Img" className="asset-img" />
                <div className="asset-data">{item.assetName}</div>
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
            <Grid item xs={12} sm={6} lg={2.4} key={item.id}>
              <Box className="cell-heading mobile-header">Owner</Box>
              <div className="asset-data">{item.owner}</div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              lg={2.2}
              key={item.id}
              sx={{ display: 'flex' }}
              flexDirection="row">
              <BootstrapBlueBtn onClick={() => handleOnClick(item.assetId)} className="view-btn">
                VIEW
              </BootstrapBlueBtn>
              <BootstrapWhiteBtn
                onClick={() => showBurnTokenModal(item.assetId, item.assetName)}
                className="redeem-btn">
                REDEEM
              </BootstrapWhiteBtn>
            </Grid>
          </Grid>
        ))}
      </Container>
    </div>
  )
}

export default AssetListing
