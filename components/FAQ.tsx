'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What makes Vynlox different from other AI agencies?',
    answer: 'Unlike general AI consultancies, Vynlox specializes exclusively in service businesses. We develop custom AI solutions that integrate with your existing workflows and tools, all without requiring any technical knowledge from you. Our end-to-end approach handles everything from strategy to implementation, delivering measurable results rather than just technology.'
  },
  {
    question: 'How long does it take to implement an AI solution?',
    answer: 'Most projects take 2-4 weeks from strategy to full implementation. After your initial strategy call and audit, we provide a detailed timeline specific to your project. We use an agile approach to deliver value quickly, with regular updates and milestones throughout the implementation process.'
  },
  {
    question: 'Is technical knowledge required to work with Vynlox?',
    answer: 'Not at all! We designed our entire service model for business owners and executives without technical backgrounds. Our team handles all the technical implementation while providing you with simple, intuitive interfaces to manage your new AI systems. We also include comprehensive training and documentation tailored to non-technical users.'
  },
  {
    question: 'What is the investment required for AI implementation?',
    answer: 'We begin with a $500 AUD AI Audit that provides your custom automation roadmap. Implementation projects typically range from $2,500 to $10,000 AUD, depending on scope and complexity. Many clients choose our monthly optimization retainer ($500-1,500/month) to continuously improve their systems and adapt to changing business needs.'
  },
  {
    question: 'How quickly can I expect to see ROI from my AI implementation?',
    answer: 'Most clients see initial ROI within 30-60 days of implementation. Time-saving automations deliver immediate value, while lead generation and conversion improvements typically show results within the first few weeks. We establish clear metrics at the beginning of every project and provide regular reporting on your ROI.'
  },
  {
    question: 'Which industries do you primarily work with?',
    answer: 'We specialize in service-based businesses including agencies, consulting firms, professional services, coaching businesses, and trades. Our solutions are particularly effective for businesses with defined processes, regular client interactions, and teams spending significant time on administrative tasks.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 font-display mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Everything you need to know about working with Vynlox
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-zinc-200 py-2"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-zinc-900 hover:text-indigo-700 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600 leading-relaxed py-3 pr-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-zinc-700 mb-6">
            Have more questions or ready to explore how AI can transform your business?
          </p>
          <a 
            href="#pricing" 
            className="inline-flex items-center px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-medium"
          >
            Book Your Free Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}