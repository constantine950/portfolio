import { motion } from "framer-motion";

export default function SkillPageHeader() {
  return (
    <motion.div
      className="text-center mb-8 sm:mb-10 md:mb-12"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
        My <span className="text-indigo-600">Skills</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Technologies I use to build fast, responsive, and accessible web
        applications
      </p>
    </motion.div>
  );
}
