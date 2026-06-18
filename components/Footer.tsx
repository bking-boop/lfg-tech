import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const services = [
  'Managed IT Services',
  'Cybersecurity & SOC',
  'Cloud Services',
  'Help Desk & NOC',
  'Backup & Recovery',
  'IT Consulting & vCIO',
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Client Portal', href: '/portal/login' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo-white.png"
                alt="LFG Technology Consultants"
                width={160}
                height={54}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed mb-5">
              Enterprise-grade managed IT services, cybersecurity, and cloud solutions for
              businesses that refuse to slow down.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-brand-card border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-cyan hover:border-brand-cyan transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-brand-muted hover:text-brand-cyan text-sm transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-brand-muted hover:text-brand-cyan text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-brand-muted">
                <Phone className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                <a href="tel:+18005550199" className="hover:text-white transition-colors">
                  (800) 555-0199
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-brand-muted">
                <Mail className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                <a
                  href="mailto:info@lfgtech.com"
                  className="hover:text-white transition-colors"
                >
                  info@lfgtech.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-brand-muted">
                <MapPin className="w-4 h-4 text-brand-cyan mt-0.5 shrink-0" />
                <span>123 Tech Blvd, Suite 400<br />Dallas, TX 75201</span>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-lg bg-brand-card border border-brand-border">
              <p className="text-xs text-brand-muted font-medium">24/7 Emergency Support</p>
              <a
                href="tel:+18005550199"
                className="text-brand-cyan font-bold text-sm hover:text-white transition-colors"
              >
                (800) 555-0199
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>© {new Date().getFullYear()} LFG Technology Consultants LLC. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">SLA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
