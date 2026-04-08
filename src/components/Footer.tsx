import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Company */}
          <div className="flex items-center">
            <img src="/images/kleo-logo.png" alt="Kleo" className="h-9 w-auto" />
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-slate-400 text-center"
          >
            &copy; {new Date().getFullYear()} Kno2gether Labs LTD. All rights reserved.
            <br />
            <span className="text-slate-500">kleo.services</span>
          </motion.p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#services" className="text-xs font-medium text-slate-400 hover:text-kleo-orange transition-colors uppercase tracking-wider">
              Services
            </a>
            <a href="#how-it-works" className="text-xs font-medium text-slate-400 hover:text-kleo-orange transition-colors uppercase tracking-wider">
              How It Works
            </a>
            <a href="#get-started" className="text-xs font-medium text-slate-400 hover:text-kleo-orange transition-colors uppercase tracking-wider">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
