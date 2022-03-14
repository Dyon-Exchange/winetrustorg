import React from 'react'
import BannerSection from 'components/atoms/banner/commonBannerSection'
import {
  Box,
  Container,
  Card,
  CardContent,
  Grid,
  Divider,
  FormControl,
  FormLabel,
  TextField,
  Checkbox,
  TextareaAutosize,
  Avatar
} from '@mui/material'
import { officesConst } from './OfficesConst'
import { contactForConst } from './ContactForConst'
import BootstrapBlueBtn from 'components/atoms/buttons/BootStrapBlueBtn'
import contactUsStyles from './ContactUsStyle'

const ContactUs = () => {
  const classes = contactUsStyles()

  const bannerConst = {
    title: 'Contact Us',
    image: '/images/banners/about-banner.jpeg',
    description: ''
  }
  return (
    <div className={classes.root}>
      <BannerSection>{bannerConst}</BannerSection>
      <Container>
        <Box>
          <Grid container spacing={4} className="offices-grid">
            {officesConst.map((item: any) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className="card-shadow">
                  <CardContent>
                    <img src={item.icon} alt={item.icon} />
                    <p className="semi-bold">{item.office}</p>
                    <Box>{item.location}</Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Grid container className="contact-for-grid card-shadow">
            {contactForConst.map((item: any, index) => (
              <Grid item xs={12} sm={12} md={4} className="space-bt-flex grid-item">
                <Box className="grid-item-box">
                  <img src={item.icon} alt={item.icon} />
                  <Box sx={{ p: '0 20px' }}>
                    <Box className="semi-bold">{item.feature}</Box>
                    <div>{item.contactAt}</div>
                  </Box>
                </Box>
                {index < contactForConst.length - 1 ? (
                  <div className="divider-outer">
                    <Divider orientation="vertical" flexItem className="web-divider"></Divider>
                    <Divider orientation="horizontal" flexItem className="mobile-divider"></Divider>
                  </div>
                ) : (
                  ''
                )}
              </Grid>
            ))}
          </Grid>
          <Box className="contact-form-outer card-shadow">
            <h2 className="text-align-center">We Want to Hear from You</h2>
            <FormControl className="contact-form">
              <Box className="space-bt-flex">
                <Box className="field-wrapper">
                  <FormLabel htmlFor="first-name" id="first-name">
                    First Name*
                  </FormLabel>
                  <TextField id="firstName" variant="outlined" size="small" />
                </Box>
                <Box className="field-wrapper">
                  <FormLabel htmlFor="last-name">Last Name*</FormLabel>
                  <TextField id="lastName" variant="outlined" size="small" />
                </Box>
              </Box>
              <Box className="space-bt-flex">
                <Box className="field-wrapper">
                  <FormLabel htmlFor="email-address">Email Address*</FormLabel>
                  <TextField id="emailAddress" variant="outlined" size="small" />
                </Box>
                <Box className="field-wrapper">
                  <FormLabel htmlFor="phone-no">Phone Number</FormLabel>
                  <TextField id="phoneNumber" variant="outlined" size="small" />
                </Box>
              </Box>
              <Box>
                <FormLabel>Your Message*</FormLabel>
                <TextareaAutosize minRows={6}></TextareaAutosize>
              </Box>
              <Box className="checkbox-outer">
                <Checkbox size="small" />I would like to receive periodic newsletters via email.
              </Box>
              <BootstrapBlueBtn
                variant="contained"
                disableRipple
                size="small"
                endIcon={<Avatar src={'/images/general/arrow-right-white.svg'} />}>
                Send Message
              </BootstrapBlueBtn>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default ContactUs
