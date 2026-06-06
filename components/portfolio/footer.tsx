export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs font-mono text-muted-foreground">
          Designed &amp; built by{" "}
          <span className="text-accent">Nitesh Singh</span>
        </p>
        <p className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} · Next.js · Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
