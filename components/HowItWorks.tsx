'use client';

import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  Users, 
  Video, 
  Phone, 
  Brain, 
  FileText, 
  CheckCircle, 
  Wrench, 
  Rocket, 
  RefreshCw 
} from 'lucide-react';
import { ReactNode } from 'react';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

const steps: Step[] = [
  {
    number: '01',
    title: 'Join the Webinar',
    description: 'Learn how AI can save you 10+ hours/week with real case studies and expert Q&A. ($29–$49)',
    icon: <Video className="w-7 h-7 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
  },
  {
    number: '02',
    title: 'Free Strategy Call',
    description: '10–20 minute vibe check to see if we\'re a good fit and what you need help with.',
    icon: <Phone className="w-7 h-7 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
  },
  {
    number: '03',
    title: 'AI Audit ($499)',
    description: '90-minute consult + roadmap with 3–5 automation ideas. Fee credited to your project.',
    icon: <Brain className="w-7 h-7 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
  },
  {
    number: '04',
    title: 'Custom Proposal',
    description: 'We send you a proposal outlining what we\'ll build and how it works.',
    icon: <FileText className="w-7 h-7 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
  },
  {
    number: '05',
    title: 'Approve & Start',
    description: 'You choose what you want to implement. We finalize scope and move forward.',
    icon: <CheckCircle className="w-7 h-7 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
  },
  {
    number: '06',
    title: 'We Build It',
    description: 'We hire vetted Upwork contractors, manage delivery, and keep you updated.',
    icon: <Wrench className="w-7 h-7 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
  },
  {
    number: '07',
    title: 'Launch Day',
    description: 'You get your automation tools with full instructions, training, and support.',
    icon: <Rocket className="w-7 h-7 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
  },
  {
    number: '08',
    title: 'Ongoing Support',
    description: 'Join our Growth Retainer with monthly 1:1 calls, updates, and performance tracking.',
    icon: <RefreshCw className="w-7 h-7 text-indigo-300 group-hover:text-indigo-200 transition-colors" />
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
            — here's our proven 8-step process:
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={item}
                className="group relative"
              >
                <div className="bg-zinc-800/60 p-8 rounded-xl border border-purple-900/20 hover:border-indigo-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 h-full flex flex-col items-center text-center hover:scale-105">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 mb-4 group-hover:from-indigo-500/50 group-hover:to-purple-500/50 transition-all duration-300">
                    {step.icon}
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