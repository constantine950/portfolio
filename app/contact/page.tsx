"use client";
import { useState } from "react";
import {
  PaperAirplaneIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
  submit?: string;
};

type SocialLink = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      setErrors({
        submit:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks: SocialLink[] = [
    {
      name: "Twitter",
      href: "https://x.com/jamesomotoyosi?s=21",
      icon: (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/constantine950",
      icon: (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/omotoyosi-adebesin-683574261",
      icon: (
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gray-100 pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          <ContactForm
            formData={formData}
            errors={errors}
            isSubmitting={isSubmitting}
            isSuccess={isSuccess}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            setIsSuccess={setIsSuccess}
          />

          <ContactInfo socialLinks={socialLinks} />
        </div>
      </div>
    </motion.div>
  );
}

function Header() {
  return (
    <motion.div
      className="text-center mb-8 sm:mb-10 md:mb-12"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
        Let&apos;s <span className="text-indigo-600">Connect</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Have a project in mind or want to discuss opportunities? Reach out and
        I&apos;ll get back to you within 24 hours.
      </p>
    </motion.div>
  );
}

type ContactFormProps = {
  formData: FormData;
  errors: FormErrors;
  isSubmitting: boolean;
  isSuccess: boolean;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => void;
  setIsSuccess: (value: boolean) => void;
};

function ContactForm({
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

type FormFieldProps = {
  label: string;
  id: string;
  name: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
};

function FormField({
  label,
  id,
  name,
  value,
  error,
  onChange,
  type,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 sm:px-5 sm:py-2.5 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base ${
          error ? "border-red-300" : "border-gray-300"
        }`}
      />
      {error && <p className="mt-1 text-xs sm:text-sm text-red-600">{error}</p>}
    </div>
  );
}

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex justify-center items-center py-3 px-4 sm:py-3.5 sm:px-5 rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${
          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 sm:h-5 sm:w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </>
        ) : (
          <>
            <PaperAirplaneIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Send Message
          </>
        )}
      </button>
    </div>
  );
}

function SuccessMessage({
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

function ContactInfo({ socialLinks }: { socialLinks: SocialLink[] }) {
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

          <ContactItem
            icon={<PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
            title="Phone"
            content="+234 812 759 7385"
            href="tel:+2348127597385"
          />

          <ContactItem
            icon={<MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6" />}
            title="Location"
            content="Lagos, Nigeria"
          />
        </div>
      </div>

      <SocialLinks socialLinks={socialLinks} />
    </motion.div>
  );
}

type ContactItemProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
};

function ContactItem({ icon, title, content, href }: ContactItemProps) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 p-2 sm:p-2.5 bg-indigo-100 rounded-lg text-indigo-600">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="text-xs sm:text-sm font-medium text-gray-500">
          {title}
        </h3>
        {href ? (
          <a
            href={href}
            className="text-sm sm:text-base text-gray-900 hover:text-indigo-600 transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-sm sm:text-base text-gray-900">{content}</p>
        )}
      </div>
    </div>
  );
}

function SocialLinks({ socialLinks }: { socialLinks: SocialLink[] }) {
  return (
    <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-5">
        Let&apos;s Connect
      </h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
        I&apos;m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>
      <div className="flex space-x-3 sm:space-x-4">
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 bg-gray-100 rounded-full text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 transition-colors"
            whileHover={{ y: -2 }}
          >
            <span className="sr-only">{social.name}</span>
            {social.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
}
