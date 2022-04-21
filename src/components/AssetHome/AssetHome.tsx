import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import customStyles from './AssetHomeStyle'
import 'react-multi-carousel/lib/styles.css'
import StyledCarousel from './../atoms/carousel/StyledCarousel'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { LoaderContext } from 'contexts/LoaderContext'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AssetHome = () => {
  const classes = customStyles()
  const params = useParams()
  const [assetData, setAsset] = useState<any>({})
  const [isPdfLoading, setIsPdfLoading] = useState<boolean>(false)
  const [isDefaultImgShow, setIsDefaultImgShow] = useState<boolean>(false)
  const [assetImages, setImageSlider] = useState<any>([])
  const { setLoading } = React.useContext(LoaderContext)
  const navigate = useNavigate()

  let sliderImageKeyArr = [
    'initialConditionReport1',
    'initialConditionReport2',
    'initialConditionReport3',
    'initialConditionReport4',
    'initialConditionReport5',
    'initialConditionReport6'
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
      if (result.data === '') {
        toast.error('Requested asset does not exists', {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined
        })
        setTimeout(() => {
          setLoading(false)
          navigate(-1)
        }, 1500)
        return
      }
      setAsset(result.data)
      const product = result.data
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
        <ToastContainer />
        <Box className="flex section-padding" paddingTop={'75px !important'}>
          <div className="img-outer">
            {assetData?.product?.labelImage ? (
              <img
                src={`${process.env.REACT_APP_PINATA}${assetData?.product?.labelImage}`}
                onError={({ currentTarget }) => {
                  setFallbackImg(currentTarget, '/images/assetImg.jpeg')
                }}
                alt="asset home label"
                height="345px"
                width="100%"
              />
            ) : (
              <img src="/images/assetImg.jpeg" alt="asset home label" height="345px" width="100%" />
            )}
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
            {assetData?.product?.subRegion ? (
              <Box>
                <p>Sub Region</p>
                <p>{assetData?.product?.subRegion}</p>
              </Box>
            ) : (
              ''
            )}
            {assetData?.product?.subSubRegion ? (
              <Box>
                <p>Sub Sub Region</p>
                <p>{assetData?.product?.subSubRegion}</p>
              </Box>
            ) : (
              ''
            )}
          </Box>
        </Box>
        <Box className="section-border flex section-padding">
          <div className="img-outer">
            {isPdfLoading ? (
              <iframe
                title="asset condition report image"
                src={`${process.env.REACT_APP_PINATA}${assetData?.initialConditionReport}`}
                height="100%"
                width="100%"
                onError={() => {
                  setIsDefaultImgShow(true)
                }}
              />
            ) : (
              ''
            )}
            {assetData?.initialConditionReport && !isPdfLoading ? (
              <img
                src={`${process.env.REACT_APP_PINATA}${assetData?.initialConditionReport}`}
                alt="asset home bottle img"
                //onError={({ currentTarget }) => setFallbackImg(currentTarget, '/images/wine.png')}
                onError={() => setIsPdfLoading(true)}
                width="100%"
              />
            ) : isDefaultImgShow || !('initialConditionReport' in assetData) ? (
              <img src="/images/assetImg.jpeg" alt="asset home bottle img" width="100%" />
            ) : (
              ''
            )}
          </div>

          <Box className="asset-spec-wrapper">
            <Box className="asset-desc">{assetData?.product?.description}</Box>
            <Box>
              <p>Producer</p>
              <p>Chateau Lafite Rothschild</p>
            </Box>
            <Box>
              <p>Asset Id</p>
              <p>{assetData.assetId ?? assetData._id}</p>
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
                  <img
                    src={item.image}
                    alt={'Condition Report'}
                    className="carousel-img"
                    height="400px"
                  />
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
