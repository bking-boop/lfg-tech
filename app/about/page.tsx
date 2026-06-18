import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, Target, Award, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | LFG Technology Consultants',
  description:
    'LFG Technology Consultants — who we are, our mission, and why we built a different kind of MSP.',
};

const values = [
  {
    icon: Target,
    title: 'Outcome Ownership',
    body: 'We measure success by your business outcomes, not ticket counts. If your IT isn\'t enabling growth, we\'ve failed.',
  },
  {
    icon: Heart,
    title: 'Radical Transparency',
    body: 'No jargon, no upsells, no hidden fees. We communicate clearly and bill predictably.',
  },
  {
    icon: Users,
    title: 'People First',
    body: 'Technology serves people — not the other way around. We design systems that make your team\'s lives easier.',
  },
  {
    icon: Award,
    title: 'Continuous Improvement',
    body: 'We invest in our team\'s certifications and tooling so our clients always benefit from the latest best practices.',
  },
];

const team = [
  { name: 'Marcus Reynolds', role: 'CEO & Co-Founder', bio: 'Former Director of IT at a Fortune 500, Marcus founded LFG to prove that MSPs could be both technical and business-aligned.' },
  { name: 'Priya Nair', role: 'CTO & Co-Founder', bio: 'With 15+ years in enterprise infrastructure and cloud architecture, Priya architects the technical backbone of every client environment.' },
  { name: 'Derek Walsh', role: 'Director of Security', bio: 'Former NSA analyst and CISSP holder, Derek leads our SOC and cybersecurity practice with a zero-compromise approach.' },
  { name: 'Aisha Johnson', role: 'Director of Client Success', bio: 'Aisha ensures every client relationship turns from transactional to strategic, driving long-term value and satisfaction.' },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-6">
              Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              We Built the MSP We{' '}
              <span className="text-gradient">Wished Existed</span>
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed">
              LFG Technology Consultants was founded in 2018 by two engineers who were
              exhausted watching businesses overpay for mediocre IT support. We set out
              to build a managed service provider that treats clients as partners, not
              as a recurring revenue line.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-white mb-6">Our Mission</h2>
            <p className="text-brand-muted leading-relaxed mb-6">
              To make enterprise-grade technology accessible to every business — not just
              the Fortune 500. We believe every company deserves the same level of IT
              expertise, security posture, and strategic guidance that used to require a
              full in-house IT department.
            </p>
            <p className="text-brand-muted leading-relaxed">
              Today, LFG Technology Consultants serves 500+ clients across healthcare,
              finance, legal, manufacturing, and professional services — with a team of
              certified engineers, analysts, and strategists dedicated to one thing:
              making technology a competitive advantage for your business.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '2018', label: 'Founded' },
              { value: '500+', label: 'Active Clients' },
              { value: '75+', label: 'Team Members' },
              { value: '20+', label: 'Industries Served' },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-brand-card border border-brand-border rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-gradient mb-1">{value}</div>
                <div className="text-brand-muted text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-surface border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-12 text-center">
            Our <span className="text-gradient">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-brand-card border border-brand-border rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-indigo/20 border border-brand-cyan/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-cyan" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-12 text-center">
            Leadership <span className="text-gradient">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio }) => (
              <div key={name} className="bg-brand-card border border-brand-border rounded-2xl p-6 card-hover">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-cyan to-brand-indigo flex items-center justify-center text-white font-bold text-xl mb-4">
                  {name[0]}
                </div>
                <h3 className="text-white font-bold">{name}</h3>
                <p className="text-brand-cyan text-xs font-semibold mb-3">{role}</p>
                <p className="text-brand-muted text-sm leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-surface border-t border-brand-border text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-4">Let's Work Together</h2>
          <p className="text-brand-muted mb-8">
            Ready to experience what a real IT partner looks like? Start with a free,
            no-obligation assessment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-cyan text-brand-bg font-bold hover:bg-white transition-colors"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
