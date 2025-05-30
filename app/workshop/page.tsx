'use client';

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { BookOpen, Bot, ClipboardList, Gift, User, Clock, Lock, Calendar, Star, ArrowRight, CheckCircle, Target, Zap, Users } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function LearnPage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto py-8 px-2 sm:py-12 sm:px-4">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-500/10 text-red-400 border border-red-500/20 mb-6">
                <Clock className="w-4 h-4 mr-2" />
                Next session starts in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m — only 30 seats available
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white font-display tracking-tight leading-tight">
                Struggling to Get Leads or Save Time? Let an AI Agent <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Do the Work For You</span> — No Devs Needed.
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join our most popular free workshop where we show founders and service businesses exactly how to launch their first AI agent using real tools (not hype). Watch real demos. Get our system. Leave with clarity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <motion.a
                  href="#reserve"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      '0 0 0 rgba(168, 139, 250, 0)',
                      '0 0 30px 4px rgba(168, 139, 250, 0.5)',
                      '0 0 0 rgba(168, 139, 250, 0)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                  className="relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Reserve My Free Seat Now
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 opacity-50 blur-xl animate-pulse" />
                </motion.a>
                
                <a
                  href="#discovery"
                  className="inline-flex items-center justify-center text-purple-400 hover:text-purple-300 transition-colors duration-300 text-lg font-medium"
                >
                  Prefer a call? → Book a 15-Min Discovery Chat
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800/30 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">AI Agent Live Demo</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                    <Bot className="w-5 h-5 text-purple-400 mb-2" />
                    <p className="text-gray-300">"I just booked a qualified lead while you were sleeping..."</p>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-blue-400 mb-2" />
                    <p className="text-gray-300">Automated follow-up sent ✓</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                    <Calendar className="w-5 h-5 text-green-400 mb-2" />
                    <p className="text-gray-300">Meeting scheduled for tomorrow ✓</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>5,000+ automations powered</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>4.9/5 Workshop Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Offer Capture */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20 border border-purple-500/30 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold mb-3 text-white">Not Ready to Join Live? Grab $250 Off the Audit Instead.</h2>
            <p className="text-gray-300 mb-6">We'll send you a private link to book your AI Strategy Audit at $499 (normally $749). Use when you're ready.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition whitespace-nowrap">
                Send Me the $499 Code
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">Check your inbox! No spam — just a powerful strategy offer.</p>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">This Workshop Could Save You 10+ Hours a Week — Here's How.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-sm text-center group hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Find Hidden Automation Wins</h3>
              <p className="text-gray-400">Learn how to instantly identify tasks that AI agents can automate. No guessing.</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-sm text-center group hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">See Our Exact AI Automation Stack</h3>
              <p className="text-gray-400">We reveal the tools behind Vynlox's own agents. Copy our system.</p>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-sm text-center group hover:border-purple-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Bot className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">Watch Real AI Agents at Work</h3>
              <p className="text-gray-400">Live demos of chatbots, onboarding flows, and lead qualification — all built without code.</p>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white flex items-center justify-center gap-3">
              <Gift className="w-8 h-8 text-purple-400" />
              Show Up Live — Walk Away With These Free Tools
            </h2>
          </div>
          
          <div className="bg-gradient-to-r from-purple-900/10 to-fuchsia-900/10 border border-purple-500/20 rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">AI Audit Blueprint (PDF)</h3>
                <p className="text-gray-400 text-sm">Step-by-step implementation checklist</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Automation Cheatsheet</h3>
                <p className="text-gray-400 text-sm">20+ workflows to copy today</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h3 className="font-semibold text-white mb-2">Priority Retainer Access</h3>
                <p className="text-gray-400 text-sm">Early-bird entry before the public list opens</p>
              </div>
            </div>
            <p className="text-center text-purple-300 text-sm mt-6 italic">
              *These bonuses are exclusive to live attendees or replay viewers within 48 hours.*
            </p>
          </div>
        </section>

        {/* About the Host */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white flex items-center justify-center gap-3">
              <User className="w-8 h-8 text-purple-400" />
              Meet Gurudeep — Builder, Founder, and AI Systems Expert
            </h2>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 flex-shrink-0">
                <Image
                  src="/images/guru.svg"
                  alt="Gurudeep Singh"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  I'm Gurudeep, a Computer Science Honours student building Vynlox in public. This isn't theory. This is the same system I use to automate my business. If you want real AI that saves time and gets results — not just another app demo — you're in the right place.
                </p>
                <p className="text-purple-300 font-medium italic">
                  "Everything you'll learn powers this very website."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Countdown/Scarcity Block */}
        <section id="reserve" className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-6 sm:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Lock className="w-6 h-6 text-red-400" />
              <h2 className="text-2xl font-bold text-white">Reserve Your Spot — Only 30 Seats Per Session</h2>
            </div>
            
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="bg-gray-800 rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-xs text-gray-400">DAYS</div>
              </div>
              <div className="text-purple-400">:</div>
              <div className="bg-gray-800 rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-xs text-gray-400">HOURS</div>
              </div>
              <div className="text-purple-400">:</div>
              <div className="bg-gray-800 rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-xs text-gray-400">MINS</div>
              </div>
              <div className="text-purple-400">:</div>
              <div className="bg-gray-800 rounded-lg p-3 min-w-[60px]">
                <div className="text-2xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-xs text-gray-400">SECS</div>
              </div>
            </div>
            
            <p className="text-red-300 mb-6">Your free spot will be held for 10 minutes.</p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-xl hover:opacity-90 transition"
            >
              Secure My Free Seat Now
            </motion.button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-white">Here's What Attendees Are Saying</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"Finally, AI explained without jargon."</p>
              <div className="text-sm text-gray-400">— Sarah M., Marketing Agency</div>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"This workshop got me more clarity than 10 YouTube videos."</p>
              <div className="text-sm text-gray-400">— Mike R., Consultant</div>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"I saved hours using the chatbot walkthrough Gurudeep shared."</p>
              <div className="text-sm text-gray-400">— Lisa K., Service Business</div>
            </div>
          </div>
        </section>

        {/* Final CTA Strip */}
        <section className="py-8 sm:py-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">You're One Click From Smarter, Faster Workflows</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 border border-gray-600 rounded-xl p-6 text-center hover:border-purple-500/50 transition-colors duration-300">
              <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-white">Just Curious?</h3>
              <a href="#quiz" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium">
                Take the AI Readiness Quiz →
              </a>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/30 to-fuchsia-900/30 border-2 border-purple-500 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-white">Ready to Learn?</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    '0 0 0 rgba(168, 139, 250, 0)',
                    '0 0 20px 2px rgba(168, 139, 250, 0.3)',
                    '0 0 0 rgba(168, 139, 250, 0)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                Join the Free Workshop
              </motion.button>
            </div>
            
            <div className="bg-gray-800/30 border border-gray-600 rounded-xl p-6 text-center hover:border-purple-500/50 transition-colors duration-300">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3 text-white">Ready to Build?</h3>
              <a href="#audit" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium">
                Book Your Strategy Audit →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Custom animations and effects */}
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

        .bg-pattern {
          background-image: radial-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </div>
  )
}