"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  CodeBracketIcon,
  PaintBrushIcon,
  ServerStackIcon,
  ArrowPathIcon,
  BoltIcon,
  FireIcon,
  LockClosedIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { SkillsCategory } from "../_types&data/type";
import SkillPageHeader from "../_components/SkillPageHeader";
import SkillsCategorySection from "../_components/SkillsCategorySection";

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
        <SkillPageHeader />

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
