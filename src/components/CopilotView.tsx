import React, { useState } from 'react';
import { PromptScenario, ScreenType } from '../types';
import { PROMPT_SCENARIOS, CASE_STUDY_IMAGES, ELENA_VANCE_AVATAR } from '../data/mockData';
import { JsonModal } from './JsonModal';
import {
  Sparkles,
  Terminal,
  Activity,
  Send,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Database,
  Cpu,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  RotateCcw,
  Layers,
  FileCode,
  Check,
  Clock,
  ArrowUpRight
} from 'lucide-react';

interface CopilotViewProps {
  onNavigate: (screen: ScreenType) => void;
}

export const CopilotView: React.FC<CopilotViewProps> = ({ onNavigate }) => {
  const [selectedScenario, setSelectedScenario] = useState<PromptScenario>(PROMPT_SCENARIOS[0]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [actionSuccessMessage, setActionSuccessMessage] = useState<string | null>(null);
  const [jsonModalOpen, setJsonModalOpen] = useState(false);
  const [simulationIteration, setSimulationIteration] = useState(1);

  const handleSelectScenario = (scenario: PromptScenario) => {
    setSelectedScenario(scenario);
    setActionSuccessMessage(null);
  };

  const handleExecuteAction = (actionText: string) => {
    setActionSuccessMessage(`Successfully dispatched directive: "${actionText}". ERP STO generated and sent to SAP gateway with signature SHA256-verified.`);
    setTimeout(() => {
      // Keep visible for user confidence
    }, 4000);
  };

  const handleCustomPromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputPrompt.trim()) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSimulationIteration(prev => prev + 1);
      // Create a synthesized scenario based on prompt
      const synthesized: PromptScenario = {
        id: Date.now(),
        category: 'CUSTOM INFERENCE',
        categoryColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
        title: 'Custom User Evaluation Query',
        description: inputPrompt,
        prompt: inputPrompt,
        variety: 'Dynamic Agronomic Cluster • Multi-SKU',
        confidence: '98.9%',
        narrative: `Neural Core evaluated your inquiry: "${inputPrompt}". Solved multi-objective optimization across 14 depots and current biological moisture logs. Recommended immediate replenishment re-balancing with a projected 16.4% working capital release and zero germination degradation.`,
        remediationSteps: [
          'Generate automated SAP purchase allocation adjustment.',
          'Issue revised humidity setpoint (-3.5% RH) to regional depot controllers.',
          'Schedule priority agronomic lab re-sampling within 48 hours.'
        ],
        preventedLoss: '₹62.5 Lakh ($75,000)',
        primaryActionText: 'Authorize Custom Rebalance Matrix',
        primaryActionParam: 'CUSTOM_REBALANCE',
        secondaryActionText: 'Export Decision Logs',
        lotId: 'DYNAMIC-LOT-SYNC',
        cropName: 'Multi-Varietal Commercial Pool',
        vigor: '93.4%',
        vigorChange: '+1.2%',
        moisture: '10.5%',
        humidity: '56.0%',
        anomalyPoint: { x: 230, y: 60, label: 'Optimization Convergence Point' },
        reasoningSteps: [
          { title: '1. Natural Language Parse', description: 'Extracted biological and logistics entities from prompt input.' },
          { title: '2. Constraint Satisfaction Solvers', description: 'Evaluated 12,400 viable network paths in 24ms.' },
          { title: '3. Biological Viability Verification', description: 'Checked seed respiration kinetics under tropical storage conditions.' },
          { title: '4. Executive Policy Adherence', description: 'Satisfied minimum safety stock and regulatory germination standards.' }
        ]
      };
      setSelectedScenario(synthesized);
      setInputPrompt('');
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e]">
      {/* Ambient Telemetry Strip */}
      <div className="bg-[#00120a] border-b border-[#0a291e] px-4 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#adcebd]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white">
              <span className="w-2 h-2 rounded-full bg-[#6cf8bb] animate-pulse"></span>
              COGNITIVE ENGINE v4.2
            </span>
            <span className="text-[#0a291e]">|</span>
            <span className="text-zinc-400">Model: <strong className="text-[#6cf8bb]">SeedPulse-BioReason-70B</strong></span>
            <span className="text-[#0a291e]">|</span>
            <span className="text-zinc-400">Cluster Latency: <strong className="text-white">28ms</strong></span>
            <span className="text-[#0a291e]">|</span>
            <span className="text-zinc-400">Region: <strong className="text-white">APAC_IND_HYD_01</strong></span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" /> SOC 2 Type II
            </span>
            <span className="text-[#0a291e]">|</span>
            <span className="text-zinc-400">Zero Germplasm Data Retention</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-[#eaedff] via-[#faf8ff] to-[#faf8ff] border-b border-[#dae2fd] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6cf8bb]/20 border border-[#006c49]/30 text-[#005236] text-xs font-mono font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#006c49]" />
            SEED SUPPLY CHAIN COGNITIVE ENGINE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#00120a] tracking-tight font-['Plus_Jakarta_Sans'] max-w-4xl mx-auto leading-tight">
            Your Autonomous AI Partner for Every Seed Supply Chain Decision
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto font-normal">
            Transform complex trade-offs into confident actions. Ask questions in natural language, simulate agronomic scenarios, and execute ERP workflows directly from the terminal.
          </p>
        </div>
      </div>

      {/* 3-Column Interactive Cognitive Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left Column: Scenarios (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#dae2fd]">
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-700 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#006c49]" />
                Prompt Scenarios
              </span>
              <span className="text-[10px] font-mono text-zinc-500 font-semibold">4 PRESETS</span>
            </div>

            <p className="text-xs text-zinc-500">
              Select an agronomic dilemma to evaluate how the Copilot diagnoses biological anomalies:
            </p>

            <div className="space-y-2.5">
              {PROMPT_SCENARIOS.map((scenario) => {
                const isSelected = selectedScenario.id === scenario.id;
                return (
                  <div
                    key={scenario.id}
                    onClick={() => handleSelectScenario(scenario)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#00120a] text-white border-[#006c49] shadow-md ring-1 ring-[#6cf8bb]/30'
                        : 'bg-white text-zinc-800 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${scenario.categoryColor}`}>
                        {scenario.category}
                      </span>
                      <span className={`text-[10px] font-mono ${isSelected ? 'text-[#6cf8bb]' : 'text-zinc-500'}`}>
                        {scenario.confidence} conf.
                      </span>
                    </div>
                    <h3 className={`text-xs font-bold font-['Plus_Jakarta_Sans'] ${isSelected ? 'text-white' : 'text-zinc-900'}`}>
                      {scenario.title}
                    </h3>
                    <p className={`text-[11px] mt-1 line-clamp-2 leading-relaxed ${isSelected ? 'text-zinc-300' : 'text-zinc-500'}`}>
                      {scenario.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Autonomous loop status card */}
            <div className="p-3.5 rounded-xl bg-[#eaedff] border border-[#dae2fd] text-xs space-y-2">
              <div className="flex items-center gap-2 text-[#006c49] font-semibold text-xs">
                <Activity className="w-4 h-4 animate-pulse" />
                <span>Autonomous Agent Loop</span>
              </div>
              <p className="text-zinc-600 text-[11px] leading-relaxed">
                Continuously parsing SAP ERP, IoT climate logs, and lab germination reports. When anomalies breach tolerances, SeedPulse initiates prescriptive reasoning autonomously.
              </p>
            </div>
          </div>

          {/* Center Column: Interactive Copilot Terminal (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Terminal Window Card */}
            <div className="bg-[#00120a] rounded-2xl border border-[#0a291e] shadow-2xl overflow-hidden text-zinc-200 flex flex-col">
              
              {/* Terminal Window Chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#051a10] border-b border-[#0a291e]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#6cf8bb]" />
                    SeedPulse Neural Copilot
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
                  <span>Confidence: <strong className="text-[#6cf8bb]">{selectedScenario.confidence}</strong></span>
                  <button
                    onClick={() => setJsonModalOpen(true)}
                    className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors flex items-center gap-1"
                  >
                    <FileCode className="w-3 h-3 text-emerald-400" />
                    <span>Audit JSON</span>
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-5 space-y-5 overflow-y-auto max-h-[640px]">
                
                {/* User Prompt Message */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                    <span className="text-[#6cf8bb] font-bold">USER @ ENTERPRISE_PORTAL</span>
                    <span>•</span>
                    <span className="text-zinc-500">{new Date().toLocaleTimeString()}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-100 font-mono leading-relaxed">
                    {selectedScenario.prompt}
                  </div>
                </div>

                {/* Copilot Reasoning & Synthesis */}
                <div className="space-y-4 pt-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center">
                        <Sparkles className="w-3 h-3 text-[#6cf8bb]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#6cf8bb]">
                        SEEDPULSE REASONING SYNTHESIS
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      4/4 REASONING STEPS SOLVED
                    </span>
                  </div>

                  {/* Narrative Text */}
                  <div className="p-4 rounded-xl bg-[#00170d] border border-emerald-900/40 text-xs text-zinc-200 leading-relaxed font-sans">
                    {selectedScenario.narrative}
                  </div>

                  {/* Inline Germination & Vigor Trajectory SVG Chart */}
                  <div className="p-4 rounded-xl bg-[#000d07] border border-[#0a291e] space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-zinc-300 font-semibold flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#6cf8bb]" />
                        Projected Viability Trajectory (30-Day Model)
                      </span>
                      <span className="text-[11px] text-zinc-400">
                        Target: <strong className="text-emerald-400">≥85%</strong> Commercial Std
                      </span>
                    </div>

                    {/* The Visual SVG Graph */}
                    <div className="relative w-full h-44 bg-[#00120a] rounded-lg border border-zinc-900 p-2 overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 400 130">
                        {/* Grid lines */}
                        <line x1="40" y1="20" x2="380" y2="20" stroke="#1f2937" strokeDasharray="3 3" />
                        <line x1="40" y1="50" x2="380" y2="50" stroke="#1f2937" strokeDasharray="3 3" />
                        <line x1="40" y1="80" x2="380" y2="80" stroke="#374151" strokeDasharray="4 4" />
                        <line x1="40" y1="110" x2="380" y2="110" stroke="#1f2937" />

                        {/* Y-axis labels */}
                        <text x="32" y="24" fill="#9ca3af" fontSize="9" textAnchor="end" fontFamily="monospace">98%</text>
                        <text x="32" y="54" fill="#9ca3af" fontSize="9" textAnchor="end" fontFamily="monospace">90%</text>
                        <text x="32" y="84" fill="#f87171" fontSize="9" textAnchor="end" fontFamily="monospace">85%</text>
                        <text x="32" y="114" fill="#9ca3af" fontSize="9" textAnchor="end" fontFamily="monospace">75%</text>

                        {/* Regulatory threshold line (85%) */}
                        <line x1="40" y1="80" x2="380" y2="80" stroke="#ef4444" strokeWidth="1.2" strokeDasharray="5 3" />
                        <text x="375" y="76" fill="#f87171" fontSize="8" textAnchor="end" fontFamily="monospace">Statutory Min (85%)</text>

                        {/* Path 1: Unmitigated Spoilage Curve (Dotted red/amber) */}
                        <path
                          d="M 50 35 Q 150 42 220 75 T 370 115"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="2"
                          strokeDasharray="4 3"
                        />

                        {/* Path 2: SeedPulse Mitigated Transfer Curve (Solid Emerald) */}
                        <path
                          d="M 50 35 Q 150 40 220 50 T 370 38"
                          fill="none"
                          stroke="#6cf8bb"
                          strokeWidth="2.5"
                        />

                        {/* Anomaly Indicator Point */}
                        <circle cx={selectedScenario.anomalyPoint.x} cy={selectedScenario.anomalyPoint.y} r="5" fill="#ef4444" className="animate-ping" opacity="0.7" />
                        <circle cx={selectedScenario.anomalyPoint.x} cy={selectedScenario.anomalyPoint.y} r="4" fill="#ef4444" />
                        
                        {/* Anomaly Callout Box */}
                        <g transform={`translate(${selectedScenario.anomalyPoint.x - 50}, ${selectedScenario.anomalyPoint.y - 30})`}>
                          <rect width="115" height="20" rx="4" fill="#18181b" stroke="#ef4444" strokeWidth="1" />
                          <text x="57" y="13" fill="#fca5a5" fontSize="8" textAnchor="middle" fontFamily="monospace">
                            {selectedScenario.anomalyPoint.label}
                          </text>
                        </g>

                        {/* X-axis labels */}
                        <text x="50" y="125" fill="#9ca3af" fontSize="8" fontFamily="monospace">Day 0</text>
                        <text x="130" y="125" fill="#9ca3af" fontSize="8" fontFamily="monospace">Day 7</text>
                        <text x="210" y="125" fill="#9ca3af" fontSize="8" fontFamily="monospace">Day 14</text>
                        <text x="290" y="125" fill="#9ca3af" fontSize="8" fontFamily="monospace">Day 21</text>
                        <text x="370" y="125" fill="#9ca3af" fontSize="8" fontFamily="monospace">Day 30</text>
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-1 bg-[#6cf8bb] rounded-full inline-block"></span>
                        <span>With SeedPulse Re-balancing (Preserves 94% Vigor)</span>
                      </span>
                      <span className="flex items-center gap-1.5 text-amber-400">
                        <span className="w-2.5 h-1 bg-amber-400 rounded-full inline-block"></span>
                        <span>Without Mitigation (Drops to 74%)</span>
                      </span>
                    </div>
                  </div>

                  {/* Remediation Protocol Checklist */}
                  <div className="space-y-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold block">
                      Recommended Remediation Protocol
                    </span>
                    <div className="space-y-1.5">
                      {selectedScenario.remediationSteps.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-zinc-900/70 border border-zinc-800 text-xs text-zinc-200 font-mono">
                          <Check className="w-4 h-4 text-[#6cf8bb] flex-shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Financial Value Metric & Action Execution */}
                  <div className="pt-2 p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/60 to-zinc-900 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-zinc-400 block">Prevented Working Capital Loss</span>
                      <span className="text-lg font-mono font-bold text-[#6cf8bb]">{selectedScenario.preventedLoss}</span>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => handleExecuteAction(selectedScenario.primaryActionText)}
                        className="w-full sm:w-auto px-4 py-2 bg-[#6cf8bb] hover:bg-[#4edea3] text-[#002113] font-bold rounded-lg text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{selectedScenario.primaryActionText}</span>
                      </button>
                    </div>
                  </div>

                  {/* Action Success Toast Feedback */}
                  {actionSuccessMessage && (
                    <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-500 text-xs text-emerald-200 font-mono flex items-start gap-2 animate-in fade-in">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <strong className="block text-emerald-300 font-bold">DIRECTIVE DISPATCHED TO ERP GATEWAY</strong>
                        <span>{actionSuccessMessage}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Interactive Prompt Input */}
              <div className="p-3 bg-[#051a10] border-t border-[#0a291e]">
                <form onSubmit={handleCustomPromptSubmit} className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={inputPrompt}
                      onChange={(e) => setInputPrompt(e.target.value)}
                      placeholder="Ask Copilot about any seed variety, lot, weather shock, or plant re-sequence..."
                      className="w-full px-3.5 py-2.5 bg-[#00120a] border border-zinc-700 rounded-xl text-xs font-mono text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-[#6cf8bb] focus:ring-1 focus:ring-[#6cf8bb]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="px-4 py-2.5 bg-[#006c49] hover:bg-[#005236] text-white font-semibold rounded-xl text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
                  >
                    {isProcessing ? (
                      <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Inferring...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit</span>
                        <Send className="w-3 h-3 text-[#6cf8bb]" />
                      </>
                    )}
                  </button>
                </form>
                <div className="flex items-center gap-2 mt-2 px-1">
                  <span className="text-[10px] text-zinc-500 font-mono">Quick prompts:</span>
                  <button
                    type="button"
                    onClick={() => setInputPrompt('What is our moisture exposure on Arize 6444 carryover?')}
                    className="text-[10px] text-zinc-400 hover:text-[#6cf8bb] font-mono underline transition-colors"
                  >
                    Moisture exposure on carryover?
                  </button>
                  <span className="text-zinc-600">•</span>
                  <button
                    type="button"
                    onClick={() => setInputPrompt('Simulate cold chain reefer detour to Indore Depot')}
                    className="text-[10px] text-zinc-400 hover:text-[#6cf8bb] font-mono underline transition-colors"
                  >
                    Simulate reefer detour to Indore
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Real-Time SKU Telemetry & Reasoning Trace (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            
            {/* Real-time SKU Telemetry */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-700 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#006c49]" />
                  Active SKU Telemetry
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 block">Lot Tracking Code</span>
                  <span className="font-mono font-bold text-zinc-900">{selectedScenario.lotId}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 block">Variety / Crop</span>
                  <span className="font-semibold text-zinc-800">{selectedScenario.cropName}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                    <span className="text-[10px] font-mono text-zinc-400 block">Current Vigor</span>
                    <span className="text-sm font-bold font-mono text-zinc-900">{selectedScenario.vigor}</span>
                    <span className="text-[10px] font-mono text-rose-500 block">{selectedScenario.vigorChange}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                    <span className="text-[10px] font-mono text-zinc-400 block">Moisture %</span>
                    <span className="text-sm font-bold font-mono text-zinc-900">{selectedScenario.moisture}</span>
                    <span className="text-[10px] font-mono text-emerald-600 block">Safe limit 12%</span>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-amber-50 border border-amber-200">
                  <span className="text-[10px] font-mono text-amber-800 block font-semibold">Ambient Depot Humidity</span>
                  <span className="text-xs font-mono font-bold text-amber-900">{selectedScenario.humidity}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-100">
                <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">Connected Data Pipes</span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">SAP MM</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">Depot IoT</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">SeedLIMS Lab</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">ECMWF</span>
                </div>
              </div>
            </div>

            {/* AI Reasoning Trace */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-4 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-100">
                <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-700 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#006c49]" />
                  AI Reasoning Trace
                </span>
                <button
                  onClick={() => setJsonModalOpen(true)}
                  className="text-[10px] font-mono text-emerald-700 hover:underline font-semibold"
                >
                  Inspect JSON
                </button>
              </div>

              <div className="space-y-3 text-xs">
                {selectedScenario.reasoningSteps.map((step, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-emerald-500/40 space-y-0.5">
                    <span className="font-mono font-bold text-zinc-800 text-[11px] block">{step.title}</span>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-zinc-100 text-[10px] font-mono text-zinc-400 flex items-center justify-between">
                <span>Deterministic Seed: #SP-4209</span>
                <span className="text-emerald-600 font-semibold">100% Explainable</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Autonomous Agent Capabilities Built for Biology (4 Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-[#dae2fd]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#005236] text-xs font-mono font-semibold mb-3">
            AGRONOMIC REASONING ARTIFACTS
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#00120a] tracking-tight font-['Plus_Jakarta_Sans']">
            Autonomous Agent Capabilities Built for Biology
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-2">
            Generic LLMs don't understand seed physiology. SeedPulse models Harrington’s equations, harvest moisture curves, and genetic parent isolation rules natively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#006c49] mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans'] mb-2">
              24/7 Anomaly Monitoring
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Scans 100,000+ SKU-depot pairs every 15 minutes. Automatically flags microclimate humidity spikes, delayed contract grower threshing, and transit delays.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans'] mb-2">
              Biological Root-Cause
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Differentiates between physiological senescence, fungal infection, mechanical damage from aggressive threshing, and packaging moisture leaks.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans'] mb-2">
              Multi-Echelon Solvers
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Evaluates regional rebalancing alternatives in milliseconds. Balances reefer freight costs against irreversible biological vigor loss.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans'] mb-2">
              One-Click ERP Dispatch
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Dispatches authenticated SAP STOs, Oracle NetSuite re-orders, or warehouse conditioning work orders directly from approved recommendations.
            </p>
          </div>
        </div>
      </div>

      {/* Trust & Explainability: Governance Schematics */}
      <div className="bg-[#00120a] text-white py-16 px-4 sm:px-6 lg:px-8 border-y border-[#0a291e]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6cf8bb]/10 border border-[#6cf8bb]/20 text-[#6cf8bb] text-xs font-mono">
                ENTERPRISE REASONING GOVERNANCE
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-['Plus_Jakarta_Sans']">
                Complete Explainability. Zero Black-Box Hallucinations.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                In regulated agricultural supply chains, black-box recommendations fail audits. Every decision generated by SeedPulse is backed by deterministic mathematical proofs, transparent parameter bounds, and an unalterable audit trace.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="p-4 rounded-xl bg-[#0a291e]/50 border border-[#006c49]/40">
                  <span className="text-3xl font-extrabold text-[#6cf8bb] font-mono">99.4%</span>
                  <span className="block text-xs text-zinc-300 mt-1 font-semibold">User Adoption Rate</span>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Recommendations approved by regional agronomy leads without manual overrides.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#0a291e]/50 border border-[#006c49]/40">
                  <span className="text-3xl font-extrabold text-[#6cf8bb] font-mono">6.2x</span>
                  <span className="block text-xs text-zinc-300 mt-1 font-semibold">Faster Anomaly Resolution</span>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Average time to detect, simulate, and dispatch mitigation down from 4.8 days to 45 mins.</p>
                </div>
              </div>
            </div>

            {/* Governance schematic box */}
            <div className="p-6 rounded-2xl bg-[#00170d] border border-emerald-900/60 font-mono text-xs text-zinc-300 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-900/40">
                <span className="text-[#6cf8bb] font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Governed Autonomous Agent Guardrails
                </span>
                <span className="text-[10px] text-zinc-500">POLICY ENFORCED</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-emerald-900/50 text-[#6cf8bb] flex items-center justify-center flex-shrink-0 text-[10px]">1</span>
                  <div>
                    <strong className="text-white block">Agronomic Parameter Boundary Check</strong>
                    <span className="text-zinc-400 text-[11px]">Enforces statutory minimum germination standards (85% hybrid maize, 80% paddy). Rejects actions violating state seed certification rules.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-emerald-900/50 text-[#6cf8bb] flex items-center justify-center flex-shrink-0 text-[10px]">2</span>
                  <div>
                    <strong className="text-white block">Mixed Integer Linear Solver Verification</strong>
                    <span className="text-zinc-400 text-[11px]">All natural language prompts compile to deterministic Simplex constraints before executing.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded bg-emerald-900/50 text-[#6cf8bb] flex items-center justify-center flex-shrink-0 text-[10px]">3</span>
                  <div>
                    <strong className="text-white block">Cryptographic Role-Based Authorization</strong>
                    <span className="text-zinc-400 text-[11px]">Dispatches requiring &gt;₹25 Lakh reallocation mandate secondary agronomy head cryptographic approval.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Autonomous Copilot in the Field: 3 Real-World Case Studies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono font-semibold mb-3">
            FIELD PROVEN DEPLOYMENTS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00120a] font-['Plus_Jakarta_Sans']">
            Autonomous Copilot in the Field
          </h2>
          <p className="text-zinc-600 text-sm mt-2">
            Real enterprise case studies across commercial seed organizations managing millions of bags per season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Case 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="h-48 relative overflow-hidden bg-zinc-100">
              <img
                src={CASE_STUDY_IMAGES.corn}
                alt="Hybrid Corn Production"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#00120a]/80 backdrop-blur-sm text-[#6cf8bb] font-mono text-[10px] px-2 py-0.5 rounded font-bold">
                HYBRID MAIZE • 420K BAGS
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                  Preventing Vigor Decay in Tropical High-RH Corridors
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Autonomous detection of warehouse HVAC micro-failures in South India saved 34,000 bags of high-value hybrid corn from sub-standard germination downgrade.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono">Value Preserved:</span>
                <span className="text-emerald-700 font-mono font-bold">₹2.4 Crore</span>
              </div>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="h-48 relative overflow-hidden bg-zinc-100">
              <img
                src={CASE_STUDY_IMAGES.agronomist}
                alt="Agronomist Field Review"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#00120a]/80 backdrop-blur-sm text-amber-400 font-mono text-[10px] px-2 py-0.5 rounded font-bold">
                COTTON & PADDY • 14 LOCATIONS
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                  Dynamic Monsoon Re-Routing across Western India
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  When the southwest monsoon stalled for 18 days, the Copilot re-allocated 1,200 MT of drought-tolerant cotton seed to adjacent canal-irrigated districts ahead of competitors.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono">Market Share Gain:</span>
                <span className="text-emerald-700 font-mono font-bold">+18.2%</span>
              </div>
            </div>
          </div>

          {/* Case 3 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-md transition-all flex flex-col">
            <div className="h-48 relative overflow-hidden bg-zinc-100">
              <img
                src={CASE_STUDY_IMAGES.conditioning}
                alt="Seed Conditioning Plant"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#00120a]/80 backdrop-blur-sm text-blue-400 font-mono text-[10px] px-2 py-0.5 rounded font-bold">
                CONDITIONING PLANT SCADA
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                  Multi-Plant Dryer Line Sequencing & Clean Changeovers
                </h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Optimized drying and cob sorting schedules across 3 multi-crop conditioning plants, eliminating raw cob mold risk during peak harvest glut.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono">Throughput Increase:</span>
                <span className="text-emerald-700 font-mono font-bold">+31.5%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Demo CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-r from-[#00120a] to-[#0a291e] rounded-3xl p-8 sm:p-12 border border-[#006c49]/40 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#6cf8bb] font-bold">
              Autonomous Pilot Assessment
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Plus_Jakarta_Sans']">
              Test SeedPulse Copilot on Your Proprietary SKU Data
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              We run a zero-germplasm-retention pilot on a historical season dataset. Measure how many lakhs of write-downs our Copilot would have pre-empted in your network.
            </p>
          </div>
          <button
            onClick={() => onNavigate('demo')}
            className="px-8 py-4 bg-[#6cf8bb] hover:bg-[#4edea3] text-[#002113] font-extrabold rounded-xl text-sm transition-all shadow-xl hover:shadow-emerald-500/20 text-center flex-shrink-0"
          >
            Schedule Tailored Walkthrough
          </button>
        </div>
      </div>

      {/* Raw JSON Modal for transparency */}
      <JsonModal
        isOpen={jsonModalOpen}
        onClose={() => setJsonModalOpen(false)}
        data={{
          scenario_id: selectedScenario.id,
          timestamp: new Date().toISOString(),
          model_version: "SeedPulse-BioReason-70B-v4.2",
          telemetry: {
            lot: selectedScenario.lotId,
            variety: selectedScenario.variety,
            vigor_current: selectedScenario.vigor,
            moisture_pct: selectedScenario.moisture,
            rh_depot: selectedScenario.humidity
          },
          anomaly_detection: {
            breach_detected: true,
            parameter: "relative_humidity_depot_bay_c04",
            threshold: "60.0% max",
            observed: "74.8%",
            biological_decay_rate_multiplier: 2.14
          },
          solver_results: {
            simulated_network_nodes: 2841,
            candidate_routes_evaluated: 4,
            optimal_destination_hub: "Nizamabad Controlled Climate Hub",
            transit_hours: 4.5,
            reefer_freight_cost_inr: 42000,
            projected_value_preserved_inr: 4860000,
            payoff_ratio: "115.7x"
          },
          audit_compliance: {
            standard: "ISO_9001_SEED_CERTIFICATION",
            statutory_min_germination_pct: 85.0,
            cryptographic_hash: "0x8f9c1b7e4a3d2e0f6b8a1c9d"
          }
        }}
        title={`Audit Trace :: ${selectedScenario.lotId}`}
      />
    </div>
  );
};
