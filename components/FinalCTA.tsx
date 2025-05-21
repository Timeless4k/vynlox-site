'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Twitter, Linkedin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-overlay filter blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl" />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-900/20 shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold text-white font-display">G</span>
              </div>
            </div>
          </motion.div>
          
          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">
              Hi, I'm Guru — I'll help you save time and grow your business
            </h2>

            <p className="text-zinc-300 text-lg mb-8 leading-relaxed">
              I help service business owners like you automate their work and get more customers. No tech skills needed — I handle everything while you focus on what you do best.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40 rounded-xl py-6 h-auto font-medium"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <a
                href="mailto:hello@vynlox.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-purple-900/20 text-white hover:bg-zinc-800/50 transition-colors font-medium"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me Directly
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 md:mt-24 pt-8 border-t border-purple-900/20 text-center"
        >
          <div className="flex items-center justify-center space-x-8 mb-6">
            <a href="mailto:hello@vynlox.com" className="text-zinc-300 hover:text-indigo-400 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/vynlox" className="text-zinc-300 hover:text-indigo-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/company/vynlox" className="text-zinc-300 hover:text-indigo-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p className="text-zinc-300">
            Proudly built in Sydney, Australia 🇦🇺
          </p>
        </motion.div>
      </div>
    </section>
  );
}