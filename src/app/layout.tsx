import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: side-effect global CSS import handled by Next.js
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Big Dunn Entertainment - Premium Event Equipment & Audio Visual Rentals",
  description: "Nassau's premier event equipment rental company. Professional audio systems, lighting, staging, and entertainment solutions for weddings, concerts, and corporate events.",
  keywords: "event equipment rental, audio visual, wedding entertainment, concert staging, Nassau Bahamas, DJ services, lighting rental, sound system",
  authors: [{ name: "Big Dunn Entertainment" }],
  openGraph: {
    title: "Big Dunn Entertainment - Premium Event Equipment Rentals",
    description: "Professional audio, lighting, and staging equipment for unforgettable events in Nassau, Bahamas",
    url: "https://www.bigdunnentertainment.com",
    siteName: "Big Dunn Entertainment",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Dunn Entertainment",
    description: "Premium event equipment and entertainment solutions",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}