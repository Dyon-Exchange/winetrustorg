import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import customStyles from './AssetHomeStyle'
import clsx from 'clsx'
import 'react-multi-carousel/lib/styles.css'
import StyledCarousel from './../atoms/carousel/StyledCarousel'
import axios from 'axios'
import { useParams } from 'react-router-dom'
// import { useParams } from 'react-router'
// import axios from 'axios'

const AssetHome = () => {
  const classes = customStyles()
  const params = useParams()
  const [assetData, setAsset] = useState<any>({})
  const [assetImages, setImageSlider] = useState<any>([])
  let sliderImageKeyArr = [
    'marketingImage1',
    'marketingImage2',
    'marketingImage3',
    'marketingImage4'
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
  useEffect(() => {
    fetchAssetDetail(params)
  }, [])
  const fetchAssetDetail = (params: any) => {
    let queryStr = `${process.env.REACT_APP_PRODUCT_DETAIL_ENDPOINT}${params.assetId}`
    axios.get(queryStr).then((result: any) => {
      setAsset(result.data)
      let product = result.data.product
      let items: any = []
      sliderImageKeyArr.forEach(key => {
        if (product[key]) {
          items.push({
            image: `${process.env.REACT_APP_PINATA}${product[key]}`
          })
        }
      })
      setImageSlider(items)
    })
  }

  return (
    <div>
      <Container sx={{ mt: '14%', pb: '10%' }}>
        <Box className={classes.resultFoundDiv}>
          <b>Result Found:</b> <span>{assetData?.product?.simpleName}</span>
        </Box>
        <Box className={clsx(classes.flex, classes.sectionPadding)}>
          <img
            src={`${process.env.REACT_APP_PINATA}${assetData?.product?.image}`}
            alt="asset home label"
            width="40%"
            height="345px"
          />
          <Box className={classes.assetDetailBox}>
            <h2 className="text-align-center mr-t-0">{assetData?.product?.longName}</h2>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Producer</p>
              <p>Chateau Lafite Rothschild</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Year</p>
              <p>{assetData?.product?.year}</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Pack Size</p>
              <p>{assetData?.product?.packSize}</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Region</p>
              <p>{assetData?.product?.region}</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Sub Region</p>
              <p>{assetData?.product?.subRegion}</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Sub Sub Region</p>
              <p>{assetData?.product?.subSubRegion}</p>
            </Box>
          </Box>
        </Box>
        <Box className={clsx(classes.sectionBorder, classes.flex, classes.sectionPadding)}>
          <div style={{ width: '40%' }} className={classes.bottleImgOuter}>
            <img
              src={`${process.env.REACT_APP_PINATA}${assetData?.product?.bottleImage}`}
              alt="asset home label"
            />
          </div>

          <Box className={classes.assetDetailBox}>
            <Box className={classes.assetDesc}>{assetData?.product?.description}</Box>
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
              <p>{assetData?.preAdvice?.arrivalWarehouse.name}</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Date entered warehouse</p>
              <p>12 November 2021</p>
            </Box>
            <Box className={classes.spaceBetWeenFlex}>
              <p className="heading">Warehouse ID number</p>
              <p>{assetData?.warehouseLocationNo}</p>
            </Box>
          </Box>
        </Box>
        {assetImages.length > 0 ? (
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
                {assetImages.map((item: any) => (
                  <img src={item.image} className={classes.carouselImg} height="400px" />
                ))}
              </StyledCarousel>
            </Box>
          </Box>
        ) : (
          ''
        )}
      </Container>
    </div>
  )
}

export default AssetHome
