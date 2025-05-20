'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ClipboardCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function AuditPitch() {
  return (
    <section className="py-12 md:py-24 bg-white px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-zinc-900 font-display">
            Get Your Personalized AI Roadmap — Built for Your Business
          </h2>
          
          <p className="text-lg text-zinc-600 mb-8">
            We don&apos;t pitch generic tools. We study your business, map the best wins, and deliver a full strategy plan.
          </p>

          <Card className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-2xl p-8 mb-8 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <ClipboardCheck className="h-12 w-12 text-zinc-900" />
            </div>
            
            <ul className="space-y-4 text-left">
              {[
                '60–90 min session',
                '3–5 automation/GPT ideas',
                'Loom walkthrough + PDF/Notion plan'
              ].map((item) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-zinc-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </Card>

          <div className="mb-8">
            <p className="text-2xl font-semibold text-zinc-900">$500 AUD</p>
            <p className="text-zinc-600">(credited to future projects)</p>
          </div>

          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-zinc-900 text-white hover:bg-zinc-800 transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              Book Free Consultation to Qualify
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-zinc-500">
              Only 3 audits/month accepted. Book early.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 