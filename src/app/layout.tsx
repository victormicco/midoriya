import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";

import { Providers } from "../contexts/provider";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Midoriya | Home",
  description: "The best quiz",
};

export default function RootLayout({ children }: WithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
