import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Learn about Gurukrupa Enterprise — our story, our team, and the SWAS delivery model that keeps us close to clients after every launch.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
