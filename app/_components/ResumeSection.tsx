import { ResumeSectionProps } from "../_types&data/type";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6 sm:p-8"
    >
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      {children}
    </motion.section>
  );
}
