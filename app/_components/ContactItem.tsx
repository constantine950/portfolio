import { ContactItemProps } from "../_types&data/type";

export default function ContactItem({
  href,
  icon,
  title,
  content,
}: ContactItemProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 p-2 sm:p-2.5 bg-indigo-100 rounded-lg text-indigo-600">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-xs sm:text-sm font-medium text-gray-500">
          {title}
        </h3>
        {href ? (
          <a className="text-sm sm:text-base text-gray-900 hover:text-indigo-600 transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-sm sm:text-base text-gray-900">{content}</p>
        )}
      </div>
    </div>
  );
}
