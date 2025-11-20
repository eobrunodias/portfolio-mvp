import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma de e-commerce completa com autenticação, carrinho de compras e pagamento.",
    tags: ["Next.js", "TypeScript", "Stripe"],
  },
  {
    id: 2,
    title: "Blog Pessoal",
    description: "Blog minimalista com sistema de comentários e markdown support.",
    tags: ["Next.js", "MDX", "Tailwind"],
  },
  {
    id: 3,
    title: "App de Tarefas",
    description: "Aplicativo de gestão de tarefas com sincronização em tempo real.",
    tags: ["React", "Firebase", "TypeScript"],
  },
]

export default function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 border-t border-border">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-foreground">Projetos em Destaque</h2>
        <p className="mt-4 text-muted-foreground">Conheça alguns dos meus trabalhos recentes</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-foreground hover:shadow-lg"
          >
            <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-sm text-foreground">
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="/projetos"
              className="mt-6 inline-flex text-sm font-medium text-accent hover:text-foreground transition-colors"
            >
              Ver projeto →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/projetos"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-foreground text-background font-medium transition-all hover:opacity-90"
        >
          Ver Todos os Projetos
        </Link>
      </div>
    </section>
  )
}
