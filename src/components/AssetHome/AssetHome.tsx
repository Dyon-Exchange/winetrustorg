import React, { Fragment, useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import customStyles from './AssetHomeStyle'
import 'react-multi-carousel/lib/styles.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { LoaderContext } from 'contexts/LoaderContext'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'
import { get } from 'lodash'
import BootstrapBlueBtn from 'components/atoms/buttons/BootStrapBlueBtn'

const AssetHome = () => {
  const classes = customStyles()
  const params = useParams()
  const [assetData, setAsset] = useState<any>({})
  const [assetImages, setImageSlider] = useState<any>([])
  const [marketingImages, setMarketingSlider] = useState<any>([])
  const { loading, setLoading } = React.useContext(LoaderContext)
  const navigate = useNavigate()

  const sliderImageKeyArr = [
    'initialConditionReport',
    'initialConditionReport1',
    'initialConditionReport2',
    'initialConditionReport3',
    'initialConditionReport4',
    'initialConditionReport5',
    'initialConditionReport6'
  ]

  const marketingImageKeyArr = [
    'internalMarketingImage',
    'product.labelImage',
    'product.bottleImage'
  ]

  useEffect(() => {
    fetchAssetDetail()
  }, [])

  const setSliderImages = (product: any) => {
    let items: any = []
    sliderImageKeyArr.forEach(key => {
      if (product[key]) {
        items.push({
          original: `${process.env.REACT_APP_PINATA}${product[key]}`,
          thumbnail: `${process.env.REACT_APP_PINATA}${product[key]}`,
          thumbnailWidth: 'auto'
        })
      }
    })
    setImageSlider(items)
  }

  const isBlank = (str: string) => {
    return !str || /^\s*$/.test(str)
  }

  const setMarketingSliderImages = (product: any) => {
    const items: any = []
    marketingImageKeyArr.forEach(key => {
      const imagePath = get(product, key)
      if (imagePath) {
        items.push({
          original: `${process.env.REACT_APP_PINATA}${imagePath}`,
          thumbnail: `${process.env.REACT_APP_PINATA}${imagePath}`,
          thumbnailWidth: 30
        })
      }
    })
    setMarketingSlider(items)
  }

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
      setMarketingSliderImages(result.data)
      setSliderImages(result.data)
      setLoading(false)
    })
  }

  return (
    <div className={classes.root}>
      <Container className={loading ? 'asset-container loading' : 'asset-container'}>
        <ToastContainer />
        {assetData &&
        Object.keys(assetData).length > 0 &&
        Object.getPrototypeOf(assetData) === Object.prototype ? (
          <Fragment>
            <Box className="flex section-padding" paddingTop={'75px !important'}>
              <div className="img-outer">
                {assetData?.product?.labelImage ? (
                  <ImageGallery
                    items={marketingImages}
                    useTranslate3D={false}
                    infinite={true}
                    lazyLoad={true}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    thumbnailPosition="left"
                    slideDuration={450}
                    autoPlay={false}
                  />
                ) : (
                  <img
                    src="/images/assetImg.jpeg"
                    alt="asset home label"
                    height="345px"
                    width="100%"
                  />
                )}
              </div>
              <Box className="asset-spec-wrapper">
                <h2 className="mr-t-0">{assetData?.product?.longName}</h2>
                {!isBlank(assetData?.product?.producerName) ? (
                  <Box>
                    <p>Producer:</p>
                    <p>{assetData?.product?.producerName}</p>
                  </Box>
                ) : (
                  ''
                )}
                <Box>
                  <p>Year:</p>
                  <p>{assetData?.product?.year}</p>
                </Box>
                <Box>
                  <p>Pack Size:</p>
                  <p>{assetData?.product?.packSize}</p>
                </Box>
                {isBlank(assetData?.product?.country) ? (
                  <Box>
                    <p>Country:</p>
                    <p>{assetData?.product?.country}</p>
                  </Box>
                ) : (
                  ''
                )}
                <Box>
                  <p>Region:</p>
                  <p>{assetData?.product?.region}</p>
                </Box>
                {!isBlank(assetData?.product?.subRegion) ? (
                  <Box>
                    <p>Sub Region:</p>
                    <p>{assetData?.product?.subRegion}</p>
                  </Box>
                ) : (
                  ''
                )}
                {!isBlank(assetData?.product?.subSubRegion) ? (
                  <Box>
                    <p>Sub Sub Region:</p>
                    <p>{assetData?.product?.subSubRegion}</p>
                  </Box>
                ) : (
                  ''
                )}
                {!isBlank(assetData?.tokenId) ? (
                  <Box>
                    <p>View on:</p>
                    <a
                      href={`${process.env.REACT_APP_OPENSEA_URL}${assetData?.tokenId}`}
                      style={{ textDecoration: 'none', marginTop: '0.8rem' }}
                      target="_blank"
                      rel="noreferrer">
                      <BootstrapBlueBtn
                        variant="contained"
                        disableRipple
                        size="small"
                        className="buy-on-opensea">
                        <img
                          src="/images/general/opensea.svg"
                          className="open-sea-img"
                          alt="buy on opensea"></img>
                        <span style={{ fontSize: '18px' }}>OpenSea</span>
                      </BootstrapBlueBtn>
                    </a>
                  </Box>
                ) : (
                  ''
                )}
              </Box>
            </Box>
            <Box className="section-border flex section-padding">
              <div className="img-outer">
                {assetData?.initialConditionReport ? (
                  <ImageGallery
                    lazyLoad={true}
                    infinite={true}
                    showFullscreenButton={false}
                    items={assetImages}
                    showPlayButton={false}
                    thumbnailPosition="left"
                    slideDuration={450}
                    autoPlay={false}
                  />
                ) : !('initialConditionReport' in assetData) ? (
                  <img src="/images/assetImg.jpeg" alt="asset home bottle img" width="100%" />
                ) : (
                  ''
                )}
                <div style={{ marginTop: '30px', marginLeft: '100px' }}>
                  {assetData?.initialConditionText}
                </div>
              </div>
              <Box className="asset-spec-wrapper">
                <h2>Verification & NFT Details</h2>
                <Box>
                  <p>Asset ID</p>
                  <p>{assetData.assetId ?? assetData._id}</p>
                </Box>
                <Box>
                  <p>Custodian</p>
                  <p>WineTrust</p>
                </Box>
                <Box>
                  <p>Date minted</p>
                  <p>
                    {assetData?.tokenisedAt ? new Date(assetData?.tokenisedAt).toDateString() : '-'}
                  </p>
                </Box>
                <Box>
                  <p>Warehouse location</p>
                  <p>{assetData?.preAdvice?.arrivalWarehouse.name}</p>
                </Box>
                <Box>
                  <p>Date entered warehouse</p>
                  <p>{assetData?.landedAt ? new Date(assetData?.landedAt).toDateString() : '-'}</p>
                </Box>
                <Box>
                  <p>Warehouse ID number</p>
                  <p>{assetData?.warehouseLocationNo}</p>
                </Box>
                <h2>About this asset</h2>
                <Box className="asset-desc">{assetData?.product?.description}</Box>
              </Box>
            </Box>
          </Fragment>
        ) : (
          ''
        )}
      </Container>
    </div>
  )
}

export default AssetHome
