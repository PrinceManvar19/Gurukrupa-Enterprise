'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, CheckCircle2, Workflow } from 'lucide-react'
import { ParticleField } from '@/components/particle-field'

const ease = [0.22, 1, 0.36, 1] as const
const heroStats = [
  { value: 10, suffix: '+', label: 'Years' },
  { value: 100, suffix: '+', label: 'Projects' },
  { value: 15, suffix: '+', label: 'Countries' },
  { value: 98, suffix: '%', label: 'Retention' },
]
const partners = ['TC', 'II', 'FL', 'DE', 'CN', 'SS']

function RevealWords({ text }: { text: string }) {
  return (
    <>
      {text.split(' ').map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden"
        >
          <motion.span
            className="mr-[0.18em] inline-block"
            initial={{ y: '112%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.78, delay: 0.2 + index * 0.055, ease }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </>
  )
}

export function HeroSection() {
  const [animationPhase, setAnimationPhase] = useState<'saas' | 'transition' | 'swas'>('saas')
  const [counts, setCounts] = useState(() => heroStats.map(() => 0))

  useEffect(() => {
    const transitionTimer = window.setTimeout(() => setAnimationPhase('transition'), 1800)
    const swasTimer = window.setTimeout(() => setAnimationPhase('swas'), 2400)
    let frame = 0
    let start: number | null = null

    const tick = (timestamp: number) => {
      start ??= timestamp
      const progress = Math.min((timestamp - start) / 1400, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setCounts(heroStats.map((stat) => Math.round(stat.value * eased)))

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick)
      }
    }

    frame = window.requestAnimationFrame(tick)

    return () => {
      window.clearTimeout(transitionTimer)
      window.clearTimeout(swasTimer)
      window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <div className="absolute inset-0 gradient-mesh-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(79,140,255,0.16),transparent_58%)]" />
      <ParticleField />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto grid min-h-[calc(100vh-9rem)] items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur"
          >
            <Workflow className="h-4 w-4" />
            Software WITH a Service
          </motion.div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[0.96] tracking-tight text-foreground md:text-7xl xl:text-8xl">
            <RevealWords text="Enterprise systems built around real workflows." />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.75, ease }}
            className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
          >
            Gurukrupa Enterprise builds digital products, AI workflows, mobile apps,
            and operational software with hands-on support after launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease }}
            className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {heroStats.map((stat, index) => (
              <div key={stat.label} className="rounded-2xl border border-accent/15 bg-card/60 px-4 py-3 backdrop-blur">
                <div className="text-2xl font-semibold text-foreground">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.7, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#products"
              className="inline-flex items-center justify-center rounded-lg btn-premium px-8 py-4 text-base font-semibold text-primary-foreground"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              href="#lead-inquiry"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-card/70 px-8 py-4 text-base font-semibold text-foreground backdrop-blur transition hover:border-accent/35 hover:bg-accent/10"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.92, duration: 0.7, ease }}
            className="mt-8"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Trusted by 12+ partners
            </p>
            <div className="flex flex-wrap gap-2">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="flex h-10 w-14 items-center justify-center rounded-full border border-border bg-card/70 text-xs font-semibold text-muted-foreground backdrop-blur"
                >
                  {partner}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease }}
          className="relative"
        >
          <div className="glass-card relative overflow-hidden rounded-2xl p-5 md:p-7">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">SWAS model</p>
                <h2 className="mt-2 text-2xl font-semibold text-foreground md:text-3xl">
                  From software delivery to operating partnership.
                </h2>
              </div>
              <CheckCircle2 className="hidden h-8 w-8 text-accent sm:block" />
            </div>

            <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <motion.div
                className="swas-card"
                animate={{
                  opacity: animationPhase === 'saas' ? 1 : 0.42,
                  scale: animationPhase === 'saas' ? 1 : 0.97,
                  filter: animationPhase === 'saas' ? 'blur(0px)' : 'blur(1px)',
                }}
                transition={{ duration: 0.45, ease }}
              >
                <motion.div
                  className="absolute left-5 right-5 top-1/2 h-[2px] rounded-full bg-primary"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: animationPhase !== 'saas' ? 1 : 0 }}
                  transition={{ duration: 0.45, ease }}
                />
                <span>The old way</span>
                <strong>SaaS</strong>
                <p>Software as a Service</p>
              </motion.div>

              <div className="flex justify-center text-accent">
                <ArrowRight className="hidden h-7 w-7 md:block" />
                <ArrowDown className="h-7 w-7 md:hidden" />
              </div>

              <motion.div
                className="swas-card swas-card-active"
                animate={{
                  opacity: animationPhase === 'swas' ? 1 : 0.72,
                  scale: animationPhase === 'swas' ? 1.03 : 1,
                }}
                transition={{ duration: 0.45, ease }}
              >
                <span>The Gurukrupa way</span>
                <strong>SWAS</strong>
                <p>Software WITH a Service</p>
              </motion.div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {['Hands-on Support', 'Workflow Automation', 'Continuous Optimization'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  animate={animationPhase === 'swas' ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{ delay: index * 0.12, duration: 0.55, ease }}
                  className="rounded-xl border border-border bg-background/55 px-4 py-3 text-sm font-medium text-foreground"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
