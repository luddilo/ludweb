"use client";

import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import backgroundDesktop from "./assets/bg-desktop.jpg";
import backgroundMobile from "./assets/bg-mobile-2.jpg";
import { useIsMobile } from "./hooks/useIsMobile";

const _metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ludvig",
    template: "Ludvig is %s",
  },
  description: "Some of the things I do.",
  openGraph: {
    title: "Ludvig",
    description: "Code, contact impro, cat",
    url: baseUrl,
    siteName: "Ludvig",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
      style={{
        backgroundImage: isMobile
          ? `url(${backgroundMobile.src})`
          : `url(${backgroundDesktop.src})`,
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
      <body
        style={{
          overflowX: "hidden",
          position: "relative",
        }}
        className="antialiased max-w-xl mx-auto w-auto lg:mt-8 text-black bg-white/80 dark:text-white dark:bg-black/80"
      >
        <main className="flex-auto min-w-0 lg:mt-6 flex flex-col px-8 lg:px-4">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
