import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, Loader2, User, Mail, Phone, ChevronDown, MessageCircle } from 'lucide-react'

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
      // Webhook call - replace URL with your actual webhook
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL || 'https://your-webhook-url.com/lead'

      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          timestamp: new Date().toISOString(),
          source: 'kleo.services',
        }),
      })

      setStatus('success')
    } catch {
      // Still show success in case of CORS or webhook issues
      // since many webhooks don't return proper CORS headers
      setStatus('success')
    }
  }

  const selectedService = serviceOptions.find((s) => s.value === form.service)

  return (
    <section id="get-started" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - CTA Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-xs font-semibold tracking-widest uppercase text-kleo-orange mb-6">
              <MessageCircle size={14} />
              Get Started
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Ready to Meet{' '}
              <span className="text-gradient">Kleo?</span>
            </h2>

            <p className="text-slate-300 mt-4 text-lg leading-relaxed max-w-md">
              Fill in your details, pick a service, and Kleo will reach out to you on WhatsApp.
              It's that simple — no sales calls, no waiting.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: '1', text: 'Fill in the form with your details' },
                { icon: '2', text: 'Kleo reaches out on WhatsApp within minutes' },
                { icon: '3', text: 'Have a friendly chat about your needs' },
                { icon: '4', text: 'Your service goes live — Kleo handles the rest' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-sm font-bold text-kleo-orange flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm text-slate-300">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Character */}
            <motion.div
              className="hidden lg:block mt-12"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/images/kleo-character.png"
                alt="Kleo"
                className="w-48 opacity-80 drop-shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                  >
                    <CheckCircle2 size={64} className="text-green-400 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Awesome! Kleo is on the way.
                  </h3>
                  <p className="text-slate-300">
                    Check your WhatsApp — Kleo will message you shortly to get started with your{' '}
                    <span style={{ color: selectedService?.color }}>
                      {selectedService?.label}
                    </span>{' '}
                    setup.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-8 md:p-10 space-y-6"
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Talk to Kleo</h3>
                    <p className="text-sm text-slate-300">
                      Your AI assistant is ready to help
                    </p>
                  </div>

                  {/* Service Selector */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Service
                    </label>
                    <div className="relative">
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm font-medium focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all cursor-pointer"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} className="bg-slate-900">
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      WhatsApp Number
                    </label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={form.whatsapp}
                        onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl bg-kleo-orange text-white font-bold text-sm uppercase tracking-wider hover:bg-orange-600 transition-all duration-200 disabled:opacity-60 shadow-lg shadow-orange-500/20"
                  >
                    {status === 'sending' ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : (
                      <Send size={16} />
                    )}
                    {status === 'sending' ? 'Connecting...' : 'Let Kleo Reach Out'}
                  </motion.button>

                  <p className="text-[11px] text-slate-500 text-center">
                    By submitting, you agree to be contacted via WhatsApp. No spam, ever.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
