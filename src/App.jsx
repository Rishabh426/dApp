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

function App() {

  return (
    <div>
      <ConnectionProvider endpoint={clusterApiUrl("devnet")}> 
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <WalletMultiButton />
            <WalletDisconnectButton />
            <div>
              Hi there,
            </div>
            <Airdrop />
            <AccBalance />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>

    </div>
  )
}

export default App
