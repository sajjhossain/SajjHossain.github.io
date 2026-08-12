import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import FloatingBackground from "@/components/FloatingBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import { resumeData } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${resumeData.name} | Portfolio`,
  description: resumeData.summary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col selection:bg-blue-500/30 text-[#17233a] bg-white dark:bg-[#0a0a0a] dark:text-gray-100">
        <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-BY3C7WG5MR"
    strategy="afterInteractive"
  />

  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BY3C7WG5MR');
    `}
  </Script>
        <ThemeProvider>
          <CustomCursor />
          <FloatingBackground />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
