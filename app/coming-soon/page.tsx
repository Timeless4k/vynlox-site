'use client';

import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Mail, Sparkles, Zap, Globe, Users } from 'lucide-react';
import Link from 'next/link';
import CookieConsent from '@/components/CookieConsent';
import { useEffect, useState } from 'react';

export default function ComingSoonPage() {
  const [isMiddleware, setIsMiddleware] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('from') === 'middleware') {
        setIsMiddleware(true);
      }
    }

    // Smoother floating animation
    controls.start({
      y: [0, -15, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 1]
      }
    });
  }, [controls]);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const features = [
    { icon: Zap, text: "Lightning Fast" },
    { icon: Globe, text: "Global Scale" },
    { icon: Users, text: "Team Focused" }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Enhanced floating orbs with more dynamic movement */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 150, 0],
              y: [0, -80, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/4 w-[32rem] h-[32rem] bg-purple-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -120, 0],
              y: [0, 100, 0],
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
          
          {/* Additional animated elements */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 100, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />

          {/* New animated elements */}
          <motion.div
            className="absolute top-1/3 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -60, 0],
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />

          <motion.div
            className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1.1, 1.3, 1.1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />

          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          
          {/* Enhanced grid pattern with subtle animation */}
          <motion.div 
            className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0di00aC0ydjRoLTR2Mmg0djRoMnYtNGg0di0yaC00em0wLTMwVjBoLTJ2NGgtNHYyaDR2NGgydi00aDRWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"
            animate={{
              opacity: [0.15, 0.25, 0.15],
              scale: [1, 1.02, 1],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />

          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Header */}
          <motion.header 
            className="p-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center max-w-6xl mx-auto">
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Vynlox
                </span>
              </motion.div>
              
              <motion.a
                href="mailto:helpme@vynlox.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="w-5 h-5 group-hover:animate-bounce" />
                <span className="hidden sm:inline">Contact Us</span>
              </motion.a>
            </div>
          </motion.header>

          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="max-w-4xl w-full text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Main Heading */}
                <motion.h1 
                  className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 font-display tracking-tight leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1], // Custom easing for smooth motion
                    staggerChildren: 0.2
                  }}
                >
                  <motion.span 
                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x block font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    Something
                  </motion.span>
                  <motion.span 
                    className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x block font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2
                    }}
                  >
                    Amazing
                  </motion.span>
                  <motion.span 
                    className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.4
                    }}
                  >
                    is Coming
                  </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                  className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  We're crafting an extraordinary experience that will transform how you work. 
                  <span className="text-blue-400"> Join</span> other people waiting for launch.
                </motion.p>

                {/* Features Preview */}
                <motion.div 
                  className="flex flex-wrap justify-center gap-6 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <feature.icon className="w-5 h-5 text-blue-400" />
                      <span className="text-sm font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Email Signup */}
                <motion.div 
                  className="max-w-md mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  {!isSubscribed ? (
                    <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                      <motion.input
                        type="email"
                        placeholder="Enter your email for early access"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 text-white"
                        whileFocus={{ scale: 1.02 }}
                        required
                      />
                      <motion.button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center justify-center">
                          Join Waitlist
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </motion.button>
                    </form>
                  ) : (
                    <motion.div
                      className="flex items-center justify-center space-x-2 text-green-400"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Sparkles className="w-5 h-5" />
                      <span className="font-semibold">You're on the list! 🎉</span>
                    </motion.div>
                  )}
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                >
                  <motion.a
                    href="https://www.linkedin.com/company/vynlox/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 hover:bg-pos-100 px-8 py-4 text-lg font-bold text-white rounded-full shadow-2xl transition-all duration-500 group transform hover:scale-105"
                    whileHover={{ 
                      boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Connect on LinkedIn
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <motion.footer 
            className="p-6 text-center text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <p>© 2025 Vynlox. Building the future, one pixel at a time.</p>
          </motion.footer>
        </div>

        <CookieConsent />

        {/* Enhanced Styles */}
        <style jsx global>{`
          @keyframes gradient-x {
            0%, 100% {
              background-size: 200% 200%;
              background-position: left center;
            }
            50% {
              background-size: 200% 200%;
              background-position: right center;
            }
          }
          
          .animate-gradient-x {
            animation: gradient-x 20s ease infinite;
            background-size: 200% 200%;
          }
          
          @keyframes pulse-glow {
            0%, 100% { 
              box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
            }
            50% { 
              box-shadow: 0 0 50px rgba(59, 130, 246, 0.8);
            }
          }
          
          .bg-size-200 {
            background-size: 200% 200%;
          }
          
          .bg-pos-0 {
            background-position: 0% 50%;
          }
          
          .bg-pos-100 {
            background-position: 100% 50%;
          }
        `}</style>
      </div>
    </>
  );
}