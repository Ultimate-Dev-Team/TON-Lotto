"use client";

import * as React from "react";
import { Provider as JotaiProvider } from "jotai";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <JotaiProvider>
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        <NextThemesProvider {...props}>{children}</NextThemesProvider>
      </TonConnectUIProvider>
    </JotaiProvider>
  );
}
