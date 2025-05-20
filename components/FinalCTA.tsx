'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-zinc-900 to-zinc-800 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display">
            I&apos;m Guru, founder of Vynlox — and I&apos;ll personally guide your strategy.
          </h2>

          <p className="text-zinc-300 text-lg">
            Let&apos;s map out your AI transformation journey together.
          </p>

          <Button 
            size="lg" 
            className="bg-white text-zinc-900 hover:bg-zinc-100 transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Book Your Free AI Strategy Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <div className="pt-8 border-t border-zinc-700">
            <div className="flex items-center justify-center space-x-6 mb-4">
              <a href="mailto:hello@vynlox.com" className="text-zinc-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/vynlox" className="text-zinc-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/vynlox" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-zinc-500 text-sm">
              Proudly built in Sydney 🇦🇺
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 