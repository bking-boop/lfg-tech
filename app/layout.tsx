import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'LFG Technology Consultants | Managed IT Services & Cybersecurity',
  description:
    'LFG Technology Consultants delivers enterprise-grade managed IT services, cybersecurity, cloud solutions, and 24/7 help desk support for businesses of all sizes. Your trusted MSP partner.',
  keywords:
    'managed IT services, MSP, managed service provider, cybersecurity, cloud services, IT support, help desk, NOC, backup disaster recovery, Microsoft 365, network management, IT consulting',
  openGraph: {
    title: 'LFG Technology Consultants | Managed IT Services',
    description: 'Enterprise-grade managed IT services, cybersecurity, and cloud solutions.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
