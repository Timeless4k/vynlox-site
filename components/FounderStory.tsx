'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, 
  Phone, 
  Quote, 
  Star, 
  Users, 
  TrendingUp, 
  Award, 
  Coffee,
  Clock,
  Target,
  Lightbulb,
  Rocket,
  CheckCircle,
  ArrowRight,
  Play,
  Calendar,
  MessageSquare
} from 'lucide-react';
import Image from 'next/image';

const achievements = [
  { icon: Users, label: '500+ Businesses Automated', value: '500+' },
  { icon: Clock, label: 'Hours Saved Weekly', value: '10,000+' },
  { icon: TrendingUp, label: 'Average ROI Increase', value: '340%' },
  { icon: Award, label: 'Client Satisfaction', value: '98%' }
];

const timeline = [
  {
    year: '2019',
    title: 'The Frustration Begins',
    description: 'Spent 60+ hours/week on repetitive tasks across 3 businesses',
    icon: Coffee
  },
  {
    year: '2021',
    title: 'First Automation Success',
    description: 'Built my first AI workflow, saved 20 hours/week instantly',
    icon: Lightbulb
  },
  {
    year: '2023',
    title: 'Vynlox is Born',
    description: 'Decided to help other founders escape the manual work trap',
    icon: Rocket
  },
  {
    year: '2024',
    title: 'Proven at Scale',
    description: 'Now helping 500+ businesses automate and scale efficiently',
    icon: Target
  }
];

const testimonialSnippets = [
  "Gurudeep understood our pain points immediately",
  "Finally, someone who gets what founders actually need",
  "The most practical AI solution we've implemented",
  "Saved us 25 hours per week in the first month"
];

export default function FounderStory() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonialSnippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
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
            <Quote className="w-4 h-4" />
            From Founder to Founder
          </motion.div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 mb-6">
            Built by a Founder Who Was Sick of the Hype
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No marketing fluff. No empty promises. Just real automation solutions 
            that actually work for busy founders.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Enhanced Founder Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative group">
                {/* Main Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-2xl overflow-hidden border-4 border-gray-800 group-hover:border-purple-500/50 transition-all duration-500"
                >
                  <Image
                    src="/api/placeholder/400/400"
                    alt="Gurudeep - Founder of Vynlox"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Play Button Overlay */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Floating Achievement Badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 -right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  <Star className="w-4 h-4 inline mr-1" />
                  Founder
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                >
                  500+ Clients
                </motion.div>
              </div>

              {/* Rotating Testimonials */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Quote className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-purple-400 font-medium">What Founders Say</span>
                </div>
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-white font-medium"
                  >
                    "{testimonialSnippets[activeTestimonial]}"
                  </motion.p>
                </AnimatePresence>
                <div className="flex gap-1 mt-4">
                  {testimonialSnippets.map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === activeTestimonial ? 'bg-purple-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Story Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-12 h-12 text-purple-500/30" />
                <blockquote className="text-2xl font-bold text-white leading-relaxed pl-8 relative z-10">
                  "I built Vynlox because I was tired of seeing founders waste time on manual tasks that could be automated. Our AI agents are built using the same tools we offer you — no fluff, just real results."
                </blockquote>
              </div>

              {/* Story Paragraphs */}
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  After scaling multiple businesses and hitting the same bottlenecks every time, 
                  I realized the problem wasn't unique to me. <strong className="text-white">Every founder was drowning in busywork.</strong>
                </p>
                <p>
                  I spent 2 years building automation systems for my own companies, saving 
                  hundreds of hours and boosting revenue by 340%. Then I had a revelation: 
                  <strong className="text-purple-300"> Why keep this to myself?</strong>
                </p>
                <p>
                  Vynlox was born from real frustration and proven solutions. We use the exact same 
                  AI automation tools and strategies that transformed my businesses to help other founders 
                  escape the manual work trap.
                </p>
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.a
                  href="https://linkedin.com/in/gurudeep"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#0077B5] to-[#00A0DC] rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Connect on LinkedIn
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                
                <motion.a
                  href="#book-call"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-xl text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Book Discovery Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-6 border-t border-gray-800">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm text-gray-400">Responds within 2 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm text-gray-400">4.9/5 rating</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Achievement Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                onHoverStart={() => setHoveredAchievement(index)}
                onHoverEnd={() => setHoveredAchievement(null)}
                className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center group hover:border-purple-500/50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center"
                >
                  <achievement.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-sm text-gray-400">{achievement.label}</div>
                
                {/* Hover glow */}
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 rounded-xl opacity-0 transition-opacity duration-300 ${
                  hoveredAchievement === index ? 'opacity-100' : ''
                }`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-12">The Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-fuchsia-500 rounded-full" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
                      <div className="text-purple-400 font-bold text-lg mb-2">{item.year}</div>
                      <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full flex items-center justify-center z-10">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-purple-500/10 to-fuchsia-500/10 border border-purple-500/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Like I Did?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's have a founder-to-founder conversation about your biggest time wasters 
              and how to eliminate them with AI automation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Book Your Strategy Call
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsVideoPlaying(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gray-800 rounded-2xl p-8 max-w-4xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="aspect-video bg-gray-900 rounded-xl flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <Play className="w-16 h-16 mx-auto mb-4" />
                  <p>Founder Story Video Would Play Here</p>
                </div>
              </div>
              <button
                onClick={() => setIsVideoPlaying(false)}
                className="mt-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}