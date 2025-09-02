import { motion } from "framer-motion";
import { Project } from "../_types&data/type";
import Image from "next/image";

export default function ProjectImage({ project }: { project: Project }) {
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
