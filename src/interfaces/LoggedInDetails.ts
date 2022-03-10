export interface ILoggedInDetails {
  user?: {
    firstName?: string | undefined
    lastName?: string | undefined
    email?: string | undefined
    profileImage?: string | undefined
    phoneNumber?: {
      countryCode: string | undefined
      phoneNumber: string | undefined
    }
  }
}
