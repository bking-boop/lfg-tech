'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-surface/95 backdrop-blur-md border-b border-brand-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            <span className="text-brand-cyan">LFG</span>{' '}
            <span className="text-slate-200">Technology</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-brand-muted hover:text-white transition-colors text-sm font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/portal/login"
            className="text-sm text-brand-muted hover:text-white transition-colors font-medium"
          >
            Client Portal
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg bg-brand-cyan text-brand-bg text-sm font-semibold hover:bg-white transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-brand-muted hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-brand-surface border-b border-brand-border px-4 pb-4">
          <div className="flex flex-col gap-3 pt-2">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-brand-muted hover:text-white transition-colors py-2 text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <hr className="border-brand-border" />
            <Link
              href="/portal/login"
              onClick={() => setOpen(false)}
              className="text-sm text-brand-muted hover:text-white transition-colors py-2"
            >
              Client Portal
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg bg-brand-cyan text-brand-bg text-sm font-semibold text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
