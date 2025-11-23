"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import FrostBackdrop from "@/components/FrostBackdrop"

const teamMembers = [
  { name: "Raymond Pulver", title: "Founder", description: "Expert in distributed systems and p2p networks." },
  { name: "Gabe Lee", title: "Founder", description: "Specialist in infrastructure and system architecture." },
  { name: "Ehran", title: "Partner", description: "Strategic advisor with extensive experience in technology ventures." },
  { name: "Allen", title: "Partner", description: "Technology leader with deep expertise in web3 and distributed systems." },
]

export default function Home() {
  const aboutSectionRef = useRef<HTMLElement | null>(null)

  const handleScrollDown = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center overflow-hidden bg-gradient-to-b from-blue-200 to-blue-50">
        <FrostBackdrop />

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl px-4 min-h-screen">
          <div className="flex flex-col items-center w-full">
            <div className="w-full px-2 sm:px-0">
              <h1 className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[9rem] text-white tracking-normal font-bold uppercase text-center snow-title">
                SUBZERO
              </h1>
              <h2 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-white tracking-wide font-bold uppercase text-center snow-title">
                RESEARCH
              </h2>
            </div>

            <div className="mt-8 mb-6 flex flex-col items-center gap-4">
              <p className="text-xl md:text-2xl text-white text-center max-w-2xl">
                Building the future of peer-to-peer and distributed systems
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                <button
                  onClick={handleScrollDown}
                  className="px-6 py-3 bg-white/90 hover:bg-white text-blue-900 font-semibold rounded-lg transition-colors shadow-lg"
                >
                  Learn More
                </button>
                <Link
                  href="/pay-invoice"
                  className="px-6 py-3 bg-blue-900/90 hover:bg-blue-900 text-white font-semibold rounded-lg transition-colors shadow-lg"
                >
                  Pay Invoice
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleScrollDown}
          className="absolute bottom-8 text-blue-900 animate-bounce cursor-pointer"
          aria-label="Scroll down"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </section>

      {/* About Section */}
      <section
        ref={aboutSectionRef}
        className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-4"
      >
        <FrostBackdrop reducedOpacity />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider snow-title-no-filter mb-6">
              About Us
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-300">
              <p>
                SubZero Research is a Delaware C Corporation specializing in peer-to-peer systems, distributed systems, and privacy-focused AI infrastructure.
              </p>
              <p>
                We are proud contributors to <strong>rust-libp2p</strong> and maintainers of{" "}
                <a
                  href="https://github.com/subfrost/libp2p-webtransport-sys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  libp2p-webtransport-sys
                </a>
                , advancing the state of decentralized networking technology.
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-center snow-title-no-filter mb-8">
              Our Services
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-4">Private AI Integration</h4>
                <p className="text-gray-300">
                  We help businesses integrate AI solutions with a focus on privacy and data security. Our expertise ensures your AI infrastructure meets the highest standards for sensitive applications.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-4">HIPAA-Compliant Infrastructure</h4>
                <p className="text-gray-300">
                  Our team specializes in building and maintaining HIPAA-compliant systems for healthcare and medical applications. We work with contractors to sensitive US companies, including those in the medicaid sector.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-4">Distributed Systems Consulting</h4>
                <p className="text-gray-300">
                  Leverage our deep expertise in peer-to-peer and distributed systems to build scalable, resilient infrastructure. We bring years of experience in decentralized technologies.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-4">Open Source Contributions</h4>
                <p className="text-gray-300">
                  As active contributors to rust-libp2p and maintainers of critical networking libraries, we bring cutting-edge research and development to your projects.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-center snow-title-no-filter mb-8">
              Our Team
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center hover:bg-white/15 transition-colors"
                >
                  <div className="w-20 h-20 rounded-full bg-blue-500/30 mx-auto mb-4 flex items-center justify-center text-3xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                  <p className="text-blue-300 mb-3">{member.title}</p>
                  <p className="text-sm text-gray-400">{member.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Section */}
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wider snow-title-no-filter mb-6">
              Research Sponsor
            </h3>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">Magnus Capital</h4>
              <p className="text-gray-300">
                Our research is proudly sponsored by Magnus Capital, enabling us to push the boundaries of distributed systems and peer-to-peer networking technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© {new Date().getFullYear()} SubZero Research. All rights reserved.</p>
          <p className="text-sm">A Delaware C Corporation</p>
        </div>
      </footer>
    </main>
  )
}
