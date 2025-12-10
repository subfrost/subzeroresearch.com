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
        "description": "Expert in distributed systems and p2p networks. Pioneering synthetic research methodologies."
      },
      {
        "@type": "Person",
        "name": "Gabe Lee",
        "jobTitle": "Founder",
        "description": "Specialist in infrastructure and system architecture. AI-augmented protocol design."
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
    "description": "Subzero Research Inc is pioneering synthetic research methodologies using high-volume compute and frontier AI to build a complete user space IP stack with quantum-safe streams, cryptographic identity, and ACLs. We are first-generation synthetic researchers breaking the limits of network protocol R&D.",
    "slogan": "First-generation synthetic researchers breaking the limits of network protocol R&D",
    "knowsAbout": [
      "Synthetic Research",
      "AI-Augmented R&D",
      "Distributed Systems",
      "Peer-to-Peer Networks",
      "User Space IP Stack",
      "Quantum-Safe Cryptography",
      "Post-Quantum Protocols",
      "Consensus Algorithms",
      "UDP Protocol",
      "WebTransport",
      "QUIC",
      "HTTP/3",
      "rust-libp2p",
      "Noise Protocol",
      "Cryptographic Identity",
      "Access Control Lists",
      "TUN Device Networking",
      "Circuit Relay",
      "Kademlia DHT",
      "Private AI Infrastructure",
      "Byzantine Fault Tolerance"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Synthetic Research Infrastructure",
          "description": "AI-augmented research pipelines leveraging frontier models and high-volume compute"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private AI Integration",
          "description": "Privacy-preserving AI solutions for sensitive applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Distributed Systems Development",
          "description": "Resilient P2P networks and decentralized infrastructure"
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
