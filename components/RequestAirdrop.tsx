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
      <div className="flex flex-col gap-1 max-w-52">
        <input
          type="text"
          ref={amountRef}
          placeholder="Amount"
          className="p-2 border border-slate-500 rounded-lg"
        />
        <button
          onClick={requestAirdrop}
          className="bg-purple-700 text-white p-2 rounded-br-md rounded-sm rounded-tl-md text-sm shadow-md font-semibold tracking-wide"
        >
          Request Airdrop
        </button>
      </div>
      <p className="text-xs font-mono text-center max-w-56">
        ℹ️ Airdrop cannot be requested while using mainnet.
      </p>
    </>
  );
};

export default RequestAirdrop;
