import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#get-started', label: 'Get Started' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/images/kleo-logo.png" alt="Kleo" className="h-10 w-auto" />
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="#get-started"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-kleo-orange text-white text-sm font-semibold hover:bg-orange-600 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-orange-500/25"
            >
              Talk to Kleo
            </a>
            <button
              className="md:hidden text-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-kleo-darker flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 text-slate-400 hover:text-white"
            >
              <X size={24} />
            </button>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-bold text-white hover:text-kleo-orange transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-kleo-orange text-white font-semibold text-lg"
            >
              Talk to Kleo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
