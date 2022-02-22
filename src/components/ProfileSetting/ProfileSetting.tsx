import React from 'react'
import Container from '@mui/material/Container'
import './ProfileSetting.css'
import { Button, FormControl, FormLabel, TextField } from '@mui/material'
import { styled } from '@material-ui/core'

const BootstrapButton = styled(Button)({
  textTransform: 'none',
  padding: '10px 30px',
  border: '1px solid',
  backgroundColor: '#1483f8',
  borderColor: '#1483f8',
  width: 'max-content',
  borderRadius: '10px'
})
const ProfileSetting = () => {
  return (
    <div>
      <Container>
        
        <FormControl sx={{ width: '40%', pb: '150px', pl: '7rem' }}>
          <FormLabel htmlFor="my-input" className="account-label" sx={{ color: '#212925' }}>
            Email Address
          </FormLabel>
          <TextField id="email-address" className="inputBox" variant="outlined" sx={{ mb: '30px' }} />
          <FormLabel htmlFor="my-input" className="account-label" sx={{ color: '#212925' }}>
            Wallet Address
          </FormLabel>
          <TextField id="wallet-address" variant="outlined" sx={{ mb: '11%' }} />
          <BootstrapButton variant="contained" disableRipple size="large">
            Save
          </BootstrapButton>
        </FormControl>
      </Container>
    </div>
  )
}

export default ProfileSetting
