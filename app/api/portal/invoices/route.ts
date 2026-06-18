import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { getCustomerInvoices } from '@/lib/qbo';

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const qboCustomerId = (session.user as never as { qboCustomerId: string }).qboCustomerId;

  try {
    const data = await getCustomerInvoices(qboCustomerId);
    return NextResponse.json(data);
  } catch (err) {
    console.error('Invoice fetch error:', err);
    return NextResponse.json({ error: 'Failed to load invoices' }, { status: 500 });
  }
}
