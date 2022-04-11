import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/dyon-exchange/winetrust-rinkeby',
  cache: new InMemoryCache()
})
