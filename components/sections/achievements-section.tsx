'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Star, Zap, Globe, Rocket, Shield } from 'lucide-react'

const achievements = [
  {
    year: '2024',
    title: 'Global Innovation Award',
    description: 'Recognized for groundbreaking solutions in enterprise technology.',
    icon: Trophy,
    gradient: 'from-primary to-accent',
  },
  {
    year: '2023',
    title: 'Industry Leadership',
    description: 'Named among top 100 most innovative companies worldwide.',
    icon: Star,
    gradient: 'from-accent to-primary',
  },
  {
    year: '2022',
    title: 'Digital Transformation Excellence',
    description: 'Awarded for exceptional digital transformation initiatives.',
    icon: Zap,
    gradient: 'from-primary to-accent',
  },
  {
    year: '2021',
    title: 'Global Expansion',
    description: 'Successfully expanded operations to 15+ countries.',
    icon: Globe,
    gradient: 'from-accent to-primary',
  },
  {
    year: '2019',
    title: 'Tech Pioneer Award',
    description: 'Recognized for pioneering AI-driven business solutions.',
    icon: Rocket,
    gradient: 'from-primary to-accent',
  },
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Started with a vision to transform businesses through technology.',
    icon: Shield,
    gradient: 'from-accent to-primary',
  },
]

type AchievementsMode = 'teaser' | 'full'

export function AchievementsSection({ mode = 'full' }: { mode?: AchievementsMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const isTeaser = mode === 'teaser'
  const achievementsToRender = isTeaser ? achievements.slice(0, 3) : achievements

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[180px]" />
      
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
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Milestones &{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A decade of excellence, innovation, and industry recognition that defines our 
            commitment to delivering extraordinary results.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-px" />

          {achievementsToRender.map((achievement, index) => (
            <motion.div
              key={achievement.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent -translate-x-1/2 z-10 ring-4 ring-background" />

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="glass-card rounded-lg p-6 card-hover group relative overflow-hidden">
                  {/* Gradient glow on hover */}
                  <div className={`absolute -inset-1 rounded-lg bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  
                  <div className="flex items-start gap-4 relative z-10">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-accent font-medium">{achievement.year}</span>
                      <h3 className="text-xl font-semibold mt-1 mb-2 text-foreground group-hover:gradient-text transition-all duration-300">
                        {achievement.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {isTeaser ? (
          <div className="mt-10 flex justify-center">
            <a
              href="/achievements"
              className="px-8 py-4 rounded-lg btn-premium text-primary-foreground text-lg font-medium shadow-[0_10px_24px_rgba(30,58,138,0.18)]"
            >
              Learn More
            </a>
          </div>
        ) : null}
      </div>
    </section>
  )
}
