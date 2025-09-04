import Link from "next/link";
import { CTAButtonProps } from "../_types&data/type";

export default function CTAButton({
  href,
  download,
  icon,
  text,
  variant,
}: CTAButtonProps) {
  const baseClasses =
    "flex items-center px-4 py-2 text-sm sm:text-base rounded-md transition-colors";

  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
  };

  return (
    <Link
      href={href}
      download={download}
      className={`${baseClasses} ${variantClasses[variant]}`}
      target={download ? "_blank" : undefined}
      rel={download ? "noopener noreferrer" : undefined}
    >
      {icon}
      {text}
    </Link>
  );
}
