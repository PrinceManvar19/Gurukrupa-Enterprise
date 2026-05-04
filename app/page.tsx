'use client'

import { SmoothScroll } from '@/components/smooth-scroll'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { AchievementsSection } from '@/components/sections/achievements-section'
import { PartnersSection } from '@/components/sections/partners-section'
import { ServicesSection } from '@/components/sections/services-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <PartnersSection />
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </main>
    </SmoothScroll>
  )
}
