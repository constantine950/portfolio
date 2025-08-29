import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "../_types&data/type";
import { sizeConfig } from "../_types&data/appdata";

function ProjectCard({ project, size = "md" }: ProjectProps) {
  const config = sizeConfig[size];

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link
        href={`/portfolio/${project.id}`}
        className="block h-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
      >
        <div className={`relative w-full ${config.imageRatio}`}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="absolute inset-0 object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
        </div>

        <div className={config.padding}>
          {project.tags?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`${config.tagSize} bg-indigo-50 text-indigo-700 rounded-full whitespace-nowrap`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h2
            className={`${config.titleSize} font-semibold text-gray-900 mb-1.5`}
          >
            {project.title}
          </h2>

          <p
            className={`text-sm sm:text-base text-gray-600 mb-3 ${config.descriptionLines}`}
          >
            {project.description}
          </p>

          <div className="flex items-center text-indigo-600 text-sm sm:text-base font-medium group">
            View project
            <ArrowRightIcon
              className={`ml-1 ${config.iconSize} transition-transform duration-200 group-hover:translate-x-1`}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
