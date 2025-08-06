import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function Airdrop() {

    // gives access to the public key
    const wallet = useWallet();
    const { connection } = useConnection();

    async function sendAirdropToUser() {
        const amount = document.getElementById("publickey").value;
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
        alert("Sol airdropped successfully")
    }
    return (
        <div>
            <input id="publickey" placeholder="Amount"></input>
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    )
}