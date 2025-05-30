'use client';

import { motion } from "framer-motion"
import Footer from "@/components/Footer"

export default function TermsOfServicePage() {
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
            VYNLOX TERMS OF SERVICE
          </h1>
          <p className="text-gray-400 mb-12">Effective Date: May 30, 2025</p>

          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-8">
              Welcome to Vynlox. These Terms of Service ("Terms") govern your use of [https://www.vynlox.com] and any services, automation systems, or digital assets provided by Vynlox ("we", "our", or "us").
            </p>
            <p className="text-gray-300 mb-12">
              By using our site or services, you agree to these Terms. If you do not agree, please do not use our services.
            </p>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Jump to Section</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
                  <a
                    key={num}
                    href={`#section-${num}`}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    {num}. {getSectionTitle(num)}
                  </a>
                ))}
              </div>
            </div>

            <section id="section-1" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">1. Services We Offer</h2>
              <p className="text-gray-300 mb-4">We provide:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Free AI Workshop (live or on-demand)</li>
                <li>AI Strategy Audit: Custom strategy session + PDF blueprint</li>
                <li>Agent Implementation: Done-for-you automation builds</li>
                <li>Fractional AI Officer Retainer: Monthly support and strategy for your automation systems</li>
              </ul>
            </section>

            <section id="section-2" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">2. User Responsibilities</h2>
              <p className="text-gray-300 mb-4">You agree to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Provide accurate information</li>
                <li>Use services for legal business purposes only</li>
                <li>Not resell or repurpose any materials without permission</li>
              </ul>
            </section>

            <section id="section-3" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">3. Payments</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>All fees are payable in advance via secure checkout</li>
                <li>We do not store card data — payments handled via Stripe, PayPal, or similar</li>
              </ul>
            </section>

            <section id="section-4" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">4. Refund Policy</h2>
              <p className="text-gray-300 mb-4">
                Due to the strategic nature of our work, all purchases are final once delivery has begun or services rendered.
              </p>
              <p className="text-gray-300">
                If there's a concern about incomplete work, contact{" "}
                <a href="mailto:support@vynlox.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  support@vynlox.com
                </a>{" "}
                within 5 days of delivery.
              </p>
            </section>

            <section id="section-5" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">5. Delivery Terms</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Audits: Delivered within 5 business days after your session</li>
                <li>Implementation: Scoped per proposal; timelines defined upfront</li>
                <li>Includes documentation, videos, or access as needed</li>
              </ul>
            </section>

            <section id="section-6" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">6. Retainer Scope & Usage</h2>
              <p className="text-gray-300 mb-4">Our $749/month retainer includes:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>One strategy call per month (on request)</li>
                <li>Unlimited email support for system updates, questions, and new ideas</li>
                <li>Reasonable task volume based on clarity, urgency, and system fit</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Requests exceeding fair usage may be scoped as a separate project.
              </p>
            </section>

            <section id="section-7" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">7. AI Usage Disclaimer</h2>
              <p className="text-gray-300 mb-4">
                Our automations and AI agents assist workflows — they don't replace judgment. Vynlox is not liable for actions taken solely based on automated outputs.
              </p>
              <p className="text-gray-300 mb-4">Clients are responsible for:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Reviewing content before sending</li>
                <li>Ensuring compliance with internal policies</li>
              </ul>
            </section>

            <section id="section-8" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">8. Cookie Policy & Tracking</h2>
              <p className="text-gray-300 mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Analyze site traffic and user behavior (via Google Analytics)</li>
                <li>Improve performance and usability</li>
                <li>Personalize content where applicable</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">What Cookies We Use:</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Essential cookies (site loading, form tracking)</li>
                <li>Analytics cookies (page views, clicks, traffic sources)</li>
              </ul>

              <h3 className="text-xl font-semibold text-purple-300 mt-6 mb-3">Your Choices:</h3>
              <p className="text-gray-300 mb-4">
                You can manage cookie preferences via your browser settings.
                If you're in the EEA, UK, or California, we display a cookie banner to let you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Accept or reject optional cookies</li>
                <li>View a full list of technologies used</li>
              </ul>
              <p className="text-gray-300 mt-4">
                We honor these preferences across your session and update them based on regulatory requirements.
              </p>
            </section>

            <section id="section-9" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">9. Intellectual Property</h2>
              <p className="text-gray-300 mb-4">
                You own your business data and submitted assets. Vynlox retains IP rights over:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Any frameworks, agents, or reusable system logic we create</li>
                <li>The right to reuse anonymized systems to improve future builds</li>
              </ul>
            </section>

            <section id="section-10" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">10. No Guarantees</h2>
              <p className="text-gray-300">
                We can't guarantee specific outcomes (e.g. revenue or time saved). Our work is custom-built and optimized for your workflow, but performance depends on external factors.
              </p>
            </section>

            <section id="section-11" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">11. Termination</h2>
              <p className="text-gray-300 mb-4">
                You may cancel at any time with 7 days' notice before your next billing cycle.
              </p>
              <p className="text-gray-300 mb-4">We may suspend service if:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Terms are violated</li>
                <li>Abuse of scope or tools occurs</li>
              </ul>
            </section>

            <section id="section-12" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">12. Limitation of Liability</h2>
              <p className="text-gray-300 mb-4">We are not liable for:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Any claim exceeding fees paid in the last 60 days</li>
              </ul>
            </section>

            <section id="section-13" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">13. Force Majeure</h2>
              <p className="text-gray-300 mb-4">We are not liable for delays caused by:</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Illness</li>
                <li>Internet outages</li>
                <li>Third-party tool failure</li>
                <li>Events beyond reasonable control</li>
              </ul>
            </section>

            <section id="section-14" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">14. Pricing Changes</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>We reserve the right to update service pricing at any time.</li>
                <li>Changes won't affect existing invoices</li>
                <li>Retainer clients will be notified at least 14 days before any price increase</li>
                <li>You can cancel or adjust your plan before the new rate takes effect</li>
              </ul>
            </section>

            <section id="section-15" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">15. Governing Law</h2>
              <p className="text-gray-300">
                These Terms are governed by the laws of the United Kingdom. Disputes will be resolved in UK courts, unless otherwise agreed.
              </p>
            </section>

            <section id="section-16" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">16. Changes to These Terms</h2>
              <p className="text-gray-300">
                We may revise these Terms at any time. Changes will be posted on this page with an updated effective date.
              </p>
            </section>

            <section id="section-17" className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">17. Contact</h2>
              <p className="text-gray-300">
                For questions or support, email:{" "}
                <a href="mailto:support@vynlox.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  📩 support@vynlox.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

function getSectionTitle(sectionNumber: number): string {
  const titles: { [key: number]: string } = {
    1: "Services We Offer",
    2: "User Responsibilities",
    3: "Payments",
    4: "Refund Policy",
    5: "Delivery Terms",
    6: "Retainer Scope & Usage",
    7: "AI Usage Disclaimer",
    8: "Cookie Policy & Tracking",
    9: "Intellectual Property",
    10: "No Guarantees",
    11: "Termination",
    12: "Limitation of Liability",
    13: "Force Majeure",
    14: "Pricing Changes",
    15: "Governing Law",
    16: "Changes to These Terms",
    17: "Contact"
  }
  return titles[sectionNumber] || ""
} 