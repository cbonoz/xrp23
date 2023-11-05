import { polygonMumbai, avalanche, bsc, mainnet, filecoinCalibration, avalancheFuji, scrollSepolia, polygonZkEvmTestnet } from '@wagmi/core/chains'

export const APP_NAME = 'Witness'
export const APP_DESC = 'Verifiable data history on the Ripple EVM'

export const CHAIN_OPTIONS = [
  polygonMumbai
]

export const CHAIN_MAP = CHAIN_OPTIONS.reduce((acc, chain) => {
  acc[chain.id] = chain
  return acc
}, {})

export const ACTIVE_CHAIN = polygonMumbai;// scrollSepolia;

export const EXAMPLE_ITEM = {
    "id": 1,
    "name": "Disposition of assets [Trust & Will]",
    "description": "Private instructions for how assets of the family should be shared post mortem.",
}

export const IPFS_BASE_URL = 'https://ipfs.io/ipfs'
// export const IPFS_BASE_URL = 'https://gateway.pinata.cloud/ipfs'
// export const IPFS_BASE_URL = 'https://saturn.ms/ipfs'
