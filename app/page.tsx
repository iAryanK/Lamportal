"use client";

import CentralCard from "@/components/CentralCard";
import { useConnectionLink } from "@/hooks/useConnectionLink";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import Link from "next/link";

export default function Home() {
  const { connectionLink } = useConnectionLink();

  return (
    // connection to RPC node
    <ConnectionProvider endpoint={connectionLink}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <div className="flex items-center justify-center min-h-screen flex-col gap-2">
            <div className="flex gap-2">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <CentralCard />

            <p className="text-white text-xs pt-10 sm:pt-2 tracking-wide font-mono">
              Create your solana tokens on{" "}
              <Link
                href="https://sol-tokenizer.vercel.app"
                className="text-white bg-green-950 p-[2px] rounded-sm border border-muted-foreground hover:bg-green-900"
              >
                Tokenizer
              </Link>
            </p>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
