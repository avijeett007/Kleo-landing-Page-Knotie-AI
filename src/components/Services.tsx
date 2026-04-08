import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Cog, Bot, BarChart3, Globe, Headphones, ArrowRight, Lock, Sparkles } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { BRAND_NAME, CHARACTER_IMAGE } from '../config'

interface Service {
  id: string
  name: string
  tagline: string
  description: string
  icon: React.ReactNode
  color: string
  gradientClass: string
  badgeVariant: string
  available: boolean
  features: string[]
  kleoMood?: string
}

const services: Service[] = [
  {
    id: 'ai-receptionist',
    name: 'AI Receptionist',
    tagline: "I'll answer your calls while you grow.",
    description:
      "Your AI-powered phone receptionist that handles incoming calls, books appointments, qualifies leads, and answers FAQs — all in your brand's voice, 24/7.",
    icon: <Phone size={22} />,
    color: '#F97316',
    gradientClass: 'from-orange-500/20 to-orange-500/5',
    badgeVariant: 'bg-orange-500/15 border-orange-500/25 text-orange-400',
    available: true,
    features: [
      'Handles inbound calls 24/7',
      'Books appointments to your calendar',
      'Qualifies leads with custom questions',
      'Transfers VIP calls to your phone',
      'WhatsApp follow-up after every call',
    ],
  },
  {
    id: 'openclaw-setup',
    name: 'OpenClaw Setup',
    tagline: "I've turned Red. Now I set up your OpenClaw.",
    description:
      `Complete OpenClaw deployment and configuration for your business. From installation to custom workflows — ${BRAND_NAME} handles the entire setup so you can start automating immediately.`,
    icon: <Cog size={22} />,
    color: '#DC2626',
    gradientClass: 'from-red-500/20 to-red-500/5',
    badgeVariant: 'bg-red-500/15 border-red-500/25 text-red-400',
    available: true,
    features: [
      'Full OpenClaw installation & config',
      'Custom workflow automation setup',
      'Integration with your existing tools',
      'Team training via WhatsApp',
      'Ongoing support & maintenance',
    ],
    kleoMood: 'red',
  },
  {
    id: 'ai-chatbot',
    name: 'AI Chatbot',
    tagline: 'Website chat that actually converts.',
    description: 'Intelligent website chatbot trained on your business data.',
    icon: <Bot size={22} />,
    color: '#6366F1',
    gradientClass: 'from-indigo-500/20 to-indigo-500/5',
    badgeVariant: 'bg-indigo-500/15 border-indigo-500/25 text-indigo-400',
    available: false,
    features: ['Trained on your business data', 'Multi-language support', 'Lead capture & CRM sync', 'Custom branding'],
  },
  {
    id: 'analytics',
    name: 'AI Analytics',
    tagline: 'Insights that drive decisions.',
    description: 'Smart analytics dashboard powered by AI.',
    icon: <BarChart3 size={22} />,
    color: '#10B981',
    gradientClass: 'from-emerald-500/20 to-emerald-500/5',
    badgeVariant: 'bg-emerald-500/15 border-emerald-500/25 text-emerald-400',
    available: false,
    features: ['Automated reporting', 'Predictive analytics', 'Custom dashboards', 'Data-driven recommendations'],
  },
  {
    id: 'web-presence',
    name: 'Web Presence',
    tagline: 'Your digital storefront, AI-powered.',
    description: 'AI-enhanced website and social media management.',
    icon: <Globe size={22} />,
    color: '#8B5CF6',
    gradientClass: 'from-violet-500/20 to-violet-500/5',
    badgeVariant: 'bg-violet-500/15 border-violet-500/25 text-violet-400',
    available: false,
    features: ['AI content generation', 'SEO optimization', 'Social media automation', 'Reputation monitoring'],
  },
  {
    id: 'support-desk',
    name: 'AI Support Desk',
    tagline: 'Support that never sleeps.',
    description: 'Full-stack customer support with AI routing.',
    icon: <Headphones size={22} />,
    color: '#EC4899',
    gradientClass: 'from-pink-500/20 to-pink-500/5',
    badgeVariant: 'bg-pink-500/15 border-pink-500/25 text-pink-400',
    available: false,
    features: ['Smart ticket routing', 'Auto-response system', 'Escalation workflows', 'Customer satisfaction tracking'],
  },
]

export default function Services() {
  const [selected, setSelected] = useState<string>('ai-receptionist')
  const activeService = services.find((s) => s.id === selected)!

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 particle-grid opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="bg-orange-500/10 border-orange-500/25 text-orange-400 text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            <Sparkles size={14} className="mr-2" />
            Services
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            {`What Can ${BRAND_NAME}`}{' '}
            <span className="text-gradient">Do For You?</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-lg mx-auto text-lg">
            {`Choose a service, fill in your details, and ${BRAND_NAME} will reach out on WhatsApp to get you started.`}
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <motion.button
              key={service.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(service.id)}
              className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selected === service.id
                  ? 'bg-white/10 text-white shadow-lg'
                  : 'border border-white/8 text-slate-400 hover:text-slate-200 hover:border-white/15'
              } ${!service.available ? 'opacity-50' : ''}`}
              style={
                selected === service.id
                  ? { borderColor: `${service.color}50`, boxShadow: `0 0 30px ${service.color}20`, border: `1px solid ${service.color}50` }
                  : {}
              }
            >
              <span style={{ color: selected === service.id ? service.color : undefined }}>
                {service.icon}
              </span>
              <span className="hidden sm:inline">{service.name}</span>
              {!service.available && (
                <span className="flex items-center gap-1 text-[10px] bg-white/5 rounded-full px-2 py-0.5 text-slate-400">
                  <Lock size={10} />
                  Soon
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Active Service Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className={`overflow-hidden border-white/8 bg-gradient-to-br ${activeService.gradientClass} backdrop-blur-sm`}>
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left - Service Info */}
                <div className="p-8 md:p-12">
                  <Badge variant="outline" className={`${activeService.badgeVariant} text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1`}>
                    {activeService.available ? 'Available Now' : 'Coming Soon'}
                  </Badge>

                  <h3 className="text-3xl md:text-4xl font-black text-white mt-6 leading-tight">
                    {activeService.name}
                  </h3>

                  <p className="text-lg font-medium mt-3 italic" style={{ color: activeService.color }}>
                    &ldquo;{activeService.tagline}&rdquo;
                  </p>

                  <p className="text-slate-300 mt-4 leading-relaxed">
                    {activeService.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {activeService.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-center gap-3 text-sm text-slate-200"
                      >
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: activeService.color }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {activeService.available && (
                    <Button
                      render={<a href="#get-started" />}
                      size="lg"
                      className="mt-8 rounded-full px-6 font-semibold hover:-translate-y-0.5 transition-all"
                      style={{ background: activeService.color }}
                    >
                        Get Started
                        <ArrowRight size={16} className="ml-2" />
                    </Button>
                  )}
                </div>

                {/* Right - Visual */}
                <div className="relative flex items-end justify-center p-8 md:p-12 overflow-hidden min-h-[300px]">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 50% 70%, ${activeService.color}40, transparent 60%)`,
                    }}
                  />

                  <motion.img
                    src={CHARACTER_IMAGE}
                    alt={BRAND_NAME}
                    className="relative z-10 w-[250px] md:w-[300px] drop-shadow-2xl"
                    style={
                      activeService.kleoMood === 'red'
                        ? { filter: 'hue-rotate(-20deg) saturate(1.4)' }
                        : {}
                    }
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {activeService.id === 'openclaw-setup' && (
                    <motion.div
                      className="absolute top-8 right-8 bg-red-500/20 border border-red-500/30 rounded-xl px-4 py-2 backdrop-blur-sm"
                      animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <span className="text-red-400 text-sm font-bold">OpenClaw Mode</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
