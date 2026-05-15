'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Linkedin, Twitter, Instagram, Github, Mail, MapPin, Phone } from 'lucide-react'

import footerDarkLogo from '@/Logos/Dark logo 1.png'
import footerLightLogo from '@/Logos/Light logo 1.png'

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Github, href: '#', label: 'GitHub' },
]

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary" />
      
      {/* Gradient Orbs */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[180px]" />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.a
          href="/"
          aria-label="Gurukrupa Enterprise home"
          className="footer-brand-logo-shell mx-auto mb-8 inline-flex items-center justify-center"
          whileHover={{ scale: 1.015, y: -1 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
        >
          <span className="footer-logo-stack">
            <Image
              src={footerLightLogo}
              alt="Gurukrupa Enterprise"
              className="footer-brand-logo footer-brand-logo-light h-[68px] w-auto object-contain md:h-[82px]"
            />
            <Image
              src={footerDarkLogo}
              alt=""
              aria-hidden
              className="footer-brand-logo footer-brand-logo-dark h-[68px] w-auto object-contain md:h-[82px]"
            />
          </span>
        </motion.a>

        <p className="mx-auto mb-14 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
          Building trust through innovation. We deliver cutting-edge solutions
          that transform businesses and create lasting partnerships.
        </p>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/80 mb-4">
              Gurukrupa Enterprise
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Modern software, AI workflows, and scalable digital products for
              teams that want clean execution and durable systems.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:gurukrupaenterprise247@gmail.com" className="text-sm text-foreground hover:text-accent transition-colors">
                    gurukrupaenterprise247@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+918141840404" className="text-sm text-foreground hover:text-accent transition-colors">
                    +91 81418 40404
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <span className="text-sm text-foreground">Global Presence</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {currentYear} Gurukrupa Enterprise. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
