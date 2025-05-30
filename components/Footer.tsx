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

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setEmail('');
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-[#0F172A] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
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
        {/* Top Section - Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-16 text-center border-b border-gray-800/50"
        >
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Join the AI Revolution
            </motion.div>
            
            <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-4">
              Get Exclusive AI Automation Tips
            </h3>
            <p className="text-xl text-gray-400 mb-8">
              Join 2,500+ founders getting weekly insights on AI automation, 
              AI automation tools, and business growth strategies.
            </p>

            {/* Enhanced Newsletter Form */}
            <div className="max-w-md mx-auto">
              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center justify-center gap-3 text-emerald-400 py-4"
                  >
                    <CheckCircle className="w-6 h-6" />
                    <span className="font-medium text-lg">
                      🎉 You're in! Check your email for a welcome gift
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-2"
                  >
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email for AI secrets"
                      className="flex-1 px-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    />
                    <motion.button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !email}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Mail className="w-5 h-5" />
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>No spam ever</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>2,500+ subscribers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Weekly insights</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Column 1: Brand + About */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <motion.h3 
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 mb-4 cursor-pointer"
                >
                  Vynlox
                </motion.h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  AI automation for solo founders. No devs needed. Just results.
                  <br />
                  <span className="text-purple-300">
                    Built by founders, for founders who value their time.
                  </span>
                </p>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 text-center group hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <achievement.icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="text-white font-bold text-lg">{achievement.value}</div>
                    <div className="text-gray-400 text-sm">{achievement.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <a href="mailto:hello@vynlox.com" className="hover:text-purple-400 transition-colors">
                    hello@vynlox.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Global • Remote-First</span>
                </div>
              </div>
            </motion.div>

            {/* Column 2: Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    onHoverStart={() => setHoveredLink(link.name)}
                    onHoverEnd={() => setHoveredLink(null)}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-all duration-300"
                    >
                      <link.icon className={`w-4 h-4 transition-all duration-300 ${
                        hoveredLink === link.name ? 'text-purple-400 scale-110' : 'text-gray-500'
                      }`} />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      {hoveredLink === link.name && (
                        <ArrowRight className="w-4 h-4 text-purple-400" />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-fuchsia-400" />
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    onHoverStart={() => setHoveredLink(link.name)}
                    onHoverEnd={() => setHoveredLink(null)}
                  >
                    <a
                      href={link.href}
                      className="group flex items-center gap-3 text-gray-400 hover:text-fuchsia-400 transition-all duration-300"
                    >
                      <link.icon className={`w-4 h-4 transition-all duration-300 ${
                        hoveredLink === link.name ? 'text-fuchsia-400 scale-110' : 'text-gray-500'
                      }`} />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      {hoveredLink === link.name && (
                        <ArrowRight className="w-4 h-4 text-fuchsia-400" />
                      )}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Social & Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-400" />
                  Connect
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group flex flex-col items-center gap-2 p-3 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:border-purple-500/30 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <div className="text-center">
                        <div className="text-sm font-medium text-white">{social.name}</div>
                        <div className="text-xs text-gray-400">{social.followers}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Legal Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
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
            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Vynlox. All rights reserved.
              </p>
              <div className="hidden md:flex items-center gap-2 text-gray-500 text-sm">
                Made with <Heart className="w-4 h-4 text-red-400" /> for founders
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>🚀 Helping founders automate since 2023</span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}