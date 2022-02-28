import React from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import customStyles from './AssetHomeStyle'
import clsx from 'clsx'
import 'react-multi-carousel/lib/styles.css'
import BannerSection from 'components/atoms/banner/commonBannerSection'
import StyledCarousel from './../atoms/carousel/StyledCarousel'
// import { useParams } from 'react-router'
// import axios from 'axios'

const AssetHome = () => {
  const classes = customStyles()
  const items = [
    {
      image: '/images/asset1.png'
    },
    {
      image: '/images/asset2.png'
    },
    {
      image: '/images/asset3.png'
    },
    {
      image: '/images/asset2.png'
    }
  ]
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  const bannerConst = {
    title: 'Asset Home',
    image: '/images/banners/home-banner.jpg',
    description: ''
  }
  return (
    <div>
      <BannerSection>{bannerConst}</BannerSection>
      <Box sx={{ background: '#e2e8f0', p: '12px 0' }}>
        {/* <Container>
          <b>Result Found:</b> <span style={{ marginLeft: '10px' }}>{params.product}</span>
        </Container> */}
      </Box>
      <Container>
        <Box className={clsx(classes.sectionMargin, classes.flex, classes.sectionPadding)}>
          <img
            src="/images/assetImg.jpeg"
            alt="asset home label"
            width="40%"
            className="img-fit-content"
          />
          <Box className={classes.assetDetailBox}>
            <h2 className="text-align-center mr-t-0">Chateau Lafite Rothschild 2010 (6*75cl)</h2>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Producer</p>
              <p>Chateau Lafite Rothschild</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Year</p>
              <p>2010</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Pack Size</p>
              <p>6*75cl</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Region</p>
              <p>Bordeaux</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Sub Region</p>
              <p>Paulliac</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Sub Sub Region</p>
              <p>Paulliac</p>
            </Box>
          </Box>
        </Box>
        <Box className={clsx(classes.sectionBorder, classes.flex, classes.sectionPadding)}>
          <img
            src="/images/wine.png"
            alt="asset home label"
            width="40%"
            className="img-fit-content"
          />
          <Box className={classes.assetDetailBox}>
            <Box className={classes.assetDesc}>
              Chateau Lafite Rothschild 2010 is one of the greatest ever wines from this Paulliac,
              Bordeaux First Growth Estate. Made in vintage which is universally acknowledged as one
              of the best in modern times, this wine will drink well untill 2080. This is a core
              holding in any serious fine wine collection.
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Producer</p>
              <p>Chateau Lafite Rothschild</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Token ID</p>
              <p>2010</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Custodian</p>
              <p>WineTrust</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Date minted</p>
              <p>15 January 2022</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Warehouse location</p>
              <p>London City Bond, Tibury, UNITED KINGDOM</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Date entered warehouse</p>
              <p>12 November 2021</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Warehouse ID number</p>
              <p>265498755</p>
            </Box>
          </Box>
        </Box>
        <Box
          className={clsx(
            classes.sectionBorder,
            classes.sectionPadding,
            classes.sectionBottomMargin
          )}>
          <h2 className="mr-t-0">Asset Images (photos of the exact asset):</h2>
          <Box>
            <StyledCarousel
              responsive={responsive}
              autoPlay={false}
              arrows={window.innerWidth >= 768 ? true : false}
              renderButtonGroupOutside={true}>
              {items.map((item: any) => (
                <img src={item.image} className={classes.carouselImg} />
              ))}
            </StyledCarousel>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default AssetHome
