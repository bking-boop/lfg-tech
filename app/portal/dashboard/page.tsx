'use client';

import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  LogOut, FileText, CreditCard, AlertCircle,
  CheckCircle2, Clock, RefreshCw, ExternalLink,
} from 'lucide-react';
import type { QBOInvoice } from '@/lib/qbo';

interface SessionUser {
  id: string; email: string; name: string; company: string; qboCustomerId: string;
}

function StatusBadge({ status }: { status: QBOInvoice['status'] }) {
  const map = {
    paid: { label: 'Paid', cls: 'bg-green-500/10 text-green-400 border-green-500/20', icon: CheckCircle2 },
    open: { label: 'Open', cls: 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/20', icon: Clock },
    overdue: { label: 'Overdue', cls: 'bg-red-500/10 text-red-400 border-red-500/20', icon: AlertCircle },
  };
  const { label, cls, icon: Icon } = map[status];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${cls}`}>
      <Icon className="w-3 h-3" /> {label}
    </span>
  );
}

function DashboardContent() {
  const router = useRouter();
  const params = useSearchParams();
  const [user, setUser] = useState<SessionUser | null>(null);
  const [invoices, setInvoices] = useState<QBOInvoice[]>([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const qboStatus = params.get('qbo');

  useEffect(() => {
    // Read session from our own endpoint
    fetch('/api/auth/session')
      .then((r) => r.json())
      .then((data) => {
        if (!data.user) { router.push('/portal/login'); return; }
        setUser(data.user);
        fetchInvoices();
      })
      .catch(() => router.push('/portal/login'));
  }, []);

  const fetchInvoices = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/portal/invoices');
      if (res.status === 401) { router.push('/portal/login'); return; }
      if (!res.ok) throw new Error('Failed to load');
      const data = await res.json();
      setInvoices(data.invoices ?? []);
      setBalance(data.balance ?? 0);
    } catch {
      setError('Could not load invoices. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/portal/login');
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center py-32">
        <div className="w-8 h-8 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const overdueCount = invoices.filter((i) => i.status === 'overdue').length;

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {qboStatus === 'connected' && (
        <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" /> QuickBooks Online connected successfully.
        </div>
      )}
      {qboStatus === 'error' && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
          <AlertCircle className="w-4 h-4" /> QBO connection failed. Please contact support.
        </div>
      )}

      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-white mb-1">Welcome back, {user.name.split(' ')[0]}</h1>
          <p className="text-brand-muted text-sm">{user.company} · {user.email}</p>
        </div>
        <button onClick={handleLogout}
          className="hidden sm:flex items-center gap-1.5 text-brand-muted hover:text-white transition-colors text-sm">
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Outstanding Balance', value: `$${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, highlight: true },
          { label: 'Open Invoices', value: String(invoices.filter((i) => i.status !== 'paid').length), highlight: false },
          { label: 'Overdue', value: String(overdueCount), highlight: overdueCount > 0 },
        ].map(({ label, value, highlight }) => (
          <div key={label} className="bg-brand-card border border-brand-border rounded-xl p-5">
            <div className="text-brand-muted text-xs font-semibold uppercase tracking-wider mb-2">{label}</div>
            <div className={`text-3xl font-extrabold ${highlight ? 'text-gradient' : 'text-white'}`}>{value}</div>
          </div>
        ))}
      </div>

      {/* Invoices */}
      <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-brand-cyan" />
            <h2 className="text-white font-semibold">Invoices</h2>
          </div>
          <button onClick={fetchInvoices} className="flex items-center gap-1.5 text-brand-muted hover:text-white transition-colors text-xs">
            <RefreshCw className="w-3.5 h-3.5" /> Refresh
          </button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="py-10 text-center text-brand-muted text-sm">{error}</div>
        ) : invoices.length === 0 ? (
          <div className="py-10 text-center text-brand-muted text-sm">No invoices found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-brand-border">
                  {['Invoice #', 'Due Date', 'Amount', 'Balance Due', 'Status', 'Action'].map((h) => (
                    <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-brand-muted uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-brand-surface/50 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{inv.docNumber}</td>
                    <td className="px-6 py-4 text-brand-muted">
                      {new Date(inv.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4 text-white">${inv.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                    <td className="px-6 py-4 text-white font-semibold">${inv.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                    <td className="px-6 py-4"><StatusBadge status={inv.status} /></td>
                    <td className="px-6 py-4">
                      {inv.balance > 0 ? (
                        <a href={`/api/portal/pay?invoiceId=${inv.id}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-cyan text-brand-bg text-xs font-bold hover:bg-white transition-colors">
                          <CreditCard className="w-3.5 h-3.5" /> Pay Now
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-green-400 text-xs font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Paid
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* QBO connect */}
      <div className="mt-6 p-4 rounded-xl bg-brand-surface border border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="text-white font-semibold text-sm mb-0.5">QuickBooks Online Integration</div>
          <div className="text-brand-muted text-xs">Connect your QBO account to sync live invoice and payment data.</div>
        </div>
        <a href="/api/qbo/connect"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-card border border-brand-border text-white text-sm font-semibold hover:border-brand-cyan/50 transition-colors whitespace-nowrap">
          <ExternalLink className="w-4 h-4 text-brand-cyan" /> Connect QBO
        </a>
      </div>
    </main>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-brand-bg">
      <header className="bg-brand-surface border-b border-brand-border sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/">
            <Image src="/logo-white.png" alt="LFG Technology Consultants" width={140} height={47} className="h-8 w-auto object-contain" />
          </Link>
        </div>
      </header>
      <Suspense fallback={<div className="flex items-center justify-center py-32"><div className="w-8 h-8 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin" /></div>}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}
