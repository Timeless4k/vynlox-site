'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Webinar', href: '#webinar' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-900/80 backdrop-blur-lg border-b border-purple-900/20' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Vynlox
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-zinc-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-800/40"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-zinc-900/95 backdrop-blur-lg rounded-lg mt-2 border border-purple-900/20">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#pricing"
                  className="block px-3 py-2 rounded-lg text-base font-medium bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book a Call
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}