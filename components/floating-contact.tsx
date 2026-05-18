'use client'

import { MessageCircle, Phone } from 'lucide-react'

const whatsappUrl = 'https://wa.me/918141840404'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
      <path d="M16.02 3.2C9.02 3.2 3.34 8.84 3.34 15.78c0 2.32.65 4.58 1.88 6.55L3.2 28.8l6.67-1.96a12.7 12.7 0 0 0 6.15 1.58c7 0 12.68-5.64 12.68-12.6C28.7 8.84 23.02 3.2 16.02 3.2Zm0 22.98c-1.92 0-3.8-.53-5.43-1.54l-.39-.23-3.95 1.16 1.2-3.82-.25-.4a10.16 10.16 0 0 1-1.6-5.57c0-5.7 4.67-10.34 10.42-10.34s10.42 4.64 10.42 10.34S21.77 26.18 16.02 26.18Zm5.72-7.75c-.31-.16-1.84-.91-2.13-1.01-.28-.1-.49-.16-.7.16-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.16-1.31-.48-2.5-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.16-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53h-.59c-.2 0-.54.08-.82.39-.28.31-1.08 1.05-1.08 2.56s1.1 2.97 1.26 3.17c.16.2 2.17 3.29 5.25 4.61.73.31 1.31.5 1.75.64.74.23 1.41.2 1.94.12.59-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.13-.28-.2-.59-.36Z" />
    </svg>
  )
}

export function FloatingContact() {
  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-4 z-[80] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(37,211,102,0.36)] md:bottom-6 md:right-6"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      <div className="fixed inset-x-3 bottom-3 z-[79] grid grid-cols-3 gap-2 rounded-2xl border border-border bg-background/88 p-2 shadow-2xl backdrop-blur-xl md:hidden">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1 rounded-xl bg-[#25D366] px-2 py-3 text-xs font-semibold text-white">
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a href="tel:+918141840404" className="inline-flex items-center justify-center gap-1 rounded-xl border border-border bg-card px-2 py-3 text-xs font-semibold text-foreground">
          <Phone className="h-4 w-4 text-accent" />
          Call
        </a>
        <a href="/contact" className="inline-flex items-center justify-center rounded-xl btn-premium px-2 py-3 text-xs font-semibold text-primary-foreground">
          Consultation
        </a>
      </div>
    </>
  )
}
