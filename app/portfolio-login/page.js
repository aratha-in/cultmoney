'use client';

import { useState } from 'react';
import { Shield, Lock, ArrowRight, CheckCircle2, User, KeyRound } from 'lucide-react';

export default function PortfolioLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate lookup / verification delay
    setTimeout(() => {
      setLoading(false);
      setError('Invalid client ID or credentials. If you are a new client, please contact your CultMoney advisor to activate your online portal access.');
    }, 1500);
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 bg-white text-slate-900">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-hero-gradient opacity-80 z-0"></div>
      
      <div className="max-w-md w-full relative z-10 space-y-6">
        
        {/* Glassmorphic Login Card */}
        <div className="glass-panel p-8 rounded-4xl space-y-8 bg-white/70">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-brand-gradient flex items-center justify-center mx-auto shadow-glow-green mb-4">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold font-display text-slate-900 animate-pulse">Client Portfolio Access</h1>
            <p className="text-xs text-slate-400">Secure entry to your mutual fund & wealth metrics dashboard.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                Client ID / Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-slate-800 focus:outline-none focus:border-primary text-sm placeholder-slate-300 transition-all shadow-sm"
                  placeholder="e.g. SH-4929"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                Secure Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <KeyRound className="w-4 h-4 text-slate-400" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-slate-800 focus:outline-none focus:border-primary text-sm placeholder-slate-300 transition-all shadow-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center space-x-2 text-slate-500 cursor-pointer">
                <input type="checkbox" className="rounded bg-white border-slate-200 text-primary focus:ring-0 focus:ring-offset-0" />
                <span>Remember Client ID</span>
              </label>
              <a href="#" className="text-primary hover:underline font-semibold">Forgot Credentials?</a>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-xs py-3 px-4 rounded-xl leading-relaxed shadow-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-gradient text-white font-bold py-4 rounded-xl shadow-glow-green hover:brightness-110 active:scale-95 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>{loading ? 'Verifying Client Portal...' : 'Secure Authorization'}</span>
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          {/* Security Badges */}
          <div className="border-t border-slate-100 pt-6 flex items-center justify-center space-x-6 text-[10px] text-slate-400">
            <div className="flex items-center space-x-1.5">
              <Shield className="w-3.5 h-3.5 text-primary" />
              <span>256-Bit SSL Encryption</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              <span>AMFI Certified Desk</span>
            </div>
          </div>

        </div>

        {/* Alternative AMC / Platform Portals links */}
        <div className="glass-panel p-6 rounded-3xl text-center space-y-4 bg-white/70">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">External Platform Access</h3>
          <p className="text-[10px] text-slate-400">You can also track transactions directly through official partner registries.</p>
          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href="https://www.bsestarmf.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-primary/30 rounded-xl py-2 px-3 text-[10px] font-semibold text-slate-700 transition-all shadow-sm"
            >
              BSE StarMF Login
            </a>
            <a
              href="https://www.mfuindia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-primary/30 rounded-xl py-2 px-3 text-[10px] font-semibold text-slate-700 transition-all shadow-sm"
            >
              MF Utilities Portal
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
