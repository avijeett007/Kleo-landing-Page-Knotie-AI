import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { BRAND_NAME, BRAND_TAGLINE, BRAND_DESCRIPTION, CHARACTER_IMAGE, PHONE_DISPLAY, PHONE_HREF } from '../config'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 particle-grid" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="bg-orange-500/10 border-orange-500/25 text-orange-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse mr-2" />
                AI-Powered Services
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight"
            >
              <span className="text-white">Meet</span>{' '}
              <span className="text-gradient">{BRAND_NAME}.</span>
              <br />
              <span className="text-gradient">{BRAND_TAGLINE}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-300 max-w-md mt-6 leading-relaxed"
            >
              {BRAND_DESCRIPTION}
              <span className="text-white font-medium"> Just tell me what you need.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <Button
                render={<a href={PHONE_HREF} />}
                size="lg"
                className="bg-kleo-orange hover:bg-orange-600 text-white rounded-full px-7 py-6 text-base font-semibold shadow-xl shadow-orange-500/25 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone size={18} className="mr-2" />
                {`Call ${BRAND_NAME} Now`}
              </Button>

              <Button
                render={<a href="#get-started" />}
                variant="outline"
                size="lg"
                className="border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20 hover:text-green-300 rounded-full px-7 py-6 text-base font-semibold hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-5"
            >
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-orange-400 transition-colors">
                <Phone size={14} />
                <span className="font-mono font-medium">{PHONE_DISPLAY}</span>
                <span className="text-xs text-slate-500">— Available 24/7</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 mt-10 pt-8 border-t border-white/8"
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
                <div className="text-2xl font-black text-green-400">WhatsApp</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Native</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-300/10 blur-3xl scale-75" />
              <motion.img
                src={CHARACTER_IMAGE}
                alt={`${BRAND_NAME} - Your AI Business Assistant`}
                className="relative z-10 w-[340px] md:w-[420px] lg:w-[460px] drop-shadow-2xl"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -left-4 top-1/4 glass rounded-xl px-4 py-3 shadow-xl"
                animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-xs font-bold text-kleo-orange">AI Receptionist</div>
                <div className="text-[10px] text-slate-400">Answering calls now...</div>
              </motion.div>
              <motion.div
                className="absolute -right-2 top-2/3 glass rounded-xl px-4 py-3 shadow-xl"
                animate={{ y: [0, -8, 0], rotate: [1, -1, 1] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              >
                <div className="text-xs font-bold text-red-400">OpenClaw Ready</div>
                <div className="text-[10px] text-slate-400">Setup in progress...</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t to-transparent" style={{ '--tw-gradient-from': 'var(--page-bg)' } as React.CSSProperties} />
    </section>
  )
}
