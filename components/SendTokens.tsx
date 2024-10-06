"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

export function SendTokens() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function sendTokens() {
    const to = (document.getElementById("to") as HTMLInputElement)?.value || "";
    const amountElement = document.getElementById("amount") as HTMLInputElement;
    const amount = amountElement ? amountElement.value : "";
    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey!,
        toPubkey: new PublicKey(to),
        lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
      })
    );

    await wallet.sendTransaction(transaction, connection);
    alert("Sent " + amount + " SOL to " + to);
  }

  return (
    <div className="h-full w-full flex-col flex justify-evenly">
      <p className="text-xs font-mono px-5 mx-auto text-justify">
        Send Solana to any account on devnet.
      </p>

      <div className="flex flex-col gap-1 max-w-56 mx-auto">
        <input
          id="to"
          type="text"
          placeholder="To"
          className="p-2 border border-slate-500 rounded-lg"
        />
        <input
          id="amount"
          type="text"
          placeholder="Amount"
          className="p-2 border border-slate-500 rounded-lg"
        />
        <button
          onClick={sendTokens}
          className="bg-purple-700 text-white p-2 rounded-br-md rounded-sm rounded-tl-md text-sm shadow-md font-semibold tracking-wide"
        >
          Send
        </button>
      </div>
    </div>
  );
}
