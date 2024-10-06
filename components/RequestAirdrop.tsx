"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useRef } from "react";

const RequestAirdrop = () => {
  const wallet = useWallet();
  const { connection } = useConnection();
  const amountRef = useRef<HTMLInputElement>(null);

  const requestAirdrop = () => {
    const publicKey = wallet.publicKey;
    if (!publicKey) {
      console.error("Wallet not connected");
      return;
    }

    const amount = parseFloat(amountRef.current?.value || "0");

    connection.requestAirdrop(publicKey, amount * 1000000000);
  };

  return (
    <>
      <input
        type="text"
        ref={amountRef}
        placeholder="Amount"
        className="p-2 border border-gray-300 rounded-lg"
      />
      <button
        onClick={requestAirdrop}
        className="bg-blue-900 text-white p-2 rounded-md text-sm font-semibold tracking-wide"
      >
        Request Airdrop
      </button>
    </>
  );
};

export default RequestAirdrop;
