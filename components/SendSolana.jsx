import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";


export default function SendSolana() {
    const wallet = useWallet();
    const { connection } = useConnection();

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

    return (
        <div className="flex flex-col w-full max-w-xl bg-gray p-6 border-2 border-blue-500 rounded-lg shadow-md space-y-6 mt-5">
            <div className="flex flex-col gap-5">
                {/* Row for inputs */}
                <div className="flex gap-4">
                    <input
                        id="to"
                        type="text"
                        placeholder="To"
                        className="rounded-lg border-2 border-black w-1/2 h-10"
                    />
                    <input
                        id="amount"
                        type="text"
                        placeholder="Amount"
                        className="rounded-lg border-2 border-black w-1/2 h-10"
                    />
                </div>
                <button
                    onClick={sendTokens}
                    className="self-end bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                    Send
                </button>
            </div>
        </div>
    );
}