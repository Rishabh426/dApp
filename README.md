Solana Token Faucet 🪙

A decentralized application (dApp) built on the Solana blockchain that allows users to interact with Solana's devnet for testing and development purposes. This application provides essential wallet functionalities including airdropping SOL tokens, sending transactions, checking account balances, and signing messages.

📂 Repository
GitHub Repository

✨ Features
    🪂 SOL Airdrop: Request free SOL tokens on Solana devnet for testing
    💸 Send Transactions: Transfer SOL tokens to other wallet addresses
    💰 Balance Checker: View your current SOL balance in real-time
    ✍️ Message Signing: Sign custom messages with your wallet
    ✍️ Transaction Signing: Secure transaction signing with wallet integration
    🔗 Devnet Integration: Fully integrated with Solana's devnet environment
    📱 Responsive Design: Mobile-friendly interface built with Tailwind CSS

🛠️ Tech Stack
    Frontend Framework: React 18
    Build Tool: Vite
    Styling: Tailwind CSS
    Blockchain: Solana (Devnet)
    Language: JavaScript
    Deployment: Vercel
    
🚀 Getting Started
    Prerequisites
    Before running this project, make sure you have:

    Node.js (v16 or higher)
    npm or yarn package manager
    A Solana wallet (Phantom, Solflare, etc.)
    
Installation
    Clone the repository
    git clone https://github.com/Rishabh426/dAppproject.git
    cd dAppproject
    Install dependencies

npm install
# or
yarn install
Start the development server
npm run dev
# or
yarn dev
Open your browser Navigate to http://localhost:5173 to view the application

🔧 Configuration
    Network Setup
    The application is pre-configured to work with Solana's devnet. The RPC endpoint is hardcoded in the application, so no additional configuration is required.

Wallet Setup
    Install a Solana wallet extension (recommended: Phantom Wallet)
    Create a new wallet or import an existing one
    Switch your wallet network to Devnet
    Connect your wallet to the application
    📖 Usage

    1. Connect Your Wallet
    Click the "Connect Wallet" button
    Select your preferred Solana wallet
    Approve the connection request
    2. Airdrop SOL Tokens
    Navigate to the airdrop section
    Click "Request Airdrop" to receive free SOL tokens
    Wait for the transaction to confirm
    3. Check Balance
    Your current SOL balance will be displayed automatically
    Refresh the page or reconnect wallet to update balance
    4. Send SOL
    Enter the recipient's wallet address
    Specify the amount of SOL to send
    Review and confirm the transaction
    Sign the transaction with your wallet
    5. Sign Messages
    Enter a custom message in the signing section
    Click "Sign Message" to create a cryptographic signature
    Verify the signature with your wallet
    🏗️ Project Structure
    solana-token-faucet-public/
    ├── public/
    │ ├── index.html
    │ └── favicon.ico
    ├── src/
    │ ├── components/
    │ │ ├── AccBalance.jsx
    │ │ ├── Airdrop.jsx
    │ │ ├── SendSolana.jsx
    │ │ └── SignMessage.jsx
    │ ├── utils/
    │ │ ├── solana.js
    │ │ └── wallet.js
    │ ├── App.jsx
    │ ├── main.jsx
    │ └── index.css
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    └── README.md

Component Overview

   AccBalance.jsx: Displays the current SOL balance of the connected wallet
   Airdrop.jsx: Handles SOL token airdrop functionality on devnet
   SendSolana.jsx: Manages SOL transfer transactions between wallets
   SignMessage.jsx: Provides message signing capabilities
   🔐 Security Features
   Client-side signing: All transactions are signed locally in your browser
   Devnet only: Application is hardcoded for devnet to prevent mainnet accidents
   Wallet integration: Secure connection through established wallet providers
   Transaction verification: All transactions are verified on the Solana blockchain
   Message signing: Cryptographic message signing for authentication
   🌐 Deployment
   This project is deployed on Vercel. To deploy your own instance:

Fork the repository

git clone https://github.com/Rishabh426/dAppproject.git
Connect to Vercel

Configure DNS settings
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

Development Guidelines
Fork the repository from https://github.com/Rishabh426/dAppproject
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

🆘 Support
If you encounter any issues or have questions:

Check the Issues section
Create a new issue with detailed information
Join the Solana developer community for additional support
👨‍💻 Developer
Rishab Chawla

GitHub: @Rishabh426
Project: dAppproject
🙏 Acknowledgments
Solana Labs for the amazing blockchain infrastructure
Solana Web3.js for the JavaScript SDK
Tailwind CSS for the utility-first CSS framework
Vite for the fast build tool
React for the UI framework
📊 Project Stats
Network: Solana Devnet (Hardcoded)
Framework: React + Vite
Styling: Tailwind CSS
Deployment: Vercel
Repository: Public
Status: ✅ Live and Active

🚀 Features Breakdown

    Feature Component Description
    Balance Display AccBalance.jsx Shows current SOL balance
    Token Airdrop Airdrop.jsx Request free devnet SOL
    Send Tokens SendSolana.jsx Transfer SOL to other wallets
    Message Signing SignMessage.jsx Sign custom messages
    ⚠️ Disclaimer: This application is designed for development and testing purposes only. It operates on Solana's devnet, and the SOL tokens have no real-world value. Always verify you're on the correct network before making transactions.

