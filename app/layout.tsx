import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { ScreenshotProvider } from "@/context/ScreenshotContext";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Dra. Isabella Mendes | Advocacia Criminalista",
  description: "Advocacia especializada em Direito Penal Econômico e Defesa Criminal. Mais de 12 anos de experiência em Brasília.",
  keywords: "advogada criminalista, direito penal, defesa criminal, brasília",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ScreenshotProvider>
          {children}
        </ScreenshotProvider>
      </body>
    </html>
  );
}