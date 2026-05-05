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
      
      {/* Brand Gradient Highlights */}
      <div className="absolute left-0 top-24 h-40 w-full bg-gradient-to-r from-primary/10 via-accent/10 to-transparent blur-3xl" />
      <div className="absolute bottom-16 right-0 h-32 w-3/4 bg-gradient-to-l from-accent/12 via-primary/8 to-transparent blur-3xl" />
      
      {/* Radial Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />
      
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
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass-card text-sm text-muted-foreground border border-accent/30">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Building Digital Products & Scalable Tech Solutions</span>
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-8"
        >
          <span className="text-foreground">Gurukrupa </span>
          <span className="gradient-text">Enterprise</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Modern technology partnership for teams that need more than software:
          <span className="text-foreground font-semibold"> Software WITH a Service.</span>
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
            className="relative flex flex-col items-center p-8 rounded-xl min-w-[280px]"
            animate={{
              opacity: animationPhase === 'saas' ? 1 : 0.3,
              scale: animationPhase === 'saas' ? 1 : 0.95,
              filter: animationPhase === 'saas' ? 'blur(0px)' : 'blur(2px)',
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 rounded-xl border border-border relative overflow-hidden">
              {/* Strikethrough line animation */}
              <motion.div
                className="absolute left-0 top-1/2 h-[3px] bg-primary z-10"
                initial={{ width: 0 }}
                animate={{ width: animationPhase !== 'saas' ? '100%' : 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-3">
                SaaS
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Software as a Service
              </p>
            </div>
            
            <span className="mt-4 text-xs text-muted-foreground uppercase tracking-wider">
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
                <ArrowRight className="w-8 h-8 text-accent" />
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
            <ArrowDown className="w-8 h-8 text-accent animate-bounce" />
          </motion.div>

          {/* SWAS - New Concept */}
          <motion.div
            className="relative flex flex-col items-center p-8 rounded-xl min-w-[280px]"
            animate={{
              opacity: animationPhase === 'swas' ? 1 : 0.5,
              scale: animationPhase === 'swas' ? 1.05 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              {/* Glow effect behind card */}
              <motion.div
                className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary to-accent opacity-0 blur-xl"
                animate={{
                  opacity: animationPhase === 'swas' ? 0.5 : 0,
                }}
                transition={{ duration: 0.8 }}
              />
              
              <motion.div
                className="relative glass-card p-8 rounded-xl border border-accent/50 overflow-hidden"
                animate={{
                  borderColor: animationPhase === 'swas' ? 'rgba(14, 165, 233, 0.8)' : 'rgba(14, 165, 233, 0.3)',
                  boxShadow: animationPhase === 'swas' 
                    ? '0 0 40px rgba(14, 165, 233, 0.3), 0 0 80px rgba(30, 58, 138, 0.18)' 
                    : '0 0 0px rgba(14, 165, 233, 0)',
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent opacity-15" />
                
                <motion.h2
                  className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                  animate={{
                    textShadow: animationPhase === 'swas' 
                      ? '0 0 30px rgba(14, 165, 233, 0.45)' 
                      : '0 0 0px rgba(14, 165, 233, 0)',
                  }}
                >
                  SWAS
                </motion.h2>
                <p className="relative text-foreground text-sm md:text-base">
                  Software <span className="text-accent font-bold">WITH</span> a Service
                </p>
              </motion.div>
            </div>
            
            <motion.span
              className="mt-4 text-xs uppercase tracking-wider"
              animate={{
                color: animationPhase === 'swas' ? '#0EA5E9' : '#475569',
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
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We don&apos;t just deliver software - we partner with you. Our dedicated team provides 
            <span className="text-foreground"> hands-on support</span>,
            <span className="text-accent"> strategic guidance</span>, and
            <span className="text-primary"> continuous optimization</span> to ensure your success.
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
            className="group px-8 py-4 rounded-lg btn-premium text-white font-medium text-lg relative overflow-hidden neon-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Experience SWAS</span>
          </motion.a>
          
          <motion.a
            href="#services"
            className="px-8 py-4 rounded-lg glass-card text-foreground font-medium text-lg hover:border-accent/50 transition-all duration-300 hover:neon-glow-purple"
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
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
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
