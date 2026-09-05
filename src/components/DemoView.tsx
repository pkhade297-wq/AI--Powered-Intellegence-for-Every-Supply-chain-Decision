import React, { useState } from 'react';
import { ScreenType } from '../types';
import { ELENA_VANCE_AVATAR } from '../data/mockData';
import {
  Sparkles,
  Calendar,
  Clock,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Building,
  User,
  Mail,
  Briefcase,
  Layers,
  Database,
  Check
} from 'lucide-react';

interface DemoViewProps {
  onNavigate: (screen: ScreenType) => void;
}

export const DemoView: React.FC<DemoViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    jobTitle: '',
    company: '',
    volume: '25,000 - 100,000 MT',
    objective: 'AI Demand Forecasting',
    erp: 'SAP S/4HANA',
    bottlenecks: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e]">
      {/* Top Banner Tag */}
      <div className="bg-[#00120a] border-b border-[#0a291e] px-4 sm:px-6 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-[#adcebd]">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#6cf8bb] animate-pulse"></span>
              ENTERPRISE BRIEFING HUB
            </span>
            <span className="text-[#0a291e]">|</span>
            <span className="text-zinc-400">Q2/Q3 2025 ALLOCATION SLOTS LIVE</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px]">
            <span className="text-emerald-400 font-mono flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> NDA & Zero-Germplasm Protected
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6cf8bb]/20 border border-[#006c49]/30 text-[#005236] text-xs font-mono font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#006c49]" />
            EXECUTIVE DEMO & BRIEFING
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#00120a] tracking-tight font-['Plus_Jakarta_Sans'] leading-tight">
            Experience the Future of Seed Supply Chain Intelligence
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Schedule a tailored 30-minute demonstration with our senior agronomic supply chain architects. See how SeedPulse AI eliminates biological write-downs and accelerates fulfillment across your enterprise.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: What to Expect + Testimonial + Proof (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* What to Expect Box */}
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm space-y-5">
              <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-zinc-800 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#006c49]" />
                What to expect in your 30-minute walkthrough
              </h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-emerald-50 text-[#006c49] font-mono font-bold flex items-center justify-center flex-shrink-0 text-xs border border-emerald-100">
                    01
                  </span>
                  <div>
                    <strong className="text-zinc-900 block text-sm font-['Plus_Jakarta_Sans']">
                      Live Demonstration Configured for Your Crop Profile
                    </strong>
                    <span className="text-zinc-600 mt-0.5 block leading-relaxed">
                      Exploration of the 9 modules tailored to your specific seed portfolio (field crops, vegetables, oilseeds, or breeding stock).
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-emerald-50 text-[#006c49] font-mono font-bold flex items-center justify-center flex-shrink-0 text-xs border border-emerald-100">
                    02
                  </span>
                  <div>
                    <strong className="text-zinc-900 block text-sm font-['Plus_Jakarta_Sans']">
                      AI Demand Forecasting & Weather Shock Simulation
                    </strong>
                    <span className="text-zinc-600 mt-0.5 block leading-relaxed">
                      Hands-on walkthrough of our Bayesian forecasting engine responding to delayed monsoon, heatwave, or pest scenarios in real time.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-emerald-50 text-[#006c49] font-mono font-bold flex items-center justify-center flex-shrink-0 text-xs border border-emerald-100">
                    03
                  </span>
                  <div>
                    <strong className="text-zinc-900 block text-sm font-['Plus_Jakarta_Sans']">
                      Custom ROI & Inventory Reduction Model
                    </strong>
                    <span className="text-zinc-600 mt-0.5 block leading-relaxed">
                      A personalized estimate of working capital unlock, carryover write-down avoidance, and fulfillment acceleration for your annual MT volumes.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-emerald-50 text-[#006c49] font-mono font-bold flex items-center justify-center flex-shrink-0 text-xs border border-emerald-100">
                    04
                  </span>
                  <div>
                    <strong className="text-zinc-900 block text-sm font-['Plus_Jakarta_Sans']">
                      Architecture & ERP Integration Blueprint
                    </strong>
                    <span className="text-zinc-600 mt-0.5 block leading-relaxed">
                      Technical review of pre-built connectors for SAP, Oracle, Microsoft Dynamics, and SeedLIMS with enterprise IT requirements.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Typical Capital Release Card */}
            <div className="bg-[#00120a] rounded-2xl p-6 border border-[#0a291e] text-white shadow-xl space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>TYPICAL WORKING CAPITAL RELEASE</span>
                <span className="text-[#6cf8bb] font-bold">15,000+ MT FLEET</span>
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#6cf8bb] font-mono">$3.4M - $8.2M</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Average first-season capital release realized through biological decay-informed MEIO safety stock rebalancing.
              </p>

              {/* Sparkline display */}
              <div className="pt-2 border-t border-[#0a291e] flex items-center justify-between text-xs font-mono">
                <span className="flex items-center gap-1 text-emerald-400 font-bold">
                  <TrendingUp className="w-3.5 h-3.5" /> +38% Capital Liquidity
                </span>
                <span className="text-zinc-400">
                  -28% Dead Stock Write-Down
                </span>
              </div>
            </div>

            {/* Elena Vance Testimonial Card */}
            <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm space-y-4">
              <p className="text-xs text-zinc-700 italic leading-relaxed">
                "SeedPulse AI cut our carryover seed write-downs by 42% in our very first Kharif season. The multi-echelon inventory intelligence alone paid for the enterprise deployment four times over within six months."
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-zinc-100">
                <img
                  src={ELENA_VANCE_AVATAR}
                  alt="Dr. Elena Vance"
                  className="w-11 h-11 rounded-full object-cover border border-emerald-200 shadow-sm"
                />
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                    Dr. Elena Vance
                  </h4>
                  <p className="text-[11px] text-zinc-500">Chief Supply Chain Officer, AgroGenetics Global</p>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#006c49] font-semibold mt-0.5">
                    <CheckCircle2 className="w-3 h-3" /> Verified Enterprise Deployment
                  </span>
                </div>
              </div>
            </div>

            {/* Enterprise Security Badges */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-500 font-mono space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-800 font-semibold">
                <Lock className="w-3.5 h-3.5 text-[#006c49]" />
                <span>Enterprise Security & Data Isolation</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-normal">
                Enterprise Grade • AES-256 Encryption • Role-Based RBAC • Zero Data Retention on Germplasm Models
              </p>
            </div>

          </div>

          {/* Right Column: Schedule Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200 shadow-xl relative overflow-hidden">
              
              {/* Header decoration line */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#006c49] via-[#6cf8bb] to-[#00120a]" />

              {isSubmitted ? (
                <div className="py-10 text-center space-y-6 animate-in fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-[#6cf8bb]/30 text-[#006c49] mx-auto flex items-center justify-center border border-[#006c49]/30">
                    <CheckCircle2 className="w-8 h-8 text-[#006c49]" />
                  </div>

                  <div className="space-y-2 max-w-lg mx-auto">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#005236] text-xs font-mono font-bold">
                      BRIEFING CONFIRMED • PRIORITY #SP-8942
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#00120a] font-['Plus_Jakarta_Sans']">
                      You're in the Pipeline, {formData.fullName || 'Executive Partner'}!
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      Our Senior Agronomic Supply Chain Solutions team has received your briefing request for <strong>{formData.company || 'your organization'}</strong> ({formData.volume}). We have assigned an enterprise solution architect to review your requirements.
                    </p>
                  </div>

                  {/* Roadmap next steps */}
                  <div className="max-w-md mx-auto p-5 rounded-2xl bg-zinc-50 border border-zinc-200 text-left space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-800 block">
                      Next Steps Before Your Session:
                    </span>
                    <div className="space-y-2 text-xs text-zinc-700">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Calendar invite with Google Meet / Teams link dispatched to <strong>{formData.email || 'your email'}</strong>.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Mutual Zero-Germplasm Non-Disclosure Agreement (NDA) packet attached.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Pre-configured simulation workspace with crop parameters initialized.</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      onClick={() => onNavigate('copilot')}
                      className="px-6 py-3 bg-[#006c49] hover:bg-[#005236] text-white font-bold rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span>Explore Live Copilot Workspace Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-3 border border-zinc-300 hover:bg-zinc-100 text-zinc-700 font-medium rounded-xl text-xs transition-colors"
                    >
                      Edit Booking Details
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                      Schedule Your Tailored Session
                    </h2>
                    <p className="text-xs text-zinc-500 mt-1">
                      Fill in your details below and our agronomic intelligence team will prepare a customized briefing.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Row 1: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Dr. Rajesh Sharma"
                            className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006c49] focus:bg-white text-zinc-900 transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                          Business Email *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="rajesh@seedcorp.com"
                            className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006c49] focus:bg-white text-zinc-900 transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Title & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                          Job Title / Role *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                          placeholder="VP Supply Chain / Head of Operations"
                          className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006c49] focus:bg-white text-zinc-900 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                          Company Name & Website *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="e.g. TerraSeed Global (terraseed.com)"
                          className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006c49] focus:bg-white text-zinc-900 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Enterprise Scale & Primary Objective */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                          Enterprise Scale (Annual Seed Volume)
                        </label>
                        <select
                          value={formData.volume}
                          onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006c49] focus:bg-white text-zinc-900 transition-all"
                        >
                          <option value="< 5,000 MT">&lt; 5,000 MT / Year</option>
                          <option value="5,000 - 25,000 MT">5,000 - 25,000 MT / Year</option>
                          <option value="25,000 - 100,000 MT">25,000 - 100,000 MT / Year</option>
                          <option value="100,000+ MT Enterprise Fleet">100,000+ MT Global Fleet</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                          Primary Objective
                        </label>
                        <select
                          value={formData.objective}
                          onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006c49] focus:bg-white text-zinc-900 transition-all"
                        >
                          <option value="AI Demand Forecasting">AI Demand Forecasting & Weather Shocks</option>
                          <option value="Multi-Echelon Inventory Optimization">Multi-Echelon Inventory Optimization (MEIO)</option>
                          <option value="Production Planning & Grower Allocation">Production Planning & Grower Allocation</option>
                          <option value="Processing Plant SCADA & Conditioning">Processing Plant SCADA & Conditioning</option>
                          <option value="Supply Chain Control Tower & Telemetry">Supply Chain Control Tower & Telemetry</option>
                          <option value="End-to-End Autonomous Platform">End-to-End Autonomous Platform</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: ERP Stack */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                        Current ERP / Core Planning Stack
                      </label>
                      <select
                        value={formData.erp}
                        onChange={(e) => setFormData({ ...formData, erp: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006c49] focus:bg-white text-zinc-900 transition-all"
                      >
                        <option value="SAP S/4HANA">SAP S/4HANA</option>
                        <option value="SAP ECC 6.0">SAP ECC 6.0</option>
                        <option value="Oracle Cloud SCM / NetSuite">Oracle Cloud SCM / NetSuite</option>
                        <option value="Microsoft Dynamics 365">Microsoft Dynamics 365</option>
                        <option value="Custom In-House / Excel Heavy">Custom In-House / Excel Legacy</option>
                        <option value="Other">Other ERP</option>
                      </select>
                    </div>

                    {/* Row 5: Specific Objectives Textarea */}
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                        Specific Objectives or Current Bottlenecks (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.bottlenecks}
                        onChange={(e) => setFormData({ ...formData, bottlenecks: e.target.value })}
                        placeholder="e.g. We experience high carryover seed write-downs in hybrid corn due to unexpected late monsoon rains in western regions..."
                        className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#006c49] focus:bg-white text-zinc-900 transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 bg-[#006c49] hover:bg-[#005236] text-white font-extrabold rounded-xl text-sm transition-all shadow-lg hover:shadow-emerald-900/20 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>Confirming Enterprise Briefing Slot...</span>
                          </span>
                        ) : (
                          <>
                            <Lock className="w-4 h-4 text-[#6cf8bb]" />
                            <span>Confirm & Schedule Enterprise Briefing</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-center text-[11px] text-zinc-500 pt-1 font-mono">
                      Strict NDA Enforced • Zero-Knowledge Isolation • Direct Access to Senior Agronomic Architects
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Client Logos Strip */}
        <div className="mt-16 pt-10 border-t border-zinc-200 text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold block mb-6">
            Trusted by leading seed breeders and agricultural conglomerates worldwide
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all">
            {['CropGenetix Bio', 'Agri-Alliance Global', 'TerraSeed Hybrid', 'BioVanguard Seeds', 'Agresco International', 'Kharif Organics'].map((brand, i) => (
              <span key={i} className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg text-zinc-800 tracking-tight">
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
