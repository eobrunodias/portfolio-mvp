const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Plataforma de e-commerce completa com autenticação, carrinho de compras e integração com Stripe para pagamento.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    id: 2,
    title: "Blog Pessoal",
    description: "Blog minimalista com sistema de comentários, markdown support e dark mode.",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Supabase"],
    link: "#",
  },
  {
    id: 3,
    title: "App de Tarefas",
    description: "Aplicativo de gestão de tarefas com sincronização em tempo real entre dispositivos.",
    tags: ["React", "Firebase", "TypeScript", "Material-UI"],
    link: "#",
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description: "Dashboard de análise de dados com gráficos interativos e relatórios customizáveis.",
    tags: ["Next.js", "Recharts", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    id: 5,
    title: "Sistema de Agendamento",
    description: "Plataforma de agendamento com calendário interativo e notificações por email.",
    tags: ["Next.js", "React Query", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    id: 6,
    title: "Gerador de Avatares",
    description: "Ferramenta para gerar avatares personalizados com diferentes estilos e customizações.",
    tags: ["React", "Canvas API", "TypeScript", "Next.js"],
    link: "#",
  },
]

export default function ProjectsGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-foreground hover:shadow-lg"
        >
          <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-sm text-foreground">
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            className="mt-6 inline-flex text-sm font-medium text-accent hover:text-foreground transition-colors"
          >
            Ver projeto →
          </a>
        </div>
      ))}
    </div>
  )
}
