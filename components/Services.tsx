import Link from 'next/link';
import {
  Shield, Cloud, HeadphonesIcon, Server, Network, BarChart3,
  HardDrive, Smartphone, Lock, ArrowRight,
} from 'lucide-react';

export const allServices = [
  {
    icon: Server,
    title: 'Managed IT Services',
    description:
      'Fully managed IT infrastructure with proactive monitoring, patch management, and lifecycle planning. We own your IT so you can own your business.',
    keywords: ['RMM', 'Patch Management', 'Asset Lifecycle', 'Proactive Monitoring'],
    href: '/services#managed-it',
  },
  {
    icon: Shield,
    title: 'Cybersecurity & SOC',
    description:
      'Multi-layered security with 24/7 SOC monitoring, threat detection, zero-trust architecture, endpoint protection, and incident response.',
    keywords: ['EDR/XDR', 'SIEM', 'Zero Trust', 'Penetration Testing'],
    href: '/services#cybersecurity',
  },
  {
    icon: Cloud,
    title: 'Cloud Services & Migration',
    description:
      'Seamless cloud migrations, architecture design, and ongoing management across Azure, AWS, and Microsoft 365 environments.',
    keywords: ['Azure', 'AWS', 'Microsoft 365', 'Cloud Migration'],
    href: '/services#cloud',
  },
  {
    icon: HeadphonesIcon,
    title: 'Help Desk & NOC Support',
    description:
      'US-based 24/7 help desk and Network Operations Center providing Tier 1–3 support, with an average response time under 15 minutes.',
    keywords: ['Tier 1–3 Support', '24/7 NOC', 'Ticketing', 'Remote Support'],
    href: '/services#helpdesk',
  },
  {
    icon: HardDrive,
    title: 'Backup & Disaster Recovery',
    description:
      'Automated backups, immutable offsite storage, and tested disaster recovery plans to meet your RTO/RPO requirements.',
    keywords: ['BDR', 'Business Continuity', 'Immutable Backup', 'RTO/RPO'],
    href: '/services#backup',
  },
  {
    icon: Network,
    title: 'Network Infrastructure',
    description:
      'Design, deploy, and manage enterprise-grade LAN/WAN, SD-WAN, firewalls, and wireless networks for maximum performance and security.',
    keywords: ['SD-WAN', 'Firewall', 'Wireless', 'Network Security'],
    href: '/services#network',
  },
  {
    icon: Lock,
    title: 'Compliance & Governance',
    description:
      'Navigate HIPAA, SOC 2, NIST, CMMC, and PCI-DSS requirements with our compliance frameworks, policy templates, and audit readiness programs.',
    keywords: ['HIPAA', 'SOC 2', 'NIST', 'CMMC', 'PCI-DSS'],
    href: '/services#compliance',
  },
  {
    icon: Smartphone,
    title: 'Endpoint & Mobile Management',
    description:
      'Unified endpoint management (UEM) for desktops, laptops, mobile devices, and IoT — including BYOD policy enforcement and MDM.',
    keywords: ['MDM', 'UEM', 'BYOD', 'Intune', 'Jamf'],
    href: '/services#endpoint',
  },
  {
    icon: BarChart3,
    title: 'IT Consulting & vCIO',
    description:
      'Strategic IT roadmapping, budgeting, and board-level reporting from our fractional CIO team — aligning technology investment to business outcomes.',
    keywords: ['vCIO', 'IT Strategy', 'Roadmapping', 'Technology Budgeting'],
    href: '/services#vcio',
  },
];

export default function Services({ limit }: { limit?: number }) {
  const items = limit ? allServices.slice(0, limit) : allServices;

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Complete Managed IT{' '}
            <span className="text-gradient">Services Portfolio</span>
          </h2>
          <p className="text-brand-muted text-base leading-relaxed">
            From day-to-day help desk support to enterprise cybersecurity strategy, LFG
            Technology Consultants covers every layer of your IT environment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, description, keywords, href }) => (
            <Link
              key={title}
              href={href}
              className="group bg-brand-card border border-brand-border rounded-2xl p-6 card-hover flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 border border-brand-cyan/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2 group-hover:text-brand-cyan transition-colors">
                  {title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">{description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs px-2 py-0.5 rounded-full bg-brand-surface border border-brand-border text-brand-muted"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-card border border-brand-border text-white font-semibold text-sm hover:border-brand-cyan/50 transition-all"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
