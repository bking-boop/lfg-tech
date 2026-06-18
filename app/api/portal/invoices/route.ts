import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { getCustomerInvoices } from '@/lib/qbo';

export async function GET() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const data = await getCustomerInvoices(session.qboCustomerId);
    return NextResponse.json(data);
  } catch (err) {
    console.error('Invoice fetch error:', err);
    return NextResponse.json({ error: 'Failed to load invoices' }, { status: 500 });
  }
}
