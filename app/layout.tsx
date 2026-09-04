import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoBackground } from "@/components/VideoBackground";

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
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
          <VideoBackground
            src={[
              "https://videos.pexels.com/video-files/3015510/3015510-hd_1920_1080_24fps.mp4",
              "https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4",
              "https://videos.pexels.com/video-files/325185/325185-hd_1920_1080_25fps.mp4",
            ]}
            poster="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=85&w=1800&auto=format&fit=crop"
            className="h-full w-full object-cover opacity-[0.24] saturate-150"
          />
          <div className="absolute inset-0 bg-char/65" />
        </div>
        <Navbar />
        <main className="relative z-10 site-video-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
