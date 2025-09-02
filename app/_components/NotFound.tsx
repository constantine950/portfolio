import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 pt-14 flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
        Project not found
      </h1>
      <Link
        href="/portfolio"
        className="mt-3 sm:mt-4 md:mt-5 cursor-pointer text-indigo-600 hover:underline text-sm sm:text-base md:text-lg"
      >
        Back to Portfolio
      </Link>
    </motion.div>
  );
}
