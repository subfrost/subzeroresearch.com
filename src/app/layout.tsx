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
  title: "Subzero Research Inc | User Space Networking for the Decentralized Internet",
  description: "We build L3 abstractions over IP for modern P2P systems—a complete user space IP stack with cryptographic identity, end-to-end encryption, and zero attack surface.",
  keywords: [
    "distributed systems",
    "P2P networks",
    "peer-to-peer",
    "user space IP stack",
    "libp2p",
    "rust-libp2p",
    "WebTransport",
    "QUIC",
    "HTTP/3",
    "decentralized networks",
    "libp2p-webtransport-sys",
    "subtun",
    "subp2p",
    "Noise protocol",
    "cryptographic identity",
    "TUN device",
    "end-to-end encryption",
    "Byzantine fault tolerance"
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
    title: "Subzero Research Inc | User Space Networking for the Decentralized Internet",
    description: "We build L3 abstractions over IP for modern P2P systems—a complete user space IP stack with cryptographic identity, end-to-end encryption, and zero attack surface.",
    siteName: "Subzero Research Inc",
    images: [
      {
        url: "/icon.svg",
        width: 1200,
        height: 1200,
        alt: "Subzero Research - Decentralized Networking Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subzero Research Inc | User Space Networking",
    description: "L3 abstractions over IP for modern P2P systems. Cryptographic identity, end-to-end encryption, zero attack surface.",
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
