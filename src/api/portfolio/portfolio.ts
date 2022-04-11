import { gql } from '@apollo/client'

export const getPortfolioGqlQuery = (accountId: string) => gql`
  query {
    accounts(where: { id: "${accountId}" }) {
      id
      WineTrustbalances {
        id
        valueExact
        token {
          id
          identifier
          uri
        }
      }
    }
  }
`
