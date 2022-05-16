import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { useQuery } from '@apollo/client'
import assetListingStyle from './PortfolioStyle'
import { LoaderContext } from 'contexts/LoaderContext'
import { AccountPortfolioRequest, AccountPortfolioResponse, WineTrusttoken } from 'interfaces'
import { getPortfolioGqlQuery } from 'api/portfolio/portfolio'
import axios from 'axios'
import { WalletContext } from 'contexts/WalletContext'
import { LoggedInPortfolio } from './LoggedInPortfolio'
import PortfolioProfile from './PortfolioProfile'

const Portfolio = () => {
  let [rowdata, setRowdata] = useState<undefined | []>(undefined)
  const classes = assetListingStyle()
  const { setLoading } = React.useContext(LoaderContext)
  const { walletConnected, userDetails } = React.useContext(WalletContext)

  // const accountAddress = '0x146e82dd91e608a40ee56535dfdfb66f8291d9b8'

  const accountPortfolioGqlQuery = walletConnected
    ? getPortfolioGqlQuery(userDetails!.address)
    : getPortfolioGqlQuery('')

  const { loading, error, data, refetch } = useQuery<AccountPortfolioResponse, AccountPortfolioRequest>(
    accountPortfolioGqlQuery,
    { skip: !walletConnected }
  )

  const getAllPortfolioData = async (tokens: WineTrusttoken[]) => {
    const portfolioRequests: Promise<any>[] = []
    delete axios.defaults.headers.common['Authorization']
    tokens.forEach(token => {
      portfolioRequests.push(
        axios.get(`https://ipfs.io/ipfs/${token.uri}`, {
          transformRequest: [
            (data, headers) => {
              // due to typescript error in the axios file
              // @ts-ignore: Unreachable code error
              delete headers.common.Authorization
              return data
            }
          ]
        })
      )
    })
    Promise.all(portfolioRequests).then(portfolioData => {
      const rowdata: any = []
      portfolioData.forEach((row, index) => {
        rowdata.push({ ...tokens[index], metadata: row.data })
      })
      setRowdata(rowdata)
    })
  }

  useEffect(() => {
    if (data) {
      const portfolioAccount = data.accounts[0]
      const tokens: WineTrusttoken[] = []
      if (portfolioAccount) {
        portfolioAccount.WineTrustbalances.forEach(balance => {
          if (balance.valueExact === "1") {
            tokens.push({ ...balance.token, uri: balance.token.uri.replace('ipfs://', '') })
          }
        })
      }
      getAllPortfolioData(tokens)
    }
  }, [data])

  useEffect(() => {
    setLoading(loading)
  }, [loading, setLoading])

  if (error) {
    return <h1>Something went wrong</h1>
  }

  return (
    <div className={classes.root}>
      <Container className="container">
        <PortfolioProfile />
        {walletConnected && rowdata && rowdata.length > 0 ? (
          <LoggedInPortfolio data={rowdata} onRefetch={() => refetch()}></LoggedInPortfolio>
        ) : walletConnected && rowdata && rowdata.length === 0 ? (
          <div style={{ textAlign: 'center' }}>You do not have any asset in your portfolio</div>
        ) : !walletConnected ? (
          <div style={{ textAlign: 'center' }}>
            Please connect to your wallet to see your portfolio
          </div>
        ) : (
          ''
        )}
      </Container>
    </div>
  )
}

export default Portfolio
