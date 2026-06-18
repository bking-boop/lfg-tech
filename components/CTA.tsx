import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-cyan/15 to-brand-indigo/15 border border-brand-cyan/20 p-10 sm:p-16 text-center">
          {/* Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6">
              Get Started Today
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 max-w-2xl mx-auto">
              Ready to{' '}
              <span className="text-gradient">Let's F***ing Go</span>?
            </h2>
            <p className="text-brand-muted text-base sm:text-lg max-w-xl mx-auto mb-10">
              Book a free 30-minute IT assessment with a senior engineer. No sales pitch —
              just an honest look at your environment and a clear path forward.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-cyan text-brand-bg font-bold hover:bg-white transition-colors glow-cyan"
              >
                Schedule Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+18005550199"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-card border border-brand-border text-white font-semibold hover:border-brand-cyan/40 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-cyan" />
                (800) 555-0199
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
