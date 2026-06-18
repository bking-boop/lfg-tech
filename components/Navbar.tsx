'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const services = [
  { label: 'Managed IT Services', href: '/services#managed-it' },
  { label: 'Cybersecurity & SOC', href: '/services#cybersecurity' },
  { label: 'Cloud & Data Center', href: '/services#cloud' },
  { label: 'vCIO & IT Strategy', href: '/services#vcio' },
  { label: 'Help Desk & NOC', href: '/services#helpdesk' },
  { label: 'Backup & Recovery', href: '/services#backup' },
  { label: 'Compliance', href: '/services#compliance' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-surface/95 backdrop-blur-xl border-b border-brand-border' : 'bg-transparent'
    }`}>
      {/* Top bar */}
      <div className="hidden lg:block bg-brand-bg border-b border-brand-border/50">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between text-xs text-brand-muted">
          <span>Trusted Managed IT Partner — Serving Businesses Across Canada</span>
          <a href="tel:+18005550199" className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors">
            <Phone className="w-3 h-3" /> (800) 555-0199 — 24/7 Emergency Support
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/logo-white.png"
            alt="LFG Technology Consultants"
            width={220}
            height={74}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors font-medium">
              Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-64 bg-brand-card border border-brand-border rounded-xl shadow-2xl p-2 mt-1">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-brand-muted hover:text-white hover:bg-brand-surface rounded-lg transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {[
            { label: 'About', href: '/about' },
            { label: 'Partners', href: '/about#partners' },
            { label: 'Contact', href: '/contact' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors font-medium">
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/portal/login" className="text-sm text-brand-muted hover:text-white transition-colors font-medium">
            Client Portal
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg bg-brand-cyan text-brand-bg text-sm font-bold hover:bg-white transition-colors"
          >
            Get a Free Assessment
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-slate-300 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-brand-surface border-t border-brand-border px-4 pb-6 pt-4 space-y-1">
          {services.map((s) => (
            <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
              className="block py-2.5 px-3 text-sm text-brand-muted hover:text-white rounded-lg hover:bg-brand-card transition-colors">
              {s.label}
            </Link>
          ))}
          <div className="border-t border-brand-border my-3" />
          {['/about', '/contact'].map((href) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className="block py-2.5 px-3 text-sm text-brand-muted hover:text-white rounded-lg hover:bg-brand-card transition-colors capitalize">
              {href.slice(1)}
            </Link>
          ))}
          <div className="pt-3 space-y-2">
            <Link href="/portal/login" onClick={() => setOpen(false)}
              className="block py-2.5 px-3 text-sm text-center text-brand-muted border border-brand-border rounded-lg hover:text-white transition-colors">
              Client Portal
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}
              className="block py-3 text-sm font-bold text-center bg-brand-cyan text-brand-bg rounded-lg hover:bg-white transition-colors">
              Get a Free Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
