type CardProps = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function Card({ children, ...props }: CardProps) {
  const { className, ...rest } = props;
  return (
    <div className={`bg-white rounded-3xl shadow-md ${className}`} {...rest}>
      {children}
    </div>
  );
}
