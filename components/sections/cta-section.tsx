'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Premium Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070D] via-[#0B0F1A] to-[#05070D]" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-[#3B82F6]/20 to-[#8B5CF6]/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#EC4899]/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#06B6D4]/10 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#05070D]/80" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm text-[#9CA3AF] mb-8 border border-[#8B5CF6]/30"
          >
            <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
            <span>Ready to Transform?</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-[#E5E7EB]"
          >
            Let&apos;s Build{' '}
            <span className="gradient-text">Something</span>
            <br />
            <span className="gradient-text-pink">Extraordinary</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-[#9CA3AF] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Partner with us to create innovative solutions that drive growth, 
            inspire innovation, and deliver lasting impact for your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="mailto:contact@gurukrupa.com"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-medium text-lg relative overflow-hidden inline-flex items-center justify-center gap-2 neon-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start a Conversation</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
            
            <motion.a
              href="#about"
              className="px-8 py-4 rounded-full glass-card text-[#E5E7EB] font-medium text-lg hover:border-[#8B5CF6]/50 transition-all duration-300 inline-flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-16 grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center glass-card rounded-2xl p-6">
              <div className="text-sm text-[#9CA3AF] mb-2">Email</div>
              <a href="mailto:contact@gurukrupa.com" className="text-[#E5E7EB] hover:gradient-text transition-all duration-300">
                contact@gurukrupa.com
              </a>
            </div>
            <div className="text-center glass-card rounded-2xl p-6">
              <div className="text-sm text-[#9CA3AF] mb-2">Phone</div>
              <a href="tel:+1234567890" className="text-[#E5E7EB] hover:gradient-text transition-all duration-300">
                +1 (234) 567-890
              </a>
            </div>
            <div className="text-center glass-card rounded-2xl p-6">
              <div className="text-sm text-[#9CA3AF] mb-2">Location</div>
              <span className="text-[#E5E7EB]">Global Presence</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
