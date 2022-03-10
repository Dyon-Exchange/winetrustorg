import React from 'react'
import Container from '@mui/material/Container'
import './Security.css'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { securityConst } from './SecurityConst'
import { ledgerConst } from './LedgerConst'
import BannerWithScroll from 'components/atoms/banner/BannerWithScroll'
import securityStyles from './SecurityStyle'

const bannerConst = {
  title: 'Security',
  image: '/images/banners/security.png',
  description: `Security of ownership is everything. Total security of title, condition and
                provenance are the foundations of WineTrust.`
}

const SecurityPage = () => {
  const classes = securityStyles()
  return (
    <div className={classes.root}>
      <BannerWithScroll>{bannerConst}</BannerWithScroll>
      <Box sx={{ background: '#f9fcff' }}>
        <Container className="container-padding">
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            WineTrust provides a six point
          </Typography>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Security Guarantee
          </Typography>
          <Grid container spacing={4} sx={{ mt: '10px' }}>
            {securityConst.map((item: any) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card className="card">
                  <CardContent sx={{ p: '1.5rem 3rem' }}>
                    <img src={item.icon} />
                    <p className="story-desc">{item.desc}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Container className="section-container">
        <Box className="section-outer-box">
          <Typography variant="h2">Public blockchain ledger gives immutable security</Typography>
          <Box sx={{ mb: '3rem' }}>
            <p>
              Every unit of inventory stored in WineTrust is automatically registered on an
              independent public blockchain ledger. This gives independent security of title,
              verifiable externally.
            </p>
            <p>
              WineTrust is a long-term protocol for recording and storing ownership records. Because
              it uses a blockchain ledger, its records can never be lost, erased, or tampered with.
              WineTrust is designed as a ‘land registry’ for fine wine &amp; spirits – a long-term
              and permanent record of ownership.
            </p>
            <p>
              No other wine custodian can offer this level of security. You no longer rely on a
              merchant, exchange or warehouse alone to guarantee your legal ownership.
            </p>
          </Box>
        </Box>
        <img src="/images/security/features/protect.png" width="100%" />
      </Container>
      <Box sx={{ background: '#212529' }}>
        <Container className="container-padding">
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              color: '#fff'
            }}>
            WineTrust is more than just ‘storage’
          </Typography>
          <p className="white-color text-align-center">
            Every unit of inventory stored in WineTrust is automatically registered on
            <br />
            an independent public blockchain ledger. This gives independent security of title,
            <br />
            verifiable externally.
          </p>
          <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
            {ledgerConst.map((item: any) => (
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  className="card"
                  sx={{
                    backgroundImage: item.bgImg,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundColor: '#000'
                  }}>
                  <CardContent sx={{ p: '1.5rem 3rem' }}>
                    <img src={item.icon} />
                    <p className="story-title white-color">{item.title}</p>
                    <p className="white-color">{item.desc}</p>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Container className="section-container">
        <Box className="section-outer-box">
          <Typography variant="h2">A gateway to NFTs </Typography>
          <Box sx={{ mb: '3rem' }}>
            <p>
              Every case secured in WineTrust is automatically tokenized as an digital asset on an
              independent blockchain register. This is primarily for security and provenance
              tracing, but tokenization brings a universe of additional benefits:
            </p>
            <ul className="story-desc">
              <li>
                <p>Store your cases in your own private digital wallet.</p>
              </li>
              <li>
                <p>Transfer ownership to anyone digitally.</p>
              </li>
              <li>
                <p>
                  List your cases for sale on exchanges such as OpenSea or the specialist Dyon
                  exchange for fine wine & spirits.
                </p>
              </li>
              <li>
                <p>Use your assets as collateral in the broader digital asset ecosystem.</p>
              </li>
            </ul>
          </Box>
        </Box>
        <img src="/images/security/nft.png" width="100%" />
      </Container>
      <Box sx={{ background: '#f9fcff' }}>
        <Container className="container-padding">
          WineTrust will also operate a fine wine & spirits digital asset exchange. This means that
          all assets in WineTrust can be offered for sale (in fractional amounts). This opens up a
          new world of liquidity, trading, and new entrants into the world of fine wine and spirits.
          We believe that tokenization represents the future of completely secure fine wine &
          spirits ownership and trading.
        </Container>
      </Box>
      <Container className="container-padding">
        <Box>
          <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Tokenization can transform trading of fine wine & spirits
          </Typography>
          <Box sx={{ lineHeight: '2' }}>
            <p>
              Buying and selling fine wine & spirits has historically been laborious, expensive, and
              illiquid.
            </p>
            <p>
              Spiralling prices have also pushed the highest quality fine wines & spirits out of the
              reach of most people. Wines like
              <span className="blue-text"> Château Pétrus, Domaine de la Romanée-Conti </span>
              and
              <span className="blue-text"> Screaming Eagle </span> have become the preserve of super
              wealthy collectors only. Aged top whiskies like
              <span className="blue-text"> Macallan </span> have become similarly inaccessible.
            </p>
            <p>
              Tokenization and fractional ownership through WineTrust and digital exchanges can turn
              this on its head.
            </p>
            <p>
              All wine stored in WineTrust is automatically tokenized and can be bought and sold on
              the WineTrust exchange in ‘fractional’ amounts. On the WineTrust exchange, for
              instance, you will be able to purchase a fraction of a case of the legendary{' '}
              <strong>Château Pétrus 1989 </strong>
              for as little as US$10.
            </p>
            <p>
              Fractionalised buying and selling means that fine wine & spirits lovers can build
              their collections and portfolios in partial amounts, over a long period of time. They
              invest whenever they want to, in whatever amount they can afford.
            </p>
            <p>
              People are using fractional ownership to create portfolios of the world’s greatest
              fine wines & spirits, without needing vast sums of capital. Everyone can now
              participate in the excellent financial performance of the world’s best fine wines,
              whiskies etc.
            </p>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default SecurityPage
