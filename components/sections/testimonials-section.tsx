'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechForward Inc.',
    quote:
      'Gurukrupa Enterprise transformed our entire digital infrastructure. Their innovative approach and dedication to excellence exceeded all our expectations. Truly a game-changer for our business.',
    initials: 'SM',
  },
  {
    name: 'Rajesh Kumar',
    role: 'CTO, DataBridge Solutions',
    quote:
      "Their SWAS model changed how we think about software delivery. We've had a dedicated team supporting us since day one.",
    initials: 'RK',
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, RetailTech India',
    quote:
      'Gurukrupa built our mobile app and stayed involved post-launch. The continuous support and iterations made all the difference.',
    initials: 'PS',
  },
]

type TestimonialsMode = 'featured' | 'full'

export function TestimonialsSection({ mode = 'full' }: { mode?: TestimonialsMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleTestimonials = mode === 'featured' ? testimonials.slice(0, 1) : testimonials
  const testimonial = visibleTestimonials[currentIndex % visibleTestimonials.length]

  useEffect(() => {
    if (mode === 'featured') return

    const interval = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % testimonials.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [mode])

  return (
    <section id="testimonials" ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Testimonials</span>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">What Our Clients Say</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Real feedback from leaders who partnered with Gurukrupa Enterprise for software, support, and continuous product improvement.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease }}
              className="glass-card relative overflow-hidden rounded-2xl p-8 md:p-10"
            >
              <Quote className="absolute left-8 top-8 h-16 w-16 text-accent/20" />
              <blockquote className="relative z-10 pt-16 text-xl font-medium leading-9 text-foreground md:text-2xl md:leading-10">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="my-8 h-px bg-border" />
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-lg font-semibold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {mode !== 'featured' ? (
            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-accent/40'
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
