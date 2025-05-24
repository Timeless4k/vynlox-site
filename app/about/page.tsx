'use client';

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { BookOpen, Bot, ClipboardList, Gift, User, Clock, Lock, Calendar, Star, ArrowRight, CheckCircle, Target, Zap, Users, Award, Heart, Sparkles, GraduationCap, Rocket, MessageSquare, Phone, Linkedin, Settings, Mail, Badge, X, Headphones, TrendingUp, Shield } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function RetainerPage() {
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [showInfoPack, setShowInfoPack] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInfoPack(true)
    }, 10000) // Show after 10 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setShowEmailModal(false)
    setShowInfoPack(false)
    setEmail('')
  }

  const retainerFeatures = [
    {
      icon: <Calendar className="w-6 h-6 text-emerald-400" />,
      title: "Monthly Strategy Call",
      description: "60-minute session to review performance, plan expansions, and align AI strategy with business goals"
    },
    {
      icon: <Settings className="w-6 h-6 text-emerald-400" />,
      title: "Priority AI Agent Expansion / Updates",
      description: "Ongoing refinement and new agent development based on your evolving needs"
    },
    {
      icon: <Mail className="w-6 h-6 text-emerald-400" />,
      title: "24–48 Hour Email Support",
      description: "Quick responses to questions, troubleshooting, and optimization requests"
    },
    {
      icon: <Badge className="w-6 h-6 text-emerald-400" />,
      title: "Early Access to New Vynlox Tools/Services",
      description: "First access to new AI agents and internal automation tools before public release"
    }
  ]

  const comparisonData = [
    { feature: "Strategic Oversight", retainer: true, fullTime: true },
    { feature: "AI Agent Builds/Updates", retainer: true, fullTime: true },
    { feature: "Hiring Process", retainer: false, fullTime: "2–3 months" },
    { feature: "Commitment Required", retainer: "Month-to-month", fullTime: "Long-term contract" },
    { feature: "Team Management Needed", retainer: false, fullTime: true },
    { feature: "Tools & System Setup", retainer: "Included", fullTime: "Custom-built, slower" }
  ]

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />
      
      {/* Info Pack Popup */}
      {showInfoPack && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-900/95 to-teal-900/95 backdrop-blur-sm border border-emerald-500/30 rounded-2xl p-6 max-w-sm shadow-2xl"
        >
          <button
            onClick={() => setShowInfoPack(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 mb-3">
            <Gift className="w-6 h-6 text-emerald-400" />
            <h3 className="font-bold text-white">Want the Full Breakdown?</h3>
          </div>
          
          <p className="text-gray-300 text-sm mb-4">
            Get the onboarding deck, client examples, and a special retainer offer.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-emerald-500 focus:outline-none text-sm"
              required
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition text-sm"
            >
              Send Me the Retainer Info Pack
            </button>
          </form>
        </motion.div>
      )}

      <main className="max-w-4xl mx-auto py-8 px-2 sm:py-12 sm:px-4">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white font-display tracking-tight leading-tight">
                Your Fractional <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">AI Officer</span> — On Call, Every Month
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We work with founders and small teams who want strategic AI support, ongoing agent refinement, and long-term optimization — without the cost or risk of hiring full-time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <motion.a
                  href="#apply"
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
                    Apply for Retainer Access
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 opacity-50 blur-xl animate-pulse" />
                </motion.a>
                
                <button
                  onClick={() => setShowEmailModal(true)}
                  className="inline-flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-lg font-medium"
                >
                  Not sure yet? → Request the Retainer Info Pack
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 font-medium">Systems in Motion</span>
                </div>
                
                <div className="space-y-4">
                  <motion.div 
                    className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 text-sm font-medium">Monthly Strategy Call</span>
                    </div>
                    <p className="text-gray-300 text-sm">Next session: March 15th, 2:00 PM</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-3"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-teal-400" />
                      <span className="text-teal-400 text-sm font-medium">Agent Updates</span>
                    </div>
                    <p className="text-gray-300 text-sm">3 optimizations deployed this week</p>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 text-sm font-medium">Performance Analytics</span>
                    </div>
                    <p className="text-gray-300 text-sm">Lead conversion up 34% this month</p>
                  </motion.div>
                </div>
                
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <User className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-xs text-gray-400">Gurudeep is online</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Here's What Your Monthly Partnership Includes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {retainerFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-300 italic">
              <strong>Note:</strong> You'll always get first access to new AI agents and internal automation tools before public release.
            </p>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Why Our Clients Choose the Retainer Over Hiring Full-Time</h2>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-emerald-900/20 to-teal-900/20 border-b border-gray-700">
                  <tr>
                    <th className="text-left p-4 text-white font-semibold">Feature</th>
                    <th className="text-center p-4 text-emerald-400 font-semibold">Vynlox Retainer ($749/mo)</th>
                    <th className="text-center p-4 text-gray-400 font-semibold">Full-Time AI Lead ($15K+/mo)</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={row.feature} className={`border-b border-gray-700/50 ${index % 2 === 0 ? 'bg-gray-900/20' : ''}`}>
                      <td className="p-4 text-gray-300 font-medium">{row.feature}</td>
                      <td className="p-4 text-center">
                        {typeof row.retainer === 'boolean' ? (
                          row.retainer ? (
                            <CheckCircle className="w-5 h-5 text-emerald-400 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-emerald-400 font-medium">{row.retainer}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.fullTime === 'boolean' ? (
                          row.fullTime ? (
                            <CheckCircle className="w-5 h-5 text-gray-400 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-red-400 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-400">{row.fullTime}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-300 text-lg">
              We act as your <strong className="text-emerald-400">AI CTO</strong> — without the overhead. Scale your systems confidently, month after month.
            </p>
          </div>
        </section>

        {/* Founder Trust Section */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Who You're Working With — and Why It Matters</h2>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-emerald-500 flex-shrink-0">
                <Image
                  src="/images/guru.svg"
                  alt="Gurudeep Dhinjan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  I started Vynlox while building AI agents for my own startup. Not to follow trends — but to make AI genuinely useful and scalable for small teams. As a Computer Science Honours student and hands-on builder, I use these exact tools every day — and now you can too.
                </p>
                <div className="flex items-center gap-3 justify-center sm:justify-start">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Your dedicated AI partner, not just another vendor.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application CTA Section */}
        <section id="apply" className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Apply for Access — Limited Monthly Spots</h2>
            <p className="text-xl text-gray-300 mb-8">
              We only take on a few clients per month to ensure personal support and hands-on delivery. If approved, your kickoff call will be booked within 72 hours.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-emerald-400">$749</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center justify-between">
                    <span>Monthly strategy call</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Priority agent updates</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>24-48h email support</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Early access to new tools</span>
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>

              <motion.a
                href="/apply-retainer"
                whileHover={{ scale: 1.05 }}
                className="block w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center py-4 rounded-lg font-bold text-lg mb-4"
              >
                Apply for Retainer Now
              </motion.a>
              
              <p className="text-sm text-gray-400">
                Month-to-month commitment. Cancel anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Final Benefits */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white">Why Founders Choose Our Retainer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Scale Without Hiring</h3>
              <p className="text-gray-400 text-sm">Get expert AI strategy and implementation without the overhead of a full-time hire.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Always Supported</h3>
              <p className="text-gray-400 text-sm">Quick responses to questions and ongoing optimization of your AI systems.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Continuous Growth</h3>
              <p className="text-gray-400 text-sm">Monthly strategy sessions to evolve your automation as your business grows.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-4">Get Your Retainer Info Pack</h3>
            <p className="text-gray-400 mb-6">Get the full breakdown, onboarding deck, and a special client offer.</p>
            
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
                  Send Info Pack
                </button>
              </div>
            </form>
            
            <p className="text-xs text-gray-400 mt-3 text-center">
              Thanks! Your private PDF + invite link are on the way.
            </p>
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
      `}</style>
    </div>
  )
}