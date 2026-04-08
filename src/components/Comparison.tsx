import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Check, X } from 'lucide-react'
import { BRAND_NAME } from '../config'

const rows = [
  { label: 'Available 24/7', human: false, kleo: true },
  { label: 'Responds in seconds', human: false, kleo: true },
  { label: 'WhatsApp-native onboarding', human: false, kleo: true },
  { label: 'No training needed', human: false, kleo: true },
  { label: 'Scales with your business', human: false, kleo: true },
  { label: 'Consistent service quality', human: false, kleo: true },
  { label: 'Never takes a sick day', human: false, kleo: true },
  { label: 'Handles multiple calls at once', human: false, kleo: true },
]

export default function Comparison() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="bg-orange-500/10 border-orange-500/25 text-orange-400 text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Why Switch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Traditional vs{' '}
            <span className="text-gradient">{BRAND_NAME}</span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-md mx-auto">
            {`See why businesses are replacing manual processes with ${BRAND_NAME}-powered AI services.`}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden border-white/8 bg-white/[0.02]">
            {/* Header */}
            <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] border-b border-white/8">
              <div className="p-4 md:p-5" />
              <div className="p-4 md:p-5 text-center border-l border-white/8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Traditional</span>
              </div>
              <div className="p-4 md:p-5 text-center border-l border-orange-500/20 bg-orange-500/[0.05]">
                <span className="text-xs font-bold uppercase tracking-wider text-kleo-orange">{BRAND_NAME}</span>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] ${
                  i < rows.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                <div className="p-4 md:p-5 text-sm font-medium">{row.label}</div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-white/5">
                  {row.human ? (
                    <Check size={18} className="text-green-400" />
                  ) : (
                    <X size={18} className="text-red-400/60" />
                  )}
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center border-l border-orange-500/10 bg-orange-500/[0.02]">
                  <Check size={18} className="text-kleo-orange" />
                </div>
              </div>
            ))}

            {/* Bottom CTA row */}
            <div className="grid grid-cols-[1fr_100px_100px] md:grid-cols-[1fr_140px_140px] border-t border-white/8 bg-white/[0.02]">
              <div className="p-4 md:p-5 text-sm font-bold">Monthly Cost</div>
              <div className="p-4 md:p-5 text-center border-l border-white/8">
                <span className="text-lg font-black text-red-400">$$$$</span>
              </div>
              <div className="p-4 md:p-5 text-center border-l border-orange-500/20 bg-orange-500/[0.05]">
                <span className="text-lg font-black text-kleo-orange">{`Talk to ${BRAND_NAME}`}</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
