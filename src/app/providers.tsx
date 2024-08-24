'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from '../wagmi';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                {/* coolmode - for button animation */}
                <RainbowKitProvider showRecentTransactions={true} coolMode>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}