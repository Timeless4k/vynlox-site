'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, ArrowRight } from 'lucide-react';

export function WebinarSection() {
  return (
    <section id="webinar" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            Free Webinar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Master AI Automation for Your Business
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            Join our exclusive webinar and learn how to save 10+ hours per week with AI automation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative"
        >
          <div className="bg-zinc-800/50 rounded-2xl border border-purple-900/20 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Left side - Webinar details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    What You'll Learn
                  </h3>
                  <ul className="space-y-4">
                    {[
                      'How to automate customer support with AI',
                      'Best practices for business automation',
                      'Real-world case studies and examples',
                      'Step-by-step implementation guide',
                      'Q&A with AI automation experts'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
                          <span className="text-indigo-400 text-sm">{index + 1}</span>
                        </div>
                        <span className="text-zinc-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-zinc-300">
                    <Calendar className="w-5 h-5 text-indigo-400 mr-3" />
                    <span>Every Tuesday at 2:00 PM AEST</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <Clock className="w-5 h-5 text-indigo-400 mr-3" />
                    <span>60 minutes + Q&A</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <Users className="w-5 h-5 text-indigo-400 mr-3" />
                    <span>Limited to 50 participants</span>
                  </div>
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Reserve Your Spot
                  </h3>
                  <p className="text-zinc-300 mb-6">
                    Join our next webinar and discover how to transform your business with AI automation. Limited spots available.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center text-zinc-300">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-3" />
                      <span>Free for all participants</span>
                    </div>
                    <div className="flex items-center text-zinc-300">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-3" />
                      <span>Recording available after</span>
                    </div>
                    <div className="flex items-center text-zinc-300">
                      <div className="w-2 h-2 rounded-full bg-green-400 mr-3" />
                      <span>Special offer for attendees</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href="/webinar"
                    className="group inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="/learn"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-indigo-500/30 text-white text-lg font-semibold hover:bg-indigo-500/10 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 