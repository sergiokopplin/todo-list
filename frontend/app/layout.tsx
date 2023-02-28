import "./globals.css";
import { cn } from "@lib/utils";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={cn("font-sans antialiased", fontInter.variable)}>
      <head />
      <body className="bg-neutral-50">{children}</body>
    </html>
  );
}

export default RootLayout;
