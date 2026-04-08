import { motion } from 'framer-motion'
import { Shield, Clock, Smartphone, HeartHandshake } from 'lucide-react'

const reasons = [
  {
    icon: <Clock size={24} />,
    title: 'Always Available',
    desc: 'Kleo works 24/7. Your customers get instant responses, even at 3 AM on a Sunday.',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'WhatsApp-Native',
    desc: 'No apps to download, no dashboards to learn. Everything happens right in WhatsApp.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Secure & Private',
    desc: 'Your business data is encrypted and never shared. GDPR-compliant by design.',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Human When You Need It',
    desc: 'Kleo knows when to escalate. Complex issues get routed to you instantly.',
  },
]

export default function WhyKleo() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Why Businesses{' '}
            <span className="text-gradient">Choose Kleo</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-md mx-auto text-lg">
            Built for small businesses that want enterprise-level AI without the complexity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: 'rgba(249, 115, 22, 0.3)' }}
              className="glass-light rounded-2xl p-7 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-kleo-orange mb-5">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
