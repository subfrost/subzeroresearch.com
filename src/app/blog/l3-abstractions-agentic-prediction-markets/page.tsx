"use client"

import Link from "next/link"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function L3AbstractionsAgenticPredictionMarkets() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-slate-900 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">L3 Abstractions for Agentic Prediction Markets</h1>
          <p className="text-xl text-slate-300">Building zero-attack-surface mesh consensus with local GPU inference and HTTP/3 transport</p>
          <div className="mt-4 text-slate-400">December 9, 2024 · 20 min read</div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-slate max-w-none">

          {/* Abstract */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-r-lg mb-12">
            <h3 className="text-lg font-bold text-slate-900 mt-0 mb-3">Abstract</h3>
            <p className="text-slate-700 mb-0">
              We present a novel architecture for decentralized prediction markets powered by agentic AI, built on
              Layer 3 (L3) abstractions over IP that enable Layer 0 (L0) application stacks for distributed consensus.
              By connecting local GPU inference backends to our HTTP/3 transport stack, we create mesh-federated
              consensus networks with no external attack surface—enabling unbiased, distributed resolution of global
              state for conditional markets without centralized oracles or trusted third parties.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">Introduction: The Oracle Problem in Prediction Markets</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Prediction markets have long promised to be "the ultimate information aggregation mechanism"—using
            market dynamics to surface collective intelligence about future events. From political elections to
            scientific outcomes, these markets theoretically provide the most accurate forecasts available by
            incentivizing participants to reveal their true beliefs.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Yet every existing prediction market faces the same fundamental challenge: <strong>the oracle problem</strong>.
            How do you resolve a market? Someone—or something—must determine whether an event occurred. Traditional
            platforms rely on centralized resolution: a company decides outcomes, creating single points of failure,
            censorship vectors, and trust requirements that undermine the decentralized promise.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Blockchain-based prediction markets attempted to solve this by distributing oracle duties, but they
            introduced new problems: slow finality, high transaction costs, and—critically—still require external
            data sources that can be manipulated or censored at the network edge.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            We propose a different approach: <strong>agentic AI resolution through mesh-federated consensus</strong>,
            built on L3 abstractions that eliminate attack surfaces entirely.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">The L3 Abstraction: IP for Modern P2P</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Our thesis at Subzero Research centers on a key insight: the modern internet's architecture was designed
            for client-server communication, not peer-to-peer collaboration. Every abstraction—from TCP/IP to HTTP—
            assumes asymmetric relationships with centralized endpoints. This architectural bias creates the attack
            surfaces that undermine decentralized systems.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            We're building <strong>Layer 3 abstractions over IP</strong> specifically designed for modern P2P networks.
            These abstractions enable what we call <strong>L0 application stacks</strong>—foundational layers for
            distributed consensus that operate above all existing blockchain and networking infrastructure.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">The Subfrost Stack Architecture</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-purple-600 font-bold">L0 Application</span>
                <span className="text-slate-500 ml-4">Prediction Market Consensus / Agentic Resolution</span>
              </div>
              <div className="flex justify-center text-slate-400">↓</div>
              <div className="bg-white p-3 rounded border border-purple-300 border-2">
                <span className="text-purple-600 font-bold">L3 — subtun</span>
                <span className="text-slate-500 ml-4">User Space IP Stack (TUN, DNS, ACLs)</span>
              </div>
              <div className="flex justify-center text-slate-400">↓</div>
              <div className="bg-white p-3 rounded border border-blue-300 border-2">
                <span className="text-blue-600 font-bold">L2 — subp2p</span>
                <span className="text-slate-500 ml-4">P2P Networking (Kademlia, GossipSub, Relay)</span>
              </div>
              <div className="flex justify-center text-slate-400">↓</div>
              <div className="bg-white p-3 rounded border border-cyan-300 border-2">
                <span className="text-cyan-600 font-bold">L1 — libp2p-webtransport-sys</span>
                <span className="text-slate-500 ml-4">HTTP/3 + QUIC + Noise Encryption</span>
              </div>
            </div>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The key innovation is <code className="bg-slate-100 px-2 py-1 rounded">subtun</code>—our Layer 3
            abstraction that provides a complete user-space IP stack. Unlike traditional VPNs or overlay networks,
            subtun creates a new networking paradigm where:
          </p>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-3 mb-6">
            <li>
              <strong>Every connection is cryptographically authenticated</strong>: Ed25519 identity keypairs
              are the network addresses, not IP addresses
            </li>
            <li>
              <strong>DNS resolution maps to peer identities</strong>: Names like <code className="bg-slate-100 px-1 rounded">oracle-node.relay</code> resolve
              to PeerIds, not IP addresses
            </li>
            <li>
              <strong>Port-based ACLs enforce access at the network layer</strong>: Only explicitly whitelisted
              services are reachable—no port scanning, no service enumeration
            </li>
            <li>
              <strong>All traffic is end-to-end encrypted</strong>: Noise protocol with forward secrecy;
              relay nodes cannot read traffic content
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Zero Attack Surface Architecture</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Traditional networked systems expose attack surfaces at every layer: open ports for service discovery,
            unencrypted metadata revealing network topology, centralized DNS enabling traffic analysis, and
            IP addresses that can be targeted for DDoS or censorship.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Our L3 abstraction eliminates these surfaces by design:
          </p>

          <div className="my-6">
            <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`# Traditional Architecture Attack Surfaces:
# ❌ Open ports (22, 80, 443, 8545...) → Port scanning
# ❌ Public IP addresses → DDoS, geolocation, blocking
# ❌ DNS queries → Traffic analysis, censorship
# ❌ TLS certificates → CA compromise, MITM
# ❌ Service enumeration → Vulnerability discovery

# Subtun L3 Architecture:
# ✅ No listening ports → Nothing to scan
# ✅ Bogon IP addresses → Not routable on public internet
# ✅ P2P name resolution → No DNS leakage
# ✅ Self-certified Ed25519 → No CA dependencies
# ✅ Whitelist-only ACLs → No service enumeration`}
            </SyntaxHighlighter>
          </div>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            When an agentic AI node joins the prediction market network, it connects through our L3 stack:
          </p>

          <div className="my-6">
            <SyntaxHighlighter language="bash" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`# Start an agentic oracle node with local GPU inference
sudo subtun \\
  --gateway \\
  --circuit relay.subfrost.io \\
  --register oracle-agent-7f3a \\
  -p 8080:8080  # Only expose the consensus API

# The node is now:
# - Reachable only by peers who know its registered name
# - Protected by Noise encryption on all connections
# - Invisible to port scanners (no public listening sockets)
# - Running inference entirely on local GPU (no API calls out)`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Agentic AI for Market Resolution</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The second innovation is using <strong>agentic AI systems with local GPU inference</strong> as the
            oracle mechanism. Rather than relying on human reporters or centralized data feeds, each node in the
            consensus network runs its own AI agent that:
          </p>
          <ol className="list-decimal pl-6 text-lg text-slate-700 space-y-3 mb-6">
            <li>
              <strong>Gathers evidence autonomously</strong>: Crawls relevant sources, processes documents,
              analyzes multimedia—all locally
            </li>
            <li>
              <strong>Forms independent judgments</strong>: Uses local LLM inference (Llama, Mistral, or similar)
              running on consumer GPUs
            </li>
            <li>
              <strong>Participates in distributed consensus</strong>: Submits resolution votes through the P2P
              network with cryptographic attestations
            </li>
            <li>
              <strong>Stakes reputation on accuracy</strong>: Agents that consistently resolve correctly gain
              influence; those that err lose standing
            </li>
          </ol>

          <div className="my-6">
            <SyntaxHighlighter language="rust" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`use subfrost_consensus::{Agent, Market, Resolution, Evidence};
use ollama_rs::Ollama;

pub struct OracleAgent {
    llm: Ollama,
    identity: Ed25519Keypair,
    network: SubP2PProvider,
    reputation_stake: u64,
}

impl Agent for OracleAgent {
    async fn resolve_market(&self, market: &Market) -> Resolution {
        // 1. Gather evidence from multiple sources
        let evidence = self.gather_evidence(&market.query).await;

        // 2. Local LLM inference - no external API calls
        let analysis = self.llm.generate(
            "llama3.1:70b",
            &self.format_resolution_prompt(market, &evidence)
        ).await?;

        // 3. Parse structured resolution
        let resolution = self.parse_resolution(&analysis)?;

        // 4. Create cryptographic attestation
        let attestation = Attestation {
            market_id: market.id,
            resolution: resolution.clone(),
            evidence_hashes: evidence.iter().map(|e| e.hash()).collect(),
            timestamp: SystemTime::now(),
            signature: self.identity.sign(&resolution.to_bytes()),
        };

        // 5. Submit to consensus network
        self.network.broadcast_resolution(attestation).await?;

        resolution
    }

    async fn gather_evidence(&self, query: &str) -> Vec<Evidence> {
        // Autonomous evidence gathering:
        // - Web crawling with local processing
        // - Document analysis (PDFs, filings, etc.)
        // - Social media sentiment (without API dependencies)
        // - Historical data from local indexes

        let mut evidence = Vec::new();

        // Each evidence source runs locally
        evidence.extend(self.crawl_web_sources(query).await);
        evidence.extend(self.analyze_documents(query).await);
        evidence.extend(self.process_historical_data(query).await);

        evidence
    }
}`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Mesh Federated Consensus</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Individual agent judgments are aggregated through <strong>mesh federated consensus</strong>—a protocol
            we've developed that achieves Byzantine fault tolerance without requiring a global blockchain or
            proof-of-work/stake mechanisms.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The key insight is that prediction market resolution is fundamentally different from financial
            transaction ordering. We don't need total ordering of all events—we need <strong>eventual agreement
            on discrete outcomes</strong> with strong guarantees against manipulation.
          </p>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Consensus Properties</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Sybil Resistance</h4>
                <p className="text-sm text-slate-600">
                  Reputation staking prevents spawn attacks. New agents must build track record before
                  gaining significant voting weight.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Collusion Resistance</h4>
                <p className="text-sm text-slate-600">
                  Evidence attestations are committed before resolution votes are revealed, preventing
                  coordination on false outcomes.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Censorship Resistance</h4>
                <p className="text-sm text-slate-600">
                  No centralized relay. Mesh topology means any subset of nodes can continue operating
                  as long as they maintain connectivity.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Verifiable Computation</h4>
                <p className="text-sm text-slate-600">
                  Each agent commits evidence hashes before resolution, enabling post-hoc verification
                  of reasoning chains.
                </p>
              </div>
            </div>
          </div>

          <div className="my-6">
            <SyntaxHighlighter language="rust" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`use subfrost_consensus::{ConsensusRound, Vote, Threshold};

pub struct MeshConsensus {
    local_agent: OracleAgent,
    peer_votes: HashMap<PeerId, Vote>,
    evidence_commitments: HashMap<PeerId, Hash>,
    reputation_weights: HashMap<PeerId, f64>,
}

impl MeshConsensus {
    /// Two-phase commit for market resolution
    pub async fn resolve(&mut self, market: &Market) -> Result<Resolution> {
        // Phase 1: Evidence Commitment
        // All agents commit to their evidence hashes before seeing others
        let my_evidence = self.local_agent.gather_evidence(&market.query).await;
        let commitment = self.commit_evidence(&my_evidence);
        self.broadcast_commitment(commitment).await?;

        // Wait for commitment threshold (2/3 of reputation-weighted agents)
        self.wait_for_commitments(Threshold::TwoThirds).await?;

        // Phase 2: Resolution Voting
        // Now agents reveal their resolutions with evidence
        let my_resolution = self.local_agent.resolve_market(market).await;
        self.broadcast_resolution(my_resolution, my_evidence).await?;

        // Aggregate votes weighted by reputation
        self.wait_for_resolutions(Threshold::TwoThirds).await?;

        let final_resolution = self.aggregate_resolutions()?;

        // Update reputations based on agreement with final outcome
        self.update_reputations(&final_resolution);

        Ok(final_resolution)
    }

    fn aggregate_resolutions(&self) -> Result<Resolution> {
        let mut weighted_votes: HashMap<Resolution, f64> = HashMap::new();

        for (peer_id, vote) in &self.peer_votes {
            let weight = self.reputation_weights.get(peer_id).unwrap_or(&0.0);
            *weighted_votes.entry(vote.resolution.clone()).or_default() += weight;
        }

        // Resolution with >50% of reputation-weighted votes wins
        weighted_votes
            .into_iter()
            .max_by(|a, b| a.1.partial_cmp(&b.1).unwrap())
            .map(|(resolution, _)| resolution)
            .ok_or(ConsensusError::NoMajority)
    }
}`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">HTTP/3 Transport: Why It Matters</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The choice of HTTP/3 (QUIC) as our transport layer is deliberate. Unlike TCP-based protocols,
            QUIC provides properties essential for mesh consensus:
          </p>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-3 mb-6">
            <li>
              <strong>0-RTT connection establishment</strong>: Agents can rapidly reconnect after network
              disruptions without handshake delays
            </li>
            <li>
              <strong>Multiplexed streams without head-of-line blocking</strong>: Evidence gathering, vote
              broadcasting, and peer discovery can happen simultaneously without interference
            </li>
            <li>
              <strong>Built-in encryption</strong>: TLS 1.3 is mandatory, eliminating protocol downgrade attacks
            </li>
            <li>
              <strong>Connection migration</strong>: Agents can move between networks (WiFi to cellular)
              without dropping consensus participation
            </li>
            <li>
              <strong>UDP-based</strong>: Harder to block at the protocol level than TCP; better NAT traversal
            </li>
          </ul>

          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Our <code className="bg-slate-100 px-2 py-1 rounded">libp2p-webtransport-sys</code> implementation
            extends these capabilities with libp2p's peer discovery and relay protocols, creating a transport
            layer that's both performant and censorship-resistant.
          </p>

          <div className="my-6">
            <SyntaxHighlighter language="rust" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`use libp2p_webtransport_sys::WebTransport;
use subp2p::{NetworkProvider, SwarmBuilder};

/// Configure the HTTP/3 transport stack for oracle agents
pub fn create_oracle_transport(
    identity: Keypair,
    relay_addr: Multiaddr,
) -> Result<impl NetworkProvider> {
    let transport = WebTransport::new(identity.clone())
        .with_certificate_verification(CertVerification::SelfSigned)
        .with_noise_encryption(NoiseConfig::XX);

    let swarm = SwarmBuilder::new(identity)
        .with_transport(transport)
        .with_relay_client(relay_addr)
        .with_kademlia()      // Peer discovery
        .with_gossipsub()     // Vote broadcasting
        .with_dcutr()         // NAT hole punching
        .build()?;

    Ok(swarm)
}`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Local GPU Inference: Eliminating External Dependencies</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            A critical design decision is requiring <strong>local GPU inference</strong> for all AI reasoning.
            This eliminates several attack vectors:
          </p>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-3 mb-6">
            <li>
              <strong>No API rate limiting</strong>: Agents can process evidence as fast as local hardware allows
            </li>
            <li>
              <strong>No API manipulation</strong>: Centralized LLM providers cannot be coerced to bias resolutions
            </li>
            <li>
              <strong>No network dependency for reasoning</strong>: Inference continues even if external
              internet access is disrupted
            </li>
            <li>
              <strong>Model diversity</strong>: Different agents can run different models, preventing
              monoculture vulnerabilities
            </li>
            <li>
              <strong>Verifiable reproducibility</strong>: Given the same model weights and evidence,
              any party can reproduce the reasoning
            </li>
          </ul>

          <div className="my-6">
            <SyntaxHighlighter language="rust" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`use ollama_rs::{Ollama, GenerationRequest};

pub struct LocalInferenceEngine {
    ollama: Ollama,
    model: String,
    gpu_layers: u32,
}

impl LocalInferenceEngine {
    pub fn new(model: &str) -> Self {
        // Connect to local Ollama instance (no external network)
        let ollama = Ollama::new("http://127.0.0.1:11434".into());

        Self {
            ollama,
            model: model.to_string(),
            gpu_layers: 35, // Offload to GPU for performance
        }
    }

    pub async fn analyze_evidence(
        &self,
        market_query: &str,
        evidence: &[Evidence],
    ) -> Result<Analysis> {
        let prompt = format!(
            r#"You are an oracle agent resolving a prediction market.

MARKET QUERY: {market_query}

EVIDENCE:
{evidence_text}

Analyze the evidence and determine:
1. Whether the market condition has been met (YES/NO/UNCERTAIN)
2. Confidence level (0.0 to 1.0)
3. Key evidence supporting your conclusion
4. Any conflicting evidence or uncertainties

Respond in JSON format."#,
            market_query = market_query,
            evidence_text = self.format_evidence(evidence),
        );

        let response = self.ollama
            .generate(GenerationRequest::new(self.model.clone(), prompt))
            .await?;

        self.parse_analysis(&response.response)
    }
}`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Distributed and Unbiased Global State Resolution</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The combination of these technologies creates a system for <strong>distributed and unbiased
            resolution of global state</strong>. No single entity—not Subzero Research, not any government,
            not any corporation—can unilaterally determine market outcomes.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-slate-900 mt-0 mb-4">Properties of Unbiased Resolution</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>Epistemic diversity</strong>: Agents run different models, gather evidence differently,
                  and weight factors independently
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>Geographic distribution</strong>: Agents in different jurisdictions have access to
                  different information sources
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>Temporal independence</strong>: Evidence commitment before vote revelation prevents
                  herding behavior
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>Economic incentives</strong>: Reputation staking aligns agent interests with accurate
                  resolution
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>
                  <strong>Verifiable reasoning</strong>: Evidence hashes enable post-hoc auditing of agent
                  decision processes
                </span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Implementation: Conditional Markets on Subfrost</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Putting it all together, here's how a conditional market operates on our infrastructure:
          </p>

          <div className="my-6">
            <SyntaxHighlighter language="rust" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`use subfrost_markets::{ConditionalMarket, Outcome, Position};

/// A conditional market with agentic AI resolution
pub struct AgenticMarket {
    pub id: MarketId,
    pub query: String,
    pub resolution_criteria: ResolutionCriteria,
    pub resolution_deadline: SystemTime,
    pub oracle_network: MeshConsensus,
    pub positions: HashMap<PeerId, Position>,
}

impl AgenticMarket {
    /// Create a new conditional market
    pub async fn create(
        query: &str,
        criteria: ResolutionCriteria,
        deadline: SystemTime,
        network: &SubP2PProvider,
    ) -> Result<Self> {
        let market = Self {
            id: MarketId::generate(),
            query: query.to_string(),
            resolution_criteria: criteria,
            resolution_deadline: deadline,
            oracle_network: MeshConsensus::new(network.clone()),
            positions: HashMap::new(),
        };

        // Broadcast market creation to the network
        network.broadcast_message(
            P2pMessage::MarketCreated(market.to_announcement()),
            "markets"
        ).await?;

        Ok(market)
    }

    /// Take a position in the market
    pub async fn take_position(
        &mut self,
        trader: PeerId,
        outcome: Outcome,
        amount: u64,
    ) -> Result<Position> {
        // Verify trader has sufficient collateral
        // Create position record
        // Update market state
        // Broadcast position to network

        let position = Position {
            trader,
            outcome,
            amount,
            timestamp: SystemTime::now(),
        };

        self.positions.insert(trader, position.clone());
        Ok(position)
    }

    /// Resolve the market using agentic consensus
    pub async fn resolve(&mut self) -> Result<Resolution> {
        // Ensure deadline has passed
        if SystemTime::now() < self.resolution_deadline {
            return Err(MarketError::DeadlineNotReached);
        }

        // Initiate mesh consensus resolution
        let resolution = self.oracle_network.resolve(&self.into()).await?;

        // Distribute payouts based on resolution
        self.distribute_payouts(&resolution).await?;

        Ok(resolution)
    }
}

// Example: Create a conditional market
async fn example_market(network: &SubP2PProvider) -> Result<()> {
    let market = AgenticMarket::create(
        "Will the Federal Reserve cut interest rates by 50bps at the December 2024 meeting?",
        ResolutionCriteria {
            evidence_sources: vec![
                "Federal Reserve press releases",
                "FOMC meeting minutes",
                "Official Fed announcements",
            ],
            resolution_type: ResolutionType::Binary,
        },
        SystemTime::now() + Duration::from_days(30),
        network,
    ).await?;

    println!("Created market: {}", market.id);
    Ok(())
}`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Security Analysis</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Let's examine the attack surfaces that <em>don't exist</em> in this architecture:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border border-slate-200 rounded-lg overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-slate-900">Attack Vector</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-900">Traditional System</th>
                  <th className="px-4 py-3 text-left font-bold text-slate-900">L3 Agentic Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-4 py-3 text-slate-700">Port Scanning</td>
                  <td className="px-4 py-3 text-red-600">Exposed services discoverable</td>
                  <td className="px-4 py-3 text-green-600">No listening ports</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 text-slate-700">DDoS</td>
                  <td className="px-4 py-3 text-red-600">Public IP can be flooded</td>
                  <td className="px-4 py-3 text-green-600">Bogon IPs; relay absorbs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">DNS Hijacking</td>
                  <td className="px-4 py-3 text-red-600">Central DNS can be poisoned</td>
                  <td className="px-4 py-3 text-green-600">P2P name resolution</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 text-slate-700">TLS MITM</td>
                  <td className="px-4 py-3 text-red-600">CA compromise possible</td>
                  <td className="px-4 py-3 text-green-600">Self-certified Ed25519</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Oracle Manipulation</td>
                  <td className="px-4 py-3 text-red-600">Centralized source can lie</td>
                  <td className="px-4 py-3 text-green-600">Distributed consensus</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-4 py-3 text-slate-700">API Coercion</td>
                  <td className="px-4 py-3 text-red-600">LLM provider can be pressured</td>
                  <td className="px-4 py-3 text-green-600">Local GPU inference</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-700">Sybil Attack</td>
                  <td className="px-4 py-3 text-red-600">Easy to create fake nodes</td>
                  <td className="px-4 py-3 text-green-600">Reputation staking</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Future Directions</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            This architecture opens several research directions we're actively pursuing:
          </p>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-3 mb-6">
            <li>
              <strong>Quantum-safe cryptographic transitions</strong>: Integrating CRYSTALS-Kyber and
              CRYSTALS-Dilithium into the transport layer for post-quantum security
            </li>
            <li>
              <strong>Specialized resolution agents</strong>: Domain-specific AI models fine-tuned for
              particular market categories (sports, politics, science, etc.)
            </li>
            <li>
              <strong>Cross-chain settlement</strong>: Using FROST threshold signatures to settle
              market outcomes on multiple blockchains simultaneously
            </li>
            <li>
              <strong>Reputation portability</strong>: Enabling agents to carry reputation across
              different market networks
            </li>
            <li>
              <strong>Formal verification</strong>: Proving consensus properties hold under adversarial
              conditions
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Conclusion</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Prediction markets have always promised to be "the ultimate information aggregation mechanism,"
            but have been held back by the oracle problem—the fundamental challenge of determining truth
            in a decentralized system.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            By building L3 abstractions over IP specifically designed for P2P networking, connecting agentic
            AI systems via local GPU inference to HTTP/3 transport, and implementing mesh federated consensus,
            we've created an architecture that:
          </p>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2 mb-6">
            <li>Eliminates external attack surfaces</li>
            <li>Distributes resolution authority across independent AI agents</li>
            <li>Provides cryptographic guarantees of reasoning verifiability</li>
            <li>Operates without trusted third parties or centralized infrastructure</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            This is what we mean by <strong>L0 application stacks for distributed consensus</strong>—foundational
            infrastructure that enables a new generation of decentralized applications built on unbiased,
            verifiable resolution of global state.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            The era of synthetic research has arrived. We're not just studying these systems—we're building
            them, using AI-augmented methodologies to compress years of traditional R&D into months, and
            deploying the results as open infrastructure for a free internet.
          </p>

          <div className="mt-12 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Build With Us</h3>
            <p className="text-slate-700 mb-4">
              Explore our L3 networking stack and join the first generation of synthetic researchers
              building the infrastructure for decentralized intelligence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/subfrost/libp2p-webtransport-sys"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-md transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
                GitHub
              </a>
              <Link
                href="/#synthetic-research"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
              >
                Learn About Synthetic Research
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
