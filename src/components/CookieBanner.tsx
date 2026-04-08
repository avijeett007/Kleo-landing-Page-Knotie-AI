import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield } from 'lucide-react'
import { Button } from './ui/button'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('kleo-cookie-consent')
    if (!accepted) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('kleo-cookie-consent', 'accepted')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto glass rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-2xl">
            <Shield size={20} className="text-kleo-orange flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-slate-200 leading-relaxed">
                We use only essential cookies to keep the site working (like your theme preference). No tracking, no ads.{' '}
                <a href="/privacy" className="text-kleo-orange hover:underline">Privacy Policy</a>{' '}
                &middot;{' '}
                <a href="/privacy#gdpr" className="text-kleo-orange hover:underline">Your GDPR Rights</a>
              </p>
            </div>
            <Button onClick={accept} size="sm" className="bg-kleo-orange hover:bg-orange-600 text-white rounded-full px-6 text-xs font-semibold flex-shrink-0">
              Got it
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
