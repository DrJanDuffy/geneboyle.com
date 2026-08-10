type EditorialSectionProps = {
  index?: string;
  label?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "muted" | "ink";
  id?: string;
};

export default function EditorialSection({
  index,
  label,
  title,
  children,
  className = "",
  tone = "default",
  id,
}: EditorialSectionProps) {
  const toneClass =
    tone === "muted"
      ? "bg-paper-2 py-16 mb-16"
      : tone === "ink"
        ? "bg-ink text-paper py-16 mb-16"
        : "mb-16";

  return (
    <section id={id} className={`scroll-mt-28 ${toneClass} ${className}`}>
      <div className="site-wrap">
        {(index || label) && (
          <p
            className={`index-tag mb-4 ${tone === "ink" ? "text-paper/45" : ""}`}
          >
            {index ? (
              <>
                <b className={tone === "ink" ? "text-paper/80" : undefined}>
                  {index}
                </b>
                {label ? ` — ${label}` : null}
              </>
            ) : (
              label
            )}
          </p>
        )}
        {title && (
          <h2
            className={`font-display text-3xl md:text-4xl mb-6 max-w-2xl leading-tight ${
              tone === "ink" ? "text-paper" : "text-ink"
            }`}
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
