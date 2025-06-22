"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

type Experience = {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
};

type Skill = string;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const experiences: Experience[] = [
  {
    title: "Frontend Developer Intern",
    company: "NovaTravel Tech Solution",
    duration: "Oct 2024 – Dec 2024",
    responsibilities: [
      "Designed and developed a responsive cabin booking interface for seamless user reservations",
      "Integrated calendar and datepicker features to enhance the booking experience",
      "Focused on performance optimization, achieving faster load times across devices",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "GourmetGrid Technologies",
    duration: "Jan 2025 – Apr 2025",
    responsibilities: [
      "Built an intuitive pizza ordering UI with real-time order tracking",
      "Designed a fast, mobile-first layout for quick ordering on the go",
      "Collaborated with mock APIs to simulate full end-to-end user flow",
    ],
  },
];

const skills: Skill[] = [
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "NextAuth",
  "React-router",
  "React Query",
  "Redux",
  "Firebase",
];

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
                Hi, I&apos;m Adebesin Omotoyosi James, a frontend developer and
                Lagos State University graduate with a passion for clean code
                and smooth user experiences. I love bringing ideas to life on
                the web. Let&apos;s build something amazing.
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

            <ResumeSection title="Skills">
              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerContainer}
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
            </ResumeSection>
          </div>
        </div>
      </div>
    </div>
  );
}

type CTAButtonProps = {
  href: string;
  download?: string;
  icon: React.ReactNode;
  text: string;
  variant: "primary" | "secondary";
};

function CTAButton({ href, download, icon, text, variant }: CTAButtonProps) {
  const baseClasses =
    "flex items-center px-4 py-2 text-sm sm:text-base rounded-md transition-colors";

  const variantClasses = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
  };

  return (
    <Link
      href={href}
      download={download}
      className={`${baseClasses} ${variantClasses[variant]}`}
      target={download ? "_blank" : undefined}
      rel={download ? "noopener noreferrer" : undefined}
    >
      {icon}
      {text}
    </Link>
  );
}

function ResumeHeader() {
  return (
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
        Adebesin Omotoyosi James
      </h2>
      <p className="text-indigo-600 text-sm sm:text-base">Frontend Developer</p>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm sm:text-base text-gray-600">
        <span>omotoyosiadebeshin@gmail.com</span>
        <span>08127597385</span>
        <span>Lagos, NG</span>
      </div>
    </div>
  );
}

type ResumeSectionProps = {
  title: string;
  children: React.ReactNode;
};

function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6 sm:p-8"
    >
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      {children}
    </motion.section>
  );
}

type ExperienceItemProps = {
  experience: Experience;
  isLast: boolean;
  index: number;
};

function ExperienceItem({ experience, isLast, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      className="flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1"></div>
        {!isLast && <div className="w-px h-full bg-gray-300"></div>}
      </div>
      <div className="flex-1 pb-6">
        <h4 className="font-medium text-base sm:text-lg text-gray-900">
          {experience.title}
        </h4>
        <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-600 mb-1">
          <span>{experience.company}</span>
          <span>•</span>
          <span>{experience.duration}</span>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
          {experience.responsibilities.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
