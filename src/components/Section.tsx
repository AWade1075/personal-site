interface SectionProps {
  children: React.ReactNode;
  header: string;
}

export const Section = ({
  children,
  header,
}: SectionProps): React.ReactElement => {
  return (
    <section className="mb-8 rounded-lg border border-col-primary p-6 bg-background-secondary">
      <h2 className="text-2xl font-bold text-text-primary mb-4">{header}</h2>
      {children}
    </section>
  );
};
