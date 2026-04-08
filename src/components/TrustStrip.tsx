import { motion } from 'framer-motion'

const items = [
  'AI Receptionist',
  'OpenClaw Setup',
  'WhatsApp Native',
  '24/7 Available',
  'Instant Setup',
  'No Code Required',
  'GDPR Compliant',
  'Enterprise AI',
  'Smart Routing',
  'Lead Qualification',
]

export default function TrustStrip() {
  return (
    <div className="relative bg-gradient-to-r from-kleo-orange to-orange-600 overflow-hidden py-3">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="inline-flex items-center px-8">
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 mr-6" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/90">
              {item}
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
