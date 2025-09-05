import { motion } from "framer-motion";
import { SkillCardProps } from "../_types&data/type";
import SkillHeader from "./SkillHeader";
import ProgressBar from "./ProgressBar";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
    >
      <SkillHeader skill={skill} />
      <ProgressBar skill={skill} index={index} />
    </motion.div>
  );
}
