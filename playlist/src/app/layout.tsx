import "./globals.css";
import { Inter } from "next/font/google";

import Recoil from "@/components/Recoil";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Folio Player",
  description: "Portfolio Playlist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko-KR">
      <body cz-shortcut-listen="true" className={inter.className}>
        <Recoil>{children}</Recoil>
      </body>
    </html>
  );
}
