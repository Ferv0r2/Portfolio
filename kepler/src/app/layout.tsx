import "./globals.css";

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
      <body cz-shortcut-listen="true">
        <Recoil>{children}</Recoil>
      </body>
    </html>
  );
}
