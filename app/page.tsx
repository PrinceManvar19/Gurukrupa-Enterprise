'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Building2, ClipboardCheck, Factory, HardHat, Layers3, ShieldCheck, Truck } from 'lucide-react'
import { SmoothScroll } from '@/components/smooth-scroll'

const ease = [0.22, 1, 0.36, 1] as const

const highlights = [
  { value: '15+', label: 'Years of trading trust' },
  { value: '500+', label: 'Project requirements supported' },
  { value: '24h', label: 'Fast quotation response' },
  { value: '100%', label: 'Quality-first sourcing' },
]

const categories = [
  {
    icon: Building2,
    title: 'Cement & Core Materials',
    description: 'Reliable supply of essential structural materials for residential, commercial, and industrial work.',
  },
  {
    icon: Layers3,
    title: 'Tiles, Flooring & Finishes',
    description: 'Premium finish options selected for durability, clean aesthetics, and long-term value.',
  },
  {
    icon: Factory,
    title: 'Steel & Hardware',
    description: 'Dependable construction hardware, reinforcement essentials, and project-ready material support.',
  },
  {
    icon: Truck,
    title: 'Bulk Procurement',
    description: 'Coordinated ordering, vendor alignment, and delivery planning for contractors and enterprises.',
  },
]

const trustPoints = [
  { icon: ShieldCheck, title: 'Verified Quality', text: 'Materials are sourced with consistency, compliance, and site-readiness in mind.' },
  { icon: ClipboardCheck, title: 'Clear Quotations', text: 'Transparent communication helps teams plan procurement without avoidable surprises.' },
  { icon: HardHat, title: 'Project Support', text: 'A practical partner for contractors, builders, and business owners from enquiry to delivery.' },
]

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <section className="relative min-h-screen overflow-hidden pt-32 pb-16 md:pt-36">
          <div className="absolute inset-0 gradient-mesh-bg" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.18),transparent_58%)]" />
          <div className="absolute inset-0 noise-overlay pointer-events-none" />

          <div className="container relative z-10 mx-auto grid min-h-[calc(100vh-9rem)] items-center gap-12 px-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur"
              >
                <BadgeCheck className="h-4 w-4" />
                Premium building material supply
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.78, ease }}
                className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-tight text-foreground md:text-7xl xl:text-8xl"
              >
                Gurukrupa Enterprise
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.75, ease }}
                className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
              >
                Quality building materials, dependable procurement, and responsive enterprise support for projects that need trust from the first quote to the final delivery.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.7, ease }}
                className="mt-10 flex flex-col gap-3 sm:flex-row"
              >
                <motion.a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg btn-premium px-8 py-4 text-base font-semibold text-primary-foreground"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#categories"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-card/70 px-8 py-4 text-base font-semibold text-foreground backdrop-blur transition hover:border-accent/35 hover:bg-accent/10"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Categories
                </motion.a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 34, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease }}
              className="relative"
            >
              <div className="product-showcase relative overflow-hidden rounded-2xl p-5 md:p-7">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Enterprise supply desk</p>
                    <h2 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">Materials planned with precision.</h2>
                  </div>
                  <Building2 className="hidden h-9 w-9 text-accent sm:block" />
                </div>
                <div className="grid gap-4">
                  {['Requirement review', 'Material selection', 'Quotation', 'Dispatch coordination'].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.58 + index * 0.1, duration: 0.55, ease }}
                      className="flex items-center gap-4 rounded-xl border border-border bg-background/55 px-4 py-4"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-sm font-bold text-accent">{index + 1}</span>
                      <span className="text-sm font-semibold text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="container relative z-10 mx-auto px-6">
            <div className="grid gap-5 md:grid-cols-4">
              {highlights.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.06, duration: 0.55, ease }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <div className="text-4xl font-semibold gradient-text md:text-5xl">{stat.value}</div>
                  <p className="mt-3 text-sm font-medium text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="categories" className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
          <div className="absolute inset-0 noise-overlay pointer-events-none" />
          <div className="container relative z-10 mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease }}
              className="mx-auto mb-14 max-w-3xl text-center"
            >
              <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Product Categories</span>
              <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Project-ready materials for confident builds</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                A focused supply portfolio for contractors, developers, architects, and businesses who value dependable quality and clean coordination.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((category, index) => {
                const Icon = category.icon

                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6, scale: 1.03 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: index * 0.06, duration: 0.55, ease }}
                    className="group glass-card rounded-2xl p-7"
                  >
                    <Icon className="mb-6 h-8 w-8 text-accent" />
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{category.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24">
          <div className="container relative z-10 mx-auto px-6">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, ease }}
              >
                <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Why Choose Us</span>
                <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Premium service without unnecessary complexity</h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  Gurukrupa Enterprise combines material knowledge with responsive communication so procurement feels organized, accountable, and professional.
                </p>
                <Link href="/contact" className="mt-8 inline-flex items-center rounded-lg btn-premium px-7 py-3 text-sm font-semibold text-primary-foreground">
                  Talk to our team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>

              <div className="grid gap-5 md:grid-cols-3">
                {trustPoints.map((point, index) => {
                  const Icon = point.icon

                  return (
                    <motion.div
                      key={point.title}
                      initial={{ opacity: 0, y: 28 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -6, scale: 1.03 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ delay: index * 0.07, duration: 0.55, ease }}
                      className="glass-card rounded-2xl p-6"
                    >
                      <Icon className="mb-5 h-8 w-8 text-accent" />
                      <h3 className="text-lg font-semibold text-foreground">{point.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{point.text}</p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  )
}
