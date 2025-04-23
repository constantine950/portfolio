"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Self-initiated Project",
    duration: "A week",
    responsibilities: [
      "Designed and developed a responsive cabin booking interface for seamless user reservations",
      "Integrated calendar and datepicker features to enhance the booking experience",
      "Focused on performance optimization, achieving faster load times across devices",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Personal Project",
    duration: "4 days",
    responsibilities: [
      "Built an intuitive pizza ordering UI with real-time order tracking",
      "Designed a fast, mobile-first layout for quick ordering on the go",
      "Collaborated with mock APIs to simulate full end-to-end user flow",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Personal Project",
    duration: "2 days",
    responsibilities: [
      "Developed a sleek movie discovery app using modern frontend tools",
    ],
  },
];

const skills = ["React", "Next.js", "Tailwind CSS", "Other Frontend Tools"];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-sm rounded-lg"
      >
        <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            My Resume
          </h1>
          <div className="flex flex-wrap gap-3 mt-4">
            <Link
              href="/resume.pdf"
              download="James_Frontend_Developer_Resume.pdf"
              className="flex items-center px-4 py-2 text-sm sm:text-base bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download PDF
            </Link>
            <Link
              href="/contact"
              className="flex items-center px-4 py-2 text-sm sm:text-base border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              Contact Me
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Resume Content */}
      <div className="max-w-6xl mx-auto py-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Resume Header */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              James
            </h2>
            <p className="text-indigo-600 text-sm sm:text-base">
              Frontend Developer
            </p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm sm:text-base text-gray-600">
              <span>omotoyosiadebeshin@gmail.com</span>
              <span>08127597385</span>
              <span>Lagos, NG</span>
            </div>
          </div>

          {/* Resume Sections */}
          <div className="divide-y divide-gray-200">
            {/* Summary */}
            <motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Summary
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Passionate frontend developer with 3+ years of experience
                building responsive, user-friendly web applications. Specialized
                in React, Next.js, modern CSS and other powerful frontend tools.
              </p>
            </motion.section>

            {/* Experience */}
            <motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1"></div>
                      {i < experiences.length - 1 && (
                        <div className="w-px h-full bg-gray-300"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <h4 className="font-medium text-base sm:text-lg text-gray-900">
                        {exp.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-600 mb-1">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.duration}</span>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                        {exp.responsibilities.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Skills */}
            <motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-6 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                Skills
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={fadeInUp}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm sm:text-base"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
