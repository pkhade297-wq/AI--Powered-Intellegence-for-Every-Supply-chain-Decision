import React, { useState } from 'react';
import { ScreenType } from '../types';
import { Sparkles, Calculator, TrendingUp, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

interface UseCasesViewProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenDemo: () => void;
}

export const UseCasesView: React.FC<UseCasesViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [annualVolume, setAnnualVolume] = useState<number>(35000); // MT
  const [avgBagPrice, setAvgBagPrice] = useState<number>(1800); // INR or unit
  const [carryoverRate, setCarryoverRate] = useState<number>(18); // %

  // Calculated ROI estimates
  const totalValue = (annualVolume * avgBagPrice * 20); // rough multiplier
  const estimatedCapitalRelease = Math.round((annualVolume * 0.28 * 1450) / 100000); // Lakhs
  const avoidedWriteDown = Math.round((annualVolume * (carryoverRate / 100) * 0.42 * 900) / 100000); // Lakhs
  const serviceLevelBoost = 4.6; // %

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#eaedff] via-[#faf8ff] to-[#faf8ff] border-b border-[#dae2fd] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6cf8bb]/20 border border-[#006c49]/30 text-[#005236] text-xs font-mono font-bold tracking-wide">
            <Calculator className="w-3.5 h-3.5 text-[#006c49]" />
            QUANTIFIABLE FINANCIAL ROI
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#00120a] tracking-tight font-['Plus_Jakarta_Sans'] leading-tight max-w-4xl mx-auto">
            Interactive Seed Supply Chain ROI & Value Calculator
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto">
            Simulate the exact working capital release, carryover write-down avoidance, and fulfillment lift based on your annual seed volume.
          </p>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-md space-y-6">
            <h2 className="text-lg font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
              Your Enterprise Parameters
            </h2>

            {/* Slider 1: Volume */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-zinc-700">Annual Commercial Seed Volume (MT)</span>
                <span className="text-[#006c49] font-mono text-sm font-bold">{annualVolume.toLocaleString()} MT</span>
              </div>
              <input
                type="range"
                min="5000"
                max="120000"
                step="5000"
                value={annualVolume}
                onChange={(e) => setAnnualVolume(Number(e.target.value))}
                className="w-full accent-[#006c49] h-2 bg-zinc-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>5,000 MT</span>
                <span>50,000 MT</span>
                <span>120,000 MT</span>
              </div>
            </div>

            {/* Slider 2: Carryover rate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-zinc-700">Historical Season Carryover Rate (%)</span>
                <span className="text-amber-700 font-mono text-sm font-bold">{carryoverRate}%</span>
              </div>
              <input
                type="range"
                min="8"
                max="35"
                step="1"
                value={carryoverRate}
                onChange={(e) => setCarryoverRate(Number(e.target.value))}
                className="w-full accent-amber-600 h-2 bg-zinc-200 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>8% (Lean)</span>
                <span>18% (Typical)</span>
                <span>35% (High volatility)</span>
              </div>
            </div>

            {/* Selector: Primary crop cluster */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-zinc-700">
                Primary Agronomic Segment
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {['Hybrid Field Crops (Corn/Rice)', 'Vegetables & Brassicas', 'Cotton & Oilseeds', 'Forage & Specialty'].map((crop, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="p-2.5 rounded-xl border border-zinc-200 text-zinc-700 text-left hover:border-[#006c49] hover:bg-emerald-50/50 transition-colors font-medium text-[11px]"
                  >
                    {crop}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-500">
              <p>
                Calculations calibrated using audited post-season audits across 14 enterprise seed customers in APAC, EMEA, and the Americas.
              </p>
            </div>
          </div>

          {/* Results Display (6 cols) */}
          <div className="lg:col-span-6 bg-[#00120a] rounded-3xl p-6 sm:p-8 border border-[#0a291e] text-white shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#0a291e]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#adcebd] font-bold">
                Projected Value Creation per Season
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-[#6cf8bb]">
                FIRST SEASON ROI
              </span>
            </div>

            {/* Big Stat 1 */}
            <div className="space-y-1">
              <span className="text-xs text-zinc-400 font-mono">Working Capital Released:</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#6cf8bb] font-mono">
                ₹{estimatedCapitalRelease} Lakhs
              </div>
              <span className="text-[11px] text-zinc-400 block font-sans">
                Approx. ${(estimatedCapitalRelease * 1200).toLocaleString()} USD released through biological decay-aware MEIO safety stocks.
              </span>
            </div>

            {/* Sub Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#0a291e]">
              <div className="p-3.5 rounded-xl bg-[#00170d] border border-emerald-900/60">
                <span className="text-[10px] font-mono text-zinc-400 uppercase block">Prevented Spoilage</span>
                <span className="text-2xl font-bold font-mono text-white">₹{avoidedWriteDown}L</span>
                <span className="text-[10px] text-zinc-400 block mt-0.5">Write-down eliminated</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#00170d] border border-emerald-900/60">
                <span className="text-[10px] font-mono text-zinc-400 uppercase block">Fulfillment SLA</span>
                <span className="text-2xl font-bold font-mono text-white">+{serviceLevelBoost}%</span>
                <span className="text-[10px] text-zinc-400 block mt-0.5">On-time sowing window</span>
              </div>
            </div>

            {/* Payoff statement */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/60 to-zinc-900 border border-emerald-500/30 text-xs text-zinc-300 space-y-2 font-mono">
              <div className="flex items-center gap-2 text-[#6cf8bb] font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Estimated Payoff Timeline: &lt; 4.2 Months</span>
              </div>
              <p className="text-[11px] text-zinc-400">
                Based on your {annualVolume.toLocaleString()} MT volume, the software deployment pays for itself fourfold in the initial 180 days of Kharif or Rabi operations.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenDemo}
                className="w-full py-3.5 bg-[#6cf8bb] hover:bg-[#4edea3] text-[#002113] font-bold rounded-xl text-xs transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <span>Request Custom Executive ROI Model</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
