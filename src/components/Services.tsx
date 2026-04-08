import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Cog, Bot, BarChart3, Globe, Headphones, ArrowRight, Lock, Sparkles } from 'lucide-react'

interface Service {
  id: string
  name: string
  tagline: string
  description: string
  icon: React.ReactNode
  color: string
  colorClass: string
  gradientClass: string
  badgeBg: string
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
    icon: <Phone size={24} />,
    color: '#F97316',
    colorClass: 'text-orange-400',
    gradientClass: 'from-orange-500/20 to-orange-500/5',
    badgeBg: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
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
      'Complete OpenClaw deployment and configuration for your business. From installation to custom workflows — Kleo handles the entire setup so you can start automating immediately.',
    icon: <Cog size={24} />,
    color: '#DC2626',
    colorClass: 'text-red-400',
    gradientClass: 'from-red-500/20 to-red-500/5',
    badgeBg: 'bg-red-500/10 border-red-500/20 text-red-400',
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
    description:
      'Intelligent website chatbot trained on your business data that engages visitors, answers questions, and captures leads.',
    icon: <Bot size={24} />,
    color: '#6366F1',
    colorClass: 'text-indigo-400',
    gradientClass: 'from-indigo-500/20 to-indigo-500/5',
    badgeBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
    available: false,
    features: [
      'Trained on your business data',
      'Multi-language support',
      'Lead capture & CRM sync',
      'Custom branding',
    ],
  },
  {
    id: 'analytics',
    name: 'AI Analytics',
    tagline: 'Insights that drive decisions.',
    description:
      'Smart analytics dashboard powered by AI that turns your business data into actionable insights and automated reports.',
    icon: <BarChart3 size={24} />,
    color: '#10B981',
    colorClass: 'text-emerald-400',
    gradientClass: 'from-emerald-500/20 to-emerald-500/5',
    badgeBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    available: false,
    features: [
      'Automated reporting',
      'Predictive analytics',
      'Custom dashboards',
      'Data-driven recommendations',
    ],
  },
  {
    id: 'web-presence',
    name: 'Web Presence',
    tagline: 'Your digital storefront, AI-powered.',
    description:
      'AI-enhanced website and social media management. Automated content, SEO optimization, and online reputation management.',
    icon: <Globe size={24} />,
    color: '#8B5CF6',
    colorClass: 'text-violet-400',
    gradientClass: 'from-violet-500/20 to-violet-500/5',
    badgeBg: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
    available: false,
    features: [
      'AI content generation',
      'SEO optimization',
      'Social media automation',
      'Reputation monitoring',
    ],
  },
  {
    id: 'support-desk',
    name: 'AI Support Desk',
    tagline: 'Support that never sleeps.',
    description:
      'Full-stack customer support system with AI ticket routing, auto-responses, and escalation management.',
    icon: <Headphones size={24} />,
    color: '#EC4899',
    colorClass: 'text-pink-400',
    gradientClass: 'from-pink-500/20 to-pink-500/5',
    badgeBg: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
    available: false,
    features: [
      'Smart ticket routing',
      'Auto-response system',
      'Escalation workflows',
      'Customer satisfaction tracking',
    ],
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold tracking-widest uppercase text-kleo-orange mb-4">
            <Sparkles size={14} />
            Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            What Can Kleo{' '}
            <span className="text-gradient">Do For You?</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-lg mx-auto text-lg">
            Choose a service, fill in your details, and Kleo will reach out on WhatsApp to get you started.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <motion.button
              key={service.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelected(service.id)}
              className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                selected === service.id
                  ? 'bg-white/10 border border-white/20 text-white shadow-lg'
                  : 'border border-white/5 text-slate-400 hover:text-slate-300 hover:border-white/10'
              } ${!service.available ? 'opacity-60' : ''}`}
              style={
                selected === service.id
                  ? { borderColor: `${service.color}40`, boxShadow: `0 0 20px ${service.color}15` }
                  : {}
              }
            >
              <span style={{ color: selected === service.id ? service.color : undefined }}>
                {service.icon}
              </span>
              {service.name}
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
            className={`rounded-2xl border border-white/5 overflow-hidden bg-gradient-to-br ${activeService.gradientClass} backdrop-blur-sm`}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Service Info */}
              <div className="p-8 md:p-12">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${activeService.badgeBg}`}>
                  {activeService.available ? 'Available Now' : 'Coming Soon'}
                </span>

                <h3 className="text-3xl md:text-4xl font-black text-white mt-6 leading-tight">
                  {activeService.name}
                </h3>

                <p
                  className="text-lg font-medium mt-2 italic"
                  style={{ color: activeService.color }}
                >
                  "{activeService.tagline}"
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
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: activeService.color }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {activeService.available && (
                  <a
                    href="#get-started"
                    className="group inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: activeService.color }}
                  >
                    Get Started
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>

              {/* Right - Visual */}
              <div className="relative flex items-end justify-center p-8 md:p-12 overflow-hidden">
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `radial-gradient(circle at 50% 70%, ${activeService.color}40, transparent 60%)`,
                  }}
                />

                <motion.img
                  src="/images/kleo-character.png"
                  alt="Kleo"
                  className="relative z-10 w-[250px] md:w-[300px] drop-shadow-2xl"
                  style={
                    activeService.kleoMood === 'red'
                      ? { filter: 'hue-rotate(-20deg) saturate(1.3)' }
                      : {}
                  }
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Service-specific floating element */}
                {activeService.id === 'openclaw-setup' && (
                  <motion.div
                    className="absolute top-8 right-8 bg-red-500/20 border border-red-500/30 rounded-xl px-4 py-2 backdrop-blur-sm"
                    animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span className="text-red-400 text-sm font-bold">OpenClaw</span>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
