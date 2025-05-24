'use client';

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { BookOpen, Bot, ClipboardList, Gift, User, Clock, Lock, Calendar, Star, ArrowRight, CheckCircle, Target, Zap, Users, Award, Heart, Sparkles, GraduationCap, Rocket, MessageSquare, Phone, Linkedin } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto py-8 px-2 sm:py-12 sm:px-4">
        {/* Personal Story Section */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-white font-display tracking-tight leading-tight">
              Built From Scratch — <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">By Someone Like You</span>
            </h1>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex flex-col items-center space-y-6">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500">
                  <Image
                    src="/images/guru.svg"
                    alt="Gurudeep Dhinjan"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 w-full max-w-sm">
                  <h3 className="text-lg font-semibold text-white mb-4 text-center">My Journey</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <div>
                        <div className="text-sm font-medium text-blue-400">2024</div>
                        <div className="text-sm text-gray-300">AI Honours Thesis</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <div>
                        <div className="text-sm font-medium text-purple-400">2025</div>
                        <div className="text-sm text-gray-300">Vynlox Launch</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm <span className="text-white font-semibold">Gurudeep Dhinjan</span> — a Computer Science Honours student, AI systems builder, and founder of Vynlox. I started this journey after building automations and AI agents to run my own business.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I realized how many other founders were wasting time and money trying to figure this out alone, I decided to package what I'd built — simply, affordably, and effectively.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Vynlox was made for people like me: sharp thinkers, small teams, solo operators — who just need the right systems to unlock growth.
                </p>
                
                <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6">
                  <p className="text-blue-300 font-medium italic text-center">
                    "This isn't a corporate agency — it's a founder-led AI studio built on results, not theory."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement Section */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Why Vynlox Exists</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center group hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                <Zap className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Make AI Useful, Not Confusing</h3>
              <p className="text-gray-400 leading-relaxed">
                AI doesn't need to be technical — it needs to work. I simplify everything around <em>your</em> workflow.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center group hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Give Small Businesses Access to Big Tools</h3>
              <p className="text-gray-400 leading-relaxed">
                You don't need $50K or a dev team to benefit from AI. You need strategy, automation, and clean execution.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center group hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                <Target className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Focus on Outcomes, Not Buzzwords</h3>
              <p className="text-gray-400 leading-relaxed">
                No GPT hype or empty tech demos. Just real tools that save time, capture leads, and drive growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Call to Connect Section */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Want to Talk, Learn, or Build?</h2>
            <p className="text-lg text-gray-400">Not sure where to begin? That's okay — reach out. This is what I do every day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-900/30 to-fuchsia-900/30 border border-purple-500/30 rounded-xl p-6 text-center cursor-pointer group"
            >
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors duration-300">
                <BookOpen className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Learn More</h3>
              <p className="text-gray-400 mb-4">Join our free workshop to see AI automation in action</p>
              <a
                href="/workshop"
                className="inline-flex items-center justify-center w-full bg-purple-500/20 text-purple-400 border border-purple-500/30 py-3 rounded-lg font-semibold hover:bg-purple-500/30 transition group"
              >
                Join the Free Workshop
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-6 text-center cursor-pointer group"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                <Linkedin className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Chat With Me</h3>
              <p className="text-gray-400 mb-4">Connect on LinkedIn for questions and insights</p>
              <a
                href="https://linkedin.com/in/gurudeep-dhinjan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-blue-500/20 text-blue-400 border border-blue-500/30 py-3 rounded-lg font-semibold hover:bg-blue-500/30 transition group"
              >
                Connect on LinkedIn
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-xl p-6 text-center cursor-pointer group"
            >
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                <Phone className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Get Started</h3>
              <p className="text-gray-400 mb-4">Book a discovery call to discuss your automation needs</p>
              <a
                href="/book-call"
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition group"
              >
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Founder Credibility Section */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Work With a Founder-Led Studio?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Direct Access to the Builder</h4>
                    <p className="text-gray-400 text-sm">You work directly with me — no account managers or middlemen.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Real-World Experience</h4>
                    <p className="text-gray-400 text-sm">I use these systems in my own business — not just theory.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Founder-to-Founder Understanding</h4>
                    <p className="text-gray-400 text-sm">I understand the challenges of building and scaling a business.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Transparent Pricing</h4>
                    <p className="text-gray-400 text-sm">No hidden fees or complex agency markups.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Agile & Responsive</h4>
                    <p className="text-gray-400 text-sm">Quick decisions, fast implementation, no bureaucracy.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">Long-Term Partnership</h4>
                    <p className="text-gray-400 text-sm">I'm invested in your success, not just a one-time project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-8 sm:py-12">
          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Build Something Great Together?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's turn your business processes into powerful AI-driven systems that work while you sleep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/audit"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 group"
              >
                Start with an Audit
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              
              <motion.a
                href="/workshop"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 px-8 py-4 text-lg font-bold text-blue-400 transition-all duration-300"
              >
                Join Free Workshop
              </motion.a>
            </div>
          </div>
        </section>
      </main>
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