/* eslint-disable import/prefer-default-export */

// Currently only supporting rinkeby, networkId of 4
interface SupportedNetwork {
  chainId: number;
  name: string;
}

export const SUPPORTED_NETWORKS: SupportedNetwork[] = [
  { chainId: '0x4', name: "Rinkeby" },
  { chainId: '0x1', name: "Mainnet"},
];
