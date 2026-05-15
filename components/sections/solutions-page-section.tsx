'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Check, Cloud, Code2, Layers3, Rocket, Smartphone, Workflow } from 'lucide-react'

const solutions = [
  {
    title: 'Mobile App Development',
    icon: Smartphone,
    description: 'Enterprise-grade Android, iOS, React Native, and Flutter apps built for real business workflows.',
    features: ['Native and cross-platform delivery', 'Secure API integrations', 'Offline-ready workflows', 'App launch and post-live support'],
  },
  {
    title: 'Web App Development',
    icon: Code2,
    description: 'Scalable web applications, portals, dashboards, and custom platforms built with modern full-stack engineering.',
    features: ['React.js interfaces', 'Node.js, Python, PHP backends', 'Cloud-ready architecture', 'Performance and security practices'],
  },
]

const swasPoints = [
  'Software planned around your business process',
  'Implementation, training, and continuous support included',
  'Ongoing improvements after launch',
  'A product team that stays involved as your needs change',
]

const deliveryHighlights: { title: string; icon: LucideIcon; text: string }[] = [
  {
    title: 'Architecture',
    icon: Layers3,
    text: 'Scalable foundations for long-term product growth.',
  },
  {
    title: 'Cloud Ready',
    icon: Cloud,
    text: 'Deployment patterns designed for modern operations.',
  },
  {
    title: 'Launch Support',
    icon: Rocket,
    text: 'Post-go-live support, iteration, and improvement.',
  },
]

export function SolutionsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pt-28">
      <section className="relative overflow-hidden bg-[#0a1628] py-24 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(26,86,219,0.34),transparent_45%),linear-gradient(45deg,transparent,rgba(14,165,233,0.2))]" />
        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-sky-100 backdrop-blur">
              Digital Transformation Solutions
            </span>
            <h1 className="text-5xl font-black tracking-tight md:text-7xl">Build the right software, with the right service.</h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Gurukrupa Enterprise delivers mobile and web solutions through SWAS: Software WITH a Service. We do not just hand over code; we help launch, improve, and support the system.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#1a56db] px-7 py-4 font-bold text-white hover:bg-[#2563eb]">
                Discuss a Solution <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="/services" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-7 py-4 font-bold text-white hover:bg-white/15">
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/70 to-background" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-accent">SWAS Model</span>
              <h2 className="text-4xl font-bold text-foreground md:text-5xl">
                Software WITH a <span className="gradient-text">Service</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                SWAS combines product engineering with hands-on service, so your software is planned, launched, supported, and improved with a long-term delivery partner.
              </p>
            </div>
            <div className="glass-card rounded-lg p-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                  <Workflow className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">SWAS Delivery Flow</div>
                  <div className="text-sm text-muted-foreground">Plan, build, launch, improve</div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {swasPoints.map((point) => (
                  <div key={point} className="flex gap-3 rounded-lg border border-accent/15 bg-card/70 p-4 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="glass-card card-hover rounded-lg p-8"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground">{solution.title}</h3>
                  <p className="mt-4 text-muted-foreground">{solution.description}</p>
                  <ul className="mt-6 space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-[#0a1628] py-20 text-white">
        <div className="container mx-auto grid gap-6 px-6 md:grid-cols-3">
          {deliveryHighlights.map(({ title, icon: Icon, text }) => (
            <div key={title} className="rounded-lg border border-white/10 bg-white/8 p-6">
              <Icon className="h-7 w-7 text-[#0ea5e9]" />
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
