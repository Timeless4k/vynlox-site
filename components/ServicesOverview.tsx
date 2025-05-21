'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Zap, Folder, Brain, Check } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: '24/7 Customer Support',
    description: 'Let our AI handle customer questions, book meetings, and qualify leads — even while you sleep.',
    benefits: [
      'Answer customer questions instantly',
      'Book meetings automatically',
      'Qualify leads 24/7',
      'Never miss a customer message'
    ]
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'Automate your follow-ups, client tasks, and admin work — so you can focus on what matters.',
    benefits: [
      'Save hours on repetitive tasks',
      'Keep clients happy with timely follow-ups',
      'Never forget important tasks',
      'Work with your existing tools'
    ]
  },
  {
    icon: Folder,
    title: 'Smart Website Tools',
    description: 'Turn more website visitors into paying customers with easy-to-use tools.',
    benefits: [
      'Convert more visitors into leads',
      'Answer questions instantly',
      'Follow up automatically',
      'Make your website work for you'
    ]
  },
  {
    icon: Brain,
    title: 'Business Assistant',
    description: 'Train an AI assistant on your business knowledge to help your team work smarter.',
    benefits: [
      'Find information instantly',
      'Train new team members faster',
      'Save time on repetitive questions',
      'Share knowledge easily'
    ]
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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function ServicesOverview() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Automate the Repetitive Work. <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Free Up Your Time.</span>
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            We help you automate the tasks that eat up your time, so you can focus on what matters most — growing your business.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group relative bg-zinc-800/50 p-8 rounded-xl border border-purple-900/20 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-indigo-500/5 rounded-xl transition-all duration-300" />
              
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-indigo-300 transition-colors">{service.title}</h3>
                    <p className="text-zinc-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-zinc-300 group-hover:text-zinc-200 transition-colors">
                          <Check className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0 group-hover:text-indigo-300 transition-colors" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}