'use client'

import { SmoothScroll } from '@/components/smooth-scroll'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { PartnersSection } from '@/components/sections/partners-section'
import { AboutSnippet } from '@/components/sections/about-snippet'
import { StatsBar } from '@/components/sections/stats-bar'
import { ContactStrip } from '@/components/sections/contact-strip'
import { AchievementsSection } from '@/components/sections/achievements-section'
import { ProductsSolutionsSection } from '@/components/sections/products-solutions-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'


export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden">
        <HeroSection />

        {/* 2) Trusted/Partners Strip */}
        <PartnersSection mode="teaser" />

        {/* 3) About Preview */}
        <AboutSnippet />

        {/* 4) Services Overview */}
        <ServicesSection mode="full" />

        {/* 5) Products/Solutions */}
        <ProductsSolutionsSection />

        {/* 6) Why Choose Us (kept as StatsBar section highlight) */}
        <StatsBar />

        {/* 7) Achievements / Metrics */}
        <AchievementsSection mode="full" />

        {/* 8) Client/Partner Showcase */}
        <PartnersSection mode="full" />

        {/* 9) Testimonials */}
        <TestimonialsSection mode="full" />

        {/* 10) CTA Section */}
        <CTASection />

        {/* 11) Contact strip (kept for existing CTA/contact UX) */}
        <ContactStrip />


        {/* Footer is shared in app/layout.tsx; keep nothing here */}
      </main>
    </SmoothScroll>
  )
}
