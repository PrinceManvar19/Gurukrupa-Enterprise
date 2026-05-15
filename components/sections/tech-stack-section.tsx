'use client'

import { useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Cpu,
  Code2,
  Layers,
  Network,
  Shield,
  Sparkles,
  Smartphone,
  GitBranch,
  Database,
} from 'lucide-react'

const STACK = [
  { key: 'React', label: 'React', gradient: 'from-primary to-accent', icon: Code2 },
  { key: 'React Native', label: 'React Native', gradient: 'from-accent to-primary', icon: Smartphone },
  { key: 'Node.js', label: 'Node.js', gradient: 'from-primary to-accent', icon: Network },
  { key: 'Flutter', label: 'Flutter', gradient: 'from-accent to-primary', icon: Layers },
  { key: 'Python', label: 'Python', gradient: 'from-primary to-accent', icon: Database },
  { key: 'AI', label: 'AI', gradient: 'from-accent to-primary', icon: Sparkles },
  { key: 'IoT', label: 'IoT', gradient: 'from-primary to-accent', icon: Network },
  { key: 'VB.NET', label: 'VB.NET', gradient: 'from-accent to-primary', icon: GitBranch },
  { key: 'PHP', label: 'PHP', gradient: 'from-primary to-accent', icon: Cpu },
]

export function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const items = useMemo(() => {
    return STACK.map((s) => ({ ...s, Icon: s.icon }))
  }, [])

  return (
    <section id="tech-stack" ref={sectionRef} className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute top-1/4 right-1/4 w-[520px] h-[520px] bg-primary/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[420px] h-[420px] bg-accent/10 rounded-full blur-[140px]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-accent font-medium tracking-wider uppercase mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Modern engineering for <span className="gradient-text">enterprise</span> delivery
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Built with the technologies that power automation, AI, mobile experiences, and scalable web platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.06, duration: 0.65 }}
              className="group"
            >
              <div className="glass-card rounded-xl p-7 card-hover relative overflow-hidden h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                />
                <div
                  className={`absolute -inset-1 rounded-xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-[0_0_28px_rgba(14,165,233,0.22)]`}
                    >
                      {item.Icon ? <item.Icon className="w-7 h-7 text-white" /> : null}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                        {item.label}
                      </h3>
                      <p className="text-muted-foreground text-sm">Enterprise-ready modules</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium border border-accent/20 text-foreground" style={{ background: 'var(--brand-green-soft)' }}>
                      AI-ready
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium border border-accent/20 text-foreground" style={{ background: 'var(--brand-red-soft)' }}>
                      Secure delivery
                    </span>
                  </div>

                  <div className="mt-5 h-2 rounded bg-border overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '100%' } : {}}
                      transition={{ delay: 0.2 + idx * 0.06, duration: 0.9 }}
                      className={`h-full bg-gradient-to-r ${item.gradient} rounded`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="/solutions"
            className="px-8 py-4 rounded-lg btn-premium text-primary-foreground text-lg font-medium shadow-[0_10px_24px_rgba(30,58,138,0.18)]"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  )
}

