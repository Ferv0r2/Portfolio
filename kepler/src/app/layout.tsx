import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Head from "@/app/head";
import Recoil from "@/components/Recoil";

export const metadata = {
  title: "Kepler-452b",
  description: "Kepler-452b Contents Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body cz-shortcut-listen="true">
        <Recoil>{children}</Recoil>
      </body>
    </html>
  );
}
