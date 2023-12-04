type TitleProps = {
  children: string;
  subtitle?: string;
};

export function Title({ children, subtitle }: TitleProps) {
  return (
    <>
      <h1 className="text-4xl sm:text-6xl font-serif pb-6 text-center">
        {children}
      </h1>
      <p className="text-xl font-medium pb-4 text-gray-dark text-center">
        {subtitle}
      </p>
    </>
  );
}
