import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  console.warn('Project ID is not defined, using a placeholder for development')
}

export const networks = [mainnet, arbitrum]

// Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId: projectId || 'YOUR_PROJECT_ID', // Replace with your actual project ID from Reown Cloud
  networks
})

export const config = wagmiAdapter.wagmiConfig 