'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechForward Inc.',
    content:
      'Gurukrupa Enterprise transformed our entire digital infrastructure. Their innovative approach and dedication to excellence exceeded all our expectations. Truly a game-changer for our business.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'CTO, Innovation Labs',
    content:
      "Working with Gurukrupa has been an exceptional experience. Their team's technical expertise and commitment to delivering quality solutions is unmatched in the industry.",
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Director, Global Solutions',
    content:
      'The level of professionalism and innovation they bring to every project is remarkable. Gurukrupa Enterprise is not just a vendor; they are a true strategic partner.',
    rating: 5,
  },
  {
    name: 'Michael Foster',
    role: 'VP Engineering, CloudScale',
    content:
      "Their AI-driven solutions have revolutionized our operations. The ROI we've seen since partnering with Gurukrupa has been phenomenal. Highly recommended!",
    rating: 5,
  },
  {
    name: 'Amanda Lewis',
    role: 'Founder, NextGen Startups',
    content:
      'From concept to deployment, Gurukrupa delivered beyond what we imagined possible. Their attention to detail and creative solutions set them apart from the competition.',
    rating: 5,
  },
]

type TestimonialsMode = 'featured' | 'full'

export function TestimonialsSection({ mode = 'full' }: { mode?: TestimonialsMode }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const isFeatured = mode === 'featured'
  const featuredTestimonial = testimonials[0]

  useEffect(() => {
    if (isFeatured) return
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, isFeatured])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px]" />
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />

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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from the industry leaders and innovators who have partnered with us to achieve extraordinary results.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {isFeatured ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-lg p-8 md:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                <div className="absolute top-8 right-8 md:top-12 md:right-12">
                  <Quote className="w-12 h-12 text-accent/20" />
                </div>

                <div className="flex gap-1 mb-6">
                  {Array.from({ length: featuredTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 text-foreground">
                  "{featuredTestimonial.content}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-white">
                    {featuredTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-foreground">{featuredTestimonial.name}</div>
                    <div className="text-muted-foreground">{featuredTestimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-lg p-8 md:p-12 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />

                    <div className="absolute top-8 right-8 md:top-12 md:right-12">
                      <Quote className="w-12 h-12 text-accent/20" />
                    </div>

                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 text-foreground">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-white">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-lg text-foreground">{testimonials[currentIndex].name}</div>
                        <div className="text-muted-foreground">{testimonials[currentIndex].role}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-center gap-4 mt-8">
                  <button
                    onClick={goToPrevious}
                    className="p-3 rounded-full glass-card hover:border-accent/50 transition-all duration-300 group"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </button>

                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setIsAutoPlaying(false)
                          setCurrentIndex(index)
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? 'w-8 bg-gradient-to-r from-primary to-accent'
                            : 'w-2 bg-border hover:bg-accent/30'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={goToNext}
                    className="p-3 rounded-full glass-card hover:border-accent/50 transition-all duration-300 group"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

