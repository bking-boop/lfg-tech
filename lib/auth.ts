import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SECRET = new TextEncoder().encode(
  process.env.NEXTAUTH_SECRET ?? 'fallback-dev-secret-change-in-prod'
);

const COOKIE_NAME = 'lfg_session';

// ── User store ───────────────────────────────────────────────
// Replace with a real database query in production
export const USERS = [
  {
    id: 'client-001',
    email: 'demo@lfgtech.com',
    password: 'demo1234',
    name: 'Demo Client',
    company: 'Demo Corp',
    qboCustomerId: 'QBO-DEMO-001',
  },
];

export interface SessionUser {
  id: string;
  email: string;
  name: string;
  company: string;
  qboCustomerId: string;
}

// ── Token helpers ─────────────────────────────────────────────
export async function createToken(user: SessionUser): Promise<string> {
  return new SignJWT({ ...user })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(SECRET);
}

export async function verifyToken(token: string): Promise<SessionUser | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload as unknown as SessionUser;
  } catch {
    return null;
  }
}

// ── Session helpers (server-side) ─────────────────────────────
export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return null;
  return verifyToken(token);
}

export { COOKIE_NAME };
