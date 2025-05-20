'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Zap, Folder, Brain } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: MessageSquare,
    title: 'GPT Chatbots',
    description: 'Capture leads, handle FAQs, and pre-qualify customers 24/7'
  },
  {
    icon: Zap,
    title: 'Business Automations',
    description: 'Eliminate repetitive admin with smart workflows'
  },
  {
    icon: Folder,
    title: 'AI Websites',
    description: 'Convert more visitors with forms, automation, and GPT support'
  },
  {
    icon: Brain,
    title: 'Internal GPT Assistants',
    description: 'Train GPT on your business docs for instant answers'
  }
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

export function ServicesOverview() {
  return (
    <section className="py-12 md:py-24 bg-zinc-50 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-zinc-900 font-display"
        >
          AI Systems That Automate, Optimize, and Scale
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={item}>
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-200 hover:scale-105 bg-white">
                <service.icon className="h-8 w-8 mb-4 text-zinc-900" />
                <h3 className="text-xl font-semibold mb-2 text-zinc-900">{service.title}</h3>
                <p className="text-zinc-600">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 