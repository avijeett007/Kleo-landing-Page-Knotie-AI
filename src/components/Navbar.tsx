import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'
import { PHONE_DISPLAY, PHONE_HREF } from '../config'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: 'services', label: 'Services' },
    { href: 'how-it-works', label: 'How It Works' },
    { href: 'get-started', label: 'Get Started' },
  ]

  const handleNavClick = (hash: string) => {
    setMobileOpen(false)
    if (isHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#' + hash)
    }
  }

  const goHome = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button onClick={goHome} className="flex items-center cursor-pointer bg-transparent border-none p-0">
            <img src="/images/kleo-logo.png" alt="Kleo" className="h-20 w-auto" />
          </button>

          <ul className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 bg-transparent border-none cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href={PHONE_HREF} className="hidden md:flex items-center gap-1.5 text-xs text-slate-400 hover:text-kleo-orange transition-colors font-mono">
              <Phone size={12} />
              {PHONE_DISPLAY}
            </a>

            <div className="hidden md:flex items-center gap-2">
              <Button
                onClick={() => handleNavClick('get-started')}
                variant="outline"
                size="sm"
                className="border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20 hover:text-green-300 rounded-full text-xs"
              >
                <MessageCircle size={14} className="mr-1.5" />
                WhatsApp
              </Button>
              <Button
                render={<a href={PHONE_HREF} />}
                size="sm"
                className="bg-kleo-orange hover:bg-orange-600 text-white rounded-full text-xs shadow-lg shadow-orange-500/20"
              >
                <Phone size={14} className="mr-1.5" />
                Call Kleo
              </Button>
            </div>

            <button className="lg:hidden text-white cursor-pointer bg-transparent border-none" onClick={() => setMobileOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-[#020617] flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setMobileOpen(false)} className="absolute top-5 right-6 text-slate-300 hover:text-white cursor-pointer bg-transparent border-none">
              <X size={24} />
            </button>
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-3xl font-bold text-white hover:text-kleo-orange transition-colors bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col items-center gap-3 mt-4">
              <Button
                render={<a href={PHONE_HREF} onClick={() => setMobileOpen(false)} />}
                size="lg"
                className="bg-kleo-orange hover:bg-orange-600 text-white rounded-full px-8 font-semibold"
              >
                <Phone size={18} className="mr-2" />
                Call Kleo
              </Button>
              <Button
                onClick={() => handleNavClick('get-started')}
                variant="outline"
                size="lg"
                className="border-green-500/30 bg-green-500/10 text-green-400 rounded-full px-8 font-semibold"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp Me
              </Button>
            </div>
            <a href={PHONE_HREF} className="text-lg font-mono text-kleo-orange mt-2">
              {PHONE_DISPLAY}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
