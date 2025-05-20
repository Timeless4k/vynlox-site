'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Twitter, Linkedin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-indigo-900 to-purple-900 px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-300 rounded-full mix-blend-overlay filter blur-3xl" />
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
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
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
              I&apos;m Guru, founder of Vynlox — and I&apos;ll personally guide your strategy
            </h2>

            <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
              With over a decade of experience in AI and business automation, I help service businesses like yours implement practical AI solutions that deliver real results. Let's map out your AI transformation journey together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-white text-indigo-900 hover:bg-indigo-50 transition-all duration-200 hover:scale-105 hover:shadow-lg rounded-xl py-6 h-auto font-medium"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <a
                href="mailto:hello@vynlox.com"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-colors font-medium"
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
          className="mt-16 md:mt-24 pt-8 border-t border-indigo-800/50 text-center"
        >
          <div className="flex items-center justify-center space-x-8 mb-6">
            <a href="mailto:hello@vynlox.com" className="text-indigo-200 hover:text-white transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/vynlox" className="text-indigo-200 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/company/vynlox" className="text-indigo-200 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          <p className="text-indigo-200">
            Proudly built in Sydney, Australia 🇦🇺
          </p>
        </motion.div>
      </div>
    </section>
  );
}