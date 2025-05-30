'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const validatePhone = (phone: string) => {
    // Australian phone number format: +61 or 0 followed by 9 digits
    const phoneRegex = /^(\+61|0)[0-9]{9}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user types
  };

  const handleSubmit = async () => {
    setError('');
    
    // Validate email
    if (!formData.email) {
      setError('Email is required');
      return;
    }

    // Validate name
    if (!formData.name) {
      setError('Name is required');
      return;
    }

    // Validate phone
    if (!formData.phone) {
      setError('Phone number is required');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid Australian phone number');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/capture-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          purpose: 'homepage_newsletter',
          country: 'Australia',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setShowSuccess(true);
      setFormData({ email: '', name: '', phone: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(124,58,237,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(167,139,250,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stay Ahead with <span className="bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">AI Insights</span>
            </h2>
            <p className="text-xl text-gray-300">
              Get weekly tips, case studies, and exclusive workshop invites delivered straight to your inbox.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4 justify-center items-center"
          >
            {showSuccess ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-3 text-emerald-400 bg-emerald-400/10 px-6 py-4 rounded-lg"
              >
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium text-lg">
                  🎉 Thanks for subscribing! Check your email for confirmation.
                </span>
              </motion.div>
            ) : (
              <>
                <div className="w-full max-w-md space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-6 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    className="w-full px-6 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone (e.g., 0412345678)"
                    className="w-full px-6 py-4 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                  />
                </div>
                
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-2 rounded-lg"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>{error}</span>
                  </motion.div>
                )}
                
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !formData.email || !formData.name || !formData.phone}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full max-w-md px-8 py-4 bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Subscribe Now
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-sm text-gray-400"
          >
            Join 1000+ founders already receiving our weekly insights. Unsubscribe anytime.
          </motion.p>
        </div>
      </div>
    </section>
  );
} 