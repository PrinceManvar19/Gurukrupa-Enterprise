'use client'

import { SmoothScroll } from '@/components/smooth-scroll'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { PartnersSection } from '@/components/sections/partners-section'
import { AboutSnippet } from '@/components/sections/about-snippet'
import { StatsBar } from '@/components/sections/stats-bar'

import { ContactStrip } from '@/components/sections/contact-strip'
import { AchievementsSection } from '@/components/sections/achievements-section'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section'

import { ProductsSolutionsSection } from '@/components/sections/products-solutions-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'
import { TechStackSection } from '@/components/sections/tech-stack-section'



export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden">
        <HeroSection />

        {/* 2) Trusted By / Partners Strip */}
        <PartnersSection mode="teaser" />

        {/* 3) About Company Preview */}
        <AboutSnippet />

        {/* 4) Services Overview */}
        <ServicesSection mode="full" />

        {/* 5) Product/Solutions Showcase */}
        <ProductsSolutionsSection />

        {/* 6) Why Choose Us */}
        <WhyChooseUsSection />

        {/* 7) Achievements / Metrics */}
        <AchievementsSection mode="full" />

        {/* 8) Technology Expertise */}
        <StatsBar />

        {/* 8.5) Tech Stack Showcase */}
        <TechStackSection />

        {/* 9) Testimonials */}
        <TestimonialsSection mode="full" />


        {/* 10) CTA Banner */}
        <CTASection />

        {/* 11) Contact strip */}
        <ContactStrip />



        {/* Footer is shared in app/layout.tsx; keep nothing here */}
      </main>
    </SmoothScroll>
  )
}
