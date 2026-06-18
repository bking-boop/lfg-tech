import type { Metadata } from 'next';
import { SessionProvider } from '@/components/SessionProvider';

export const metadata: Metadata = {
  title: 'Client Portal | LFG Technology Consultants',
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
