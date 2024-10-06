"use client";

import RequestAirdrop from "./RequestAirdrop";
import UserBalance from "./UserBalance";
import { SignMessage } from "./SignMessage";
import ConnectionTab from "./ConnectionTab";
import { Navbar } from "./Navbar";
import { useNavLink } from "@/hooks/useNavLink";
import { SendTokens } from "./SendTokens";
import LamportalInfo from "./LamportalInfo";

const CentralCard = () => {
  const { navLink } = useNavLink();

  return (
    <div className="h-96 w-80 max-sm:w-[22rem] bg-white text-black shadow-2xl rounded-xl relative">
      <ConnectionTab>
        <div className="flex items-center justify-center gap-5 flex-col h-64 mx-2">
          {navLink === "Airdrop" && (
            <>
              <UserBalance />
              <RequestAirdrop />
            </>
          )}
          {navLink === "Send" && <SendTokens />}
          {navLink === "Sign" && <SignMessage />}
          {navLink === "Info" && <LamportalInfo />}
        </div>
        <Navbar />
      </ConnectionTab>

      <LamportalBadge />
    </div>
  );
};

export default CentralCard;

export const LamportalBadge = () => {
  return (
    <div className="absolute max-sm:-bottom-7 text-center text-white max-sm:rounded-b-sm tracking-wide uppercase font-mono p-1 bg-amber-500 text-sm max-sm:left-5 sm:bottom-20 sm:rotate-90 sm:rounded-t-sm sm:-right-14">
      Lamportal
    </div>
  );
};
