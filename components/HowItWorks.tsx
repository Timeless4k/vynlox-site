'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Phone, Map, FileText, Hammer, RefreshCw, Users } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Free Strategy Call',
    description: "Let's chat about your business and uncover the fastest ways to save you hours every week.",
    icon: Phone
  },
  {
    number: '02',
    title: 'Your Custom Roadmap',
    description: "Get a crystal-clear plan showing exactly how we'll automate your work — tailored to you.",
    icon: Map
  },
  {
    number: '03',
    title: 'Simple Proposal',
    description: "No jargon, no fluff. See what we'll build, how it works, and the results you'll get.",
    icon: FileText
  },
  {
    number: '04',
    title: 'We Build & Launch',
    description: "We handle everything — setup, training, and support — so you can focus on your business.",
    icon: Hammer
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description: "We keep improving your tools and automations, so you keep saving more time as you grow.",
    icon: RefreshCw
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function HowItWorks() {
  return (
    <section id="process" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-500/20 rounded-full filter blur-3xl opacity-40 -z-10" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl opacity-40 -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 -z-10" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust/Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-3">
            How We Help You Win Back Your Time
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            <span className="inline-flex items-center gap-2 justify-center">
              <Users className="w-5 h-5 text-indigo-400" />
              Trusted by 70+ businesses
            </span>
            — here's how we make it easy for you:
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20 hidden lg:block" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={item}
                className="group relative"
              >
                <div className="bg-zinc-800/60 p-8 rounded-xl border border-purple-900/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 h-full flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-500/30 to-purple-500/30 mb-4 group-hover:from-indigo-500/50 group-hover:to-purple-500/50 transition-all duration-300">
                    <step.icon className="w-7 h-7 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-indigo-400 mb-1 tracking-widest">STEP {step.number}</span>
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-indigo-300 transition-colors">{step.title}</h3>
                  <p className="text-zinc-300 group-hover:text-zinc-200 transition-colors text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 bg-zinc-800/60 px-6 py-4 rounded-xl border border-purple-900/20 shadow-md">
            <img src="/guru-avatar.png" alt="Guru" className="w-10 h-10 rounded-full border-2 border-indigo-400" />
            <span className="text-zinc-200 text-base italic">"We make it simple, personal, and effective — so you see results fast."</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a 
            href="#pricing" 
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-800/40 shadow-lg"
          >
            Book Your Free Strategy Call
            <ChevronRight className="inline-block ml-2 h-6 w-6 align-middle" />
          </a>
          <p className="text-zinc-400 mt-3 text-sm">Only 3 spots left this month</p>
        </motion.div>
      </div>
    </section>
  );
}