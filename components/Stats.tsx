const stats = [
  { value: '500+', label: 'Businesses Protected', sub: 'Across 20+ industries' },
  { value: '99.9%', label: 'Uptime Guaranteed', sub: 'Industry-leading SLA' },
  { value: '<15 min', label: 'Response Time', sub: 'Average ticket response' },
  { value: '24/7', label: 'NOC Operations', sub: '365 days a year' },
];

export default function Stats() {
  return (
    <section className="bg-brand-surface border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">{value}</div>
              <div className="text-white font-semibold text-sm mb-1">{label}</div>
              <div className="text-brand-muted text-xs">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
