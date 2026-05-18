import { ArrowRight, CheckCircle2, Headphones, RefreshCw, Route, Workflow } from 'lucide-react'

const phases = [
  ['Discover', 'Map the workflow, users, systems, risks, and business priorities.'],
  ['Build', 'Design and engineer the software with clear reviews and iteration points.'],
  ['Launch', 'Support deployment, onboarding, data readiness, and handover.'],
  ['Improve', 'Continue maintenance, enhancements, automation, and operational tuning.'],
]

const commitments = [
  'Software planned around the way the business actually works',
  'Implementation and support included as part of the delivery model',
  'Clear communication across planning, build, launch, and maintenance',
  'Long-term improvements instead of a one-time handover',
]

export default function SwasPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-28">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 gradient-mesh-bg" />
        <div className="container relative z-10 mx-auto grid gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-accent/20 bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur">
              SWAS Model
            </span>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-7xl">
              Software WITH a Service.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              SWAS is Gurukrupa Enterprise&apos;s delivery model for businesses that need software plus the service layer required to adopt, operate, and improve it over time.
            </p>
            <a href="/contact" className="btn-premium mt-9 inline-flex items-center rounded-lg px-8 py-4 text-base font-semibold text-primary-foreground">
              Plan a SWAS Build
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="glass-card rounded-2xl p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                <Workflow className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Operating Partnership</div>
                <div className="text-sm text-muted-foreground">From first requirement to post-launch improvement</div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {phases.map(([title, text], index) => (
                <div key={title} className="rounded-2xl border border-border bg-background/55 p-5">
                  <div className="text-sm font-semibold text-accent">0{index + 1}</div>
                  <h2 className="mt-3 text-xl font-semibold text-foreground">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
        <div className="container relative z-10 mx-auto grid gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Why it matters</span>
            <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Enterprise software succeeds when adoption is designed into delivery.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [Route, 'Process clarity', 'Users, approvals, reporting, and exceptions are clarified before code becomes expensive.'],
              [Headphones, 'Support readiness', 'Launch includes practical support for teams, issues, training, and improvements.'],
              [RefreshCw, 'Continuous improvement', 'The product keeps evolving with usage feedback and changing operational needs.'],
              [CheckCircle2, 'Accountable delivery', 'Each phase has clear outcomes, review points, and next-step decisions.'],
            ].map(([Icon, title, text]) => {
              const TypedIcon = Icon as typeof Route
              return (
                <div key={title as string} className="glass-card rounded-2xl p-6">
                  <TypedIcon className="h-7 w-7 text-accent" />
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{title as string}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{text as string}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">SWAS commitments</h2>
            <div className="mt-7 grid gap-3 md:grid-cols-2">
              {commitments.map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-border bg-background/55 p-4 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
