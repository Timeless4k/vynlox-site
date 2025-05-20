'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className={`transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-purple-900/20 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 flex items-center"
            >
              <a href="#" className="text-2xl md:text-3xl font-bold font-display tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(120,80,220,0.3)] select-none">
                Vynlox
              </a>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-zinc-200 px-2 py-1 transition-all duration-200 hover:text-indigo-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-indigo-400 after:transition-all hover:after:w-full"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="gradient"
                size="lg"
                className="rounded-xl hover:scale-105 transition-all duration-200 text-sm"
              >
                Book Free Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-zinc-100 hover:text-indigo-300 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with improved animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-zinc-900/95 backdrop-blur-md border-b border-purple-900/20 shadow-lg overflow-hidden"
            >
              <div className="px-6 pt-6 pb-8 space-y-2 flex flex-col">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-zinc-100 px-3 py-3 rounded-lg transition-all hover:bg-zinc-800/50 hover:text-indigo-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button 
                  variant="gradient"
                  size="lg"
                  className="w-full mt-4 rounded-xl py-3 shadow-lg text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Free Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}