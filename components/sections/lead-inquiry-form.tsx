'use client'

import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2, Mail, Phone } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const interests = {
  'Product Consultation': ['Go Digital Chat', 'Mod GST', 'Follow-up.io', 'Scratch DIGI', 'Mob Order', 'CriZone', 'Custom Enterprise Products'],
  'Service Requirement': ['Web Platforms', 'Mobile Products', 'AI & Automation', 'Enterprise Software'],
  'SWAS Delivery Plan': ['Hands-on Support', 'Workflow Automation', 'Continuous Optimization'],
  'Custom Enterprise Build': ['Custom Integrations', 'Compliance Systems', 'Operational Dashboards', 'Enterprise Automation'],
}

type InquiryType = keyof typeof interests

export function LeadInquiryForm({ compact = false }: { compact?: boolean }) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const [inquiryType, setInquiryType] = useState<InquiryType>('Product Consultation')
  const [selectedInterest, setSelectedInterest] = useState(interests['Product Consultation'][0])
  const [quickName, setQuickName] = useState('')
  const [quickEmail, setQuickEmail] = useState('')
  const [quickStatus, setQuickStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const interestOptions = useMemo(() => interests[inquiryType], [inquiryType])

  useEffect(() => {
    const interest = new URLSearchParams(window.location.search).get('interest')
    if (!interest) return

    const match = Object.entries(interests).find(([, options]) => options.includes(interest))
    if (!match) return

    setInquiryType(match[0] as InquiryType)
    setSelectedInterest(interest)
  }, [])

  useEffect(() => {
    if (!interestOptions.includes(selectedInterest)) {
      setSelectedInterest(interestOptions[0])
    }
  }, [interestOptions, selectedInterest])

  const handleQuickSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setQuickStatus('loading')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: quickName,
          email: quickEmail,
          inquiryType: 'Free Call',
          interest: selectedInterest,
          source: 'short-lead-form',
        }),
      })

      if (!response.ok) throw new Error('Unable to submit lead')

      setQuickStatus('success')
      setQuickName('')
      setQuickEmail('')
    } catch {
      setQuickStatus('error')
    }
  }

  return (
    <section id="lead-inquiry" ref={sectionRef} className={`relative overflow-hidden py-24 ${compact ? 'py-16' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto grid gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
          className="lg:sticky lg:top-28"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-accent">Lead Inquiry</span>
          <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">Bring the workflow. We&apos;ll map the system.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Tell us what your team needs to build, automate, improve, or scale. Gurukrupa Enterprise will help shape the next practical step.
          </p>

          <div className="mt-8 space-y-4">
            <a href="mailto:gurukrupaenterprise247@gmail.com" className="flex items-center gap-3 text-sm font-medium text-foreground transition hover:text-accent">
              <Mail className="h-5 w-5 text-accent" />
              gurukrupaenterprise247@gmail.com
            </a>
            <a href="tel:+918141840404" className="flex items-center gap-3 text-sm font-medium text-foreground transition hover:text-accent">
              <Phone className="h-5 w-5 text-accent" />
              +91 81418 40404
            </a>
          </div>

          <div className="mt-8 space-y-3">
            {['Plan a product consultation', 'Define a SWAS delivery plan', 'Build custom enterprise software'].map((reason) => (
              <div key={reason} className="flex items-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                {reason}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleQuickSubmit}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.04, duration: 0.75, ease }}
          className="glass-card rounded-2xl p-5 md:p-6 lg:col-start-2"
        >
          <div className="mb-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Book a Free Call</span>
            <h3 className="mt-2 text-2xl font-semibold text-foreground">Start with a quick consultation.</h3>
          </div>
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
            <label className="space-y-2">
              <span className="text-sm font-medium text-foreground">Name</span>
              <input className="premium-input w-full" type="text" placeholder="Your name" value={quickName} onChange={(event) => setQuickName(event.target.value)} required />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-foreground">Email</span>
              <input className="premium-input w-full" type="email" placeholder="you@company.com" value={quickEmail} onChange={(event) => setQuickEmail(event.target.value)} required />
            </label>
            <button type="submit" disabled={quickStatus === 'loading'} className="btn-premium self-end rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70">
              {quickStatus === 'loading' ? 'Booking...' : 'Book a Free Call'}
            </button>
          </div>
          <div className="mt-3 min-h-5 text-sm">
            {quickStatus === 'success' ? <span className="text-accent">Thanks. We&apos;ll contact you within 24 hours.</span> : null}
            {quickStatus === 'error' ? <span className="text-destructive">Something went wrong. Please call or WhatsApp us directly.</span> : null}
          </div>
        </motion.form>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08, duration: 0.75, ease }}
          className="glass-card rounded-2xl p-6 md:p-8 lg:col-start-2"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-foreground">Name</span>
              <input className="premium-input w-full" type="text" placeholder="Your name" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-foreground">Email</span>
              <input className="premium-input w-full" type="email" placeholder="you@company.com" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-foreground">Phone</span>
              <input className="premium-input w-full" type="tel" placeholder="+91 00000 00000" />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-foreground">Inquiry Type</span>
              <select
                className="premium-select w-full"
                value={inquiryType}
                onChange={(event) => setInquiryType(event.target.value as InquiryType)}
              >
                {Object.keys(interests).map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="mt-5 block space-y-2">
            <span className="text-sm font-medium text-foreground">Product/Service Interest</span>
            <select className="premium-select w-full" value={selectedInterest} onChange={(event) => setSelectedInterest(event.target.value)}>
              {interestOptions.map((interest) => (
                <option key={interest}>{interest}</option>
              ))}
            </select>
          </label>

          <label className="mt-5 block space-y-2">
            <span className="text-sm font-medium text-foreground">Message</span>
            <textarea className="premium-input w-full" rows={4} placeholder="Describe your project, product, workflow, or support need" />
          </label>

          <button type="submit" className="btn-premium mt-6 inline-flex w-full items-center justify-center rounded-lg px-8 py-4 text-base font-semibold text-primary-foreground">
            Send Inquiry
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
