import axios from 'axios'
import { IAuthData, IUserData } from 'interfaces'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL ?? 'http://localhost:3030/'

export const searchUsersRequest = async (address: string): Promise<[IUserData]> => {
  const { data } = await axios.get(`/users/search?address=${address}`)
  return data
}

export const createUserRequest = async (address: string): Promise<IUserData> => {
  const { data } = await axios.post('/users', {
    address
  })
  return data
}

export const authRequest = async (address: string, signature: string): Promise<IAuthData> => {
  const { data } = await axios.post('/users/auth', {
    address,
    signature
  })
  axios.defaults.headers.common['Authorization'] = data.token
  return data
}
