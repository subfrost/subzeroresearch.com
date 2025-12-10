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
  title: "Subzero Research Inc | Procedurally Validated Synthetic Research",
  description: "Subzero Research advances information technology through procedurally validated synthetic research cycles. We architect network stacks and federated systems with security properties sufficient to outlast malicious synthetic generations.",
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
    title: "Subzero Research Inc | Procedurally Validated Synthetic Research",
    description: "We iteratively advance information science via synthetic research cycles, architecting network stacks and federated systems with security properties sufficient to outlast malicious synthetic generations.",
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
    title: "Subzero Research Inc | Procedurally Validated Synthetic Research",
    description: "Architecting network stacks and federated systems with security properties that outlast adversarial synthetic agents.",
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
