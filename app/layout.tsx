import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/Header'
import { Footer } from '@/components/sections/footer'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Gurukrupa Enterprise | Digital Products & Scalable Tech Solutions',
  description:
    'Gurukrupa Enterprise builds digital products and scalable technology solutions with hands-on service and long-term partnership.',
  generator: 'v0.app',
  keywords: ['innovation', 'technology', 'enterprise', 'solutions', 'partnerships'],
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
  themeColor: '#1E3A8A',
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
      <body className={`${inter.variable}`}>
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
          {children}
          <Footer />
        </ThemeProvider>


        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
