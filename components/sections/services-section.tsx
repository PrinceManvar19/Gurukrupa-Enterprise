'use client'

import { useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Braces, Code2, Cpu, DatabaseZap, Globe2, Laptop, Layers, Network, Smartphone, Workflow } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const
const categories = ['Web Platforms', 'Mobile Products', 'AI & Automation', 'Enterprise Software'] as const

const services = [
  {
    category: 'Web Platforms',
    icon: Laptop,
    title: 'React.js Development',
    description: 'Enterprise-grade web applications with fast interfaces and component-driven architecture.',
    features: ['SPA/SSR', 'Dashboards', 'UX Systems'],
  },
  {
    category: 'Web Platforms',
    icon: Network,
    title: 'Node.js Development',
    description: 'Scalable APIs, backend services, integrations, and real-time business platforms.',
    features: ['APIs', 'Microservices', 'Security'],
  },
  {
    category: 'Web Platforms',
    icon: Code2,
    title: 'PHP Development',
    description: 'Reliable web applications, CMS customization, and secure backend implementation.',
    features: ['Web Apps', 'CMS', 'Hardening'],
  },
  {
    category: 'Mobile Products',
    icon: Smartphone,
    title: 'React Native Development',
    description: 'Cross-platform mobile apps optimized for smooth UX and maintainable delivery.',
    features: ['iOS/Android', 'Offline-ready', 'Performance'],
  },
  {
    category: 'Mobile Products',
    icon: Layers,
    title: 'Flutter Development',
    description: 'High-performance mobile products with consistent visual systems and fast iteration.',
    features: ['Cross-platform', 'Fast UI', 'Launch-ready'],
  },
  {
    category: 'Mobile Products',
    icon: Smartphone,
    title: 'Android Native',
    description: 'Robust Android applications with secure flows and scalable architecture.',
    features: ['Native UX', 'Secure Auth', 'Devices'],
  },
  {
    category: 'Mobile Products',
    icon: Smartphone,
    title: 'iOS Native',
    description: 'Polished iOS experiences built for stability, speed, and continuous improvement.',
    features: ['App Store', 'Performance', 'Integrations'],
  },
  {
    category: 'AI & Automation',
    icon: Bot,
    title: 'AI Agent Development',
    description: 'AI agents that automate tasks, support teams, and integrate with enterprise systems.',
    features: ['Agents', 'Tool Use', 'Workflows'],
  },
  {
    category: 'AI & Automation',
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Automated operational flows that reduce manual effort and improve visibility.',
    features: ['Approvals', 'Reminders', 'Dashboards'],
  },
  {
    category: 'AI & Automation',
    icon: DatabaseZap,
    title: 'Chatbot Integration',
    description: 'Business chatbots connected to lead capture, support, and internal workflows.',
    features: ['AI Chat', 'Leads', 'Support'],
  },
  {
    category: 'AI & Automation',
    icon: Braces,
    title: 'Python Automation',
    description: 'Automation scripts, APIs, and data processing for business operations.',
    features: ['Scripts', 'APIs', 'Data'],
  },
  {
    category: 'Enterprise Software',
    icon: Layers,
    title: 'ERP Systems',
    description: 'Custom ERP modules for approvals, billing, inventory, reporting, and team workflows.',
    features: ['Modules', 'Roles', 'Reports'],
  },
  {
    category: 'Enterprise Software',
    icon: Globe2,
    title: 'Custom Enterprise Builds',
    description: 'Bespoke systems designed around operations, compliance, integrations, and growth.',
    features: ['Custom', 'Scalable', 'SWAS'],
  },
  {
    category: 'Enterprise Software',
    icon: Code2,
    title: 'VB.NET / Legacy Modernisation',
    description: 'Maintain, modernize, and extend enterprise systems with clean reliability.',
    features: ['Legacy', 'Desktop', 'Modernization'],
  },
  {
    category: 'Enterprise Software',
    icon: Cpu,
    title: 'IoT Integration',
    description: 'Connected device and sensor workflows that feed operational dashboards.',
    features: ['Devices', 'Monitoring', 'Alerts'],
  },
] satisfies Array<{
  category: (typeof categories)[number]
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
}>

type ServicesMode = 'teaser' | 'full'

export function ServicesSection({ mode = 'full' }: { mode?: ServicesMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('Web Platforms')
  const isTeaser = mode === 'teaser'

  const visibleServices = useMemo(() => {
    const filtered = services.filter((service) => service.category === activeCategory)
    return isTeaser ? filtered.slice(0, 3) : filtered
  }, [activeCategory, isTeaser])

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-linear-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">What We Do</span>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Engineering services with business context</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Web, mobile, AI automation, IoT, and enterprise software services delivered through a hands-on model that includes planning, launch, and support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6, ease }}
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'border-accent bg-accent text-white'
                  : 'border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.03 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.07, duration: 0.55, ease }}
                className="glass-card rounded-2xl p-6 transition-shadow duration-300 hover:border-accent/40 hover:bg-accent/5"
              >
                <Icon className="mb-5 h-8 w-8 text-accent" />
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span key={feature} className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {isTeaser ? (
          <div className="mt-10 text-center">
            <a href="/services" className="magnetic-button magnetic-button-secondary inline-flex items-center justify-center px-7 py-3 text-sm font-semibold">
              Explore service capabilities
            </a>
          </div>
        ) : (
          <div className="mt-12 text-center">
            <a href="/contact" className="btn-premium inline-flex items-center justify-center rounded-lg px-8 py-4 text-base font-semibold text-primary-foreground">
              Discuss your requirement →
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
