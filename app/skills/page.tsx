"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  CodeBracketIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ServerStackIcon,
  ArrowPathIcon,
  BoltIcon,
  FireIcon,
  LockClosedIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

// Type definitions
type Skill = {
  name: string;
  level: number;
  icon: React.ReactElement<{ className?: string }>;
  color: string;
};

type SkillsCategory = {
  [key: string]: Skill[];
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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

const skills: SkillsCategory = {
  Frontend: [
    {
      name: "Next.js",
      level: 95,
      icon: <ServerStackIcon />,
      color: "bg-indigo-600",
    },
    {
      name: "React",
      level: 90,
      icon: <CodeBracketIcon />,
      color: "bg-blue-600",
    },
    {
      name: "Tailwind CSS",
      level: 85,
      icon: <PaintBrushIcon />,
      color: "bg-cyan-500",
    },
    {
      name: "HTML5",
      level: 95,
      icon: <CodeBracketIcon />,
      color: "bg-orange-600",
    },
    {
      name: "JavaScript (ES6+)",
      level: 88,
      icon: <CodeBracketIcon />,
      color: "bg-yellow-500",
    },
  ],
  Tools: [
    {
      name: "Git",
      level: 85,
      icon: <CodeBracketIcon />,
      color: "bg-red-600",
    },
    {
      name: "Vercel",
      level: 80,
      icon: <ServerStackIcon />,
      color: "bg-black",
    },
    {
      name: "Supabase",
      level: 75,
      icon: <ServerStackIcon />,
      color: "bg-green-600",
    },
    {
      name: "NextAuth",
      level: 70,
      icon: <LockClosedIcon />,
      color: "bg-purple-600",
    },
    {
      name: "React Router",
      level: 85,
      icon: <MapPinIcon />,
      color: "bg-rose-500",
    },
    {
      name: "React Query",
      level: 80,
      icon: <ArrowPathIcon />,
      color: "bg-red-500",
    },
    {
      name: "Redux",
      level: 80,
      icon: <BoltIcon />,
      color: "bg-purple-500",
    },
    {
      name: "Firebase",
      level: 75,
      icon: <FireIcon />,
      color: "bg-yellow-500",
    },
  ],
};

export default function SkillsPage() {
  return (
    <motion.div
      className="min-h-screen bg-gray-100 pt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 sm:py-10 md:py-12">
        <PageHeader />

        <div className="space-y-10 sm:space-y-12 md:space-y-14">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <SkillsCategorySection
              key={category}
              category={category}
              items={items}
              categoryIndex={categoryIndex}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PageHeader() {
  return (
    <motion.div
      className="text-center mb-8 sm:mb-10 md:mb-12"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
        My <span className="text-indigo-600">Skills</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Technologies I use to build fast, responsive, and accessible web
        applications
      </p>
    </motion.div>
  );
}

type SkillsCategorySectionProps = {
  category: string;
  items: Skill[];
  categoryIndex: number;
};

function SkillsCategorySection({
  category,
  items,
  categoryIndex,
}: SkillsCategorySectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-5 sm:mb-6 md:mb-8 flex items-center gap-2 sm:gap-3">
        <CategoryIcon category={category} />
        {category}
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {items.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
}

type CategoryIconProps = {
  category: string;
};

function CategoryIcon({ category }: CategoryIconProps) {
  const iconClass = "h-5 w-5 sm:h-6 sm:w-6 text-indigo-600";

  switch (category) {
    case "Frontend":
      return <CodeBracketIcon className={iconClass} />;
    case "Backend":
      return <ServerStackIcon className={iconClass} />;
    case "Tools":
      return <CpuChipIcon className={iconClass} />;
    default:
      return <CodeBracketIcon className={iconClass} />;
  }
}

type SkillCardProps = {
  skill: Skill;
  index: number;
};

function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
    >
      <SkillHeader skill={skill} />
      <ProgressBar skill={skill} index={index} />
    </motion.div>
  );
}

type SkillHeaderProps = {
  skill: Skill;
};

function SkillHeader({ skill }: SkillHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-3 sm:mb-4">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className={`p-1.5 sm:p-2 ${skill.color} rounded-lg text-white`}>
          {React.cloneElement(skill.icon, {
            className: `${skill.icon.props.className || ""} h-4 w-4 sm:h-5 sm:w-5`,
          })}
        </div>
        <h3 className="font-medium text-sm sm:text-base md:text-lg text-gray-900">
          {skill.name}
        </h3>
      </div>
      <span className="text-xs sm:text-sm font-medium text-gray-500">
        {skill.level}%
      </span>
    </div>
  );
}

type ProgressBarProps = {
  skill: Skill;
  index: number;
};

function ProgressBar({ skill, index }: ProgressBarProps) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${skill.level}%` }}
        transition={{
          duration: 1,
          delay: 0.3 + index * 0.05,
          type: "spring",
          damping: 10,
          stiffness: 100,
        }}
        className={`h-full rounded-full ${skill.color}`}
      />
    </div>
  );
}
