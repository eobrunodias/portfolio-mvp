"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { t } = useLanguage();

  // TODO: create the about page
  // TODO: fix the style padding of other pages in t/b
  // TODO: change color agressive
  // TODO: change the copywrite in my pages
  // TODO: change for hero component
  // TODO: add my picture edition
  // TODO: make the logic for search only project that i set in my repository
  // TODO: verify if is ssg or is only client
  return (
    <section className="flex items-center h-screen pt-20 pb-20">
      <div className="mx-auto max-w-6xl  w-full">
        <div className="space-y-12 flex flex-col items-center">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
              {t.hero_greeting} <span className="">{t.hero_title}.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              {t.hero_description}
            </p>
          </div>

          {/* Moved social links to hero and removed featured projects section */}
          <div className="flex flex-wrap max-w-3xl justify-between w-full border-t border-border pt-8">
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/eobrunodias"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded-lg border border-border text-foreground transition-colors hover:bg-secondary"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>

              <a
                href="https://linkedin.com/in/eobrunodias"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center p-3 rounded-lg border border-border text-foreground transition-colors hover:bg-secondary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:brunodias.contact@gmail.com"
                className="inline-flex items-center justify-center p-3 rounded-lg border border-border text-foreground transition-colors hover:bg-secondary"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-foreground text-background font-medium transition-all hover:opacity-85"
              >
                Ver Projetos
              </a>
              <a
                href="/contacts"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium transition-all hover:opacity-85"
              >
                {t.contact_btn}
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-wrap gap-2 border-t border-border"></div>
        </div>
      </div>
    </section>
  );
}
