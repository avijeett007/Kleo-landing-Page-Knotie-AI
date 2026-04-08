import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('kleo-theme')
    if (saved === 'light') {
      setDark(false)
      document.documentElement.classList.add('light')
    }
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    if (next) {
      document.documentElement.classList.remove('light')
      localStorage.setItem('kleo-theme', 'dark')
    } else {
      document.documentElement.classList.add('light')
      localStorage.setItem('kleo-theme', 'light')
    }
  }

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-white/10 dark:bg-white/10 light:bg-black/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-slate-300 hover:text-kleo-orange transition-colors shadow-lg cursor-pointer"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  )
}
