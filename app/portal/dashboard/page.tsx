'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  Zap, LogOut, FileText, CreditCard, AlertCircle,
  CheckCircle2, Clock, RefreshCw, ExternalLink,
} from 'lucide-react';
import type { QBOInvoice } from '@/lib/qbo';

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

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [invoices, setInvoices] = useState<QBOInvoice[]>([]);
  const [balance, setBalance] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const qboStatus = params.get('qbo');

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/portal/login');
  }, [status, router]);

  useEffect(() => {
    if (status !== 'authenticated') return;
    fetchInvoices();
  }, [status]);

  const fetchInvoices = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/portal/invoices');
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

  if (status === 'loading' || status === 'unauthenticated') {
    return (
      <div className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const user = session?.user as { name?: string; email?: string; company?: string };
  const overdueCount = invoices.filter((i) => i.status === 'overdue').length;

  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Portal header */}
      <header className="bg-brand-surface border-b border-brand-border sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-sm">
              <span className="text-brand-cyan">LFG</span>{' '}
              <span className="text-slate-300">Portal</span>
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-brand-muted text-sm hidden sm:block">
              {user?.company ?? user?.name}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: '/portal/login' })}
              className="flex items-center gap-1.5 text-brand-muted hover:text-white transition-colors text-sm"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* QBO connection banner */}
        {qboStatus === 'connected' && (
          <div className="mb-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> QuickBooks Online connected successfully.
          </div>
        )}
        {qboStatus === 'error' && (
          <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
            <AlertCircle className="w-4 h-4" /> QBO connection failed. Please try again or contact support.
          </div>
        )}

        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold text-white mb-1">
            Welcome back, {user?.name?.split(' ')[0]}
          </h1>
          <p className="text-brand-muted text-sm">{user?.company}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-brand-card border border-brand-border rounded-xl p-5">
            <div className="text-brand-muted text-xs font-semibold uppercase tracking-wider mb-2">
              Outstanding Balance
            </div>
            <div className="text-3xl font-extrabold text-gradient">
              ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </div>
          </div>
          <div className="bg-brand-card border border-brand-border rounded-xl p-5">
            <div className="text-brand-muted text-xs font-semibold uppercase tracking-wider mb-2">
              Open Invoices
            </div>
            <div className="text-3xl font-extrabold text-white">
              {invoices.filter((i) => i.status !== 'paid').length}
            </div>
          </div>
          <div className="bg-brand-card border border-brand-border rounded-xl p-5">
            <div className="text-brand-muted text-xs font-semibold uppercase tracking-wider mb-2">
              Overdue
            </div>
            <div className={`text-3xl font-extrabold ${overdueCount > 0 ? 'text-red-400' : 'text-white'}`}>
              {overdueCount}
            </div>
          </div>
        </div>

        {/* Invoices table */}
        <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-cyan" />
              <h2 className="text-white font-semibold">Invoices</h2>
            </div>
            <button
              onClick={fetchInvoices}
              className="flex items-center gap-1.5 text-brand-muted hover:text-white transition-colors text-xs"
            >
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
                      <th
                        key={h}
                        className="px-6 py-3 text-left text-xs font-semibold text-brand-muted uppercase tracking-wider"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-border">
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-brand-surface/50 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{inv.docNumber}</td>
                      <td className="px-6 py-4 text-brand-muted">
                        {new Date(inv.dueDate).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric',
                        })}
                      </td>
                      <td className="px-6 py-4 text-white">
                        ${inv.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4 text-white font-semibold">
                        ${inv.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={inv.status} />
                      </td>
                      <td className="px-6 py-4">
                        {inv.balance > 0 ? (
                          <a
                            href={`/api/portal/pay?invoiceId=${inv.id}`}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-cyan text-brand-bg text-xs font-bold hover:bg-white transition-colors"
                          >
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

        {/* QBO connect (admin) */}
        <div className="mt-6 p-4 rounded-xl bg-brand-surface border border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-white font-semibold text-sm mb-0.5">QuickBooks Online Integration</div>
            <div className="text-brand-muted text-xs">
              Connect your QBO account to sync live invoice and payment data.
            </div>
          </div>
          <a
            href="/api/qbo/connect"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-card border border-brand-border text-white text-sm font-semibold hover:border-brand-cyan/50 transition-colors whitespace-nowrap"
          >
            <ExternalLink className="w-4 h-4 text-brand-cyan" />
            Connect QBO
          </a>
        </div>
      </main>
    </div>
  );
}
