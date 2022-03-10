import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import './ProfileSetting.css'
import { Avatar, Box, FormControl, TextField, Tooltip } from '@mui/material'
import BootStrapBlueBtn from './../atoms/buttons/BootStrapBlueBtn'
import { WalletContext } from 'contexts/WalletContext'
import { LoaderContext } from 'contexts/LoaderContext'

import { ILoggedInDetails, AuthDetails } from 'interfaces'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import IntlTelInput, { CountryData } from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'

import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import EditIcon from '@mui/icons-material/Edit'
import { profileUpdateRequest, profileImageUpdateRequest } from 'api/profile/profileUpdate'

const ProfileSetting = () => {
  const { authDetails, loggedIn, login, currentUserInfo, setCurrentUserInfo } =
    React.useContext(WalletContext)
  const { setLoading } = React.useContext(LoaderContext)

  const [updatedUserDetails, setUpdatedUserDetails] = React.useState<ILoggedInDetails | undefined>(
    currentUserInfo
  )

  const [updatedAuthDetails, setUpdatedAuthDetails] = React.useState<AuthDetails | undefined>(
    authDetails
  )

  const [currentProfileImage, setCurrentProfileImage] = React.useState<FormData | undefined>(
    undefined
  )

  useEffect(() => {
    setUpdatedUserDetails(currentUserInfo)
  }, [currentUserInfo])

  useEffect(() => {
    setUpdatedAuthDetails(authDetails)
  }, [authDetails])

  const onIntlChange = (
    _isValid: boolean,
    value: string,
    selectedCountryData: CountryData,
    _fullNumber: string
  ) => {
    const updatedDetail = {
      ...updatedUserDetails
    }

    if (updatedDetail.user) {
      updatedDetail.user.phoneNumber = {
        countryCode: selectedCountryData.iso2,
        phoneNumber: value
      }
    } else {
      updatedDetail.user = {
        phoneNumber: {
          countryCode: selectedCountryData.iso2,
          phoneNumber: value
        }
      }
    }

    setUpdatedUserDetails({
      ...updatedDetail
    })
  }

  const onIntlBlur = (
    _isValid: boolean,
    value: string,
    selectedCountryData: CountryData,
    _fullNumber: string
  ) => {
    const updatedDetail = {
      ...updatedUserDetails
    }

    if (updatedDetail.user) {
      updatedDetail.user.phoneNumber = {
        countryCode: selectedCountryData.iso2,
        phoneNumber: value
      }
    } else {
      updatedDetail.user = {
        phoneNumber: {
          countryCode: selectedCountryData.iso2,
          phoneNumber: value
        }
      }
    }

    setUpdatedUserDetails({
      ...updatedDetail
    })
  }

  const Input = styled('input')({
    display: 'none'
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    const updatedUser = {
      ...updatedUserDetails?.user,
      [name]: value
    }
    setUpdatedUserDetails({ user: updatedUser })
  }

  const selectProfileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()
    const files = event.target.files
    if (files && files[0]) {
      const pfImage = files[0]
      if (pfImage && !pfImage.name.match(/\.(jpg|jpeg|png)$/)) {
        toast.error('Please upload supported types (jpg, jpeg, png)', {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined
        })
        return
      }
      formData.append('profile-image', files[0])
      setCurrentProfileImage(formData)
    }
  }

  const saveProfileData = async () => {
    let isError: boolean = false
    try {
      if (!loggedIn) {
        await login()
      }

      setLoading(true)
      const postData = {
        ...updatedUserDetails
      }

      if (
        postData?.user?.email &&
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(postData?.user?.email)
      ) {
        isError = true
        throw new Error('Please enter correct email')
      }

      if (currentProfileImage) {
        await profileImageUpdateRequest(currentProfileImage)
      }

      const updatedData = await profileUpdateRequest(postData)

      setLoading(false)
      setCurrentUserInfo(updatedData)

      toast.success('Profile has been updated successfully !', {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined
      })
    } catch (err) {
      console.log(err)
      const errMsg: string = isError
        ? (err as Error).message
        : 'Something went wrong while updating profile. Try again later !'
      setLoading(false)
      toast.error(errMsg, {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined
      })
    }
  }

  return (
    <div>
      <Container>
        <ToastContainer />
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
                <div id="profile-img">
                  <img
                    className="profile-pic"
                    src={
                      currentUserInfo?.user?.profileImage ??
                      '/images/profileSetting/dummy-profile.png'
                    }
                    alt="WineTrust Profile"
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null
                      currentTarget.src = '/images/profileSetting/dummy-profile.png'
                    }}
                  />
                  <Avatar
                    className="profile-pic profile-img-overlay"
                    sx={{
                      height: '150px',
                      width: '150px',
                      position: 'absolute',
                      background: 'rgb(0,0,0,0.2)'
                    }}>
                    <EditIcon />
                  </Avatar>
                </div>

                <Input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  onChange={selectProfileImage}
                />
              </label>
              <h2 className="profile-name">
                {currentUserInfo?.user?.firstName
                  ? currentUserInfo?.user?.firstName + ' ' + currentUserInfo?.user?.lastName
                  : 'Unnamed'}
              </h2>
            </div>
          </div>
        </Box>
        <FormControl sx={{ width: '40%', pb: '150px', pl: '7rem', mt: '50px' }}>
          <Stack spacing={4}>
            <TextField
              id="firstname"
              name="firstName"
              label="First Name"
              inputProps={{ style: { padding: '13px 15px' } }}
              InputLabelProps={{
                style: { lineHeight: '1.2em' },
                shrink: updatedUserDetails?.user?.firstName ? true : false
              }}
              value={updatedUserDetails?.user?.firstName}
              onChange={handleChange}
            />
            <TextField
              id="lastname"
              name="lastName"
              label="Last Name"
              inputProps={{ style: { padding: '13px 15px' } }}
              InputLabelProps={{
                style: { lineHeight: '1.2em' },
                shrink: updatedUserDetails?.user?.lastName ? true : false
              }}
              value={updatedUserDetails?.user?.lastName}
              onChange={handleChange}
            />
            <TextField
              id="email-address"
              name="email"
              label="Email Address"
              inputProps={{ style: { padding: '13px 15px' } }}
              InputLabelProps={{
                style: { lineHeight: '1.2em' },
                shrink: updatedUserDetails?.user?.email ? true : false
              }}
              value={updatedUserDetails?.user?.email}
              onChange={handleChange}
            />
            <IntlTelInput
              defaultCountry={updatedUserDetails?.user?.phoneNumber?.countryCode ?? 'gb'}
              value={updatedUserDetails?.user?.phoneNumber?.phoneNumber}
              onPhoneNumberChange={onIntlChange}
              onPhoneNumberBlur={onIntlBlur}
              inputClassName="profile-intl-tel-input"
            />
            <Tooltip title="Click to copy" followCursor>
              <TextField
                id="wallet-address"
                label="Wallet Address"
                value={updatedAuthDetails?.address}
                onClick={() => {
                  navigator.clipboard.writeText(
                    updatedAuthDetails ? updatedAuthDetails.address ?? '' : ''
                  )
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
