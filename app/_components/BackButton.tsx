import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <button
        onClick={() => router.back()}
        className="flex items-center cursor-pointer text-gray-600 hover:text-indigo-600 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg transition-colors"
      >
        <ArrowLeftIcon className="mr-1.5 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5 md:h-6 md:w-6" />
        Back to Portfolio
      </button>
    </motion.div>
  );
}
