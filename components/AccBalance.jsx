import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function AccBalance() {

    const { connection } = useConnection();
    const wallet = useWallet();

    async function getBalance() {
        if(wallet.publicKey) {
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
        }
    }

    getBalance();
    return (
        <div>
            <p>Balance : </p> <div id="balance"></div>
        </div>
    )
}