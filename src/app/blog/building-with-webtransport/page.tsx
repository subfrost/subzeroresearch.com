"use client"

import Link from "next/link"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function BuildingWithWebTransport() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Building with WebTransport</h1>
          <p className="text-xl text-slate-300">A comprehensive guide to implementing modern P2P networking</p>
          <div className="mt-4 text-slate-400">November 23, 2024 · 15 min read</div>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-3xl font-bold text-slate-900 mt-8 mb-4">Introduction</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            WebTransport represents a significant leap forward in web networking capabilities. Built on top of QUIC (Quick UDP Internet Connections), 
            WebTransport provides a modern, multiplexed transport protocol that overcomes many limitations of traditional HTTP-based communications.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">What is WebTransport?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            WebTransport is a web API that uses the HTTP/3 protocol to enable low-latency, bidirectional communication between a client and server. 
            Unlike WebSockets, which operate over TCP, WebTransport leverages QUIC's UDP-based protocol to provide:
          </p>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2 mb-6">
            <li><strong>Multiplexing without head-of-line blocking</strong>: Multiple streams can transfer data independently</li>
            <li><strong>Built-in encryption</strong>: All connections are encrypted by default using TLS 1.3</li>
            <li><strong>Reduced latency</strong>: 0-RTT connection establishment for repeated connections</li>
            <li><strong>Flexible delivery modes</strong>: Support for both reliable and unreliable data transmission</li>
            <li><strong>Better network resilience</strong>: Connection migration across network changes</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Basic WebTransport Client Implementation</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Let's start with a basic client implementation in JavaScript:
          </p>

          <div className="my-6">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`// Establish a WebTransport connection
async function connectWebTransport(url) {
  try {
    const transport = new WebTransport(url);
    
    // Wait for connection to be established
    await transport.ready;
    console.log('WebTransport connection established');
    
    // Create a bidirectional stream
    const stream = await transport.createBidirectionalStream();
    const writer = stream.writable.getWriter();
    const reader = stream.readable.getReader();
    
    // Send data
    const encoder = new TextEncoder();
    await writer.write(encoder.encode('Hello from client!'));
    
    // Read response
    const { value, done } = await reader.read();
    if (!done) {
      const decoder = new TextDecoder();
      console.log('Received:', decoder.decode(value));
    }
    
    // Clean up
    writer.releaseLock();
    reader.releaseLock();
    await stream.writable.close();
    
    return transport;
  } catch (error) {
    console.error('WebTransport connection failed:', error);
    throw error;
  }
}

// Usage
const transport = await connectWebTransport('https://example.com:4433');`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Server Implementation with Rust</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            For production systems, Rust provides excellent performance and safety. Here's how to implement a WebTransport server using 
            our <code className="bg-slate-100 px-2 py-1 rounded">libp2p-webtransport-sys</code> library:
          </p>

          <div className="my-6">
            <SyntaxHighlighter language="rust" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`use libp2p::{
    core::upgrade,
    identity,
    swarm::{SwarmBuilder, SwarmEvent},
    Multiaddr, PeerId, Transport,
};
use libp2p_webtransport_sys::WebTransport;
use std::error::Error;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    // Generate identity keypair
    let local_key = identity::Keypair::generate_ed25519();
    let local_peer_id = PeerId::from(local_key.public());
    
    println!("Local peer id: {}", local_peer_id);
    
    // Create a WebTransport transport
    let transport = WebTransport::new(local_key.clone());
    
    // Set up swarm
    let mut swarm = SwarmBuilder::with_tokio_executor(
        transport,
        YourBehaviour::new(),
        local_peer_id,
    ).build();
    
    // Listen on WebTransport address
    let listen_addr: Multiaddr = 
        "/ip4/0.0.0.0/udp/4433/quic-v1/webtransport"
        .parse()?;
    
    swarm.listen_on(listen_addr)?;
    
    // Event loop
    loop {
        match swarm.select_next_some().await {
            SwarmEvent::NewListenAddr { address, .. } => {
                println!("Listening on {}", address);
            }
            SwarmEvent::ConnectionEstablished { peer_id, .. } => {
                println!("Connected to peer: {}", peer_id);
            }
            SwarmEvent::Behaviour(event) => {
                // Handle custom behavior events
                handle_behaviour_event(event);
            }
            _ => {}
        }
    }
}

fn handle_behaviour_event(event: YourBehaviourEvent) {
    // Process incoming messages, manage connections, etc.
    match event {
        YourBehaviourEvent::MessageReceived { peer, data } => {
            println!("Received from {}: {:?}", peer, data);
        }
        _ => {}
    }
}`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Unidirectional vs Bidirectional Streams</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            WebTransport offers two types of streams, each optimized for different use cases:
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Bidirectional Streams</h3>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Best for request-response patterns where both parties need to send data:
          </p>

          <div className="my-6">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`// Create bidirectional stream for RPC-style communication
async function rpcCall(transport, method, params) {
  const stream = await transport.createBidirectionalStream();
  const writer = stream.writable.getWriter();
  const reader = stream.readable.getReader();
  
  // Send request
  const request = JSON.stringify({ method, params });
  await writer.write(new TextEncoder().encode(request));
  await writer.close();
  
  // Read response
  const chunks = [];
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    chunks.push(value);
  }
  
  const responseData = new Uint8Array(
    chunks.reduce((acc, chunk) => acc + chunk.length, 0)
  );
  let offset = 0;
  for (const chunk of chunks) {
    responseData.set(chunk, offset);
    offset += chunk.length;
  }
  
  return JSON.parse(new TextDecoder().decode(responseData));
}`}
            </SyntaxHighlighter>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-3">Unidirectional Streams</h3>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Ideal for one-way data transfer like streaming media or telemetry:
          </p>

          <div className="my-6">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`// Stream sensor data to server
async function streamTelemetry(transport, dataSource) {
  const stream = await transport.createUnidirectionalStream();
  const writer = stream.writable.getWriter();
  
  try {
    for await (const dataPoint of dataSource) {
      const serialized = JSON.stringify({
        timestamp: Date.now(),
        ...dataPoint
      });
      await writer.write(new TextEncoder().encode(serialized + '\\n'));
    }
  } finally {
    await writer.close();
  }
}`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Datagrams for Unreliable Transmission</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            For applications that can tolerate packet loss (like real-time gaming or video conferencing), 
            WebTransport supports unreliable datagrams:
          </p>

          <div className="my-6">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`// Send game state updates via datagrams
class GameStateSync {
  constructor(transport) {
    this.transport = transport;
    this.writer = transport.datagrams.writable.getWriter();
    this.reader = transport.datagrams.readable.getReader();
    this.startReceiving();
  }
  
  async sendUpdate(gameState) {
    const data = new Uint8Array(
      this.serializeGameState(gameState)
    );
    try {
      await this.writer.write(data);
    } catch (err) {
      // Datagram may be dropped, that's okay
      console.debug('Datagram send failed:', err);
    }
  }
  
  async startReceiving() {
    while (true) {
      const { value, done } = await this.reader.read();
      if (done) break;
      
      const gameState = this.deserializeGameState(value);
      this.onGameStateUpdate(gameState);
    }
  }
  
  serializeGameState(state) {
    // Efficient binary serialization
    const buffer = new ArrayBuffer(64);
    const view = new DataView(buffer);
    view.setFloat32(0, state.position.x, true);
    view.setFloat32(4, state.position.y, true);
    view.setFloat32(8, state.velocity.x, true);
    view.setFloat32(12, state.velocity.y, true);
    view.setUint32(16, state.timestamp, true);
    return buffer;
  }
  
  deserializeGameState(buffer) {
    const view = new DataView(buffer.buffer);
    return {
      position: {
        x: view.getFloat32(0, true),
        y: view.getFloat32(4, true)
      },
      velocity: {
        x: view.getFloat32(8, true),
        y: view.getFloat32(12, true)
      },
      timestamp: view.getUint32(16, true)
    };
  }
  
  onGameStateUpdate(state) {
    // Handle received game state
    console.log('Game state update:', state);
  }
}`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Connection Management and Error Handling</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Proper connection management is crucial for production applications:
          </p>

          <div className="my-6">
            <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={{ borderRadius: '0.5rem', padding: '1.5rem' }}>
{`class WebTransportConnection {
  constructor(url) {
    this.url = url;
    this.transport = null;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 5;
    this.reconnectDelay = 1000;
  }
  
  async connect() {
    try {
      this.transport = new WebTransport(this.url);
      
      // Wait for connection
      await this.transport.ready;
      
      this.reconnectAttempts = 0;
      console.log('Connected successfully');
      
      // Handle connection close
      this.transport.closed.then(() => {
        console.log('Connection closed gracefully');
        this.handleDisconnect();
      }).catch((error) => {
        console.error('Connection closed with error:', error);
        this.handleDisconnect();
      });
      
      return this.transport;
    } catch (error) {
      console.error('Connection failed:', error);
      throw error;
    }
  }
  
  async handleDisconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      const delay = this.reconnectDelay * Math.pow(2, this.reconnectAttempts - 1);
      
      console.log(\`Reconnecting in \${delay}ms (attempt \${this.reconnectAttempts})\`);
      
      await new Promise(resolve => setTimeout(resolve, delay));
      return this.connect();
    } else {
      console.error('Max reconnection attempts reached');
      throw new Error('Failed to reconnect');
    }
  }
  
  async close() {
    if (this.transport) {
      await this.transport.close();
      this.transport = null;
    }
  }
}`}
            </SyntaxHighlighter>
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Best Practices</h2>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-3 mb-6">
            <li>
              <strong>Use streams for reliable data</strong>: Employ bidirectional or unidirectional streams 
              when message delivery must be guaranteed.
            </li>
            <li>
              <strong>Use datagrams for time-sensitive data</strong>: For real-time applications where 
              the latest data is more important than every data point.
            </li>
            <li>
              <strong>Implement proper backpressure</strong>: Monitor stream write buffer sizes to avoid 
              overwhelming the connection.
            </li>
            <li>
              <strong>Handle network changes gracefully</strong>: WebTransport supports connection migration, 
              but your application should handle temporary disconnections.
            </li>
            <li>
              <strong>Use TLS 1.3</strong>: Ensure your server certificate is valid and properly configured 
              for WebTransport.
            </li>
            <li>
              <strong>Monitor connection health</strong>: Implement heartbeat mechanisms to detect zombie connections.
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Browser Compatibility</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            WebTransport support is growing but not yet universal:
          </p>
          <ul className="list-disc pl-6 text-lg text-slate-700 space-y-2 mb-6">
            <li>Chrome/Edge: ✅ Full support (v97+)</li>
            <li>Firefox: 🔄 In development (behind flag)</li>
            <li>Safari: 🔄 Under consideration</li>
          </ul>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            For production use, implement fallback mechanisms to WebSockets or HTTP/2 for unsupported browsers.
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-4">Conclusion</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            WebTransport represents the future of web networking, offering performance and flexibility that 
            surpasses previous technologies. While browser support is still maturing, early adoption positions 
            your applications to take advantage of this powerful protocol. At Subzero Research, we're actively 
            contributing to the ecosystem through our work on libp2p-webtransport-sys and helping organizations 
            implement WebTransport in production systems.
          </p>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Get Started with Our Tools</h3>
            <p className="text-slate-700 mb-4">
              Explore our open-source WebTransport implementation and contribute to the future of P2P networking.
            </p>
            <a
              href="https://github.com/subfrost/libp2p-webtransport-sys"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
            >
              View on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </main>
  )
}
