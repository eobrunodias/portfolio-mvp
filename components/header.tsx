"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
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
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`text-sm font-medium transition-colors ${
                isActive("/projetos")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className={`text-sm font-medium transition-colors ${
                isActive("/contato")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="/contacts"
              className={`text-sm font-medium transition-colors ${
                isActive("/contato")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Contacts
            </Link>
          </li>
        </ul>

        {/* TODO: create div and position right > */}
        {/* TODO: change language */}
        {/* TODO: change theme color */}
      </nav>
    </header>
  );
}
