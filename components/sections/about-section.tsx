'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Lightbulb, Users, Award } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 15, suffix: '+', label: 'Years of Excellence' },
  { value: 500, suffix: '+', label: 'Projects Delivered' },
  { value: 200, suffix: '+', label: 'Happy Clients' },
  { value: 50, suffix: '+', label: 'Industry Awards' },
]

const values = [
  {
    icon: Target,
    title: 'Vision-Driven',
    description: 'We focus on long-term success, creating solutions that evolve with your business needs.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Pioneering cutting-edge technologies to deliver transformative digital experiences.',
    gradient: 'from-accent to-primary',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our priority. We build lasting partnerships based on trust and results.',
    gradient: 'from-primary to-accent',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to delivering premium quality in every project we undertake.',
    gradient: 'from-accent to-primary',
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="gradient-text">
      {count}{suffix}
    </span>
  )
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  useEffect(() => {
    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll')
      
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    }
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      
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
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Pioneering{' '}
            <span className="gradient-text">Digital Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            For over a decade, Gurukrupa Enterprise has been at the forefront of technological 
            innovation, delivering transformative solutions that empower businesses to thrive 
            in the digital age.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="animate-on-scroll glass-card rounded-lg p-8 text-center card-hover group"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="animate-on-scroll group"
            >
              <div className="glass-card rounded-lg p-8 h-full card-hover relative overflow-hidden">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-20`} />
                </div>
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:neon-glow transition-all duration-300`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
