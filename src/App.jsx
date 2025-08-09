import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'
import Airdrop from '../components/Airdrop';
import AccBalance from '../components/AccBalance';
import SignMessage from '../components/SignMessage';
import SendSolana from '../components/SendSolana';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 text-center">
        <h1 className="mt-10 text-5xl font-bold text-blue-500">
          Solana Token <span className="text-black">Faucet</span>
        </h1>
      </header>

      <div className="flex flex flex-col justify-around items-center mt-5">
        <ConnectionProvider endpoint={clusterApiUrl("devnet")}>
          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div className="flex justify-between mt-15 gap-20 mb-15">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <Airdrop />
              {/* <AccBalance /> */}
              <SignMessage />
              <SendSolana />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </div>
    </div>
  );
}

export default App;
