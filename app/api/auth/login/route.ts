import { NextRequest, NextResponse } from 'next/server';
import { USERS, createToken, COOKIE_NAME } from '@/lib/auth';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = USERS.find((u) => u.email.toLowerCase() === email?.toLowerCase());
  if (!user || user.password !== password) {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }

  const token = await createToken({
    id: user.id,
    email: user.email,
    name: user.name,
    company: user.company,
    qboCustomerId: user.qboCustomerId,
  });

  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  });
  return res;
}
