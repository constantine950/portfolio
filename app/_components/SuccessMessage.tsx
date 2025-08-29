import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function SuccessMessage({
  setIsSuccess,
}: {
  setIsSuccess: (value: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-6 sm:py-8"
    >
      <div className="mx-auto flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-green-100 mb-4">
        <PaperAirplaneIcon className="h-6 w-6 sm:h-7 sm:w-7 text-green-600" />
      </div>
      <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 mb-2 sm:mb-3">
        Message Sent!
      </h3>
      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
        Thank you for reaching out. I&apos;ll get back to you soon.
      </p>
      <button
        onClick={() => setIsSuccess(false)}
        className="px-4 sm:px-5 py-2 sm:py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors text-sm sm:text-base"
      >
        Send Another Message
      </button>
    </motion.div>
  );
}
