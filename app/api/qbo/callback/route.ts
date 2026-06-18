import { NextRequest, NextResponse } from 'next/server';
import { createOAuthClient, saveTokens } from '@/lib/qbo';

export async function GET(req: NextRequest) {
  const url = req.nextUrl.toString();
  const oauthClient = createOAuthClient();

  try {
    const authResponse = await oauthClient.createToken(url);
    const tokens = authResponse.getJson();

    saveTokens({
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      realmId: oauthClient.getToken().realmId,
      expires_at: Date.now() + tokens.expires_in * 1000,
    });

    return NextResponse.redirect(new URL('/portal/dashboard?qbo=connected', req.url));
  } catch (err) {
    console.error('QBO OAuth error:', err);
    return NextResponse.redirect(new URL('/portal/dashboard?qbo=error', req.url));
  }
}
