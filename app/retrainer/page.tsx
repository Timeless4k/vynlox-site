'use client';

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { BookOpen, Bot, ClipboardList, Gift, User, Clock, Lock, Calendar, Star, ArrowRight, CheckCircle, Target, Zap, Users, Phone, FileText, Map, Settings, Video, Mail, HeadphonesIcon, Shield, Rocket } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function RetrainerPage() {
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
                Custom AI <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">Model Training</span> for Your Business
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your business data into powerful AI models. We help you train custom AI models that understand your specific business context and deliver superior results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="#learn-more"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:bg-gray-800/50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-2xl blur-3xl" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Bot className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Custom Model Training</h3>
                      <p className="text-gray-400">Tailored to your business needs</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-fuchsia-500/20 flex items-center justify-center">
                      <Settings className="w-6 h-6 text-fuchsia-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Fine-tuned Performance</h3>
                      <p className="text-gray-400">Optimized for your use case</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Data Security</h3>
                      <p className="text-gray-400">Enterprise-grade protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Custom Model Training?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Domain-Specific Training",
                description: "Train models on your industry-specific data for better accuracy and relevance."
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description: "Fine-tune models for optimal performance in your specific use cases."
              },
              {
                icon: Lock,
                title: "Data Privacy",
                description: "Keep your data secure with our enterprise-grade security measures."
              },
              {
                icon: Clock,
                title: "Rapid Deployment",
                description: "Get your custom model up and running in days, not months."
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Work with our team of AI specialists throughout the process."
              },
              {
                icon: Gift,
                title: "Cost-Effective",
                description: "Pay only for what you need with our flexible pricing model."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800"
              >
                <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Training Process</h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Data Assessment",
                description: "We analyze your data to determine the best training approach.",
                icon: FileText
              },
              {
                step: "02",
                title: "Model Selection",
                description: "Choose the right base model for your specific needs.",
                icon: Settings
              },
              {
                step: "03",
                title: "Training & Optimization",
                description: "Train and fine-tune the model for optimal performance.",
                icon: Zap
              },
              {
                step: "04",
                title: "Testing & Validation",
                description: "Rigorous testing to ensure model accuracy and reliability.",
                icon: CheckCircle
              },
              {
                step: "05",
                title: "Deployment & Support",
                description: "Seamless deployment and ongoing support for your model.",
                icon: Rocket
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-purple-400 font-semibold">{step.step}</span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12 sm:mb-16">
          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Ready to Train Your Custom AI Model?</h2>
              <p className="text-gray-400">Get in touch to discuss your requirements and start the process.</p>
            </div>
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 