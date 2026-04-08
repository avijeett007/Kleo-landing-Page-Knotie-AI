import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 particle-grid" />

      {/* Radial glow behind character */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/10 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-kleo-orange animate-pulse" />
              <span className="text-xs font-semibold tracking-widest uppercase text-kleo-orange">
                AI-Powered Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight"
            >
              <span className="text-white">Meet</span>{' '}
              <span className="text-gradient">Kleo.</span>
              <br />
              <span className="text-white">Your AI</span>
              <br />
              <span className="text-slate-400" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.25)', color: 'transparent' }}>
                Business Partner.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300 max-w-md mt-6 leading-relaxed"
            >
              I set up AI systems for your business, chat with your customers,
              and handle the tech — so you can focus on growing.
              Just tell me what you need.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-kleo-orange text-white font-semibold hover:bg-orange-600 transition-all duration-200 hover:-translate-y-0.5 shadow-xl shadow-orange-500/25"
              >
                <MessageCircle size={18} />
                Talk to Kleo
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-slate-300 font-medium hover:border-orange-500/40 hover:text-white transition-all duration-200"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-white/5"
            >
              <div>
                <div className="text-2xl font-black text-kleo-orange">24/7</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Always On</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-black text-kleo-orange">&lt;5min</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Response</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl font-black text-kleo-orange">WhatsApp</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Native</div>
              </div>
            </motion.div>
          </div>

          {/* Right - Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring behind character */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-300/10 blur-3xl scale-75" />

              <motion.img
                src="/images/kleo-character.png"
                alt="Kleo - Your AI Business Assistant"
                className="relative z-10 w-[340px] md:w-[420px] lg:w-[460px] drop-shadow-2xl"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Floating badges */}
              <motion.div
                className="absolute -left-4 top-1/4 glass rounded-xl px-4 py-3 shadow-xl"
                animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-xs font-bold text-kleo-orange">AI Receptionist</div>
                <div className="text-[10px] text-slate-300">Answering calls now...</div>
              </motion.div>

              <motion.div
                className="absolute -right-2 top-2/3 glass rounded-xl px-4 py-3 shadow-xl"
                animate={{ y: [0, -8, 0], rotate: [1, -1, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="text-xs font-bold text-red-400">OpenClaw Ready</div>
                <div className="text-[10px] text-slate-300">Setup in progress...</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-kleo-darker to-transparent" />
    </section>
  )
}
