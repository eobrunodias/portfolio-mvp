"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-120px)] pt-20 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="space-y-12 flex flex-col items-center text-center">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground leading-tight">
              {t.hero_greeting}{" "}
              <span className="text-accent">{t.hero_title}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              {t.hero_description}
            </p>
          </div>

          {/* Moved social links to hero and removed featured projects section */}
          <div className="flex flex-wrap gap-4 justify-center">
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
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-3 rounded-lg border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:seu@email.com"
              className="inline-flex items-center justify-center p-3 rounded-lg border border-border text-foreground transition-colors hover:bg-secondary"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="pt-8 border-t border-border">
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium transition-all hover:opacity-90"
            >
              {t.contact_btn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
