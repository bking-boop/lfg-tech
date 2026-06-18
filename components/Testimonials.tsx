import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sam Goodson',
    title: 'Manager IT Services, IS',
    quote: 'LFG Technology Consultants transformed our IT infrastructure with their innovative solutions. Their team\'s expertise in security and cloud services helped us streamline operations and significantly enhance our security posture. We highly recommend their services for any business seeking reliable IT support.',
    stars: 5,
    initial: 'S',
  },
  {
    name: 'James Thornton',
    title: 'CEO, Thornton Medical Group',
    quote: 'As a healthcare provider, HIPAA compliance is non-negotiable. LFG built us a compliance-ready environment from day one. Their team is available any time we call, and they actually understand healthcare workflows — not just technology.',
    stars: 5,
    initial: 'J',
  },
  {
    name: 'Laura Chen',
    title: 'COO, Apex Manufacturing',
    quote: 'We had a ransomware attempt last year. LFG\'s SOC team detected it in minutes, isolated the threat, and we never lost a single file. Their incident response is world-class. Having them as a partner lets me sleep at night.',
    stars: 5,
    initial: 'L',
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-indigo/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="section-label mx-auto w-fit">Client Stories</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted By Growing{' '}
            <span className="text-gradient">Businesses</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, title, quote, stars, initial }) => (
            <div key={name} className="bg-brand-card border border-brand-border rounded-2xl p-7 card-hover flex flex-col">
              <Quote className="w-8 h-8 text-brand-cyan/30 mb-5" />
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">"{quote}"</p>
              <div className="flex gap-1 mb-5">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-brand-border">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {initial}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{name}</div>
                  <div className="text-brand-muted text-xs">{title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
