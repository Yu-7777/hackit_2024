import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Head from "next/head";

const notoSansJP = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={notoSansJP.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
