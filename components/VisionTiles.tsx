'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  UserPlus, 
  Mail, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Moon,
  Users,
  MessageSquare,
  Target,
  Timer,
  BarChart3,
  Rocket
} from 'lucide-react';
import React from 'react';

const benefits = [
  {
    icon: Clock,
    title: 'Auto-reply to leads at 3AM',
    description: 'Never miss an opportunity, even while you sleep',
    color: 'from-fuchsia-500 to-purple-500',
    gradient: 'from-fuchsia-500/20 to-purple-500/20',
    accentIcon: Moon,
    stats: '24/7 Response',
    features: [
      'Instant lead capture',
      'Smart response templates',
      'Timezone optimization',
      'Priority lead routing'
    ],
    demoSteps: [
      'Lead submits form at 3:17 AM',
      'AI analyzes lead quality',
      'Personalized response sent instantly',
      'Follow-up sequence activated'
    ]
  },
  {
    icon: UserPlus,
    title: 'Onboarding flows sent automatically',
    description: 'Welcome new clients with personalized sequences',
    color: 'from-purple-500 to-indigo-500',
    gradient: 'from-purple-500/20 to-indigo-500/20',
    accentIcon: Users,
    stats: '94% Completion',
    features: [
      'Custom welcome sequences',
      'Document collection',
      'Appointment scheduling',
      'Progress tracking'
    ],
    demoSteps: [
      'New client signs contract',
      'Welcome email sent instantly',
      'Onboarding documents delivered',
      'First meeting scheduled'
    ]
  },
  {
    icon: Mail,
    title: 'Follow-ups pre-written and timed',
    description: 'Stay top of mind without lifting a finger',
    color: 'from-indigo-500 to-cyan-500',
    gradient: 'from-indigo-500/20 to-cyan-500/20',
    accentIcon: MessageSquare,
    stats: '47% More Sales',
    features: [
      'Smart timing algorithms',
      'Personalized messaging',
      'Behavior-based triggers',
      'A/B tested templates'
    ],
    demoSteps: [
      'Client interaction tracked',
      'Follow-up sequence triggered',
      'Personalized message sent',
      'Engagement measured & optimized'
    ]
  }
];

const floatingIcons = [
  { icon: Zap, delay: 0 },
  { icon: Target, delay: 0.5 },
  { icon: TrendingUp, delay: 1 },
  { icon: Rocket, delay: 1.5 },
];

export default function VisionTiles() {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [demoStep, setDemoStep] = useState(0);

  // Auto-advance demo steps
  useEffect(() => {
    if (activeDemo !== null) {
      const interval = setInterval(() => {
        setDemoStep(prev => (prev + 1) % benefits[activeDemo].demoSteps.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [activeDemo]);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-purple-500/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -100],
              x: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: item.delay,
              repeatDelay: 2
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          >
            <item.icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Your Future Reality
          </motion.div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 mb-6">
            Imagine This Happening — Without Lifting a Finger
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            While you focus on what matters most, our AI works tirelessly in the background, 
            turning every interaction into an opportunity for growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative h-full"
              >
                {/* Enhanced Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative bg-[#18181B] border border-gray-700 group-hover:border-gray-600 rounded-2xl p-8 h-full transition-all duration-300">
                  {/* Icon with Enhanced Animation */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center shadow-lg relative overflow-hidden`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      {React.createElement(benefit.icon, { className: "w-8 h-8 text-white z-10" })}
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                    
                    {/* Stats Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className="bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 text-emerald-400 text-sm font-medium"
                    >
                      {benefit.stats}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {benefit.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                        className="flex items-center gap-3 text-sm text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Demo Button */}
                  <motion.button
                    onClick={() => setActiveDemo(activeDemo === index ? null : index)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${benefit.color} text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <benefit.accentIcon className="w-4 h-4" />
                    See It In Action
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  {/* Hover Accent Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.color} rounded-b-2xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating Elements on Hover */}
                  <AnimatePresence>
                    {hoveredCard === index && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-fuchsia-400 to-purple-400 rounded-full flex items-center justify-center"
                      >
                        <Sparkles className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Demo Modal */}
        <AnimatePresence>
          {activeDemo !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setActiveDemo(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="bg-gray-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Demo Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${benefits[activeDemo].color} flex items-center justify-center`}>
                    {React.createElement(benefits[activeDemo].icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {benefits[activeDemo].title}
                    </h3>
                    <p className="text-gray-400">Live Demo Simulation</p>
                  </div>
                </div>

                {/* Demo Content */}
                <div className="bg-gray-900 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-green-400">Automation Active</span>
                  </div>

                  <div className="space-y-4">
                    {benefits[activeDemo].demoSteps.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0.3, scale: 0.95 }}
                        animate={{ 
                          opacity: i === demoStep ? 1 : 0.3,
                          scale: i === demoStep ? 1 : 0.95,
                          x: i === demoStep ? 0 : -10
                        }}
                        className={`p-4 rounded-lg transition-all duration-300 ${
                          i === demoStep 
                            ? `bg-gradient-to-r ${benefits[activeDemo].gradient} border border-purple-500/30` 
                            : 'bg-gray-800'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            i === demoStep ? 'bg-white/20' : 'bg-gray-700'
                          }`}>
                            {i < demoStep ? (
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                            ) : i === demoStep ? (
                              <Timer className="w-4 h-4 text-white animate-spin" />
                            ) : (
                              <span className="text-xs text-gray-400">{i + 1}</span>
                            )}
                          </div>
                          <span className="text-white">{step}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Demo Stats */}
                  <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-emerald-400 mb-2">
                      <BarChart3 className="w-5 h-5" />
                      <span className="font-medium">Impact Metrics</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-white font-medium">Response Time</div>
                        <div className="text-gray-300">&lt; 30 seconds</div>
                      </div>
                      <div>
                        <div className="text-white font-medium">Conversion Rate</div>
                        <div className="text-gray-300">+{47 + (activeDemo || 0) * 12}%</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-400">
                    This automation runs 24/7 without your intervention
                  </p>
                  <motion.button
                    onClick={() => setActiveDemo(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium"
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Make This Your Reality?
            </h3>
            <p className="text-gray-400 mb-6">
              Join 500+ businesses already saving 20+ hours per week with AI automation
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Start Your AI Transformation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}