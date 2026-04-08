import { motion } from 'framer-motion'
import { MessageCircle, Brain, Zap } from 'lucide-react'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { BRAND_NAME } from '../config'

const steps = [
  {
    num: '01',
    icon: <MessageCircle size={28} />,
    title: `Tell ${BRAND_NAME} What You Need`,
    description:
      `Pick a service, fill in your details, and ${BRAND_NAME} reaches out to you on WhatsApp within minutes. No forms, no waiting rooms — just a conversation.`,
    color: '#F97316',
  },
  {
    num: '02',
    icon: <Brain size={28} />,
    title: `${BRAND_NAME} Learns Your Business`,
    description:
      `Through a friendly WhatsApp chat, ${BRAND_NAME} understands your business, preferences, and requirements. Like briefing a new team member — but faster.`,
    color: '#8B5CF6',
  },
  {
    num: '03',
    icon: <Zap size={28} />,
    title: 'Your Service Goes Live',
    description:
      `${BRAND_NAME} deploys and configures everything. Your AI receptionist starts answering calls, your OpenClaw gets set up — and ${BRAND_NAME} stays available for support.`,
    color: '#10B981',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-slate-900/40 to-[#020617]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="bg-orange-500/10 border-orange-500/25 text-orange-400 text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            How <span className="text-gradient">{BRAND_NAME}</span> Works
          </h2>
          <p className="text-slate-300 mt-4 max-w-md mx-auto text-lg">
            Three steps. One WhatsApp conversation. Your AI service is live.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-20 left-[20%] right-[20%] h-px">
            <div className="w-full h-full border-t-2 border-dashed border-orange-500/20" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <Card className="flex flex-col items-center text-center p-8 bg-transparent border-white/5 hover:border-white/15 transition-all duration-300">
                {/* Step circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-24 h-24 rounded-full border-2 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center mb-6 relative z-10 transition-all duration-300"
                  style={{ borderColor: `${step.color}40` }}
                >
                  <span style={{ color: step.color }}>{step.icon}</span>
                  <span className="text-lg font-black mt-0.5" style={{ color: step.color }}>{step.num}</span>
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
