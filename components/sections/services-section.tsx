'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Palette, LineChart, Shield, Cpu, Cloud } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Digital Solutions',
    description: 'Custom software development and digital transformation strategies tailored to your business needs.',
    features: ['Web Applications', 'Mobile Solutions', 'API Development'],
    gradient: 'from-[#3B82F6] to-[#06B6D4]',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Stunning visual experiences that captivate audiences and strengthen brand identity.',
    features: ['UI/UX Design', 'Brand Identity', 'Motion Graphics'],
    gradient: 'from-[#8B5CF6] to-[#EC4899]',
  },
  {
    icon: LineChart,
    title: 'Business Intelligence',
    description: 'Data-driven insights and analytics to empower informed decision-making.',
    features: ['Data Analytics', 'Reporting Tools', 'Predictive Models'],
    gradient: 'from-[#06B6D4] to-[#3B82F6]',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
    features: ['Security Audits', 'Threat Detection', 'Compliance'],
    gradient: 'from-[#EC4899] to-[#8B5CF6]',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions powered by cutting-edge artificial intelligence.',
    features: ['Machine Learning', 'Process Automation', 'Smart Systems'],
    gradient: 'from-[#8B5CF6] to-[#3B82F6]',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Scalable cloud infrastructure and migration services for modern businesses.',
    features: ['Cloud Migration', 'DevOps', 'Infrastructure'],
    gradient: 'from-[#3B82F6] to-[#8B5CF6]',
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070D] via-[#0B0F1A] to-[#05070D]" />
      
      {/* Gradient Mesh */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#3B82F6]/10 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EC4899]/5 rounded-full blur-[180px]" />
      </div>
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-[#8B5CF6] font-medium tracking-wider uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#E5E7EB]">
            Our{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive suite of services designed to transform your business 
            and drive sustainable growth in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-8 h-full card-hover relative overflow-hidden">
                {/* Animated Gradient Border */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`} />
                </div>
                
                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold mb-3 text-[#E5E7EB] group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#9CA3AF] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${service.gradient} bg-opacity-10 text-[#E5E7EB] border border-[#8B5CF6]/20 group-hover:border-[#8B5CF6]/40 transition-colors`}
                        style={{ background: 'rgba(139, 92, 246, 0.1)' }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
