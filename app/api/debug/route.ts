import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    NEXTAUTH_URL: process.env.NEXTAUTH_URL ?? 'NOT SET',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET ? 'SET ✓' : 'NOT SET ✗',
    NODE_ENV: process.env.NODE_ENV,
  });
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const DEMO_USERS = [
    { id: 'client-001', email: 'demo@lfgtech.com', password: 'demo1234', name: 'Demo Client', company: 'Demo Corp' },
  ];

  const user = DEMO_USERS.find((u) => u.email.toLowerCase() === email?.toLowerCase());
  if (!user) return NextResponse.json({ ok: false, reason: 'User not found' });
  if (user.password !== password) return NextResponse.json({ ok: false, reason: 'Wrong password' });
  return NextResponse.json({ ok: true, user: { id: user.id, name: user.name } });
}
