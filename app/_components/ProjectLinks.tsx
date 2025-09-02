import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";
import ProjectLink from "./ProjectLink";
import { motion } from "framer-motion";

export default function ProjectLinks({
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
