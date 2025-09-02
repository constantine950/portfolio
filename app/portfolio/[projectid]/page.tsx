"use client";

import { use } from "react";
import { PROJECTS } from "@/app/_types&data/appdata";
import ProjectLayout from "@/app/_components/ProjectLayout";
import NotFound from "@/app/not-found";

export default function ProjectDetail({
  params,
}: {
  params: Promise<{ projectid: string }>;
}) {
  const { projectid } = use(params);
  const project = PROJECTS.find((p) => p.id === parseInt(projectid));

  if (!project) {
    return <NotFound />;
  }

  return <ProjectLayout project={project} />;
}
