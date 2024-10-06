import { create } from "zustand";

interface INavLink {
  navLink: string;
  setNavLink: (navLink: string) => void;
}

export const useNavLink = create<INavLink>()((set) => ({
  navLink: "Airdrop",
  setNavLink: (newLink: string) => set({ navLink: newLink }),
}));
