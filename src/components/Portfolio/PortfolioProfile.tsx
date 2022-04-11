import React from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import { WalletContext } from 'contexts/WalletContext'
import assetListingStyle from './PortfolioStyle'

const PortfolioProfile = () => {
  const { currentUserInfo, userDetails } = React.useContext(WalletContext)
  const classes = assetListingStyle()
  return (
    <div className={classes.portfolioProfile}>
      <Container className="profile-container">
        <Box>
          <h2>Portfolio</h2>
          <div className="profile-outer">
            <div className="profile-img">
              <img
                src={
                  currentUserInfo?.user?.profileImage ?? '/images/profileSetting/dummy-profile.png'
                }
                alt="WineTrust Profile"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null
                  currentTarget.src = '/images/profileSetting/dummy-profile.png'
                }}
              />
              <h2>
                {currentUserInfo?.user?.firstName
                  ? currentUserInfo?.user?.firstName + ' ' + currentUserInfo?.user?.lastName
                  : 'Unnamed'}
              </h2>
            </div>
            <div className="address">{userDetails?.address}</div>
          </div>
        </Box>
      </Container>
    </div>
  )
}

export default PortfolioProfile
