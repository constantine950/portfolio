import {
  CodeBracketIcon,
  CpuChipIcon,
  ServerStackIcon,
} from "@heroicons/react/24/solid";
import { CategoryIconProps } from "../_types&data/type";

export default function CategoryIcon({ category }: CategoryIconProps) {
  const iconClass = "h-5 w-5 sm:h-6 sm:w-6 text-indigo-600";

  switch (category) {
    case "Frontend":
      return <CodeBracketIcon className={iconClass} />;
    case "Backend":
      return <ServerStackIcon className={iconClass} />;
    case "Tools":
      return <CpuChipIcon className={iconClass} />;
    default:
      return <CodeBracketIcon className={iconClass} />;
  }
}
