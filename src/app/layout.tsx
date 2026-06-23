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

export const metadata: Metadata = {
  title: "Prof. Khaled Fathi Greish — Nanomedicine Researcher",
  description: "Professor Khaled Fathi Greish is a globally recognized nanomedicine researcher ranked among the Top 2% of Scientists Worldwide. His work focuses on intelligent drug delivery systems and innovative cancer treatment solutions.",
  keywords: "Khaled Greish, nanomedicine, cancer treatment, drug delivery, nanoparticles, EPR effect, Arabian Gulf University",
  openGraph: {
    title: "Prof. Khaled Fathi Greish — Shaping The Future Of Cancer Treatment",
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
      <body className={`${outfit.variable} ${cairo.variable}`}>
        {children}
      </body>
    </html>
  );
}
