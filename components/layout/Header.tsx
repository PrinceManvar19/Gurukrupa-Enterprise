'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
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
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
]

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    if (!isMobileMenuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMobileMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-[100] border-b border-white/[0.06] bg-[rgba(5,7,13,0.86)] backdrop-blur-[20px] backdrop-saturate-[180%]"
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-6">
          <Link href="/" aria-label="Gurukrupa Enterprise home" className="relative z-10 inline-flex shrink-0 items-center">
            <Image
              src={headerDarkLogo}
              alt="Gurukrupa Enterprise"
              priority
              className="h-[40px] w-auto object-contain sm:h-[48px] lg:h-[52px]"
            />
          </Link>

          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const active = isActivePath(pathname, item.href)
                const hasDropdown = 'dropdown' in item && item.dropdown

                return (
                  <div key={item.name} className="group relative">
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      aria-haspopup={hasDropdown ? 'menu' : undefined}
                      className={`relative inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition ${
                        active ? 'text-white' : 'text-[#94a3b8] hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {hasDropdown ? <ChevronDown className="relative z-10 h-3.5 w-3.5 transition-transform group-hover:rotate-180" /> : null}
                      <span className={`absolute inset-0 rounded-full bg-white/[0.06] transition-opacity ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                    </Link>

                    {hasDropdown ? (
                      <div className="invisible absolute left-0 top-full z-[110] mt-3 w-60 translate-y-2 rounded-xl border border-white/[0.08] bg-[rgba(5,7,13,0.95)] p-2 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-[20px] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {item.dropdown.map((child) => {
                          const external = child.href.startsWith('http')

                          return (
                            <Link
                              key={child.name}
                              href={child.href}
                              target={external ? '_blank' : undefined}
                              rel={external ? 'noreferrer' : undefined}
                              className="block rounded-lg px-4 py-3 text-sm font-medium text-[#94a3b8] transition hover:bg-white/[0.06] hover:text-white"
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
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            <Link
              href="/contact"
              className="hidden rounded-full border border-white/[0.15] bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.06] lg:inline-flex"
            >
              Get in Touch
            </Link>
            <button
              type="button"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] text-white lg:hidden"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] bg-[#05070d]/96 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ x: 24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 24, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="flex min-h-screen flex-col px-6 pb-8 pt-24"
            >
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">Navigation</span>
                  <ThemeToggle />
                </div>
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="rounded-xl px-4 py-3 text-base font-medium text-[#94a3b8] transition hover:bg-white/[0.06] hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="mt-3 inline-flex items-center justify-center rounded-xl border border-white/[0.15] px-6 py-3 text-sm font-semibold text-white"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
