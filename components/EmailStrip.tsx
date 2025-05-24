'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  X, 
  Clock, 
  Star, 
  Zap, 
  CheckCircle, 
  AlertCircle,
  Gift,
  Timer,
  Users,
  Sparkles,
  TrendingUp
} from 'lucide-react';

export default function EmailStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [email, setEmail] = useState('');
  const [unlockCode, setUnlockCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [codesLeft, setCodesLeft] = useState(7);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 47, seconds: 32 });
  const [currentOffer, setCurrentOffer] = useState(0);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [100, 0]);

  const offers = [
    {
      title: "Book Your AI Audit for $499",
      subtitle: "Normally $749",
      icon: Zap,
      color: "from-fuchsia-500 to-purple-500",
      accent: "text-fuchsia-400"
    },
    {
      title: "Free Strategy Session + Blueprint",
      subtitle: "Limited Time Only",
      icon: Gift,
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400"
    },
    {
      title: "90% Done-For-You Implementation",
      subtitle: "Save 20+ Hours/Week",
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-500",
      accent: "text-purple-400"
    }
  ];

  // Auto-rotate offers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer(prev => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Show/hide logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldShow = scrollPosition > window.innerHeight * 0.3;
      setIsVisible(shouldShow && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  // Simulate codes decreasing
  useEffect(() => {
    const interval = setInterval(() => {
      setCodesLeft(prev => Math.max(1, prev - Math.floor(Math.random() * 2)));
    }, 30000); // Decrease every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setCodesLeft(prev => Math.max(0, prev - 1));
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setIsDismissed(true);
    }, 3000);
  };

  if (!isVisible || isDismissed) return null;

  const currentOfferData = offers[currentOffer];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        style={{ opacity }}
        className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl"
      >
        {/* Background with gradient */}
        <div className="relative bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
          {/* Animated background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-r ${currentOfferData.color} opacity-5`} />
          
          {/* Urgency indicator bar */}
          <div className="h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 animate-pulse" />
          
          <div className="container mx-auto px-4 py-4">
            {showSuccess ? (
              // Success State
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center justify-center gap-3 text-emerald-400"
              >
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium text-lg">
                  🎉 Success! Check your email for next steps
                </span>
              </motion.div>
            ) : (
              // Main Content
              <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                {/* Left Section - Offer Details */}
                <div className="flex flex-col sm:flex-row items-center gap-4 flex-1">
                  <motion.div
                    key={currentOffer}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${currentOfferData.color} flex items-center justify-center`}>
                      <currentOfferData.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-semibold text-lg">
                          {currentOfferData.title}
                        </span>
                        <span className="text-gray-400 text-sm line-through">
                          {currentOfferData.subtitle}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Urgency Elements */}
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Timer className="w-4 h-4 text-orange-400" />
                      <span className="text-orange-400 font-medium">
                        {String(timeLeft.hours).padStart(2, '0')}:
                        {String(timeLeft.minutes).padStart(2, '0')}:
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-red-400" />
                      <span className="text-red-400 font-medium">
                        Only {codesLeft} spots left
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Section - Input Form */}
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <div className="flex gap-2">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 w-full sm:w-64 transition-all duration-300"
                    />
                    
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      value={unlockCode}
                      onChange={(e) => setUnlockCode(e.target.value)}
                      placeholder="SAVE250"
                      className="px-4 py-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 w-full sm:w-32 transition-all duration-300"
                    />
                  </div>
                  
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !email}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 bg-gradient-to-r ${currentOfferData.color} rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px] disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Claim Offer
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Dismiss Button */}
                <motion.button
                  onClick={() => setIsDismissed(true)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gray-700/50 hover:bg-gray-600/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>
            )}

            {/* Trust Indicators */}
            {!showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center justify-center gap-6 mt-3 pt-3 border-t border-gray-800/50 text-xs text-gray-400"
              >
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span>4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  <span>500+ success stories</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-blue-400" />
                  <span>Results in 7 days</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                animate={{
                  y: [0, -100],
                  x: [0, Math.random() * 50 - 25],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  repeatDelay: 2,
                }}
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: 0,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}