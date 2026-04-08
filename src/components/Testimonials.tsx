import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { BRAND_NAME } from '../config'

const testimonials = [
  {
    quote:
      `${BRAND_NAME} set up our AI receptionist in 2 days. We haven't missed a call since. Our booking rate went up 40% — and we didn't lift a finger.`,
    name: 'Sarah K.',
    title: 'CEO, Real Estate Agency',
    stars: 5,
  },
  {
    quote:
      `The WhatsApp-first approach is genius. ${BRAND_NAME} walked us through the entire OpenClaw setup like a real team member. Best onboarding experience we've ever had.`,
    name: 'Marcus T.',
    title: 'Founder, Digital Marketing Agency',
    stars: 5,
  },
  {
    quote:
      `We were spending hours every day on phone calls. Now ${BRAND_NAME} handles it all — qualifies leads, books appointments, even follows up. It's like having 3 extra staff.`,
    name: 'James O.',
    title: 'Director, Consulting Firm',
    stars: 5,
  },
]

const stats = [
  { value: '24/7', label: 'Always Running' },
  { value: '< 5s', label: 'Response Time' },
  { value: '98%', label: 'Satisfaction Rate' },
  { value: '3x', label: 'More Bookings' },
]

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.02] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="bg-orange-500/10 border-orange-500/25 text-orange-400 text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-5">
            Trusted by Businesses
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            What People Say About{' '}
            <span className="text-gradient">{BRAND_NAME}</span>
          </h2>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/8 mb-12"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/[0.03] p-6 text-center">
              <div className="text-3xl font-black text-kleo-orange">{stat.value}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="p-7 bg-white/[0.03] border-white/8 hover:border-orange-500/20 transition-all duration-300 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={14} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-lg">
                    🦊
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.title}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
