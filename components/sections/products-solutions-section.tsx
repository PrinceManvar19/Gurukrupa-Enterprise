'use client'

import { MouseEvent, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ExternalLink, Gauge, Globe, Layers, Shield, Sparkles, Workflow, Wrench } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

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

function ProductCard({ product, index, featured }: { product: Product; index: number; featured: boolean }) {
  const Icon = product.icon

  const requestDemoHref = `/contact?interest=${encodeURIComponent(product.name)}#lead-inquiry`
  const openProduct = product.url ?? '/contact'

  const handleDemoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.06, duration: 0.55, ease }}
      className={`group glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-lg ${
        featured ? 'min-h-[360px] md:p-8' : 'min-h-[300px]'
      }`}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-[0_18px_34px_rgba(79,140,255,0.16)]">
          <Icon className="h-7 w-7 text-white" />
        </div>
        {featured ? (
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">Featured</span>
        ) : null}
      </div>
      <h3 className={`font-semibold text-foreground ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{product.name}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{product.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {product.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-7 flex flex-wrap gap-3">
        <a
          href={openProduct}
          target={product.url ? '_blank' : undefined}
          rel={product.url ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center text-sm font-semibold text-accent"
        >
          {featured ? 'Visit Product' : 'Discuss Product'}
          {featured ? <ExternalLink className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
        </a>
        <a
          href={requestDemoHref}
          onClick={handleDemoClick}
          className="inline-flex items-center rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent transition hover:border-accent/45 hover:bg-accent/15"
        >
          Request a Demo
        </a>
      </div>
    </motion.div>
  )
}

export function ProductsSolutionsSection({ mode = 'full' }: { mode?: ProductsMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const isTeaser = mode === 'teaser'
  const visibleProducts = isTeaser ? products.slice(0, 3) : products
  const featuredProducts = visibleProducts.slice(0, 3)
  const standardProducts = visibleProducts.slice(3)

  return (
    <section id="products" ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Products</span>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">Productized systems for modern operations</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            A focused portfolio across AI communication, GST billing, follow-up automation, operations, ordering, and custom enterprise workflows.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} featured />
          ))}
        </div>

        {standardProducts.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {standardProducts.map((product, index) => (
              <ProductCard key={product.name} product={product} index={index + 3} featured={false} />
            ))}
          </div>
        ) : null}

        {isTeaser ? (
          <div className="mt-10 text-center">
            <a href="/products" className="magnetic-button magnetic-button-secondary inline-flex items-center justify-center px-7 py-3 text-sm font-semibold">
              View all products
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  )
}
