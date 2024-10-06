import React from "react";
import { FloatingDock } from "./aceternity/floating-dock";
import { NavLinkItems } from "@/constants";

export function Navbar() {
  return (
    <div className="flex items-center justify-between h-fit w-full absolute bottom-0 mb-2">
      <FloatingDock
        mobileClassName="" // only for demo, remove for production
        items={NavLinkItems}
      />
    </div>
  );
}
