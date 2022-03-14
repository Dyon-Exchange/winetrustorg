import React, { useState } from 'react'
import BannerSection from 'components/atoms/banner/commonBannerSection'
import { Avatar, Container } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import AddIcon from '@mui/icons-material/Add'
import { Minimize } from '@mui/icons-material'
import { faqConst } from './FaqConst'
import faqStyles from './FaqStyle'
import BootstrapBlueBtn from 'components/atoms/buttons/BootStrapBlueBtn'
import { RoutesPath } from '../../constants'
import { useNavigate } from 'react-router-dom'

const bannerConst = {
  title: 'Your Questions Answered',
  image: '/images/banners/faq-banner.png',
  description: ''
}

const Faqs = () => {
  let [expanded, setExpanded] = useState<Boolean>(false)
  const classes = faqStyles()
  const navigate = useNavigate()
  return (
    <div className={classes.root}>
      <BannerSection>{bannerConst}</BannerSection>
      <Container className="container">
        {faqConst.map((item: any) => (
          <Accordion className="accordion-list">
            <AccordionSummary
              className="accordion-title"
              expandIcon={expanded ? <Minimize /> : <AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              onClick={() => {
                setExpanded(!expanded)
              }}>
              <Typography>{item.ques}</Typography>
            </AccordionSummary>
            <AccordionDetails className="accordion-desc">
              <Typography>{item.ans}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        <div className="have-ques-div">
          <h4>Have more questions ? Talk to us</h4>
          <BootstrapBlueBtn
            variant="contained"
            disableRipple
            size="small"
            endIcon={<Avatar src={'/images/general/arrow-right-white.svg'} />}
            onClick={() => {
              navigate(RoutesPath.CONTACTUS)
            }}>
            Learn More
          </BootstrapBlueBtn>
        </div>
      </Container>
    </div>
  )
}

export default Faqs
