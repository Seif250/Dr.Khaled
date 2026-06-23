import type { Metadata } from "next";
import { Outfit, Cairo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const cairo = Cairo({ 
  subsets: ["arabic"],
  variable: '--font-cairo',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "RG Nano — Transforming The Future of Therapeutics",
  description: "RG Nano is an advanced research and development company pioneering precision nanomedicine and intelligent drug delivery systems to address the world's most challenging diseases.",
  keywords: "RG Nano, nanomedicine, cancer treatment, drug delivery, nanoparticles, targeted therapy",
  openGraph: {
    title: "RG Nano — Advanced Nanomedicine",
    description: "Pioneering precision nanomedicine and intelligent drug delivery systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${outfit.variable} ${cairo.variable}`}>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
