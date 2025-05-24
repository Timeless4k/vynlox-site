'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, FileText, HelpCircle, Bot, Zap, X, Play, Sparkles, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';

export default function SystemProof(): JSX.Element {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [hoveredDemo, setHoveredDemo] = useState<string | null>(null);
  const [animationStep, setAnimationStep] = useState(0);

  const demos = [
    {
      id: 'chatbot',
      title: 'AI Chatbot',
      description: 'Intelligent conversations that convert visitors into leads',
      icon: MessageSquare,
      color: 'from-fuchsia-500 to-purple-500',
      gradient: 'bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20',
      stats: { response: '< 2s', satisfaction: '94%', conversion: '+47%' },
      features: ['Natural Language Processing', '24/7 Availability', 'Lead Qualification', 'Multi-language Support']
    },
    {
      id: 'intake',
      title: 'Smart Intake',
      description: 'Automated form processing that saves 80% of manual work',
      icon: FileText,
      color: 'from-purple-500 to-indigo-500',
      gradient: 'bg-gradient-to-br from-purple-500/20 to-indigo-500/20',
      stats: { accuracy: '99.2%', time: '15min', efficiency: '+80%' },
      features: ['Document Processing', 'Smart Routing', 'Data Validation', 'Integration Ready']
    },
    {
      id: 'quiz',
      title: 'AI Quiz Engine',
      description: 'Interactive qualification that increases engagement by 3x',
      icon: HelpCircle,
      color: 'from-indigo-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-indigo-500/20 to-cyan-500/20',
      stats: { engagement: '+312%', completion: '89%', quality: '+156%' },
      features: ['Adaptive Questions', 'Real-time Scoring', 'Custom Logic', 'Analytics Dashboard']
    }
  ];

  const demoContent = {
    chatbot: {
      messages: [
        { role: 'user', content: "Hi, I'm interested in your services" },
        { role: 'bot', content: "Great! I'd love to help you find the perfect solution. What's your main challenge right now?" },
        { role: 'user', content: "We need to automate our customer support" },
        { role: 'bot', content: "Perfect! Our AI chatbot can handle 80% of inquiries automatically. Would you like to see a demo tailored to your industry?" }
      ]
    },
    intake: {
      steps: [
        { title: 'Document Upload', status: 'completed', time: '2s' },
        { title: 'Data Extraction', status: 'completed', time: '5s' },
        { title: 'Validation & Routing', status: 'processing', time: '3s' },
        { title: 'Integration', status: 'pending', time: '-' }
      ]
    },
    quiz: {
      question: "What's your biggest business challenge?",
      options: ['Lead Generation', 'Customer Support', 'Process Automation', 'Data Analysis'],
      progress: 60
    }
  };

  useEffect(() => {
    if (activeDemo) {
      const interval = setInterval(() => {
        setAnimationStep(prev => (prev + 1) % 4);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [activeDemo]);

  const renderDemoContent = () => {
    if (!activeDemo) return null;

    switch (activeDemo) {
      case 'chatbot':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400">Live Demo</span>
            </div>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {demoContent.chatbot.messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.5 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs p-3 rounded-lg ${
                    msg.role === 'user' 
                      ? 'bg-fuchsia-500 text-white' 
                      : 'bg-gray-700 text-gray-100'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4" />
                Response: {demos.find(d => d.id === 'chatbot')?.stats.response}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Users className="w-4 h-4" />
                Satisfaction: {demos.find(d => d.id === 'chatbot')?.stats.satisfaction}
              </div>
            </div>
          </div>
        );

      case 'intake':
        return (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-lg font-medium text-white">Processing Document...</span>
            </div>
            <div className="space-y-3">
              {demoContent.intake.steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.3 }}
                  className="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    {step.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : step.status === 'processing' ? (
                      <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-500 rounded-full" />
                    )}
                    <span className="text-white">{step.title}</span>
                  </div>
                  <span className="text-sm text-gray-400">{step.time}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-center gap-2 text-green-400 mb-2">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">99.2% Accuracy Achieved</span>
              </div>
              <p className="text-sm text-gray-300">Document processed and routed automatically</p>
            </div>
          </div>
        );

      case 'quiz':
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-lg font-medium text-white">AI-Powered Quiz</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
                <motion.div 
                  className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${demoContent.quiz.progress}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <p className="text-sm text-gray-400 mb-6">Question 3 of 5</p>
            </div>
            
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl text-white mb-4">{demoContent.quiz.question}</h3>
              <div className="space-y-3">
                {demoContent.quiz.options.map((option, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-3 text-left bg-gray-600 hover:bg-gray-500 rounded-lg text-white transition-colors"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span>Engagement: +312%</span>
              <span>•</span>
              <span>Completion: 89%</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full text-fuchsia-400 text-sm mb-4"
          >
            <Bot className="w-4 h-4" />
            Live Demo Systems
          </motion.div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-fuchsia-200 to-purple-200 mb-4">
            Built With the Same Stack We Offer You
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience our AI-powered solutions in action. Each demo runs on the exact same technology we'll build for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onHoverStart={() => setHoveredDemo(demo.id)}
              onHoverEnd={() => setHoveredDemo(null)}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="relative"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 ${demo.gradient} rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative bg-[#18181B] border border-gray-700 group-hover:border-gray-600 rounded-xl p-6 transition-all duration-300">
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${demo.color} flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <demo.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">{demo.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{demo.description}</p>

                  {/* Stats */}
                  <div className="space-y-2 mb-6">
                    {Object.entries(demo.stats).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-500 capitalize">{key}:</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Demo Button */}
                  <motion.button
                    onClick={() => setActiveDemo(demo.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${demo.color} text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <Play className="w-4 h-4" />
                    Launch Demo
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>

                  {/* Features List */}
                  <AnimatePresence>
                    {hoveredDemo === demo.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-gray-700"
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {demo.features.map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2 text-xs text-gray-400"
                            >
                              <CheckCircle className="w-3 h-3 text-green-400" />
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Demo Modal */}
        <AnimatePresence>
          {activeDemo && (
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
                className="bg-gray-800 rounded-2xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${demos.find(d => d.id === activeDemo)?.color} flex items-center justify-center`}>
                      {(() => {
                        const demo = demos.find(d => d.id === activeDemo);
                        return demo?.icon && <demo.icon className="w-6 h-6 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {demos.find(d => d.id === activeDemo)?.title} Demo
                      </h3>
                      <p className="text-gray-400">
                        {demos.find(d => d.id === activeDemo)?.description}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setActiveDemo(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Demo Content */}
                <div className="bg-gray-900 rounded-xl p-6 min-h-[400px]">
                  {renderDemoContent()}
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    This is a live preview of your potential system
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
                  >
                    Get Your Custom Demo
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}