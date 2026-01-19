import { Section } from "@/components/Section";

interface AboutProps {
  bio: string;
}

export const About = ({ bio }: AboutProps) => {
  return (
    <Section>
      <>
        <h2 className="text-2xl font-bold text-text-primary mb-4">About</h2>
        <p className="text-text-primary leading-relaxed">{bio}</p>
      </>
    </Section>
  );
};
