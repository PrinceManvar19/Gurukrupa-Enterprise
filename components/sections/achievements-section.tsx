'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

const milestones = [
  {
    year: '01',
    title: 'Workflow discovery',
    description: 'We map the current process, users, constraints, risks, and business priorities before proposing a build.',
  },
  {
    year: '02',
    title: 'Solution architecture',
    description: 'The team defines modules, integrations, data flows, deployment needs, and a realistic delivery roadmap.',
  },
  {
    year: '03',
    title: 'Product delivery',
    description: 'Design, engineering, QA, and stakeholder review move together so the product stays close to operational reality.',
  },
  {
    year: '04',
    title: 'Launch enablement',
    description: 'We support deployment, onboarding, handover, and production readiness for the people who will use the system.',
  },
  {
    year: '05',
    title: 'Maintenance rhythm',
    description: 'After go-live, support cycles cover fixes, improvements, monitoring, and feature decisions as business needs change.',
  },
  {
    year: '06',
    title: 'Continuous optimization',
    description: 'Usage feedback, automation opportunities, and technical improvements feed the next version of the system.',
  },
]

type AchievementsMode = 'teaser' | 'full'

export function AchievementsSection({ mode = 'full' }: { mode?: AchievementsMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const visibleMilestones = mode === 'teaser' ? milestones.slice(-3) : milestones

  return (
    <section id="achievements" ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Delivery Methodology</span>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">A transparent path from requirement to support</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Enterprise confidence comes from clear process, visible decisions, and support that continues beyond launch.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:left-1/2" />

          <div className="space-y-8">
            {visibleMilestones.map((milestone, index) => {
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isLeft ? -34 : 34 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.6, ease }}
                  className={`relative grid gap-6 pl-14 md:grid-cols-2 md:pl-0 ${isLeft ? '' : 'md:[&>*:last-child]:col-start-2'}`}
                >
                  <div className="absolute left-5 top-2 z-10 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white md:left-1/2">
                    {milestone.year}
                  </div>
                  <div className={`${isLeft ? 'md:pr-16' : 'md:col-start-2 md:pl-16'}`}>
                    <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-lg">
                      <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
