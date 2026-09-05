import React, { useState } from 'react';
import { LOGO_URL } from '../data/mockData';
import { X, Lock, ShieldCheck, ArrowRight, Building, Key, CheckCircle } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess?: (email: string) => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState('agronomy.lead@terraseed.global');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        if (onLoginSuccess) onLoginSuccess(email);
        onClose();
      }, 1000);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in">
      <div className="relative w-full max-w-md bg-[#faf8ff] rounded-2xl shadow-2xl border border-[#dae2fd] overflow-hidden">
        {/* Header decoration */}
        <div className="h-2 bg-gradient-to-r from-[#006c49] via-[#6cf8bb] to-[#00120a]" />

        <div className="p-6">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00120a] p-1.5 border border-emerald-800">
                <img src={LOGO_URL} alt="SeedPulse" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                  SeedPulse Enterprise Portal
                </h3>
                <p className="text-xs text-zinc-500 font-mono">SSO / SAML 2.0 Auth</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-zinc-900 font-['Plus_Jakarta_Sans']">
                Session Authenticated
              </h4>
              <p className="text-xs text-zinc-600">Redirecting to enterprise supply chain workspace...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Corporate Work Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@seedenterprise.com"
                    className="w-full px-3.5 py-2.5 bg-white border border-zinc-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 font-mono text-zinc-900"
                  />
                </div>
                <p className="text-[11px] text-zinc-500 mt-1">
                  Single Sign-On configured with Okta, Microsoft Entra ID & PingIdentity.
                </p>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#006c49] hover:bg-[#005236] text-white font-semibold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Validating Identity...
                    </span>
                  ) : (
                    <>
                      <span>Continue with Enterprise SSO</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-[#faf8ff] px-2 text-zinc-400 font-mono">Or quick sandbox login</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setEmail('vp.supplychain@cropgenetix.com');
                    handleSubmit({ preventDefault: () => {} } as any);
                  }}
                  className="px-3 py-2 border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 text-xs font-medium rounded-lg flex items-center justify-center gap-1.5"
                >
                  <Building className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Seed Executive</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEmail('dr.elena.vance@agri-alliance.org');
                    handleSubmit({ preventDefault: () => {} } as any);
                  }}
                  className="px-3 py-2 border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 text-xs font-medium rounded-lg flex items-center justify-center gap-1.5"
                >
                  <Key className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Plant Director</span>
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-zinc-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Germplasm Data Retention • FIPS 140-2</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
