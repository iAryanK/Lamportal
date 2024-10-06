import { DEVNET_LINK } from "@/constants";
import { create } from "zustand";

interface IConnectionLink {
  connectionLink: string;
  setConnectionLink: (connectionLink: string) => void;
}

export const useConnectionLink = create<IConnectionLink>()((set) => ({
  connectionLink: DEVNET_LINK,
  setConnectionLink: (newLink: string) => set({ connectionLink: newLink }),
}));
