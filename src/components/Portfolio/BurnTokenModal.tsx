import React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Modal from '@mui/material/Modal'
import Checkbox from '@mui/material/Checkbox'
import BootstrapBlueBtn from 'components/atoms/buttons/BootStrapBlueBtn'
import { Box, Fade, Typography } from '@mui/material'
import { toast } from 'react-toastify'

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
  p: 4
}

interface BurnTokenModalProps {
  open: boolean
  assetId: string
  assetName: string
  redeemCallback: Function
  onCloseCallback: Function
}

export const BurnTokenModal: React.FC<BurnTokenModalProps> = ({
  open,
  onCloseCallback,
  redeemCallback,
  assetId,
  assetName
}) => {
  const [isTncChecked, setIsTncChecked] = React.useState(false)
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
              You are redeeming:
            </Typography>
            <Typography fontSize={'22px'} textAlign={'center'}>
              1x
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
            <Typography display="flex" alignItems="center">
              <Checkbox
                {...{ inputProps: { 'aria-label': 'Checkbox demo' } }}
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                onChange={(_event, checked) => setIsTncChecked(checked)}
              />
              <Typography>I agree to Terms and Condition</Typography>
            </Typography>
            <Typography display={'flex'} justifyContent="center">
              <BootstrapBlueBtn
                onClick={() =>
                  isTncChecked
                    ? redeemCallback()
                    : toast.error('Please agree to terms and conditions', {
                        position: toast.POSITION.TOP_RIGHT,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        progress: undefined
                      })
                }>
                Redeem
              </BootstrapBlueBtn>
            </Typography>
          </Typography>
        </Box>
      </Fade>
    </Modal>
  )
}
