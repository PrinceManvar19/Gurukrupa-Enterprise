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
  Smartphone,
  ArrowRight,
} from 'lucide-react'

type Product = {
  name: string
  url?: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  ctaLabel: string
}

type Solution = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  ctaLabel: string
}

const products: Product[] = [
  {
    name: 'Go Digital Chat',
    url: 'https://godigitalchat.com/',
    description: 'AI-powered communication and customer engagement platform for businesses.',
    icon: Sparkles,
    gradient: 'from-primary to-accent',
    ctaLabel: 'Visit Product',
  },
  {
    name: 'Mod GST',
    url: 'https://modgst.gurukrupaenterprise.com/',
    description: 'Smart GST billing and taxation management solution for modern businesses.',
    icon: Shield,
    gradient: 'from-accent to-primary',
    ctaLabel: 'Visit Product',
  },
  {
    name: 'Follow-up.io',
    url: 'https://www.followupio.com/',
    description: 'Automated customer follow-up and lead management platform.',
    icon: Workflow,
    gradient: 'from-primary to-accent',
    ctaLabel: 'Visit Product',
  },
  {
    name: 'Scratch DIGI',
    description: 'Digital business management and operational workflow platform.',
    icon: Layers,
    gradient: 'from-accent to-primary',
    ctaLabel: 'Discuss Your Need',
  },
  {
    name: 'Mob Order',
    description: 'Mobile-first smart ordering and management system.',
    icon: Globe,
    gradient: 'from-primary to-accent',
    ctaLabel: 'Discuss Your Need',
  },
  {
    name: 'CriZone',
    description: 'Sports/community engagement and management platform.',
    icon: Gauge,
    gradient: 'from-accent to-primary',
    ctaLabel: 'Discuss Your Need',
  },
  {
    name: 'Additional Internal / Custom Enterprise Solutions',
    description: 'Bespoke enterprise systems designed for your unique operations, compliance, and integration needs.',
    icon: Wrench,
    gradient: 'from-primary to-accent',
    ctaLabel: 'Discuss Your Need',
  },
]

const solutions: Solution[] = [
  {
    title: 'Mobile Application Development',
    description: 'Enterprise-grade mobile apps built for reliability, offline workflows, and seamless integrations.',
    icon: Smartphone,
    gradient: 'from-primary to-accent',
    ctaLabel: 'Request a Mobile Plan',
  },
  {
    title: 'Web Application Development',
    description: 'Scalable web applications and platforms designed for performance, security, and long-term maintainability.',
    icon: Code2,
    gradient: 'from-accent to-primary',
    ctaLabel: 'Request a Web Blueprint',
  },
]

export function ProductsSolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section id="products" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      <div className="absolute top-1/4 right-1/4 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[420px] h-[420px] bg-accent/10 rounded-full blur-[140px]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-accent font-medium tracking-wider uppercase mb-4 block">
            Products / Solutions
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Premium platforms built for <span className="gradient-text">enterprise</span> performance
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Real product capabilities for communication, billing, automation, operations, and industry engagement—delivered with
            enterprise-grade engineering.
          </p>
        </motion.div>

        {/* Products Showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {products.map((p, index) => {
            const Icon = p.icon
            const isFeatured = index === 0 || index === 1 || index === 2

            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                className="group"
              >
                <div
                  className={`glass-card rounded-lg p-7 h-full card-hover relative overflow-hidden ${
                    isFeatured ? 'ring-1 ring-accent/30' : ''
                  }`}
                >
                  {/* Glow border animation */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  >
                    <div className={`absolute -inset-[1px] rounded-lg bg-gradient-to-r ${p.gradient} opacity-30 blur-md`} />
                    <div
                      className={`absolute -inset-[1px] rounded-lg bg-gradient-to-r ${p.gradient} opacity-30`} 
                      style={{ animation: 'glow-border 2.2s linear infinite' }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-2xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                        {p.name}
                      </h3>
                      {isFeatured ? (
                        <span className="ml-auto px-3 py-1 rounded-full text-xs font-medium border border-accent/30 text-accent bg-accent/10">
                          Featured
                        </span>
                      ) : null}
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">{p.description}</p>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-sm text-foreground/90">
                        <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_18px_rgba(14,165,233,0.35)]" />
                        <span className="hidden sm:inline">Enterprise-ready</span>
                      </div>

                      {p.url ? (
                        <motion.a
                          href={p.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 rounded-lg btn-premium text-primary-foreground text-sm font-medium neon-glow"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {p.ctaLabel}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.a>
                      ) : (
                        <motion.a
                          href="/contact"
                          className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-accent/50 text-accent text-sm font-medium hover:bg-accent/10 transition-colors"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {p.ctaLabel}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* floating ui effect */}
                  <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-accent/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Dedicated Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-start justify-between gap-6 flex-col lg:flex-row">
            <div className="max-w-2xl">
              <span className="text-sm text-accent font-medium tracking-wider uppercase mb-4 block">Digital Transformation Solutions</span>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Future-ready platforms that transform your operations
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Mobile and web solutions engineered for enterprise reliability, automation-first workflows, and scalable growth.
              </p>
            </div>
            <div className="glass-card rounded-xl p-6 card-hover relative overflow-hidden w-full lg:w-[420px]">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Boxes className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-accent text-sm font-medium tracking-wider uppercase">Delivery Approach</div>
                    <div className="text-foreground font-semibold text-lg">SWAS Execution</div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Software WITH a Service—hands-on delivery, integration support, and continuous optimization after go-live.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((s, index) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.12, duration: 0.65 }}
                className="group"
              >
                <div className="glass-card rounded-xl p-7 card-hover relative overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-15 transition-opacity`} />
                  <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-25 blur-xl transition-opacity`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">{s.title}</h4>
                        <p className="text-muted-foreground text-sm">Enterprise-grade delivery</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">{s.description}</p>

                    <motion.a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-lg btn-premium text-primary-foreground text-sm font-medium neon-glow w-full sm:w-auto"
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {s.ctaLabel}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.a>
                  </div>

                  <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-accent/10 blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="text-center mt-14"
        >
          <div className="glass-card rounded-lg p-8 md:p-12 relative overflow-hidden card-hover">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-60 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-3 text-foreground">Ready to deploy your next platform?</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Contact Gurukrupa Enterprise for a solution blueprint tailored to your organization’s automation, integration, and enterprise needs.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center justify-center px-10 py-4 rounded-lg btn-premium text-primary-foreground text-lg font-medium shadow-[0_10px_24px_rgba(30,58,138,0.18)]"
              >
                Request a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

