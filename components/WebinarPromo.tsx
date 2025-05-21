'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';

export function WebinarPromo() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 rounded-3xl" />
          
          {/* Content */}
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left side - Text content */}
              <div className="space-y-6 p-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Next Webinar: Tuesday, 2:00 PM AEST
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
                  Transform Your Business with{' '}
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    AI Automation
                  </span>
                </h2>
                
                <p className="text-zinc-300 text-lg">
                  Join our exclusive webinar and discover how to save 10+ hours per week by automating your business processes with AI.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <a
                    href="#webinar"
                    className="group inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-base font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40"
                  >
                    Reserve Your Spot
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/learn"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-indigo-500/30 text-white text-base font-semibold hover:bg-indigo-500/10 transition-all duration-300"
                  >
                    Learn More
                  </a>
                  <div className="flex items-center text-zinc-300 text-sm">
                    <Clock className="w-4 h-4 mr-2 text-indigo-400" />
                    <span>60 minutes + Q&A</span>
                  </div>
                </div>
              </div>

              {/* Right side - Benefits */}
              <div className="p-8">
                <div className="bg-zinc-800/50 rounded-2xl border border-purple-900/20 p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    What You'll Get
                  </h3>
                  <ul className="space-y-4">
                    {[
                      {
                        title: 'Live Training',
                        description: 'Step-by-step guide to implementing AI automation'
                      },
                      {
                        title: 'Expert Q&A',
                        description: 'Get your questions answered by AI automation experts'
                      },
                      {
                        title: 'Special Offer',
                        description: 'Exclusive discount for webinar attendees'
                      },
                      {
                        title: 'Recording Access',
                        description: 'Watch the replay at your convenience'
                      }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-indigo-400 text-sm">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{item.title}</h4>
                          <p className="text-zinc-300 text-sm">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 