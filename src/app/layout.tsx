import type { Metadata } from "next";
import { M_PLUS_1p, M_PLUS_1_Code } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const mPlus1p = M_PLUS_1p({
  variable: "--font-m-plus-1p",
  weight: ["400", "500", "700"]
});

const mPlus1Code = M_PLUS_1_Code({
  variable: "--font-m-plus-1-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GOTTMC Wiki",
  description: "ゴットマイクラ鯖のWikiです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${mPlus1p.variable} ${mPlus1Code.variable} antialiased min-h-screen w-full`}
      >
        <Header />
        <div className="grid grid-cols-[13rem_1fr] m-2">
          <div className="">
            <Sidebar />
          </div>

          <div className="m-2">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
