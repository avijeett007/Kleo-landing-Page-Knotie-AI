import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, Loader2, User, Mail, Phone, ChevronDown, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Separator } from './ui/separator'
import { PHONE_DISPLAY, PHONE_HREF } from '../config'

const serviceOptions = [
  { value: 'ai-receptionist', label: 'AI Receptionist', color: '#F97316' },
  { value: 'openclaw-setup', label: 'OpenClaw Setup', color: '#DC2626' },
]

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: 'ai-receptionist',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const selectedService = serviceOptions.find((s) => s.value === form.service)

  return (
    <section id="get-started" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Badge variant="outline" className="bg-orange-500/10 border-orange-500/25 text-orange-400 text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              <MessageCircle size={14} className="mr-2" />
              Get Started
            </Badge>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Ready to Meet <span className="text-gradient">Kleo?</span>
            </h2>

            <p className="text-slate-300 mt-4 text-lg leading-relaxed max-w-md">
              Two ways to reach Kleo. Call directly for an instant conversation, or fill the form and Kleo will message you on WhatsApp.
            </p>

            {/* Call CTA */}
            <Card className="mt-8 p-6 bg-slate-900/60 border-orange-500/20 hover:border-orange-500/40 transition-all">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-300 mb-1">Prefer to talk? Call Kleo directly</p>
                  <a href={PHONE_HREF} className="text-2xl font-black text-kleo-orange hover:text-orange-400 transition-colors font-mono">
                    {PHONE_DISPLAY}
                  </a>
                  <p className="text-xs text-slate-400 mt-1">Available 24/7 — AI-powered, instant pickup</p>
                </div>
                <Button
                  render={<a href={PHONE_HREF} />}
                  size="lg"
                  className="bg-kleo-orange hover:bg-orange-600 text-white rounded-full px-6 font-semibold shadow-lg shadow-orange-500/20"
                >
                  <Phone size={18} className="mr-2" />
                  Call Now
                </Button>
              </div>
            </Card>

            <div className="flex items-center gap-4 mt-8">
              <Separator className="flex-1 bg-white/8" />
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">or</span>
              <Separator className="flex-1 bg-white/8" />
            </div>

            <div className="mt-6 space-y-4">
              {[
                'Fill in the form with your details',
                'Kleo reaches out on WhatsApp within minutes',
                'Have a friendly chat about your needs',
                'Your service goes live — Kleo handles the rest',
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-sm font-bold text-green-400 flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm text-slate-200">{text}</span>
                </motion.div>
              ))}
            </div>

            {/* Banner image — fits naturally here as a visual anchor */}
            <motion.div
              className="hidden lg:block mt-10"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src="/images/kleo-banner.png" alt="Kleo" className="h-20 w-auto opacity-90 drop-shadow-lg" />
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                  <Card className="p-12 text-center bg-slate-900/70 border-green-500/20">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}>
                      <CheckCircle2 size={64} className="text-green-400 mx-auto mb-6" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">Awesome! Kleo is on the way.</h3>
                    <p className="text-slate-300">
                      Check your WhatsApp — Kleo will message you shortly to get started with your{' '}
                      <span className="font-semibold" style={{ color: selectedService?.color }}>{selectedService?.label}</span> setup.
                    </p>
                  </Card>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit}>
                  <Card className="p-8 md:p-10 bg-slate-900/70 border-white/10">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                          <MessageCircle size={20} className="text-green-400" />
                          Let Kleo WhatsApp You
                        </h3>
                        <p className="text-sm text-slate-300">Fill in your details and Kleo will start a conversation</p>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Service</label>
                        <div className="relative">
                          <select
                            value={form.service}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm({ ...form, service: e.target.value })}
                            className="w-full appearance-none bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white text-sm font-medium focus:outline-none focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all cursor-pointer"
                          >
                            {serviceOptions.map((opt) => (
                              <option key={opt.value} value={opt.value} className="bg-slate-900 text-white">{opt.label}</option>
                            ))}
                          </select>
                          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Name</label>
                        <div className="relative">
                          <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 z-10" />
                          <Input type="text" required placeholder="Your name" value={form.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, name: e.target.value })}
                            className="pl-10 bg-white/5 border-white/12 text-white placeholder:text-slate-500 focus-visible:ring-orange-500/30 focus-visible:border-orange-500/50" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Email</label>
                        <div className="relative">
                          <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 z-10" />
                          <Input type="email" required placeholder="you@company.com" value={form.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, email: e.target.value })}
                            className="pl-10 bg-white/5 border-white/12 text-white placeholder:text-slate-500 focus-visible:ring-orange-500/30 focus-visible:border-orange-500/50" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">WhatsApp Number</label>
                        <div className="relative">
                          <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 z-10" />
                          <Input type="tel" required placeholder="+44 7861 900580" value={form.whatsapp}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, whatsapp: e.target.value })}
                            className="pl-10 bg-white/5 border-white/12 text-white placeholder:text-slate-500 focus-visible:ring-orange-500/30 focus-visible:border-orange-500/50" />
                        </div>
                      </div>

                      {status === 'error' && (
                        <p className="text-sm text-red-400 text-center">Something went wrong. Please try again or call us directly.</p>
                      )}

                      <Button type="submit" disabled={status === 'sending'} size="lg"
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-green-500/20 py-6">
                        {status === 'sending' ? <Loader2 size={18} className="animate-spin mr-2" /> : <Send size={16} className="mr-2" />}
                        {status === 'sending' ? 'Connecting...' : 'Let Kleo WhatsApp Me'}
                      </Button>

                      <p className="text-[11px] text-slate-400 text-center">By submitting, you agree to be contacted via WhatsApp. No spam, ever.</p>
                    </div>
                  </Card>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
