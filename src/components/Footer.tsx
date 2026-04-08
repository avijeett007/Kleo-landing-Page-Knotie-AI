import { Phone, MapPin, Building2 } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF, COMPANY } from '../config'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src="/images/kleo-logo.png" alt="Kleo" className="h-16 w-auto mb-4" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              AI-powered services for your business. Kleo handles the tech so you can focus on growing.
            </p>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 mt-4 text-sm text-kleo-orange hover:text-orange-400 transition-colors font-mono font-medium">
              <Phone size={14} />
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-sm text-slate-400 hover:text-kleo-orange transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-sm text-slate-400 hover:text-kleo-orange transition-colors">How It Works</a></li>
              <li><a href="#get-started" className="text-sm text-slate-400 hover:text-kleo-orange transition-colors">Get Started</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><a href="/privacy" className="text-sm text-slate-400 hover:text-kleo-orange transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm text-slate-400 hover:text-kleo-orange transition-colors">Terms of Service</a></li>
              <li><a href="/privacy#gdpr" className="text-sm text-slate-400 hover:text-kleo-orange transition-colors">Your GDPR Rights</a></li>
            </ul>
          </div>
        </div>

        {/* Company info bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Building2 size={12} />
                {COMPANY.name} — Company No. {COMPANY.number}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={12} />
                {COMPANY.address}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
