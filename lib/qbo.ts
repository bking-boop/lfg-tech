/**
 * QuickBooks Online integration module.
 *
 * Setup steps:
 *  1. Create an app at https://developer.intuit.com
 *  2. Add Client ID and Secret to .env.local
 *  3. Set NEXTAUTH_URL in .env.local to your domain
 *  4. Run the OAuth flow: GET /api/qbo/connect
 *  5. QBO will redirect to /api/qbo/callback — tokens are stored in session/DB
 *
 * For production: store tokens in your database per-company, refresh automatically.
 */

import OAuthClient from 'intuit-oauth';

export function createOAuthClient() {
  return new OAuthClient({
    clientId: process.env.QBO_CLIENT_ID!,
    clientSecret: process.env.QBO_CLIENT_SECRET!,
    environment: (process.env.QBO_ENVIRONMENT as 'sandbox' | 'production') ?? 'sandbox',
    redirectUri: `${process.env.NEXTAUTH_URL}/api/qbo/callback`,
    logging: process.env.NODE_ENV === 'development',
  });
}

// In-memory token store — replace with database in production
let _tokenStore: {
  access_token: string;
  refresh_token: string;
  realmId: string;
  expires_at: number;
} | null = null;

export function saveTokens(tokens: typeof _tokenStore) {
  _tokenStore = tokens;
}

export function getTokens() {
  return _tokenStore;
}

export function isConnected(): boolean {
  return !!_tokenStore && _tokenStore.expires_at > Date.now();
}

/** Fetch customer balance and open invoices from QBO */
export async function getCustomerInvoices(
  qboCustomerId: string
): Promise<{ invoices: QBOInvoice[]; balance: number }> {
  if (!isConnected()) {
    // Return mock data until QBO is connected
    return getMockData();
  }

  const tokens = getTokens()!;
  const baseUrl =
    process.env.QBO_ENVIRONMENT === 'production'
      ? 'https://quickbooks.api.intuit.com'
      : 'https://sandbox-quickbooks.api.intuit.com';

  const res = await fetch(
    `${baseUrl}/v3/company/${tokens.realmId}/query?query=SELECT * FROM Invoice WHERE CustomerRef = '${qboCustomerId}' AND Balance > 0 ORDERBY DueDate&minorversion=65`,
    {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
        Accept: 'application/json',
      },
    }
  );

  if (!res.ok) {
    console.error('QBO API error:', await res.text());
    return getMockData();
  }

  const data = await res.json();
  const invoices: QBOInvoice[] = (data.QueryResponse?.Invoice ?? []).map(
    (inv: QBORawInvoice) => ({
      id: inv.Id,
      docNumber: inv.DocNumber,
      dueDate: inv.DueDate,
      amount: inv.TotalAmt,
      balance: inv.Balance,
      status: inv.Balance === 0 ? 'paid' : new Date(inv.DueDate) < new Date() ? 'overdue' : 'open',
    })
  );

  const balance = invoices.reduce((sum, inv) => sum + inv.balance, 0);
  return { invoices, balance };
}

/** Generate a QBO payment link for an invoice */
export function getPaymentLink(invoiceId: string): string {
  const tokens = getTokens();
  if (!tokens) return '#';
  const env = process.env.QBO_ENVIRONMENT === 'production' ? 'app' : 'sandbox';
  return `https://${env}.qbo.intuit.com/app/invoice?txnId=${invoiceId}`;
}

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────

export interface QBOInvoice {
  id: string;
  docNumber: string;
  dueDate: string;
  amount: number;
  balance: number;
  status: 'open' | 'overdue' | 'paid';
}

interface QBORawInvoice {
  Id: string;
  DocNumber: string;
  DueDate: string;
  TotalAmt: number;
  Balance: number;
}

// ──────────────────────────────────────────────
// Demo / fallback data (shown before QBO connected)
// ──────────────────────────────────────────────

function getMockData(): { invoices: QBOInvoice[]; balance: number } {
  const invoices: QBOInvoice[] = [
    {
      id: 'INV-2024-001',
      docNumber: 'INV-2024-001',
      dueDate: '2024-07-15',
      amount: 1850.0,
      balance: 1850.0,
      status: 'overdue',
    },
    {
      id: 'INV-2024-002',
      docNumber: 'INV-2024-002',
      dueDate: new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
      amount: 1850.0,
      balance: 1850.0,
      status: 'open',
    },
    {
      id: 'INV-2024-003',
      docNumber: 'INV-2024-003',
      dueDate: new Date(Date.now() - 60 * 86400000).toISOString().split('T')[0],
      amount: 1850.0,
      balance: 0,
      status: 'paid',
    },
  ];
  return { invoices, balance: invoices.reduce((s, i) => s + i.balance, 0) };
}
