import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Michroma, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma-var",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Big Dunn Entertainment | Event Production in The Bahamas",
  description: "Professional audio, lighting, staging, video, generator power, and event rentals for weddings, concerts, corporate events, and celebrations in The Bahamas.",
  keywords: "event equipment rental, audio visual, wedding entertainment, concert staging, Nassau Bahamas, DJ services, lighting rental, sound system",
  authors: [{ name: "Big Dunn Entertainment" }],
  openGraph: {
    title: "Big Dunn Entertainment | Event Production in The Bahamas",
    description: "Professional audio, lighting, staging, video, power, and event rentals planned as one dependable production.",
    url: "https://www.bigdunnentertainment.com",
    siteName: "Big Dunn Entertainment",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Dunn Entertainment",
    description: "Professional event production and rentals across The Bahamas",
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
    <html lang="en" data-scroll-behavior="smooth" className={`scroll-smooth ${michroma.variable} ${montserrat.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
