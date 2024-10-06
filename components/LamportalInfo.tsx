const LamportalInfo = () => {
  return (
    <div className="h-full w-full text-sm font-mono">
      <h2 className="text-center">What can you do with Lamportal ?</h2>

      <ol className="space-y-2 mt-5 text-xs max-w-64 mx-auto">
        <li>
          1. Request solana airdrop on connected wallet{" "}
          <span className="bg-secondary p-[2px] rounded-sm border">
            Devnet only
          </span>
        </li>
        <li>
          2. See your balance or provide a public key to check solana balance.
        </li>
        <li>
          3. Send solana to anyone using their public key.{" "}
          <span className="bg-secondary p-[2px] rounded-sm border">
            Devnet only
          </span>
        </li>
        <li>4. Sign a message or verify a signed message.</li>
      </ol>
      <p className="text-center p-1 mt-4 text-xs bg-slate-200 rounded-sm max-w-72 mx-auto">
        Lamportal is only for Solana blockchain.
      </p>
    </div>
  );
};

export default LamportalInfo;
