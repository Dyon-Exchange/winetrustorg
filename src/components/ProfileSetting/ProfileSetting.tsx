import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import './ProfileSetting.css'
import { Avatar, Box, FormControl, InputAdornment, TextField, Tooltip } from '@mui/material'
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
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { profileUpdateRequest, profileImageUpdateRequest } from 'api/profile/profileUpdate'
import profileStyles from './ProfileStyle'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

const ProfileSetting = () => {
  const classes = profileStyles()
  const { authDetails, loggedIn, login, currentUserInfo, setCurrentUserInfo } =
    React.useContext(WalletContext)
  const { setLoading } = React.useContext(LoaderContext)

  const [updatedUserDetails, setUpdatedUserDetails] = React.useState<ILoggedInDetails | undefined>(
    currentUserInfo
  )

  const [updatedAuthDetails, setUpdatedAuthDetails] = React.useState<AuthDetails | undefined>(
    authDetails
  )

  const [currentProfileImage, setCurrentProfileImage] = React.useState<FormData | undefined>()

  const [imageUrl, setImageUrl] = React.useState<string>()
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
      setImageUrl(URL.createObjectURL(files[0]))
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
    <div className={classes.root}>
      <Container className="profile-container">
        <ToastContainer />
        <Box className="profile-bg-outer">
          <h2>Profile Setting</h2>
          <Box className="profile-section">
            <div className="profile-outer">
              <label htmlFor="contained-button-file" className="mobile-profile">
                <div>
                  <div id="profile-img">
                    {!imageUrl && !currentProfileImage && (
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
                    )}
                    {imageUrl && currentProfileImage && (
                      <img
                        className="profile-pic"
                        src={imageUrl}
                        alt="Selected profile img"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null
                          currentTarget.src = '/images/profileSetting/dummy-profile.png'
                        }}
                      />
                    )}
                    <Avatar
                      className="profile-pic profile-img-overlay"
                      sx={{
                        height: '150px',
                        width: '150px',
                        position: 'absolute',
                        background: 'rgb(0,0,0,0.2)'
                      }}>
                      <div className="add-photo-outer">
                        <span>Add Photo </span>
                        <CameraAltIcon />
                      </div>
                    </Avatar>
                  </div>
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    type="file"
                    onChange={selectProfileImage}
                  />
                </div>
                <label htmlFor="contained-button-file" className="mobile-profile-edit">
                  <CameraAltIcon />
                </label>
              </label>
              <h2 className="profile-name">
                {currentUserInfo?.user?.firstName
                  ? currentUserInfo?.user?.firstName + ' ' + currentUserInfo?.user?.lastName
                  : 'Unnamed'}
              </h2>
            </div>
            <FormControl className="profile-form">
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
                  value={updatedUserDetails?.user?.phoneNumber?.phoneNumber ?? ''}
                  onPhoneNumberChange={onIntlChange}
                  onPhoneNumberBlur={onIntlBlur}
                  inputClassName="profile-intl-tel-input"
                />
                <TextField
                  id="wallet-address"
                  label="Wallet Address"
                  value={updatedAuthDetails?.address}
                  InputProps={{
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <ContentCopyIcon
                          onClick={() => {
                            navigator.clipboard.writeText(
                              updatedAuthDetails ? updatedAuthDetails.address ?? '' : ''
                            )
                            toast.success('Wallet Address is copied to clipboard!', {
                              position: toast.POSITION.TOP_RIGHT,
                              hideProgressBar: true,
                              closeOnClick: true,
                              pauseOnHover: true,
                              progress: undefined
                            })
                          }}
                        />
                      </InputAdornment>
                    )
                  }}
                  InputLabelProps={{
                    shrink: true
                  }}
                  disabled={true}
                />
                <BootStrapBlueBtn
                  variant="contained"
                  disableRipple
                  size="large"
                  onClick={saveProfileData}>
                  Save
                </BootStrapBlueBtn>
              </Stack>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default ProfileSetting
