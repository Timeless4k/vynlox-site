'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      
      <main className="relative">
        {/* Global background pattern */}
        <div className="fixed inset-0 bg-pattern opacity-5 pointer-events-none z-0" />
        
        {/* Subtle gradient overlay at the top */}
        <div className="absolute top-0 inset-x-0 h-[70vh] bg-gradient-to-b from-purple-950/20 to-transparent pointer-events-none z-0" />

        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-44 md:pb-32 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                Live Webinar • 90 Minutes
              </span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white font-display tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Learn How to Use AI to Save Time, Get Leads, and <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Simplify Your Business</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join our 90-minute live webinar built for service business owners who want to automate their business without hiring developers or learning code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#pricing"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40"
              >
                Reserve Your Spot — $29 Early Bird
              </a>
            </motion.div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-900/50 backdrop-blur-sm rounded-3xl my-16">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-800/50 p-8 rounded-xl border border-purple-900/20"
            >
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Discover what AI can actually do for you</h3>
              <p className="text-zinc-300">
                Get real examples of how businesses like yours are saving time and closing more deals using simple AI tools.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-zinc-800/50 p-8 rounded-xl border border-purple-900/20"
            >
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Build your own AI assistant (live demo)</h3>
              <p className="text-zinc-300">
                Follow along as we walk through how to set up a basic chatbot or automation that answers FAQs, books meetings, or handles leads — all without code.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-800/50 p-8 rounded-xl border border-purple-900/20"
            >
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Walk away with a personalized action plan</h3>
              <p className="text-zinc-300">
                You'll leave knowing exactly what to automate next in your business — and how to do it step by step.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">🎁 You'll also get these bonus tools:</h2>
              <ul className="space-y-4">
                <li className="flex items-center text-zinc-300">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Notion SOP Template for automations
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-indigo-400 mr-2">✓</span>
                  AI Prompt Cheatsheet
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-indigo-400 mr-2">✓</span>
                  $50 credit toward our full AI Audit
                </li>
              </ul>
              <a
                href="#pricing"
                className="inline-block mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40"
              >
                Register Now — Spots Limited
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-xl overflow-hidden border border-purple-900/20"
            >
              <Image
                src="/images/bonus-tools.svg"
                alt="Bonus tools preview"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-zinc-900/50 backdrop-blur-sm rounded-3xl my-16">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Join the Live Webinar</h3>
              <p className="text-zinc-300">90-minute Zoom session, interactive and hands-on</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Learn by Doing</h3>
              <p className="text-zinc-300">We'll walk through real tools you can use today</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-4 text-white">Apply or Get Help</h3>
              <p className="text-zinc-300">Walk away with a plan, or apply it with our help (AI Audit)</p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Choose Your Access</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-800/50 p-8 rounded-xl border border-purple-900/20"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">🎟️ Early Bird</h3>
              <p className="text-3xl font-bold mb-4 text-white">$29</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-zinc-300">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Live webinar access
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Replay access
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Templates
                </li>
              </ul>
              <a
                href="#"
                className="block text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40"
              >
                Reserve My Spot
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-zinc-800/50 p-8 rounded-xl border-2 border-indigo-500"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">🔓 General</h3>
              <p className="text-3xl font-bold mb-4 text-white">$49</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-zinc-300">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Everything in Early Bird
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Q&A priority
                </li>
              </ul>
              <a
                href="#"
                className="block text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40"
              >
                Reserve My Spot
              </a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-800/50 p-8 rounded-xl border border-purple-900/20"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">💼 VIP</h3>
              <p className="text-3xl font-bold mb-4 text-white">$99</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-zinc-300">
                  <span className="text-indigo-400 mr-2">✓</span>
                  Everything in General
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-indigo-400 mr-2">✓</span>
                  15-min consult
                </li>
                <li className="flex items-center text-zinc-300">
                  <span className="text-indigo-400 mr-2">✓</span>
                  $50 audit credit
                </li>
              </ul>
              <a
                href="#"
                className="block text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40"
              >
                Reserve My Spot
              </a>
            </motion.div>
          </div>
          <p className="text-center text-zinc-400 mt-8">Limited spots per session. Replay included.</p>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-800/50 p-6 rounded-xl border border-purple-900/20"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Do I need to know tech or AI?</h3>
              <p className="text-zinc-300">Nope! This session is made for busy business owners with no tech background. We keep it simple and practical.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-zinc-800/50 p-6 rounded-xl border border-purple-900/20"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Will I get a recording?</h3>
              <p className="text-zinc-300">Yes! Everyone who signs up gets replay access.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-800/50 p-6 rounded-xl border border-purple-900/20"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">Can I book a private team training instead?</h3>
              <p className="text-zinc-300">Yes — contact us for corporate bookings.</p>
            </motion.div>
          </div>
        </section>

        {/* Speaker Bio Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-800/50 p-8 rounded-xl border border-purple-900/20"
          >
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-500">
                <Image
                  src="/images/guru.svg"
                  alt="Guru Singh"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">About the Host — Guru Singh</h3>
                <p className="text-zinc-300">
                  Founder of Vynlox, Guru helps businesses grow faster using done-for-you AI systems. She specializes in turning complex tools into simple, powerful solutions for everyday service businesses.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Footer */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-indigo-900 to-purple-900 rounded-3xl my-16 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-300 rounded-full mix-blend-overlay filter blur-3xl" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center relative z-10"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">🚀 Ready to Work Smarter?</h2>
            <p className="text-xl text-zinc-300 mb-8">
              Join the next Vynlox AI Webinar and learn how to automate your business in just 90 minutes.
            </p>
            <a
              href="#pricing"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40"
            >
              Register Now for $29 Early Bird
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />

      {/* Add a custom style block for global patterns and animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        .animate-pulse {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .bg-pattern {
          background-image: radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </div>
  )
} 