'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const industries = [
  { name: 'Agencies', logo: '🏢' },
  { name: 'Consultants', logo: '💼' },
  { name: 'Coaches', logo: '🎯' },
  { name: 'Tradies', logo: '🔧' }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function TrustLogos() {
  return (
    <section className="py-12 md:py-24 bg-white px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold text-center mb-12 text-zinc-900"
        >
          Trusted by businesses who want growth without complexity
        </motion.h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {industries.map((industry) => (
            <motion.div key={industry.name} variants={item}>
              <Card className="p-6 text-center hover:shadow-lg transition-all duration-200 hover:scale-105 bg-zinc-50/50">
                <div className="text-4xl mb-2">{industry.logo}</div>
                <div className="text-zinc-600 font-medium">{industry.name}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 