import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { createOAuthClient } from '@/lib/qbo';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const oauthClient = createOAuthClient();
  const authUri = oauthClient.authorizeUri({
    scope: [
      'com.intuit.quickbooks.accounting',
      'com.intuit.quickbooks.payment',
    ],
    state: 'lfg-qbo-connect',
  });

  return NextResponse.redirect(authUri);
}
