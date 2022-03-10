import { ILoggedInDetails } from './LoggedInDetails'

export interface IAuthData extends ILoggedInDetails {
  token: string
}
