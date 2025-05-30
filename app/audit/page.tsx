'use client';

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { BookOpen, Bot, ClipboardList, Gift, User, Clock, Lock, Calendar, Star, ArrowRight, CheckCircle, Target, Zap, Users, Phone, FileText, Map, Settings, Video, Mail, HeadphonesIcon, Shield } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function AuditPage() {
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission logic here
    console.log('Email submitted:', email)
    setShowEmailModal(false)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto py-8 px-2 sm:py-12 sm:px-4">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white font-display tracking-tight leading-tight">
                Build Smarter: Get Your Custom <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">AI Agent Roadmap</span> in Just 5 Days
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We'll audit your operations, identify your biggest automation wins, and deliver a practical AI Blueprint — built for your business, not generic advice.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <motion.a
                  href="#book-now"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      '0 0 0 rgba(16, 185, 129, 0)',
                      '0 0 30px 4px rgba(16, 185, 129, 0.5)',
                      '0 0 0 rgba(16, 185, 129, 0)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                  className="relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Your Audit – $749
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 opacity-50 blur-xl animate-pulse" />
                </motion.a>
                
                <button
                  onClick={() => setShowEmailModal(true)}
                  className="inline-flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-lg font-medium"
                >
                  Not ready? → Get $250 Off With Early Access
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 font-medium">Your Custom AI Blueprint</span>
                </div>
                
                <div className="space-y-4">
                  <motion.div 
                    className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 text-sm font-medium">Strategy Call</span>
                    </div>
                    <p className="text-gray-300 text-sm">60-90 min deep dive into your business</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-3"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-teal-400" />
                      <span className="text-teal-400 text-sm font-medium">Custom Blueprint</span>
                    </div>
                    <p className="text-gray-300 text-sm">Tailored AI roadmap & implementation plan</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Video className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 text-sm font-medium">Video Walkthrough</span>
                    </div>
                    <p className="text-gray-300 text-sm">Step-by-step implementation guide</p>
                  </motion.div>
                </div>
                
                <div className="mt-4 text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Clock className="w-3 h-3 mr-1" />
                    Delivered in 5 Business Days
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Capture Banner */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold mb-3 text-white flex items-center justify-center gap-2">
              <Gift className="w-6 h-6 text-emerald-400" />
              Get the $499 Early Access Offer — Limited Monthly Codes
            </h2>
            <p className="text-gray-300 mb-6">Submit your email to receive a private booking link with a $250 discount. No pressure. No spam.</p>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
                required
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition whitespace-nowrap"
              >
                Send Me the $499 Code
              </button>
            </form>
            
            <p className="text-xs text-gray-400">
              Limited to 30 clients/month. Code valid for 30 days. Use it when you're ready.
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">What's Included In Your AI Strategy Audit</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">60–90 min Strategy Call</h3>
              </div>
              <p className="text-gray-400">Zoom or recorded deep dive into your business processes</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Custom AI Agent Blueprint</h3>
              </div>
              <p className="text-gray-400">Detailed PDF roadmap tailored to your business</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Map className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Workflow Process Map</h3>
              </div>
              <p className="text-gray-400">Visual breakdown of your current and optimized processes</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">AI Automation Tool Recommendations</h3>
              </div>
              <p className="text-gray-400">AI automation tool recommendations for your needs</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">5 Business Day Delivery</h3>
              </div>
              <p className="text-gray-400">Fast turnaround with comprehensive analysis</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <Video className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Loom Video Walkthrough</h3>
              </div>
              <p className="text-gray-400">Personal explanation of your custom blueprint</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 md:col-span-2">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                  <HeadphonesIcon className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">Email Support for 5 Days Post-Audit</h3>
              </div>
              <p className="text-gray-400">Get your questions answered as you review and implement</p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-300 text-lg">
              This is a done-for-you roadmap tailored to your systems, tasks, and goals — not another generic template.
            </p>
          </div>
        </section>

        {/* Who It's For */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Is This Audit Right For You?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">Coaches who repeat manual tasks daily</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">Small agencies needing automated onboarding</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">Freelancers looking to scale without hiring</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300">Founders who want clarity, not complexity</span>
              </div>
            </div>
            <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-5 h-5 text-emerald-400" />
                <h3 className="font-semibold text-white">Perfect Fit Check</h3>
              </div>
              <p className="text-gray-300">
                If your business sends emails, captures leads, fills out forms, or uses repeated processes — this audit will change how you operate.
              </p>
            </div>
          </div>
        </section>

        {/* Why It Works - Founder Use Case */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">We Use This Audit System Ourselves</h2>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-2/3">
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  This very page — the chatbot, the quiz, the onboarding flow — is powered by the same strategy process we offer. We aren't teaching theory. We're packaging the exact systems that run Vynlox into a blueprint that works for your business too.
                </p>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Real systems. Real results. No theory.</span>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/20 rounded-xl p-4">
                  <div className="space-y-3 text-sm">
                    <div className="bg-emerald-500/10 rounded-lg p-2">
                      <span className="text-emerald-400">✓ This website's automation</span>
                    </div>
                    <div className="bg-emerald-500/10 rounded-lg p-2">
                      <span className="text-emerald-400">✓ Our lead qualification</span>
                    </div>
                    <div className="bg-emerald-500/10 rounded-lg p-2">
                      <span className="text-emerald-400">✓ Our client onboarding</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Price Breakdown */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Normally $749 — Yours for $499 With Early Access Code</h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 p-4 border-b border-gray-700">
                <h3 className="text-xl font-bold text-white text-center">Choose Your Plan</h3>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/30 border border-gray-600 rounded-xl p-6 text-center">
                    <h4 className="text-lg font-semibold text-white mb-2">Public Price</h4>
                    <div className="text-3xl font-bold text-white mb-4">$749</div>
                    <p className="text-gray-400 mb-6">Full Audit Plan + 1:1 Call</p>
                    <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition">
                      Book Now for $749
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border-2 border-emerald-500 rounded-xl p-6 text-center relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold">BEST VALUE</span>
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Early Access</h4>
                    <div className="text-3xl font-bold text-emerald-400 mb-1">$499</div>
                    <div className="text-sm text-gray-400 line-through mb-3">$749</div>
                    <p className="text-gray-400 mb-6">Same Offer, Limited Time Only</p>
                    <button 
                      onClick={() => setShowEmailModal(true)}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                    >
                      Get the $499 Code →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">You Might Be Wondering...</h2>
          </div>
          
          <div className="space-y-4">
            <details className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 group">
              <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                Do I need to be technical?
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-400 mt-4">Nope. We explain everything clearly and simply. Our goal is to make AI accessible to non-technical business owners.</p>
            </details>
            
            <details className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 group">
              <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                What happens after the audit?
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-400 mt-4">You can build it yourself using our roadmap, or hire us to implement it for you. We provide both the blueprint and implementation services.</p>
            </details>
            
            <details className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 group">
              <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                Can I apply the fee to future work?
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-400 mt-4">Yes — we credit 100% of your audit fee toward future builds. Think of it as a paid consultation that goes toward your implementation.</p>
            </details>
            
            <details className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 group">
              <summary className="font-semibold cursor-pointer text-white flex items-center justify-between">
                How fast is delivery?
                <ArrowRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="text-gray-400 mt-4">You'll receive your full audit within 5 business days of the call. We include everything: blueprint, video walkthrough, and email support.</p>
            </details>
          </div>
        </section>

        {/* Final CTA Block */}
        <section className="py-8 sm:py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Ready to Build Smarter?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-emerald-500/50 transition-colors duration-300">
              <Zap className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4 text-white">Ready Now?</h3>
              <motion.a
                href="#book-now"
                whileHover={{ scale: 1.05 }}
                className="block w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Book Full Audit – $749
              </motion.a>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-xl p-6 text-center">
              <Mail className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4 text-white">Need Time?</h3>
              <button 
                onClick={() => setShowEmailModal(true)}
                className="w-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 py-3 rounded-lg font-semibold hover:bg-emerald-500/30 transition"
              >
                Get $499 Code via Email
              </button>
            </div>
          </div>
          
          <p className="text-center text-gray-400 mt-6">
            Once you get the code, you can use it anytime in the next 30 days. No pressure, no expiry surprises.
          </p>
        </section>
      </main>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-4">Get Your $499 Early Access Code</h3>
            <p className="text-gray-400 mb-6">Enter your email to receive a private booking link with a $250 discount.</p>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
                required
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowEmailModal(false)}
                  className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Send Code
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        .animate-pulse {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        details[open] summary {
          margin-bottom: 0;
        }

        details summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </div>
  )
}