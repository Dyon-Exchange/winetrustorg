import React from 'react'
import Container from '@mui/material/Container'
import './Security.css'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import { securityConst } from './SecurityConst'
import { ledgerConst } from './LedgerConst'
import BannerWithScroll from 'components/atoms/banner/BannerWithScroll'

const bannerConst = {
  title: 'Security',
  image: '/images/banners/security.png',
  description: `Security of ownership is everything. Total security of title, condition and
                provenance are the foundations of WineTrust.`
}

const SecurityPage = () => {
  return (
    <div>
      <BannerWithScroll>{bannerConst}</BannerWithScroll>
      <Box sx={{ background: '#f9fcff' }}>
        <Container sx={{ p: '100px 0' }}>
          <Typography
            variant="h2"
            sx={{ fontSize: '2.25rem', fontWeight: '700', textAlign: 'center', mb: '2rem' }}>
            WineTrust provides a six point
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: '2.25rem', fontWeight: '700', textAlign: 'center', mb: '2rem' }}>
            Security Guarantee
          </Typography>
          <Grid container spacing={4} sx={{ pb: '70px' }}>
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
      <Container sx={{ display: { xs: 'block', md: 'flex' } }}>
        <Box sx={{ alignSelf: 'center', pr: '2rem' }}>
          <h2 className="section-title">Public blockchain ledger gives immutable security</h2>
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
        <img src="/images/security/features/protect.png" />
      </Container>
      <Box sx={{ background: '#212529' }}>
        <Container sx={{ p: '100px 0' }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: '2.25rem',
              fontWeight: '700',
              textAlign: 'center',
              mb: '2rem',
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
          <Grid container spacing={4} sx={{ pb: '70px', justifyContent: 'center' }}>
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
      <Container sx={{ display: { xs: 'block', md: 'flex' } }} className="section-padding">
        <Box sx={{ alignSelf: 'center', pr: '2rem' }}>
          <h2 className="section-title">A gateway to NFTs </h2>
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
        <img src="/images/security/nft.png" />
      </Container>
      <Box sx={{ background: '#f9fcff' }}>
        <Container sx={{ p: '100px 0', pl: '0!important', pr: '0!important' }}>
          <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
            <img src="/images/security/dyon-graph.png" />
            <Box sx={{ alignSelf: 'center' }}>
              <Typography variant="h2" sx={{ fontSize: '2.2rem', fontWeight: '700', mb: '1.5rem' }}>
                The Dyon Exchange
              </Typography>
              <Box sx={{ mb: '3rem', lineHeight: '2' }}>
                <p>
                  WineTrust has partnered with Dyon – the world’s leading fine wine & spirits
                  digital asset exchange. This means that all assets in WineTrust can be offered for
                  sale (in fractional amounts) on Dyon.
                </p>
                <p>
                  This opens up a new world of liquidity, trading, and new entrants into the world
                  of fine wine and spirits. Anything you purchase on the Dyon exchange can also be
                  automatically stored in your WineTrust account.
                </p>
                <p>
                  We believe that tokenization represents the future of completely secure fine wine
                  & spirits ownership and trading.
                </p>
                <a
                  href="https://www.dyon.cc"
                  target="_blank"
                  className="btn btn-blue dyon-exchange-btn border-radius-8">
                  See Dyon Exchange
                  <span className="arrow-right-white"></span>
                </a>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container sx={{ display: { xs: 'block', md: 'flex' } }}>
        <Box sx={{ alignSelf: 'center', pr: '2rem' }}>
          <h2 className="section-title">
            Tokenization can transform trading of fine wine & spirits
          </h2>
          <Box sx={{ mb: '3rem', lineHeight: '2', pr: '4rem' }}>
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
              dedicated exchanges in ‘fractional’ amounts. On the Dyon exchange, for instance, you
              can purchase a fraction of a case of the legendary Château Pétrus 1989 for as little
              as US$10.
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
            <a
              href="https://www.dyon.cc"
              target="_blank"
              className="btn btn-blue dyon-exchange-btn border-radius-8">
              See Dyon Exchange
              <span className="arrow-right-white"></span>
            </a>
          </Box>
        </Box>
        <img src="/images/security/dyon-wp.png" className="img-fit-content border-radius-22" />
      </Container>
    </div>
  )
}

export default SecurityPage
