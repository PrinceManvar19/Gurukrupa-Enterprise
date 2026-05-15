'use client'

import { SmoothScroll } from '@/components/smooth-scroll'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { PartnersSection } from '@/components/sections/partners-section'
import { AboutSnippet } from '@/components/sections/about-snippet'
import { StatsBar } from '@/components/sections/stats-bar'

import { AchievementsSection } from '@/components/sections/achievements-section'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section'

import { ProductsSolutionsSection } from '@/components/sections/products-solutions-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'
import { TechStackSection } from '@/components/sections/tech-stack-section'
import { LeadInquiryForm } from '@/components/sections/lead-inquiry-form'



export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden">
        <HeroSection />

        {/* 2) Trusted By / Partners Strip */}
        <PartnersSection mode="teaser" />

        {/* 3) About Company Preview */}
        <AboutSnippet />

        {/* 4) Featured Services Preview */}
        <ServicesSection mode="teaser" />

        {/* 5) Featured Products Preview */}
        <ProductsSolutionsSection mode="teaser" />

        {/* 6) Solutions Preview */}
        <TechStackSection />

        {/* 7) Why Choose Us */}
        <WhyChooseUsSection />

        {/* 8) Achievement Stats (teaser) */}
        <AchievementsSection mode="teaser" />

        {/* 9) Testimonials Preview */}
        <TestimonialsSection mode="featured" />

        {/* 10) CTA Banner */}
        <CTASection />

        {/* 11) Lead inquiry form */}
        <LeadInquiryForm />




        {/* Footer is shared in app/layout.tsx; keep nothing here */}
      </main>
    </SmoothScroll>
  )
}
