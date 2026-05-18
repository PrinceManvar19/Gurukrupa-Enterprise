'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Building2, Factory, GraduationCap, Headphones, HeartPulse, MessageCircle, PackageCheck, RefreshCw, Route, ShieldCheck, ShoppingBag, Truck } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const swasFeatures = [
  { icon: Headphones, title: 'Long-term support', text: 'A technical partner stays involved after launch for fixes, changes, training, and operational improvements.' },
  { icon: RefreshCw, title: 'Faster iterations', text: 'Feedback from real usage turns into practical product updates without restarting the relationship.' },
  { icon: MessageCircle, title: 'Direct communication', text: 'Clear conversations with the team building and supporting the software, not layers of handoff.' },
  { icon: ShieldCheck, title: 'Business-focused delivery', text: 'Decisions are tied to workflow, adoption, reliability, and measurable business value.' },
]

const processSteps = ['Discovery', 'Planning', 'Development', 'Testing', 'Deployment', 'Ongoing Support']

const industries = [
  { icon: ShoppingBag, title: 'Retail', text: 'POS, customer follow-up, billing, ordering, and store operations.' },
  { icon: Factory, title: 'Manufacturing', text: 'Production visibility, approvals, reporting, and internal workflow tools.' },
  { icon: PackageCheck, title: 'Distribution', text: 'Inventory, order movement, stock tracking, and operational dashboards.' },
  { icon: Truck, title: 'Logistics', text: 'Dispatch workflows, mobile updates, route visibility, and status tracking.' },
  { icon: HeartPulse, title: 'Healthcare', text: 'Appointments, records, billing queues, and staff coordination systems.' },
  { icon: GraduationCap, title: 'Education', text: 'Institute management, student records, portals, and administrative automation.' },
]

const socialProof = [
  { icon: ShoppingBag, industry: 'Retail Store', outcome: 'Reduced billing time by 40% with a custom POS workflow.' },
  { icon: Factory, industry: 'Manufacturing Unit', outcome: 'Improved stock visibility with inventory movement dashboards.' },
  { icon: Building2, industry: 'Service Business', outcome: 'Saved weekly reporting effort through centralized ERP modules.' },
]

const faqs = [
  ['How long does a project take?', 'Timelines depend on scope, integrations, and review cycles. Small workflow systems can start in weeks, while larger ERP-style builds are planned in phases.'],
  ['Do you offer long-term support?', 'Yes. SWAS is built around long-term technical support, maintenance, improvements, and practical help after launch.'],
  ['Can you modernise legacy software?', 'Yes. We can maintain, extend, or modernise legacy systems including VB.NET and older business applications.'],
  ['Do you build custom ERP systems?', 'Yes. We build ERP-style systems around business workflows such as approvals, billing, inventory, reporting, and team roles.'],
  ['Do you work with international clients?', 'Yes. Gurukrupa Enterprise is based in India and can support remote project planning, delivery, and ongoing communication for international clients.'],
]

export function WhySwasSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/35 to-background" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Why SWAS?</span>
          <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">Software WITH a Service for long-term business confidence.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Built for modern Indian businesses that need a dependable technical partnership, 24-hour response commitment, and software that keeps improving after launch.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {swasFeatures.map(({ icon: Icon, title, text }, index) => (
            <motion.div key={title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06, duration: 0.55, ease }} className="glass-card group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProcessTimelineSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">How We Work</span>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">A clear delivery flow from first call to ongoing support.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {processSteps.map((step, index) => (
            <motion.div key={step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.5, ease }} className="relative rounded-2xl border border-border bg-card/70 p-5 backdrop-blur transition hover:-translate-y-1 hover:border-accent/35">
              <div className="mb-5 flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/10 text-sm font-semibold text-accent">{index + 1}</span>
                <Route className="h-5 w-5 text-accent/70" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function IndustriesServeSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/35 to-background" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Industries We Serve</span>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Industrial-business focused software for practical operations.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, title, text }) => (
            <div key={title} className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40">
              <Icon className="h-7 w-7 text-accent" />
              <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SocialProofSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/35 to-background" />
      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Social Proof</span>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Trusted by businesses across India</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {socialProof.map(({ icon: Icon, industry, outcome }) => (
            <div key={industry} className="glass-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40">
              <Icon className="h-8 w-8 text-accent" />
              <div className="mt-5 text-sm font-semibold uppercase tracking-widest text-accent">{industry}</div>
              <p className="mt-3 text-xl font-semibold leading-8 text-foreground">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="container relative z-10 mx-auto grid gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">FAQ</span>
          <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">Common questions before starting a project.</h2>
        </div>
        <Accordion type="single" collapsible className="glass-card rounded-2xl p-4 md:p-6">
          {faqs.map(([question, answer], index) => (
            <AccordionItem key={question} value={`faq-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-accent">{question}</AccordionTrigger>
              <AccordionContent className="text-sm leading-7 text-muted-foreground">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
