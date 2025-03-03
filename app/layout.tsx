
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { PeliculaProvider } from '@/contexts/PeliculaContext';
import Navbar from "@/components/layout/header";
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
  title: "Movi3Words",
  description: "Adivina la pelicula, solo con 3 palabras",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PeliculaProvider>
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
    </PeliculaProvider>
    
  );
}
