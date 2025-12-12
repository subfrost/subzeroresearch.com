"use client"

import Link from "next/link"
import SubzeroLogo from "@/components/SubzeroLogo"
import FrostBackdrop from "@/components/FrostBackdrop"

// Anthology Fund specific header
const AnthologyBadge = () => (
  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-400/30 px-4 py-2 rounded-full">
    <span className="text-sm font-medium text-orange-200">Application for</span>
    <span className="text-sm font-bold text-white">Anthology Fund</span>
    <span className="text-xs text-orange-300">Menlo × Anthropic</span>
  </div>
)

// Why Anthropic alignment SVG
const AnthropicAlignmentSVG = () => (
  <svg viewBox="0 0 700 250" className="w-full h-auto">
    <defs>
      <linearGradient id="anthropicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d97706"/>
        <stop offset="100%" stopColor="#f59e0b"/>
      </linearGradient>
      <linearGradient id="subzeroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6"/>
        <stop offset="100%" stopColor="#60a5fa"/>
      </linearGradient>
    </defs>

    {/* Title */}
    <text x="350" y="25" textAnchor="middle" className="fill-slate-700 text-base font-bold">Full-Stack AI Safety</text>

    {/* Anthropic side */}
    <g transform="translate(50, 50)">
      <rect x="0" y="0" width="250" height="150" rx="16" fill="url(#anthropicGrad)" opacity="0.1" stroke="#f59e0b" strokeWidth="2"/>
      <rect x="0" y="0" width="250" height="45" rx="16" fill="url(#anthropicGrad)"/>
      <text x="125" y="30" textAnchor="middle" className="fill-white text-sm font-bold">Anthropic / Claude</text>

      <text x="125" y="75" textAnchor="middle" className="fill-slate-700 text-sm font-medium">Model-Level Safety</text>

      <g transform="translate(20, 90)">
        <text x="0" y="0" className="fill-slate-600 text-xs">✓ Constitutional AI</text>
        <text x="0" y="18" className="fill-slate-600 text-xs">✓ RLHF alignment</text>
        <text x="0" y="36" className="fill-slate-600 text-xs">✓ Harmlessness training</text>
      </g>

      <g transform="translate(130, 90)">
        <text x="0" y="0" className="fill-slate-600 text-xs">✓ Honest uncertainty</text>
        <text x="0" y="18" className="fill-slate-600 text-xs">✓ Refusal behaviors</text>
        <text x="0" y="36" className="fill-slate-600 text-xs">✓ Safety research</text>
      </g>
    </g>

    {/* Plus sign */}
    <g transform="translate(325, 110)">
      <circle cx="25" cy="25" r="20" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2"/>
      <text x="25" y="32" textAnchor="middle" className="fill-slate-500 text-xl font-bold">+</text>
    </g>

    {/* Subzero side */}
    <g transform="translate(400, 50)">
      <rect x="0" y="0" width="250" height="150" rx="16" fill="url(#subzeroGrad)" opacity="0.1" stroke="#3b82f6" strokeWidth="2"/>
      <rect x="0" y="0" width="250" height="45" rx="16" fill="url(#subzeroGrad)"/>
      <text x="125" y="30" textAnchor="middle" className="fill-white text-sm font-bold">Subzero / subtun0</text>

      <text x="125" y="75" textAnchor="middle" className="fill-slate-700 text-sm font-medium">Infrastructure-Level Safety</text>

      <g transform="translate(20, 90)">
        <text x="0" y="0" className="fill-slate-600 text-xs">✓ Zero attack surface</text>
        <text x="0" y="18" className="fill-slate-600 text-xs">✓ Crypto identity</text>
        <text x="0" y="36" className="fill-slate-600 text-xs">✓ E2E encryption</text>
      </g>

      <g transform="translate(130, 90)">
        <text x="0" y="0" className="fill-slate-600 text-xs">✓ No central trust</text>
        <text x="0" y="18" className="fill-slate-600 text-xs">✓ Agent isolation</text>
        <text x="0" y="36" className="fill-slate-600 text-xs">✓ Secure coordination</text>
      </g>
    </g>

    {/* Bottom conclusion */}
    <g transform="translate(175, 215)">
      <rect x="0" y="0" width="350" height="30" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2"/>
      <text x="175" y="20" textAnchor="middle" className="fill-green-700 text-sm font-bold">= Complete AI Safety Stack</text>
    </g>
  </svg>
)

// Custom SVG: Attack Surface Comparison (same as seed page)
const AttackSurfaceSVG = () => (
  <svg viewBox="0 0 800 300" className="w-full h-auto">
    <defs>
      <linearGradient id="dangerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#dc2626" stopOpacity="0.6"/>
      </linearGradient>
      <linearGradient id="safeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8"/>
        <stop offset="100%" stopColor="#16a34a" stopOpacity="0.6"/>
      </linearGradient>
    </defs>

    {/* Traditional Network */}
    <g transform="translate(50, 30)">
      <text x="150" y="0" textAnchor="middle" className="fill-slate-700 text-lg font-bold">Traditional Network</text>
      <rect x="100" y="40" width="100" height="80" rx="8" fill="url(#dangerGrad)" stroke="#dc2626" strokeWidth="2"/>
      <text x="150" y="70" textAnchor="middle" className="fill-white text-sm font-medium">AI Agent</text>
      <text x="150" y="90" textAnchor="middle" className="fill-white text-xs opacity-80">Server</text>

      {[
        { x: 95, y: 50, label: ":22" }, { x: 95, y: 70, label: ":80" },
        { x: 95, y: 90, label: ":443" }, { x: 95, y: 110, label: ":8080" },
        { x: 205, y: 50, label: ":3000" }, { x: 205, y: 70, label: ":5432" },
        { x: 205, y: 90, label: ":6379" }, { x: 205, y: 110, label: ":11434" },
      ].map((port, i) => (
        <g key={i}>
          <circle cx={port.x} cy={port.y} r="12" fill="#fef2f2" stroke="#ef4444" strokeWidth="2"/>
          <text x={port.x} y={port.y + 4} textAnchor="middle" className="fill-red-600 text-[8px] font-mono">{port.label}</text>
        </g>
      ))}

      <rect x="100" y="140" width="100" height="30" rx="4" fill="#fef2f2" stroke="#ef4444"/>
      <text x="150" y="160" textAnchor="middle" className="fill-red-600 text-sm font-bold">8 Open Ports</text>
      <text x="150" y="195" textAnchor="middle" className="fill-red-500 text-xs">LLM-exploitable</text>
    </g>

    {/* VS */}
    <g transform="translate(380, 100)">
      <circle cx="20" cy="30" r="25" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="2"/>
      <text x="20" y="36" textAnchor="middle" className="fill-slate-500 text-sm font-bold">VS</text>
    </g>

    {/* subtun0 Network */}
    <g transform="translate(450, 30)">
      <text x="150" y="0" textAnchor="middle" className="fill-slate-700 text-lg font-bold">subtun0 Network</text>
      <rect x="100" y="40" width="100" height="80" rx="8" fill="url(#safeGrad)" stroke="#16a34a" strokeWidth="2"/>
      <text x="150" y="70" textAnchor="middle" className="fill-white text-sm font-medium">AI Agent</text>
      <text x="150" y="90" textAnchor="middle" className="fill-white text-xs opacity-80">Ed25519 ID</text>

      <g opacity="0.7">
        <text x="85" y="55" className="text-base">🛡️</text>
        <text x="85" y="85" className="text-base">🔐</text>
        <text x="85" y="115" className="text-base">🛡️</text>
        <text x="200" y="55" className="text-base">🔐</text>
        <text x="200" y="85" className="text-base">🛡️</text>
        <text x="200" y="115" className="text-base">🔐</text>
      </g>

      <rect x="100" y="140" width="100" height="30" rx="4" fill="#f0fdf4" stroke="#22c55e"/>
      <text x="150" y="160" textAnchor="middle" className="fill-green-600 text-sm font-bold">0 Open Ports</text>
      <text x="150" y="195" textAnchor="middle" className="fill-green-600 text-xs">Nothing to exploit</text>
    </g>
  </svg>
)

// Stack Architecture (compact version)
const StackArchitectureSVG = () => (
  <svg viewBox="0 0 600 320" className="w-full h-auto">
    <defs>
      <linearGradient id="layer4" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#8b5cf6"/><stop offset="100%" stopColor="#a78bfa"/>
      </linearGradient>
      <linearGradient id="layer3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#60a5fa"/>
      </linearGradient>
      <linearGradient id="layer2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#22d3ee"/>
      </linearGradient>
      <linearGradient id="layer1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#10b981"/><stop offset="100%" stopColor="#34d399"/>
      </linearGradient>
    </defs>

    <g transform="translate(50, 10)">
      <rect x="0" y="0" width="500" height="55" rx="10" fill="url(#layer4)" opacity="0.9"/>
      <text x="250" y="22" textAnchor="middle" className="fill-white text-sm font-bold">AI Agents / LLMs / Multi-Agent Systems</text>
      <text x="250" y="40" textAnchor="middle" className="fill-white text-xs opacity-80">Works unchanged - drop-in compatible</text>
    </g>

    <path d="M300 70 L300 85" stroke="#94a3b8" strokeWidth="2"/>

    <g transform="translate(50, 90)">
      <rect x="0" y="0" width="500" height="70" rx="10" fill="url(#layer3)" stroke="#2563eb" strokeWidth="2"/>
      <text x="250" y="22" textAnchor="middle" className="fill-white text-base font-bold">subtun0 — Zero Attack Surface IP Stack</text>
      <text x="250" y="45" textAnchor="middle" className="fill-white text-xs opacity-90">Ed25519 Identity • Noise Encryption • NAT Traversal • TUN Device</text>
    </g>

    <path d="M300 165 L300 180" stroke="#94a3b8" strokeWidth="2"/>

    <g transform="translate(50, 185)">
      <rect x="0" y="0" width="500" height="50" rx="10" fill="url(#layer2)"/>
      <text x="250" y="20" textAnchor="middle" className="fill-white text-sm font-bold">subp2p — P2P Networking</text>
      <text x="250" y="38" textAnchor="middle" className="fill-white text-xs opacity-80">libp2p • Kademlia • GossipSub • Circuit Relay v2</text>
    </g>

    <path d="M300 240 L300 255" stroke="#94a3b8" strokeWidth="2"/>

    <g transform="translate(50, 260)">
      <rect x="0" y="0" width="500" height="45" rx="10" fill="url(#layer1)"/>
      <text x="250" y="18" textAnchor="middle" className="fill-white text-sm font-bold">Encrypted Transport</text>
      <text x="250" y="35" textAnchor="middle" className="fill-white text-xs opacity-80">QUIC • WebTransport • HTTP/3 • Browser-Native</text>
    </g>
  </svg>
)

// Funding SVG for Anthology
const FundingStructureSVG = () => (
  <svg viewBox="0 0 600 180" className="w-full h-auto">
    <defs>
      <linearGradient id="preSeedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f59e0b"/><stop offset="100%" stopColor="#d97706"/>
      </linearGradient>
      <linearGradient id="seedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6"/><stop offset="100%" stopColor="#1d4ed8"/>
      </linearGradient>
    </defs>

    <g transform="translate(30, 10)">
      <rect x="0" y="0" width="240" height="150" rx="12" fill="url(#preSeedGrad)" opacity="0.1" stroke="#f59e0b" strokeWidth="2"/>
      <rect x="0" y="0" width="240" height="38" rx="12" fill="url(#preSeedGrad)"/>
      <text x="120" y="25" textAnchor="middle" className="fill-white text-sm font-bold">Pre-Seed Option</text>
      <text x="120" y="65" textAnchor="middle" className="fill-amber-700 text-xs">Early conviction • Faster close</text>
      <text x="120" y="95" textAnchor="middle" className="fill-slate-800 text-xl font-bold">$12M</text>
      <text x="120" y="115" textAnchor="middle" className="fill-slate-600 text-sm">Valuation Cap</text>
      <text x="120" y="138" textAnchor="middle" className="fill-amber-600 text-xs">Better terms for speed</text>
    </g>

    <g transform="translate(275, 65)">
      <text x="25" y="15" textAnchor="middle" className="fill-slate-400 text-xl">→</text>
    </g>

    <g transform="translate(330, 10)">
      <rect x="0" y="0" width="240" height="150" rx="12" fill="url(#seedGrad)" opacity="0.1" stroke="#3b82f6" strokeWidth="2"/>
      <rect x="0" y="0" width="240" height="38" rx="12" fill="url(#seedGrad)"/>
      <text x="120" y="25" textAnchor="middle" className="fill-white text-sm font-bold">Seed Round</text>
      <text x="120" y="65" textAnchor="middle" className="fill-blue-700 text-xs">Target raise</text>
      <text x="120" y="95" textAnchor="middle" className="fill-slate-800 text-xl font-bold">$2.25M @ $18M</text>
      <text x="120" y="115" textAnchor="middle" className="fill-slate-600 text-sm">Valuation</text>
      <text x="120" y="138" textAnchor="middle" className="fill-blue-600 text-xs">Full seed terms</text>
    </g>
  </svg>
)

export default function AnthologyPage() {
  return (
    <main className="relative bg-white min-h-screen">
      {/* Hero Section - Anthology themed */}
      <section className="relative bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white overflow-hidden">
        <FrostBackdrop />

        <nav className="relative z-20 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <SubzeroLogo className="w-10 h-10 text-amber-400" />
            <span className="text-xl font-bold">Subzero Research</span>
          </Link>
          <Link href="/seed" className="text-sm text-amber-300 hover:text-white transition-colors">
            ← General Pitch
          </Link>
        </nav>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-20">
          <div className="text-center">
            <AnthologyBadge />

            <h1 className="text-4xl md:text-5xl font-bold mt-8 mb-6 leading-tight">
              Infrastructure-Layer Safety<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                for the Agentic AI Era
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Anthropic builds safe models. We build the safe infrastructure they run on.
              Together: complete AI safety stack.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur px-5 py-3 rounded-lg">
                <div className="text-xl font-bold text-white">$2.25M</div>
                <div className="text-xs text-slate-400">Seed Raise</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-5 py-3 rounded-lg">
                <div className="text-xl font-bold text-white">$18M</div>
                <div className="text-xs text-slate-400">Valuation</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-5 py-3 rounded-lg">
                <div className="text-xl font-bold text-green-400">Live</div>
                <div className="text-xs text-slate-400">Product</div>
              </div>
              <div className="bg-white/10 backdrop-blur px-5 py-3 rounded-lg">
                <div className="text-xl font-bold text-amber-400">$12M</div>
                <div className="text-xs text-slate-400">Pre-Seed Option</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 40 1440 40V80H0V40Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Why Anthropic + Subzero */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Why Anthology Fund?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              AI safety isn't just model alignment—it's also the infrastructure AI runs on.
              A perfectly aligned model on compromised infrastructure can still cause harm.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-amber-200">
            <AnthropicAlignmentSVG />
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">The Problem</h2>
            <p className="text-lg text-slate-600">
              LLMs generate exploits faster than humans can patch. Traditional networking is obsolete.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-red-50 rounded-2xl p-6 border border-slate-200">
            <AttackSurfaceSVG />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-bold text-slate-900 mb-1 text-sm">LLMs Generate Exploits</h3>
              <p className="text-slate-600 text-xs">GPT-4 writes working exploit code. Scanning is now AI-automated.</p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-bold text-slate-900 mb-1 text-sm">Agents Expose APIs</h3>
              <p className="text-slate-600 text-xs">Multi-agent HTTP = massive attack surface.</p>
            </div>
            <div className="bg-red-50 rounded-xl p-5 border border-red-100">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold text-slate-900 mb-1 text-sm">Attack &gt; Defense</h3>
              <p className="text-slate-600 text-xs">AI compresses attack timelines to seconds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Our Solution: subtun0</h2>
            <p className="text-lg text-slate-600">
              User-space IP stack. Zero attack surface. Drop-in compatible.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
            <StackArchitectureSVG />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { icon: "🔒", title: "Zero Ports", desc: "Nothing to scan" },
              { icon: "🔑", title: "Crypto ID", desc: "Ed25519 = unforgeable" },
              { icon: "🛡️", title: "E2E Encrypted", desc: "Relays can't read" },
              { icon: "📦", title: "Drop-In", desc: "No code changes" },
            ].map((item, i) => (
              <div key={i} className="text-center p-4 bg-white rounded-xl border border-slate-200">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                <p className="text-slate-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traction */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Traction</h2>
            <p className="text-lg text-slate-600">Working product. Not a whitepaper.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "✓", label: "Product Live", sub: "subtun0 operational", color: "green" },
              { value: "OSS", label: "Open Source", sub: "libp2p contributions", color: "blue" },
              { value: "4+", label: "Platforms", sub: "Native, Android, WASM", color: "purple" },
              { value: "$", label: "Revenue", sub: "HIPAA consulting", color: "amber" },
            ].map((item, i) => (
              <div key={i} className={`bg-white rounded-xl p-5 text-center border-2 border-${item.color}-200`}>
                <div className={`text-3xl font-bold text-${item.color}-600 mb-1`}>{item.value}</div>
                <div className="text-sm font-bold text-slate-900">{item.label}</div>
                <div className="text-xs text-slate-600">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Team</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xl font-bold">RP</div>
              <h3 className="text-lg font-bold text-slate-900">Raymond Pulver</h3>
              <div className="text-blue-600 font-medium text-sm mb-2">Founder</div>
              <p className="text-slate-600 text-xs">Distributed systems • libp2p contributor • Built WebTransport in pure Rust</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xl font-bold">GL</div>
              <h3 className="text-lg font-bold text-slate-900">Gabe Lee</h3>
              <div className="text-purple-600 font-medium text-sm mb-2">Founder</div>
              <p className="text-slate-600 text-xs">Infrastructure architect • GPU clusters • HIPAA AI deployments</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Raise */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">The Raise</h2>
            <p className="text-slate-600">Two entry points for partnership</p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-amber-50 rounded-2xl p-6 border border-slate-200">
            <FundingStructureSVG />
          </div>

          <div className="mt-6 p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-slate-900 mb-2">Pre-Seed Rationale</h4>
            <p className="text-slate-600 text-sm">
              Early believers get better terms. The $12M pre-seed option is for partners who want to move fast
              and lock in conviction before the full seed closes. Same team, same tech, better price for speed.
            </p>
          </div>
        </div>
      </section>

      {/* Favorite AI Model - Anthology specific */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              Favorite AI Model: Claude
            </h3>
            <p className="text-slate-600 mb-4">
              Claude's combination of strong reasoning, honest uncertainty expression, and Constitutional AI
              approach aligns with how we think about building safe infrastructure.
            </p>
            <p className="text-slate-600 mb-4">
              In our HIPAA AI deployments, we use Claude for complex reasoning tasks where predictability
              and safety behaviors matter. For on-prem requirements, we deploy Gemma/Llama via Ollama—but
              Claude is our recommendation when cloud is acceptable.
            </p>
            <p className="text-slate-700 font-medium">
              The emphasis on being helpful while avoiding harm matches our philosophy: enable good outcomes
              through secure infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Complete AI Safety Requires Safe Infrastructure
          </h2>
          <p className="text-lg text-slate-300 mb-6">
            The window for foundational AI infrastructure is now. Let's build together.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:founders@subzeroresearch.com?subject=Anthology%20Fund%20Application"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-amber-400 transition-colors"
            >
              Contact Founders
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="https://github.com/subfrost"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              View Code
            </a>
            <Link
              href="/seed"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-amber-400 text-amber-400 px-6 py-3 rounded-lg font-bold hover:bg-amber-400/10 transition-colors"
            >
              Full Pitch Deck
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <SubzeroLogo className="w-6 h-6 text-slate-500" />
            <span className="text-sm">Subzero Research Inc. — Delaware C Corp — Est. March 2024</span>
          </div>
          <div className="text-sm">
            <span className="text-amber-500">Anthology Fund Application</span>
            <span className="mx-2">•</span>
            <a href="https://subzeroresearch.com" className="hover:text-white">subzeroresearch.com</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
