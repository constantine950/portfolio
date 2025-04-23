import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import Header from "./_components/Header";
import HeaderProvider from "./_components/HeaderContext";
import MobileMenuHandler from "./_components/MobileMenuHandler";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / My-Portfolio",
    default: "My-Portfolio",
  },
  description:
    "Hi, I’m James — a frontend developer turning ideas into pixel-perfect, responsive interfaces. Dive into my work and let’s connect!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
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
