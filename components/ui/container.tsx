type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`max-w-5xl mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}