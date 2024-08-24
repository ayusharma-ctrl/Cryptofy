import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import Navbar from "@/components/Navbar";

const pacifico = Pacifico({
  subsets: ["cyrillic"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Cryptofy",
  description: "Connect your crypto wallets like MetaMask and Phantom to view balances instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pacifico.className}>
        <Navbar />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
