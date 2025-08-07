import { ed25519 } from "@noble/curves/ed25519"
import { useWallet } from "@solana/wallet-adapter-react"
import bs58 from "bs58"
import React from "react"

export default function SignMessage() {

    const { publicKey, signMessage } = useWallet();
    
    async function sign() {
        if(!publicKey) throw new Error("Wallet not Connected");
        if(!signMessage) throw new Error("Wallet does not support message signing!");

        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if(!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error("Message signature invalid");
        alert('success', `Message signature : ${bs58.encode(signature)}`);
    }

    return (
        <div>   
            <input id="message" type="text" placeholder="Message"></input>
            <button onClick={sign}>Sign Message</button>
        </div>
    )
}