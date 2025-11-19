export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Bruno. All rights reserved.</p>
      </div>
    </footer>
  );
}