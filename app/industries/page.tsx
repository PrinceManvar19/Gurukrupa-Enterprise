import { Building2, Factory, Landmark, ShoppingBag, Smartphone, UsersRound } from 'lucide-react'

const industries = [
  {
    icon: ShoppingBag,
    title: 'Retail & Distribution',
    text: 'Ordering systems, billing flows, customer follow-up, inventory visibility, and mobile-first field operations.',
  },
  {
    icon: Building2,
    title: 'Professional Services',
    text: 'Client portals, workflow dashboards, service tracking, document flows, and automation for recurring operations.',
  },
  {
    icon: Factory,
    title: 'Operations & Manufacturing',
    text: 'Process software, reporting layers, IoT-ready workflows, and internal tools for teams that run complex work.',
  },
  {
    icon: Landmark,
    title: 'Finance & Compliance',
    text: 'GST billing, reports, approval flows, secure records, and software shaped around business accountability.',
  },
  {
    icon: Smartphone,
    title: 'Digital Product Teams',
    text: 'MVPs, mobile apps, SaaS-style platforms, AI automation, integrations, and post-launch product iteration.',
  },
  {
    icon: UsersRound,
    title: 'Agencies & Partners',
    text: 'Specialized engineering support for delivery partners who need dependable build capacity and technical ownership.',
  },
]

export default function IndustriesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-28">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 gradient-mesh-bg" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl">
            <span className="mb-5 inline-flex rounded-full border border-accent/20 bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur">
              Industries
            </span>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-7xl">
              Software for teams with real operational pressure.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Gurukrupa Enterprise serves businesses that need workflow clarity, scalable systems, and support after launch across product, service, and operations-heavy environments.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, title, text }) => (
              <div key={title} className="group glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40">
                <div className="grid h-13 w-13 place-items-center rounded-2xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-foreground">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
