import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Sans_Arabic, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const notoSansArabic = Noto_Sans_Arabic({ 
  subsets: ["arabic"],
  variable: '--font-noto-sans-ar',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const notoKufiArabic = Noto_Kufi_Arabic({ 
  subsets: ["arabic"],
  variable: '--font-noto-kufi-ar',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Prof. Khaled Fathi Greish — Nanomedicine Researcher",
  description: "Professor Khaled Fathi Greish is a globally recognized nanomedicine researcher ranked among the Top 2% of Scientists Worldwide. His work focuses on intelligent drug delivery systems and innovative cancer treatment solutions.",
  keywords: "Khaled Greish, nanomedicine, cancer treatment, drug delivery, nanoparticles, EPR effect, Arabian Gulf University",
  openGraph: {
    title: "Prof. Khaled Fathi Greish — Transforming Cancer Treatment Through Nanomedicine",
    description: "Globally recognized nanomedicine researcher ranked among the Top 2% of Scientists Worldwide.",
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
      <body className={`${inter.variable} ${playfair.variable} ${notoSansArabic.variable} ${notoKufiArabic.variable}`}>
        {children}
      </body>
    </html>
  );
}
