import React, { useState } from 'react'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Checkbox from '@mui/material/Checkbox'
import BootstrapBlueBtn from 'components/atoms/buttons/BootStrapBlueBtn'
import { Box, Fade, Typography } from '@mui/material'
import { WalletContext } from 'contexts/WalletContext'
import { getDialCodeFromCountry } from 'components/util/CountryList'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid rgba(0,0,0,.2)',
  boxShadow: 24,
  borderRadius: '5px',
  maxWidth: 'calc(100vw - 20px)',
  p: 4
}

interface BurnTokenConfirmModalProps {
  open: boolean
  assetId: string
  assetName: string
  redeemConfirmCallback: Function
  onCloseCallback: Function
}

export const BurnTokenConfirmModal: React.FC<BurnTokenConfirmModalProps> = ({
  open,
  onCloseCallback,
  redeemConfirmCallback,
  assetId,
  assetName
}) => {
  const { currentUserInfo } = React.useContext(WalletContext)
  const [isTncChecked, setIsTncChecked] = useState(false)
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => onCloseCallback()}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 300
      }}>
      <Fade in={open}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2" textAlign={'center'}>
            IMPORTANT NOTICE
          </Typography>
          <Typography
            id="transition-modal-description"
            sx={{ mt: 2 }}
            display="flex"
            flexDirection={'column'}
            rowGap={'15px'}>
            <Typography fontSize={'18px'} textAlign={'center'}>
              This action cannot be undone !
            </Typography>
            <Typography fontSize={'22px'} textAlign={'center'}>
              By confirming you agree to remove this asset from WineTrust and burn the associated
              token :
            </Typography>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              textAlign={'center'}>
              <span style={{ background: '#f0f6fc', padding: '1.5px' }}>{assetName} </span>
            </Typography>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              fontSize={'16px'}
              textAlign={'center'}>
              <span style={{ background: '#f0f6fc', padding: '1.5px' }}>Asset ID : {assetId} </span>
            </Typography>
            <Typography fontStyle={'italic'} fontSize={'13.5px'} textAlign={'center'}>
              By redeeming this asset, you agree to have this asset delivered to you and to pay all
              taxes, delivery and other charges due.
            </Typography>
            <Typography fontStyle={'italic'} fontSize={'13.5px'} textAlign={'center'}>
              WineTrust will contact you to confirm delivery instructions.
            </Typography>
            <Typography>
              <Typography fontSize={'13.5px'}>
                Please confirm that we have the correct contact details for you so that we can
                arrange delivery of your assets:
              </Typography>
              <Typography fontSize={'15px'}>
                <div style={{ marginTop: '5px' }}>
                  {currentUserInfo
                    ? currentUserInfo?.user?.firstName ?? '' + currentUserInfo?.user?.lastName ?? ''
                    : ''}
                </div>
                <div>{currentUserInfo ? currentUserInfo?.user?.email : ''}</div>
                <div>
                  {currentUserInfo
                    ? (currentUserInfo.user?.phoneNumber?.countryCode
                        ? getDialCodeFromCountry(currentUserInfo.user?.phoneNumber?.countryCode)
                        : '') + ` ${currentUserInfo.user?.phoneNumber?.phoneNumber ?? ''}`
                    : ''}
                </div>
              </Typography>
              <Typography fontSize={'13.5px'} marginTop={'3px'}>
                <span>
                  I want to <Link to="/profile-setting">update</Link> my delivery address
                </span>
              </Typography>
            </Typography>
            <Typography display="flex" alignItems="center">
              <Checkbox
                {...{ inputProps: { 'aria-label': 'Checkbox demo' } }}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, padding: '0px', paddingRight: '5px' }}
                onChange={(_event, checked) => setIsTncChecked(checked)}
              />
              <Typography>I agree to Terms and Condition</Typography>
            </Typography>
            <Typography display={'flex'} justifyContent="center">
              <BootstrapBlueBtn
                onClick={() =>
                  isTncChecked
                    ? redeemConfirmCallback()
                    : toast.error('Please agree to terms and conditions', {
                        position: toast.POSITION.TOP_RIGHT,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        progress: undefined
                      })
                }>
                Confirm Redemption
              </BootstrapBlueBtn>
            </Typography>
          </Typography>
        </Box>
      </Fade>
    </Modal>
  )
}
