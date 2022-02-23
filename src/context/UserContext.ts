import React from 'react'

interface IUserContext {
  isLoggedIn: boolean
  userInfo: {
    walletAddress: string
    email: string
  }
}

export const UserContext: React.Context<IUserContext> = React.createContext<IUserContext>({
  isLoggedIn: false,
  userInfo: {
    walletAddress: '0xxbkk',
    email: ''
  }
})
