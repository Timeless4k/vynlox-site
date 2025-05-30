'use client';

import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-8">
            VYNLOX PRIVACY POLICY
          </h1>
          <p className="text-gray-400 mb-12">Effective Date: May 30, 2025</p>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-8">
              Vynlox ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your information when you interact with our website [https://www.vynlox.com] (the "Site"), services, and automations.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">1. Information We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">a. Information You Provide</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Name, email, business info (via forms or bookings)</li>
                    <li>Messages via chat, Tally forms, or email</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">b. Automatically Collected Data</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Page views, click events, device/browser info</li>
                    <li>Location (approximate), IP address</li>
                    <li>Interactions with forms or demos (via Google Analytics)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-purple-300 mb-3">c. AI Agent Interactions</h3>
                  <p className="text-gray-300">
                    If you use our chatbots or automated forms, inputs may be stored to improve recommendations and automations. No profiling or automated decision-making is performed.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">We use your data to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide and improve our services</li>
                <li>Send emails about workshops, audits, or updates</li>
                <li>Analyze usage to improve user experience</li>
                <li>Build custom no-code + AI automations for your business</li>
              </ul>
              <p className="text-gray-300 mt-4">
                We do not sell or share your personal information for advertising.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">3. Legal Basis for Processing (GDPR/UK GDPR)</h2>
              <p className="text-gray-300 mb-4">We process your data under the following legal bases:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Your consent (e.g., form submissions, email opt-ins)</li>
                <li>Legitimate interest (e.g., analytics, UX improvement)</li>
                <li>Contractual necessity (e.g., delivering paid services)</li>
                <li>Legal obligation (where applicable)</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">4. Tools We Use</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Google Analytics 4 — behavior tracking</li>
                <li>Tally — form submissions</li>
                <li>Airtable — lead and project management</li>
                <li>Make/Zapier — secure workflow automation</li>
                <li>Email — workshop/audit email sequences</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Opt-out of Analytics here:{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-purple-400 hover:text-purple-300 transition-colors">
                  https://tools.google.com/dlpage/gaoptout
                </a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">5. Cookies & Consent</h2>
              <p className="text-gray-300 mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Track usage patterns</li>
                <li>Improve page performance</li>
                <li>Enable personalization</li>
              </ul>
              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">Types of Cookies We Use:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><b>Essential cookies</b> (site loading, form tracking)</li>
                <li><b>Analytics cookies</b> (page views, clicks, traffic sources)</li>
                <li><b>Marketing cookies</b> (ad and retargeting, if used)</li>
                <li><b>Preference cookies</b> (remembering your settings)</li>
              </ul>
              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">Your Choices:</h3>
              <p className="text-gray-300 mb-4">
                You can manage your cookie preferences at any time using the <b>Cookie Settings</b> link in our website footer. If you're visiting from the EU, UK, or California, we display a cookie banner to let you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Accept all cookies</li>
                <li>Reject all non-essential cookies</li>
                <li>Customize your preferences for analytics, marketing, and preference cookies</li>
              </ul>
              <p className="text-gray-300 mt-4">
                We honor these preferences across your session and update them based on regulatory requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">6. Data Retention</h2>
              <p className="text-gray-300 mb-4">We retain your data only as long as needed to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide services</li>
                <li>Fulfill legal/accounting requirements</li>
                <li>Improve our internal systems</li>
              </ul>
              <p className="text-gray-300 mt-4">You can request deletion anytime.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">7. Your Rights</h2>
              <p className="text-gray-300 mb-4">Depending on your location, you may request to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Access, correct, or delete your data</li>
                <li>Withdraw consent at any time</li>
                <li>Object to certain processing activities</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To make a request, email:{" "}
                <a href="mailto:support@vynlox.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  support@vynlox.com
                </a>
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">8. Data Security</h2>
              <p className="text-gray-300 mb-4">We protect your information using:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>End-to-end encryption (where applicable)</li>
                <li>Secure form submissions</li>
                <li>Controlled access across our internal tools</li>
              </ul>
              <p className="text-gray-300 mt-4">
                However, no system is 100% secure. Please exercise caution with what you submit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">9. International Visitors</h2>
              <p className="text-gray-300">
                If you're located in the EEA, UK, or similar jurisdictions, your data is processed in accordance with GDPR standards and may be transferred to secure servers outside your region with appropriate safeguards.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">10. Updates to This Policy</h2>
              <p className="text-gray-300">
                We may update this policy from time to time. Changes will be posted on this page with a new effective date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">11. Contact</h2>
              <p className="text-gray-300">
                For questions about your data or this policy, contact:{" "}
                <a href="mailto:support@vynlox.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  📩 support@vynlox.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 