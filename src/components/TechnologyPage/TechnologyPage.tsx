import React from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import './TechnologyPage.css'
import BannerWithScroll from 'components/atoms/banner/BannerWithScroll'

const bannerConst = {
  title: 'Technology',
  image: '/images/banners/technology-banner.png',
  description: `WineTrust is underpinned by blockchain technology. But this isn’t “tech” for
                its own sake.`
}

const TechnologyPage = () => {
  return (
    <div>
      <BannerWithScroll>{bannerConst}</BannerWithScroll>
      <Container className="section-padding">
        <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
          <img src="/images/technologyPage/ownership-story-1.png" />
          <Box sx={{ pl: '3rem' }}>
            <h2 className="section-title">Blockchain ledger brings huge benefits</h2>
            <Box sx={{ mb: '3rem' }}>
              <p>
                Using a public Blockchain ledger brings huge benefits to opaque and inefficient
                asset classes like fine wine & spirits. A blockchain ledger improves trust and
                facilitates liquidity by facilitating far easier transfer of value, lowering
                transaction costs and ultimately providing a more secure and pleasurable experience
                for everyone.
              </p>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box sx={{ background: '#f9fcff' }} className="section-padding">
        <Container sx={{ display: { xs: 'block', md: 'flex' } }}>
          <Box sx={{ alignSelf: 'center', pr: '2rem' }}>
            <h2 className="section-title">Tokenized fine wine & spirits</h2>
            <Box sx={{ mb: '3rem' }}>
              <p>
                All assets stored within WineTrust are tokenized as ERC-1155 tokens (via on the
                public Ethereum blockchain).
              </p>
              <p>
                An ERC-1155 token representing each case or bottle stored in WineTrust creates not
                only an immutable proof of ownership, but also facilitates trading as a non-fungible
                token (“NFT”) on digital exchanges (such as the dedicated Dyon fine wine & spirits
                exchange).
              </p>
              <p>
                Tokenization of fine wine & spirits creates significant new liquidity in fine wine &
                spirits markets in two ways:
              </p>
              <ul className="story-desc">
                <li>
                  <p>
                    Creates a completely new user base amongst NFT collectors for fine wine &
                    spirits.
                  </p>
                </li>
                <li>
                  <p>
                    Transforms liquidity by facilitating trading in fractional amounts. Instead of
                    having to pay US$30,000 for a case of Château Pétrus 1989, users will be able to
                    buy a fraction of a case for as little as US$5 or US$10. Suddenly, everyone will
                    be able own at least a portion of the world’s legendary wines.
                  </p>
                </li>
              </ul>
            </Box>
          </Box>
          <img src="/images/technologyPage/ownership-story-2.png" />
        </Container>
      </Box>

      {/* Removed as of now by J */}

      {/* <Container className="section-padding">
        <h2 className="section-title text-align-center">
          Tokenized ownership of the
          <br />
          WineTrust protocol
        </h2>
        <Box sx={{ display: { xs: 'block', md: 'flex' }, pt: '20px' }}>
          <Box sx={{ flexGrow: 1, flexBasis: 0 }}>
            <p>The WineTrust token is an ERC-20 (Ethereum) smart contract with several elements:</p>
            <p>
              Tokenization of fine wine & spirits creates significant new liquidity in fine wine &
              spirits markets in two ways:
            </p>
            <p>
              Tokenization of fine wine & spirits creates significant new liquidity in fine wine &
              spirits markets in two ways:
            </p>
            <ul className="story-desc">
              <li>Governance rights over the WineTrust protocol.</li>
              <li>Reductions in custody fees.</li>
              <li>Distridutions of profits.</li>
            </ul>
          </Box>
          <Box sx={{ flexGrow: 1, flexBasis: 0, ml: '40px' }}>
            <p>
              These properties are coded into the token itself (which is what the term ‘smart
              contract’ means). The WineTrust token will trade on digital exchanges. This will give
              holders a chance to realise increases in value of the protocol, and also to buy more
              tokens if they believe that WineTrust will become the world’s dominant custodian.
            </p>
            <p>WineTrust ERC-20 token:</p>
            <ul className="story-desc">
              <li>Contract address</li>
              <li>Number of decimal places</li>
            </ul>
          </Box>
        </Box>
      </Container> */}
    </div>
  )
}

export default TechnologyPage
