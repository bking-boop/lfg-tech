'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Zap, Eye, EyeOff, LogIn } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const callbackUrl = params.get('callbackUrl') ?? '/portal/dashboard';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    setLoading(false);
    if (res?.ok) {
      router.push(callbackUrl);
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg grid-pattern flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl">
            <span className="text-brand-cyan">LFG</span>{' '}
            <span className="text-slate-200">Technology</span>
          </span>
        </Link>

        <div className="bg-brand-card border border-brand-border rounded-2xl p-8 glow-cyan">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-extrabold text-white mb-1">Client Portal</h1>
            <p className="text-brand-muted text-sm">Sign in to view invoices and manage payments</p>
          </div>

          {/* Demo hint */}
          <div className="mb-6 p-3 rounded-lg bg-brand-surface border border-brand-border text-xs text-brand-muted">
            <span className="text-brand-cyan font-semibold">Demo: </span>
            demo@lfgtech.com / demo1234
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-brand-muted mb-1.5 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-2.5 text-white text-sm placeholder-brand-muted focus:outline-none focus:border-brand-cyan/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-brand-muted mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-2.5 pr-10 text-white text-sm placeholder-brand-muted focus:outline-none focus:border-brand-cyan/60 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted hover:text-white transition-colors"
                >
                  {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-cyan text-brand-bg font-bold text-sm hover:bg-white transition-colors disabled:opacity-60 mt-2"
            >
              {loading ? 'Signing in…' : 'Sign In'}
              {!loading && <LogIn className="w-4 h-4" />}
            </button>
          </form>

          <div className="mt-6 text-center text-xs text-brand-muted">
            Need access?{' '}
            <Link href="/contact" className="text-brand-cyan hover:text-white transition-colors">
              Contact your account manager
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-brand-muted mt-6">
          <Link href="/" className="hover:text-white transition-colors">← Back to LFG Technology</Link>
        </p>
      </div>
    </div>
  );
}
