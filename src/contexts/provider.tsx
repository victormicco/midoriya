"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: WithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
