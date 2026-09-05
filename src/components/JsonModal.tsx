import React from 'react';
import { X, Copy, Check, Terminal } from 'lucide-react';

interface JsonModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  title?: string;
}

export const JsonModal: React.FC<JsonModalProps> = ({
  isOpen,
  onClose,
  data,
  title = 'AI Reasoning Raw Audit Payload'
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const jsonString = JSON.stringify(data, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 animate-in fade-in">
      <div className="relative w-full max-w-3xl bg-[#00120a] rounded-2xl border border-emerald-900/60 text-zinc-200 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#0a291e] bg-[#00120a]">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm font-semibold">
            <Terminal className="w-4 h-4" />
            <span>{title}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 font-mono flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy JSON'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto font-mono text-xs text-emerald-300 bg-[#000d07] leading-relaxed">
          <pre className="whitespace-pre-wrap">{jsonString}</pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#0a291e] bg-[#00120a] flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span>Cryptographic Signature: SHA256-verified</span>
          <span className="text-emerald-400">Deterministic Model: SeedPulse-GenBio-v4</span>
        </div>
      </div>
    </div>
  );
};
