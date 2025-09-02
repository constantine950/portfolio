import { motion } from "framer-motion";
import { Project } from "../_types&data/type";

export default function ProjectHeader({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-6 sm:mb-8 md:mb-10"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        {project.title}
      </h1>
      <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl">
        {project.description}
      </p>
    </motion.div>
  );
}
