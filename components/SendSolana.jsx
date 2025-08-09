import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";


export default function SendSolana() {
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens() {
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }

    return <div className="w-full max-w-xl bg-gray p-6 rounded-lg shadow-md space-y-6 mt-20">
        <div className="flex flex-col justify-center items-center">
            <input id="to" type="text" placeholder="To" />
            <input id="amount" type="text" placeholder="Amount" />
            <button onClick={sendTokens}>Send</button>
        </div>
        
    </div>
}