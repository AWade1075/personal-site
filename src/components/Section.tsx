interface SectionProps {
  children: React.ReactNode;
  header: string;
  className?: string;
}

export const Section = ({
  children,
  header,
  className = "",
}: SectionProps): React.ReactElement => {
  return (
    <section
      className={`mb-8 rounded-lg border border-col-primary p-6 bg-background-secondary ${className}`}
    >
      <h2 className="text-2xl font-bold text-text-primary mb-4">{header}</h2>
      {children}
    </section>
  );
};
