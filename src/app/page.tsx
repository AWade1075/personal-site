import {
  Header,
  About,
  Experience,
  Skills,
  IntroOverlay,
  LogoCarousel,
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
    "Senior level full-stack JS / TS developer with over a decade experience leading and using a wide array of technologies and tool-sets. I enjoy building responsive, accessible, and tested applications that adhere to today's best practices and standards.";

  const experience = [
    {
      title: "Senior Software Engineer",
      company: "The Cadmus Group",
      startDate: "Jan 2024",
      endDate: "Present",
      description:
        "Led development of customer-facing features and mentored junior developers.",
      highlights: [
        "Led the UI development effort for several React projects. Responsible for setting code standards and guidelines including SonarQube integration, unit testing, and accessibility compliance",
        "Developed multiple features using Express microservices and corresponding UI updates across multiple projects deployed to AWS cloud",
        "Led UI development effort for technical proposal challenges using React",
      ],
    },
    {
      title: "Contractor for Twitch",
      company: "Solid Logix",
      startDate: "Jan 2022",
      endDate: "Jan 2024",
      description:
        "Built and maintained full stack web applications from concept to deployment.",
      highlights: [
        "Responsible for feature development and maintenance of AWS IVS React-based console",
        "Added resources via CDK needed for various AWS test accounts running Cypress e2e canaries 24/7 across all stages and regions",
        "Led several large-scale feature releases and production deployments across all AWS supported regions",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "Ventera Corporation",
      startDate: "Jan 2018",
      endDate: "Jan 2022",
      description:
        "Built and maintained full stack web applications from concept to deployment.",
      highlights: [
        "Served as team technical lead and code owner responsible for defining and documenting developer standards, coding and testing patterns in addition to inter-team communications",
        "Full-stack development using various technologies across multiple projects and technical proposals including React, Angular, Vue, Node.js",
        "Led brownbag / instructional developer sessions on React and Node best practices",
      ],
    },
    {
      title: "Software Engineer",
      company: "Northrop Grumman",
      startDate: "Jan 2015",
      endDate: "Jan 2018",
      description:
        "Built and maintained full stack web applications from concept to deployment.",
      highlights: [
        "Led frontend development of multiple, high-visibility projects utilizing Angular",
        "Led instructional sessions for fellow developers and customer POCs on Angular",
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
        <LogoCarousel />
        <Experience jobs={experience} />
        <Skills skills={skills} />
      </div>
    </>
  );
};

export default Page;
