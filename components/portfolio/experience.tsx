const experiences = [
  {
    period: "Mar 2026 — Present",
    role: "Senior Associate Director (Principal IC)",
    company: "HSBC",
    companyUrl: "https://www.hsbc.com",
    description:
      "Building app.hsbc — a strategic Kubernetes-backed application hosting platform targeting 80% of bank-wide workloads. Leading standardization across 100+ applications. Driving the Agentic AI pilot for HSBC Technology India using OpenAI and Gemini models, including an internal LLM-powered document processing pipeline.",
    tags: ["Kubernetes", "Agentic AI", "OpenAI", "Gemini", "GCP", "Java"],
  },
  {
    period: "Apr 2025 — Mar 2026",
    role: "Associate Director — Software Engineering",
    company: "HSBC",
    companyUrl: "https://www.hsbc.com",
    description:
      "Architected a mission-critical low-latency real-time pricing platform (Line Pricer) using the Atlas framework for sub-millisecond pricing of Bonds, IRS, CDS, and complex derivatives. Designed lightweight Java microservices with ProtoBuf serialization and SSE over GCP for high-availability market data delivery.",
    tags: ["Java", "ProtoBuf", "SSE", "GCP", "Low-Latency", "Microservices"],
  },
  {
    period: "May 2023 — Apr 2025",
    role: "Lead Consultant Specialist (Vice President)",
    company: "HSBC",
    companyUrl: "https://www.hsbc.com",
    description:
      "Global Delivery Lead for a high-throughput risk-bucketing system running 200+ rules over 20M+ daily transactions — zero production incidents over 3 years. Delivered $1B+ in structural capital savings (Basel IV, FRTB, CRR2). Built a live risk computation engine with sub-2s latency, saving $200K+/year on GCP. Spearheaded an in-house Kube-On-Prem platform managing 20+ clusters saving $500K+ annually. Built AutoOps certificate lifecycle tooling adopted by 100+ global teams.",
    tags: ["Java", "Python", "Kubernetes", "Go", "Kafka", "GCP", "Basel IV", "FRTB"],
  },
  {
    period: "Nov 2021 — May 2023",
    role: "Senior Consultant Specialist — Fixed Income",
    company: "HSBC",
    companyUrl: "https://www.hsbc.com",
    description:
      "Principal Developer for Fixed Income Golden Team managing infrastructure handling 1M+ daily transactions and 60K API calls/hour. Appointed Lead of the Enterprise Engineer Alumni Chapter (India). Developed 30+ micro-applications and led high-profile Blockchain/AI proof-of-concepts.",
    tags: ["Java", "React", "TypeScript", "Blockchain", "AI", "Enterprise"],
  },
  {
    period: "Jul 2016 — Nov 2021",
    role: "Consulting Specialist / Sr. Software Engineer",
    company: "HSBC",
    companyUrl: "https://www.hsbc.com",
    description:
      "Lead Developer for HSBC Digital Vault — a distributed ledger platform transitioning $20 Billion of asset records from paper to blockchain (Forbes Blockchain 50). Tech Lead for the CBDC cross-border interoperability project integrating HSBC with the Banque de France experimentation program.",
    tags: ["Corda", "Ethereum", "Hyperledger", "Blockchain", "CBDC", "SGX"],
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

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-accent text-sm tracking-widest uppercase">02.</span>
        <h2 className="text-2xl font-bold text-foreground">Experience</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="group relative md:pl-10 p-5 rounded-lg hover:bg-card transition-colors duration-200 border border-transparent hover:border-border"
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-0 top-6 w-px">
                <div className="w-2 h-2 rounded-full bg-border group-hover:bg-accent -translate-x-[3.5px] transition-colors duration-200" />
              </div>

              <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6">
                {/* Period */}
                <p className="font-mono text-xs text-muted-foreground whitespace-nowrap pt-0.5 min-w-[130px]">
                  {exp.period}
                </p>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {exp.role}{" "}
                    <span className="text-muted-foreground font-normal">·</span>{" "}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline underline-offset-2"
                    >
                      {exp.company}
                    </a>
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Tag key={tag} label={tag} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:pl-10 mt-8">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-mono text-accent hover:underline underline-offset-4"
        >
          View full résumé ↗
        </a>
      </div>
    </section>
  )
}
