import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { LanguageProvider } from "@/context/LanguageContext";
import WhatsAppButton from "@/components/layout/whatsappbutton";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Diego Diaz Dev | Portfolio",
  description: "Portfolio de Diego Diaz, Desarrollador Full-Stack especializado en productos digitales.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es" 
      className={spaceGrotesk.variable} 
      style={{ backgroundColor: '#0F0C1B' }}
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="relative min-h-screen bg-[#0F0C1B] antialiased">
        <div className="portfolio-background-style2" aria-hidden="true" />

        <LanguageProvider>
          <Navbar />
          <main className="relative z-10 pl-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}