"use client";

import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import React from "react";

export function SignMessage() {
  const { publicKey, signMessage } = useWallet();

  const onClick = async () => {
    if (!publicKey) {
      alert("Wallet not connected!");
      return;
    }
    if (!signMessage) {
      alert("Wallet does not support message signing!");
      return;
    }

    const message = (document.getElementById("message") as HTMLInputElement)
      ?.value;
    const encodedMessage = new TextEncoder().encode(message);
    const signature = await signMessage(encodedMessage);

    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) {
      alert("Message signature invalid!");
      return;
    }
    alert(`Message signature: ${bs58.encode(signature)}`);
  };

  return (
    <div className="h-full w-full flex flex-col justify-evenly">
      <p className="text-xs font-mono px-5 mx-auto text-center">
        Sign a message or verify a signed message.
      </p>

      <div className="max-w-56 flex flex-col gap-1 mx-auto">
        <input
          id="message"
          type="text"
          placeholder="Message"
          className="p-2 border border-slate-500 rounded-lg"
        />
        <button
          onClick={onClick}
          className="bg-purple-700 text-white p-2 rounded-br-md rounded-sm rounded-tl-md text-sm shadow-md font-semibold tracking-wide"
        >
          Sign Message
        </button>
      </div>
    </div>
  );
}
