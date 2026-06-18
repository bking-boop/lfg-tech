import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react';

const proof = [
  'No long-term contracts required',
  'US & Canada-based engineers',
  '24/7/365 NOC & Help Desk',
  'Response time under 15 minutes',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-bg pt-24">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-brand-indigo/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-16">

          {/* Left */}
          <div>
            <div className="section-label">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan pulse-slow inline-block" />
              Trusted Managed Service Provider
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-white block">Secure Your</span>
              <span className="text-gradient block">Future with</span>
              <span className="text-white block">LFG Tech</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Cutting-edge IT solutions built around your business. We specialize in cybersecurity,
              cloud infrastructure, and fully managed services — so you can focus on growth while we
              handle the technology.
            </p>

            <ul className="space-y-3 mb-10">
              {proof.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-cyan text-brand-bg font-bold text-sm rounded-xl hover:bg-white transition-all glow-cyan"
              >
                Get a Free IT Assessment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+18005550199"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-transparent border border-brand-border text-white font-semibold text-sm rounded-xl hover:border-brand-cyan/50 hover:bg-brand-card transition-all"
              >
                <Phone className="w-4 h-4 text-brand-cyan" />
                (800) 555-0199
              </a>
            </div>
          </div>

          {/* Right — hero image + floating cards */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-brand-border shadow-2xl">
              <Image
                src="/tenweb_media_sywhogjfi.webp"
                alt="LFG Technology team"
                width={820}
                height={460}
                className="w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -left-8 bg-brand-card border border-brand-border rounded-xl p-4 shadow-xl">
              <div className="text-3xl font-extrabold text-brand-cyan">99.9%</div>
              <div className="text-slate-400 text-xs mt-0.5">Uptime SLA Guaranteed</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-brand-card border border-brand-border rounded-xl p-4 shadow-xl">
              <div className="text-3xl font-extrabold text-brand-cyan">&lt;15 min</div>
              <div className="text-slate-400 text-xs mt-0.5">Avg. Response Time</div>
            </div>
          </div>

        </div>

        {/* Partner logo strip */}
        <div className="border-t border-brand-border/60 pt-10 pb-4">
          <p className="text-brand-muted text-xs font-semibold uppercase tracking-widest text-center mb-6">
            Trusted Technology Partners
          </p>
          <div className="overflow-hidden">
            <div className="flex gap-10 items-center marquee-track w-max">
              {[
                { src: '/Dell_Logo.png', alt: 'Dell', h: 'h-6' },
                { src: '/Cisco_logo_blue_2016.svg.png', alt: 'Cisco', h: 'h-7' },
                { src: '/cato.png', alt: 'Cato Networks', h: 'h-6' },
                { src: '/Lumen_Technologies_Logo.png', alt: 'Lumen', h: 'h-6' },
                { src: '/8x8.jpg', alt: '8x8', h: 'h-7' },
                { src: '/cologix.png', alt: 'Cologix', h: 'h-6' },
                { src: '/1111.png', alt: 'Partner', h: 'h-7' },
                { src: '/Dell_Logo.png', alt: 'Dell', h: 'h-6' },
                { src: '/Cisco_logo_blue_2016.svg.png', alt: 'Cisco', h: 'h-7' },
                { src: '/cato.png', alt: 'Cato Networks', h: 'h-6' },
                { src: '/Lumen_Technologies_Logo.png', alt: 'Lumen', h: 'h-6' },
                { src: '/8x8.jpg', alt: '8x8', h: 'h-7' },
                { src: '/cologix.png', alt: 'Cologix', h: 'h-6' },
                { src: '/1111.png', alt: 'Partner', h: 'h-7' },
              ].map((logo, i) => (
                <div key={i} className="flex items-center justify-center opacity-50 hover:opacity-90 transition-opacity shrink-0 grayscale hover:grayscale-0">
                  <Image src={logo.src} alt={logo.alt} width={120} height={40} className={`${logo.h} w-auto object-contain`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
