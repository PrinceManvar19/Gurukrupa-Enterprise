'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Gauge, Globe, Layers, Shield, Sparkles, Workflow, Wrench } from 'lucide-react'

type Product = {
  name: string
  url?: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  tags: string[]
}

const products: Product[] = [
  {
    name: 'Go Digital Chat',
    url: 'https://godigitalchat.com/',
    description: 'AI-powered communication and customer engagement platform for businesses.',
    icon: Sparkles,
    tags: ['AI Chat', 'Automation', 'Support'],
  },
  {
    name: 'Mod GST',
    url: 'https://modgst.gurukrupaenterprise.com/',
    description: 'Smart GST billing and taxation management solution for modern businesses.',
    icon: Shield,
    tags: ['GST', 'Billing', 'Reports'],
  },
  {
    name: 'Follow-up.io',
    url: 'https://www.followupio.com/',
    description: 'Automated customer follow-up and lead management platform.',
    icon: Workflow,
    tags: ['Leads', 'CRM', 'Reminders'],
  },
  {
    name: 'Scratch DIGI',
    description: 'Digital business management and operational workflow platform.',
    icon: Layers,
    tags: ['Operations', 'Dashboards', 'Teams'],
  },
  {
    name: 'Mob Order',
    description: 'Mobile-first smart ordering and management system.',
    icon: Globe,
    tags: ['Orders', 'Mobile', 'Retail'],
  },
  {
    name: 'CriZone',
    description: 'Sports and community engagement management platform.',
    icon: Gauge,
    tags: ['Sports', 'Events', 'Engagement'],
  },
  {
    name: 'Custom Enterprise Products',
    description: 'Bespoke systems designed around your operations, compliance, and integrations.',
    icon: Wrench,
    tags: ['Custom', 'Enterprise', 'SWAS'],
  },
]

type ProductsMode = 'teaser' | 'full'

export function ProductsSolutionsSection({ mode = 'full' }: { mode?: ProductsMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const isTeaser = mode === 'teaser'
  const visibleProducts = isTeaser ? products.slice(0, 3) : products

  return (
    <section id="products" ref={sectionRef} className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      <div className="absolute right-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-accent">Products</span>
          <h2 className="mb-6 text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            Digital products for <span className="gradient-text">modern businesses</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A focused product portfolio for AI chat, GST billing, lead follow-up, digital operations, ordering, and engagement.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product, index) => {
            const Icon = product.icon
            const featured = index < 3
            const href = product.url ?? '/contact'

            return (
              <motion.a
                key={product.name}
                href={href}
                target={product.url ? '_blank' : undefined}
                rel={product.url ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.07, duration: 0.55 }}
                className="group glass-card card-hover rounded-lg p-7"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  {featured ? (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      Featured
                    </span>
                  ) : null}
                </div>
                <h3 className="text-2xl font-semibold text-foreground group-hover:gradient-text">{product.name}</h3>
                <p className="mt-3 min-h-16 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-accent/20 px-3 py-1 text-xs font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center text-sm font-semibold text-accent">
                  {product.url ? 'Visit Product' : 'Discuss Product'}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={isTeaser ? '/products' : '/contact'}
            className="inline-flex items-center justify-center rounded-lg btn-premium px-8 py-4 text-base font-semibold text-primary-foreground"
          >
            {isTeaser ? 'Learn More' : 'Start a Product Conversation'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
