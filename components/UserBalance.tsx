"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

const UserBalance = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [solBalance, setSolBalance] = useState(0);

  useEffect(() => {
    async function getMyBalance() {
      if (wallet.publicKey) {
        try {
          const balance = await connection.getBalance(wallet.publicKey);
          setSolBalance(balance / LAMPORTS_PER_SOL);
        } catch (error) {
          console.log("GETMYBALANCE_ERROR", error);

          setSolBalance(0);
        }
      }
    }

    getMyBalance();
  }, [connection, wallet.publicKey]);

  return (
    <h1 className="text-3xl font-extrabold text-slate-800">
      {solBalance} <span className="text-sm uppercase font-light">sol</span>
    </h1>
  );
};

export default UserBalance;
