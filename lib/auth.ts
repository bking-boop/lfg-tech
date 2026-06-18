import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// In production replace this with a real database + bcrypt hashed passwords
const DEMO_USERS = [
  {
    id: 'client-001',
    email: 'demo@lfgtech.com',
    password: 'demo1234',
    name: 'Demo Client',
    company: 'Demo Corp',
    qboCustomerId: 'QBO-DEMO-001',
  },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = DEMO_USERS.find(
          (u) => u.email.toLowerCase() === credentials.email.toLowerCase()
        );
        if (!user) return null;

        const valid = credentials.password === user.password;
        if (!valid) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          company: user.company,
          qboCustomerId: user.qboCustomerId,
        } as never;
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = (user as never as { id: string }).id;
        token.company = (user as never as { company: string }).company;
        token.qboCustomerId = (user as never as { qboCustomerId: string }).qboCustomerId;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as never as { id: string }).id = token.id as string;
        (session.user as never as { company: string }).company = token.company as string;
        (session.user as never as { qboCustomerId: string }).qboCustomerId = token.qboCustomerId as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/portal/login',
    error: '/portal/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
