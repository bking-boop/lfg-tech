'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

const interests = [
  'Managed IT Services',
  'Cybersecurity / SOC',
  'Cloud Services',
  'Help Desk Support',
  'Backup & Recovery',
  'Compliance',
  'IT Consulting / vCIO',
  'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    interests: [] as string[],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = (item: string) => {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(item)
        ? f.interests.filter((i) => i !== item)
        : [...f.interests, item],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-brand-surface border-b border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-semibold uppercase tracking-wider mb-4">
            Contact Us
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Let's Start the <span className="text-gradient">Conversation</span>
          </h1>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Free IT assessment, no strings attached. A senior engineer will review your
            environment and give you an honest picture of where you stand.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            {[
              { icon: Phone, label: 'Phone', value: '(800) 555-0199', href: 'tel:+18005550199' },
              { icon: Mail, label: 'Email', value: 'info@lfgtech.com', href: 'mailto:info@lfgtech.com' },
              { icon: MapPin, label: 'Address', value: '123 Tech Blvd, Suite 400\nDallas, TX 75201', href: '#' },
              { icon: Clock, label: 'Hours', value: '24/7/365 for emergencies\nBusiness hours: Mon–Fri 8am–6pm CST', href: '#' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex gap-4 bg-brand-card border border-brand-border rounded-xl p-4 card-hover"
              >
                <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-brand-cyan" />
                </div>
                <div>
                  <div className="text-xs text-brand-muted font-semibold uppercase tracking-wider mb-0.5">{label}</div>
                  <div className="text-white text-sm whitespace-pre-line">{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-brand-card border border-brand-cyan/30 rounded-2xl p-12 text-center">
                <CheckCircle2 className="w-14 h-14 text-brand-cyan mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-3">We'll Be in Touch!</h2>
                <p className="text-brand-muted">
                  Thanks for reaching out. A senior engineer will contact you within 2 business
                  hours to schedule your free IT assessment.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-card border border-brand-border rounded-2xl p-8 space-y-5"
              >
                <h2 className="text-xl font-bold text-white mb-2">Request a Free Assessment</h2>

                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { id: 'name', label: 'Full Name *', type: 'text', required: true },
                    { id: 'email', label: 'Work Email *', type: 'email', required: true },
                    { id: 'company', label: 'Company Name *', type: 'text', required: true },
                    { id: 'phone', label: 'Phone Number', type: 'tel', required: false },
                  ].map(({ id, label, type, required }) => (
                    <div key={id}>
                      <label className="block text-xs font-semibold text-brand-muted mb-1.5 uppercase tracking-wider">
                        {label}
                      </label>
                      <input
                        type={type}
                        required={required}
                        value={(form as Record<string, string>)[id]}
                        onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                        className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-2.5 text-white text-sm placeholder-brand-muted focus:outline-none focus:border-brand-cyan/60 transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-muted mb-1.5 uppercase tracking-wider">
                    Number of Employees
                  </label>
                  <select
                    value={form.employees}
                    onChange={(e) => setForm((f) => ({ ...f, employees: e.target.value }))}
                    className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand-cyan/60 transition-colors"
                  >
                    <option value="">Select a range</option>
                    {['1–10', '11–50', '51–200', '201–500', '500+'].map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-muted mb-2 uppercase tracking-wider">
                    Services of Interest
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggle(item)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                          form.interests.includes(item)
                            ? 'bg-brand-cyan/10 border-brand-cyan text-brand-cyan'
                            : 'bg-brand-surface border-brand-border text-brand-muted hover:border-brand-cyan/40'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-muted mb-1.5 uppercase tracking-wider">
                    Tell Us About Your Environment
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Current IT challenges, number of locations, existing tools, etc."
                    className="w-full bg-brand-surface border border-brand-border rounded-lg px-4 py-2.5 text-white text-sm placeholder-brand-muted focus:outline-none focus:border-brand-cyan/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-cyan text-brand-bg font-bold text-sm hover:bg-white transition-colors disabled:opacity-60"
                >
                  {loading ? 'Sending…' : 'Send Request'}
                  {!loading && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
