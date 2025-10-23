"use client";
import { motion } from "framer-motion";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { experiences } from "../_types&data/appdata";
import ResumeHeader from "../_components/ResumeHeader";
import CTAButton from "../_components/CTAButton";
import ResumeSection from "../_components/ResumeSection";
import ExperienceItem from "../_components/ExperienceItem";

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
            <CTAButton
              href="/resume.pdf"
              download="James_Frontend_Developer_Resume.pdf"
              icon={<ArrowDownTrayIcon className="h-5 w-5 mr-2" />}
              text="Download PDF"
              variant="primary"
            />
            <CTAButton
              href="/contact"
              icon={<EnvelopeIcon className="h-5 w-5 mr-2" />}
              text="Contact Me"
              variant="secondary"
            />
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto py-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ResumeHeader />

          <div className="divide-y divide-gray-200">
            <ResumeSection title="Summary">
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Hi, I&apos;m James, a frontend developer and Lagos State
                University graduate with a passion for clean code and smooth
                user experiences. I love bringing ideas to life on the web.
                Let&apos;s build something amazing.
              </p>
            </ResumeSection>

            <ResumeSection title="Experience">
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <ExperienceItem
                    key={i}
                    experience={exp}
                    isLast={i === experiences.length - 1}
                    index={i}
                  />
                ))}
              </div>
            </ResumeSection>
          </div>
        </div>
      </div>
    </div>
  );
}
