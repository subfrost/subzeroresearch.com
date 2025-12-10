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
  { name: "Raymond Pulver", title: "Founder", description: "Distributed systems and P2P networking." },
  { name: "Gabe Lee", title: "Founder", description: "Infrastructure and system architecture." },
  { name: "Ehran", title: "Partner", description: "Strategic advisor, technology ventures." },
  { name: "Allen", title: "Partner", description: "Web3 and distributed systems." },
]

const blogPosts = [
  {
    title: "L3 Abstractions for Agentic Prediction Markets",
    excerpt: "Building zero-attack-surface mesh consensus with local GPU inference and HTTP/3 transport for distributed market resolution.",
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
    excerpt: "Deploying Gemma:27b and other Ollama models for privacy-sensitive workflow automation at scale.",
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
  const researchRef = useRef<HTMLElement | null>(null)

  const handleScrollDown = () => {
    researchRef.current?.scrollIntoView({ behavior: "smooth" })
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
            <Link href="#stack" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Stack</Link>
            <Link href="#research" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Research</Link>
            <Link href="#blog" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Blog</Link>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-4 flex-1">
          <div className="flex flex-col items-center w-full text-center">
            <div className="mb-8">
              <SubzeroLogo className="w-32 h-32 text-blue-600" />
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Subzero Research
            </h1>

            <p className="text-2xl md:text-3xl text-slate-700 max-w-4xl mb-4 leading-relaxed font-medium">
              User space networking for the decentralized internet
            </p>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mb-12 leading-relaxed">
              We build L3 abstractions over IP for modern P2P systems&mdash;a complete user space IP stack
              with cryptographic identity, end-to-end encryption, and zero attack surface.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <button
                onClick={handleScrollDown}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg"
              >
                View the Stack
              </button>
              <a
                href="https://github.com/subfrost/libp2p-webtransport-sys"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-lg transition-all hover:shadow-lg border-2 border-slate-200"
              >
                GitHub
              </a>
            </div>

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

      {/* Stack Section */}
      <section
        id="stack"
        ref={researchRef}
        className="relative bg-white py-20 px-4"
      >
        <FrostBackdrop reducedOpacity />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Subfrost Stack
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A layered architecture replacing traditional networking with decentralized,
              encrypted, identity-aware P2P infrastructure.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border-2 border-slate-200 p-8 mb-12">
            <div className="grid gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Layer 4</div>
                    <div className="text-xl font-bold text-slate-900">Applications</div>
                    <p className="text-slate-600 text-sm">Any TCP/IP software&mdash;curl, databases, blockchain nodes</p>
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

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border-2 border-blue-300 p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Layer 2 &mdash; subp2p</div>
                    <div className="text-xl font-bold text-slate-900">P2P Networking</div>
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

              <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-xl border-2 border-cyan-300 p-6 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-cyan-600 uppercase tracking-wide mb-1">Layer 1 &mdash; libp2p-webtransport-sys</div>
                    <div className="text-xl font-bold text-slate-900">Encrypted Transport</div>
                    <p className="text-slate-600 text-sm">WebTransport, QUIC, TCP, WebSocket, Noise protocol</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-cyan-200 text-cyan-700 text-xs font-medium rounded">QUIC</span>
                    <span className="px-2 py-1 bg-cyan-200 text-cyan-700 text-xs font-medium rounded">HTTP/3</span>
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

          {/* Key Properties */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">End-to-End Encrypted</h4>
              <p className="text-slate-600 text-sm">
                Noise protocol on every connection. Relay nodes can't read your traffic.
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
                Ed25519 keypairs as network addresses. No DNS, no IPs to spoof.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-xl border border-purple-200 p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Zero Attack Surface</h4>
              <p className="text-slate-600 text-sm">
                No listening ports. No public endpoints. Nothing to scan or exploit.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200 p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Drop-in Compatible</h4>
              <p className="text-slate-600 text-sm">
                Standard sockets and DNS. Existing software works unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section
        id="research"
        className="relative bg-gradient-to-b from-slate-50 to-white py-20 px-4"
      >
        <FrostBackdrop reducedOpacity />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Research & Open Source
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We contribute to rust-libp2p and build open source P2P infrastructure.
            </p>
          </div>

          {/* GitHub Project Preview */}
          <div className="mb-16">
            <GitHubPreview
              repo="subfrost/libp2p-webtransport-sys"
              description="Rust bindings for libp2p WebTransport, enabling modern P2P networking with QUIC and HTTP/3"
            />
          </div>

          {/* About + Visual */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg border border-slate-200 p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">About Subzero Research</h3>
              <div className="space-y-4 text-lg text-slate-700">
                <p>
                  Subzero Research is a Delaware C Corporation building decentralized networking infrastructure.
                </p>
                <p>
                  We're creating a complete user space IP stack that lets any application communicate
                  over encrypted P2P networks&mdash;no kernel modifications, no trusted servers, no attack surface.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg border border-slate-200 p-8">
              <DistributedSystemSVG className="w-full h-full" />
            </div>
          </div>

          {/* Featured Research */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">Current Focus</h3>
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-white rounded-xl shadow-xl border-2 border-purple-200 p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">L0 Consensus over P2P</h4>
                  </div>
                  <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                    Building consensus mechanisms over UDP-based P2P networks for distributed applications
                    like prediction markets, threshold signing, and cross-chain coordination.
                  </p>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Sub-50ms consensus latency globally</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Byzantine fault tolerant</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Scales from 3 to 1000+ nodes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Built on libp2p</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <ConsensusFrameworkSVG className="w-full h-80" />
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Private AI Infrastructure</h4>
              <p className="text-slate-600">
                On-premises AI deployments for healthcare and regulated industries. HIPAA-compliant.
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
                P2P protocol design and implementation. Deep expertise in decentralized architectures.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Consulting</h4>
              <p className="text-slate-600">
                Architecture review, implementation support, and security audits for distributed systems.
              </p>
            </div>
          </div>

          {/* Team */}
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
              Blog
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Technical articles on P2P networking, WebTransport, and distributed systems.
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
              <p className="text-sm">
                User space networking for the decentralized internet.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/subfrost/libp2p-webtransport-sys" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    GitHub
                  </a>
                </li>
                <li>
                  <Link href="#stack" className="hover:text-white">Stack</Link>
                </li>
                <li>
                  <Link href="#blog" className="hover:text-white">Blog</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm">
                For inquiries about our infrastructure or consulting services.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p className="mb-2">© 2025 Subzero Research Inc. All rights reserved.</p>
            <p>Delaware C Corporation</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
