import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./qa-overrides.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "MBR-Rakenne Oy — verkkosivuehdotus | Virella",
  description:
    "Yksityinen Virellan verkkosivuehdotus MBR-Rakenne Oy:lle.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
