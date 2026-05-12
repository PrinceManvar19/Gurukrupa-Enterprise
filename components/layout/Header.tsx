'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

import { ThemeToggle } from '@/components/theme-toggle'
import logo from '@/Logos/4.jpg'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Partners', href: '/partners' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href
}

export default function Header() {
  const pathname = usePathname()

  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    if (!isMobileMenuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0, filter: 'blur(10px)' }}
        animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="fixed left-0 right-0 top-0 z-50"
      >
        <motion.div
          className="mx-auto mt-3"
          style={{ width: 'calc(100% - 40px)' }}
          animate={{
            height: isScrolled ? 56 : 72,
            marginTop: isScrolled ? 10 : 14,
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <nav
            className={
              'h-full flex items-center justify-between px-5 rounded-2xl glass-card '
              + (isScrolled ? 'opacity-100' : 'opacity-98')
            }
            style={{
              background: 'rgba(7, 15, 35, 0.82)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: isScrolled
                ? '0 12px 42px rgba(0,0,0,0.52)'
                : '0 8px 30px rgba(0,0,0,0.35)',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Left: Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" aria-label="Gurukrupa Enterprise home" className="inline-flex items-center">
                <Image
                  src={logo}
                  alt="Gurukrupa Enterprise"
                  priority
                  className="h-[42px] w-auto object-contain sm:h-[50px]"
                />
                <span className="sr-only">Gurukrupa Enterprise</span>
              </Link>
            </motion.div>

            {/* Center: Desktop nav */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center gap-2">
                {navItems.map((item) => {
                  const active = isActivePath(pathname, item.href)
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={
                        'relative px-3 py-2 rounded-full text-sm transition-all duration-300 '
                        + (active
                          ? 'text-white'
                          : 'text-muted-foreground hover:text-white/95')
                      }
                      aria-current={active ? 'page' : undefined}
                    >
                      <span className="relative z-10 font-medium tracking-wide">{item.name}</span>
                      {/* active pill */}
                      <span
                        className={
                          'absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 '
                          + (active ? 'opacity-100' : 'group-hover:opacity-100')
                        }
                        style={{
                          background: active
                            ? 'rgba(0, 166, 255, 0.18)'
                            : 'rgba(0, 166, 255, 0.10)',
                          boxShadow: active
                            ? '0 0 24px rgba(0, 166, 255, 0.28)'
                            : '0 0 0 rgba(0, 166, 255, 0)',
                        }}
                      />
                      {/* underline/glow */}
                      <span
                        className="absolute -bottom-0.5 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{
                          opacity: active ? 1 : 0,
                          transform: active ? 'scaleX(1)' : 'scaleX(0.2)',
                          transformOrigin: 'center',
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Right: Theme + CTA + Mobile menu */}
            <div className="flex items-center justify-end gap-3">
              <div className="hidden lg:flex items-center gap-3">
                <ThemeToggle />
              </div>

              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-primary-foreground btn-premium neon-glow"
                style={{
                  background: 'linear-gradient(135deg, #007CF0, #00A6FF)',
                  boxShadow: '0 0 24px rgba(0, 166, 255, 0.18)',
                  transition: 'all 0.3s ease',
                }}
              >
                <motion.span
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  Get in Touch
                </motion.span>
              </Link>

              <button
                className="lg:hidden p-2 rounded-xl text-foreground"
                aria-label="Open navigation menu"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </motion.div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'rgba(2, 6, 23, 0.72)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="relative mx-auto mt-16 px-6"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              style={{ width: 'calc(100% - 24px)' }}
            >
              <div
                className="glass-strong rounded-2xl p-4"
                style={{ border: '1px solid rgba(255,255,255,0.10)' }}
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(0,166,255,0.9)', boxShadow: '0 0 20px rgba(0,166,255,0.5)' }} />
                    <span className="text-sm font-semibold tracking-wide">Navigation</span>
                  </div>
                  <ThemeToggle />
                </div>

                <div className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const active = isActivePath(pathname, item.href)
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={
                          'px-4 py-3 rounded-xl transition-all duration-300 '
                          + (active
                            ? 'text-white'
                            : 'text-muted-foreground hover:text-white')
                        }
                        style={{
                          background: active ? 'rgba(0, 166, 255, 0.14)' : 'transparent',
                          boxShadow: active ? '0 0 24px rgba(0, 166, 255, 0.20)' : 'none',
                        }}
                      >
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )
                  })}

                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-3 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-primary-foreground btn-premium"
                    style={{
                      background: 'linear-gradient(135deg, #007CF0, #00A6FF)',
                    }}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

