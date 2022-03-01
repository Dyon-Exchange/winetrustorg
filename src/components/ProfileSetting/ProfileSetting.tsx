import React from 'react'
import Container from '@mui/material/Container'
import './ProfileSetting.css'
import { Box, FormControl, FormLabel, TextField } from '@mui/material'
import BootStrapBlueBtn from './../atoms/buttons/BootStrapBlueBtn'

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
              <img
                className="profile-pic"
                src="/images/profileSetting/profile-img.jpeg"
                alt="WineTrust Profile"
              />
              <h2 className="profile-name">Unnamed</h2>
            </div>
          </div>
        </Box>
        <FormControl sx={{ width: '40%', pb: '150px', pl: '7rem' }}>
          <FormLabel htmlFor="my-input" className="account-label" sx={{ color: '#212925' }}>
            Email Address
          </FormLabel>
          <TextField
            id="email-address"
            variant="outlined"
            sx={{ mb: '30px' }}
            placeholder="Enter email address"
          />
          <FormLabel htmlFor="my-input" className="account-label" sx={{ color: '#212925' }}>
            Wallet Address
          </FormLabel>
          <TextField
            id="wallet-address"
            variant="outlined"
            sx={{ mb: '11%' }}
            placeholder="Enter wallet address"
          />
          <BootStrapBlueBtn variant="contained" disableRipple size="large">
            Save
          </BootStrapBlueBtn>
        </FormControl>
      </Container>
    </div>
  )
}

export default ProfileSetting
