export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Subzero Research Inc",
    "legalName": "Subzero Research Inc",
    "url": "https://subzeroresearch.com",
    "logo": "https://subzeroresearch.com/icon.svg",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Raymond Pulver"
      },
      {
        "@type": "Person",
        "name": "Gabe Lee"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "Delaware"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "billing@subzeroresearch.com",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://github.com/subfrost/libp2p-webtransport-sys"
    ],
    "description": "Subzero Research Inc specializes in automated consensus frameworks over UDP-based P2P networks, distributed systems, and privacy-first AI infrastructure.",
    "knowsAbout": [
      "Distributed Systems",
      "Peer-to-Peer Networks",
      "Consensus Algorithms",
      "UDP Protocol",
      "WebTransport",
      "QUIC",
      "HTTP/3",
      "rust-libp2p",
      "Private AI Infrastructure",
      "HIPAA Compliance",
      "Byzantine Fault Tolerance"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
