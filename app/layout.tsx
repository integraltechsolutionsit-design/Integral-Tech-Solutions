import type { Metadata } from "next";
import { Geist, Geist_Mono, Antic_Didone } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 👉 Add Antic Didone
const anticDidone = Antic_Didone({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-antic-didone",
});

export const metadata: Metadata = {
  title: "Integral Tech Solutions",
  description: "Developed by empsloc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={` ${anticDidone.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
