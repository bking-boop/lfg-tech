import Link from 'next/link';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-brand-cyan/20 bg-gradient-to-br from-brand-card via-brand-card to-brand-surface p-12 sm:p-20 text-center">
          {/* Glows */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />
          {/* Top accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent" />

          <div className="relative">
            <div className="section-label mx-auto w-fit mb-6">Get Started Today</div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight max-w-3xl mx-auto leading-tight">
              Ready to Transform<br />
              <span className="text-gradient">Your IT?</span>
            </h2>

            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free 30-minute IT assessment with a senior engineer. No sales pitch —
              just an honest look at your environment and a clear path forward.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-brand-cyan text-brand-bg font-bold text-sm hover:bg-white transition-all glow-cyan"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+18005550199"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border border-brand-border text-white font-semibold text-sm hover:border-brand-cyan/40 hover:bg-brand-card/50 transition-all"
              >
                <Phone className="w-4 h-4 text-brand-cyan" />
                (800) 555-0199
              </a>
            </div>

            <p className="text-brand-muted text-xs mt-8">
              No long-term contracts · No setup fees · Response within 2 business hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
