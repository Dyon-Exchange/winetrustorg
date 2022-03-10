import axios from 'axios'

import { ILoggedInDetails } from 'interfaces'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL ?? 'http://localhost:3030/'

export const profileUpdateRequest = async (
  profileData: ILoggedInDetails
): Promise<ILoggedInDetails> => {
  const { data } = await axios.post('/users/profile', profileData.user)
  return { user: { ...data.user } }
}

export const profileImageUpdateRequest = async (
  profileForm: FormData
): Promise<ILoggedInDetails> => {
  const { data } = await axios.post('/users/profile', profileForm)
  return { user: { ...data.user } }
}
