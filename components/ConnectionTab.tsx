"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DEVNET_LINK, MAINNET_LINK } from "@/constants";
import { useConnectionLink } from "@/hooks/useConnectionLink";
import React from "react";

const ConnectionTab = ({ children }: { children: React.ReactNode }) => {
  const { setConnectionLink } = useConnectionLink();
  return (
    <Tabs defaultValue="devnet" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger
          value="devnet"
          className="w-full"
          onClick={() => setConnectionLink(DEVNET_LINK)}
        >
          DEVNET
        </TabsTrigger>
        <TabsTrigger
          value="mainnet"
          className="w-full"
          onClick={() => setConnectionLink(MAINNET_LINK)}
        >
          MAINNET
        </TabsTrigger>
      </TabsList>
      <TabsContent value="devnet" className="">
        {children}
      </TabsContent>
      <TabsContent value="mainnet" className="">
        {children}
      </TabsContent>
    </Tabs>
  );
};

export default ConnectionTab;
