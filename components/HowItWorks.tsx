'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const steps = [
  {
    number: '01',
    title: 'Free Strategy Call',
    description: 'We discuss your business challenges and identify automation opportunities.'
  },
  {
    number: '02',
    title: 'AI Audit',
    description: 'Get a detailed assessment of your processes and a custom automation roadmap.'
  },
  {
    number: '03',
    title: 'Custom Proposal',
    description: 'We present a tailored solution built specifically for your business needs.'
  },
  {
    number: '04',
    title: 'Implementation',
    description: 'Our team builds and integrates your custom AI solution while you focus on growth.'
  },
  {
    number: '05',
    title: 'Ongoing Optimization',
    description: 'We continuously improve your systems for maximum ROI and adaptation.'
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

export function HowItWorks() {
  return (
    <section id="process" className="py-24 md:py-32 bg-gradient-to-b from-white to-zinc-50 px-6 lg:px-8 relative">
      {/* Background pattern for depth */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1rem 1rem, rgba(79, 70, 229, 0.4) 0.15rem, transparent 0.15rem)`,
        backgroundSize: '2rem 2rem'
      }}></div>
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 font-display mb-4">
            How We Deliver Results
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            A structured approach to implementing AI solutions that deliver measurable business impact
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop view with connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-100 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-5 gap-8 md:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div key={step.title} variants={item} className="relative">
                <Card className="p-6 md:pt-12 text-center bg-white hover:shadow-lg transition-all duration-300 hover:border-indigo-200 h-full flex flex-col items-center rounded-xl border border-zinc-200 hover:transform hover:scale-105">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold absolute top-0 md:top-0 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 shadow-md">
                    {index + 1}
                  </div>
                  <div className="mb-2 text-lg font-semibold text-zinc-900">
                    {step.title}
                  </div>
                  <p className="text-zinc-600 text-sm">{step.description}</p>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20 items-center justify-center bg-white rounded-full p-1 shadow-sm border border-indigo-100">
                    <ChevronRight className="h-5 w-5 text-indigo-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}