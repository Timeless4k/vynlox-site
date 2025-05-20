'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Zap, Folder, Brain, Check } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: '24/7 AI Assistant',
    description: 'AI-powered conversation engine that answers inquiries, qualifies leads, and books meetings while you sleep.',
    benefits: [
      'Instant response to customer inquiries',
      'Pre-qualification of leads',
      'Automated meeting booking',
      '24/7 availability'
    ]
  },
  {
    icon: Zap,
    title: 'Business Automation',
    description: 'Streamline customer onboarding, automate follow-ups, and eliminate manual tasks with intelligent workflows.',
    benefits: [
      'Reduce operational overhead',
      'Consistent client experience',
      'Automated task management',
      'Integration with existing systems'
    ]
  },
  {
    icon: Folder,
    title: 'AI-Enhanced Websites',
    description: 'Convert more visitors with intelligent forms, AI chatbots, and personalized user experiences.',
    benefits: [
      'Higher conversion rates',
      'Personalized user journeys',
      'Real-time visitor engagement',
      'Automated lead nurturing'
    ]
  },
  {
    icon: Brain,
    title: 'Knowledge Workers',
    description: 'Custom AI agents that leverage your existing documentation, SOPs, and business knowledge.',
    benefits: [
      'Instant access to company knowledge',
      'Consistent information delivery',
      'Reduced training costs',
      'Scalable expertise'
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
    <section id="services" className="bg-zinc-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 font-display mb-4">
            Smarter Systems. Less Chaos. <br className="hidden md:block" />
            <span className="text-indigo-600">More Growth</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            We design and implement AI systems that remove bottlenecks, free up your time, and scale operations — without requiring technical expertise.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={item}>
                <div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm hover:shadow-md transition duration-300 ease-out h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-3 rounded-xl mr-4">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-900">{service.title}</h3>
                  </div>
                  <p className="text-zinc-600 mb-6">{service.description}</p>
                  <div className="mt-auto">
                    <h4 className="font-medium text-zinc-800 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-zinc-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}