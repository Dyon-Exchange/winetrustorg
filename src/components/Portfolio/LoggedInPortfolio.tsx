import React, { useContext, useState } from 'react'
import { WalletContext } from 'contexts/WalletContext'
import BootstrapBlueBtn from 'components/atoms/buttons/BootStrapBlueBtn'
import { Box, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import BootstrapWhiteBtn from 'components/atoms/buttons/BootStrapWhiteBtn'
import { BurnTokenConfirmModal } from './BurnTokenConfirmModal'
import { BurnTokenModal } from './BurnTokenModal'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import { PortfolioRowData } from 'interfaces/Portfolio'
import { WineTrustToken } from 'helpers/contract'

const getDataFromAttribute = (item: PortfolioRowData, key: string) => {
  if (!item) return '';
  let keyData = '-'
  item.metadata.attributes.forEach((itemData: { trait_type: any; value: string }) => {
    if (itemData.trait_type === key) {
      keyData = itemData.value
    }
  })
  return keyData
}

export const LoggedInPortfolio = ({ data: rowData, onRefetch }: { data: any, onRefetch: Function }) => {
  const { userDetails } = useContext(WalletContext)
  const [currentReedeemAsset, setCurrentReedemAsset] = useState<PortfolioRowData | undefined>(
    undefined
  )
  const [currentConfirmReedeemAsset, setCurrentConfirmReedemAsset] = useState<
    PortfolioRowData | undefined
  >(undefined)
  const [openBurnTokenModal, setOpenBurnTokenModal] = useState(false)
  const [openBurnTokenConfirmModal, setOpenBurnTokenConfirmModal] = useState(false)
  const { currentUserInfo } = React.useContext(WalletContext)

  const navigate = useNavigate()

  const navigateToAsset = (param: any) => {
    navigate(`/asset-home/${param}`)
  }

  const showBurnTokenModal = (item: PortfolioRowData) => {
    setCurrentReedemAsset(item)
    setOpenBurnTokenModal(true)
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
      toast.error(
        'Please fill all the delivery details before burning the token or login if not logged in',
        {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined
        }
      )
    } else {
      WineTrustToken.contract.methods.burn(userDetails?.address, currentConfirmReedeemAsset?.identifier, 1)
        .send({
          from: userDetails?.address,
          maxPriorityFeePerGas: null,
          maxFeePerGas: null,
        })
        .on('receipt', () => {
          toast.success('Token has been burned successfully !', {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined
          })
          onRefetch()
        })
        .on('error', () => {
          toast.error('Token redemption failed!', {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined
          })
        });


      setOpenBurnTokenConfirmModal(false)
    }
  }

  const showConfirmRedemption = () => {
    setCurrentConfirmReedemAsset(currentReedeemAsset)
    setOpenBurnTokenConfirmModal(true)

    setOpenBurnTokenModal(false)
    setCurrentReedemAsset(undefined)
  }

  const owner = userDetails?.address

  return (
    <div>
      <Grid container className="grid-container web-header cell-heading ">
        <ToastContainer />
        {currentReedeemAsset ? (
          <BurnTokenModal
            open={openBurnTokenModal}
            redeemCallback={() => showConfirmRedemption()}
            assetName={currentReedeemAsset.metadata.name}
            assetId={getDataFromAttribute(currentReedeemAsset, "Asset ID")}
            onCloseCallback={() => setOpenBurnTokenModal(false)}></BurnTokenModal>
        ) : (
          ''
        )}
        {currentConfirmReedeemAsset ? (
          <BurnTokenConfirmModal
            open={openBurnTokenConfirmModal}
            redeemConfirmCallback={() => redeemAsset()}
            assetName={currentConfirmReedeemAsset.metadata.name}
            assetId={getDataFromAttribute(currentConfirmReedeemAsset, "Asset ID")}
            onCloseCallback={() => setOpenBurnTokenConfirmModal(false)}></BurnTokenConfirmModal>
        ) : (
          ''
        )}
        <Grid item xs={12} sm={6} lg={4.5}>
          <Box>Asset</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={1.1}>
          <Box>Asset ID</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={2.5}>
          <Box>Warehouse Name</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={1.7}>
          <Box>Owner</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={2.2}></Grid>
      </Grid>

      {rowData.map((item: any) => (
        <Grid container className="grid-container" key={item.identifier}>
          <Grid item xs={12} sm={6} lg={4.4}>
            <Box className="cell-heading mobile-header">Asset</Box>
            <Box sx={{ display: 'flex' }}>
              <img
                src={`https://ipfs.io/ipfs/${item.metadata.image.replace('ipfs://', '')}`}
                alt=""
                className="asset-img"
              />
              <div className="asset-data">{item.metadata.name}</div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={1}>
            <Box className="cell-heading mobile-header">Asset ID</Box>
            <div className="asset-data">{getDataFromAttribute(item, 'Asset ID')}</div>
          </Grid>
          <Grid item xs={12} sm={6} lg={2.5}>
            <Box className="cell-heading mobile-header">Warehouse Name</Box>
            <div className="asset-data">{getDataFromAttribute(item, 'Warehouse Name')}</div>
          </Grid>
          <Grid item xs={12} sm={6} lg={1.7}>
            <Box className="cell-heading mobile-header">Owner</Box>
            <div className="asset-data">
              <span style={{ color: 'green' }}>You</span> (
              {owner?.substring(0, 5) + '...' + owner?.slice(-5)})
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            lg={2.2}
            sx={{ display: 'flex' }}
            flexDirection="row">
            <BootstrapBlueBtn
              onClick={() => navigateToAsset(getDataFromAttribute(item, 'Asset ID'))}
              className="view-btn">
              VIEW
            </BootstrapBlueBtn>
            <BootstrapWhiteBtn
              onClick={() => showBurnTokenModal(item)}
              className="redeem-btn">
              REDEEM
            </BootstrapWhiteBtn>
          </Grid>
        </Grid>
      ))}
    </div>
  )
}
