export default function About() {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-120px)] pt-25 pb-25">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-16">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              About me
            </h1>
            <p className="text-xl text-muted-foreground">
              Tecnologias e ferramentas que utilizo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
