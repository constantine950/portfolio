import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Project } from "../_types&data/type";
import BackButton from "./BackButton";
import ProjectHeader from "./ProjectHeader";
import ProjectImage from "./ProjectImage";
import ProjectDetails from "./ProjectDetails";

export default function ProjectLayout({ project }: { project: Project }) {
  return (
    <motion.main
      className="min-h-screen bg-gray-100 pt-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10">
        <BackButton />

        <ProjectHeader project={project} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <ProjectImage project={project} />
          <ProjectDetails project={project} />
        </div>
      </div>
    </motion.main>
  );
}
