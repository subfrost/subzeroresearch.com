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
  title: "Subzero Research Inc | First-Generation Synthetic Researchers",
  description: "Subzero Research is pioneering synthetic research methodologies using high-volume compute and frontier AI. We're building a complete user space IP stack with quantum-safe streams, cryptographic identity, and ACLs to replace the modern internet.",
  keywords: [
    "synthetic research",
    "AI research",
    "distributed systems",
    "P2P networks",
    "peer-to-peer",
    "user space IP stack",
    "quantum-safe cryptography",
    "post-quantum",
    "consensus frameworks",
    "UDP protocol",
    "rust-libp2p",
    "WebTransport",
    "QUIC",
    "HTTP/3",
    "private AI",
    "network protocols",
    "decentralized networks",
    "Byzantine fault tolerance",
    "libp2p-webtransport-sys",
    "subtun",
    "subp2p",
    "Noise protocol",
    "cryptographic identity",
    "ACL",
    "TUN device"
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
    title: "Subzero Research Inc | First-Generation Synthetic Researchers",
    description: "We harness high-volume compute and frontier AI to conduct autonomous research at unprecedented scale, building the complete user space IP stack that will replace the modern internet.",
    siteName: "Subzero Research Inc",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 1200,
        alt: "Subzero Research - Synthetic Research & Next-Generation Network Protocols",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subzero Research Inc | First-Generation Synthetic Researchers",
    description: "Breaking the limits of network protocol R&D with AI-augmented research pipelines. Building quantum-safe, identity-first networking.",
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
