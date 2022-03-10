import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import { Box, Typography } from '@mui/material'
import Datamap from 'datamaps'
import BannerWithScroll from 'components/atoms/banner/BannerWithScroll'
import networkStyles from './NetworkStyle'

const bannerConst = {
  title: 'Network',
  image: '/images/banners/network.png',
  description: `WineTrust is a network of the world’s most trusted and most secure, Government
                regulated, dedicated fine wine and spirits storage facilities.`
}

const NetworkPage = () => {
  const classes = networkStyles()

  useEffect(() => {
    var dataMap = new Datamap({
      element: document.getElementById('dataMap'),
      projection: 'mercator',
      scope: 'world',
      fills: {
        defaultFill: '#A1B0BE'
      },
      data: {
        AUS: {
          fillKey: '#000000'
        },
        GRB: {
          fillKey: '#FF0000'
        },
        FRA: {
          fillKey: '#FF0000'
        },
        HKG: {
          fillKey: '#FF0000'
        },
        SGP: {
          fillKey: '#FF0000'
        }
      }
    })
    window.customMarker(Datamap)
    dataMap.addPlugin('markers', Datamap.customMarkers)
    dataMap.markers(
      [
        { name: 'London', radius: 0, latitude: 51.5073, longitude: -0.1276 },
        { name: 'France', radius: 0, latitude: 46.6034, longitude: 1.8883 },
        { name: 'Singapore', radius: 0, latitude: 1.3571, longitude: 103.8195 },
        { name: 'HongKong', radius: 0, latitude: 22.2793, longitude: 114.1628 }
      ],
      {
        fillOpacity: 1,
        popupOnHover: true,
        icon: {
          url: '/images/general/map-icon.svg',
          width: 25,
          height: 25
        }
      }
    )
    var mq = window.matchMedia('(min-width: 991px)')
    if (mq.matches) {
      dataMap.markers(
        [{ name: 'werLondon', radius: 0, latitude: 55.507351, longitude: 32.127758 }],
        {
          fillOpacity: 1,
          popupOnHover: true,
          icon: {
            url: '/images/general/location-london.png',
            width: 200,
            height: 100
          }
        }
      )
      dataMap.markers(
        [{ name: 'werFrance', radius: 0, latitude: 20.837788, longitude: -28.57918 }],
        {
          fillOpacity: 1,
          popupOnHover: true,
          icon: {
            url: '/images/general/location-france.png',
            width: 200,
            height: 100
          }
        }
      )
      dataMap.markers(
        [{ name: 'werHongKong', radius: 0, latitude: 30.837788, longitude: 81.57918 }],
        {
          fillOpacity: 1,
          popupOnHover: true,
          icon: {
            url: '/images/general/location-china.png',
            width: 200,
            height: 100
          }
        }
      )
      dataMap.markers(
        [{ name: 'werSingapore', radius: 0, latitude: -30.352083, longitude: 70.819839 }],
        {
          fillOpacity: 1,
          popupOnHover: true,
          icon: {
            url: '/images/general/location-singapur.png',
            width: 200,
            height: 100
          }
        }
      )
    } else {
      // window width is greater than 570px
    }
  })
  return (
    <div>
      <BannerWithScroll>{bannerConst}</BannerWithScroll>
      <Container className={classes.container}>
        <Box className="text-center">
          <Typography variant="h2" sx={{ mb: '1.5rem' }}>
            Our network compasses:
          </Typography>
          <Box className="datamap-text" sx={{ pb: '3rem' }}>
            Retailers and merchants are also joining WineTrust and allowing their <br /> clients to
            enjoy the benefits of the WineTrust protocol
          </Box>
          <Box>
            <div id="dataMap"></div>
            <Typography variant="h5" className="datamap-text semi-bold">
              In the future, we expect WineTrust to become the dominant storage solution for all
              top-quality fine wines and spirits across the world.
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default NetworkPage
