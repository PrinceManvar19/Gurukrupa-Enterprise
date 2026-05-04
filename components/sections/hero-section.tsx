'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ParticleField } from '@/components/particle-field'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [animationPhase, setAnimationPhase] = useState<'saas' | 'transition' | 'swas'>('saas')

  useEffect(() => {
    // Start the SaaS to SWAS transformation sequence
    const timeline = gsap.timeline()
    
    // Phase 1: Show SaaS (2 seconds)
    setTimeout(() => {
      setAnimationPhase('transition')
    }, 2000)
    
    // Phase 2: Transition to SWAS (after 2.5 seconds)
    setTimeout(() => {
      setAnimationPhase('swas')
    }, 2500)

    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Premium Gradient Mesh Background */}
      <div className="absolute inset-0 gradient-mesh-bg" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/20 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#8B5CF6]/20 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#EC4899]/10 blur-[150px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
      
      {/* Radial Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#05070D]/50 to-[#05070D] pointer-events-none" />
      
      {/* 3D Particle Background */}
      <ParticleField />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm text-[#9CA3AF] border border-[#8B5CF6]/30">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span>A New Era of Enterprise Solutions</span>
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-10"
        >
          <span className="text-[#E5E7EB]">Beyond SaaS — We Deliver </span>
          <span className="gradient-text">SWAS</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Not just Software as a Service, but{' '}
          <span className="text-[#E5E7EB] font-semibold">Software WITH a Service</span>
        </motion.p>

        {/* SaaS vs SWAS Visual Comparison */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-16"
        >
          {/* SaaS - Old Concept */}
          <motion.div
            className="relative flex flex-col items-center p-8 rounded-2xl min-w-[280px]"
            animate={{
              opacity: animationPhase === 'saas' ? 1 : 0.3,
              scale: animationPhase === 'saas' ? 1 : 0.95,
              filter: animationPhase === 'saas' ? 'blur(0px)' : 'blur(2px)',
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 rounded-2xl border border-[#374151]/50 relative overflow-hidden">
              {/* Strikethrough line animation */}
              <motion.div
                className="absolute left-0 top-1/2 h-[3px] bg-gradient-to-r from-[#EF4444] to-[#F97316] z-10"
                initial={{ width: 0 }}
                animate={{ width: animationPhase !== 'saas' ? '100%' : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6B7280] mb-3">
                SaaS
              </h2>
              <p className="text-[#6B7280] text-sm md:text-base">
                Software as a Service
              </p>
            </div>
            
            <span className="mt-4 text-xs text-[#6B7280] uppercase tracking-wider">
              The Old Way
            </span>
          </motion.div>

          {/* Arrow Transition */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="hidden md:flex items-center"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-8 h-8 text-[#8B5CF6]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="md:hidden"
          >
            <ArrowDown className="w-8 h-8 text-[#8B5CF6] animate-bounce" />
          </motion.div>

          {/* SWAS - New Concept */}
          <motion.div
            className="relative flex flex-col items-center p-8 rounded-2xl min-w-[280px]"
            animate={{
              opacity: animationPhase === 'swas' ? 1 : 0.5,
              scale: animationPhase === 'swas' ? 1.05 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Glow effect behind card */}
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] opacity-0 blur-xl"
                animate={{
                  opacity: animationPhase === 'swas' ? 0.5 : 0,
                }}
                transition={{ duration: 0.8 }}
              />
              
              <motion.div
                className="relative glass-card p-8 rounded-2xl border border-[#8B5CF6]/50 overflow-hidden"
                animate={{
                  borderColor: animationPhase === 'swas' ? 'rgba(139, 92, 246, 0.8)' : 'rgba(139, 92, 246, 0.3)',
                  boxShadow: animationPhase === 'swas' 
                    ? '0 0 40px rgba(139, 92, 246, 0.3), 0 0 80px rgba(59, 130, 246, 0.2)' 
                    : '0 0 0px rgba(139, 92, 246, 0)',
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] opacity-20" />
                
                <motion.h2
                  className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent"
                  animate={{
                    textShadow: animationPhase === 'swas' 
                      ? '0 0 30px rgba(139, 92, 246, 0.5)' 
                      : '0 0 0px rgba(139, 92, 246, 0)',
                  }}
                >
                  SWAS
                </motion.h2>
                <p className="relative text-[#E5E7EB] text-sm md:text-base">
                  Software <span className="text-[#8B5CF6] font-bold">WITH</span> a Service
                </p>
              </motion.div>
            </div>
            
            <motion.span
              className="mt-4 text-xs uppercase tracking-wider"
              animate={{
                color: animationPhase === 'swas' ? '#8B5CF6' : '#9CA3AF',
              }}
            >
              The Gurukrupa Way
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-[#9CA3AF] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just deliver software — we partner with you. Our dedicated team provides 
            <span className="text-[#E5E7EB]"> hands-on support</span>,
            <span className="text-[#8B5CF6]"> strategic guidance</span>, and
            <span className="text-[#3B82F6]"> continuous optimization</span> to ensure your success.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#about"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white font-medium text-lg relative overflow-hidden neon-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Experience SWAS</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.a>
          
          <motion.a
            href="#services"
            className="px-8 py-4 rounded-full glass-card text-[#E5E7EB] font-medium text-lg hover:border-[#8B5CF6]/50 transition-all duration-300 hover:neon-glow-purple"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Services
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-[#9CA3AF] hover:text-[#8B5CF6] transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm">Discover the difference</span>
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
