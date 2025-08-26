"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ProjectCard from "../_components/ProjectCard";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

type SizeKey = "sm" | "md" | "lg" | "xl";

const projects: ProjectType[] = [
  {
    id: 1,
    title: "Fast Pizza Co.",
    description:
      "Crave it. Tap it. Get your favorite pizza delivered hot and fresh.",
    tags: ["Vite", "React", "Redux", "Tailwindcss", "React-router"],
    image: "/piz.png",
  },
  {
    id: 2,
    title: "Kiva ChatApp",
    description:
      "Connect instantly with friends and colleagues. Fast, secure, and built for modern conversations.",
    tags: [
      "Vite",
      "React",
      "Clerk",
      "Firestore",
      "Tailwindcss",
      "React-router",
      "Supabase",
    ],
    image: "/kivaa.png",
  },
  {
    id: 3,
    title: "Rivo - AI Chat Assistant",
    description:
      "Conversational AI that understands you. Get instant answers, personalized recommendations, and 24/7 assistance.",
    tags: [
      "Vite",
      "React",
      "Heroicons",
      "Tailwindcss",
      "React-router",
      "Grok API",
    ],
    image: "/rivopic.png",
  },
  {
    id: 4,
    title: "Sailor",
    description: "Built for fun and learning purposes",
    tags: ["HTML", "Owl-carousel", "Tailwindcss"],
    image: "/sai.png",
  },
  {
    id: 5,
    title: "Movie App",
    description:
      "Find what to watch next — movies, trailers, and more at your fingertips.",
    tags: ["HTML", "Owl-carousel", "Tailwindcss"],
    image: "/mov.png",
  },
  {
    id: 6,
    title: "Church Website",
    description:
      "A modern, responsive website designed for a church to share events, sermons, and connect with the community online.",
    tags: ["HTML", "Tailwindcss", "Owl-carousel", "BootsrapIcons"],
    image: "/chu.png",
  },
];

export default function Portfolio() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSize = (): SizeKey => {
    if (windowSize.width >= 1280) return "xl";
    if (windowSize.width >= 1024) return "lg";
    if (windowSize.width >= 768) return "md";
    return "sm";
  };

  return (
    <motion.main
      className="min-h-screen w-full bg-gray-100 pt-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 pb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          My <span className="text-indigo-600">Work</span>
        </h1>
        <p className="max-w-2xl mt-1 text-gray-600 text-base sm:text-lg">
          From idea to interface — these projects show how I solve problems with
          clean code and creative frontend thinking.
        </p>
      </motion.div>

      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileInView="visible"
              initial="hidden"
              transition={{ duration: 0.4 }}
            >
              <ProjectCard project={project} size={getSize()} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-12"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href="/contact"
          className={`
            block w-full py-3 px-4 text-center 
            bg-indigo-600 hover:bg-indigo-700 
            text-white rounded-lg font-medium
            transition-colors duration-200
            sm:w-auto sm:px-8 sm:mx-auto
            md:py-4 md:text-lg
            lg:px-12
          `}
        >
          Let&apos;s Build Something
        </Link>
      </motion.div>
    </motion.main>
  );
}
