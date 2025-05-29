'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScroll } from '@/lib/hooks/useScroll';
import { useMobileMenu } from '@/lib/hooks/useMobileMenu';

const navLinks = [
  { href: '/workshop', label: 'Workshop' },
  { href: '/audit', label: 'Audit' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/retrainer', label: 'Retrainer' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const isScrolled = useScroll(100);
  const { isOpen, toggle, close } = useMobileMenu();
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-[#0b121b]' : 'bg-[#0b121b]/95'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* New three-column layout */}
            <div className="flex w-full items-center">
              {/* Logo */}
              <div className="flex flex-1">
                <Link href="/" className="flex-shrink-0">
                  <img
                    src="/images/Logo/Logo 320 x 132.png"
                    alt="Vynlox"
                    className="h-[72px] w-auto"
                    width={180}
                    height={72}
                  />
                </Link>
              </div>
              {/* Centered Menu */}
              <div className="hidden md:flex flex-1 items-center justify-center md:space-x-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative font-space-grotesk text-sm font-semibold text-gray-400 transition-colors ${pathname === link.href ? 'text-purple-500' : 'hover:text-white'}`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500"
                        layoutId="navbar-underline"
                      />
                    )}
                  </Link>
                ))}
              </div>
              {/* CTA Button */}
              <div className="flex flex-1 justify-end">
                <motion.div
                  className="hidden md:block flex-shrink-0"
                  animate={{
                    scale: [1, 1.03, 1],
                    boxShadow: [
                      '0 0 0 rgba(16, 185, 129, 0)',
                      '0 0 20px rgba(16, 185, 129, 0.5)',
                      '0 0 0 rgba(16, 185, 129, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 8,
                  }}
                >
                  <Link
                    href="/workshop"
                    className="inline-flex items-center rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105"
                  >
                    Join Free Workshop
                  </Link>
                </motion.div>
              </div>
            </div>
            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
              onClick={toggle}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={close}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 20 }}
                className="fixed right-0 top-0 h-full w-[300px] bg-[#0F172A] p-6"
              >
                <div className="flex h-full flex-col">
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                      onClick={close}
                    >
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`font-space-grotesk text-lg font-semibold text-gray-400 transition-colors ${pathname === link.href ? 'text-purple-500' : 'hover:text-white'}`}
                        onClick={close}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <Link
                      href="/workshop"
                      className="mt-4 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-2.5 text-sm font-bold text-white"
                      onClick={close}
                    >
                      Join Free Workshop
                    </Link>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar; 