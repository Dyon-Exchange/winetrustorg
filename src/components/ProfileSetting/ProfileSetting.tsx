import React from 'react'
import Container from '@mui/material/Container'
import './ProfileSetting.css'
import { Box, Button, FormControl, FormLabel, TextField } from '@mui/material'
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '66vh',
            justifyContent: 'center',
            mt: '50px'
          }}>
          <h2>Profile Setting</h2>
          <div className="profile-backdrop card-shadow">
            <div className="profile-outer">
              <img className="profile-pic" src="/images/profileSetting/profile-img.jpeg" />
              <h2 className="profile-name">John Wick</h2>
            </div>
          </div>
        </Box>
        <FormControl sx={{ width: '40%', pb: '150px', pl: '7rem' }}>
          <FormLabel htmlFor="my-input" className="account-label" sx={{ color: '#212925' }}>
            Email Address
          </FormLabel>
          <TextField id="email-address" variant="outlined" sx={{ mb: '30px' }} />
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
