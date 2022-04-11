import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import { useQuery } from '@apollo/client'
import assetListingStyle from './PortfolioStyle'
import { LoaderContext } from 'contexts/LoaderContext'
import { AccountPortfolioRequest, AccountPortfolioResponse } from 'interfaces'
import { getPortfolioGqlQuery } from 'api/portfolio/portfolio'
import axios from 'axios'
import { WalletContext } from 'contexts/WalletContext'
import { LoggedInPortfolio } from './LoggedInPortfolio'

const Portfolio = () => {
  let [rowdata, setrowdata] = useState<undefined | []>(undefined)
  const classes = assetListingStyle()
  const { setLoading } = React.useContext(LoaderContext)
  const { walletConnected, userDetails } = React.useContext(WalletContext)

  console.log(userDetails)

  const accountAddress = '0x146e82dd91e608a40ee56535dfdfb66f8291d9b8'

  const accountPortfolioGqlQuery = walletConnected
    ? //? getPortfolioGqlQuery(userDetails!.address)
      getPortfolioGqlQuery(accountAddress)
    : getPortfolioGqlQuery('')

  const { loading, error, data } = useQuery<AccountPortfolioResponse, AccountPortfolioRequest>(
    accountPortfolioGqlQuery,
    { skip: !walletConnected }
  )

  const getAllPortfolioData = async (portfolioResources: string[]) => {
    const portfolioRequests: Promise<any>[] = []
    delete axios.defaults.headers.common['Authorization']
    portfolioResources.forEach(portfolioResource => {
      portfolioRequests.push(
        axios.get(`https://ipfs.io/ipfs/${portfolioResource}`, {
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
      portfolioData.forEach(row => {
        rowdata.push(row.data)
      })
      setrowdata(rowdata)
    })
  }

  useEffect(() => {
    if (data) {
      const portfolioAccount = data.accounts[0]
      const portfolioInfoUri: string[] = []
      if (portfolioAccount) {
        portfolioAccount.WineTrustbalances.forEach(portfolioBalance => {
          portfolioInfoUri.push(portfolioBalance.token.uri.replace('ipfs://', ''))
        })
      }
      getAllPortfolioData(portfolioInfoUri)
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
        {walletConnected && rowdata && rowdata.length > 0 ? (
          <LoggedInPortfolio data={rowdata}></LoggedInPortfolio>
        ) : walletConnected && rowdata && rowdata.length === 0 ? (
          <div>You do not have any asset in your portfolio</div>
        ) : !walletConnected ? (
          <div> Please connect to your wallet to see your portfolio</div>
        ) : (
          ''
        )}
      </Container>
    </div>
  )
}

export default Portfolio
