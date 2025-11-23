"use client"

import { useRef } from "react"
import Link from "next/link"
import FrostBackdrop from "@/components/FrostBackdrop"
import GitHubPreview from "@/components/GitHubPreview"

const teamMembers = [
  { name: "Raymond Pulver", title: "Founder", description: "Expert in distributed systems and p2p networks." },
  { name: "Gabe Lee", title: "Founder", description: "Specialist in infrastructure and system architecture." },
  { name: "Ehran", title: "Partner", description: "Strategic advisor with extensive experience in technology ventures." },
  { name: "Allen", title: "Partner", description: "Technology leader with deep expertise in web3 and distributed systems." },
]

const blogPosts = [
  {
    title: "Building with WebTransport",
    excerpt: "A comprehensive guide to implementing WebTransport in modern applications, exploring its advantages over traditional protocols.",
    href: "/blog/building-with-webtransport",
    date: "2024-11-23"
  },
  {
    title: "History of WebTransport, QUIC, and HTTP/3",
    excerpt: "Tracing the evolution of modern web protocols from HTTP/1 to HTTP/3, and understanding the revolutionary impact of QUIC.",
    href: "/blog/history-of-webtransport",
    date: "2024-11-23"
  },
  {
    title: "Private AI Automation with Open Source Models",
    excerpt: "Deploying Gemma:27b and other Ollama models for privacy-sensitive workflow automation at scale, with complete infrastructure examples.",
    href: "/blog/private-ai-automation",
    date: "2024-11-23"
  }
]

export default function Home() {
  const aboutSectionRef = useRef<HTMLElement | null>(null)

  const handleScrollDown = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center overflow-hidden bg-white">
        <FrostBackdrop />

        {/* Navigation */}
        <nav className="relative z-20 w-full max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-900">SubZero Research</div>
          <div className="flex gap-6">
            <Link href="#research" className="text-slate-700 hover:text-slate-900 font-medium">Research</Link>
            <Link href="#blog" className="text-slate-700 hover:text-slate-900 font-medium">Blog</Link>
            <Link href="/pay-invoice" className="text-slate-700 hover:text-slate-900 font-medium">Pay Invoice</Link>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-4 flex-1">
          <div className="flex flex-col items-center w-full text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Advancing Distributed Systems
              <br />
              <span className="text-blue-600">and P2P Networks</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mb-8 leading-relaxed">
              A Delaware C Corporation focused on peer-to-peer systems, distributed computing, 
              and privacy-first AI infrastructure for sensitive applications.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={handleScrollDown}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
              >
                Explore Our Work
              </button>
              <Link
                href="#blog"
                className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-md transition-colors"
              >
                Read Research
              </Link>
            </div>
          </div>
        </div>

        <button
          onClick={handleScrollDown}
          className="absolute bottom-8 text-slate-400 hover:text-slate-600 animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* Research & Projects Section */}
      <section
        id="research"
        ref={aboutSectionRef}
        className="relative bg-slate-50 py-20 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Research & Open Source
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We contribute to critical infrastructure projects and advance the state of distributed systems research.
            </p>
          </div>

          {/* GitHub Project Preview */}
          <div className="mb-16">
            <GitHubPreview 
              repo="subfrost/libp2p-webtransport-sys"
              description="Rust bindings for libp2p WebTransport, enabling modern P2P networking with QUIC and HTTP/3"
            />
          </div>

          {/* About Section */}
          <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8 mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">About SubZero Research</h3>
            <div className="space-y-4 text-lg text-slate-700">
              <p>
                SubZero Research is a Delaware C Corporation specializing in peer-to-peer systems, 
                distributed computing, and privacy-focused AI infrastructure for sensitive applications.
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
                , we advance decentralized networking technology and help organizations build 
                resilient, privacy-preserving infrastructure.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
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
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
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
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Research & Development</h4>
              <p className="text-slate-600">
                Advance the state of the art in networking protocols. We contribute to rust-libp2p 
                and develop cutting-edge WebTransport implementations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
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
      <section id="blog" className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
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
                className="group bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-lg transition-shadow overflow-hidden"
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
              <h4 className="text-white font-bold mb-4">SubZero Research</h4>
              <p className="text-sm">
                Advancing distributed systems and P2P networks with privacy-first principles.
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
                  <Link href="#blog" className="hover:text-white">Blog & Articles</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <p className="text-sm">
                For inquiries about our services or research collaborations, please reach out.
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p className="mb-2">© {new Date().getFullYear()} SubZero Research. All rights reserved.</p>
            <p>A Delaware C Corporation</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
