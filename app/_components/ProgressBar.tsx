import { ProgressBarProps } from "../_types&data/type";
import { motion } from "framer-motion";

export default function ProgressBar({ skill, index }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{
          duration: 1,
          delay: 0.3 + index * 0.05,
          type: "spring",
          damping: 10,
          stiffness: 100,
        }}
        className={`h-full rounded-full ${skill.color}`}
      />
    </div>
  );
}
