interface AboutProps {
  bio: string;
}

export const About = ({ bio }: AboutProps) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
      <p className="text-gray-700 leading-relaxed">{bio}</p>
    </section>
  );
};
