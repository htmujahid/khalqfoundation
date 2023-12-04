import Link from 'next/link';

type ButtonProps = {
  variant?: 'primary' | 'outlined' | 'text';
  href?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant, href, ...props }: ButtonProps) {
  let generatedClasses =
    '!block font-medium text-center py-3 px-6 duration-300 rounded-md ';

  switch (variant) {
    case 'primary':
      generatedClasses += 'bg-primary text-white hover:bg-opacity-90';
      break;
    case 'outlined':
      generatedClasses += 'border border-primary text-primary hover:opacity-80';
      break;
    case 'text':
      generatedClasses += 'text-primary hover:opacity-80';
      break;
    default:
      generatedClasses += 'text-primary hover:opacity-80';
      break;
  }

  const { className, ...rest } = props;

  if (href) {
    return (
      <Link href={href} className={`${generatedClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${generatedClasses} ${className}`} {...rest}>
      {children}
    </button>
  );
}
