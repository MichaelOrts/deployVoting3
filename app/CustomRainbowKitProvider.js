'use client'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { sepolia } from '@/utils/sepolia';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
    appName: 'Project Voting',
    projectId: '4b89f8ce0af198f46977dc74b4aaba58',
    chains: [sepolia],
    ssr: true, 
});

const queryClient = new QueryClient();
const CustomRainbowKitProvider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
                {children}
            </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
  )
}
export default CustomRainbowKitProvider