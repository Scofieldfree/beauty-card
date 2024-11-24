import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Beauty Card | Create and share beautifull card image of your sourcecode",
  description: "Create and share stunning source code and social media image cards effortlessly with Beauty Card. Make your notes visually appealing!",
  keywords: ['beauty card', 'create image card', 'share sourcecode image', 'social media image cards', 'quick image creation', 'beautiful card image', 'online image sharing', 'sourcecode visualization'],
  metadataBase: new URL('https://www.beauty-card.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: 'Myrbh6sChPOcEZpzee_2v3yggCYHqL0xnliBtaPOfO8',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
