import Link from 'next/link';
import { ArrowRight, Shield, Clock, Award, TrendingUp } from 'lucide-react';

const badges = [
  { icon: Shield, label: 'SOC 2 Compliant' },
  { icon: Clock, label: '24/7/365 Support' },
  { icon: Award, label: 'Microsoft Gold Partner' },
];

const metrics = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<15 min', label: 'Avg. Response Time' },
  { value: '500+', label: 'Clients Supported' },
  { value: '24/7', label: 'NOC Monitoring' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-pattern">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: text content */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              Trusted Managed Service Provider
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6">
              <span className="text-white">IT That Moves</span>
              <br />
              <span className="text-gradient">As Fast As You Do</span>
            </h1>

            {/* Subhead */}
            <p className="text-brand-muted text-lg leading-relaxed max-w-xl mb-10">
              LFG Technology Consultants delivers enterprise-grade managed IT services,
              cybersecurity, cloud migration, and 24/7 help desk support — so your team
              can focus on growth, not downtime.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-cyan text-brand-bg font-bold text-sm hover:bg-white transition-all duration-200 glow-cyan"
              >
                Get a Free Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-card border border-brand-border text-white font-semibold text-sm hover:border-brand-cyan/50 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-card border border-brand-border"
                >
                  <Icon className="w-4 h-4 text-brand-cyan" />
                  <span className="text-xs font-medium text-slate-300">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: metrics card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-brand-card border border-brand-border rounded-2xl p-6 glow-cyan">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-4 h-4 text-brand-cyan" />
                <span className="text-white font-semibold text-sm">Platform Performance</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {metrics.map(({ value, label }) => (
                  <div key={label} className="bg-brand-surface rounded-xl p-4">
                    <div className="text-2xl font-extrabold text-brand-cyan mb-1">{value}</div>
                    <div className="text-brand-muted text-xs">{label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-brand-border flex items-center justify-between">
                <span className="text-brand-muted text-xs">Overall Health</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-semibold">All Systems Operational</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
