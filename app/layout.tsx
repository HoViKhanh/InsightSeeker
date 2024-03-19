import dynamic from 'next/dynamic';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insight Seeker",
  description: "A semantic search engine for crawled content",
};


export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
    <html lang='en'>
      <body className="inter">
        <main>{children}</main>
      </body>
    </html>
 );
}