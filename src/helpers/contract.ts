import Web3 from "web3";
import { AbiItem } from "web3-utils";
import abiJson from './abis/WineTrustToken.json';

export const web3 = new Web3(Web3.givenProvider);

const tokenAddress = process.env.REACT_APP_WINETRUST_CONTRACT_URL;
const tokenContract = new web3.eth.Contract(abiJson as AbiItem[], tokenAddress);

export const WineTrustToken = {
  address: tokenAddress,
  contract: tokenContract,
};
