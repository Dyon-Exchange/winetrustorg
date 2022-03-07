import axios from 'axios'

export interface UserData {
  ethAddress: string
  nonce: number
}

export interface AuthData {
  token: string
}

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL ?? 'http://localhost:3030/'

/* export const updateProfileRequest = async (address: string): Promise<[UserData]> => {
  const { data } = await axios.patch(`/users/profile`)
  return data
}
 */
export const authRequest = async (address: string, signature: string): Promise<AuthData> => {
  const { data } = await axios.post('/users/auth', {
    address,
    signature
  })
  return data
}
