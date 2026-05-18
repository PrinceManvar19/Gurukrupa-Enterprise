'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Code2, Headphones, Layers3, Rocket, ShieldCheck } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const reasons = [
  {
    icon: Rocket,
    title: 'End-to-End Development',
    description: 'From discovery to delivery and optimization — engineering, integration, and launch support.',
  },
  {
    icon: Bot,
    title: 'AI & Automation Expertise',
    description: 'Intelligent automation and AI-enabled workflows that reduce effort and accelerate outcomes.',
  },
  {
    icon: ShieldCheck,
    title: 'Scalable Enterprise Solutions',
    description: 'Architectures designed for growth, security, reliability, and long-term maintainability.',
  },
  {
    icon: Layers3,
    title: 'Cross-Platform Development',
    description: 'Native-grade experiences across mobile and web — without compromising performance.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support & Optimization',
    description: 'Continuous improvements after go-live to keep systems fast, secure, and evolving.',
  },
  {
    icon: Code2,
    title: 'Modern Technology Stack',
    description: 'React, Flutter, Node.js, Python, AI, and IoT — delivered with enterprise best practices.',
  },
]

export function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="why-choose-us" ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Why Gurukrupa</span>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Built for enterprise outcomes</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A premium delivery model that combines engineering excellence with ongoing support so your systems keep improving after go-live.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon

            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 26 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.07, duration: 0.55, ease }}
                className="group glass-card relative overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                </div>
                <Icon className="mb-6 h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{reason.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Premium delivery', 'Continuous improvement'].map((pill) => (
                    <span key={pill} className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
