import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function RequestAirdrop() {
    const wallet = useWallet();
    const { connection } = useConnection();

    async function requestAirdrop() {
        let amount = document.getElementById("amount").value;
        await connection.requestAirdrop(wallet.publicKey, amount * LAMPORTS_PER_SOL);
        alert(`Airdropped ${amount} SOL to ${wallet.publicKey.toBase58()}`);
    }

    return (
        <div className="flex justify-between items-center w-full max-w-xl mb-10">
            <input
                id="amount"
                type="number"
                placeholder="Amount"
                className="rounded-lg w-1/2 h-12 px-3 border-2 border-black"
            />
            <button
                onClick={requestAirdrop}
                className="bg-blue-500 rounded-lg px-4 h-12 text-white shadow-md hover:bg-blue-600"
            >
                Request Airdrop
            </button>
        </div>
    );
}