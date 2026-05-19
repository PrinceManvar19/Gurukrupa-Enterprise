export type FeaturedProduct = {
  id: string
  name: string
  subtitle: string
  description: string
  logo: string | null
  initials?: string
  tags: string[]
  url: string
  accentColor: string
  headerBg: string
  headerTextPrimary: string
  headerTextSecondary: string
  decorative: 'chat-dots' | 'gst-badge' | 'pipeline'
}

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 'go-digital-chat',
    name: 'Go Digital Chat',
    subtitle: 'WhatsApp Business API',
    description: 'AI-powered WhatsApp marketing and chatbot platform for business communication.',
    logo: '/logos/go-digital-chat.png',
    tags: ['AI Chat', 'Automation', 'Support'],
    url: 'https://godigitalchat.com/',
    accentColor: '#25D366',
    headerBg: 'linear-gradient(135deg, #e8fdf0 0%, #c8f5d8 100%)',
    headerTextPrimary: '#0a2e1a',
    headerTextSecondary: '#1a7a40',
    decorative: 'chat-dots',
  },
  {
    id: 'mod-gst',
    name: 'Mod GST',
    subtitle: 'GST Invoice Software',
    description: 'Smart GST billing and invoice management for Indian businesses with full compliance.',
    logo: '/logos/mod-gst.png',
    tags: ['GST', 'Billing', 'Reports'],
    url: 'https://modgst.gurukrupaenterprise.com/',
    accentColor: '#1b7a8a',
    headerBg: 'linear-gradient(135deg, #e0f5f8 0%, #b8ecf3 100%)',
    headerTextPrimary: '#0a2830',
    headerTextSecondary: '#1b7a8a',
    decorative: 'gst-badge',
  },
  {
    id: 'followupio',
    name: 'Follow-up.io',
    subtitle: 'CRM & Lead Management',
    description: 'Automated lead tracking, follow-up flows, and CRM for sales and field teams.',
    logo: '/logos/Follow-up.io_logo.png',
    tags: ['Leads', 'CRM', 'Reminders'],
    url: 'https://www.followupio.com/',
    accentColor: '#6366f1',
    headerBg: 'linear-gradient(135deg, #ede9fe 0%, #c7d2fe 100%)',
    headerTextPrimary: '#1e1b4b',
    headerTextSecondary: '#4338ca',
    decorative: 'pipeline',
  },
]
