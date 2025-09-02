import { motion } from "framer-motion";
import FeatureList from "./FeatureList";
import TechnologyTags from "./TechnologyTags";
import ProjectLinks from "./ProjectLinks";
import { Project } from "../_types&data/type";

export default function ProjectDetails({ project }: { project: Project }) {
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
