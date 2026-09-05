import React, { useState } from 'react';
import { ScreenType } from '../types';
import { LOGO_URL, USER_AVATAR } from '../data/mockData';
import { Menu, X, ArrowUpRight, Sparkles, Network, Terminal, CheckCircle2, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenSignIn: () => void;
  onOpenDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenSignIn,
  onOpenDemo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  const navItems: { label: string; screen: ScreenType; icon?: any; badge?: string }[] = [
    { label: 'Platform', screen: 'platform' },
    { label: 'Architecture', screen: 'architecture', badge: 'v4.2' },
    { label: 'AI Copilot', screen: 'copilot', badge: 'Live AI' },
    { label: 'Solutions', screen: 'solutions' },
    { label: 'Use Cases', screen: 'use-cases' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#dae2fd]/60 bg-[#faf8ff]/85 backdrop-blur-md">
      {/* Micro Status Bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 bg-[#00120a] text-xs text-[#adcebd] font-mono border-b border-[#0a291e]">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-white font-medium">
            <span className="w-2 h-2 rounded-full bg-[#6cf8bb] animate-pulse"></span>
            SEEDPULSE NEURAL CORE v4.2
          </span>
          <span className="text-[#729283]">|</span>
          <span className="text-zinc-400">Latency: <strong className="text-white font-mono">28ms</strong></span>
          <span className="text-[#729283]">|</span>
          <span className="text-zinc-400">Active Nodes: <strong className="text-[#6cf8bb] font-mono">2,841</strong></span>
          <span className="text-[#729283]">|</span>
          <span className="text-zinc-400">Biological Telemetry: <strong className="text-white font-mono">ONLINE</strong></span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1 text-[#6cf8bb]">
            <CheckCircle2 className="w-3.5 h-3.5" /> SOC2 Type II Certified
          </span>
          <span className="text-[#729283]">|</span>
          <button 
            onClick={() => onNavigate('copilot')}
            className="hover:text-white transition-colors flex items-center gap-1 text-emerald-400"
          >
            Launch Neural Copilot <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Brand */}
          <div 
            onClick={() => onNavigate('platform')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-9 h-9 rounded-xl bg-[#00120a] flex items-center justify-center p-1.5 shadow-sm border border-[#0a291e] group-hover:border-[#006c49] transition-all">
              <img 
                src={LOGO_URL} 
                alt="SeedPulse AI" 
                className="w-full h-full object-contain filter drop-shadow"
                onError={(e) => {
                  // fallback icon if needed
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-xl tracking-tight text-[#00120a]">
                  SeedPulse<span className="text-[#006c49]">AI</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono uppercase font-semibold bg-[#6cf8bb]/30 text-[#005236] border border-[#006c49]/20">
                  Enterprise
                </span>
              </div>
              <span className="text-[11px] text-zinc-500 font-sans -mt-0.5 hidden sm:block">
                Seed Supply Chain Intelligence
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentScreen === item.screen;
              return (
                <button
                  key={item.screen}
                  onClick={() => onNavigate(item.screen)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all relative flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#00120a] bg-[#eaedff] font-semibold shadow-xs'
                      : 'text-zinc-600 hover:text-[#00120a] hover:bg-[#f2f3ff]'
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-semibold ${
                      isActive 
                        ? 'bg-[#006c49] text-white' 
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#006c49] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSignIn}
              className="px-3 py-2 text-sm font-medium text-zinc-700 hover:text-black rounded-lg hover:bg-[#eaedff] transition-colors"
            >
              Sign In
            </button>

            <button
              onClick={onOpenDemo}
              className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1.5 ${
                currentScreen === 'demo'
                  ? 'bg-[#00120a] text-white ring-2 ring-[#006c49]'
                  : 'bg-[#006c49] hover:bg-[#005236] text-white shadow-emerald-900/10 hover:shadow-md'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#6cf8bb]" />
              <span>Book a Demo</span>
            </button>

            <div className="h-5 w-px bg-zinc-200 ml-1 mr-1" />

            <div 
              onClick={onOpenSignIn}
              title="Enterprise Account Profile"
              className="w-8 h-8 rounded-full border border-emerald-300 overflow-hidden cursor-pointer hover:ring-2 hover:ring-emerald-400 transition-all flex-shrink-0"
            >
              <img 
                src={USER_AVATAR} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDemo}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[#006c49] text-white flex items-center gap-1"
            >
              <span>Demo</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-600 hover:bg-zinc-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#dae2fd] bg-[#faf8ff] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.screen}
                onClick={() => {
                  onNavigate(item.screen);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                  currentScreen === item.screen
                    ? 'bg-[#eaedff] text-[#00120a] font-semibold'
                    : 'text-zinc-600 hover:bg-zinc-100'
                }`}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#6cf8bb]/40 text-[#005236] font-semibold">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-zinc-200 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenSignIn();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-sm font-medium text-zinc-700 bg-zinc-100 rounded-lg"
            >
              Sign In to Enterprise Portal
            </button>
            <button
              onClick={() => {
                onOpenDemo();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#006c49] rounded-lg shadow-sm"
            >
              Schedule Tailored Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
