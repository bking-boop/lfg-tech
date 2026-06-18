import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    title: 'CFO, Redstone Capital',
    quote:
      'LFG completely transformed how we think about IT. Before, we were always fighting fires. Now our systems just work. The vCIO service alone has saved us six figures in unnecessary spend.',
    stars: 5,
  },
  {
    name: 'James Thornton',
    title: 'CEO, Thornton Medical Group',
    quote:
      'As a healthcare provider, HIPAA compliance is non-negotiable. LFG built us a compliance-ready environment from day one and their team is available literally any time we call.',
    stars: 5,
  },
  {
    name: 'Laura Chen',
    title: 'COO, Apex Manufacturing',
    quote:
      'We had a ransomware attempt last year. LFG\'s SOC team detected it in minutes, isolated the threat, and we never lost a single file. Their incident response team is world-class.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            Client Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Trusted By{' '}
            <span className="text-gradient">Growing Businesses</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, title, quote, stars }) => (
            <div
              key={name}
              className="bg-brand-card border border-brand-border rounded-2xl p-6 flex flex-col gap-4 card-hover"
            >
              <div className="flex gap-1">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{quote}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-brand-border">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center text-white font-bold text-xs">
                  {name[0]}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{name}</div>
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
