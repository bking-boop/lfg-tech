import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Proactive, Not Reactive',
    body: 'We identify and resolve issues before they impact your business — not after your phone stops ringing.',
  },
  {
    title: 'Flat-Rate Predictable Pricing',
    body: 'No surprise bills. Our per-seat pricing means you always know exactly what you\'re paying.',
  },
  {
    title: 'US-Based 24/7 Support',
    body: 'Real engineers, based in the US, available around the clock — not a call center reading from scripts.',
  },
  {
    title: 'Vendor-Agnostic Advice',
    body: 'We recommend what\'s right for your business, not what earns us the highest commission.',
  },
  {
    title: 'Compliance-Ready Stack',
    body: 'Our standard toolset is designed to help you meet HIPAA, SOC 2, NIST, and CMMC requirements out of the box.',
  },
  {
    title: 'Dedicated vCIO Alignment',
    body: 'Every client gets a dedicated vCIO to align your technology roadmap with your business goals — quarterly.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
              Why LFG
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              The MSP That Actually{' '}
              <span className="text-gradient">Delivers</span>
            </h2>
            <p className="text-brand-muted text-base leading-relaxed mb-10">
              We built LFG Technology Consultants because we were tired of MSPs that
              over-promised and under-delivered. Our model is simple: own the outcome,
              not just the ticket.
            </p>

            <ul className="space-y-4">
              {reasons.map(({ title, body }) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold text-sm">{title} — </span>
                    <span className="text-brand-muted text-sm">{body}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual block */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/10 to-brand-indigo/10 rounded-3xl blur-2xl" />
            <div className="relative bg-brand-card border border-brand-border rounded-3xl p-8 space-y-4">
              {[
                { label: 'Security Score', value: 98, color: '#00d4ff' },
                { label: 'Patch Compliance', value: 100, color: '#6366f1' },
                { label: 'Backup Success Rate', value: 99.8, color: '#00d4ff' },
                { label: 'Client Satisfaction', value: 97, color: '#6366f1' },
              ].map(({ label, value, color }) => (
                <div key={label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-300 font-medium">{label}</span>
                    <span className="font-bold" style={{ color }}>{value}%</span>
                  </div>
                  <div className="h-2 bg-brand-surface rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${value}%`,
                        background: `linear-gradient(90deg, ${color}88, ${color})`,
                      }}
                    />
                  </div>
                </div>
              ))}

              <div className="pt-4 border-t border-brand-border grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-brand-surface rounded-xl">
                  <div className="text-2xl font-extrabold text-brand-cyan">A+</div>
                  <div className="text-xs text-brand-muted mt-1">Security Rating</div>
                </div>
                <div className="text-center p-3 bg-brand-surface rounded-xl">
                  <div className="text-2xl font-extrabold text-brand-indigo">4.9/5</div>
                  <div className="text-xs text-brand-muted mt-1">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
