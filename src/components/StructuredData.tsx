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
        "name": "Raymond Pulver",
        "jobTitle": "Founder",
        "description": "Distributed systems and P2P networking."
      },
      {
        "@type": "Person",
        "name": "Gabe Lee",
        "jobTitle": "Founder",
        "description": "Infrastructure and system architecture."
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
    "description": "We build L3 abstractions over IP for modern P2P systems—a complete user space IP stack with cryptographic identity, end-to-end encryption, and zero attack surface.",
    "slogan": "User space networking for the decentralized internet",
    "knowsAbout": [
      "Distributed Systems",
      "Peer-to-Peer Networks",
      "User Space IP Stack",
      "WebTransport",
      "QUIC",
      "HTTP/3",
      "rust-libp2p",
      "Noise Protocol",
      "Cryptographic Identity",
      "TUN Device Networking",
      "Circuit Relay",
      "Kademlia DHT",
      "Byzantine Fault Tolerance"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private AI Infrastructure",
          "description": "On-premises AI deployments for healthcare and regulated industries"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Distributed Systems",
          "description": "P2P protocol design and implementation"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Consulting",
          "description": "Architecture review and security audits for distributed systems"
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
