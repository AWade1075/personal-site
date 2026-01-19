interface SkillsProps {
  skills: string[];
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 dark:bg-white bg-white text-primary rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};
