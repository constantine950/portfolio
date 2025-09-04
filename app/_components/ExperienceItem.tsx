import { ExperienceItemProps } from "../_types&data/type";
import { motion } from "framer-motion";

export default function ExperienceItem({
  experience,
  isLast,
  index,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1"></div>
        {!isLast && <div className="w-px h-full bg-gray-300"></div>}
      </div>
      <div className="flex-1 pb-6">
        <h4 className="font-medium text-base sm:text-lg text-gray-900">
          {experience.title}
        </h4>
        <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-600 mb-1">
          <span>{experience.company}</span>
          <span>•</span>
          <span>{experience.duration}</span>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          {experience.responsibilities.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
