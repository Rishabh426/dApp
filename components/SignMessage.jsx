import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";

export default function SignMessage() {
    const { publicKey, signMessage } = useWallet();

    async function sign() {
        if (!publicKey) throw new Error("Wallet not Connected");
        if (!signMessage) throw new Error("Wallet does not support message signing!");

        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes()))
            throw new Error("Message signature invalid");

        alert(`Message signature: ${bs58.encode(signature)}`);
    }

    return (
        <div className="flex justify-between items-center w-full max-w-xl">
            <input
                id="message"
                type="text"
                placeholder="Message"
                className="rounded-lg w-1/2 h-12 px-3 border-2 border-black"
            />
            <button
                onClick={sign}
                className="bg-blue-500 rounded-lg px-4 h-12 text-white shadow-md hover:bg-blue-600"
            >
                Sign Message
            </button>
        </div>
    );
}