type HeadlineProps = {
  title: string;
  subtitle: string;
};

export function Headline({ title, subtitle }: HeadlineProps) {
  return (
    <>
      <p className="text-xl font-medium pb-4 text-gray-dark">{title}</p>
      <h1 className="text-4xl sm:text-6xl font-serif pb-6">{subtitle}</h1>
    </>
  );
}
