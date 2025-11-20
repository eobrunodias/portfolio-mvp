"use client"

import Header from "@/components/header"
import ProjectsGrid from "@/components/projects-grid"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground">Projetos</h1>
          <p className="mt-4 text-lg text-muted-foreground">Explore meus projetos e trabalhos mais recentes</p>
        </div>
        <ProjectsGrid />
      </div>
      <Footer />
    </main>
  )
}
