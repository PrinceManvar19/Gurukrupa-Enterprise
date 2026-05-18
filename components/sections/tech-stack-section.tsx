'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const techs = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Full-stack' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Automation' },
  { name: 'PHP', category: 'Web' },
  { name: 'VB.NET', category: 'Enterprise' },
  { name: 'Android', category: 'Native' },
  { name: 'iOS', category: 'Native' },
  { name: 'AI/ML', category: 'Intelligence' },
  { name: 'IoT', category: 'Connected Systems' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Firebase', category: 'Cloud Backend' },
  { name: 'Cloud Infrastructure', category: 'DevOps' },
  { name: 'Docker', category: 'Deployment' },
]

export function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="tech-stack" ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Tech Stack</span>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Modern engineering for enterprise delivery</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Technologies selected for scalable products, automation, AI workflows, mobile experiences, and dependable operations.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.035, duration: 0.5, ease }}
              className="rounded-full border border-border bg-card px-4 py-2 text-center transition-all duration-300 hover:scale-105 hover:border-accent/40"
            >
              <div className="text-sm font-semibold text-foreground">{tech.name}</div>
              <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">{tech.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
