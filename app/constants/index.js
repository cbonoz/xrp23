import { polygonMumbai, avalanche, bsc, mainnet, filecoinCalibration, avalancheFuji, scrollSepolia, polygonZkEvmTestnet } from '@wagmi/core/chains'

export const APP_NAME = 'Witness'
export const APP_DESC = 'Verifiable data history on the Ripple EVM'

// https://wagmi.sh/react/chains
// https://opensource.ripple.com/docs/evm-sidechain/connect-metamask-to-xrpl-evm-sidechain/
export const xrpEvm = {
  id: 1_440_002,
  name: 'XRPL EVM Sidechain',
  network: 'XRPL Ledger Devnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Ripple',
    symbol: 'XRP',
  },
  rpcUrls: {
    public: { http: ['https://rpc-evm-sidechain.xrpl.org'] },
    default: { http: ['https://rpc-evm-sidechain.xrpl.org'] },
  },
  blockExplorers: {
    etherscan: { name: 'XRP ledger', url: 'https://evm-sidechain.xrpl.org' },
    default: { name: 'XRP Ledger', url: 'https://evm-sidechain.xrpl.org' },
  },
  // contracts: {
  //   multicall3: {
  //     address: '0xca11bde05977b3631167028862be2a173976ca11',
  //     blockCreated: 11_907_934,
  //   },
  // },
};

export const CHAIN_OPTIONS = [
  xrpEvm
]

export const CHAIN_MAP = CHAIN_OPTIONS.reduce((acc, chain) => {
  acc[chain.id] = chain
  return acc
}, {})

export const ACTIVE_CHAIN = CHAIN_OPTIONS[0];// scrollSepolia;

export const EXAMPLE_ITEM = {
  "id": 1,
  "name": "Disposition of assets [Trust & Will]",
  "description": "Private instructions for how assets of the family should be shared post mortem.",
}

export const IPFS_BASE_URL = 'https://ipfs.io/ipfs'

export const MAX_FILE_SIZE_BYTES = 5000000; // 5MB
