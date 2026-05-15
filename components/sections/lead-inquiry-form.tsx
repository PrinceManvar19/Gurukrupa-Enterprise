'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Building2, Mail, MessageSquareText, Phone, User } from 'lucide-react'

export function LeadInquiryForm({ compact = false }: { compact?: boolean }) {
  return (
    <section id="lead-inquiry" className={`relative overflow-hidden ${compact ? 'py-16' : 'py-24'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/60 to-background" />
      <div className="absolute left-1/4 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[140px]" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-4 block text-sm font-medium uppercase tracking-wider text-accent">
              Lead Inquiry
            </span>
            <h2 className="text-4xl font-bold text-foreground md:text-5xl">
              Tell us what you want to <span className="gradient-text">build next</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Share your product, service, or automation requirement. We will review it and respond with the next practical step.
            </p>
            <div className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {['Product consultation', 'Service requirement', 'SWAS delivery plan', 'Custom enterprise build'].map((item) => (
                <div key={item} className="rounded-lg border border-accent/15 bg-card/70 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.08, duration: 0.7 }}
            className="glass-card rounded-lg p-6 md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="relative">
                <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                <input className="w-full rounded-lg border border-border bg-background px-11 py-3.5 text-foreground outline-none transition focus:border-accent" placeholder="Name" />
              </label>
              <label className="relative">
                <Building2 className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                <input className="w-full rounded-lg border border-border bg-background px-11 py-3.5 text-foreground outline-none transition focus:border-accent" placeholder="Company" />
              </label>
              <label className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                <input type="email" className="w-full rounded-lg border border-border bg-background px-11 py-3.5 text-foreground outline-none transition focus:border-accent" placeholder="Email" />
              </label>
              <label className="relative">
                <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                <input className="w-full rounded-lg border border-border bg-background px-11 py-3.5 text-foreground outline-none transition focus:border-accent" placeholder="Phone" />
              </label>
            </div>

            <select className="mt-4 w-full rounded-lg border border-border bg-background px-4 py-3.5 text-foreground outline-none transition focus:border-accent" defaultValue="">
              <option value="" disabled>
                Select inquiry type
              </option>
              <optgroup label="Products">
                <option>Go Digital Chat</option>
                <option>Mod GST</option>
                <option>Follow-up.io</option>
                <option>Scratch DIGI</option>
                <option>Mob Order</option>
                <option>CriZone</option>
              </optgroup>
              <optgroup label="Services">
                <option>React.js Development</option>
                <option>React Native Development</option>
                <option>Node.js Development</option>
                <option>AI Agent Development</option>
                <option>Mobile App Development</option>
                <option>Web App Development</option>
                <option>IoT / Automation</option>
              </optgroup>
            </select>

            <label className="relative mt-4 block">
              <MessageSquareText className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-accent" />
              <textarea className="min-h-36 w-full rounded-lg border border-border bg-background px-11 py-3.5 text-foreground outline-none transition focus:border-accent" placeholder="Tell us about your requirement" />
            </label>

            <button type="submit" className="mt-5 inline-flex w-full items-center justify-center rounded-lg btn-premium px-8 py-4 text-base font-semibold text-primary-foreground">
              Submit Inquiry
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
