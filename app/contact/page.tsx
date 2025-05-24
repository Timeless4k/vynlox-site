'use client';

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { BookOpen, Bot, ClipboardList, Gift, User, Clock, Lock, Calendar, Star, ArrowRight, CheckCircle, Target, Zap, Users, Mail, Phone, MapPin, MessageSquare } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto py-8 px-2 sm:py-12 sm:px-4">
        {/* Hero Section */}
        <section className="mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                Get in Touch
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white font-display tracking-tight leading-tight">
                Let's Build Your <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent">AI Solution</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Have questions about our AI automation solutions? Want to discuss your business needs? We're here to help you transform your operations with AI.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <motion.a
                  href="#contact-form"
                  whileHover={{ scale: 1.05 }}
                  animate={{
                    scale: [1, 1.02, 1],
                    boxShadow: [
                      '0 0 0 rgba(6, 182, 212, 0)',
                      '0 0 30px 4px rgba(6, 182, 212, 0.5)',
                      '0 0 0 rgba(6, 182, 212, 0)',
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                  className="relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 via-sky-500 to-cyan-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-600 via-sky-500 to-cyan-600 opacity-50 blur-xl animate-pulse" />
                </motion.a>
                
                <a
                  href="/book-call"
                  className="inline-flex items-center justify-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-lg font-medium"
                >
                  Book a Call →
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800/30 border border-cyan-500/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 font-medium">Contact Info</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                    <Mail className="w-5 h-5 text-cyan-400 mb-2" />
                    <p className="text-gray-300">hello@vynlox.com</p>
                  </div>
                  <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg p-3">
                    <Phone className="w-5 h-5 text-sky-400 mb-2" />
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                    <MapPin className="w-5 h-5 text-blue-400 mb-2" />
                    <p className="text-gray-300">Global • Remote-First</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Response within 24 hours</span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>4.9/5 Support Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="mb-12 sm:mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Send Us a Message</h2>
            <p className="text-xl text-gray-400">We'll get back to you within 24 hours</p>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="Acme Inc."
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                  placeholder="Tell us about your project or questions..."
                  required
                />
              </div>

              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </motion.button>
              </div>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 sm:mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">Common questions about our services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-white">What services do you offer?</h3>
              <p className="text-gray-400">We offer AI automation solutions including lead generation, customer support, process automation, and custom AI development.</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-white">How long does implementation take?</h3>
              <p className="text-gray-400">Implementation time varies based on the solution, but most projects are completed within 2-4 weeks.</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-white">Do I need technical expertise?</h3>
              <p className="text-gray-400">No technical expertise required. We handle all the technical aspects and provide training for your team.</p>
            </div>

            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-white">What's your pricing model?</h3>
              <p className="text-gray-400">We offer flexible pricing based on your needs. Book a call to discuss your requirements and get a custom quote.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-cyan-900/20 to-sky-900/20 border border-cyan-500/30 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">Book a free strategy call to discuss your needs.</p>
            
            <motion.a
              href="/book-call"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-sky-500 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300"
            >
              Book a Free Strategy Call
            </motion.a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
} 