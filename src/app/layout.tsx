import "@styles/globals.css";
import NProgressWrapper from "@components/nprogress-wrapper";
import NextThemeProvider from "@components/theme-provider";
import { fontInter } from "@lib/font";
import { twindConfig, type ColorRecordType } from "@lib/twind";
import { cn } from "@lib/utils";
import type { Viewport } from "next";
import { AxiomWebVitals } from "next-axiom";
import Script from "next/script";
import type { PropsWithChildren } from "react";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export const viewport: Viewport = {
  themeColor: [
    {
      color: (twindConfig.colors.neutral as ColorRecordType)[50],
      media: "(prefers-color-scheme: light)",
    },
    {
      color: (twindConfig.colors.neutral as ColorRecordType)[900],
      media: "(prefers-color-scheme: dark)",
    },
  ],
};

export const metadata = {
  title: {
    default: "To-do list",
    template: "%s | To-do list",
  },
  description: "Managing your tasks has never been simpler before.",

  metadataBase: new URL("https://todo.k1ng.dev"),
  manifest: "/static/manifest.json",
  openGraph: {
    images: ["/static/images/og.webp"],
  },

  icons: {
    icon: [
      {
        url: "/static/favicons/favicon.ico",
      },
    ],
    apple: [
      {
        url: "/static/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={cn("font-sans antialiased", fontInter.variable)}
      suppressHydrationWarning
    >
      <head>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              strategy="lazyOnload"
              data-domain="todo.k1ng.dev"
              src="https://insights.k1ng.dev/js/script.js"
            />
            <Script strategy="lazyOnload" id="plausible-script">
              {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
            </Script>
            <AxiomWebVitals />
          </>
        )}
      </head>
      <body className="flex min-h-svh flex-col">
        <NextThemeProvider>
          <NProgressWrapper>{children}</NProgressWrapper>
        </NextThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
