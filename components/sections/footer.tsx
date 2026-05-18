'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'

import footerDarkLogo from '@/Logos/Dark logo 1.png'
import footerLightLogo from '@/Logos/Light logo 1.png'

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'SWAS Model', href: '/swas' },
  { name: 'Industries', href: '/industries' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
]

const products = ['Go Digital Chat', 'Mod GST', 'Follow-up.io', 'Scratch DIGI', 'Mob Order', 'CriZone']

const socials = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'GitHub', href: '#', icon: Github },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-20 pb-8">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/70" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label="Gurukrupa Enterprise home" className="footer-brand-logo-shell mb-5 inline-flex items-center">
              <span className="footer-logo-stack">
                <Image
                  src={footerLightLogo}
                  alt="Gurukrupa Enterprise"
                  className="footer-brand-logo footer-brand-logo-light h-[58px] w-auto object-contain"
                />
                <Image
                  src={footerDarkLogo}
                  alt=""
                  aria-hidden
                  className="footer-brand-logo footer-brand-logo-dark h-[58px] w-auto object-contain"
                />
              </span>
            </Link>
            <p className="text-sm leading-7 text-muted-foreground">
              Software WITH a Service for business systems, operational workflows, AI automation, mobile products, and enterprise delivery.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition hover:border-accent/40 hover:text-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-accent">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-foreground">Products</h4>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product} className="text-sm text-muted-foreground">
                  {product}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-semibold text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-accent" />
                <a href="mailto:gurukrupaenterprise247@gmail.com" className="text-sm leading-6 text-muted-foreground transition hover:text-accent">
                  gurukrupaenterprise247@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-accent" />
                <a href="tel:+918141840404" className="text-sm text-muted-foreground transition hover:text-accent">
                  +91 81418 40404
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">Global Presence</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-accent/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>2026 Gurukrupa Enterprise. All rights reserved.</p>
            <div className="flex gap-5">
              <Link href="/privacy" className="transition hover:text-accent">
                Privacy Policy
              </Link>
              <Link href="/terms" className="transition hover:text-accent">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
