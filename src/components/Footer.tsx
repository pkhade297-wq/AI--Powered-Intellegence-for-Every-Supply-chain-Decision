import React from 'react';
import { ScreenType } from '../types';
import { LOGO_URL } from '../data/mockData';
import { Shield, Sparkles, CheckCircle2, Globe, Lock, Cpu, ArrowUpRight, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#00120a] text-zinc-300 border-t border-[#0a291e]">
      {/* Upper Pre-Footer Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#0a291e]/80">
        <div className="bg-gradient-to-r from-[#0a291e] to-[#00120a] rounded-2xl p-8 border border-[#006c49]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6cf8bb]/10 border border-[#6cf8bb]/20 text-[#6cf8bb] text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" /> 2025 ALLOCATION SLOTS AVAILABLE
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight font-['Plus_Jakarta_Sans']">
              Ready to eliminate seed write-downs and stockouts?
            </h3>
            <p className="text-zinc-400 text-sm mt-2">
              Join leading seed companies optimizing over 14.8M acre-years with Seed Innovation Neural Core. Schedule an executive walkthrough with our agronomic AI engineers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={() => onNavigate('demo')}
              className="px-6 py-3 bg-[#6cf8bb] hover:bg-[#4edea3] text-[#002113] font-bold rounded-xl text-sm transition-all shadow-lg hover:shadow-emerald-500/20 text-center"
            >
              Book Tailored Walkthrough
            </button>
            <button
              onClick={() => onNavigate('copilot')}
              className="px-5 py-3 bg-zinc-900/80 hover:bg-zinc-800 text-white font-medium rounded-xl text-sm border border-zinc-700 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>Test AI Copilot</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#002113] border border-[#006c49] p-1 flex items-center justify-center">
                <img src={LOGO_URL} alt="Seed Innovation AI" className="w-full h-full object-contain" />
              </div>
              <span className="font-['Plus_Jakarta_Sans'] font-black text-xl text-white tracking-tight">
                Seed Innovation <span className="text-[#6cf8bb]">AI</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              The purpose-built autonomous operating system for agricultural seed supply chains. Synchronizing biological lags, multi-season breeding, genetic purity protocols, and climate shocks.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" /> SOC 2 Type II
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Lock className="w-3.5 h-3.5" /> Zero-Germplasm Retention
              </span>
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Shield className="w-3.5 h-3.5" /> ISO 27001
              </span>
            </div>
            <div className="pt-2 text-xs text-zinc-400 flex items-center gap-2 font-mono">
              <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>Corporate: <a href="mailto:pkhade297@gmail.com" className="text-emerald-400 hover:text-emerald-300 underline">pkhade297@gmail.com</a></span>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#adcebd] font-semibold">
              Product & Modules
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button onClick={() => onNavigate('platform')} className="hover:text-white transition-colors">
                  AI Demand Forecasting
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('platform')} className="hover:text-white transition-colors">
                  Multi-Echelon MEIO Inventory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('platform')} className="hover:text-white transition-colors">
                  Grower Allocation & Sowing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('platform')} className="hover:text-white transition-colors">
                  Conditioning & Plant SCADA
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('platform')} className="hover:text-white transition-colors">
                  Warehouse Climate Suite
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('architecture')} className="hover:text-white transition-colors">
                  Neural Core Topology v4.2
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#adcebd] font-semibold">
              Solutions & Crops
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-white transition-colors">
                  Hybrid Maize & Corn Chains
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-white transition-colors">
                  Vegetable Seed Production
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-white transition-colors">
                  Cotton & Oilseed Operations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('solutions')} className="hover:text-white transition-colors">
                  Breeding & Trait Commercialization
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('use-cases')} className="hover:text-white transition-colors">
                  Contract Grower Organizations
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Col 3 */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#adcebd] font-semibold">
              Autonomous Copilot
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <button onClick={() => onNavigate('copilot')} className="hover:text-white transition-colors flex items-center gap-1 text-emerald-400">
                  <span>Interactive Terminal</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('copilot')} className="hover:text-white transition-colors">
                  Biological Decay Modeling
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('copilot')} className="hover:text-white transition-colors">
                  Monsoon Re-Routing Engine
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('copilot')} className="hover:text-white transition-colors">
                  Automated ERP Actions
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('demo')} className="hover:text-white transition-colors">
                  Request Pilot POC
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-Strip */}
        <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Seed Innovation AI Inc. All rights reserved.</span>
            <span>•</span>
            <span className="text-emerald-400 font-mono">Status: All Systems Operational (99.99%)</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Security Disclosures</span>
            <span className="hover:text-white cursor-pointer transition-colors">Zero-Germplasm Retention Agreement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
