import React from 'react'
import Container from '@mui/material/Container'
import './ProfileSetting.css'
import { Box, FormControl, TextField, Tooltip } from '@mui/material'
import BootStrapBlueBtn from './../atoms/buttons/BootStrapBlueBtn'
import { WalletContext } from 'contexts/WalletContext'
import { LoaderContext } from 'contexts/LoaderContext'

import IntlTelInput, { CountryData } from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'

import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

const ProfileSetting = () => {
  const { authDetails, userDetails } = React.useContext(WalletContext)
  const { setLoading } = React.useContext(LoaderContext)

  const onIntlChange = (
    isValid: boolean,
    value: string,
    selectedCountryData: CountryData,
    fullNumber: string
  ) => {
    console.log(isValid)
    console.log(value)
    console.log(selectedCountryData)
    console.log(fullNumber)
    console.log(userDetails)
  }

  const onIntlBlur = () => {
    console.log('blue')
  }

  const Input = styled('input')({
    display: 'none'
  })

  const saveProfileData = () => {
    setLoading(true)
  }

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
              <label htmlFor="contained-button-file">
                <img
                  className="profile-pic"
                  src="/images/profileSetting/dummy-profile.png"
                  alt="WineTrust Profile"
                />
                <Box className="profile-pic profile-img-overlay"></Box>
                <Input accept="image/*" id="contained-button-file" type="file" />
              </label>
              <h2 className="profile-name">Unnamed</h2>
            </div>
          </div>
        </Box>
        <FormControl sx={{ width: '40%', pb: '150px', pl: '7rem', mt: '50px' }}>
          <Stack spacing={4}>
            <TextField
              id="firstname"
              label="First Name"
              inputProps={{ style: { padding: '13px 15px' } }}
              InputLabelProps={{ style: { lineHeight: '1.2em' } }}
            />
            <TextField
              id="lastname"
              label="Last Name"
              defaultValue="Abc"
              inputProps={{ style: { padding: '13px 15px' } }}
              InputLabelProps={{ style: { lineHeight: '1.2em' } }}
            />
            <TextField
              id="email-address"
              label="Email Address"
              defaultValue="Abc"
              inputProps={{ style: { padding: '13px 15px' } }}
              InputLabelProps={{ style: { lineHeight: '1.2em' } }}
            />
            <IntlTelInput
              defaultCountry="gb"
              onPhoneNumberChange={onIntlChange}
              onPhoneNumberBlur={onIntlBlur}
              inputClassName="profile-intl-tel-input"
            />
            <Tooltip title="Click to copy" followCursor>
              <TextField
                id="wallet-address"
                label="Wallet Address"
                defaultValue={authDetails?.address}
                onClick={() => {
                  navigator.clipboard.writeText(authDetails ? authDetails.address ?? '' : '')
                }}
                InputProps={{
                  readOnly: true
                }}
                InputLabelProps={{
                  shrink: true
                }}
                disabled={true}
              />
            </Tooltip>
            <BootStrapBlueBtn
              variant="contained"
              disableRipple
              size="large"
              onClick={saveProfileData}>
              Save
            </BootStrapBlueBtn>
          </Stack>
        </FormControl>
      </Container>
    </div>
  )
}

export default ProfileSetting
