'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function AboutSnippet() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center mx-auto"
        >
          <span className="text-sm text-accent font-medium tracking-wider uppercase mb-4 block">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-foreground">
            Pioneering <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            For over a decade, Gurukrupa Enterprise has been at the forefront of technological innovation,
            delivering transformative solutions that empower businesses to thrive in the digital age.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <motion.a
              href="/about"
              className="inline-flex items-center justify-center px-7 py-3 rounded-lg btn-premium text-sm font-medium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
