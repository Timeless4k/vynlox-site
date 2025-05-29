'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white font-display tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Vynlox
            </span>
            <br />
            Coming Soon
          </h1>
          
          <p className="text-xl text-gray-300 mb-8">
            We're building something special. Join our waitlist to be the first to know when we launch.
          </p>

          <div className="space-y-4">
            <motion.a
              href="https://www.linkedin.com/company/vynlox/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 text-lg font-bold text-white rounded-lg shadow-xl transition-all duration-300 group"
            >
              Connect on LinkedIn
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <div className="flex items-center justify-center space-x-4 text-gray-400">
              <Mail className="w-5 h-5" />
              <a href="mailto:helpme@vynlox.com" className="hover:text-white transition-colors">
                helpme@vynlox.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }

        .animate-pulse {
          animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
} 