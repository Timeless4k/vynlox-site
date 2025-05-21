'use client';

import { motion } from 'framer-motion';
import { Building, Briefcase, Target, Wrench, Award, Users, ShieldCheck } from 'lucide-react';

// Improved industry list with additional details
const industries = [
  { name: 'Agencies', icon: Building, count: '15+' },
  { name: 'Consultants', icon: Briefcase, count: '25+' },
  { name: 'Coaches', icon: Target, count: '20+' },
  { name: 'Tradies', icon: Wrench, count: '10+' },
];

// Add trust points
const trustPoints = [
  { icon: Award, text: 'AI Excellence Award 2024' },
  { icon: Users, text: '70+ Successful Implementations' },
  { icon: ShieldCheck, text: 'Enterprise-Grade Security' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 } 
  }
};

export function TrustLogos() {
  return (
    <section className="relative py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-semibold text-white mb-3">
            Trusted by Service Businesses
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Helping professionals grow their businesses without technical complexity
          </p>
        </motion.div>

        <div className="mb-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-8"
          >
            {industries.map(({ name, icon: Icon, count }) => (
              <motion.div 
                key={name} 
                variants={item} 
                className="flex flex-col items-center"
              >
                <div className="bg-zinc-800/50 p-4 rounded-full mb-3 border border-purple-900/20">
                  <Icon className="w-6 h-6 text-indigo-400" />
                </div>
                <p className="text-white font-semibold">{name}</p>
                <p className="text-indigo-400 text-sm font-medium">{count} Clients</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="border-t border-purple-900/20 pt-10">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {trustPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-5 h-5 text-indigo-400" />
                  <span className="text-zinc-300 font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}