import React, { useState } from 'react';
import { ScreenType, ConnectedModule } from '../types';
import { CONNECTED_MODULES, INTEGRATION_CONNECTORS } from '../data/mockData';
import {
  Network,
  Cpu,
  Layers,
  Database,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Workflow,
  Server,
  Activity,
  GitBranch,
  Terminal,
  Zap,
  ArrowUpRight,
  Clock,
  Settings
} from 'lucide-react';

interface ArchitectureViewProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenDemo: () => void;
}

export const ArchitectureView: React.FC<ArchitectureViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'planning' | 'operations' | 'intelligence'>('all');
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const filteredModules = CONNECTED_MODULES.filter(
    (m) => activeCategory === 'all' || m.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e]">
      {/* Top Banner / System Stack Tag */}
      <div className="bg-[#00120a] border-b border-[#0a291e] px-4 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#adcebd]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-white font-bold">
              <span className="w-2 h-2 rounded-full bg-[#6cf8bb] animate-pulse"></span>
              AUTONOMOUS ENTERPRISE INFRASTRUCTURE :: STACK v4.2
            </span>
            <span className="text-[#0a291e]">|</span>
            <span className="text-zinc-400">Status: <strong className="text-[#6cf8bb]">HEALTHY (2,841 Nodes)</strong></span>
            <span className="text-[#0a291e]">|</span>
            <span className="text-zinc-400">Engine: <strong className="text-white">BioKinetic MILP Solver</strong></span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-zinc-400">Stream: 412,980 events/sec</span>
            <span className="text-[#0a291e]">|</span>
            <span className="text-emerald-400 font-bold">Zero Data Drift</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#eaedff] via-[#faf8ff] to-[#faf8ff] border-b border-[#dae2fd] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6cf8bb]/20 border border-[#006c49]/30 text-[#005236] text-xs font-mono font-bold tracking-wide">
            <Network className="w-3.5 h-3.5 text-[#006c49]" />
            DECOUPLED NEURAL ARCHITECTURE
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#00120a] tracking-tight font-['Plus_Jakarta_Sans'] max-w-4xl mx-auto leading-tight">
            The AI Operating System for Seed Supply Chains
          </h1>

          <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto font-normal leading-relaxed">
            A high-performance computing fabric that continuously ingests multi-modal biological, meteorological, and operational telemetry to orchestrate production, conditioning, and replenishment across continents.
          </p>

          {/* Metric Bar */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <span className="text-3xl font-extrabold text-[#006c49] font-mono">14.8M+</span>
              <span className="block text-xs font-semibold text-zinc-800 mt-1">Acre-Years Modeled</span>
              <span className="text-[11px] text-zinc-500">Validated across 42 commercial seed crops</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <span className="text-3xl font-extrabold text-[#006c49] font-mono">&lt; 42ms</span>
              <span className="block text-xs font-semibold text-zinc-800 mt-1">Inference Latency</span>
              <span className="text-[11px] text-zinc-500">Continuous multi-echelon linear optimization</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <span className="text-3xl font-extrabold text-[#006c49] font-mono">99.99%</span>
              <span className="block text-xs font-semibold text-zinc-800 mt-1">SLA Determinism</span>
              <span className="text-[11px] text-zinc-500">Zero non-deterministic hallucinations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Topology Diagram: Seed Innovation Neural Core v4.2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#005236] text-xs font-mono font-semibold mb-2">
            TOPOLOGY SCHEMATIC
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00120a] font-['Plus_Jakarta_Sans']">
            Seed Innovation Neural Core v4.2 Topology
          </h2>
          <p className="text-zinc-600 text-sm mt-1">
            Data flows from diverse physical edge sensors through the mathematical optimization core into automated ERP execution.
          </p>
        </div>

        {/* Large Blueprint Card */}
        <div className="bg-[#00120a] rounded-3xl border border-[#0a291e] shadow-2xl p-6 sm:p-10 text-white overflow-hidden relative">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a291e_1px,transparent_1px),linear-gradient(to_bottom,#0a291e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Stage 1: Ingestion Pipelines (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#0a291e]">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#adcebd] flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-[#6cf8bb]" />
                  1. Multi-Modal Ingest
                </span>
                <span className="text-[10px] font-mono text-zinc-500">6 STREAMS</span>
              </div>

              <div className="space-y-2">
                {[
                  { name: 'Field Genetics & Pedigree', meta: 'SeedLIMS & Breeder Records', icon: '🧬' },
                  { name: 'Weather & Climate Grids', meta: 'ECMWF & 1km Hyperlocal Grids', icon: '🌦️' },
                  { name: 'Historical Orders & Sowing', meta: 'ERP Sales & Dealer Shipments', icon: '📊' },
                  { name: 'Warehouse IoT Sensors', meta: 'Temperature, RH, Dewpoint (15m)', icon: '🌡️' },
                  { name: 'Plant SCADA Telemetry', meta: 'Conditioning, Dryers & Sorters', icon: '🏭' },
                  { name: 'Germination & Purity Labs', meta: 'ISTA & Official Seed Lab Tests', icon: '🧪' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveNode(`ingest-${idx}`)}
                    onMouseLeave={() => setActiveNode(null)}
                    className={`p-2.5 rounded-xl border transition-all text-xs cursor-pointer ${
                      activeNode === `ingest-${idx}`
                        ? 'bg-[#0a291e] border-[#6cf8bb] shadow-sm'
                        : 'bg-[#00170d] border-[#0a291e] hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-zinc-100">{item.name}</div>
                        <div className="text-[10px] font-mono text-zinc-400">{item.meta}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stage 2: Central Neural Core & Optimization Engines (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0a291e] to-[#00120a] border border-[#006c49] shadow-xl relative">
                <div className="flex items-center justify-between pb-3 border-b border-[#006c49]/40">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-[#002113] border border-[#6cf8bb]/40 flex items-center justify-center">
                      <Cpu className="w-3.5 h-3.5 text-[#6cf8bb]" />
                    </div>
                    <span className="text-sm font-bold font-mono text-white">
                      Seed Innovation Neural Core
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#6cf8bb]/20 text-[#6cf8bb] font-bold">
                    CONTINUOUS OPTIMIZATION
                  </span>
                </div>

                <div className="py-4 space-y-4">
                  {/* Visual solver flow cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-[#00170d] border border-emerald-900/60 space-y-1">
                      <span className="font-mono text-[11px] text-[#6cf8bb] font-bold block">
                        Bayesian Demand Formulation
                      </span>
                      <p className="text-[11px] text-zinc-400">
                        Synthesizes farmer acreage intent, commodity futures, and precipitation anomalies.
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-[#00170d] border border-emerald-900/60 space-y-1">
                      <span className="font-mono text-[11px] text-[#6cf8bb] font-bold block">
                        Simplex & MILP Solvers
                      </span>
                      <p className="text-[11px] text-zinc-400">
                        Solves seed production isolation distances & detasseling schedules in seconds.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#00170d] border border-emerald-900/60 space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-[#6cf8bb] font-bold">
                        Multi-Echelon MEIO Dynamic Safety Stocks
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400">Harrington Biological Decay Enforced</span>
                    </div>
                    <p className="text-[11px] text-zinc-400">
                      Calculates non-linear seed viability loss curves across temperature and relative humidity gradients to dynamically position stock nearest demand windows.
                    </p>
                  </div>

                  {/* Convergence curve display */}
                  <div className="p-3 rounded-xl bg-[#000d07] border border-[#0a291e] space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
                      <span>SOLVER CONVERGENCE</span>
                      <span className="text-[#6cf8bb]">Residual: 1.04e-6 (Optimized)</span>
                    </div>
                    <div className="h-10 w-full flex items-end gap-1 pt-1">
                      {[40, 65, 80, 55, 90, 75, 45, 95, 30, 20, 15, 10, 8, 5, 4, 3, 2, 1].map((val, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-emerald-800 to-[#6cf8bb] rounded-t-xs"
                          style={{ height: `${val}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#006c49]/30 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>Throughput: 2,841 nodes</span>
                  <span className="text-[#6cf8bb]">Deterministic Zero-Drift Guarantee</span>
                </div>
              </div>
            </div>

            {/* Stage 3: Autonomous Dispatch & Execution (3 cols) */}
            <div className="lg:col-span-3 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#0a291e]">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#adcebd] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#6cf8bb]" />
                  3. Autonomous Dispatch
                </span>
                <span className="text-[10px] font-mono text-zinc-500">ACTIONS</span>
              </div>

              <div className="space-y-2">
                {[
                  { name: 'Replenishment Orders', meta: 'Auto SAP STO / PO Creation', icon: '📦' },
                  { name: 'Conditioning Batches', meta: 'Automated Line Re-sequencing', icon: '⚙️' },
                  { name: 'Logistics Dispatch', meta: 'Reefer Route Optimization', icon: '🚛' },
                  { name: 'Mitigation Alerts', meta: 'Immediate Lab Re-test Tickets', icon: '🚨' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#00170d] border border-[#0a291e] hover:border-[#6cf8bb]/40 text-xs transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-zinc-100">{item.name}</div>
                        <div className="text-[10px] font-mono text-[#6cf8bb]">{item.meta}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('copilot')}
                className="w-full mt-2 py-2.5 px-3 rounded-xl bg-[#0a291e] hover:bg-[#006c49] text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors border border-[#6cf8bb]/30"
              >
                <span>Test in AI Copilot</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6cf8bb]" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* The 8 Connected Modules Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#dae2fd]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#005236] text-xs font-mono font-semibold mb-2">
              COMPREHENSIVE ECOSYSTEM
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00120a] font-['Plus_Jakarta_Sans']">
              The Connected Seed Enterprise Modules
            </h2>
            <p className="text-zinc-600 text-sm mt-1">
              Purpose-built modules that eliminate departmental silos across genetics, farm production, processing, and distribution.
            </p>
          </div>

          {/* Matrix Filter Pills */}
          <div className="flex items-center gap-1.5 bg-zinc-100 p-1 rounded-xl">
            {(['all', 'planning', 'operations', 'intelligence'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-zinc-900 shadow-xs font-bold'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredModules.map((mod) => (
            <div
              key={mod.id}
              className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-emerald-300 hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#006c49] bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                    MODULE {mod.number}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase">
                    {mod.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans'] group-hover:text-[#006c49] transition-colors mb-2">
                  {mod.title}
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {mod.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <span className="text-lg font-extrabold font-mono text-zinc-900">{mod.metric}</span>
                  <span className="block text-[10px] text-zinc-400">{mod.metricLabel}</span>
                </div>
                <button
                  onClick={() => onNavigate('platform')}
                  className="w-8 h-8 rounded-full bg-zinc-50 group-hover:bg-[#6cf8bb] flex items-center justify-center text-zinc-500 group-hover:text-[#002113] transition-all"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-Time Data Fabric & Enterprise Connectors */}
      <div className="bg-[#00120a] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-[#0a291e]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6cf8bb]/10 border border-[#6cf8bb]/20 text-[#6cf8bb] text-xs font-mono font-semibold">
              CERTIFIED ENTERPRISE CONNECTORS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans']">
              Real-Time Data Fabric & Pre-Built ERP Connectors
            </h2>
            <p className="text-zinc-400 text-sm">
              Deploy without rewriting your existing technology investments. Seed Innovation AI connects natively to SAP, Oracle, Microsoft, and specialized SeedLIMS platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {INTEGRATION_CONNECTORS.map((connector, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#00170d] border border-emerald-900/40 hover:border-emerald-500/40 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    {connector.certification}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">{connector.latency}</span>
                </div>

                <h3 className="text-base font-bold text-white font-['Plus_Jakarta_Sans']">
                  {connector.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {connector.description}
                </p>

                <div className="pt-2 border-t border-zinc-800 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
                  <span>Protocol:</span>
                  <span className="text-zinc-300">{connector.protocol}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4-Tier System Architecture */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#005236] text-xs font-mono font-semibold mb-2">
            STACK BREAKDOWN
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00120a] font-['Plus_Jakarta_Sans']">
            The 4-Tier System Architecture
          </h2>
          <p className="text-zinc-600 text-sm mt-1">
            Layered isolation for enterprise data privacy, high-throughput modeling, and instantaneous user interaction.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              tier: 'TIER 1',
              title: 'Executive & Copilot Layer',
              sub: 'Natural Language Reasoning Terminal • Spatial Supply Mesh • What-If Scenario Sandbox',
              tech: 'React 19, Tailwind CSS, WebSockets, Generative Agronomic Agents'
            },
            {
              tier: 'TIER 2',
              title: 'Orchestration & Workflow Engine',
              sub: 'Event Sourcing Bus • Policy & Regulatory Enforcer • Automated ERP Transaction Dispatcher',
              tech: 'Temporal.io, Apache Kafka, Distributed Saga State Machines, REST/gRPC'
            },
            {
              tier: 'TIER 3',
              title: 'Neural Intelligence & Solver Layer',
              sub: 'Bayesian Demand Forecaster • Non-Linear Biological Viability Engine • MILP Optimizer',
              tech: 'Seed Innovation BioReason Models, PyTorch, High-Performance C++ Simplex Solvers'
            },
            {
              tier: 'TIER 4',
              title: 'Data Ingestion & Security Fabric',
              sub: 'IoT Sensor Mesh • Bidirectional ERP Sync • Zero-Knowledge Germplasm Vault',
              tech: 'AES-256 GCM, TLS 1.3, SAP RFC Connector, OAuth 2.0 / SAML 2.0 SSO'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-[#006c49] font-mono text-xs font-bold border border-emerald-100">
                  {item.tier}
                </span>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-0.5">{item.sub}</p>
                </div>
              </div>
              <div className="md:text-right">
                <span className="text-[10px] font-mono text-zinc-400 uppercase block">Engine / Stack</span>
                <span className="text-xs font-mono text-zinc-700 font-medium">{item.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engineered for Mission-Critical Reliability */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-[#00120a] to-[#0a291e] rounded-3xl p-8 sm:p-12 border border-[#006c49]/40 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-[#6cf8bb] mb-2 mx-auto md:mx-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-['Plus_Jakarta_Sans']">99.99% Uptime SLA</h3>
              <p className="text-xs text-zinc-400">
                Multi-region redundant active-active deployments across AWS and Azure cloud zones with automated failover in &lt;1.2 seconds.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-[#6cf8bb] mb-2 mx-auto md:mx-0">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-['Plus_Jakarta_Sans']">Zero Germplasm Retention</h3>
              <p className="text-xs text-zinc-400">
                Your proprietary seed parental line genetics and breeding cross data remain strictly your property. We never train public foundation models on client assets.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-[#6cf8bb] mb-2 mx-auto md:mx-0">
                <Workflow className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-['Plus_Jakarta_Sans']">Deterministic Auditing</h3>
              <p className="text-xs text-zinc-400">
                Every optimization output generates a cryptographic SHA-256 audit proof ensuring compliance with ISO-9001 and statutory seed regulatory rules.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-zinc-400">
              Ready to modernize your seed enterprise infrastructure?
            </span>
            <button
              onClick={onOpenDemo}
              className="px-6 py-3 bg-[#6cf8bb] hover:bg-[#4edea3] text-[#002113] font-extrabold rounded-xl text-xs transition-all shadow-md"
            >
              Request Technical Architecture Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
