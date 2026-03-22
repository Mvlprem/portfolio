import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Custom Fonts
const drukWide = localFont({
  src: "./fonts/DrukWideBold.ttf",
  variable: "--font-druk",
});

const ibmPlexMono = localFont({
  src: [
    {
      path: "./fonts/IBMPlexMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IBMPlexMono-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-plex",
});

export const metadata = {
  title: "Mvlprem // Cybersecurity",
  description:
    "Security Researcher focused on offensive operations, vulnerability research, and infrastructure hardening.",
  openGraph: {
    title: "Mvlprem // Cybersecurity",
    description:
      "Security Researcher focused on offensive operations and vulnerability research.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${drukWide.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen bg-black">
        {/* bg pattern Layer */}
        <div className="fixed inset-0 z-[-1] bg-dot-pattern" />

        {/* The Actual Content */}
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
