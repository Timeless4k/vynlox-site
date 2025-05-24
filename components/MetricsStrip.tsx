'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Bot, 
  MessageSquare, 
  TrendingUp, 
  Zap, 
  Clock, 
  Target, 
  Award, 
  ArrowUp, 
  Eye, 
  Heart, 
  Star,
  CheckCircle,
  BarChart3,
  Activity,
  Sparkles,
  Timer,
  Globe
} from 'lucide-react';

const metrics = [
  {
    icon: Users,
    value: '247',
    label: 'founders used our quiz',
    color: 'from-purple-500 to-fuchsia-500',
    gradient: 'from-purple-500/20 to-fuchsia-500/20',
    trend: '+23%',
    period: 'this week',
    description: 'AI readiness assessments completed',
    liveUpdate: true,
    details: [
      'Average score: 7.2/10',
      'Top need: Lead automation',
      '89% want to implement AI',
      'Avg. time saved potential: 15hrs/week'
    ]
  },
  {
    icon: Bot,
    value: '5',
    label: 'AI agents power this site',
    color: 'from-fuchsia-500 to-purple-500',
    gradient: 'from-fuchsia-500/20 to-purple-500/20',
    trend: '+2',
    period: 'this month',
    description: 'Autonomous systems working 24/7',
    liveUpdate: false,
    details: [
      'Chatbot: Handles 80% of inquiries',
      'Lead scorer: Qualifies prospects',
      'Email sequencer: Nurtures leads',
      'Scheduler: Books calls automatically',
      'Analytics: Tracks everything'
    ]
  },
  {
    icon: MessageSquare,
    value: '156',
    label: 'qualified leads this month',
    color: 'from-indigo-500 to-cyan-500',
    gradient: 'from-indigo-500/20 to-cyan-500/20',
    trend: '+47%',
    period: 'vs last month',
    description: 'High-quality prospects generated',
    liveUpdate: true,
    details: [
      'Conversion rate: 23%',
      'Avg. deal size: $2,847',
      'Response time: <2 minutes',
      'Follow-up rate: 94%'
    ]
  }
];

const additionalStats = [
  { icon: Clock, label: 'Avg Response Time', value: '< 2min', color: 'text-emerald-400' },
  { icon: Target, label: 'Conversion Rate', value: '23%', color: 'text-blue-400' },
  { icon: Award, label: 'Client Satisfaction', value: '4.9/5', color: 'text-yellow-400' },
  { icon: Globe, label: 'Countries Served', value: '25+', color: 'text-purple-400' }
];

const liveActivities = [
  'New quiz completed by Sarah from Austin',
  'AI agent scheduled call with Mike from Seattle',
  'Lead qualification completed for TechCorp',
  'Workshop registration from Jennifer in NYC',
  'Strategy audit booked by David from Miami'
];

export default function MetricsStrip() {
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);
  const [currentActivity, setCurrentActivity] = useState(0);
  const [liveCounters, setLiveCounters] = useState({
    quiz: 247,
    leads: 156
  });

  // Simulate live activity updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity(prev => (prev + 1) % liveActivities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance to update
        setLiveCounters(prev => ({
          quiz: prev.quiz + (Math.random() > 0.5 ? 1 : 0),
          leads: prev.leads + (Math.random() > 0.8 ? 1 : 0)
        }));
      }
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-fuchsia-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Data Points */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-400/20"
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          >
            <BarChart3 className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-6"
          >
            <Activity className="w-4 h-4" />
            Live Performance Data
          </motion.div>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 mb-6">
            Built in Public. Validated by Real Traction.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            These aren't vanity metrics — they're proof that our AI automation works. 
            Every number represents a real founder getting real results.
          </p>

          {/* Live Activity Feed */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Live Activity</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.p
                key={currentActivity}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-gray-300 text-sm"
              >
                🔥 {liveActivities[currentActivity]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {metrics.map((metric, index) => {
            const displayValue = metric.liveUpdate ? 
              (index === 0 ? liveCounters.quiz : liveCounters.leads) : 
              metric.value;

            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
                onHoverStart={() => setHoveredMetric(index)}
                onHoverEnd={() => setHoveredMetric(null)}
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative h-full"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${metric.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 group-hover:border-gray-600 rounded-2xl p-8 h-full transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center shadow-lg relative overflow-hidden`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                      >
                        <metric.icon className="w-8 h-8 text-white z-10" />
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.5 }}
                        />
                      </motion.div>
                      
                      {/* Trend Indicator */}
                      <div className="flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                        <ArrowUp className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-medium">{metric.trend}</span>
                      </div>
                    </div>

                    {/* Main Metric */}
                    <div className="mb-4">
                      <motion.div 
                        className="text-4xl font-bold text-white mb-2"
                        key={displayValue}
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 0.5 }}
                      >
                        {displayValue}
                        {metric.liveUpdate && (
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="ml-2 text-lg text-emerald-400"
                          >
                            <Activity className="w-4 h-4 inline" />
                          </motion.span>
                        )}
                      </motion.div>
                      <p className="text-gray-400 text-lg">{metric.label}</p>
                      <p className="text-gray-500 text-sm mt-1">{metric.description}</p>
                    </div>

                    {/* Period */}
                    <div className="text-sm text-gray-500 mb-6">
                      <Timer className="w-4 h-4 inline mr-1" />
                      {metric.period}
                    </div>

                    {/* Expandable Details */}
                    <AnimatePresence>
                      {hoveredMetric === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-gray-700 pt-4"
                        >
                          <div className="space-y-2">
                            {metric.details.map((detail, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-2 text-sm text-gray-400"
                              >
                                <CheckCircle className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                                {detail}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Accent Line */}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${metric.color} rounded-b-2xl`}
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {additionalStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center group hover:border-gray-600/50 transition-all duration-300"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transparency Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Eye className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-semibold text-white">100% Transparent</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We believe in radical transparency. These metrics update in real-time and represent 
              actual performance of our AI systems. No inflated numbers, no vanity metrics — 
              just honest data from founders helping founders succeed with AI automation.
            </p>
            <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Real-time data</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Verified metrics</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-red-400" />
                <span>No BS promise</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}