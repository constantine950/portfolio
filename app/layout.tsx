import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderProvider from "./context/HeaderProvider";
import MobileMenuHandler from "./_components/MobileMenuHandler";
import Header from "./_components/Header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adebesin Omotoyosi James",
  description:
    "Software engineer. Building efficient, elegant solutions. Let’s work together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <HeaderProvider>
          <MobileMenuHandler>
            <Header />

            <main>{children}</main>
          </MobileMenuHandler>
        </HeaderProvider>
      </body>
    </html>
  );
}
