interface HeaderProps {
  name: string;
  title: string;
  email: string;
  github?: string;
  linkedin?: string;
}

export const Header = ({
  name,
  title,
  email,
  github,
  linkedin,
}: HeaderProps) => {
  return (
    <header className="mb-8 border-b border-gray-200 pb-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{name}</h1>
      <p className="text-xl text-gray-600 mb-4">{title}</p>
      <div className="flex gap-4 text-sm text-gray-600">
        <a href={`mailto:${email}`} className="hover:text-blue-600 underline">
          {email}
        </a>
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 underline"
          >
            GitHub
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 underline"
          >
            LinkedIn
          </a>
        )}
      </div>
    </header>
  );
};
