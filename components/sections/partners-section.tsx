'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const partners = [
  'Retail operations',
  'Service businesses',
  'Finance workflows',
  'Field teams',
  'Internal portals',
  'AI automation',
  'GST billing',
  'Mobile ordering',
  'Lead follow-up',
  'IoT workflows',
  'Agency delivery',
  'Custom systems',
]

const stats = [
  { value: '4', label: 'Delivery Phases' },
  { value: '6', label: 'Industry Workflows' },
  { value: 'SWAS', label: 'Support Model' },
]

function TickerRow({ reverse = false }: { reverse?: boolean }) {
  const row = [...partners, ...partners]

  return (
    <div className="overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className={`ge-marquee flex w-max gap-4 ${reverse ? 'ge-marquee-reverse' : ''}`}>
        {row.map((partner, index) => (
          <div
            key={`${partner}-${index}`}
            className="flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl border border-border bg-card px-5 text-center text-sm font-semibold text-foreground transition-all duration-300 hover:border-accent/40"
          >
            {partner}
          </div>
        ))}
      </div>
    </div>
  )
}

type PartnersMode = 'teaser' | 'full'

export function PartnersSection({ mode = 'full' }: { mode?: PartnersMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="partners" ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Workflows We Support</span>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Built for practical business ecosystems</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Gurukrupa Enterprise supports teams across operations, billing, communication, ordering, automation, and custom internal systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease }}
          className="space-y-2"
        >
          <TickerRow />
          {!mode || mode === 'full' ? <TickerRow reverse /> : null}
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.08, duration: 0.55, ease }}
              className="glass-card rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent/40"
            >
              <div className="text-4xl font-semibold text-accent md:text-5xl">{stat.value}</div>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
