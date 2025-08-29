import { ContactFormProps } from "../_types&data/type";
import FormField from "./FormField";
import SubmitButton from "./SubmitButton";
import SuccessMessage from "./SuccessMessage";
import { motion } from "framer-motion";

export default function ContactForm({
  formData,
  errors,
  isSubmitting,
  isSuccess,
  handleChange,
  handleSubmit,
  setIsSuccess,
}: ContactFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      {isSuccess ? (
        <SuccessMessage setIsSuccess={setIsSuccess} />
      ) : (
        <>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-5 sm:mb-6">
            Send me a message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <FormField
              label="Name"
              id="name"
              name="name"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
              type="text"
            />

            <FormField
              label="Email"
              id="email"
              name="email"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
              type="email"
            />

            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 sm:px-5 sm:py-2.5 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base ${
                  errors.message ? "border-red-300" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            {errors.submit && (
              <p className="text-xs sm:text-sm text-red-600">{errors.submit}</p>
            )}

            <SubmitButton isSubmitting={isSubmitting} />
          </form>
        </>
      )}
    </motion.div>
  );
}
