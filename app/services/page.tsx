import type { Metadata } from 'next';
import { allServices } from '@/components/Services';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Managed IT Services | LFG Technology Consultants',
  description:
    'Explore our complete portfolio: managed IT, cybersecurity, cloud, help desk, backup & recovery, compliance, endpoint management, and vCIO services.',
};

const serviceDetails: Record<string, { points: string[]; id: string }> = {
  'Managed IT Services': {
    id: 'managed-it',
    points: [
      'Proactive RMM monitoring and alerting',
      'Automated patch management for OS and third-party apps',
      'IT asset lifecycle management and procurement',
      'Onboarding/offboarding workflow automation',
      'Vendor management and license tracking',
      'Monthly executive reporting and QBRs',
    ],
  },
  'Cybersecurity & SOC': {
    id: 'cybersecurity',
    points: [
      '24/7 Security Operations Center (SOC) monitoring',
      'Endpoint Detection & Response (EDR/XDR)',
      'SIEM log aggregation and threat intelligence',
      'Zero-trust network access (ZTNA) implementation',
      'Phishing simulation and security awareness training',
      'Vulnerability scanning and penetration testing',
    ],
  },
  'Cloud Services & Migration': {
    id: 'cloud',
    points: [
      'Cloud readiness assessments and migration planning',
      'Microsoft Azure architecture and deployment',
      'AWS workload migration and optimization',
      'Microsoft 365 deployment, licensing, and governance',
      'Cloud cost optimization and FinOps',
      'Hybrid and multi-cloud management',
    ],
  },
  'Help Desk & NOC Support': {
    id: 'helpdesk',
    points: [
      'US-based Tier 1–3 help desk, 24/7/365',
      'Average first-response under 15 minutes',
      'Remote and on-site support capabilities',
      'Network Operations Center (NOC) monitoring',
      'Incident management and escalation workflows',
      'ITSM ticketing with SLA tracking',
    ],
  },
  'Backup & Disaster Recovery': {
    id: 'backup',
    points: [
      'Automated daily backups with offsite replication',
      'Immutable, air-gapped backup storage',
      'RTO/RPO-aligned business continuity planning',
      'Ransomware-resistant backup architecture',
      'Monthly restore testing and DR drills',
      'Cloud-to-cloud backup (M365, Google Workspace)',
    ],
  },
  'Network Infrastructure': {
    id: 'network',
    points: [
      'LAN/WAN design, deployment, and management',
      'SD-WAN implementation and optimization',
      'Next-gen firewall (NGFW) configuration',
      'Enterprise wireless (Wi-Fi 6/6E) deployments',
      'Network segmentation and VLAN design',
      'Bandwidth monitoring and QoS policies',
    ],
  },
  'Compliance & Governance': {
    id: 'compliance',
    points: [
      'HIPAA risk assessments and policy development',
      'SOC 2 Type I & II readiness programs',
      'NIST CSF and CMMC compliance frameworks',
      'PCI-DSS scoping and remediation',
      'Policy and procedure documentation',
      'Audit support and evidence collection',
    ],
  },
  'Endpoint & Mobile Management': {
    id: 'endpoint',
    points: [
      'Microsoft Intune and Jamf MDM deployment',
      'BYOD policy enforcement and containerization',
      'Automated device enrollment and configuration',
      'Application deployment and lifecycle management',
      'Remote wipe and conditional access policies',
      'IoT device inventory and security controls',
    ],
  },
  'IT Consulting & vCIO': {
    id: 'vcio',
    points: [
      'Dedicated fractional CIO for each client',
      'Annual IT strategic roadmapping',
      'Technology budget planning and optimization',
      'Board-level reporting and presentations',
      'Vendor evaluation and contract negotiation',
      'Digital transformation advisory services',
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6">
            Our Services
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Everything Your Business Needs —{' '}
            <span className="text-gradient">One Partner</span>
          </h1>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            LFG Technology Consultants delivers a complete managed services portfolio,
            so you never have to juggle multiple IT vendors again.
          </p>
        </div>
      </section>

      {/* Service detail cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {allServices.map(({ icon: Icon, title, description }) => {
            const detail = serviceDetails[title];
            return (
              <div
                key={title}
                id={detail?.id}
                className="grid lg:grid-cols-2 gap-8 bg-brand-card border border-brand-border rounded-2xl p-8 scroll-mt-24"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 border border-brand-cyan/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed mb-6">{description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-brand-cyan text-sm font-semibold hover:text-white transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                {detail && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {detail.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-surface border-t border-brand-border">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-brand-muted mb-8">
            Our engineers will assess your current environment and recommend exactly what
            you need — nothing more.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-cyan text-brand-bg font-bold hover:bg-white transition-colors"
          >
            Book a Free Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
