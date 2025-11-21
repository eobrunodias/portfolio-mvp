export default function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-left space-y-8">
        <div>
          <h1 className="text-5xl font-bold text-foreground">
            Olá, sou um desenvolvedor fullstack
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground leading-relaxed">
            Construo aplicações web modernas e responsivas com foco em
            experiência do usuário e código limpo. Especializado em React,
            Next.js e TypeScript.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-foreground text-background font-medium transition-all hover:opacity"
          >
            Ver Projetos
          </a>
          <a
            href="/contacts"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-medium transition-all hover:bg-secondary"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
