import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloUrl =
  process.env.REACT_APP_GRAPHQL_API ??
  'https://api.thegraph.com/subgraphs/name/dyon-exchange/winetrust-rinkeby'

console.log(apolloUrl)

export const apolloClient = new ApolloClient({
  uri: apolloUrl,
  cache: new InMemoryCache()
})
