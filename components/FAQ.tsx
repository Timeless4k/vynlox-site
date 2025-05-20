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
    answer: 'We focus exclusively on service businesses and their unique needs. Instead of generic AI solutions, we build custom systems that integrate with your existing tools and workflows. Plus, we handle everything from strategy to implementation, so you don\'t need technical expertise.'
  },
  {
    question: 'How long does it take to implement AI solutions?',
    answer: 'Most projects take 2-4 weeks from start to finish. We begin with a strategy call, then move to implementation. The exact timeline depends on your specific needs and the complexity of the solution.'
  },
  {
    question: 'What if I don\'t have technical knowledge?',
    answer: 'That\'s exactly why we exist! We handle all the technical aspects while you focus on your business. We\'ll guide you through the process in simple terms and provide training on how to use your new AI tools.'
  },
  {
    question: 'How much does it cost to work with Vynlox?',
    answer: 'We start with a $500 AI Audit that maps out your automation opportunities. After that, projects typically range from $2,500 to $10,000, depending on your needs. We also offer monthly retainers for ongoing optimization.'
  }
];

export function FAQ() {
  return (
    <section className="py-12 md:py-24 bg-white px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-zinc-900 font-display"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-zinc-200"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-zinc-900 hover:text-zinc-700">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
} 