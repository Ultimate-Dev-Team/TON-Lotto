"use client";

import Image from "next/image";

import { TonConnectButton } from "@tonconnect/ui-react";

export function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <div className="">
        <Image alt="Logo" src="/favicon.svg" width={36} height={36} />
      </div>
      <TonConnectButton />
    </header>
  );
}
