const stats = [
  { value: '500+', label: 'Businesses Protected', sub: 'Across 20+ industries' },
  { value: '99.9%', label: 'Uptime SLA', sub: 'Industry-leading guarantee' },
  { value: '<15 min', label: 'Response Time', sub: 'Average first response' },
  { value: '24/7', label: 'NOC Operations', sub: '365 days a year' },
  { value: '15+', label: 'Years Experience', sub: 'In managed services' },
  { value: '100%', label: 'Client Retention', sub: 'Past 3 years' },
];

export default function Stats() {
  return (
    <section className="bg-brand-surface border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map(({ value, label, sub }) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-extrabold text-gradient mb-1">{value}</div>
              <div className="text-white font-semibold text-sm mb-0.5">{label}</div>
              <div className="text-brand-muted text-xs">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
