import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import customStyles from './AssetHomeStyle'
import 'react-multi-carousel/lib/styles.css'
import StyledCarousel from './../atoms/carousel/StyledCarousel'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { LoaderContext } from 'contexts/LoaderContext'
// import { useParams } from 'react-router'
// import axios from 'axios'

const AssetHome = () => {
  const classes = customStyles()
  const params = useParams()
  const [assetData, setAsset] = useState<any>({})
  const [assetImages, setImageSlider] = useState<any>([])
  const { setLoading } = React.useContext(LoaderContext)

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
    fetchAssetDetail()
  }, [])
  const fetchAssetDetail = () => {
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL ?? 'http://localhost:3030/'
    let queryStr = `/assets/${params.assetId}`
    setLoading(true)
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
      setLoading(false)
    })
  }

  const setFallbackImg = (currentTarget: any, img: string) => {
    currentTarget.onerror = null // prevents looping
    currentTarget.src = img
  }
  return (
    <div className={classes.root}>
      <Container className="asset-container">
        <Box className="flex section-padding">
          <div className="img-outer">
            <img
              src={`${process.env.REACT_APP_PINATA}${assetData?.product?.image}`}
              onError={({ currentTarget }) =>
                setFallbackImg(currentTarget, '/images/assetImg.jpeg')
              }
              alt="asset home label"
              height="345px"
              width="100%"
            />
          </div>
          <Box className="asset-spec-wrapper">
            <h2 className="text-align-center mr-t-0">{assetData?.product?.longName}</h2>
            <Box>
              <p>Producer</p>
              <p>Chateau Lafite Rothschild</p>
            </Box>
            <Box>
              <p>Year</p>
              <p>{assetData?.product?.year}</p>
            </Box>
            <Box>
              <p>Pack Size</p>
              <p>{assetData?.product?.packSize}</p>
            </Box>
            <Box>
              <p>Region</p>
              <p>{assetData?.product?.region}</p>
            </Box>
            <Box>
              <p>Sub Region</p>
              <p>{assetData?.product?.subRegion}</p>
            </Box>
            <Box>
              <p>Sub Sub Region</p>
              <p>{assetData?.product?.subSubRegion}</p>
            </Box>
          </Box>
        </Box>
        <Box className="section-border flex section-padding">
          <div className="img-outer">
            <img
              src={`${process.env.REACT_APP_PINATA}${assetData?.product?.bottleImage}`}
              alt="asset home bottle img"
              onError={({ currentTarget }) => setFallbackImg(currentTarget, '/images/wine.png')}
            />
          </div>

          <Box className="asset-spec-wrapper">
            <Box className="asset-desc">{assetData?.product?.description}</Box>
            <Box>
              <p>Producer</p>
              <p>Chateau Lafite Rothschild</p>
            </Box>
            <Box>
              <p>Token ID</p>
              <p>2010</p>
            </Box>
            <Box>
              <p>Custodian</p>
              <p>WineTrust</p>
            </Box>
            <Box>
              <p>Date minted</p>
              <p>15 January 2022</p>
            </Box>
            <Box>
              <p>Warehouse location</p>
              <p>{assetData?.preAdvice?.arrivalWarehouse.name}</p>
            </Box>
            <Box>
              <p>Date entered warehouse</p>
              <p>12 November 2021</p>
            </Box>
            <Box>
              <p>Warehouse ID number</p>
              <p>{assetData?.warehouseLocationNo}</p>
            </Box>
          </Box>
        </Box>
        {assetImages.length > 0 ? (
          <Box className="section-border section-padding">
            <h2 className="mr-t-0">Asset Images (photos of the exact asset):</h2>
            <Box>
              <StyledCarousel
                responsive={responsive}
                autoPlay={false}
                arrows={window.innerWidth >= 768 ? true : false}
                renderButtonGroupOutside={true}>
                {assetImages.map((item: any) => (
                  <img src={item.image} alt={item.image} className="carousel-img" height="400px" />
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
