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
    question: "What makes Vynlox different?",
    answer: "We focus on making your life easier. Instead of complex tech solutions, we build simple tools that save you time and help you get more customers. We handle everything for you — no tech skills needed."
  },
  {
    question: "How long until I see results?",
    answer: "Most clients start seeing time savings within 2-4 weeks. We'll give you a clear timeline during our first chat, and you'll see regular progress updates along the way."
  },
  {
    question: "Do I need to know about tech?",
    answer: "Not at all! We handle everything for you. You'll get simple tools that are easy to use, plus clear training and support whenever you need it."
  },
  {
    question: "How much does it cost?",
    answer: "We start with a $500 plan that shows you exactly how to save time in your business. After that, projects typically cost $2,500-$10,000, depending on what you need. Many clients also choose our monthly support plan ($500-$1,500) to keep improving their tools."
  },
  {
    question: "When will I start saving time?",
    answer: "Most clients save 5-10 hours per week within the first month. We'll show you exactly how much time you'll save during our free strategy call."
  },
  {
    question: "What types of businesses do you work with?",
    answer: "We work with service businesses like agencies, consultants, coaches, and trades. If you spend time on repetitive tasks or customer service, we can help you automate that work."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-300 max-w-2xl mx-auto text-lg">
            Everything you need to know about working with Vynlox
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-800/50 rounded-2xl border border-purple-900/20 p-6 md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-purple-900/20 last:border-0"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-indigo-300 py-4 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-300 leading-relaxed py-3 pr-4">
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
          <p className="text-zinc-300 mb-6">
            Have more questions or ready to explore how AI can transform your business?
          </p>
          <a 
            href="#pricing" 
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40"
          >
            Book Your Free Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}