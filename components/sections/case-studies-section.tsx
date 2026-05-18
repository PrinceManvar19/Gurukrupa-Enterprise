'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Boxes, Building2, CheckCircle2, Database, FileText, Gauge, Layers3, ShoppingCart, Workflow } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const caseStudies = [
  {
    type: 'ERP Management System',
    title: 'Centralized ERP for a multi-department service business',
    challenge: 'Teams were managing customers, approvals, invoices, and task status across spreadsheets and disconnected messaging channels.',
    solution: 'Built a role-based ERP workspace with customer records, approval flows, billing checkpoints, task ownership, and management dashboards.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Role-based access'],
    metrics: [
      ['42%', 'faster approval cycle'],
      ['18 hrs', 'saved weekly in reporting'],
      ['6', 'core workflows unified'],
    ],
    timeline: ['Discovery', 'Workflow map', 'MVP', 'Launch support'],
    icon: Building2,
    accent: 'blue',
  },
  {
    type: 'Retail POS Platform',
    title: 'Modern POS and customer follow-up platform for retail operations',
    challenge: 'Store staff needed faster billing, product lookup, customer history, and follow-up reminders without switching between tools.',
    solution: 'Delivered a POS experience with quick billing, inventory visibility, customer profiles, purchase history, and automated follow-up cues.',
    tech: ['Next.js', 'Firebase', 'Cloud Functions', 'Mobile-first UI'],
    metrics: [
      ['31%', 'quicker checkout flow'],
      ['24%', 'increase in repeat follow-ups'],
      ['3', 'store workflows connected'],
    ],
    timeline: ['Audit', 'Prototype', 'Pilot', 'Rollout'],
    icon: ShoppingCart,
    accent: 'cyan',
  },
  {
    type: 'Inventory & Warehouse Automation',
    title: 'Inventory visibility layer for stock movement and warehouse teams',
    challenge: 'Warehouse updates were delayed, stock variance was difficult to trace, and teams lacked one shared operational view.',
    solution: 'Created inventory dashboards, scan-based stock movement, exception alerts, low-stock views, and daily warehouse summaries.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'Barcode workflows'],
    metrics: [
      ['37%', 'fewer manual stock checks'],
      ['2.5x', 'faster stock lookup'],
      ['12', 'movement statuses tracked'],
    ],
    timeline: ['Process study', 'Data model', 'Mobile build', 'Optimization'],
    icon: Boxes,
    accent: 'violet',
  },
]

function DashboardPreview({ study, index }: { study: (typeof caseStudies)[number]; index: number }) {
  const Icon = study.icon

  return (
    <div className={`case-preview case-preview-${study.accent}`}>
      <div className="case-preview-top">
        <div className="flex items-center gap-2">
          <span />
          <span />
          <span />
        </div>
        <div className="case-preview-url">{study.type}</div>
      </div>
      <div className="case-preview-body">
        <aside className="case-preview-rail">
          {[Workflow, Database, Gauge, FileText].map((RailIcon, railIndex) => (
            <div key={railIndex} className={railIndex === index % 4 ? 'active' : ''}>
              <RailIcon className="h-4 w-4" />
            </div>
          ))}
        </aside>
        <div className="case-preview-main">
          <div className="case-preview-heading">
            <div className="case-preview-mark">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <strong>{study.type}</strong>
              <span>Operational command view</span>
            </div>
          </div>
          <div className="case-preview-chart">
            {[62, 44, 78, 52, 86, 68].map((height, barIndex) => (
              <i key={barIndex} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="case-preview-grid">
            {study.metrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="case-preview-flow">
            {study.timeline.map((step, stepIndex) => (
              <div key={step}>
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>{stepIndex + 1}. {step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function CaseStudiesSection({ compact = false }: { compact?: boolean }) {
  const visibleStudies = compact ? caseStudies.slice(0, 3) : caseStudies

  return (
    <section id="case-studies" className="case-section relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 case-section-bg" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-accent/20 bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur">
            Case Studies
          </span>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            Enterprise builds shown through outcomes, not hype.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Realistic project scenarios that show how Gurukrupa Enterprise approaches workflow problems, software architecture, launch readiness, and measurable operational improvement.
          </p>
        </div>

        <div className="space-y-8">
          {visibleStudies.map((study, index) => {
            const reverse = index % 2 === 1
            const Icon = study.icon

            return (
              <motion.article
                key={study.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: index * 0.06, ease }}
                className="case-study-card"
              >
                <div className={`grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div>
                    <div className="mb-5 flex items-center gap-3">
                      <div className="case-study-icon">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{study.type}</span>
                    </div>
                    <h3 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">{study.title}</h3>

                    <div className="mt-7 grid gap-4">
                      <div className="case-story-block">
                        <span>Challenge</span>
                        <p>{study.challenge}</p>
                      </div>
                      <div className="case-story-block">
                        <span>Solution</span>
                        <p>{study.solution}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {study.tech.map((item) => (
                        <span key={item} className="case-tech-pill">{item}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <DashboardPreview study={study} index={index} />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {compact ? (
          <div className="mt-12 text-center">
            <a href="/case-studies" className="btn-premium inline-flex items-center rounded-lg px-8 py-4 text-base font-semibold text-primary-foreground">
              View case studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-border bg-card/70 p-6 text-center backdrop-blur md:p-8">
            <Layers3 className="mx-auto h-7 w-7 text-accent" />
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Metrics are presented as realistic outcome examples for project scenarios. Actual results depend on scope, team adoption, workflow complexity, and post-launch optimization.
            </p>
            <a href="/contact" className="mt-6 inline-flex items-center text-sm font-semibold text-accent">
              Discuss your workflow
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
