'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, PlayCircle, Clock, Shield, DollarSign, Users, Zap, Timer } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(167,139,250,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1e1b4b]/5 to-transparent opacity-50" />
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 py-20 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Social proof badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-3 mb-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full"
          >
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full border-2 border-gray-800" />
              ))}
            </div>
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">100+ founders building with AI</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-space-grotesk font-bold mb-6 leading-tight"
          >
            You Don't Need a Team to <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">Scale</span> — You Need a <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">Smarter System.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Automate your workflow with AI agents built using advanced automation tools. No technical skills required.
          </motion.p>

          {/* Value proposition pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { icon: Clock, text: "48-hour setup" },
              { icon: DollarSign, text: "ROI in 30 days" },
              { icon: Shield, text: "AI automation guarantee" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-800/30 backdrop-blur-sm rounded-full border border-gray-700">
                <item.icon className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 btn-primary overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Join the Free AI Workshop
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-purple-500"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 border-2 border-gray-700 rounded-lg text-white font-medium text-lg hover:border-[#A78BFA] hover:bg-[#A78BFA]/10 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                See What We Can Build Together
              </span>
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <a href="#audit" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Skip to Audit Offer — Save $250 Today
            </a>
          </motion.div>

          {/* Urgency indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center justify-center gap-2 text-orange-400"
          >
            <Timer className="w-4 h-4 animate-pulse" />
            <span className="text-sm">⚡ Only 7 spots left this month</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 text-gray-400 text-sm"
          >
            No devs needed. Just real results — fast.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}