'use client';

import { mainnet, arbitrum } from '@reown/appkit/networks';
import { createAppKit } from '@reown/appkit/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { type ReactNode } from 'react';
import { cookieToInitialState, WagmiProvider } from 'wagmi';
import { wagmiAdapter, projectId } from '@/config';

// Set up queryClient
const queryClient = new QueryClient();

// Set up metadata
const metadata = {
  name: 'coin-kit-web',
  description: 'Coin Kit Web Application',
  url: 'https://coin-kit-web.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
};

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId: projectId || 'YOUR_PROJECT_ID', // Replace with your actual project ID
  networks: [mainnet, arbitrum],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

export function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  const initialState = cookies
    ? cookieToInitialState(wagmiAdapter.wagmiConfig, cookies)
    : undefined;

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
