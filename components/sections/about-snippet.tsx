'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Handshake, Lightbulb, Target } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const values = [
  {
    icon: Target,
    title: 'Vision-Driven',
    description: 'Long-term solutions that evolve with your business',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Pioneering cutting-edge technologies for real outcomes',
  },
  {
    icon: Handshake,
    title: 'Client-Centric',
    description: 'Lasting partnerships built on trust and results',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Premium quality delivered in every project',
  },
]

export function AboutSnippet() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto grid gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">About</span>
          <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Pioneering Digital Excellence
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
            <p>
              For over a decade, Gurukrupa Enterprise has been at the forefront of technological innovation, delivering transformative solutions that empower businesses to thrive in the digital age.
            </p>
            <p>
              We don&apos;t just deliver software — we partner with you through our SWAS model, providing hands-on support, strategic guidance, and continuous optimization to ensure your success.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 34 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.6, ease }}
                className="glass-card rounded-2xl border-accent/20 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-lg"
              >
                <Icon className="mb-5 h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
