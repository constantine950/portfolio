import { motion } from "framer-motion";

export default function TechnologyTags({ tags }: { tags: string[] }) {
  return (
    <div>
      <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
        Technologies Used
      </h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {tags.map((tag, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.05 }}
            className="px-3 sm:px-4 py-1 sm:py-1.5 bg-indigo-100 text-indigo-800 text-xs sm:text-sm md:text-base rounded-full hover:bg-indigo-200 transition-colors"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
