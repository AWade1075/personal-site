import { Section } from "@/components/Section";

export const Education = () => {
  return (
    <Section header="Education">
      <div className="space-y-6 flex align-items-center justify">
        <img
          className="mr-2 h-16 w-16 flex shrink"
          src="/cnu-sails-blue.png"
          alt="Christopher Newport University logo"
        />
        <div>
          <h3 className="text-text-primary text-lg">
            Bachelor of Science in Computer Science
          </h3>
          <span className="text-text-secondary">
            <p className="mb-0 ">Christopher Newport University</p>
            <p>Graduated: 2015</p>
          </span>
        </div>
      </div>
    </Section>
  );
};
