import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  { title: 'Real People, Real Solutions', body: 'When you call us, you reach an engineer — not a call center. Our team takes time to understand your business and build solutions that fit.' },
  { title: 'Proactive, Not Reactive', body: 'We identify and resolve issues before they impact your business. Our RMM platform monitors your environment around the clock, every day of the year.' },
  { title: 'Flat-Rate Predictable Pricing', body: 'No surprise invoices. Our per-seat model means you always know your exact IT cost, making budgeting simple and stress-free.' },
  { title: 'Vendor-Agnostic Advice', body: 'We recommend what\'s right for your business — not what earns us the highest margin. Our partnerships are with best-in-class vendors, not one-size-fits-all.' },
  { title: 'Compliance-Ready by Default', body: 'Our standard toolset is designed to help meet HIPAA, SOC 2, NIST, and CMMC requirements right out of the box, reducing your audit burden significantly.' },
  { title: 'Your Technology Partner', body: 'We don\'t just support IT — we align technology investment with your business goals. Every client gets a dedicated vCIO and quarterly strategic reviews.' },
];

export default function WhyUs() {
  return (
    <section className="py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="section-label mx-auto w-fit">Why LFG Tech</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 tracking-tight">
            IT Support That Actually{' '}
            <span className="text-gradient">Gets It</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            At LFG Technology Consultants, we understand the challenges businesses face in today's digital landscape.
            We built our model to fix everything wrong with traditional MSPs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-cyan/10 to-brand-indigo/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden border border-brand-border">
              <Image
                src="/tenweb_media_sefrxfzk4.webp"
                alt="LFG Technology team at work"
                width={700}
                height={525}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-brand-card border border-brand-border rounded-xl p-5 shadow-xl max-w-[220px]">
              <div className="text-4xl font-extrabold text-gradient mb-1">4.9/5</div>
              <div className="text-white font-semibold text-sm">Client Satisfaction</div>
              <div className="text-brand-muted text-xs mt-1">Based on 200+ reviews</div>
              <div className="flex gap-0.5 mt-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-brand-cyan fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Reasons grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map(({ title, body }) => (
              <div key={title} className="bg-brand-card border border-brand-border rounded-xl p-5 card-hover">
                <CheckCircle2 className="w-5 h-5 text-brand-cyan mb-3" />
                <h3 className="text-white font-bold text-sm mb-2">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
