'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export function ContactStrip() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-10"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card rounded-lg p-6 text-center card-hover"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Email</span>
              </div>
              <a
                href="mailto:gurukrupaenterprise247@gmail.com"
                className="text-foreground hover:gradient-text transition-all duration-300 text-sm md:text-base break-words"
              >
                gurukrupaenterprise247@gmail.com
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card rounded-lg p-6 text-center card-hover"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Phone</span>
              </div>
              <a
                href="tel:+918141840404"
                className="text-foreground hover:gradient-text transition-all duration-300 text-sm md:text-base"
              >
                +91 81418 40404
              </a>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card rounded-lg p-6 text-center card-hover"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Location</span>
              </div>
              <span className="text-foreground text-sm md:text-base">Global Presence</span>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg btn-premium text-primary-foreground text-lg font-medium shadow-[0_10px_24px_rgba(30,58,138,0.18)] inline-flex items-center gap-2"
            >
              Send a Message
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
