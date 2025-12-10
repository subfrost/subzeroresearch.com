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
        "description": "Expert in distributed systems and p2p networks. Architecting adversarially robust protocols."
      },
      {
        "@type": "Person",
        "name": "Gabe Lee",
        "jobTitle": "Founder",
        "description": "Specialist in infrastructure and system architecture. Procedural validation pipelines."
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
    "description": "Subzero Research advances information technology through procedurally validated synthetic research cycles. We architect network stacks and federated systems with security properties sufficient to outlast malicious synthetic generations as they become mainstream.",
    "slogan": "Advancing information technology through procedurally validated synthetic research",
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
