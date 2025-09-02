export default function ProjectLink({
  href,
  icon,
  text,
  className,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  className: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center px-4 sm:px-5 py-2 sm:py-2.5 text-white rounded-lg transition-colors text-sm sm:text-base md:text-lg ${className}`}
    >
      {icon}
      {text}
    </a>
  );
}
