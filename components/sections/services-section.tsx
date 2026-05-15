'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Palette, LineChart, Shield, Cpu, Cloud, Zap } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'React.js Development',
    description: 'Enterprise-grade web applications with component-driven architecture and performance tuning.',
    features: ['UI Engineering', 'SPA/SSR', 'Enterprise Integrations'],
    gradient: 'from-primary to-accent',
  },
  {
    icon: Code2,
    title: 'React Native Development',
    description: 'Cross-platform mobile apps optimized for smooth UX, reliability, and maintainable codebases.',
    features: ['iOS/Android', 'Offline-ready', 'App Performance'],
    gradient: 'from-accent to-primary',
  },
  {
    icon: Code2,
    title: 'Node.js Development',
    description: 'Scalable backend services and APIs for modern enterprise systems and automation workflows.',
    features: ['REST/GraphQL', 'Microservices', 'Security Practices'],
    gradient: 'from-primary to-accent',
  },
  {
    icon: Shield,
    title: 'Android App Development',
    description: 'Robust Android applications built with secure flows, scalable architecture, and clean delivery.',
    features: ['Native UX', 'Secure Auth', 'Device Compatibility'],
    gradient: 'from-accent to-primary',
  },
  {
    icon: Shield,
    title: 'iOS App Development',
    description: 'Polished iOS experiences with enterprise reliability, stability, and continuous improvement support.',
    features: ['App Store Readiness', 'Performance', 'Secure Integrations'],
    gradient: 'from-primary to-accent',
  },
  {
    icon: Cpu,
    title: 'Flutter Development',
    description: 'High-performance cross-platform UI engineering with smooth animations and consistent visuals.',
    features: ['High UI Fidelity', 'Fast Iteration', 'Scalable Apps'],
    gradient: 'from-accent to-primary',
  },
  {
    icon: Code2,
    title: 'VB.NET Development',
    description: 'Maintain, modernize, and extend enterprise systems using VB.NET with clean maintainability.',
    features: ['Legacy Modernization', 'Desktop/Backend', 'Reliable Delivery'],
    gradient: 'from-primary to-accent',
  },
  {
    icon: Cloud,
    title: 'IoT (Internet of Things)',
    description: 'Connected device platforms and integrations that turn sensor data into actionable workflows.',
    features: ['Device Integrations', 'Data Pipelines', 'Monitoring'],
    gradient: 'from-accent to-primary',
  },
  {
    icon: Palette,
    title: 'Python Development',
    description: 'Automation scripts, services, and intelligent processing for enterprise workflows and analytics.',
    features: ['Automation', 'APIs', 'Data Processing'],
    gradient: 'from-primary to-accent',
  },
  {
    icon: Cpu,
    title: 'AI Agent Development',
    description: 'AI agents that automate tasks, assist teams, and integrate into enterprise systems.',
    features: ['Tool Use', 'Workflow Automation', 'Intelligence Layer'],
    gradient: 'from-accent to-primary',
  },
  {
    icon: Zap,
    title: 'Vibe Coding Development',
    description: 'Rapid prototyping and iterative delivery with modern engineering collaboration patterns.',
    features: ['Fast Prototypes', 'Collaborative Delivery', 'Iteration Cycles'],
    gradient: 'from-primary to-accent',
  },
  {
    icon: Cloud,
    title: 'Core PHP Development',
    description: 'Reliable web development and enterprise customization with secure and maintainable implementations.',
    features: ['Backend Engineering', 'CMS/Apps', 'Security Hardening'],
    gradient: 'from-accent to-primary',
  },
]

type ServicesMode = 'teaser' | 'full'

export function ServicesSection({ mode = 'full' }: { mode?: ServicesMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const isTeaser = mode === 'teaser'
  const servicesToRender = isTeaser ? services.slice(0, 4) : services

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      
      {/* Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-accent font-medium tracking-wider uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Our{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive suite of services designed to transform your business 
            and drive sustainable growth in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className={`grid ${isTeaser ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {servicesToRender.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="glass-card rounded-lg p-8 h-full card-hover relative overflow-hidden">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`} />
                </div>
                
                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features (full page only) */}
                  {!isTeaser && (
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium text-foreground border border-accent/20 group-hover:border-accent/40 transition-colors`}
                          style={{ background: 'var(--brand-green-soft)' }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Teaser CTA */}
        {isTeaser && (
          <div className="mt-10 flex justify-center">
            <a
              href="/services"
              className="px-8 py-4 rounded-lg btn-premium text-primary-foreground text-lg font-medium shadow-[0_10px_24px_rgba(30,58,138,0.18)]"
            >
              Learn More
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
