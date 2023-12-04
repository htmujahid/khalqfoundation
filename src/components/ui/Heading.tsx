type TitleProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Heading({ children, level, ...props }: TitleProps) {
  let generatedClasses = '';

  switch (level) {
    case 1:
      generatedClasses += 'text-5xl sm:text-6xl font-serif leading-[1.3]';
      break;
    case 2:
      generatedClasses += 'text-4xl sm:text-5xl font-serif leading-[1.3]';
      break;
    case 3:
      generatedClasses += 'text-3xl sm:text-4xl font-serif leading-[1.3]';
      break;
    case 4:
      generatedClasses += 'text-2xl sm:text-3xl font-serif leading-[1.3]';
      break;
    case 5:
      generatedClasses += 'text-xl sm:text-2xl text-gray-dark leading-[1.3]';
      break;
    case 6:
      generatedClasses += 'text-lg sm:text-xl text-gray-dark leading-[1.3]';
      break;
  }

  const { className, ...rest } = props;

  return (
    <h1 className={`${generatedClasses} ${className}`} {...rest}>
      {children}
    </h1>
  );
}
