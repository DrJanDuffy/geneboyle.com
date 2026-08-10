type Stat = {
  value: string;
  label: string;
};

type EditorialStatsProps = {
  stats: Stat[];
  title?: string;
};

export default function EditorialStats({ stats, title }: EditorialStatsProps) {
  return (
    <div>
      {title && (
        <h3 className="font-sans text-sm font-semibold text-ink mb-6">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[var(--line)] pt-10">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-display text-3xl text-accent mb-1">
              {stat.value}
            </div>
            <div className="font-sans text-xs text-ink-muted uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
