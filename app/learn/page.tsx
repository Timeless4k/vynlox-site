'use client';

import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { BookOpen, Bot, ClipboardList, Gift, User } from 'lucide-react'

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Minimal header */}
      <header className="py-6 border-b flex items-center justify-between max-w-4xl mx-auto px-4">
        <Link href="/" className="text-xl font-bold text-indigo-700">Vynlox</Link>
        <Link href="/" className="text-indigo-600 hover:underline">← Back to Home</Link>
      </header>
      <main className="max-w-3xl mx-auto py-12 px-4">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-600 border border-indigo-100 mb-4">
            Live Webinar • 90 Minutes
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900 font-display tracking-tight leading-tight">
            Learn How to Use AI to Save Time, Get Leads, and <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Simplify Your Business</span>
          </h1>
          <p className="text-lg text-zinc-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join our 90-minute live webinar built for service business owners who want to automate their business without hiring developers or learning code.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow hover:bg-indigo-700 transition mb-2"
          >
            Reserve Your Spot — $29 Early Bird
          </a>
        </section>

        {/* What You'll Learn Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><BookOpen className="w-6 h-6 text-indigo-500" /> What You'll Learn</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
              <Bot className="w-8 h-8 text-purple-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Discover what AI can actually do for you</h3>
              <p className="text-zinc-600 text-sm">Real examples of how businesses like yours are saving time and closing more deals using simple AI tools.</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
              <ClipboardList className="w-8 h-8 text-indigo-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Build your own AI assistant (live demo)</h3>
              <p className="text-zinc-600 text-sm">Follow along as we walk through how to set up a basic chatbot or automation — all without code.</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
              <BookOpen className="w-8 h-8 text-purple-500 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Walk away with a personalized action plan</h3>
              <p className="text-zinc-600 text-sm">You'll leave knowing exactly what to automate next in your business — and how to do it step by step.</p>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><Gift className="w-6 h-6 text-indigo-500" /> Bonus Tools</h2>
          <ul className="space-y-2 mb-6 pl-2">
            <li className="flex items-center text-zinc-700"><span className="text-indigo-400 mr-2">✓</span> Notion SOP Template for automations</li>
            <li className="flex items-center text-zinc-700"><span className="text-indigo-400 mr-2">✓</span> AI Prompt Cheatsheet</li>
            <li className="flex items-center text-zinc-700"><span className="text-indigo-400 mr-2">✓</span> $50 credit toward our full AI Audit</li>
          </ul>
        </section>

        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><ClipboardList className="w-6 h-6 text-indigo-500" /> How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm text-center">
              <div className="flex justify-center mb-2"><User className="w-7 h-7 text-indigo-500" /></div>
              <h3 className="text-base font-semibold mb-1">Join the Live Webinar</h3>
              <p className="text-zinc-600 text-sm">90-minute Zoom session, interactive and hands-on</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm text-center">
              <div className="flex justify-center mb-2"><Bot className="w-7 h-7 text-purple-500" /></div>
              <h3 className="text-base font-semibold mb-1">Learn by Doing</h3>
              <p className="text-zinc-600 text-sm">We'll walk through real tools you can use today</p>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm text-center">
              <div className="flex justify-center mb-2"><ClipboardList className="w-7 h-7 text-indigo-500" /></div>
              <h3 className="text-base font-semibold mb-1">Apply or Get Help</h3>
              <p className="text-zinc-600 text-sm">Walk away with a plan, or apply it with our help (AI Audit)</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><BookOpen className="w-6 h-6 text-indigo-500" /> Choose Your Access</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-2">🎟️ Early Bird</h3>
              <p className="text-2xl font-bold mb-4 text-zinc-900">$29</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center justify-center text-zinc-700"><span className="text-indigo-400 mr-2">✓</span> Live webinar access</li>
                <li className="flex items-center justify-center text-zinc-700"><span className="text-indigo-400 mr-2">✓</span> Replay access</li>
                <li className="flex items-center justify-center text-zinc-700"><span className="text-indigo-400 mr-2">✓</span> Templates</li>
              </ul>
              <a
                href="#"
                className="block w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Reserve My Spot
              </a>
            </div>
            <div className="bg-white border-2 border-indigo-500 rounded-xl p-6 shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-2">🔓 General</h3>
              <p className="text-2xl font-bold mb-4 text-zinc-900">$49</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center justify-center text-zinc-700"><span className="text-indigo-400 mr-2">✓</span> Everything in Early Bird</li>
                <li className="flex items-center justify-center text-zinc-700"><span className="text-indigo-400 mr-2">✓</span> Q&A priority</li>
              </ul>
              <a
                href="#"
                className="block w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Reserve My Spot
              </a>
            </div>
            <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm text-center">
              <h3 className="text-lg font-semibold mb-2">💼 VIP</h3>
              <p className="text-2xl font-bold mb-4 text-zinc-900">$99</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center justify-center text-zinc-700"><span className="text-indigo-400 mr-2">✓</span> Everything in General</li>
                <li className="flex items-center justify-center text-zinc-700"><span className="text-indigo-400 mr-2">✓</span> 15-min consult</li>
                <li className="flex items-center justify-center text-zinc-700"><span className="text-indigo-400 mr-2">✓</span> $50 audit credit</li>
              </ul>
              <a
                href="#"
                className="block w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Reserve My Spot
              </a>
            </div>
          </div>
          <p className="text-center text-zinc-500 mt-6 text-sm">Limited spots per session. Replay included.</p>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><BookOpen className="w-6 h-6 text-indigo-500" /> Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm">
              <summary className="font-semibold cursor-pointer">Do I need to know tech or AI?</summary>
              <p className="text-zinc-600 mt-2">Nope! This session is made for busy business owners with no tech background. We keep it simple and practical.</p>
            </details>
            <details className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm">
              <summary className="font-semibold cursor-pointer">Will I get a recording?</summary>
              <p className="text-zinc-600 mt-2">Yes! Everyone who signs up gets replay access.</p>
            </details>
            <details className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm">
              <summary className="font-semibold cursor-pointer">Can I book a private team training instead?</summary>
              <p className="text-zinc-600 mt-2">Yes — contact us for corporate bookings.</p>
            </details>
          </div>
        </section>

        {/* Speaker Bio Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2"><User className="w-6 h-6 text-indigo-500" /> About the Host</h2>
          <div className="flex items-center gap-6 bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-indigo-500">
              <Image
                src="/images/guru.svg"
                alt="Guru Singh"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Guru Singh</h3>
              <p className="text-zinc-600 text-sm">
                Founder of Vynlox, Guru helps businesses grow faster using done-for-you AI systems. She specializes in turning complex tools into simple, powerful solutions for everyday service businesses.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">🚀 Ready to Work Smarter?</h2>
          <p className="text-lg text-zinc-700 mb-6">
            Join the next Vynlox AI Webinar and learn how to automate your business in just 90 minutes.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow hover:bg-indigo-700 transition"
          >
            Register Now for $29 Early Bird
          </a>
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