export default function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-background text-center">
      <div className="container mx-auto px-4">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Y0ussef Mahmoud. All rights reserved.
        </p>
        <div className="text-xs text-muted-foreground/50 mt-2">
          Built with React, Tailwind & Framer Motion
        </div>
      </div>
    </footer>
  );
}
