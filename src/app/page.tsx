"use client"

import { useRef } from "react"
import Link from "next/link"
import FrostBackdrop from "@/components/FrostBackdrop"
import GitHubPreview from "@/components/GitHubPreview"
import SubzeroLogo from "@/components/SubzeroLogo"
import P2PNetworkSVG from "@/components/P2PNetworkSVG"
import DistributedSystemSVG from "@/components/DistributedSystemSVG"
import ConsensusFrameworkSVG from "@/components/ConsensusFrameworkSVG"

const teamMembers = [
  { name: "Raymond Pulver", title: "Founder", description: "Expert in distributed systems and p2p networks. Architecting adversarially robust protocols." },
  { name: "Gabe Lee", title: "Founder", description: "Specialist in infrastructure and system architecture. Procedural validation pipelines." },
  { name: "Ehran", title: "Partner", description: "Strategic advisor with extensive experience in technology ventures." },
  { name: "Allen", title: "Partner", description: "Technology leader with deep expertise in web3 and distributed systems." },
]

const blogPosts = [
  {
    title: "L3 Abstractions for Agentic Prediction Markets",
    excerpt: "Building zero-attack-surface mesh consensus with local GPU inference and HTTP/3 transport for distributed, unbiased resolution of conditional markets.",
    href: "/blog/l3-abstractions-agentic-prediction-markets",
    date: "2024-12-09"
  },
  {
    title: "Building with WebTransport",
    excerpt: "A comprehensive guide to implementing WebTransport in modern applications, exploring its advantages over traditional protocols.",
    href: "/blog/building-with-webtransport",
    date: "2024-11-23"
  },
  {
    title: "Private AI Automation with Open Source Models",
    excerpt: "Deploying Gemma:27b and other Ollama models for privacy-sensitive workflow automation at scale, with complete infrastructure examples.",
    href: "/blog/private-ai-automation",
    date: "2024-11-23"
  }
]

const techStack = [
  {
    name: "subtun",
    description: "Layer-3 VPN tunnel bridging TCP/IP with P2P streams",
    features: ["TUN device management", "DNS interception", "Port-based ACLs", "Cross-platform routing"]
  },
  {
    name: "subp2p",
    description: "Generic libp2p networking with multi-transport support",
    features: ["Circuit Relay v2", "Kademlia DHT", "GossipSub messaging", "NAT traversal"]
  },
  {
    name: "libp2p-webtransport-sys",
    description: "Pure Rust WebTransport for browser-native P2P",
    features: ["QUIC + HTTP/3", "Certificate pinning", "Noise encryption", "Zero dependencies on C"]
  }
]

export default function Home() {
  const aboutSectionRef = useRef<HTMLElement | null>(null)
  const syntheticResearchRef = useRef<HTMLElement | null>(null)

  const handleScrollDown = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50">
        <FrostBackdrop />

        {/* Navigation */}
        <nav className="relative z-20 w-full max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <SubzeroLogo className="w-10 h-10 text-blue-600" />
            <div className="text-2xl font-bold text-slate-900">Subzero Research</div>
          </div>
          <div className="flex gap-6">
            <Link href="#synthetic-research" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Synthetic Research</Link>
            <Link href="#research" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Technology</Link>
            <Link href="#blog" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Blog</Link>
            <Link href="/pay-invoice" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Pay Invoice</Link>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-4 flex-1">
          <div className="flex flex-col items-center w-full text-center">
            {/* Logo */}
            <div className="mb-8">
              <SubzeroLogo className="w-32 h-32 text-blue-600" />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Subzero Research
            </h1>

            <p className="text-2xl md:text-3xl text-slate-700 max-w-4xl mb-4 leading-relaxed font-medium">
              Advancing information technology
            </p>
            <p className="text-2xl md:text-3xl text-blue-600 max-w-4xl mb-6 leading-relaxed font-medium">
              through procedurally validated synthetic research
            </p>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-12 leading-relaxed">
              We iteratively advance information science via synthetic research cycles, architecting
              network stacks and federated systems with security properties sufficient to outlast
              malicious synthetic generations as they become mainstream.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <button
                onClick={handleScrollDown}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg"
              >
                Explore Our Research
              </button>
              <Link
                href="#synthetic-research"
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg transition-all hover:shadow-lg border-2 border-slate-200"
              >
                Synthetic Research Thesis
              </Link>
            </div>

            {/* Visual representation */}
            <div className="w-full max-w-3xl">
              <P2PNetworkSVG className="w-full h-48 opacity-60" />
            </div>
          </div>
        </div>

        <button
          onClick={handleScrollDown}
          className="absolute bottom-8 text-blue-600 hover:text-blue-700 animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* Synthetic Research Thesis Section */}
      <section
        id="synthetic-research"
        ref={syntheticResearchRef}
        className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-24 px-4"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Procedurally Validated Research Cycles
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Synthetic Research: Our Thesis
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              AI systems will soon conduct research autonomously at scales that dwarf human capacity.
              We are building infrastructure designed to remain secure in that world&mdash;architecting
              systems today that adversarial synthetic agents cannot subvert tomorrow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* The Security Thesis */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">The Security Thesis</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                As synthetic research becomes mainstream, malicious actors will deploy AI systems to discover
                and exploit vulnerabilities at machine speed. Traditional security models&mdash;patching after
                discovery, trusting central authorities&mdash;will not survive this transition.
              </p>
              <p className="text-slate-300 leading-relaxed">
                We architect systems with security properties that hold even when adversaries have access to
                the same synthetic research capabilities. No trusted third parties. No central points of failure.
                No attack surfaces for autonomous agents to exploit.
              </p>
            </div>

            {/* Procedural Validation */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Procedural Validation Cycles</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Each research iteration feeds into the next. We synthesize protocol designs, formally verify
                security properties, generate adversarial test cases, and validate implementations against
                edge conditions&mdash;compressing years of traditional R&D into iterative cycles.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Protocol synthesis via frontier AI models</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Automated formal verification of security invariants</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Adversarial fuzzing and edge case generation</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span>Human validation of critical security assumptions</span>
                </div>
              </div>
            </div>
          </div>

          {/* What We're Building */}
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">What We're Building</h3>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Network stacks and federated systems of capital with security properties that outlast adversarial synthetic agents
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">Identity-First</div>
                <p className="text-slate-400">
                  Cryptographic identity at the network layer. No DNS hijacking, no IP spoofing, no certificate authorities to compromise.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">Zero Attack Surface</div>
                <p className="text-slate-400">
                  No listening ports, no public endpoints, no service enumeration. Nothing for autonomous agents to probe or exploit.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">Federated Capital</div>
                <p className="text-slate-400">
                  Distributed consensus for value transfer without trusted intermediaries. Mesh networks that survive node compromise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="relative bg-white py-20 px-4">
        <FrostBackdrop reducedOpacity />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Subfrost Stack
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A layered architecture replacing the traditional internet stack with decentralized,
              encrypted, identity-aware networking.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-2 border-slate-200 p-8 mb-12">
            <div className="grid gap-4 max-w-4xl mx-auto">
              {/* Layer 4: Applications */}
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Layer 4</div>
                    <div className="text-xl font-bold text-slate-900">Applications</div>
                    <p className="text-slate-600 text-sm">curl, ethereum nodes, any TCP/IP software</p>
                  </div>
                  <div className="text-slate-400">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Layer 3: SubTun */}
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border-2 border-purple-300 p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1">Layer 3 &mdash; subtun</div>
                    <div className="text-xl font-bold text-slate-900">User Space IP Stack</div>
                    <p className="text-slate-600 text-sm">TUN device, DNS interception, TCP/UDP/ICMP routing, ACLs</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-purple-200 text-purple-700 text-xs font-medium rounded">IPv4/IPv6</span>
                    <span className="px-2 py-1 bg-purple-200 text-purple-700 text-xs font-medium rounded">smoltcp</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Layer 2: SubP2P */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-2 border-blue-300 p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Layer 2 &mdash; subp2p</div>
                    <div className="text-xl font-bold text-slate-900">P2P Networking Layer</div>
                    <p className="text-slate-600 text-sm">Kademlia DHT, GossipSub, Circuit Relay v2, DCUtR hole punching</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-200 text-blue-700 text-xs font-medium rounded">libp2p</span>
                    <span className="px-2 py-1 bg-blue-200 text-blue-700 text-xs font-medium rounded">Ed25519</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              {/* Layer 1: Transport */}
              <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-xl border-2 border-cyan-300 p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-cyan-600 uppercase tracking-wide mb-1">Layer 1 &mdash; libp2p-webtransport-sys</div>
                    <div className="text-xl font-bold text-slate-900">Encrypted Transport</div>
                    <p className="text-slate-600 text-sm">WebTransport, QUIC, TCP, WebSocket, Noise protocol encryption</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-cyan-200 text-cyan-700 text-xs font-medium rounded">QUIC</span>
                    <span className="px-2 py-1 bg-cyan-200 text-cyan-700 text-xs font-medium rounded">rustls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Crate Details */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {techStack.map((crate, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <code className="text-lg font-bold text-slate-900">{crate.name}</code>
                </div>
                <p className="text-slate-600 mb-4">{crate.description}</p>
                <ul className="space-y-2">
                  {crate.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Capabilities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Quantum-Safe Streams</h4>
              <p className="text-slate-600 text-sm">
                Noise protocol with forward secrecy. AWS-LC cryptographic backend. Ready for post-quantum key exchange.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Cryptographic Identity</h4>
              <p className="text-slate-600 text-sm">
                Ed25519 keypairs as network identity. Name registration on relay. Every connection authenticated.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl border border-purple-200 p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Port-Based ACLs</h4>
              <p className="text-slate-600 text-sm">
                Whitelist-only port forwarding. Explicit access control at the network layer. Defense in depth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Existing Software Compatible</h4>
              <p className="text-slate-600 text-sm">
                Standard TCP/IP sockets and DNS. Any application works unchanged. curl, databases, blockchain nodes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Projects Section */}
      <section
        id="research"
        ref={aboutSectionRef}
        className="relative bg-gradient-to-b from-slate-50 to-white py-20 px-4"
      >
        <FrostBackdrop reducedOpacity />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Research & Open Source
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We contribute to critical infrastructure projects and advance the state of distributed systems research through synthetic methodologies.
            </p>
          </div>

          {/* GitHub Project Preview */}
          <div className="mb-16">
            <GitHubPreview
              repo="subfrost/libp2p-webtransport-sys"
              description="Rust bindings for libp2p WebTransport, enabling modern P2P networking with QUIC and HTTP/3"
            />
          </div>

          {/* About Section with Visual */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">About Subzero Research</h3>
              <div className="space-y-4 text-lg text-slate-700">
                <p>
                  Subzero Research is a Delaware C Corporation advancing information technology through
                  procedurally validated synthetic research. We architect peer-to-peer systems, distributed
                  computing infrastructure, and federated systems of capital.
                </p>
                <p>
                  As active contributors to <strong>rust-libp2p</strong> and maintainers of{" "}
                  <a
                    href="https://github.com/subfrost/libp2p-webtransport-sys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline font-medium"
                  >
                    libp2p-webtransport-sys
                  </a>
                  , we build decentralized networking technology with security properties designed to
                  outlast adversarial synthetic agents.
                </p>
              </div>
            </div>

            {/* Visual representation */}
            <div className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg border border-slate-200 p-8">
              <DistributedSystemSVG className="w-full h-full" />
            </div>
          </div>

          {/* Featured Research */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">Featured Research</h3>
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-white rounded-xl shadow-xl border-2 border-purple-200 p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Automated Consensus Frameworks</h4>
                  </div>
                  <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                    Our flagship research focuses on building automated consensus mechanisms over UDP-based
                    peer-to-peer networks. We're developing next-generation protocols that achieve Byzantine
                    fault tolerance with significantly lower latency than traditional TCP-based systems.
                  </p>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Sub-50ms consensus latency</strong> for global networks</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Automatic failure detection</strong> and network healing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Dynamic scaling</strong> from 3 to 1000+ nodes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Integrated with libp2p</strong> for real-world deployment</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <ConsensusFrameworkSVG className="w-full h-80" />
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Synthetic Research Infrastructure</h4>
              <p className="text-slate-600">
                Deploy procedurally validated research pipelines for your organization. We build custom
                infrastructure with iterative synthesis, verification, and adversarial testing cycles.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Private AI Integration</h4>
              <p className="text-slate-600">
                Deploy privacy-preserving AI solutions for sensitive applications. We specialize in
                on-premises and HIPAA-compliant infrastructure for healthcare and regulated industries.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Distributed Systems</h4>
              <p className="text-slate-600">
                Build resilient P2P networks and distributed infrastructure. From protocol design
                to implementation, we bring deep expertise in decentralized architectures.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Consulting Services</h4>
              <p className="text-slate-600">
                Work with contractors to sensitive US companies including medicaid systems.
                We provide architecture review, implementation support, and security audits.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Team</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-slate-100 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-slate-700">
                    {member.name.charAt(0)}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 text-sm font-medium mb-2">{member.title}</p>
                  <p className="text-sm text-slate-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="relative bg-white py-20 px-4">
        <FrostBackdrop reducedOpacity />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Research & Blog
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technical articles on distributed systems, WebTransport, QUIC, and privacy-preserving AI infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={post.href}
                className="group bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Read more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <SubzeroLogo className="w-8 h-8 text-slate-400" />
                <h4 className="text-white font-bold">Subzero Research</h4>
              </div>
              <p className="text-sm mb-2">
                Advancing information technology through procedurally validated synthetic research.
              </p>
              <p className="text-sm">
                Building a free internet for a free people.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Research</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/subfrost/libp2p-webtransport-sys" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    libp2p-webtransport-sys
                  </a>
                </li>
                <li>
                  <Link href="#synthetic-research" className="hover:text-white">Synthetic Research Thesis</Link>
                </li>
                <li>
                  <Link href="#blog" className="hover:text-white">Blog & Articles</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm">
                For inquiries about synthetic research infrastructure, protocol development, or collaborations, please reach out.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p className="mb-2">© 2025 Subzero Research Inc. All rights reserved.</p>
            <p>A Delaware C Corporation</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
