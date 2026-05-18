'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0" style={{ background: 'var(--brand-gradient)' }} />
      <div className="absolute inset-0 opacity-30">
        <div className="ge-particle-mesh absolute inset-0" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="text-4xl font-semibold leading-tight md:text-6xl">Let&apos;s Build Something Extraordinary</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/85">
            Partner with us to create innovative solutions that drive growth, inspire innovation, and deliver lasting impact.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <motion.a
              href="#lead-inquiry"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary shadow-lg transition hover:bg-white/90"
            >
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-lg border border-white/70 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Learn More About Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
