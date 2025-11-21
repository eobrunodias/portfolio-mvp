"use client";

export default function SkillsPage() {
  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma"],
    "Tools & DevOps": ["Git", "Docker", "Vercel", "AWS", "GitHub Actions"],
  };

  const certifications = [
    {
      title: "Full Stack Development",
      issuer: "Coursera",
      year: 2023,
    },
    {
      title: "React Advanced Patterns",
      issuer: "Udemy",
      year: 2023,
    },
    {
      title: "Cloud Architecture",
      issuer: "AWS Training",
      year: 2024,
    },
  ];

  // TODO: better my skills page
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-120px)] pt-25 pb-25">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-16">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground">
              Tecnologias e ferramentas que utilizo
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-lg border border-border bg-card p-8"
              >
                <h2 className="text-xl font-bold text-foreground mb-6">
                  {category}
                </h2>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Certificações
            </h2>
            <div className="grid gap-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-border bg-card p-6 flex items-start justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-sm font-medium text-accent">
                    {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
