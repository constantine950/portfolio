import { motion } from "framer-motion";

export default function FeatureList({ features }: { features: string[] }) {
  return (
    <div>
      <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
        Key Features
      </h3>
      <ul className="list-disc pl-4 sm:pl-5 md:pl-6 text-sm sm:text-base md:text-lg text-gray-600 space-y-1.5 sm:space-y-2">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            {feature}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
