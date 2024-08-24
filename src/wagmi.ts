import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    mainnet,
    polygon,
    sepolia,
} from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'Swissmont Crypto Wallet',
    projectId: '704c9cb840da479fe3ec2987cd01f551', // get it from WalletConnect Cloud - this id won't work on your domain - create your own
    chains: [
        mainnet,
        polygon,
        ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
    ], // showing ethereum and polygon in dropdown 
    // Note: wagmi only works with EVM compatible chains, that's why we are not including solana or bitcoin
    ssr: true, // if your dApp uses server side rendering (SSR)
});