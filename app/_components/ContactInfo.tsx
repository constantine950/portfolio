import { motion } from "framer-motion";
import ContactItem from "./ContactItem";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import SocialLinks from "./SocialLinks";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
      className="space-y-6 sm:space-y-8"
    >
      <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-5 sm:mb-6">
          Contact Information
        </h2>
        <div className="space-y-4 sm:space-y-5">
          <ContactItem
            icon={<EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
            title="Email"
            content="omotoyosiadebeshin@gmail.com"
            href="mailto:omotoyosiadebeshin@gmail.com"
          />
        </div>
      </div>

      <SocialLinks />
    </motion.div>
  );
}
