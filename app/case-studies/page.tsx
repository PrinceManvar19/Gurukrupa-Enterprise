import { ArrowRight, Bot, FileText, MessageSquare, ShoppingCart } from 'lucide-react'

const studies = [
  {
    icon: MessageSquare,
    title: 'AI customer communication platform',
    context: 'A business needs faster customer response, inquiry qualification, and repeatable support workflows.',
    solution: 'AI chat flows, lead capture, escalation paths, and a dashboard for team follow-up.',
    outcome: 'Lower manual response load and a clearer handoff from inquiry to action.',
  },
  {
    icon: FileText,
    title: 'GST billing and reporting system',
    context: 'A growing company needs cleaner billing, taxation records, and practical reporting for daily operations.',
    solution: 'Structured invoice workflows, GST-ready records, searchable reports, and role-aware access.',
    outcome: 'More reliable financial operations and less dependency on scattered manual files.',
  },
  {
    icon: Bot,
    title: 'Lead follow-up automation',
    context: 'Sales teams lose opportunities because reminders, notes, and next actions are spread across tools.',
    solution: 'Follow-up queues, customer timelines, reminders, and simple automation around sales actions.',
    outcome: 'More consistent customer touchpoints and better visibility into active opportunities.',
  },
  {
    icon: ShoppingCart,
    title: 'Mobile ordering workflow',
    context: 'Field teams or retail users need a faster way to place, track, and manage orders from mobile devices.',
    solution: 'Mobile-first ordering screens, backend order management, status visibility, and user-friendly controls.',
    outcome: 'A smoother ordering process with less friction between customer request and fulfillment.',
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-28">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 gradient-mesh-bg" />
        <div className="container relative z-10 mx-auto grid gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-accent/20 bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur">
              Case Studies
            </span>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-7xl">
              Realistic software scenarios, built for business outcomes.
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:pb-3">
            When named testimonials are unavailable, we show the work through practical client scenarios: the operational problem, the solution pattern, and the business outcome the system is designed to support.
          </p>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {studies.map(({ icon: Icon, title, context, solution, outcome }) => (
              <article key={title} className="glass-card rounded-2xl p-7 md:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                    Scenario
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-foreground">{title}</h2>
                <div className="mt-6 grid gap-4">
                  {[
                    ['Context', context],
                    ['Solution', solution],
                    ['Outcome', outcome],
                  ].map(([label, text]) => (
                    <div key={label} className="rounded-xl border border-border bg-background/55 p-4">
                      <div className="text-xs font-semibold uppercase tracking-widest text-accent">{label}</div>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{text}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="/contact" className="btn-premium inline-flex items-center rounded-lg px-8 py-4 text-base font-semibold text-primary-foreground">
              Discuss your scenario
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
