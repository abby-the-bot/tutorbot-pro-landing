import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TutorBot Pro - 用 Telegram 管理整間補習班",
  description: "下一代 AI-Native 補習班管理系統。一句話搞定學生管理、繳費催收、親師溝通。",
  keywords: "補習班管理系統, 補習班軟體, Telegram, AI, 學生管理, 繳費系統",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
