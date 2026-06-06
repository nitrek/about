"use client"

import { useEffect, useState } from "react"
import { ArrowDown } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/portfolio/social-icons"

const roles = ["Engineering Leader", "Principal IC @ HSBC", "FinTech & Cloud Architect", "Generative AI Pioneer"]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-16"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-4">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance mb-3">
            Nitesh Singh
          </h1>
          <div className="flex items-center gap-2 h-8 mb-6">
            <span className="text-xl md:text-2xl text-muted-foreground font-light">
              {displayed}
            </span>
            <span className="w-0.5 h-6 bg-accent animate-pulse" />
          </div>
          <p className="text-muted-foreground leading-relaxed text-base max-w-md mb-8">
            10+ years building high-scale FinTech, Cloud-Native, and Distributed Systems at HSBC.
            Architecting low-latency trading platforms, multi-tenant Kubernetes infrastructure, and
            frontier AI & Blockchain products — delivering $1B+ in regulatory savings.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary-foreground text-sm font-semibold rounded hover:bg-accent/90 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-semibold rounded hover:border-accent hover:text-accent transition-colors"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-5">
            {[
              { href: "https://github.com/niteshsingh19", icon: GithubIcon, label: "GitHub" },
              { href: "https://www.linkedin.com/in/niteshsingh19", icon: LinkedinIcon, label: "LinkedIn" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Right column — decorative code block */}
        <div className="hidden md:block relative">
          <div className="bg-card border border-border rounded-lg p-6 font-mono text-sm leading-relaxed">
            <div className="flex items-center gap-1.5 mb-5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-auto text-xs text-muted-foreground">about.ts</span>
            </div>
            <pre className="overflow-x-auto">
              <code>
                <span className="text-muted-foreground">{"// Principal IC\n"}</span>
                <span className="text-blue-400">{"const "}</span>
                <span className="text-foreground">{"nitesh "}</span>
                <span className="text-muted-foreground">{"= "}</span>
                <span className="text-foreground">{"{\n"}</span>
                <span className="text-foreground">{"  "}</span>
                <span className="text-accent">{"name"}</span>
                <span className="text-muted-foreground">{": "}</span>
                <span className="text-green-400">{'"Nitesh Singh"'}</span>
                <span className="text-foreground">{",\n"}</span>
                <span className="text-foreground">{"  "}</span>
                <span className="text-accent">{"location"}</span>
                <span className="text-muted-foreground">{": "}</span>
                <span className="text-green-400">{'"Pune, India"'}</span>
                <span className="text-foreground">{",\n"}</span>
                <span className="text-foreground">{"  "}</span>
                <span className="text-accent">{"employer"}</span>
                <span className="text-muted-foreground">{": "}</span>
                <span className="text-green-400">{'"HSBC"'}</span>
                <span className="text-foreground">{",\n"}</span>
                <span className="text-foreground">{"  "}</span>
                <span className="text-accent">{"yearsExp"}</span>
                <span className="text-muted-foreground">{": "}</span>
                <span className="text-orange-400">{"10"}</span>
                <span className="text-foreground">{",\n"}</span>
                <span className="text-foreground">{"  "}</span>
                <span className="text-accent">{"transactions"}</span>
                <span className="text-muted-foreground">{": "}</span>
                <span className="text-green-400">{'"20M+ / day"'}</span>
                <span className="text-foreground">{",\n"}</span>
                <span className="text-foreground">{"  "}</span>
                <span className="text-accent">{"impact"}</span>
                <span className="text-muted-foreground">{": "}</span>
                <span className="text-green-400">{'"$1B+ savings"'}</span>
                <span className="text-foreground">{"\n};"}</span>
              </code>
            </pre>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-2xl -z-10" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-16 md:mt-20">
        <a
          href="#experience"
          aria-label="Scroll to experience"
          className="text-muted-foreground hover:text-accent transition-colors animate-bounce"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  )
}
