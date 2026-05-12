'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Boxes,
  Sparkles,
  Workflow,
  Gauge,
  Code2,
  Shield,
  Globe,
  Wrench,
  Layers,
} from 'lucide-react'

const solutionCards = [
  {
    icon: Layers,
    title: 'SWAS Delivery Model',
    description:
      'Software WITH a Service—hands-on implementation, ongoing optimization, and measurable business outcomes.',
    gradient: 'from-primary to-accent',
    points: ['Strategy → Execution', 'Continuous improvement', 'Team enablement'],
  },
  {
    icon: Workflow,
    title: 'Enterprise Workflow Systems',
    description:
      'Automation and workflow platforms that reduce manual work and increase operational velocity.',
    gradient: 'from-accent to-primary',
    points: ['Process automation', 'Role-based approvals', 'Audit-ready reporting'],
  },
  {
    icon: Sparkles,
    title: 'AI & Data Intelligence',
    description:
      'Actionable analytics and AI-powered features that turn data into decisions.',
    gradient: 'from-primary to-accent',
    points: ['Predictive insights', 'Smart recommendations', 'Performance dashboards'],
  },
  {
    icon: Boxes,
    title: 'Scalable Product Platforms',
    description:
      'Modern architectures for products and internal tools built to scale with your roadmap.',
    gradient: 'from-accent to-primary',
    points: ['APIs & integrations', 'Secure deployments', 'Cloud-ready design'],
  },
]

const useCases = [
  { icon: Gauge, title: 'Operational Efficiency', description: 'Automate processes and standardize outcomes across teams.' },
  { icon: Globe, title: 'Global Delivery', description: 'Support multi-region operations with reliable systems.' },
  { icon: Code2, title: 'Digital Product Build', description: 'Ship high-performance web/mobile experiences for customers.' },
  { icon: Wrench, title: 'Engineering Enablement', description: 'Accelerate your team with best practices and tooling.' },
]

const industries = [
  'Technology & SaaS',
  'Finance & FinTech',
  'Healthcare & Life Sciences',
  'Logistics & Supply Chain',
  'Manufacturing',
  'Education & EdTech',
]

export function ProductsSolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="products" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[420px] h-[420px] bg-accent/10 rounded-full blur-[140px]" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-accent font-medium tracking-wider uppercase mb-4 block">
            Products / Solutions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Platforms for <span className="gradient-text">SWAS</span> growth
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Build a future-proof product ecosystem—secure, scalable, and designed around measurable business outcomes.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {solutionCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="glass-card rounded-lg p-8 h-full card-hover relative overflow-hidden">
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-20`} />
                </div>

                <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground mb-5 leading-relaxed">{card.description}</p>

                  <div className="flex flex-col gap-2">
                    {card.points.map((p) => (
                      <div key={p} className="flex items-center gap-2 text-sm text-foreground/90">
                        <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_18px_rgba(14,165,233,0.35)]" />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use cases */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-lg p-8 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative z-10">
                <div className="text-sm text-accent font-medium tracking-wider uppercase mb-3">
                  Use cases
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  Designed for outcomes
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need automation, analytics, or full product delivery—our solutions scale with your roadmap.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map((u, index) => (
                <motion.div
                  key={u.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className="glass-card rounded-lg p-6 card-hover relative overflow-hidden"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-accent/20 flex items-center justify-center">
                      <u.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold">{u.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{u.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Mockups (stylized) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="glass-card rounded-lg p-8 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-accent/10 opacity-70" />
              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-accent/10 blur-[90px]" />
              <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-primary/10 blur-[90px]" />

              <div className="relative z-10">
                <div className="text-sm text-accent font-medium tracking-wider uppercase mb-3">
                  Product mockups
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">Security-first dashboards</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Placeholder panels that preserve the futuristic identity while you add real screenshots later.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-accent/20 bg-background/40 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-muted-foreground">Analytics</span>
                      <Shield className="w-4 h-4 text-accent" />
                    </div>
                    <div className="h-28 rounded-md bg-gradient-to-r from-primary/20 to-accent/20 animate-pulse-glow" />
                    <div className="mt-3 h-2 rounded bg-border" />
                    <div className="mt-2 h-2 rounded bg-border/70" />
                  </div>

                  <div className="rounded-lg border border-accent/20 bg-background/40 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-muted-foreground">Automation</span>
                      <Sparkles className="w-4 h-4 text-accent" />
                    </div>
                    <div className="h-28 rounded-md bg-gradient-to-r from-accent/20 to-primary/20 animate-pulse-glow" />
                    <div className="mt-3 h-2 rounded bg-border" />
                    <div className="mt-2 h-2 rounded bg-border/70" />
                  </div>

                  <div className="col-span-2 rounded-lg border border-accent/20 bg-background/40 p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-muted-foreground">Integration Ecosystem</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(30,58,138,0.35)]" />
                        <div className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(14,165,233,0.35)]" />
                      </div>
                    </div>
                    <div className="h-20 rounded-md bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {industries.map((i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-xs font-medium text-foreground border border-accent/20"
                      style={{ background: 'var(--brand-green-soft)' }}
                    >
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="glass-card rounded-lg p-8 md:p-12 relative overflow-hidden card-hover">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-60 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-3 text-foreground">
                Ready to build your next platform?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Talk to Gurukrupa Enterprise about a solution blueprint tailored to your organization.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center px-10 py-4 rounded-lg btn-premium text-primary-foreground text-lg font-medium shadow-[0_10px_24px_rgba(30,58,138,0.18)]"
              >
                Request a Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
