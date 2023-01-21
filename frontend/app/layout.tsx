import type { PropsWithChildren } from "react";
import "./globals.css";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
