export interface WineTrusttoken {
  id: string
  identifier: string
  uri: string
}

export interface WineTrustbalance {
  id: string
  valueExact: string
  token: WineTrusttoken
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

export interface WineTrusttokenMetadataAttribute {
  trait_type: string
  value: any
}

export interface WineTrusttokenMetadata {
  name: string
  description: string
  image: string
  external_url: string
  attributes: WineTrusttokenMetadataAttribute[]
}

export interface PortfolioRowData extends WineTrusttoken {
  metadata: WineTrusttokenMetadata
}
