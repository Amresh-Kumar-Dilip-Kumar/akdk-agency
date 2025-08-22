"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light" // todo:: system
      enableSystem
      disableTransitionOnChange
      themes={["light", "dark", "system"]}
      storageKey="akdk-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
