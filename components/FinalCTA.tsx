'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  PlayCircle, 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Target, 
  Star, 
  Clock, 
  Users, 
  Sparkles, 
  Gift, 
  Calendar, 
  MessageSquare, 
  TrendingUp,
  Rocket,
  Brain,
  Award,
  Timer,
  Phone
} from 'lucide-react';

const paths = [
  {
    icon: HelpCircle,
    title: 'Just Exploring?',
    description: "Take our AI readiness quiz to see what's possible for your business",
    cta: 'Take the Quiz',
    color: 'from-purple-500 to-fuchsia-500',
    gradient: 'from-purple-500/20 to-fuchsia-500/20',
    accent: 'purple',
    duration: '5 min',
    benefit: 'Get personalized AI recommendations',
    stats: { completion: '92%', rating: '4.8/5' },
    features: [
      'Personalized AI roadmap',
      'Industry-specific insights',
      'Free automation ideas',
      'Implementation timeline'
    ],
    urgency: 'Free forever',
    testimonial: "This quiz opened my eyes to possibilities I never considered!"
  },
  {
    icon: PlayCircle,
    title: 'Want to Learn?',
    description: 'Join our free workshop to see AI automation in action',
    cta: 'Join Workshop',
    color: 'from-fuchsia-500 to-purple-500',
    gradient: 'from-fuchsia-500/20 to-purple-500/20',
    accent: 'fuchsia',
    duration: '60 min',
    benefit: 'See live AI automation demos',
    stats: { attendees: '2.5K+', rating: '4.9/5' },
    features: [
      'Live automation demos',
      'Q&A with experts',
      'Free templates & tools',
      'Networking opportunities'
    ],
    urgency: 'Next session: Tomorrow 2 PM',
    testimonial: "Best workshop I've attended! Saved me months of research."
  },
  {
    icon: Target,
    title: 'Ready to Build?',
    description: 'Book your strategy audit and get your AI blueprint',
    cta: 'Book Your Audit',
    color: 'from-indigo-500 to-cyan-500',
    gradient: 'from-indigo-500/20 to-cyan-500/20',
    accent: 'indigo',
    duration: '90 min',
    benefit: 'Custom AI implementation plan',
    stats: { success: '94%', roi: '340%' },
    features: [
      'Custom AI strategy',
      'Implementation roadmap',
      'ROI projections',
      '30-day action plan'
    ],
    urgency: 'Limited: 7 spots this week',
    testimonial: "Worth every penny. ROI was visible within 2 weeks!"
  }
];

const floatingElements = [
  { icon: Sparkles, delay: 0, duration: 3 },
  { icon: Star, delay: 1, duration: 4 },
  { icon: Zap, delay: 2, duration: 3.5 },
  { icon: Rocket, delay: 0.5, duration: 4.5 },
];

export default function FinalCTA() {
  const [hoveredPath, setHoveredPath] = useState<number | null>(null);
  const [selectedPath, setSelectedPath] = useState<number | null>(null);
  const [showTestimonial, setShowTestimonial] = useState<number | null>(null);

  // Auto-cycle testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTestimonial(prev => {
        const next = prev === null ? 0 : (prev + 1) % paths.length;
        return next;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute text-purple-400/20"
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              delay: element.delay,
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
          >
            <element.icon className="w-6 h-6" />
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6"
          >
            <Rocket className="w-4 h-4" />
            Choose Your Path to AI Success
          </motion.div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 mb-6">
            Let's Get You Started
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Whether you're just curious or ready to transform your business, 
            we have the perfect next step for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
              onHoverStart={() => setHoveredPath(index)}
              onHoverEnd={() => setHoveredPath(null)}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative h-full"
              >
                {/* Enhanced Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${path.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative bg-[#18181B] border border-gray-700 group-hover:border-gray-600 rounded-2xl p-8 h-full transition-all duration-300">
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${path.color} flex items-center justify-center shadow-lg relative overflow-hidden`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                    >
                      <path.icon className="w-8 h-8 text-white z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                    
                    {/* Duration Badge */}
                    <div className="bg-gray-800 border border-gray-600 rounded-full px-3 py-1 text-gray-300 text-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {path.duration}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 transition-all duration-300">
                    {path.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {path.description}
                  </p>

                  {/* Benefit Highlight */}
                  <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-lg">
                    <div className="flex items-center gap-2 text-emerald-400 mb-2">
                      <Gift className="w-4 h-4" />
                      <span className="font-medium text-sm">What You Get</span>
                    </div>
                    <p className="text-emerald-300 text-sm">{path.benefit}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {path.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.1 }}
                        className="flex items-center gap-3 text-sm text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm">
                    {Object.entries(path.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-white font-semibold">{value}</div>
                        <div className="text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Urgency */}
                  <div className="mb-6 flex items-center gap-2 text-sm">
                    <Timer className="w-4 h-4 text-orange-400" />
                    <span className="text-orange-400 font-medium">{path.urgency}</span>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full bg-gradient-to-r ${path.color} text-white font-medium py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mb-4`}
                  >
                    {index === 0 && <Brain className="w-5 h-5" />}
                    {index === 1 && <Users className="w-5 h-5" />}
                    {index === 2 && <Phone className="w-5 h-5" />}
                    {path.cta}
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  {/* Testimonial */}
                  <AnimatePresence>
                    {showTestimonial === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-gray-700 pt-4"
                      >
                        <div className="flex items-start gap-3">
                          <MessageSquare className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-gray-300 text-sm italic">
                              "{path.testimonial}"
                            </p>
                            <div className="flex items-center gap-1 mt-2">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover Accent Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${path.color} rounded-b-2xl`}
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">500+ Success Stories</div>
                <div className="text-gray-400 text-sm">Proven track record</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">4.9/5 Rating</div>
                <div className="text-gray-400 text-sm">Client satisfaction</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-white font-semibold">340% Avg ROI</div>
                <div className="text-gray-400 text-sm">Measurable results</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final Encouragement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-fuchsia-400" />
              <span className="text-lg font-medium text-white">Still Not Sure?</span>
              <Sparkles className="w-6 h-6 text-fuchsia-400" />
            </div>
            <p className="text-gray-400 mb-6">
              Every successful founder started with a single step. The question isn't whether AI will transform your industry — it's whether you'll be leading the change or catching up.
            </p>
            <div className="text-sm text-purple-300">
              💡 <strong>Pro tip:</strong> Start with the quiz if you're unsure. It takes 5 minutes and costs nothing but could save you months of guesswork.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}