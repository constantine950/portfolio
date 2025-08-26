"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { use } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Fast Pizza Co.",
    description:
      "Crave it. Tap it. Get your favorite pizza delivered hot and fresh.",
    longDescription:
      "A pizza ordering application with menu customization, cart functionality, and order tracking. Designed for fast and intuitive ordering experience.",
    tags: ["Vite", "React", "Redux", "Tailwindcss", "React-router"],
    image: "/piz.png",
    features: [
      "Menu customization",
      "Cart functionality",
      "Order tracking",
      "Responsive design",
    ],
    githubUrl: "https://github.com/constantine950/fast-react-pizza",
    liveUrl: "https://fast-react-pizza-umber.vercel.app/",
  },
  {
    id: 2,
    title: "Kiva ChatApp",
    description:
      "Chat smarter. Stay connected with friends and colleagues in real time.",
    longDescription:
      "A modern chat application with authentication, instant messaging, and real-time syncing. Built with performance and simplicity in mind for a seamless communication experience.",
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
    features: [
      "User authentication",
      "Instant messaging",
      "Real-time message syncing",
      "Friend management",
      "Responsive design",
    ],
    githubUrl: "https://github.com/constantine950/kiva-chatapp",
    liveUrl: "https://kiva-chatapp.vercel.app/",
  },
  {
    id: 3,
    title: "Rivo - AI Chat Assistant",
    description:
      "Chat. Ask. Resolve. Your intelligent AI assistant for instant answers and seamless support.",
    longDescription:
      "A conversational AI chatbot with natural language processing, real-time interactions, and personalized responses. Designed for intuitive user experiences and 24/7 assistance.",
    tags: [
      "Vite",
      "React",
      "Heroicons",
      "Tailwindcss",
      "React-router",
      "OpenAI API",
    ],
    image: "/rivopic.png",
    features: [
      "Real-time messaging",
      "Context-aware conversations",
      "Multi-language support",
      "Responsive UI",
    ],
    githubUrl: "https://github.com/constantine950/rivo-chatbot",
    liveUrl: "https://rivo-chatbot.vercel.app/",
  },
  {
    id: 4,
    title: "Sailor",
    description: "Built for fun and learning purposes",
    longDescription:
      "An experimental web project exploring creative CSS animations and interactive elements. Serves as a playground for frontend development techniques.",
    tags: ["HTML", "Owl-carousel", "Tailwindcss"],
    image: "/sai.png",
    features: [
      "Interactive animations",
      "Experimental layouts",
      "Custom carousel implementations",
      "Mobile-first approach",
    ],
    githubUrl: "https://github.com/constantine950/sailor",
    liveUrl: "https://sailor-delta.vercel.app",
  },
  {
    id: 5,
    title: "Movie App",
    description:
      "Find what to watch next — movies, trailers, and more at your fingertips.",
    longDescription:
      "A movie discovery platform showcasing trending films with trailers, ratings, and recommendations. Features intuitive browsing with Owl Carousel integration.",
    tags: ["HTML", "Owl-carousel", "Tailwindcss"],
    image: "/mov.png",
    features: [
      "Trending movies showcase",
      "Trailer integration",
      "Responsive carousel",
      "Minimalist UI design",
    ],
    githubUrl: "https://github.com/constantine950/movie-app",
    liveUrl: "https://movie-app-six-tau-54.vercel.app",
  },
  {
    id: 6,
    title: "Church Website",
    description:
      "A modern, responsive website designed for a church to share events, sermons, and connect with the community online.",
    longDescription:
      "This project is a fully responsive church website built to enhance the church's online presence. It features sections for upcoming events, sermon archives, service times. The website is designed with a clean and welcoming layout to reflect the church’s mission and invite both members and visitors to engage. it prioritizes ease of navigation, accessibility, and mobile-friendliness.",
    tags: ["HTML", "Tailwindcss", "Owl-carousel", "BootsrapIcons"],
    image: "/chu.png",
    features: [
      "Sleek design",
      "Experimental layouts",
      "New tailwind classes",
      "Responsive design",
    ],
    githubUrl: "https://github.com/constantine950/church-repo",
    liveUrl: "https://church-website-pied.vercel.app",
  },
];

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ projectid: string }>;
}) {
  const { projectid } = use(params);
  const router = useRouter();
  const project = PROJECTS.find((p) => p.id === parseInt(projectid));

  if (!project) {
    return <NotFound />;
  }

  return <ProjectLayout project={project} router={router} />;
}

function NotFound() {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 pt-14 flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center">
        Project not found
      </h1>
      <Link
        href="/portfolio"
        className="mt-3 sm:mt-4 md:mt-5 cursor-pointer text-indigo-600 hover:underline text-sm sm:text-base md:text-lg"
      >
        Back to Portfolio
      </Link>
    </motion.div>
  );
}

function ProjectLayout({
  project,
  router,
}: {
  project: Project;
  router: ReturnType<typeof useRouter>;
}) {
  return (
    <motion.main
      className="min-h-screen bg-gray-100 pt-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10">
        <BackButton router={router} />

        <ProjectHeader project={project} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <ProjectImage project={project} />
          <ProjectDetails project={project} />
        </div>
      </div>
    </motion.main>
  );
}

function BackButton({ router }: { router: ReturnType<typeof useRouter> }) {
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <button
        onClick={() => router.back()}
        className="flex items-center cursor-pointer text-gray-600 hover:text-indigo-600 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg transition-colors"
      >
        <ArrowLeftIcon className="mr-1.5 sm:mr-2 h-4 sm:h-5 w-4 sm:w-5 md:h-6 md:w-6" />
        Back to Portfolio
      </button>
    </motion.div>
  );
}

function ProjectHeader({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mb-6 sm:mb-8 md:mb-10"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
        {project.title}
      </h1>
      <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl">
        {project.description}
      </p>
    </motion.div>
  );
}

function ProjectImage({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden border border-gray-100"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={1200}
        height={675}
        className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </motion.div>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-5 md:p-6 lg:p-8 border border-gray-100"
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 md:mb-5">
        Project Overview
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-5 md:mb-6 leading-relaxed">
        {project.longDescription}
      </p>

      <div className="space-y-4 sm:space-y-5 md:space-y-6">
        <FeatureList features={project.features} />
        <TechnologyTags tags={project.tags} />
        <ProjectLinks githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
      </div>
    </motion.div>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <div>
      <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
        Key Features
      </h3>
      <ul className="list-disc pl-4 sm:pl-5 md:pl-6 text-sm sm:text-base md:text-lg text-gray-600 space-y-1.5 sm:space-y-2">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            {feature}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function TechnologyTags({ tags }: { tags: string[] }) {
  return (
    <div>
      <h3 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
        Technologies Used
      </h3>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {tags.map((tag, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.05 }}
            className="px-3 sm:px-4 py-1 sm:py-1.5 bg-indigo-100 text-indigo-800 text-xs sm:text-sm md:text-base rounded-full hover:bg-indigo-200 transition-colors"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function ProjectLinks({
  githubUrl,
  liveUrl,
}: {
  githubUrl?: string;
  liveUrl?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-3"
    >
      {githubUrl && (
        <ProjectLink
          href={githubUrl}
          icon={<CodeBracketIcon className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />}
          text="View Code"
          className="bg-gray-800 hover:bg-gray-700"
        />
      )}
      {liveUrl && (
        <ProjectLink
          href={liveUrl}
          icon={
            <ArrowTopRightOnSquareIcon className="mr-2 h-4 sm:h-5 w-4 sm:w-5" />
          }
          text="Live Demo"
          className="bg-indigo-600 hover:bg-indigo-700"
        />
      )}
    </motion.div>
  );
}

function ProjectLink({
  href,
  icon,
  text,
  className,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  className: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center px-4 sm:px-5 py-2 sm:py-2.5 text-white rounded-lg transition-colors text-sm sm:text-base md:text-lg ${className}`}
    >
      {icon}
      {text}
    </a>
  );
}
