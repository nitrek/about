const skillCategories = [
  {
    label: "Languages & Frameworks",
    skills: [
      { name: "Java (11–25)", level: 97 },
      { name: "Python", level: 85 },
      { name: "Go", level: 80 },
      { name: "React / Next.js / TypeScript", level: 82 },
    ],
  },
  {
    label: "Cloud & Infrastructure",
    skills: [
      { name: "Kubernetes (Self-managed & Cloud)", level: 95 },
      { name: "GCP", level: 90 },
      { name: "Docker", level: 92 },
      { name: "AWS", level: 75 },
    ],
  },
  {
    label: "AI & Blockchain",
    skills: [
      { name: "Generative AI / LLMs", level: 88 },
      { name: "Agentic AI Automation", level: 85 },
      { name: "Corda / Hyperledger", level: 90 },
      { name: "Ethereum / CBDC", level: 80 },
    ],
  },
]

const tools = [
  "Kafka", "ProtoBuf", "SSE", "PostgreSQL", "MongoDB", "MySQL",
  "ELK Stack", "Grafana", "Loki", "Atlas ML", "Pandora",
  "OpenAI API", "Gemini", "Corda", "SGX Enclaves",
]

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-foreground font-medium">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{level}%</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-700"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="font-mono text-accent text-sm tracking-widest uppercase">04.</span>
        <h2 className="text-2xl font-bold text-foreground">Skills</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {skillCategories.map((cat) => (
          <div key={cat.label} className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-5">
              {cat.label}
            </h3>
            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tools */}
      <div>
        <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-4">
          Tools & Workflow
        </h3>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1.5 text-sm rounded border border-border text-muted-foreground hover:border-accent hover:text-accent transition-colors cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
