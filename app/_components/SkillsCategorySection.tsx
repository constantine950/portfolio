import { SkillsCategorySectionProps } from "../_types&data/type";
import { motion } from "framer-motion";
import CategoryIcon from "./CategoryIcon";
import SkillCard from "./SkillCard";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function SkillsCategorySection({
  category,
  items,
  categoryIndex,
}: SkillsCategorySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-5 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-3">
        <CategoryIcon category={category} />
        {category}
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {items.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
}
