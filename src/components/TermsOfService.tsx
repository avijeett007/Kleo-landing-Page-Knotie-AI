import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY, PHONE_DISPLAY } from '../config'

export default function TermsOfService() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <Link to="/" className="text-sm text-kleo-orange hover:underline mb-8 inline-block">&larr; Back to Home</Link>

      <h1 className="text-4xl font-black text-white mb-2">Terms of Service</h1>
      <p className="text-sm text-slate-400 mb-10">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

      <div className="space-y-8 text-slate-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. About These Terms</h2>
          <p>These terms govern your use of kleo.services (&ldquo;the Website&rdquo;) and any services provided by {COMPANY.name} (Company No. {COMPANY.number}), registered at {COMPANY.address}, {COMPANY.country} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;Kleo&rdquo;).</p>
          <p className="mt-2">By using our Website or services, you agree to these terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. Our Services</h2>
          <p>We provide AI-powered business services including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>AI Receptionist setup and management</li>
            <li>OpenClaw deployment and configuration</li>
            <li>Other AI automation services as listed on the Website</li>
          </ul>
          <p className="mt-2">Service availability and pricing are subject to change. Specific service terms will be agreed before work begins.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. Contact and Communication</h2>
          <p>By submitting your details through our contact form, you consent to being contacted via WhatsApp and/or telephone at the number you provide. We will only contact you regarding the service you enquired about.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
          <p>All content on this Website, including text, graphics, logos, and the Kleo character, is owned by {COMPANY.name} and protected by UK intellectual property law. You may not reproduce or distribute our content without written permission.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. Limitation of Liability</h2>
          <p>Our services are provided &ldquo;as is&rdquo;. While we strive for reliability, we do not guarantee uninterrupted service. Our liability is limited to the fees paid for the specific service in question.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">6. Governing Law</h2>
          <p>These terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the English courts.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">7. Contact Us</h2>
          <p>For any questions about these terms, reach us at {PHONE_DISPLAY} or through the contact form on our Website.</p>
          <p className="mt-2">{COMPANY.name}<br />{COMPANY.address}<br />Company No. {COMPANY.number}</p>
        </section>
      </div>
    </div>
  )
}
