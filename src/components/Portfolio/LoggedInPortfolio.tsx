import React from 'react'
import { WalletContext } from 'contexts/WalletContext'
import BootstrapBlueBtn from 'components/atoms/buttons/BootStrapBlueBtn'
import { Box, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'

const getDataFromAttribute = (item: { attributes: any[] }, key: string) => {
  let keyData = '-'
  item.attributes.forEach((itemData: { trait_type: any; value: string }) => {
    if (itemData.trait_type === key) {
      keyData = itemData.value
    }
  })
  return keyData
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export const LoggedInPortfolio = (data: any) => {
  const navigate = useNavigate()

  const navigateToAsset = (param: any) => {
    navigate(`/asset-home/${param}`)
  }

  const { userDetails, loggedIn, loggedInDetails } = React.useContext(WalletContext)
  const rowdata = data.data

  const owner =
    loggedIn && loggedInDetails?.user?.firstName && loggedInDetails?.user?.lastName
      ? loggedInDetails?.user?.firstName + ' ' + loggedInDetails?.user?.lastName
      : userDetails?.address

  const [value, setValue] = React.useState(0)

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Wine NFTs" {...a11yProps(0)} />
            <Tab label="Coins/Tokens" {...a11yProps(1)} />
            <Tab label="Other NFTs" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Wine NFTs
        </TabPanel>
        <TabPanel value={value} index={1}>
          Coins/Tokens
        </TabPanel>
        <TabPanel value={value} index={2}>
          Other NFTs
        </TabPanel>
      </Box>
      <Grid container className="grid-container web-header cell-heading ">
        <Grid item xs={12} sm={6} lg={4}>
          <Box>Asset</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={1.8}>
          <Box>Asset ID</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Box>Warehouse Name</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={2.8}>
          <Box>Owner</Box>
        </Grid>
        <Grid item xs={12} sm={6} lg={1}></Grid>
      </Grid>

      {rowdata.map((item: any) => (
        <Grid container className="grid-container">
          <Grid item xs={12} sm={6} lg={4} key={item.id}>
            <Box className="cell-heading mobile-header">Asset</Box>
            <Box sx={{ display: 'flex' }}>
              <img
                src={`https://ipfs.io/ipfs/${item.image.replace('ipfs://', '')}`}
                alt=""
                className="asset-img"
              />
              <div className="asset-data">{item.name}</div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} lg={2} key={item.id}>
            <Box className="cell-heading mobile-header">Asset ID</Box>
            <div className="asset-data">{getDataFromAttribute(item, 'ID Number')}</div>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} key={item.id}>
            <Box className="cell-heading mobile-header">Warehouse Name</Box>
            <div className="asset-data">{getDataFromAttribute(item, 'Warehouse Name')}</div>
          </Grid>
          <Grid item xs={12} sm={6} lg={2} key={item.id}>
            <Box className="cell-heading mobile-header">Owner</Box>
            <div className="asset-data">{owner}</div>
          </Grid>
          <Grid item xs={12} sm={6} lg={1} key={item.id}>
            <BootstrapBlueBtn
              onClick={() => navigateToAsset(getDataFromAttribute(item, 'ID Number'))}
              className="view-btn">
              VIEW
            </BootstrapBlueBtn>
          </Grid>
        </Grid>
      ))}
    </div>
  )
}
