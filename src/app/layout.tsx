import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subzero Research Inc | Building a Free Internet for a Free People",
  description: "Subzero Research is a Delaware C Corporation specializing in automated consensus frameworks, UDP-based P2P networks, distributed systems, and privacy-first AI infrastructure for sensitive applications.",
  keywords: [
    "distributed systems",
    "P2P networks",
    "peer-to-peer",
    "consensus frameworks",
    "UDP protocol",
    "rust-libp2p",
    "WebTransport",
    "QUIC",
    "HTTP/3",
    "private AI",
    "HIPAA compliant",
    "blockchain",
    "decentralized networks",
    "Byzantine fault tolerance",
    "libp2p-webtransport-sys"
  ],
  authors: [{ name: "Subzero Research Inc" }],
  creator: "Subzero Research Inc",
  publisher: "Subzero Research Inc",
  metadataBase: new URL("https://subzeroresearch.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://subzeroresearch.com",
    title: "Subzero Research Inc | Building a Free Internet for a Free People",
    description: "At the frontlines of information technology, building automated consensus frameworks over UDP-based P2P networks and privacy-first AI infrastructure.",
    siteName: "Subzero Research Inc",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 1200,
        alt: "Subzero Research - Distributed Systems and P2P Networks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subzero Research Inc | Building a Free Internet for a Free People",
    description: "Automated consensus frameworks, UDP-based P2P networks, and privacy-first AI infrastructure.",
    images: ["/icon.svg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
