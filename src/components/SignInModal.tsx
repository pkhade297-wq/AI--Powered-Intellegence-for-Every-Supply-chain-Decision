import React, { useState } from 'react';
import { USER_AVATAR } from '../data/mockData';
import { X, Lock, ShieldCheck, ArrowRight, CheckCircle, Eye, EyeOff, ShieldAlert, UserCheck } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (email: string, isAdmin: boolean) => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [authMode, setAuthMode] = useState<'admin' | 'sso'>('admin');
  const [email, setEmail] = useState('pkhade297@gmail.com');
  const [password, setPassword] = useState('pwk@123456');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);

      if (authMode === 'admin') {
        if (password !== 'pwk@123456') {
          setErrorMessage('Invalid credentials. The admin password is pwk@123456');
          return;
        }
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        if (onLoginSuccess) {
          onLoginSuccess(email, authMode === 'admin');
        }
        onClose();
      }, 1000);
    }, 600);
  };

  const autofillAdmin = () => {
    setEmail('pkhade297@gmail.com');
    setPassword('pwk@123456');
    setErrorMessage(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
      <div className="relative w-full max-w-md bg-[#faf8ff] rounded-2xl shadow-2xl border border-[#dae2fd] overflow-hidden">
        {/* Top brand decoration gradient */}
        <div className="h-2 bg-gradient-to-r from-[#006c49] via-[#6cf8bb] to-[#00120a]" />

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full border-2 border-emerald-500 overflow-hidden shadow-sm flex-shrink-0">
                <img src={USER_AVATAR} alt="Farmer Profile" className="w-full h-full object-cover" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#6cf8bb] border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                  Seed Innovation AI Portal
                </h3>
                <p className="text-xs text-zinc-500 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Corporate & Admin Access
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="mt-4 grid grid-cols-2 p-1 bg-zinc-200/70 rounded-xl text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                setAuthMode('admin');
                setEmail('pkhade297@gmail.com');
                setPassword('pwk@123456');
                setErrorMessage(null);
              }}
              className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                authMode === 'admin'
                  ? 'bg-white text-[#005236] shadow-xs font-bold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <Lock className="w-3.5 h-3.5 text-[#006c49]" />
              <span>Admin Login</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setAuthMode('sso');
                setErrorMessage(null);
              }}
              className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                authMode === 'sso'
                  ? 'bg-white text-zinc-900 shadow-xs font-bold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-zinc-500" />
              <span>Enterprise SSO</span>
            </button>
          </div>

          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                {authMode === 'admin' ? 'Administrator Authenticated' : 'Session Authenticated'}
              </h4>
              <p className="text-xs text-zinc-600 font-mono">
                Welcome, {email} • Full Access Granted
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              
              {/* Error Callout */}
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 flex-shrink-0 text-rose-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Corporate Email */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Corporate Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="pkhade297@gmail.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 font-mono text-zinc-900"
                  />
                </div>
                <div className="flex items-center justify-between mt-1 text-[11px] text-zinc-500">
                  <span>Corporate Admin Account</span>
                  <button
                    type="button"
                    onClick={autofillAdmin}
                    className="text-[#006c49] font-medium hover:underline cursor-pointer"
                  >
                    Reset to pkhade297@gmail.com
                  </button>
                </div>
              </div>

              {/* Admin Password Field */}
              {authMode === 'admin' && (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                      Admin Password
                    </label>
                    <span className="text-[11px] font-mono text-[#006c49] font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      pwk@123456
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="pwk@123456"
                      className="w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 font-mono text-zinc-900 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#006c49] hover:bg-[#005236] text-white font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Authenticating Admin Credentials...
                    </span>
                  ) : (
                    <>
                      <span>{authMode === 'admin' ? 'Log In as Administrator' : 'Continue with Corporate SSO'}</span>
                      <ArrowRight className="w-4 h-4 text-[#6cf8bb]" />
                    </>
                  )}
                </button>
              </div>

              {/* Quick credential fill shortcut */}
              {authMode === 'admin' && (
                <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-100 flex items-center justify-between text-xs">
                  <div className="text-zinc-700">
                    <span className="font-semibold text-emerald-950 block">Quick Admin Login</span>
                    <span className="text-[11px] text-zinc-500 font-mono">pkhade297@gmail.com / pwk@123456</span>
                  </div>
                  <button
                    type="button"
                    onClick={autofillAdmin}
                    className="px-2.5 py-1 bg-[#006c49] text-white rounded-lg text-xs font-semibold hover:bg-[#005236] transition-colors"
                  >
                    Autofill
                  </button>
                </div>
              )}

              {/* Security info */}
              <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero-Germplasm Retention Protocol • TLS 1.3 Encryption</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
