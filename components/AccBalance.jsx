import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState } from "react";

export default function AccBalance() {

    const { connection } = useConnection();
    const wallet = useWallet();
    const [accbalance, setBalance] = useState(0);

    async function getBalance() {
        if(wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            setBalance(balance / LAMPORTS_PER_SOL);
        }
    }

    getBalance();
    return (
        <div className="flex items-center justify-between px-4 py-2 rounded-lg mt-5 gap-3">
          <p className="text-gray-700 font-bold text-xl">Account Balance </p>
          {<div className="text-gray-700 text-xl font-bold">{accbalance}</div>}
        </div>
      );
}