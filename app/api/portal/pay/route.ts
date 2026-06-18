import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { getPaymentLink } from '@/lib/qbo';

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const invoiceId = req.nextUrl.searchParams.get('invoiceId');
  if (!invoiceId) return NextResponse.json({ error: 'Missing invoiceId' }, { status: 400 });

  return NextResponse.redirect(getPaymentLink(invoiceId));
}
