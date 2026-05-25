import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/Header'
import { Footer } from '@/components/sections/footer'
import { FloatingContact } from '@/components/floating-contact'
import { PageTransitionProvider } from '@/components/page-transition-provider'

import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: 'Gurukrupa Enterprise | Software Products & Custom IT Systems',
  description:
    'Gurukrupa Enterprise builds software products and enterprise systems for Indian businesses — WhatsApp automation, GST billing, CRM, and custom solutions.',
  keywords: ['IT company India', 'software products', 'GST software', 'WhatsApp automation', 'CRM', 'custom enterprise systems', 'Ahmedabad'],
  authors: [{ name: 'Gurukrupa Enterprise' }],
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
      {
        url: '/icon-light-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#05070d',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      className="bg-background font-sans antialiased overflow-x-hidden"
      suppressHydrationWarning
    >
      <body className={`${geist.variable}`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function() {
              try {
                var stored = localStorage.getItem('theme');
                var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
                document.documentElement.classList.toggle('dark', theme === 'dark');
              } catch (error) {
                document.documentElement.setAttribute('data-theme', 'light');
              }
            })();
          `}
        </Script>

        <ThemeProvider>
          <Header />
          <PageTransitionProvider>{children}</PageTransitionProvider>
          <Footer />
          <FloatingContact />
        </ThemeProvider>


        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
