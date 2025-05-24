'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PlayCircle, 
  Users, 
  Calendar, 
  FileText, 
  Cog, 
  TrendingUp, 
  ArrowRight, 
  Clock, 
  CheckCircle, 
  Sparkles,
  Zap,
  Target,
  Rocket,
  BarChart3
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Attend Workshop',
    description: 'Learn how AI can transform your workflow in our free workshop',
    icon: Users,
    color: 'from-fuchsia-500 to-purple-500',
    duration: '60 min',
    outcome: 'AI Strategy Framework',
    details: [
      'Identify automation opportunities',
      'Learn no-code AI tools',
      'See real business transformations',
      'Get personalized recommendations'
    ]
  },
  {
    number: '02',
    title: 'Book Strategy Audit',
    description: 'Get a personalized blueprint for your AI automation',
    icon: Calendar,
    color: 'from-purple-500 to-indigo-500',
    duration: '90 min',
    outcome: 'Custom AI Roadmap',
    details: [
      'Deep-dive business analysis',
      'Process mapping & optimization',
      'ROI projections & timelines',
      'Technology stack planning'
    ]
  },
  {
    number: '03',
    title: 'Receive AI Agent Blueprint',
    description: 'Detailed plan of your custom AI system',
    icon: FileText,
    color: 'from-indigo-500 to-cyan-500',
    duration: '2-3 days',
    outcome: 'Technical Specification',
    details: [
      'System architecture design',
      'Integration requirements',
      'Feature specifications',
      'Implementation timeline'
    ]
  },
  {
    number: '04',
    title: 'We Build the System',
    description: 'Our team implements your AI agents using no-code tools',
    icon: Cog,
    color: 'from-cyan-500 to-emerald-500',
    duration: '2-4 weeks',
    outcome: 'Live AI System',
    details: [
      'No-code development',
      'Testing & quality assurance',
      'Training & documentation',
      'Go-live support'
    ]
  },
  {
    number: '05',
    title: 'Ongoing Optimization',
    description: 'Continuous improvements to maximize your results',
    icon: TrendingUp,
    color: 'from-emerald-500 to-teal-500',
    duration: 'Ongoing',
    outcome: 'Peak Performance',
    details: [
      'Performance monitoring',
      'Regular optimizations',
      'Feature enhancements',
      '24/7 support access'
    ]
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-4"
          >
            <Rocket className="w-4 h-4" />
            Your Journey to AI Automation
          </motion.div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From discovery to deployment, we guide you through every step of your AI transformation journey
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Enhanced Connection Line */}
            <div className="absolute left-12 top-20 bottom-20 w-1 bg-gradient-to-b from-fuchsia-500 via-purple-500 via-indigo-500 via-cyan-500 to-emerald-500 rounded-full opacity-30" />
            
            {/* Animated Progress Dots */}
            {steps.map((_, index) => (
              <motion.div
                key={`dot-${index}`}
                className="absolute left-11 w-3 h-3 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full"
                style={{ top: `${20 + (index * 160)}px` }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              />
            ))}

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative mb-16 last:mb-0"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="flex items-start gap-8">
                  {/* Step Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative flex-shrink-0"
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-xl opacity-0 transition-opacity duration-500 ${hoveredStep === index ? 'opacity-50' : ''}`} />
                    
                    <div className="relative w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center group cursor-pointer"
                         onClick={() => setActiveStep(activeStep === index ? null : index)}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                      <step.icon className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors z-10" />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gray-800 border-2 border-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-purple-400 font-bold text-sm">{step.number}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="flex-1 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 group cursor-pointer hover:border-gray-600 transition-all duration-300"
                    onClick={() => setActiveStep(activeStep === index ? null : index)}
                  >
                    {/* Card Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all duration-300">
                            {step.title}
                          </h3>
                          <motion.div
                            animate={{ rotate: activeStep === index ? 90 : 0 }}
                            className="text-gray-400 group-hover:text-white transition-colors"
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </div>
                        <p className="text-gray-400 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">{step.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Target className="w-4 h-4 text-fuchsia-400" />
                        <span className="text-gray-300">{step.outcome}</span>
                      </div>
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {activeStep === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-gray-700 pt-4 mt-4"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {step.details.map((detail, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-3"
                              >
                                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Hover Indicator */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${step.color} rounded-b-2xl`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Success Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Proven Results</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">87%</div>
                <div className="text-gray-400">Time Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-fuchsia-400 mb-2">3.2x</div>
                <div className="text-gray-400">Revenue Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">94%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 border border-fuchsia-500/20 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-fuchsia-400" />
                <span className="text-lg font-medium text-white">Ready to Transform Your Business?</span>
                <Sparkles className="w-6 h-6 text-fuchsia-400" />
              </div>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Join hundreds of businesses who've already automated their workflows and boosted productivity by up to 87%
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium flex items-center gap-3 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <PlayCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Watch the Full Process in 90 Seconds
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 border border-gray-600 hover:border-purple-500 text-gray-300 hover:text-white rounded-xl font-medium flex items-center gap-3 transition-all duration-300"
                >
                  <Zap className="w-5 h-5" />
                  Book Free Strategy Call
                </motion.button>
              </div>
            </div>

            <div className="text-sm text-gray-500">
              ⏱️ <strong>Next workshop:</strong> Tomorrow at 2 PM EST • <strong>5 spots remaining</strong>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}