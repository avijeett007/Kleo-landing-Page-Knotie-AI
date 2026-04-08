import { motion } from 'framer-motion'
import { MessageCircle, Brain, Zap } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: <MessageCircle size={28} />,
    title: 'Tell Kleo What You Need',
    description:
      'Pick a service, fill in your details, and Kleo reaches out to you on WhatsApp within minutes. No forms, no waiting rooms — just a conversation.',
  },
  {
    num: '02',
    icon: <Brain size={28} />,
    title: 'Kleo Learns Your Business',
    description:
      'Through a friendly WhatsApp chat, Kleo understands your business, preferences, and requirements. Like briefing a new team member — but faster.',
  },
  {
    num: '03',
    icon: <Zap size={28} />,
    title: 'Your Service Goes Live',
    description:
      'Kleo deploys and configures everything. Your AI receptionist starts answering calls, your OpenClaw gets set up — and Kleo stays available for support.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-kleo-darker via-slate-900/50 to-kleo-darker" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold tracking-widest uppercase text-kleo-orange mb-4">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            How <span className="text-gradient">Kleo</span> Works
          </h2>
          <p className="text-slate-300 mt-4 max-w-md mx-auto text-lg">
            Three steps. One WhatsApp conversation. Your AI service is live.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px">
            <div className="w-full h-full border-t-2 border-dashed border-orange-500/20" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step circle */}
              <motion.div
                whileHover={{ scale: 1.1, boxShadow: '0 0 40px rgba(249, 115, 22, 0.3)' }}
                className="w-32 h-32 rounded-full border-2 border-orange-500/20 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center mb-8 relative z-10 transition-all duration-300"
              >
                <span className="text-kleo-orange mb-1">{step.icon}</span>
                <span className="text-2xl font-black text-kleo-orange">{step.num}</span>
              </motion.div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
