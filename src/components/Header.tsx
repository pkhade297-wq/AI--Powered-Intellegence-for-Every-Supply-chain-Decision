import React, { useState, useRef, useEffect } from 'react';
import { ScreenType } from '../types';
import { LOGO_URL, USER_AVATAR } from '../data/mockData';
import { Menu, X, ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, LogOut, Lock, User } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenSignIn: () => void;
  onOpenDemo: () => void;
  userEmail?: string | null;
  isAdmin?: boolean;
  onSignOut?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenSignIn,
  onOpenDemo,
  userEmail = 'pkhade297@gmail.com',
  isAdmin = true,
  onSignOut,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
            SEED INNOVATION NEURAL CORE v4.2
          </span>
          <span className="text-[#729283]">|</span>
          <span className="text-zinc-400">Latency: <strong className="text-white font-mono">28ms</strong></span>
          <span className="text-[#729283]">|</span>
          <span className="text-zinc-400">Active Nodes: <strong className="text-[#6cf8bb] font-mono">2,841</strong></span>
          <span className="text-[#729283]">|</span>
          <span className="text-zinc-400">Admin Session: <strong className="text-[#6cf8bb] font-mono">pkhade297@gmail.com</strong></span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1 text-[#6cf8bb]">
            <CheckCircle2 className="w-3.5 h-3.5" /> SOC2 Type II Certified
          </span>
          <span className="text-[#729283]">|</span>
          <button 
            onClick={() => onNavigate('copilot')}
            className="hover:text-white transition-colors flex items-center gap-1 text-emerald-400 cursor-pointer"
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
                alt="Seed Innovation AI" 
                className="w-full h-full object-contain filter drop-shadow"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg sm:text-xl text-[#00120a] tracking-tight leading-none">
                Seed Innovation <span className="text-[#006c49]">AI</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                Seed Supply Chain Intelligence
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentScreen === item.screen;
              return (
                <button
                  key={item.screen}
                  onClick={() => onNavigate(item.screen)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all relative flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'text-[#005236] font-bold bg-[#eaedff]/70'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-[#eaedff]/40'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#6cf8bb]/30 text-[#005236] font-bold">
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
            {isAdmin ? (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-mono text-[#005236] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>ADMIN ACTIVE</span>
              </div>
            ) : (
              <button
                onClick={onOpenSignIn}
                className="px-3 py-2 text-sm font-medium text-zinc-700 hover:text-black rounded-lg hover:bg-[#eaedff] transition-colors cursor-pointer"
              >
                Sign In
              </button>
            )}

            <button
              onClick={onOpenDemo}
              className={`px-4 py-2 text-sm font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer ${
                currentScreen === 'demo'
                  ? 'bg-[#00120a] text-white ring-2 ring-[#006c49]'
                  : 'bg-[#006c49] hover:bg-[#005236] text-white shadow-emerald-900/10 hover:shadow-md'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#6cf8bb]" />
              <span>Book a Demo</span>
            </button>

            <div className="h-5 w-px bg-zinc-200 ml-1 mr-1" />

            {/* Profile Avatar & Interactive Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div 
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                title={isAdmin ? `Corporate Admin: ${userEmail || 'pkhade297@gmail.com'}` : "Farmer & Grower Account Profile"}
                className="relative w-9 h-9 rounded-full border-2 border-emerald-500 overflow-hidden cursor-pointer hover:ring-2 hover:ring-emerald-300 hover:scale-105 transition-all flex-shrink-0 shadow-xs"
              >
                <img 
                  src={USER_AVATAR} 
                  alt="Farmer Profile" 
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#6cf8bb] border-2 border-white rounded-full"></span>
              </div>

              {/* Profile Dropdown Card */}
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-zinc-200 p-4 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center gap-3 pb-3 border-b border-zinc-100">
                    <div className="w-11 h-11 rounded-full border-2 border-emerald-500 overflow-hidden flex-shrink-0">
                      <img src={USER_AVATAR} alt="Farmer Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-bold text-zinc-900 font-['Plus_Jakarta_Sans'] truncate">
                          Admin User
                        </h4>
                        <span className="px-1.5 py-0.2 bg-emerald-100 text-[#005236] text-[10px] font-mono font-bold rounded">
                          ADMIN
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600 font-mono truncate">
                        {userEmail || 'pkhade297@gmail.com'}
                      </p>
                    </div>
                  </div>

                  <div className="py-2.5 space-y-1 text-xs">
                    <div className="px-2 py-1.5 rounded-lg bg-zinc-50 flex items-center justify-between text-zinc-600 font-mono">
                      <span>Access Level</span>
                      <strong className="text-emerald-700 font-bold">Full Enterprise Admin</strong>
                    </div>
                    <div className="px-2 py-1.5 rounded-lg bg-zinc-50 flex items-center justify-between text-zinc-600 font-mono">
                      <span>Corporate Email</span>
                      <strong className="text-zinc-900 font-semibold truncate ml-2">pkhade297@gmail.com</strong>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-zinc-100 space-y-1.5">
                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        onOpenSignIn();
                      }}
                      className="w-full py-2 px-3 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Lock className="w-3.5 h-3.5 text-[#006c49]" />
                      <span>Admin Credentials / Re-login</span>
                    </button>

                    <button
                      onClick={() => {
                        setProfileDropdownOpen(false);
                        onNavigate('copilot');
                      }}
                      className="w-full py-2 px-3 text-xs font-semibold text-[#006c49] hover:bg-emerald-50 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Open AI Copilot Console</span>
                    </button>

                    {onSignOut && (
                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onSignOut();
                        }}
                        className="w-full py-2 px-3 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out of Session</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
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
              className="w-full py-2.5 text-center text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded-lg flex items-center justify-center gap-2.5 transition-colors"
            >
              <img
                src={USER_AVATAR}
                alt="Farmer"
                className="w-6 h-6 rounded-full object-cover border border-emerald-500 shadow-2xs"
              />
              <div className="text-left">
                <div className="font-semibold text-xs text-zinc-900">Admin: pkhade297@gmail.com</div>
                <div className="text-[10px] text-zinc-500 font-mono">Click to Manage / Re-login</div>
              </div>
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
