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
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-text-primary mb-6">Experience</h2>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold text-text-primary">
              {job.title}
            </h3>
            <p className="text-text-primary">{job.company}</p>
            <p className="text-sm text-gray-500 mb-2">
              {job.startDate} – {job.endDate}
            </p>
            <p className="text-gray-700 mb-2">{job.description}</p>
            {job.highlights && job.highlights.length > 0 && (
              <ul className="list-disc list-inside text-gray-700 text-sm">
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
