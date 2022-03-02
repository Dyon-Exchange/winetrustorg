import axios from "axios";

export interface UserData {
  ethAddress: string;
  nonce: number;
}

export interface AuthData {
  token: string;
}

axios.defaults.baseURL = "http://localhost:3030/";

export const searchUsersRequest = async (address: string): Promise<[UserData]> => {
  const { data } = await axios.get(`/users/search?address=${address}`);
  return data;
};

export const createUserRequest = async (address: string): Promise<UserData> => {
  const { data } = await axios.post("/users", {
    address
  });
  return data;
};

export const authRequest = async (address: string, signature: string): Promise<AuthData> => {
  const { data } = await axios.post("/users/auth", {
    address,
    signature,
  });
  return data;
};
