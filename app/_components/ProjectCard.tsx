import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

type ProjectType = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

type SizeKey = "sm" | "md" | "lg" | "xl";

type ProjectProps = {
  project: ProjectType;
  size?: SizeKey;
};

type SizeVal = {
  imageRatio: string;
  padding: string;
  titleSize: string;
  descriptionLines: string;
  tagSize: string;
  iconSize: string;
};

type SizeConfigure = Record<SizeKey, SizeVal>;

function ProjectCard({ project, size = "md" }: ProjectProps) {
  const sizeConfig: SizeConfigure = {
    sm: {
      imageRatio: "pt-[50%]",
      padding: "p-3",
      titleSize: "text-md",
      descriptionLines: "line-clamp-2",
      tagSize: "text-xs px-1.5 py-0.5",
      iconSize: "h-3 w-3",
    },
    md: {
      imageRatio: "pt-[56.25%]",
      padding: "p-4",
      titleSize: "text-lg",
      descriptionLines: "line-clamp-3",
      tagSize: "text-xs px-2 py-0.5",
      iconSize: "h-3.5 w-3.5",
    },
    lg: {
      imageRatio: "pt-[60%]",
      padding: "p-5",
      titleSize: "text-xl",
      descriptionLines: "line-clamp-4",
      tagSize: "text-sm px-2.5 py-1",
      iconSize: "h-4 w-4",
    },
    xl: {
      imageRatio: "pt-[62.5%]",
      padding: "p-6",
      titleSize: "text-2xl",
      descriptionLines: "line-clamp-5",
      tagSize: "text-sm px-3 py-1",
      iconSize: "h-4 w-4",
    },
  };

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
