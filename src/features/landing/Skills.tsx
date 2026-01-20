import { Section } from "@/components/Section";

interface SkillsProps {
  skills: string[];
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <Section header={"Skills"}>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-col-primary text-white rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
};
