'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const navigation = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  services: [
    { name: 'AI Automation', href: '#services' },
    { name: 'Customer Support', href: '#services' },
    { name: 'Business Tools', href: '#services' },
    { name: 'AI Assistant', href: '#services' },
    { name: 'Free Webinar', href: '#webinar' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Vynlox
              </a>
              <p className="mt-4 text-zinc-300 text-sm leading-6">
                Making AI automation simple for service businesses. Save time, get more customers, and grow faster.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex space-x-6"
            >
              <a
                href="mailto:hello@vynlox.com"
                className="text-zinc-400 hover:text-indigo-300 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="tel:+61400000000"
                className="text-zinc-400 hover:text-indigo-300 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </a>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Company</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-zinc-300 hover:text-indigo-300 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Services</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-zinc-300 hover:text-indigo-300 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Legal</h3>
                <ul className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-zinc-300 hover:text-indigo-300 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-white">Book a Call</h3>
                <p className="mt-4 text-sm text-zinc-300">
                  Ready to save time and grow your business? Let's chat about how we can help.
                </p>
                <a
                  href="#pricing"
                  className="mt-4 inline-flex items-center text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Book Your Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-purple-900/20 pt-8">
          <p className="text-sm text-zinc-400">
            &copy; {new Date().getFullYear()} Vynlox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}