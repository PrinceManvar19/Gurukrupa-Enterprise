'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react'

import { ThemeToggle } from '@/components/theme-toggle'
import headerDarkLogo from '@/Logos/Dark logo 3.png'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Products',
    href: '/products',
    dropdown: [
      { name: 'Go Digital Chat', href: 'https://godigitalchat.com/' },
      { name: 'Mod GST', href: 'https://modgst.gurukrupaenterprise.com/' },
      { name: 'Follow-up.io', href: 'https://www.followupio.com/' },
      { name: 'All Products', href: '/products' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Web Development', href: '/services' },
      { name: 'Mobile App Development', href: '/services' },
      { name: 'AI Agent Development', href: '/services' },
      { name: 'All Services', href: '/services' },
    ],
  },
  {
    name: 'Solutions',
    href: '/solutions',
    dropdown: [
      { name: 'Mobile App Development', href: '/solutions' },
      { name: 'Web App Development', href: '/solutions' },
      { name: 'SWAS Delivery Model', href: '/solutions' },
    ],
  },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Partners', href: '/partners' },
  { name: 'Contact', href: '/contact' },
]

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
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
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-50"
      >
        <motion.div
          className="mx-auto mt-3"
          style={{ width: 'calc(100% - 40px)' }}
          animate={{ height: isScrolled ? 56 : 72, marginTop: isScrolled ? 10 : 14 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav className={`ge-navbar h-full flex items-center justify-between rounded-2xl px-4 sm:px-5 ${isScrolled ? 'ge-navbar-scrolled' : ''}`}>
            <motion.div className="brand-logo-shell flex items-center" whileHover={{ y: -1 }} transition={{ duration: 0.24 }}>
              <Link href="/" aria-label="Gurukrupa Enterprise home" className="relative z-10 inline-flex items-center">
                <span className="brand-logo-stack">
                  <Image
                    src={headerDarkLogo}
                    alt="Gurukrupa Enterprise"
                    priority
                    className="brand-logo-image brand-logo-image-single h-[38px] w-auto object-contain sm:h-[46px] lg:h-[50px]"
                  />
                </span>
                <span className="sr-only">Gurukrupa Enterprise</span>
              </Link>
            </motion.div>

            <div className="hidden flex-1 items-center justify-center lg:flex">
              <div className="flex items-center gap-1">
                {navItems.map((item) => {
                  const active = isActivePath(pathname, item.href)
                  const hasDropdown = 'dropdown' in item && item.dropdown

                  return (
                    <div key={item.name} className="group relative">
                      <Link
                        href={item.href}
                        className={`relative flex items-center gap-1 rounded-full px-3 py-2 text-sm transition-all duration-300 ${active ? 'text-primary dark:text-white' : 'text-muted-foreground hover:text-foreground dark:hover:text-white/95'}`}
                        aria-current={active ? 'page' : undefined}
                        aria-haspopup={hasDropdown ? 'menu' : undefined}
                      >
                        <span className="relative z-10 font-medium tracking-wide">{item.name}</span>
                        {hasDropdown ? <ChevronDown className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:rotate-180" /> : null}
                        <span className={`nav-hover-pill ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                        <span className={`nav-active-line ${active ? 'opacity-100' : 'opacity-0'}`} />
                      </Link>

                      {hasDropdown ? (
                        <div className="invisible absolute left-0 top-full z-50 mt-3 w-60 translate-y-2 rounded-2xl border border-border bg-card/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                          {item.dropdown.map((child) => {
                            const external = child.href.startsWith('http')
                            return (
                              <Link
                                key={child.name}
                                href={child.href}
                                target={external ? '_blank' : undefined}
                                rel={external ? 'noreferrer' : undefined}
                                className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                              >
                                {child.name}
                              </Link>
                            )
                          })}
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <div className="hidden items-center gap-3 lg:flex">
                <ThemeToggle />
              </div>
              <Link href="/contact" className="hidden rounded-full btn-premium px-6 py-2.5 text-sm font-semibold text-primary-foreground lg:inline-flex">
                Get in Touch
              </Link>
              <button
                className="rounded-xl p-2 text-foreground lg:hidden"
                aria-label="Open navigation menu"
                onClick={() => setIsMobileMenuOpen((value) => !value)}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              className="relative mx-auto mt-16 px-6"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ width: 'calc(100% - 24px)' }}
            >
              <div className="glass-strong rounded-2xl border border-border p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold tracking-wide">Navigation</span>
                  <ThemeToggle />
                </div>
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-xl px-4 py-3 font-medium text-muted-foreground transition hover:bg-accent/10 hover:text-foreground"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-3 inline-flex items-center justify-center rounded-full btn-premium px-6 py-3 text-sm font-semibold text-primary-foreground"
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
