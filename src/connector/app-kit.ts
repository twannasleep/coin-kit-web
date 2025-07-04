import { createAppKit } from '@reown/appkit';
import {
  mainnet,
  arbitrum,
  sepolia,
  solana,
  solanaTestnet,
  solanaDevnet,
  AppKitNetwork,
} from '@reown/appkit/networks';
import { SolanaAdapter } from '@reown/appkit-adapter-solana';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  LedgerWalletAdapter,
} from '@solana/wallet-adapter-wallets';

const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  mainnet,
  arbitrum,
  sepolia,
  solana,
  solanaTestnet,
  solanaDevnet,
];

// 0. Get projectId from https://cloud.reown.com
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || '';

// 1. Create the Wagmi adapter
export const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  projectId,
  networks,
});

// 2. Create Solana adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  registerWalletStandard: true,
  wallets: [new PhantomWalletAdapter()],
});

// 3. Set up the metadata - Optional
const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://example.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
};

// 4. Create the AppKit instance
const appKitConfig = createAppKit({
  adapters: [wagmiAdapter, solanaWeb3JsAdapter],
  networks,
  metadata,
  projectId,
  features: {
    analytics: true,
  },
});

export default appKitConfig;
