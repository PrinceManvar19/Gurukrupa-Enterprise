'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const partners = [
  { name: 'TechCorp', initials: 'TC' },
  { name: 'Innovate Inc', initials: 'II' },
  { name: 'Future Labs', initials: 'FL' },
  { name: 'Digital Edge', initials: 'DE' },
  { name: 'Cloud Nine', initials: 'CN' },
  { name: 'Smart Systems', initials: 'SS' },
  { name: 'Next Wave', initials: 'NW' },
  { name: 'Prime Tech', initials: 'PT' },
  { name: 'Elite Solutions', initials: 'ES' },
  { name: 'Global Dynamics', initials: 'GD' },
  { name: 'Apex Industries', initials: 'AI' },
  { name: 'Quantum Labs', initials: 'QL' },
]

function PartnerLogo({ name, initials, index }: { name: string; initials: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="glass-card rounded-lg p-8 flex items-center justify-center aspect-[3/2] card-hover cursor-pointer relative overflow-hidden">
        {/* Glow Effect on Hover */}
        <div className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl" />
        
        {/* Logo Placeholder */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-2xl font-bold text-foreground group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-500 border border-accent/20 group-hover:border-transparent">
            {initials}
          </div>
          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">
            {name}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

type PartnersMode = 'teaser' | 'full'

export function PartnersSection({ mode = 'full' }: { mode?: PartnersMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const isTeaser = mode === 'teaser'
  const teaserPartners = partners.slice(0, 6)

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[180px] -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] translate-x-1/2" />
      
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
            Trusted By
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Our Valued{' '}
            <span className="gradient-text">Partners</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            We&apos;re proud to collaborate with industry-leading organizations who trust us 
            to deliver exceptional results.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {(isTeaser ? teaserPartners : partners).map((partner, index) => (
            <PartnerLogo
              key={partner.name}
              name={partner.name}
              initials={partner.initials}
              index={index}
            />
          ))}
        </div>

        {/* Teaser CTA */}
        {isTeaser ? (
          <div className="mt-10 flex justify-center">
            <a
              href="/partners"
              className="px-8 py-4 rounded-lg btn-premium text-primary-foreground text-lg font-medium shadow-[0_10px_24px_rgba(30,58,138,0.18)]"
            >
              View All Partners
            </a>
          </div>
        ) : (
          /* Stats Banner */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 glass-card rounded-lg p-8 md:p-12 relative overflow-hidden"
          >
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">98%</div>
                <p className="text-muted-foreground">Client Retention Rate</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">15+</div>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">24/7</div>
                <p className="text-muted-foreground">Support Available</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
