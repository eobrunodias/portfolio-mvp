"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sun, Moon, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/lib/languages";

export default function Header() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setShowLanguageMenu(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold text-foreground transition-opacity hover:opacity-75"
        >
          B.
        </Link>

        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.home}
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className={`text-sm font-medium transition-colors ${
                isActive("/skills")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.skills}
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors ${
                isActive("/projects")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.projects}
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className={`text-sm font-medium transition-colors ${
                isActive("/contacts")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.contact}
            </Link>
          </li>

          {mounted && (
            <>
              <li className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="inline-flex items-center justify-center p-2 rounded-lg border border-border transition-colors hover:bg-secondary"
                  aria-label="Toggle language"
                >
                  <Globe className="h-5 w-5" />
                </button>
                {showLanguageMenu && (
                  <div className="absolute right-0 mt-2 w-32 rounded-lg border border-border bg-background shadow-lg">
                    {(["pt-br", "en", "es"] as Language[]).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => handleLanguageChange(lang)}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                          language === lang
                            ? "bg-secondary font-medium text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {lang === "pt-br"
                          ? "Português"
                          : lang === "en"
                          ? "English"
                          : "Español"}
                      </button>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={toggleTheme}
                  className="inline-flex items-center justify-center p-2 rounded-lg border border-border transition-colors hover:bg-secondary"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
