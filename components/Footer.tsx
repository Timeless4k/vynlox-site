'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Users, 
  Clock, 
  Award,
  ExternalLink,
  Heart,
  Sparkles,
  TrendingUp,
  Target,
  Rocket
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CookieConsent from './CookieConsent';
import EmailCapture from './EmailCapture';
import { EmailCapturePurpose } from '@/lib/brevo';

const footerLinks = {
  services: [
    { name: 'Free AI Workshop', href: '/workshop', icon: Users },
    { name: 'Strategy Audit', href: '/audit', icon: Target },
    { name: 'AI Readiness Quiz', href: '/quiz', icon: Zap },
    { name: 'Book a Call', href: '/book-call', icon: Phone },
    { name: 'Case Studies', href: '/case-studies', icon: TrendingUp },
  ],
  resources: [
    { name: 'AI Automation Guide', href: '/guide', icon: Star },
    { name: 'AI Tools List', href: '/tools', icon: Rocket },
    { name: 'Success Stories', href: '/stories', icon: Award },
    { name: 'Blog', href: '/blog', icon: ExternalLink },
    { name: 'FAQ', href: '/faq', icon: CheckCircle },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Cookie Policy', href: '/cookies' },
  ]
};

const socialLinks = [
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/company/vynlox', 
    icon: Linkedin, 
    color: 'hover:text-blue-400',
    followers: '2.1K'
  },
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/vynlox', 
    icon: Twitter, 
    color: 'hover:text-sky-400',
    followers: '1.8K'
  },
  { 
    name: 'YouTube', 
    href: 'https://youtube.com/@vynlox', 
    icon: Youtube, 
    color: 'hover:text-red-400',
    followers: '950'
  },
  { 
    name: 'GitHub', 
    href: 'https://github.com/vynlox', 
    icon: Github, 
    color: 'hover:text-gray-300',
    followers: '320'
  },
];

const achievements = [
  { label: 'Happy Clients', value: '500+', icon: Users },
  { label: 'Hours Saved', value: '10K+', icon: Clock },
  { label: 'Success Rate', value: '94%', icon: Award },
  { label: 'Countries', value: '25+', icon: MapPin },
];

export default function Footer({ legalOnly = false }: { legalOnly?: boolean }) {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  return (
    <footer className="bg-[#0b121b] relative overflow-hidden w-full">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1: Vynlox */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center">
                <div className="w-32 h-32 relative">
                  <Image
                    src="/images/logo/Logo 320 x 132.png"
                    alt="Vynlox Logo"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400">
                Smarter systems. Built for founders.
              </p>
              <p className="text-gray-400">
                We run Vynlox on the same automations we build for clients — no theory, just working systems.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/company/vynlox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:hello@vynlox.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            {/* Column 2: Explore */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/workshop" className="text-gray-400 hover:text-white transition-colors">
                    Workshop
                  </Link>
                </li>
                <li>
                  <Link href="/audit" className="text-gray-400 hover:text-white transition-colors">
                    AI Strategy Audit
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-gray-400 hover:text-white transition-colors">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li className="flex gap-2 text-gray-400">
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                  <span>|</span>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Column 3: Get Started */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white">Get Started</h4>
              <p className="text-gray-400">
                Join our early access list
              </p>
              <p className="text-gray-400">
                Be first to access workshops, automation templates, and early discounts.
              </p>
              <EmailCapture
                purpose={EmailCapturePurpose.NEWSLETTER}
                buttonText="Notify Me"
                successMessage="Thanks! We'll keep you updated."
                additionalFields={{
                  name: true,
                  company: true,
                  phone: true
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vynlox. All rights reserved.
            </p>
            {!legalOnly && (
              <button
                onClick={() => setShowCookieSettings(true)}
                className="text-gray-400 hover:text-white transition-colors text-sm underline cursor-pointer bg-transparent border-none p-0"
              >
                Cookie Settings
              </button>
            )}
          </div>
        </motion.div>
      </div>
      {showCookieSettings && (
        <CookieConsent forceShowPreferences onClose={() => setShowCookieSettings(false)} key="footer-cookie-settings" />
      )}
    </footer>
  );
}