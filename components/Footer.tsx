import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const services = [
  { label: 'Managed IT Services', href: '/services#managed-it' },
  { label: 'Cybersecurity & SOC', href: '/services#cybersecurity' },
  { label: 'Cloud & Data Center', href: '/services#cloud' },
  { label: 'vCIO & Managed Services', href: '/services#vcio' },
  { label: 'Help Desk & NOC', href: '/services#helpdesk' },
  { label: 'Backup & Recovery', href: '/services#backup' },
  { label: 'Compliance', href: '/services#compliance' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Team', href: '/about#team' },
  { label: 'Partners', href: '/about#partners' },
  { label: 'Contact', href: '/contact' },
  { label: 'Client Portal', href: '/portal/login' },
  { label: 'Privacy Policy', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5">
              <Image src="/logo-white.png" alt="LFG Technology Consultants" width={180} height={60} className="h-11 w-auto object-contain" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Cutting-edge IT solutions for businesses that refuse to slow down. Cybersecurity,
              cloud, and fully managed services — all under one roof.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Facebook, href: '#' },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-cyan hover:border-brand-cyan/40 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-slate-400 hover:text-brand-cyan text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h3>
            <ul className="space-y-2.5">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-brand-cyan text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+18005550199" className="text-slate-300 text-sm hover:text-white transition-colors block">(800) 555-0199</a>
                  <span className="text-brand-muted text-xs">24/7 Emergency Line</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <a href="mailto:info@lfgtech.ca" className="text-slate-300 text-sm hover:text-white transition-colors">info@lfgtech.ca</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Canada — Serving businesses nationwide</span>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-brand-card border border-brand-border">
              <p className="text-xs text-brand-muted font-medium mb-1">24/7 Emergency IT Support</p>
              <a href="tel:+18005550199" className="text-brand-cyan font-bold text-lg hover:text-white transition-colors">(800) 555-0199</a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>© {new Date().getFullYear()} LFG Technology Consultants. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-white transition-colors">SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
