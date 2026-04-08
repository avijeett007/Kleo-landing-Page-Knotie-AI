import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Comparison from './components/Comparison'
import WhyKleo from './components/WhyKleo'
import Testimonials from './components/Testimonials'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import CookieBanner from './components/CookieBanner'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

function ScrollToHash() {
  const { hash, pathname } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // Small delay to ensure DOM is rendered after route change
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else if (pathname !== '/') {
      window.scrollTo(0, 0)
    }
  }, [hash, pathname])
  return null
}

function LandingPage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <HowItWorks />
      <Comparison />
      <WhyKleo />
      <Testimonials />
      <LeadForm />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer />
        <ThemeToggle />
        <CookieBanner />
      </div>
    </BrowserRouter>
  )
}
