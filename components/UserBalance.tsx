"use client";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const UserBalance = () => {
  const { connection } = useConnection();
  const wallet = useWallet();

  async function getBalance() {
    if (wallet.publicKey) {
      const balance = await connection.getBalance(wallet.publicKey);
      const balanceElement = document.getElementById("balance");
      if (balanceElement) {
        balanceElement.innerHTML = (balance / LAMPORTS_PER_SOL).toString();
      }
    }
  }

  getBalance();
  return (
    <div>
      <p>SOL Balance:</p> <div id="balance"></div>
    </div>
  );
};

export default UserBalance;
