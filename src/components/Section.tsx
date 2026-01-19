export const Section = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  ``;
  return (
    <section className="mb-8 rounded-lg border border-col-primary p-6 bg-background-secondary">
      {children}
    </section>
  );
};
