import { Building2, Heart, Scale, Factory, ShoppingBag, Landmark, Cpu } from 'lucide-react';

const industries = [
  { icon: Heart, name: 'Healthcare', desc: 'HIPAA-compliant managed IT and cybersecurity for clinics, hospitals, and medical practices.' },
  { icon: Scale, name: 'Legal & Professional Services', desc: 'Data security, compliance, and always-on infrastructure for law firms and consultancies.' },
  { icon: Factory, name: 'Manufacturing', desc: 'OT/IT convergence, uptime protection, and network management for plant floors and offices.' },
  { icon: ShoppingBag, name: 'Retail', desc: 'PCI-DSS compliance, POS system management, and multi-location IT support at scale.' },
  { icon: Landmark, name: 'Finance & Banking', desc: 'SOC 2-ready security stacks and governance frameworks built for financial regulations.' },
  { icon: Building2, name: 'Real Estate', desc: 'Cloud collaboration, document security, and managed IT for distributed real estate teams.' },
  { icon: Cpu, name: 'Technology', desc: 'Co-managed IT and vCIO services for tech companies that want to focus on their product.' },
];

export default function Industries() {
  return (
    <section className="py-28 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="section-label">Industries We Serve</div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Built for Your<br />
              <span className="text-gradient">Industry's Needs</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We serve businesses across Canada and beyond. Whether you're in healthcare, finance, legal, or manufacturing
              — we know your compliance requirements, your risk profile, and your technology challenges.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Unlike generalist IT providers, LFG Technology Consultants builds industry-specific technology roadmaps
              so your IT investments directly support your business objectives.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {industries.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="group bg-brand-card border border-brand-border rounded-xl p-5 card-hover">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-brand-cyan" />
                  </div>
                  <h3 className="text-white font-semibold text-sm group-hover:text-brand-cyan transition-colors">{name}</h3>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
