import React, { useState } from 'react';
import { ScreenType } from '../types';
import { CASE_STUDY_IMAGES } from '../data/mockData';
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, Shield, Sprout, Building, Factory, Globe } from 'lucide-react';

interface SolutionsViewProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenDemo: () => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({ onNavigate, onOpenDemo }) => {
  const [selectedSolution, setSelectedSolution] = useState<number>(0);

  const solutions = [
    {
      title: 'Hybrid Field Crops (Maize, Rice, Pearl Millet)',
      tag: 'HIGH VOLUME • MULTI-ECHELON',
      desc: 'Orchestrate hundreds of thousands of bags across multi-tier dealer networks. Mitigate biological vigor decay during tropical monsoon and high relative humidity intervals.',
      metrics: [
        { val: '₹4.2 Cr', label: 'Avg Working Capital Unlock' },
        { val: '38%', label: 'Carryover Write-Down Reduction' },
        { val: '99.4%', label: 'Sowing Window Delivery SLA' }
      ],
      points: [
        'Harrington equation decay modeling integrated with real-time depot IoT humidity sensors.',
        'Dynamic monsoon arrival delay tracking with predictive variety reallocation.',
        'Multi-plant conditioning line sequencing to prevent raw cob fermentation.'
      ],
      image: CASE_STUDY_IMAGES.corn
    },
    {
      title: 'High-Value Vegetable Seeds (Tomato, Pepper, Brassica)',
      tag: 'HIGH VALUE • STRINGENT PURITY',
      desc: 'Manage high-value genetic parent lines where a single 500g pouch can be worth thousands of dollars. Enforce isolation distances and genetic purity testing with zero cross-contamination.',
      metrics: [
        { val: '99.9%', label: 'Genetic Purity Compliance' },
        { val: '4.8x', label: 'Traceability Acceleration' },
        { val: '-22%', label: 'Parent Stock Waste' }
      ],
      points: [
        'Contract grower geo-fencing and automated isolation buffer calculation.',
        'Detasseling and hand-pollination labor scheduling optimization.',
        'Direct integration with high-throughput seed testing laboratories (SeedLIMS).'
      ],
      image: CASE_STUDY_IMAGES.agronomist
    },
    {
      title: 'Commercial Seed Conditioning & Packaging Plants',
      tag: 'SCADA • AUTOMATED CHANGE-OVERS',
      desc: 'Maximize dryer and sorter line throughput during peak 60-day harvest gluts. Automatically sequence batches to minimize costly cleaning purges between varieties.',
      metrics: [
        { val: '+32%', label: 'Plant Throughput Increase' },
        { val: '-45%', label: 'Changeover Idle Downtime' },
        { val: '0', label: 'Purity Cross-Contamination Events' }
      ],
      points: [
        'Mixed Integer Linear Programming (MILP) solver for conditioning line sequencing.',
        'Moisture-gradient dryer temperature curve regulation.',
        'Automated SAP work order generation for packaging runs.'
      ],
      image: CASE_STUDY_IMAGES.conditioning
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e]">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#eaedff] via-[#faf8ff] to-[#faf8ff] border-b border-[#dae2fd] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6cf8bb]/20 border border-[#006c49]/30 text-[#005236] text-xs font-mono font-bold tracking-wide">
            <Sprout className="w-3.5 h-3.5 text-[#006c49]" />
            VERTICALIZED AGRONOMIC INTELLIGENCE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#00120a] tracking-tight font-['Plus_Jakarta_Sans'] leading-tight max-w-4xl mx-auto">
            Solutions Tailored to the Specific Biology of Your Crops
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto">
            A single supply chain algorithm cannot solve maize and brassica alike. Seed Innovation AI provides crop-specific biological kinetics, market dynamics, and regulatory rules.
          </p>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {solutions.map((sol, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedSolution(idx)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                selectedSolution === idx
                  ? 'bg-[#00120a] text-white shadow-md'
                  : 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-50'
              }`}
            >
              <span>{sol.title.split('(')[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Solution Showcase */}
        {(() => {
          const item = solutions[selectedSolution];
          return (
            <div className="bg-white rounded-3xl border border-zinc-200 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-100 text-[#005236] border border-emerald-200">
                    {item.tag}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00120a] font-['Plus_Jakarta_Sans'] mt-3">
                    {item.title}
                  </h2>
                  <p className="text-sm text-zinc-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                  {item.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <span className="text-xl sm:text-2xl font-extrabold text-[#006c49] font-mono block">
                        {m.val}
                      </span>
                      <span className="text-[10px] sm:text-xs text-zinc-500 block mt-0.5">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Points */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-700 block">
                    Enterprise Capabilities:
                  </span>
                  {item.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={onOpenDemo}
                    className="px-6 py-3 bg-[#006c49] hover:bg-[#005236] text-white font-bold rounded-xl text-xs transition-all shadow-md flex items-center gap-2"
                  >
                    <span>Schedule {item.title.split('(')[0]} Briefing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onNavigate('copilot')}
                    className="px-5 py-3 border border-zinc-300 hover:bg-zinc-100 text-zinc-800 font-semibold rounded-xl text-xs transition-all"
                  >
                    Test in AI Copilot
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-lg relative h-72 lg:h-96">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <span className="text-xs text-white font-mono bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                      Autonomous Solution Node Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};
