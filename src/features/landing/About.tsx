import { Section } from "@/components/Section";

interface AboutProps {
  bio: string;
}

export const About = ({ bio }: AboutProps) => {
  return (
    <Section header={"About"}>
      <p className="text-text-primary leading-relaxed">{bio}</p>
    </Section>
  );
};
