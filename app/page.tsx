'use client'

import { SmoothScroll } from '@/components/smooth-scroll'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { AboutSnippet } from '@/components/sections/about-snippet'
import { ProductsSolutionsSection } from '@/components/sections/products-solutions-section'
import { CTASection } from '@/components/sections/cta-section'
import { TechStackSection } from '@/components/sections/tech-stack-section'
import { WhyChooseUsSection } from '@/components/sections/why-choose-us-section'
import { LeadInquiryForm } from '@/components/sections/lead-inquiry-form'
import { AchievementsSection } from '@/components/sections/achievements-section'
import { PartnersSection } from '@/components/sections/partners-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
        <HeroSection />
        <AboutSnippet />
        <ProductsSolutionsSection mode="full" />
        <ServicesSection mode="full" />
        <TechStackSection />
        <WhyChooseUsSection />
        <AchievementsSection />
        <PartnersSection />
        <TestimonialsSection />
        <CTASection />
        <LeadInquiryForm />
      </main>
    </SmoothScroll>
  )
}
