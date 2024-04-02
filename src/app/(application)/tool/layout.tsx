import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../../../styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Midoriya | Try it",
  description: "The best quiz",
};

export default function RootLayout({ children }: WithChildren) {
  return <>{children}</>;
}
