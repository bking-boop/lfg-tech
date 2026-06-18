import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Portal | LFG Technology Consultants',
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
