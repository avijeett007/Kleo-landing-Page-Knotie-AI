import { COMPANY, PHONE_DISPLAY } from '../config'

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32">
      <a href="/" className="text-sm text-kleo-orange hover:underline mb-8 inline-block">&larr; Back to Home</a>

      <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
      <p className="text-sm text-slate-400 mb-10">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

      <div className="prose-custom space-y-8 text-slate-300 text-sm leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-white mb-3">1. Who We Are</h2>
          <p>{COMPANY.name} (Company No. {COMPANY.number}), registered at {COMPANY.address}, {COMPANY.country}. We operate the website kleo.services (&ldquo;the Service&rdquo;).</p>
          <p className="mt-2">For data protection enquiries, contact us at {PHONE_DISPLAY} or via the contact form on our website.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">2. What Data We Collect</h2>
          <p>When you use our contact form, we collect:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Your name</li>
            <li>Email address</li>
            <li>WhatsApp phone number</li>
            <li>Selected service preference</li>
          </ul>
          <p className="mt-2">We also automatically collect basic analytics data (page views, device type) through standard web server logs. We do not use third-party tracking cookies.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Data</h2>
          <p>We use your personal data to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Contact you via WhatsApp or phone to discuss the service you requested</li>
            <li>Set up and deliver the AI service you selected</li>
            <li>Send service-related communications</li>
          </ul>
          <p className="mt-2"><strong className="text-white">Legal basis:</strong> Legitimate interest (responding to your enquiry) and contract performance (delivering the service you requested).</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">4. Data Sharing</h2>
          <p>We do not sell your data. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>WhatsApp (Meta) — to contact you as requested</li>
            <li>Our hosting provider — for website operation</li>
            <li>N8N / automation platforms — for workflow processing</li>
          </ul>
          <p className="mt-2">All processors are bound by data processing agreements and GDPR obligations.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
          <p>We retain your contact data for as long as necessary to provide our services, and for up to 24 months after your last interaction. You can request deletion at any time.</p>
        </section>

        <section id="gdpr">
          <h2 className="text-xl font-bold text-white mb-3">6. Your Rights (GDPR)</h2>
          <p>Under the UK GDPR and Data Protection Act 2018, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li><strong className="text-white">Access</strong> — request a copy of your personal data</li>
            <li><strong className="text-white">Rectification</strong> — correct inaccurate data</li>
            <li><strong className="text-white">Erasure</strong> — request deletion of your data (&ldquo;right to be forgotten&rdquo;)</li>
            <li><strong className="text-white">Restrict processing</strong> — limit how we use your data</li>
            <li><strong className="text-white">Data portability</strong> — receive your data in a portable format</li>
            <li><strong className="text-white">Object</strong> — object to processing based on legitimate interest</li>
            <li><strong className="text-white">Withdraw consent</strong> — where processing is based on consent</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, contact us at {PHONE_DISPLAY} or via the contact form. We will respond within 30 days.</p>
          <p className="mt-2">You also have the right to lodge a complaint with the Information Commissioner&rsquo;s Office (ICO) at <span className="text-kleo-orange">ico.org.uk</span>.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">7. Cookies</h2>
          <p>We use only essential cookies required for the website to function (e.g., theme preference). We do not use advertising or tracking cookies. No consent is required for essential cookies under UK GDPR.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-white mb-3">8. Changes</h2>
          <p>We may update this policy from time to time. Changes will be posted on this page with an updated date.</p>
        </section>
      </div>
    </div>
  )
}
