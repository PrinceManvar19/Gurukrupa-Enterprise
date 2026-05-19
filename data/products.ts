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
  cardBg: string
  bodyBg: string
  buttonBg: string
  buttonHoverBg: string
  tagBg: string
  borderColor: string
  textColor: string
  mutedTextColor: string
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
    cardBg: '#D3F8E0',
    bodyBg: '#e8fdf0',
    buttonBg: '#25a244',
    buttonHoverBg: '#1f8a3a',
    tagBg: '#b8f0cc',
    borderColor: '#25a244',
    textColor: '#1a4a2e',
    mutedTextColor: '#1a4a2e',
    headerBg: '#D3F8E0',
    headerTextPrimary: '#1a4a2e',
    headerTextSecondary: '#1a4a2e',
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
    cardBg: '#C8F0F5',
    bodyBg: '#ddf6f9',
    buttonBg: '#1b7a8a',
    buttonHoverBg: '#146675',
    tagBg: '#aae8f0',
    borderColor: '#1b7a8a',
    textColor: '#0d3b45',
    mutedTextColor: '#0d3b45',
    headerBg: '#C8F0F5',
    headerTextPrimary: '#0d3b45',
    headerTextSecondary: '#0d3b45',
    decorative: 'gst-badge',
  },
  {
    id: 'followupio',
    name: 'Follow-up.io',
    subtitle: 'CRM & Lead Management',
    description: 'Automated lead tracking, follow-up flows, and CRM for sales and field teams.',
    logo: '/logos/followupio.png',
    tags: ['Leads', 'CRM', 'Reminders'],
    url: 'https://www.followupio.com/',
    accentColor: '#6366f1',
    cardBg: '#D6DBFE',
    bodyBg: '#e8ebff',
    buttonBg: '#6366f1',
    buttonHoverBg: '#4f46e5',
    tagBg: '#c2c8fd',
    borderColor: '#6366f1',
    textColor: '#1e1b4b',
    mutedTextColor: '#1e1b4b',
    headerBg: '#D6DBFE',
    headerTextPrimary: '#1e1b4b',
    headerTextSecondary: '#1e1b4b',
    decorative: 'pipeline',
  },
]
