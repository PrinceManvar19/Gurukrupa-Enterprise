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
  const isFollowUpIo = product.id === 'followupio'

  const handleDemoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!requestProductDemo(product.name)) return

    event.preventDefault()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.03 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.06, duration: 0.55, ease }}
      style={
        {
          '--product-accent': product.accentColor,
          '--product-card-bg': product.cardBg,
          '--product-body-bg': product.bodyBg,
          '--product-button-bg': product.buttonBg,
          '--product-button-hover-bg': product.buttonHoverBg,
          '--product-tag-bg': product.tagBg,
          '--product-border': product.borderColor,
          '--product-text': product.textColor,
          '--product-muted': product.mutedTextColor,
          '--product-header': product.headerBg,
          '--product-header-primary': product.headerTextPrimary,
          '--product-header-secondary': product.headerTextSecondary,
        } as CSSProperties
      }
      className={`featured-product-card group overflow-hidden rounded-2xl transition-shadow duration-[250ms] ease-in-out ${className}`}
    >
      <div className="relative h-20 overflow-hidden md:h-27.5" style={{ background: product.headerBg }}>
        <div className="absolute inset-x-0 top-0 h-1 bg-[var(--product-accent)]" />
        {isGoDigitalChat ? <div className="featured-product-glow absolute left-4 top-3 h-20 w-20 rounded-full md:left-6 md:top-5" /> : null}
        {isModGst ? <div className="featured-product-grid absolute inset-0" /> : null}
        {product.decorative === 'pipeline' ? <div className="featured-product-dots absolute inset-0" /> : null}

        <div className="relative z-10 flex h-full items-center justify-between gap-3 px-3 md:px-4">
          <div className="flex min-w-0 items-center gap-3 md:gap-4">
            {product.logo ? (
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center bg-white md:h-14 md:w-14 ${
                  isModGst || isFollowUpIo
                    ? 'featured-product-logo-shell rounded-lg p-1 md:h-15 md:w-15'
                    : 'featured-product-logo-shell rounded-full'
                }`}
              >
                <Image
                  src={product.logo}
                  alt={`${product.name} logo`}
                  width={isModGst || isFollowUpIo ? 60 : 56}
                  height={isModGst || isFollowUpIo ? 60 : 56}
                  className={`${isModGst || isFollowUpIo ? 'h-full w-full object-contain' : 'h-9 w-9 rounded-full object-cover md:h-[56px] md:w-[56px]'}`}
                />
              </div>
            ) : (
              <div className="featured-product-logo-shell flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--product-accent)] text-sm font-bold text-white md:h-14 md:w-14 md:text-base">
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
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--product-header-secondary)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--product-header-secondary)]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--product-header-secondary)]" />
            </div>
          ) : null}
          {product.decorative === 'gst-badge' ? (
            <div aria-hidden className="rounded-full border border-[var(--product-border)] bg-[var(--product-tag-bg)] px-2.5 py-1 text-[11px] font-bold text-[var(--product-header-primary)]">
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

      <div className="bg-[var(--product-body-bg)] p-6 md:p-8">
        <div className="mb-5 flex justify-end">
          <span className="rounded-full border border-[var(--product-border)] bg-[var(--product-button-bg)] px-3 py-1 text-xs font-semibold text-[var(--product-text)]">Featured</span>
        </div>
        <p className="text-sm leading-7 text-[var(--product-muted)]">{product.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[var(--product-border)] bg-[var(--product-tag-bg)] px-3 py-1 text-xs font-medium text-[var(--product-text)]">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[var(--product-button-bg)] px-4 py-2 text-sm font-semibold text-[var(--product-text)] transition duration-[250ms] ease-in-out hover:bg-[var(--product-button-hover-bg)]"
          >
            Visit Product
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
          <a
            href={requestDemoHref}
            onClick={handleDemoClick}
            className="inline-flex items-center rounded-full border border-[var(--product-border)] bg-[var(--product-tag-bg)] px-4 py-2 text-sm font-semibold text-[var(--product-text)] transition duration-[250ms] ease-in-out hover:bg-[var(--product-button-bg)] hover:text-white"
          >
            Request a Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
