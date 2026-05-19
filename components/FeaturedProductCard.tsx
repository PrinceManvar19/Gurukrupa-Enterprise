'use client'

import Image from 'next/image'
import type { CSSProperties, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { FeaturedProduct } from '@/data/products'

const ease = [0.22, 1, 0.36, 1] as const

function requestProductDemo(productName: string) {
  const inquirySection = document.getElementById('lead-inquiry')

  if (!inquirySection) return false

  const nextUrl = `${window.location.pathname}?interest=${encodeURIComponent(productName)}#lead-inquiry`
  window.history.pushState(null, '', nextUrl)
  window.dispatchEvent(new CustomEvent('lead-interest-change', { detail: { interest: productName } }))
  inquirySection.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return true
}

export function FeaturedProductCard({ product, index, className = '' }: { product: FeaturedProduct; index: number; className?: string }) {
  const requestDemoHref = `/products?interest=${encodeURIComponent(product.name)}#lead-inquiry`
  const isGoDigitalChat = product.id === 'go-digital-chat'
  const isModGst = product.id === 'mod-gst'

  const handleDemoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!requestProductDemo(product.name)) return

    event.preventDefault()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.06, duration: 0.55, ease }}
      style={
        {
          '--product-accent': product.accentColor,
          '--product-header': product.headerBg,
          '--product-header-primary': product.headerTextPrimary,
          '--product-header-secondary': product.headerTextSecondary,
        } as CSSProperties
      }
      className={`featured-product-card group overflow-hidden rounded-2xl bg-card/60 transition-all duration-[250ms] ease-in-out ${className}`}
    >
      <div className="relative h-20 overflow-hidden md:h-[110px]" style={{ background: product.headerBg }}>
        <div className="absolute inset-x-0 top-0 h-1 bg-[var(--product-accent)]" />
        {isGoDigitalChat ? <div className="featured-product-glow absolute left-4 top-3 h-20 w-20 rounded-full md:left-6 md:top-5" /> : null}
        {isModGst ? <div className="featured-product-grid absolute inset-0" /> : null}
        {product.decorative === 'pipeline' ? <div className="featured-product-dots absolute inset-0" /> : null}

        <div className="relative z-10 flex h-full items-center justify-between gap-4 px-5 md:px-6">
          <div className="flex min-w-0 items-center gap-3 md:gap-4">
            {product.logo ? (
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center bg-white md:h-12 md:w-12 ${
                  isModGst
                    ? 'rounded-lg p-2 shadow-[0_12px_28px_rgba(27,122,138,0.2)] md:h-[52px] md:w-[52px]'
                    : 'rounded-full shadow-[0_12px_26px_rgba(37,211,102,0.28)]'
                }`}
              >
                <Image
                  src={product.logo}
                  alt={`${product.name} logo`}
                  width={isModGst ? 52 : 48}
                  height={isModGst ? 52 : 48}
                  className={`${isModGst ? 'h-full w-full object-contain' : 'h-8 w-8 rounded-full object-cover md:h-11 md:w-11'}`}
                />
              </div>
            ) : (
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--product-accent)] text-sm font-bold text-white shadow-[0_14px_30px_rgba(99,102,241,0.28)] md:h-12 md:w-12 md:text-base">
                {product.initials}
              </div>
            )}
            <div className="min-w-0">
              <h3 className="truncate text-base font-bold text-[var(--product-header-primary)]">{product.name}</h3>
              <p className="mt-1 truncate text-xs font-semibold text-[var(--product-header-secondary)]">{product.subtitle}</p>
            </div>
          </div>

          {product.decorative === 'chat-dots' ? (
            <div aria-hidden className="flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--product-accent)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--product-accent)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--product-accent)]" />
            </div>
          ) : null}
          {product.decorative === 'gst-badge' ? (
            <div aria-hidden className="rounded-full border border-[var(--product-accent)] bg-white px-2.5 py-1 text-[11px] font-bold text-[var(--product-accent)]">
              &#8377; GST
            </div>
          ) : null}
          {product.decorative === 'pipeline' ? (
            <div aria-hidden className="flex items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--product-accent)]" />
              <span className="h-px w-4 bg-[var(--product-accent)]/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--product-accent)]" />
              <span className="h-px w-4 bg-[var(--product-accent)]/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--product-accent)]" />
            </div>
          ) : null}
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-5 flex justify-end">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">Featured</span>
        </div>
        <p className="text-sm leading-7 text-muted-foreground">{product.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[var(--product-accent)]/45 bg-transparent px-3 py-1 text-xs font-medium text-[var(--product-accent)]">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center rounded-full bg-[var(--product-accent)] px-4 py-2 text-sm font-semibold transition duration-[250ms] ease-in-out hover:brightness-110 ${
              isGoDigitalChat ? 'text-[#07130c]' : 'text-white'
            }`}
          >
            Visit Product
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
          <a
            href={requestDemoHref}
            onClick={handleDemoClick}
            className="inline-flex items-center rounded-full border border-[var(--product-accent)]/60 bg-transparent px-4 py-2 text-sm font-semibold text-[var(--product-accent)] transition duration-[250ms] ease-in-out hover:bg-[var(--product-accent)]/10"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
