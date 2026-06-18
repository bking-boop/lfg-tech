import Link from 'next/link';
import {
  Shield, Cloud, HeadphonesIcon, Server, Network, BarChart3,
  HardDrive, Smartphone, Lock, ArrowRight,
} from 'lucide-react';

export const allServices = [
  {
    icon: Server,
    title: 'Managed IT Services',
    tagline: 'Your IT department, fully managed.',
    description: 'Proactive monitoring, patch management, asset lifecycle planning, and helpdesk — all on a predictable flat-rate model. We own your IT outcomes so you can own your business.',
    keywords: ['RMM Monitoring', 'Patch Management', 'Asset Lifecycle', 'Vendor Management'],
    href: '/services#managed-it',
    id: 'managed-it',
  },
  {
    icon: Shield,
    title: 'Cybersecurity & SOC',
    tagline: 'Advanced protection, 24/7.',
    description: 'Protect your organization from evolving cyber threats with our layered security stack: 24/7 SOC, EDR/XDR, SIEM, zero-trust architecture, phishing simulation, and incident response.',
    keywords: ['EDR/XDR', 'SIEM', 'Zero Trust', 'Incident Response'],
    href: '/services#cybersecurity',
    id: 'cybersecurity',
  },
  {
    icon: Cloud,
    title: 'Cloud & Data Center',
    tagline: 'Scalable, secure, always available.',
    description: 'Enhance scalability and flexibility with our cloud migration, private hosted infrastructure, and ongoing management across Azure, AWS, and Microsoft 365. Reduce costs, ensure high availability.',
    keywords: ['Azure', 'AWS', 'Microsoft 365', 'Private Cloud'],
    href: '/services#cloud',
    id: 'cloud',
  },
  {
    icon: BarChart3,
    title: 'vCIO & Managed Services',
    tagline: 'Strategic IT leadership without the overhead.',
    description: 'Access expert IT leadership through our fractional CIO program. We deliver technology roadmaps, budget planning, board-level reporting, and strategies aligned to your business goals.',
    keywords: ['IT Roadmapping', 'Tech Budgeting', 'Strategic Planning', 'QBRs'],
    href: '/services#vcio',
    id: 'vcio',
  },
  {
    icon: HeadphonesIcon,
    title: 'Help Desk & NOC',
    tagline: 'Real people, real solutions.',
    description: 'US and Canada-based Tier 1–3 help desk and Network Operations Center with sub-15-minute response times. Whenever you call, you speak to an engineer — not a script.',
    keywords: ['Tier 1–3 Support', '24/7 NOC', 'Remote & Onsite', 'ITSM Ticketing'],
    href: '/services#helpdesk',
    id: 'helpdesk',
  },
  {
    icon: HardDrive,
    title: 'Backup & Disaster Recovery',
    tagline: 'Business continuity you can count on.',
    description: 'Ransomware-resistant immutable backups, offsite replication, and tested DR plans designed to meet your RTO/RPO requirements. Monthly restore testing included.',
    keywords: ['Immutable Backup', 'BDR', 'Business Continuity', 'RTO/RPO'],
    href: '/services#backup',
    id: 'backup',
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    tagline: 'Built for performance and security.',
    description: 'Design, deploy, and manage enterprise LAN/WAN, SD-WAN, next-gen firewalls, and Wi-Fi 6 wireless networks. Includes segmentation, QoS, and continuous monitoring.',
    keywords: ['SD-WAN', 'NGFW', 'Wi-Fi 6', 'Network Segmentation'],
    href: '/services#network',
    id: 'network',
  },
  {
    icon: Lock,
    title: 'Compliance & Governance',
    tagline: 'Meet every standard. Pass every audit.',
    description: 'Navigate HIPAA, SOC 2, NIST CSF, CMMC, and PCI-DSS with our compliance frameworks, policy templates, and audit-readiness programs. We take compliance off your plate.',
    keywords: ['HIPAA', 'SOC 2', 'NIST', 'CMMC'],
    href: '/services#compliance',
    id: 'compliance',
  },
  {
    icon: Smartphone,
    title: 'Endpoint & Mobile Management',
    tagline: 'Every device. Secured and managed.',
    description: 'Unified endpoint management for desktops, laptops, mobile, and IoT with Intune and Jamf. BYOD policy enforcement, conditional access, and automated compliance.',
    keywords: ['MDM', 'Intune', 'Jamf', 'BYOD'],
    href: '/services#endpoint',
    id: 'endpoint',
  },
];

export default function Services({ limit }: { limit?: number }) {
  const items = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section id="services" className="py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="section-label mx-auto w-fit">Our Services</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Everything Your Business Needs —{' '}
            <span className="text-gradient">One Partner</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            From day-to-day helpdesk support to enterprise security strategy, LFG Technology Consultants
            covers every layer of your IT environment with one predictable monthly cost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, title, tagline, description, keywords, href }) => (
            <Link
              key={title}
              href={href}
              className="group relative bg-brand-card border border-brand-border rounded-2xl p-7 card-hover flex flex-col overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base leading-tight group-hover:text-brand-cyan transition-colors">{title}</h3>
                  <p className="text-brand-cyan/70 text-xs mt-0.5 font-medium">{tagline}</p>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {keywords.map((kw) => (
                  <span key={kw} className="text-xs px-2.5 py-1 rounded-full bg-brand-surface border border-brand-border/80 text-brand-muted font-medium">
                    {kw}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-brand-cyan text-sm font-semibold group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-brand-border text-white font-semibold text-sm hover:border-brand-cyan/40 hover:bg-brand-card transition-all"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
