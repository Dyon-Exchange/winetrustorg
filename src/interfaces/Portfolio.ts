export interface WineTrustbalance {
  id: string
  valueExact: string
  token: {
    id: string
    identifier: string
    uri: string
  }
}

export interface AccountPortfolio {
  id: string
  WineTrustbalances: WineTrustbalance[]
}

export interface AccountPortfolioResponse {
  accounts: AccountPortfolio[]
}

export interface AccountPortfolioRequest {
  accountId: string
}
