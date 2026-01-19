import {
  Header,
  About,
  Experience,
  Skills,
  IntroOverlay,
} from "@/features/landing";

const Page = () => {
  const personalInfo = {
    name: "Adam Wade",
    title: "Full Stack Developer",
    email: "adamwade1075@gmail.com",
    github: "https://github.com/adamwade1075",
    linkedin: "https://www.linkedin.com/in/adam-wade-6903691b1",
  };

  const bio =
    "Full stack developer with expertise in building modern web applications. Passionate about creating intuitive user experiences and writing clean, maintainable code.";

  const experience = [
    {
      title: "Senior Developer",
      company: "Tech Company Inc.",
      startDate: "Jan 2022",
      endDate: "Present",
      description:
        "Led development of customer-facing features and mentored junior developers.",
      highlights: [
        "Increased application performance by 40%",
        "Implemented TypeScript migration across codebase",
        "Architected scalable microservices",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Startup Co.",
      startDate: "Jun 2020",
      endDate: "Dec 2021",
      description:
        "Built and maintained full stack web applications from concept to deployment.",
      highlights: [
        "Developed React frontend and Node.js backend",
        "Implemented CI/CD pipelines",
        "Managed database schema and migrations",
      ],
    },
  ];

  const skills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
    "Docker",
  ];

  return (
    <>
      <IntroOverlay />
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Header {...personalInfo} />
        <About bio={bio} />
        <Experience jobs={experience} />
        <Skills skills={skills} />
      </div>
    </>
  );
};

export default Page;
