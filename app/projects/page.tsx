"use client";

import { ProjectsGrid } from "@/components";

// TODO: better my projects page and solve sicronize my projects
export default function ProjectsPage() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-120px)] pt-25 pb-25">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground">Projetos</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore meus trabalhos mais recentes
          </p>
        </div>
        <ProjectsGrid />
      </div>
    </section>
  );
}
