import { FaInfo, FaParachuteBox } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaFileSignature } from "react-icons/fa";

export const DEVNET_LINK = "https://api.devnet.solana.com";
export const MAINNET_LINK = "https://api.mainnet-beta.solana.com";

export const NavLinkItems = [
  {
    title: "Airdrop",
    icon: (
      <FaParachuteBox className="h-full w-full text-neutral-700 dark:text-neutral-300" />
    ),
  },
  {
    title: "Send",
    icon: (
      <IoIosSend className="h-full w-full text-neutral-700 dark:text-neutral-300" />
    ),
  },
  {
    title: "Sign",
    icon: (
      <FaFileSignature className="h-full w-full text-neutral-700 dark:text-neutral-300" />
    ),
  },
  {
    title: "Info",
    icon: (
      <FaInfo className="h-full w-full text-neutral-700 dark:text-neutral-300" />
    ),
  },
];
