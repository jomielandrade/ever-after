import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Inter,
  Poppins,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Project Ever After",
  description:
    "A timeless digital wedding invitation celebrating the love story of Jomiel and Rojiely.",
  applicationName: "Project Ever After",
  keywords: [
    "Rojiely",
    "Jomiel",
    "Project Ever After",
    "digital wedding invitation",
    "Philippines wedding",
    "July 15 2026 wedding",
  ],
  authors: [{ name: "Rojiely" }, { name: "Jomiel" }],
  creator: "Jomiel & Rojiely",
  publisher: "Project Ever After",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased font-sans",
        cormorantGaramond.variable,
        poppins.variable,
        inter.variable,
        greatVibes.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        {/* Future providers (Theme, Audio, RSVP) wrap children here */}
        {children}
      </body>
    </html>
  );
}
