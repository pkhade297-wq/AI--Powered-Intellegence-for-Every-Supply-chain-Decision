import React, { useState } from 'react';
import { ScreenType } from '../types';
import { CONNECTED_MODULES, COMPLEXITY_CHIPS, ELENA_VANCE_AVATAR, CASE_STUDY_IMAGES } from '../data/mockData';
import {
  Sparkles,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Layers,
  Database,
  Cpu,
  BarChart3,
  GitBranch,
  ArrowUpRight,
  AlertTriangle,
  Play,
  Send,
  Workflow,
  Check,
  Zap,
  Globe,
  Lock,
  ChevronRight,
  RotateCw
} from 'lucide-react';

interface PlatformViewProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenDemo: () => void;
  onOpenSignIn: () => void;
}

export const PlatformView: React.FC<PlatformViewProps> = ({
  onNavigate,
  onOpenDemo,
  onOpenSignIn,
}) => {
  // Scenario state for AI Demand Forecasting chart
  const [demandScenario, setDemandScenario] = useState<'baseline' | 'monsoon_delay' | 'heatwave'>('baseline');
  
  // Inventory action state
  const [transferExecuted, setTransferExecuted] = useState(false);
  const [selectedModuleFilter, setSelectedModuleFilter] = useState<'all' | 'planning' | 'operations' | 'intelligence'>('all');

  // Copilot teaser state
  const [teaserPrompt, setTeaserPrompt] = useState('Analyse Lot #9281 vigor degradation in Hyderabad Central');
  const [teaserResponse, setTeaserResponse] = useState<string | null>(null);
  const [isTeaserThinking, setIsTeaserThinking] = useState(false);

  const handleRunTeaser = (promptText: string) => {
    setTeaserPrompt(promptText);
    setIsTeaserThinking(true);
    setTeaserResponse(null);
    setTimeout(() => {
      setIsTeaserThinking(false);
      setTeaserResponse(
        `Neural Core Diagnosis: Detected microclimate RH spike (+16.8%) in Depot Bay C-04. Recommend immediate transfer of 1,200 MT to Nizamabad Controlled Climate Silo (18°C, 45% RH) to preserve ₹48.6 Lakh working capital.`
      );
    }, 500);
  };

  const filteredModules = CONNECTED_MODULES.filter(
    (m) => selectedModuleFilter === 'all' || m.category === selectedModuleFilter
  );

  return (
    <div className="space-y-0 text-[#131b2e]">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eaedff]/60 via-[#faf8ff] to-[#faf8ff] pt-12 pb-20 border-b border-[#dae2fd]">
        {/* Glow ambient decorations */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-tr from-[#6cf8bb]/15 to-[#5784ff]/10 blur-3xl -z-10 pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6cf8bb]/20 border border-[#006c49]/30 text-[#005236] text-xs font-mono font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#006c49]" />
              AI-POWERED SEED SUPPLY CHAIN INTELLIGENCE
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#00120a] tracking-tight font-['Plus_Jakarta_Sans'] leading-[1.12]">
              AI-Powered Intelligence for Every{' '}
              <span className="text-[#006c49] underline decoration-[#6cf8bb] decoration-wavy decoration-2">
                Seed Supply Chain
              </span>{' '}
              Decision
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
              Transform biological variability into deterministic supply chain performance. Synchronize multi-season breeding, contract grower production, conditioning plants, and regional distribution with autonomous precision.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#006c49] hover:bg-[#005236] text-white font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-emerald-900/20 flex items-center justify-center gap-2"
              >
                <span>Schedule Enterprise Demo</span>
                <ArrowRight className="w-4 h-4 text-[#6cf8bb]" />
              </button>

              <button
                onClick={() => onNavigate('copilot')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-zinc-50 text-zinc-900 font-bold rounded-xl text-sm border border-zinc-300 transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Activity className="w-4 h-4 text-[#006c49]" />
                <span>Launch AI Copilot</span>
                <span className="text-[10px] font-mono bg-emerald-100 text-[#005236] px-1.5 py-0.5 rounded">
                  Live
                </span>
              </button>

              <button
                onClick={() => onNavigate('architecture')}
                className="w-full sm:w-auto px-5 py-3.5 text-zinc-600 hover:text-black font-semibold text-sm transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Stack v4.2 Topology</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Live Lineage Telemetry Visualizer Card */}
            <div className="pt-8">
              <div className="bg-[#00120a] rounded-2xl border border-[#0a291e] shadow-2xl p-4 sm:p-6 text-white text-left max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-[#0a291e] gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#6cf8bb] animate-ping" />
                    <span className="text-xs font-mono font-bold text-white tracking-wide">
                      LIVE SEED LINEAGE: HYBRID CORN LOT #HM-9082
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                    <span>Region: <strong>Telangana Central</strong></span>
                    <span>•</span>
                    <span className="text-emerald-400 font-bold">Harrington Model: Active</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[#00170d] border border-emerald-900/40">
                    <span className="text-[10px] text-zinc-400 uppercase block">Germination Rate</span>
                    <span className="text-lg font-bold text-white">94.2%</span>
                    <span className="text-[10px] text-emerald-400 block font-sans">Statutory Min: 85%</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#00170d] border border-emerald-900/40">
                    <span className="text-[10px] text-zinc-400 uppercase block">Vigor Index</span>
                    <span className="text-lg font-bold text-white">91.8%</span>
                    <span className="text-[10px] text-zinc-400 block font-sans">Accelerated Aging Test</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#00170d] border border-emerald-900/40">
                    <span className="text-[10px] text-zinc-400 uppercase block">Moisture Content</span>
                    <span className="text-lg font-bold text-[#6cf8bb]">10.4%</span>
                    <span className="text-[10px] text-emerald-400 block font-sans">Optimal (&lt;11.5%)</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#00170d] border border-emerald-900/40">
                    <span className="text-[10px] text-zinc-400 uppercase block">Safe Storage Horizon</span>
                    <span className="text-lg font-bold text-white">142 Days</span>
                    <span className="text-[10px] text-[#6cf8bb] block font-sans">Next Sowing: In 88 Days</span>
                  </div>
                </div>

                {/* Micro step pipeline */}
                <div className="pt-2 border-t border-[#0a291e] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Telemetry Mesh Synchronized
                  </span>
                  <button
                    onClick={() => onNavigate('copilot')}
                    className="hover:text-white text-[#6cf8bb] flex items-center gap-1"
                  >
                    Evaluate in Neural Copilot <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Metric Micro-Strip */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-zinc-200 text-center shadow-xs">
                <span className="text-2xl font-black text-[#006c49] font-mono">14.8M+</span>
                <span className="block text-[11px] text-zinc-600 font-medium">Acre-Years Modeled</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-zinc-200 text-center shadow-xs">
                <span className="text-2xl font-black text-[#006c49] font-mono">42ms</span>
                <span className="block text-[11px] text-zinc-600 font-medium">Inference Latency</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-zinc-200 text-center shadow-xs">
                <span className="text-2xl font-black text-[#006c49] font-mono">₹12.4 Cr</span>
                <span className="block text-[11px] text-zinc-600 font-medium">Capital Released / Fleet</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/80 backdrop-blur-sm border border-zinc-200 text-center shadow-xs">
                <span className="text-2xl font-black text-[#006c49] font-mono">99.4%</span>
                <span className="block text-[11px] text-zinc-600 font-medium">User Adoption Rate</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MACRO COMPLEXITY ANALYSIS & 10 CHALLENGE CHIPS */}
      <section className="py-16 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#006c49] text-xs font-mono font-semibold">
              AGRONOMIC COMPLEXITY SOLVED
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00120a] font-['Plus_Jakarta_Sans']">
              Why Seed Supply Chains Break Generic ERP Systems
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Industrial supply chain software assumes manufactured parts that never degrade. Seeds are living biological organisms with non-linear shelf life and strict seasonal sowing windows.
            </p>
          </div>

          {/* 10 Complexity Chips Grid */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto mb-12">
            {COMPLEXITY_CHIPS.map((chip, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-700 hover:border-[#006c49] hover:bg-emerald-50/60 transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Traditional vs SeedPulse AI Comparison Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Traditional */}
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-500">
                  Legacy ERP & Static Spreadsheets
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200 text-zinc-700">FRAGILE</span>
              </div>
              <ul className="space-y-3 text-xs text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Static safety stock buffers that ignore live relative humidity and moisture logs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Demand forecasts based solely on historical sales, blind to delayed monsoon patterns.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>High carryover write-downs when season closes without proactive re-routing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Manual contract grower isolation planning prone to genetic contamination.</span>
                </li>
              </ul>
            </div>

            {/* SeedPulse AI */}
            <div className="p-6 rounded-2xl bg-[#00120a] border border-[#006c49] text-white shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#0a291e]">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#6cf8bb]">
                  SeedPulse AI Synchronized Core
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-[#6cf8bb] font-bold">
                  AUTONOMOUS
                </span>
              </div>
              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#6cf8bb] flex-shrink-0" />
                  <span>Dynamic MEIO safety stocks mathematically weighted by biological Harrington viability decay.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#6cf8bb] flex-shrink-0" />
                  <span>Bayesian forecasting continuously ingesting ECMWF 30-day precipitation anomaly data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#6cf8bb] flex-shrink-0" />
                  <span>Pre-emptive liquidation and re-allocation algorithms unlocking ₹12.4 Cr per season.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#6cf8bb] flex-shrink-0" />
                  <span>Automated GIS isolation calculation protecting hybrid genetic parent purity.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE 9 CORE MODULES ECOSYSTEM */}
      <section className="py-16 bg-[#faf8ff] border-b border-[#dae2fd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#005236] text-xs font-mono font-semibold mb-2">
                MODULAR ARCHITECTURE
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00120a] font-['Plus_Jakarta_Sans']">
                The Intelligent Seed Supply Chain Modules
              </h2>
              <p className="text-zinc-600 text-sm mt-1">
                Deploy individually or as an unified autonomous platform across your commercial fleet.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-1.5 bg-zinc-200/70 p-1 rounded-xl">
              {(['all', 'planning', 'operations', 'intelligence'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedModuleFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${
                    selectedModuleFilter === cat
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
                className="bg-white rounded-2xl p-6 border border-zinc-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between group"
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
                    <span className="text-xl font-extrabold font-mono text-zinc-900">{mod.metric}</span>
                    <span className="block text-[10px] text-zinc-400">{mod.metricLabel}</span>
                  </div>
                  <button
                    onClick={() => onNavigate('architecture')}
                    className="w-8 h-8 rounded-full bg-zinc-50 group-hover:bg-[#6cf8bb] flex items-center justify-center text-zinc-500 group-hover:text-[#002113] transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. DEEP DIVE: AI DEMAND FORECASTING INTERACTIVE SECTION */}
      <section className="py-16 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#006c49] text-xs font-mono font-semibold">
                MODULE 01 DEEP DIVE
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00120a] font-['Plus_Jakarta_Sans'] leading-tight">
                AI Demand Forecasting That Understands Rain, Heat & Price
              </h2>

              <p className="text-sm text-zinc-600 leading-relaxed">
                Traditional forecasting models fail because farmers do not sow according to last year's calendar—they sow when the soil moisture profile is right. SeedPulse fuses weather forecasts, commodity prices, and acreage intentions.
              </p>

              {/* Scenario Switcher Buttons */}
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-700 font-bold block">
                  Simulate Real-Time Climate Shocks:
                </span>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setDemandScenario('baseline')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                      demandScenario === 'baseline'
                        ? 'bg-[#00120a] text-white font-bold'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    Normal Monsoon
                  </button>
                  <button
                    onClick={() => setDemandScenario('monsoon_delay')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                      demandScenario === 'monsoon_delay'
                        ? 'bg-amber-600 text-white font-bold'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    18-Day Monsoon Delay
                  </button>
                  <button
                    onClick={() => setDemandScenario('heatwave')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                      demandScenario === 'heatwave'
                        ? 'bg-rose-600 text-white font-bold'
                        : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    Early Kharif Heatwave
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-xl font-bold font-mono text-[#006c49]">+18.4%</span>
                  <span className="block text-[11px] text-zinc-500">Forecast Accuracy vs Legacy ERP</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="text-xl font-bold font-mono text-[#006c49]">14 Days</span>
                  <span className="block text-[11px] text-zinc-500">Early Stock Allocation Signal</span>
                </div>
              </div>
            </div>

            {/* Right Interactive SVG Chart (7 cols) */}
            <div className="lg:col-span-7 bg-[#00120a] rounded-3xl p-6 border border-[#0a291e] shadow-2xl text-white space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#0a291e]">
                <div>
                  <span className="text-xs font-mono text-[#6cf8bb] font-bold block">
                    KHARIF DEMAND FORECAST :: HYBRID MAIZE
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    Confidence Band: 95% Bayesian Credible Interval
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-[#6cf8bb]">
                  LIVE MODEL
                </span>
              </div>

              {/* The SVG Canvas */}
              <div className="h-60 w-full bg-[#00170d] rounded-2xl border border-emerald-950 p-3 relative overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 500 180">
                  {/* Grid */}
                  <line x1="40" y1="30" x2="480" y2="30" stroke="#132a1c" strokeDasharray="3 3" />
                  <line x1="40" y1="75" x2="480" y2="75" stroke="#132a1c" strokeDasharray="3 3" />
                  <line x1="40" y1="120" x2="480" y2="120" stroke="#132a1c" strokeDasharray="3 3" />
                  <line x1="40" y1="150" x2="480" y2="150" stroke="#1f3d2a" />

                  {/* Y Axis Labels */}
                  <text x="32" y="34" fill="#9ca3af" fontSize="9" textAnchor="end" fontFamily="monospace">60K</text>
                  <text x="32" y="79" fill="#9ca3af" fontSize="9" textAnchor="end" fontFamily="monospace">40K</text>
                  <text x="32" y="124" fill="#9ca3af" fontSize="9" textAnchor="end" fontFamily="monospace">20K</text>
                  <text x="32" y="154" fill="#9ca3af" fontSize="9" textAnchor="end" fontFamily="monospace">0</text>

                  {/* Area fill */}
                  {demandScenario === 'baseline' && (
                    <>
                      <polygon
                        points="50,150 120,130 190,70 260,35 330,65 400,110 470,140 470,150"
                        fill="rgba(108, 248, 187, 0.15)"
                      />
                      <path
                        d="M 50 150 Q 120 125 190 70 T 260 35 T 330 65 T 400 110 T 470 140"
                        fill="none"
                        stroke="#6cf8bb"
                        strokeWidth="3"
                      />
                      <circle cx="260" cy="35" r="5" fill="#6cf8bb" />
                      <text x="260" y="24" fill="#6cf8bb" fontSize="9" textAnchor="middle" fontFamily="monospace">Peak Sowing (June 15)</text>
                    </>
                  )}

                  {demandScenario === 'monsoon_delay' && (
                    <>
                      <polygon
                        points="50,150 120,145 190,140 260,110 330,40 400,55 470,120 470,150"
                        fill="rgba(245, 158, 11, 0.15)"
                      />
                      <path
                        d="M 50 150 Q 120 145 190 140 T 260 110 T 330 40 T 400 55 T 470 120"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="3"
                      />
                      <circle cx="330" cy="40" r="5" fill="#f59e0b" />
                      <text x="330" y="28" fill="#fbbf24" fontSize="9" textAnchor="middle" fontFamily="monospace">Shifted Peak (July 04)</text>
                    </>
                  )}

                  {demandScenario === 'heatwave' && (
                    <>
                      <polygon
                        points="50,150 120,110 190,45 260,90 330,120 400,135 470,145 470,150"
                        fill="rgba(244, 63, 94, 0.15)"
                      />
                      <path
                        d="M 50 150 Q 120 110 190 45 T 260 90 T 330 120 T 400 135 T 470 145"
                        fill="none"
                        stroke="#f43f5e"
                        strokeWidth="3"
                      />
                      <circle cx="190" cy="45" r="5" fill="#f43f5e" />
                      <text x="190" y="32" fill="#fda4af" fontSize="9" textAnchor="middle" fontFamily="monospace">Compressed Early Window</text>
                    </>
                  )}

                  {/* X Axis labels */}
                  <text x="50" y="166" fill="#9ca3af" fontSize="8" fontFamily="monospace">May 15</text>
                  <text x="120" y="166" fill="#9ca3af" fontSize="8" fontFamily="monospace">Jun 01</text>
                  <text x="190" y="166" fill="#9ca3af" fontSize="8" fontFamily="monospace">Jun 15</text>
                  <text x="260" y="166" fill="#9ca3af" fontSize="8" fontFamily="monospace">Jul 01</text>
                  <text x="330" y="166" fill="#9ca3af" fontSize="8" fontFamily="monospace">Jul 15</text>
                  <text x="400" y="166" fill="#9ca3af" fontSize="8" fontFamily="monospace">Aug 01</text>
                  <text x="470" y="166" fill="#9ca3af" fontSize="8" fontFamily="monospace">Aug 15</text>
                </svg>
              </div>

              {/* Bottom dynamic impact callout */}
              <div className="p-3 rounded-xl bg-[#00170d] border border-emerald-900/50 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-300">
                  {demandScenario === 'baseline' && 'Optimal seasonal deployment: 240,000 bags pre-positioned.'}
                  {demandScenario === 'monsoon_delay' && 'Re-routing recommendation: Divert 42,000 bags from Marathwada to canal-irrigated Vidarbha.'}
                  {demandScenario === 'heatwave' && 'Urgent dispatch: Expedite short-duration variety SP-704 allocations immediately.'}
                </span>
                <button
                  onClick={() => onNavigate('copilot')}
                  className="text-[#6cf8bb] hover:underline flex items-center gap-1 flex-shrink-0 ml-2"
                >
                  Analyze in Copilot <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. DEEP DIVE: INVENTORY OPTIMIZATION & AGEING */}
      <section className="py-16 bg-[#faf8ff] border-b border-[#dae2fd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#005236] text-xs font-mono font-semibold mb-2">
              MODULE 04 DEEP DIVE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00120a] font-['Plus_Jakarta_Sans']">
              Multi-Echelon MEIO & Ageing Inventory Protection
            </h2>
            <p className="text-zinc-600 text-sm mt-1">
              Dynamic safety stocks that preserve biological vigor, unlock trapped working capital, and eliminate end-of-season distress discounting.
            </p>
          </div>

          {/* Live Capital Tracker & Health Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Card 1: Capital Tracker */}
            <div className="bg-[#00120a] rounded-3xl p-6 border border-[#0a291e] text-white shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">Live Capital Tracker</span>
                <div className="text-4xl font-extrabold font-mono text-[#6cf8bb]">₹12.4 Crore</div>
                <span className="text-xs text-zinc-400 block mt-1">
                  Working capital released across enterprise depots this season.
                </span>
              </div>

              <div className="pt-6 border-t border-[#0a291e] space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Total MT Modeled:</span>
                  <span className="text-white font-bold">48,200 MT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Avg Carrying Cost:</span>
                  <span className="text-white font-bold">₹182 / MT / Month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Write-Down Prevented:</span>
                  <span className="text-emerald-400 font-bold">₹3.8 Crore</span>
                </div>
              </div>
            </div>

            {/* Card 2: SKU Health Breakdown */}
            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-700 block">
                Fleet Inventory Health Status
              </span>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-between">
                  <div>
                    <strong className="text-emerald-900 block font-['Plus_Jakarta_Sans']">Grade A (Optimal Vigor &gt;90%)</strong>
                    <span className="text-emerald-700 text-[11px]">Safe storage horizon &gt;120 days</span>
                  </div>
                  <span className="text-base font-bold font-mono text-emerald-900">74%</span>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-between">
                  <div>
                    <strong className="text-amber-900 block font-['Plus_Jakarta_Sans']">Grade B (Monitored Moisture 11-12%)</strong>
                    <span className="text-amber-700 text-[11px]">Recommended dispatch within 45 days</span>
                  </div>
                  <span className="text-base font-bold font-mono text-amber-900">21%</span>
                </div>

                <div className="p-3 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-between">
                  <div>
                    <strong className="text-rose-900 block font-['Plus_Jakarta_Sans']">Grade C (Critical Action Required)</strong>
                    <span className="text-rose-700 text-[11px]">Immediate conditioning or rebalancing</span>
                  </div>
                  <span className="text-base font-bold font-mono text-rose-900">5%</span>
                </div>
              </div>
            </div>

            {/* Card 3: Critical Balancing Directive */}
            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    CRITICAL BALANCING DIRECTIVE
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">LOT #HM-9082</span>
                </div>

                <h4 className="text-sm font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                  Rebalance 1,200 MT to Nizamabad Controlled Climate Silo
                </h4>

                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                  Depot Bay C-04 relative humidity exceeded safe threshold for 72 hours. Transfer preserves germination above 92%, saving ₹48.6 Lakh.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100">
                {transferExecuted ? (
                  <div className="p-3 rounded-xl bg-emerald-100 text-[#005236] text-xs font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                    <span>SAP STO #8821 dispatched to logistics queue.</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setTransferExecuted(true)}
                    className="w-full py-2.5 bg-[#006c49] hover:bg-[#005236] text-white font-bold rounded-xl text-xs transition-all shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Execute STO Transfer to Nizamabad</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. PRODUCTION TO PROCESSING 9-STEP PIPELINE */}
      <section className="py-16 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#006c49] text-xs font-mono font-semibold">
              END-TO-END PIPELINE
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00120a] font-['Plus_Jakarta_Sans']">
              The 9-Step Seed Production to Processing Journey
            </h2>
            <p className="text-zinc-600 text-sm">
              Continuous mathematical optimization from contract grower parent allocations to final farmer delivery.
            </p>
          </div>

          {/* 9-step grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-3 text-xs">
            {[
              { step: '01', name: 'Grower Allocation', desc: 'Acreage contracting & GIS isolation buffers' },
              { step: '02', name: 'Nursery Sowing', desc: 'Parent line synchronization' },
              { step: '03', name: 'Detasseling Watch', desc: 'Rouging & purity compliance' },
              { step: '04', name: 'Harvest Intake', desc: 'Moisture log & cob intake' },
              { step: '05', name: 'Cob Drying', desc: 'Moisture reduction to 11%' },
              { step: '06', name: 'Conditioning & Sort', desc: 'Gravity & sizing separation' },
              { step: '07', name: 'Seed Treatment', desc: 'Fungicide & biological coating' },
              { step: '08', name: 'Packaging & QR', desc: 'Pouch filling & 2D traceability' },
              { step: '09', name: 'Dispatch to Retail', desc: 'Reefer transit & sowing SLA' },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-emerald-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#006c49] block mb-1">
                    STEP {p.step}
                  </span>
                  <h4 className="font-bold text-zinc-900 font-['Plus_Jakarta_Sans'] text-xs">
                    {p.name}
                  </h4>
                  <p className="text-[11px] text-zinc-500 mt-1 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-zinc-200/60 flex items-center justify-between text-[10px] font-mono text-emerald-700">
                  <span>Optimized</span>
                  <Check className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#00120a] border border-[#0a291e] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                !
              </div>
              <div className="text-xs">
                <strong className="text-amber-400 block font-mono">ACTIVE BOTTLENECK WATCH</strong>
                <span className="text-zinc-300">Dryer Line #2 in Nizamabad Plant operating at 94% capacity. Harvest arrivals diverted to Pit B.</span>
              </div>
            </div>
            <button
              onClick={() => onNavigate('copilot')}
              className="px-4 py-2 bg-[#6cf8bb] hover:bg-[#4edea3] text-[#002113] font-bold rounded-xl text-xs font-mono transition-colors flex-shrink-0"
            >
              Simulate Line Reconfiguration
            </button>
          </div>

        </div>
      </section>

      {/* 7. AI SUPPLY CHAIN COPILOT TEASER SECTION */}
      <section className="py-16 bg-[#00120a] text-white border-b border-[#0a291e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6cf8bb]/10 border border-[#6cf8bb]/20 text-[#6cf8bb] text-xs font-mono font-semibold">
              INTERACTIVE COGNITIVE COPILOT
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans']">
              Ask Any Question About Your Seed Supply Chain
            </h2>
            <p className="text-zinc-400 text-sm">
              Try a live agronomic reasoning prompt below to see how SeedPulse synthesizes biological laws, inventory balances, and ERP orders.
            </p>
          </div>

          {/* Terminal Box */}
          <div className="max-w-3xl mx-auto bg-[#00170d] rounded-2xl border border-emerald-900/60 p-6 shadow-2xl space-y-4">
            
            {/* Prompt presets */}
            <div className="flex flex-wrap gap-2">
              {[
                'Analyse Lot #9281 vigor degradation in Hyderabad Central',
                'Simulate 18-day southwest monsoon deficit across Marathwada',
                'Recommend re-sequencing for Dryer Line TH-402 raw cob backlog'
              ].map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleRunTeaser(p)}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-zinc-300 border border-zinc-800 transition-colors text-left"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Input bar */}
            <div className="flex items-center gap-2 pt-2">
              <input
                type="text"
                value={teaserPrompt}
                onChange={(e) => setTeaserPrompt(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#00120a] border border-zinc-700 rounded-xl text-xs font-mono text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#6cf8bb]"
              />
              <button
                onClick={() => handleRunTeaser(teaserPrompt)}
                disabled={isTeaserThinking}
                className="px-4 py-2.5 bg-[#006c49] hover:bg-[#005236] text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors flex-shrink-0"
              >
                {isTeaserThinking ? (
                  <span>Thinking...</span>
                ) : (
                  <>
                    <span>Run</span>
                    <Send className="w-3 h-3 text-[#6cf8bb]" />
                  </>
                )}
              </button>
            </div>

            {/* Response Area */}
            {teaserResponse && (
              <div className="p-4 rounded-xl bg-[#000d07] border border-[#006c49]/50 text-xs text-zinc-200 font-sans leading-relaxed animate-in fade-in space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6cf8bb]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>SYNTHESIS COMPLETE (28ms)</span>
                </div>
                <p>{teaserResponse}</p>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => onNavigate('copilot')}
                    className="text-xs font-mono text-[#6cf8bb] hover:underline flex items-center gap-1"
                  >
                    Open Full Copilot Workspace <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 8. HOW IT WORKS (3 STEPS) */}
      <section className="py-16 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-[#006c49] font-bold block mb-1">
              RAPID DEPLOYMENT
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00120a] font-['Plus_Jakarta_Sans']">
              How SeedPulse AI Deploys in 14 Days
            </h2>
            <p className="text-zinc-600 text-sm mt-1">
              No complex multi-year consulting engagements. Our pre-built ERP connectors and biological models activate in two weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#005236] font-mono font-bold flex items-center justify-center text-sm">
                01
              </span>
              <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                Connect Data Fabric
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Connect pre-built adapters for SAP, Oracle, Dynamics, or SeedLIMS. Ingest SKU master files, historical sales, and warehouse climate sensors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#005236] font-mono font-bold flex items-center justify-center text-sm">
                02
              </span>
              <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                Calibrate Biological Kinetics
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Neural Core trains on your crop varieties, germination decay curves, and regional sowing calendars with zero germplasm data retention.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-[#005236] font-mono font-bold flex items-center justify-center text-sm">
                03
              </span>
              <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                Execute & Free Capital
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Receive continuous prescriptive recommendations. Release trapped working capital and prevent seasonal write-downs with one-click ERP dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIAL / PILOT VALIDATION */}
      <section className="py-16 bg-[#faf8ff] border-b border-[#dae2fd]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-zinc-200 shadow-xl space-y-6">
            <div className="flex items-center gap-2 text-[#006c49] text-xs font-mono font-bold uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Customer Pilot Results</span>
            </div>

            <blockquote className="text-base sm:text-lg text-zinc-800 italic leading-relaxed">
              "SeedPulse AI cut our carryover seed write-downs by 42% in our very first Kharif season. The multi-echelon inventory intelligence alone paid for the enterprise deployment four times over within six months."
            </blockquote>

            <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
              <img
                src={ELENA_VANCE_AVATAR}
                alt="Dr. Elena Vance"
                className="w-12 h-12 rounded-full object-cover border border-emerald-300 shadow-sm"
              />
              <div>
                <h4 className="text-sm font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                  Dr. Elena Vance
                </h4>
                <p className="text-xs text-zinc-500">Chief Supply Chain Officer, AgroGenetics Global</p>
                <span className="text-[11px] font-mono text-[#006c49] font-semibold block mt-0.5">
                  Verified 15,000+ MT Deployment
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA BANNER */}
      <section className="py-16 bg-[#00120a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0a291e] to-[#00120a] rounded-3xl p-8 sm:p-12 border border-[#006c49]/40 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6cf8bb]/10 border border-[#6cf8bb]/20 text-[#6cf8bb] text-xs font-mono">
                2025 ALLOCATION SLOTS AVAILABLE
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans']">
                Transform Your Seed Enterprise Supply Chain Today
              </h2>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                Join market leaders in hybrid corn, paddy, vegetables, and cotton operating on SeedPulse AI. Book a confidential 30-minute tailored briefing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
              <button
                onClick={onOpenDemo}
                className="px-7 py-3.5 bg-[#6cf8bb] hover:bg-[#4edea3] text-[#002113] font-extrabold rounded-xl text-xs transition-all shadow-xl hover:shadow-emerald-500/20 text-center"
              >
                Schedule Tailored Briefing
              </button>
              <button
                onClick={() => onNavigate('copilot')}
                className="px-6 py-3.5 border border-zinc-700 hover:bg-zinc-800 text-white font-semibold rounded-xl text-xs transition-all text-center"
              >
                Launch AI Copilot
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
