import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollTop from "@/components/layout/ScrollTop";
import "@/styles/globals.css";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Next Formation",
  description: "Exercice App Router Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body className={`bg-light flex flex-col min-h-dvh ${inter.className}`}>
        <Header />
        <main className="grow">{children}</main>
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}

