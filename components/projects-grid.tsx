"use client";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  topics: string[];
}

export default function ProjectsGrid() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/eobrunodias/repos?sort=stars&per_page=6",
          {
            headers: process.env.GITHUB_TOKEN
              ? {
                  Authorization: `token ${process.env.GITHUB_TOKEN}`,
                }
              : undefined,
          }
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-card animate-pulse"
          >
            <div className="aspect-video bg-secondary rounded-lg mb-4" />
            <div className="h-6 bg-secondary rounded mb-4" />
            <div className="h-4 bg-secondary rounded w-3/4" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-foreground hover:shadow-lg"
        >
          <div className="aspect-video bg-gradient-to-br from-secondary to-muted overflow-hidden relative">
            <div className="w-full h-full flex items-center justify-center">
              <Github className="h-12 w-12 text-muted-foreground opacity-50" />
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-bold text-foreground line-clamp-2">
              {project.name}
            </h3>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed line-clamp-2">
              {project.description || "Sem descrição disponível"}
            </p>

            {project.topics && project.topics.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {project.topics.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2 py-1 text-xs text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-4 flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                {project.language && (
                  <span className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-accent" />
                    {project.language}
                  </span>
                )}
                {project.stargazers_count > 0 && (
                  <span>⭐ {project.stargazers_count}</span>
                )}
              </div>
              <ExternalLink className="h-4 w-4 text-accent group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
