'use client';

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { motion } from 'framer-motion'
import { BookOpen, Bot, ClipboardList, Gift, User, Clock, Lock, Calendar, Star, ArrowRight, CheckCircle, Target, Zap, Users, Phone, FileText, Map, Settings, Video, Mail, HeadphonesIcon, Shield, MessageSquare, UserCheck, Send, PlayCircle, BarChart3, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function SolutionsPage() {
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [showAgentDemo, setShowAgentDemo] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState('')
  const [email, setEmail] = useState('')
  const [showPersistentBanner, setShowPersistentBanner] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setShowPersistentBanner(scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setShowEmailModal(false)
    setEmail('')
  }

  const handleDemoAccess = (agentName: string) => {
    setSelectedAgent(agentName)
    setShowAgentDemo(true)
  }

  const agentSolutions = [
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-400" />,
      name: "Lead Capture Agent",
      description: "Responds instantly to new form submissions, qualifies leads, and books meetings — even while you sleep.",
      ctaText: "Try Demo",
      ctaType: "demo",
      color: "purple"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8 text-blue-400" />,
      name: "Client Service Agent", 
      description: "Answers FAQs, links resources, and responds to client questions in real-time — across chat or email.",
      ctaText: "Chat With Agent",
      ctaType: "demo",
      color: "blue"
    },
    {
      icon: <Send className="w-8 h-8 text-emerald-400" />,
      name: "Internal Email Agent",
      description: "Composes outreach, replies, and follow-ups automatically — based on your tone and internal priorities.",
      ctaText: "Book an Audit",
      ctaType: "audit",
      color: "emerald"
    },
    {
      icon: <UserCheck className="w-8 h-8 text-teal-400" />,
      name: "Onboarding Agent",
      description: "Delivers onboarding documents, intro videos, and next steps via automated flows for every new client.",
      ctaText: "Try Now",
      ctaType: "demo",
      color: "teal"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      name: "Report Generator Agent",
      description: "Converts form responses and internal metrics into weekly reports — auto-delivered to your inbox.",
      ctaText: "Learn More",
      ctaType: "workshop",
      color: "indigo"
    },
    {
      icon: <Bot className="w-8 h-8 text-fuchsia-400" />,
      name: "Custom Workflow Agent",
      description: "Tailored automation for your unique business processes — from data entry to client communications.",
      ctaText: "Book an Audit",
      ctaType: "audit",
      color: "fuchsia"
    }
  ]

  const getCtaButton = (solution: any) => {
    const baseClasses = "w-full py-3 rounded-lg font-semibold transition-all duration-300"
    
    if (solution.ctaType === 'demo') {
      return (
        <button
          onClick={() => handleDemoAccess(solution.name)}
          className={`${baseClasses} bg-${solution.color}-500/20 text-${solution.color}-400 border border-${solution.color}-500/30 hover:bg-${solution.color}-500/30`}
        >
          {solution.ctaText}
        </button>
      )
    } else if (solution.ctaType === 'audit') {
      return (
        <a
          href="#audit"
          className={`${baseClasses} bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-90 block text-center`}
        >
          {solution.ctaText}
        </a>
      )
    } else {
      return (
        <a
          href="/workshop"
          className={`${baseClasses} bg-${solution.color}-500/20 text-${solution.color}-400 border border-${solution.color}-500/30 hover:bg-${solution.color}-500/30 block text-center`}
        >
          {solution.ctaText}
        </a>
      )
    }
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />
      
      {/* Persistent Email Banner */}
      {showPersistentBanner && (
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-emerald-900/95 to-teal-900/95 backdrop-blur-sm border-b border-emerald-500/30 p-3"
        >
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-emerald-400" />
              <span className="text-white font-medium">Unlock a $499 Audit Session — Normally $749</span>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowEmailModal(true)}
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-400 transition text-sm"
              >
                Get Discount Code
              </button>
              <button
                onClick={() => setShowPersistentBanner(false)}
                className="text-gray-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <main className={`max-w-4xl mx-auto py-8 px-2 sm:py-12 sm:px-4 ${showPersistentBanner ? 'pt-20' : ''}`}>
        {/* Intro Section */}
        <section className="mb-12 sm:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white font-display tracking-tight leading-tight">
              Custom AI Agents, Built from <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Strategy — Not Guesswork</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              At Vynlox, every solution starts with your audit. But here's a glimpse of what we often build — all crafted from real client goals and system needs.
            </p>
            
            <p className="text-lg text-gray-400 mb-8 italic">
              If your workflow can be repeated, routed, or responded to — we can likely automate it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#audit"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 group"
              >
                Start with an Audit
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              
              <button
                onClick={() => setShowEmailModal(true)}
                className="inline-flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-lg font-medium"
              >
                Get $250 Off First →
              </button>
            </div>
          </motion.div>
        </section>

        {/* Agent Solution Cards Grid */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">AI Agents We Build for Clients</h2>
            <p className="text-gray-400 text-lg">Each one starts with understanding your specific workflows and goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentSolutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-${solution.color}-500/10 rounded-lg flex items-center justify-center group-hover:bg-${solution.color}-500/20 transition-colors duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{solution.name}</h3>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                {getCtaButton(solution)}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Agent in Action Case Story */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">What a Real AI Agent Can Do in the Wild</h2>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 border border-purple-500/30 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="lg:w-1/3">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 mx-auto mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-fuchsia-400 flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Jessica R.</h3>
                  <p className="text-purple-300">Branding Studio Owner</p>
                </div>
              </div>
              
              <div className="lg:w-2/3">
                <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-400" />
                    The Challenge
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Jessica runs a two-person branding studio. She was spending 2 hours/day replying to leads, handling onboarding, and sending follow-ups.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-emerald-400" />
                    The Solution
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    After her Vynlox audit, we built her a Lead Agent + Onboarding Flow. Now, new clients book themselves, get welcome kits, and receive timed reminders — all without a single manual message.
                  </p>
                </div>
                
                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400" />
                    The Result
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">2 hours</div>
                      <div className="text-sm text-gray-400">saved daily</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">100%</div>
                      <div className="text-sm text-gray-400">automated onboarding</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <motion.a
                href="#audit"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 group"
              >
                Start with an Audit
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
            </div>
          </div>
        </section>

        {/* Global Email Capture Strip */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold mb-3 text-white flex items-center justify-center gap-2">
              <Gift className="w-6 h-6 text-emerald-400" />
              Unlock a $499 Audit Session — Normally $749
            </h2>
            <p className="text-gray-300 mb-6">Limited monthly codes available.</p>
            
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
                Send My Discount Code
              </button>
            </form>
            
            <p className="text-xs text-gray-400">
              We'll email you a private link and info pack. No spam. Just strategy.
            </p>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section id="audit" className="py-8 sm:py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Ready to Build or Learn More First?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-colors duration-300">
              <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4 text-white">Learn Before You Build</h3>
              <a
                href="/workshop"
                className="block w-full bg-purple-500/20 text-purple-400 border border-purple-500/30 py-3 rounded-lg font-semibold hover:bg-purple-500/30 transition"
              >
                Join the Free Workshop
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-xl p-6 text-center">
              <Zap className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-4 text-white">Start Planning Now</h3>
              <button 
                onClick={() => setShowEmailModal(true)}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Book Your Audit – $499 with Code
              </button>
            </div>
          </div>
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

      {/* Agent Demo Modal */}
      {showAgentDemo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-4">Demo Access Required</h3>
            <p className="text-gray-400 mb-6">
              To try the <strong className="text-white">{selectedAgent}</strong> demo, please provide your email. We'll send you instant access.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email for demo access"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                required
              />
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowAgentDemo(false)}
                  className="flex-1 bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Access Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        .animate-pulse {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}