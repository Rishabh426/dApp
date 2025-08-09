# Solana Token Faucet 🪙

A decentralized application (dApp) built on the Solana blockchain that allows users to interact with Solana's devnet for testing and development purposes. This application provides essential wallet functionalities including airdropping SOL tokens, sending transactions, checking account balances, and signing messages.

## 🌐 Live Demo

**[Visit the Live Application](https://solanatokenfaucet.vercel.app/)**

## 📂 Repository

**[GitHub Repository](https://github.com/Rishabh426/dAppproject)**

## ✨ Features

- **🪂 SOL Airdrop**: Request free SOL tokens on Solana devnet for testing
- **💸 Send Transactions**: Transfer SOL tokens to other wallet addresses
- **💰 Balance Checker**: View your current SOL balance in real-time
- **✍️ Message Signing**: Sign custom messages with your wallet
- **✍️ Transaction Signing**: Secure transaction signing with wallet integration
- **🔗 Devnet Integration**: Fully integrated with Solana's devnet environment
- **📱 Responsive Design**: Mobile-friendly interface built with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Blockchain**: Solana (Devnet)
- **Language**: JavaScript
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager
- A Solana wallet (Phantom, Solflare, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rishabh426/dAppproject.git
   cd dAppproject
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🔧 Configuration

### Network Setup

The application is pre-configured to work with Solana's devnet. The RPC endpoint is hardcoded in the application, so no additional configuration is required.

### Wallet Setup

1. Install a Solana wallet extension (recommended: Phantom Wallet)
2. Create a new wallet or import an existing one
3. Switch your wallet network to **Devnet**
4. Connect your wallet to the application

## 📖 Usage

### 1. Connect Your Wallet
- Click the "Connect Wallet" button
- Select your preferred Solana wallet
- Approve the connection request

### 2. Airdrop SOL Tokens
- Navigate to the airdrop section
- Click "Request Airdrop" to receive free SOL tokens
- Wait for the transaction to confirm

### 3. Check Balance
- Your current SOL balance will be displayed automatically
- Refresh the page or reconnect wallet to update balance

### 4. Send SOL
- Enter the recipient's wallet address
- Specify the amount of SOL to send
- Review and confirm the transaction
- Sign the transaction with your wallet

### 5. Sign Messages
- Enter a custom message in the signing section
- Click "Sign Message" to create a cryptographic signature
- Verify the signature with your wallet

## 🏗️ Project Structure

```
solana-token-faucet-public/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── AccBalance.jsx
│   │   ├── Airdrop.jsx
│   │   ├── SendSolana.jsx
│   │   └── SignMessage.jsx
│   ├── utils/
│   │   ├── solana.js
│   │   └── wallet.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

### Component Overview

- **AccBalance.jsx**: Displays the current SOL balance of the connected wallet
- **Airdrop.jsx**: Handles SOL token airdrop functionality on devnet
- **SendSolana.jsx**: Manages SOL transfer transactions between wallets
- **SignMessage.jsx**: Provides message signing capabilities

## 🔐 Security Features

- **Client-side signing**: All transactions are signed locally in your browser
- **Devnet only**: Application is hardcoded for devnet to prevent mainnet accidents
- **Wallet integration**: Secure connection through established wallet providers
- **Transaction verification**: All transactions are verified on the Solana blockchain
- **Message signing**: Cryptographic message signing for authentication

## 🌐 Deployment

This project is deployed on Vercel. To deploy your own instance:

1. **Fork the repository**
   ```bash
   git clone https://github.com/Rishabh426/dAppproject.git
   ```

2. **Connect to Vercel**
   - Import your GitHub repository to Vercel
   - No environment variables needed (endpoints are hardcoded)
   - Deploy automatically

3. **Custom Domain** (Optional)
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository from [https://github.com/Rishabh426/dAppproject](https://github.com/Rishabh426/dAppproject)
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/Rishabh426/dAppproject/issues) section
2. Create a new issue with detailed information
3. Join the Solana developer community for additional support

## 👨‍💻 Developer

**Rishab Chawla**
- GitHub: [@Rishabh426](https://github.com/Rishabh426)
- Project: [dAppproject](https://github.com/Rishabh426/dAppproject)

## 🙏 Acknowledgments

- [Solana Labs](https://solana.com/) for the amazing blockchain infrastructure
- [Solana Web3.js](https://github.com/solana-labs/solana-web3.js) for the JavaScript SDK
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [React](https://reactjs.org/) for the UI framework

## 📊 Project Stats

- **Network**: Solana Devnet (Hardcoded)
- **Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Repository**: Public
- **Status**: ✅ Live and Active

## 🚀 Features Breakdown

| Feature | Component | Description |
|---------|-----------|-------------|
| Balance Display | AccBalance.jsx | Shows current SOL balance |
| Token Airdrop | Airdrop.jsx | Request free devnet SOL |
| Send Tokens | SendSolana.jsx | Transfer SOL to other wallets |
| Message Signing | SignMessage.jsx | Sign custom messages |

---

**⚠️ Disclaimer**: This application is designed for development and testing purposes only. It operates on Solana's devnet, and the SOL tokens have no real-world value. Always verify you're on the correct network before making transactions.

**🔗 Quick Links**:
- [Live Demo](https://solanatokenfaucet.vercel.app/)
- [Source Code](https://github.com/Rishabh426/dAppproject)
- [Solana Devnet Explorer](https://explorer.solana.com/?cluster=devnet)
```
```

