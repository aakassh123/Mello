import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mello.example.com"),
  title: {
    default: "MELLO — People. Experiences. Memories.",
    template: "%s — MELLO",
  },
  description:
    "MELLO is where strangers become memories: house parties, club nights, trips, meetups and more, all in one place.",
  openGraph: {
    title: "MELLO — People. Experiences. Memories.",
    description:
      "Discover people, places and experiences worth remembering.",
    siteName: "MELLO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
