import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import WhyKleo from './components/WhyKleo'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-kleo-darker">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <HowItWorks />
      <WhyKleo />
      <LeadForm />
      <Footer />
    </div>
  )
}
