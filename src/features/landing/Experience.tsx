import { ScrollViewer } from "@/components/ScrollViewer";
import { Section } from "@/components/Section";

interface Job {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights?: string[];
}

interface ExperienceProps {
  jobs: Job[];
}

export const Experience = ({ jobs }: ExperienceProps) => {
  return (
    <Section header="Experience">
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <ScrollViewer key={index}>
            <div className="border-l-4 border-col-primary pl-4">
              <h3 className="text-xl font-semibold text-text-primary">
                {job.title}
              </h3>
              <p className="text-text-secondary">{job.company}</p>
              <p className="text-sm  text-text-secondary mb-2">
                {job.startDate} – {job.endDate}
              </p>
              {job.highlights && job.highlights.length > 0 && (
                <ul className="list-image-none list-inside text-text-secondary text-sm list-">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="mb-1">
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ScrollViewer>
        ))}
      </div>
    </Section>
  );
};
