import { ExternalLink } from "lucide-react"

const projects = [
  {
    name: "HSBC Digital Vault",
    description:
      "Lead Developer for a foundational distributed ledger platform that transitioned $20 Billion of asset records from paper to blockchain. Featured in the Forbes Blockchain 50 and cited in press releases by the Singapore Exchange (SGX).",
    tags: ["Corda", "Blockchain", "Java", "Hyperledger", "SGX Enclaves"],
    github: null,
    live: "https://www.hsbc.com",
    stars: null,
    featured: true,
    accentColor: "from-sky-500/20 to-transparent",
  },
  {
    name: "Risk Bucket Store",
    description:
      "High-throughput risk-weighting and bucketing system running 200+ configurable rules over 20M+ daily transactions. Delivered $1B+ in structural capital savings through automated Basel IV, FRTB (SA/IMA), CRR2, and BCBS compliance. Zero production incidents over 3 years.",
    tags: ["Java", "Kafka", "GCP", "Reactive", "Basel IV", "FRTB"],
    github: null,
    live: null,
    stars: null,
    featured: true,
    accentColor: "from-emerald-500/20 to-transparent",
  },
  {
    name: "app.hsbc — K8s Hosting Platform",
    description:
      "Strategic internal Kubernetes-backed application hosting platform targeting 80% of bank-wide application workloads. Leading standardization across 100+ applications to minimize time-to-production while maintaining rigorous banking compliance.",
    tags: ["Kubernetes", "Java", "Go", "GCP", "Multi-tenant", "IaC"],
    github: null,
    live: null,
    stars: null,
    featured: true,
    accentColor: "from-violet-500/20 to-transparent",
  },
  {
    name: "CBDC Interoperability",
    description:
      "Tech Lead for HSBC's cross-border CBDC design integrating with the Banque de France experimentation program. Cited in official Banque de France press releases.",
    tags: ["CBDC", "Blockchain", "Java", "Distributed Ledger"],
    github: null,
    live: null,
    stars: null,
    featured: false,
    accentColor: "",
  },
  {
    name: "Kube-On-Prem Engine",
    description:
      "In-house Kubernetes hosting engine managing 20+ clusters and 100+ nodes using a Java backend and Go client — yielding $500K+ in annual licensing and operational savings.",
    tags: ["Kubernetes", "Java", "Go", "On-Prem"],
    github: null,
    live: null,
    stars: null,
    featured: false,
    accentColor: "",
  },
  {
    name: "AutoOps (Cert-as-Code)",
    description:
      "Automated enterprise certificate management lifecycle tool adopted by 100+ global teams, securing 1,500+ active certificates and eliminating production expiry risks bank-wide.",
    tags: ["Java", "PKI", "Automation", "DevSecOps"],
    github: null,
    live: null,
    stars: null,
    featured: false,
    accentColor: "",
  },
]

function Tag({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-medium"
      style={{ backgroundColor: "var(--tag-bg)", color: "var(--tag-text)" }}
    >
      {label}
    </span>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-accent text-sm tracking-widest uppercase">03.</span>
        <h2 className="text-2xl font-bold text-foreground">Projects</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Featured grid */}
      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {featured.map((project) => (
          <article
            key={project.name}
            className="group relative flex flex-col bg-card border border-border rounded-lg p-5 hover:border-accent/40 transition-all duration-300 overflow-hidden"
          >
            {/* Accent glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <div className="relative flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <div className="flex items-center gap-3 ml-2 shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} GitHub`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <GithubIcon size={15} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.name} live`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Tag key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Other projects — compact list */}
      <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-5">
        Other noteworthy projects
      </h3>
      <div className="grid md:grid-cols-3 gap-3">
        {others.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col bg-card border border-border rounded-lg p-4 hover:border-accent/40 transition-colors duration-200"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                {project.name}
              </h4>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} link`}
                  className="text-muted-foreground hover:text-foreground transition-colors ml-2 shrink-0"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed flex-1 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 2).map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
