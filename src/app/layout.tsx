import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const monschone = localFont({
  src: "./fonts/Monschone Regular/Monschone Regular.otf",
  variable: "--font-monschone",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pret a Boire",
  description: "F&B by WAECORP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${monschone.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
