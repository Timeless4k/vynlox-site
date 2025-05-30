'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EmailCapturePurpose } from '@/lib/brevo';
import { CheckCircle, X, AlertCircle } from 'lucide-react';

interface EmailCaptureProps {
  purpose: EmailCapturePurpose;
  title?: string;
  description?: string;
  buttonText?: string;
  successMessage?: string;
  className?: string;
  showCloseButton?: boolean;
  onClose?: () => void;
  additionalFields?: {
    jobTitle?: boolean;
    industry?: boolean;
    companySize?: boolean;
    interests?: boolean;
    preferredContactTime?: boolean;
    timezone?: boolean;
    message?: boolean;
    unlockCode?: boolean;
  };
}

interface FormErrors {
  email?: string;
  name?: string;
  company?: string;
  phone?: string;
  jobTitle?: string;
  industry?: string;
  companySize?: string;
  interests?: string;
  preferredContactTime?: string;
  timezone?: string;
  message?: string;
  unlockCode?: string;
}

interface FormData {
  email: string;
  name: string;
  company: string;
  phone: string;
  jobTitle: string;
  industry: string;
  companySize: string;
  interests: string;
  preferredContactTime: string;
  timezone: string;
  message: string;
  unlockCode: string;
}

const initialFormData: FormData = {
  email: '',
  name: '',
  company: '',
  phone: '',
  jobTitle: '',
  industry: '',
  companySize: '',
  interests: '',
  preferredContactTime: '',
  timezone: '',
  message: '',
  unlockCode: '',
};

export default function EmailCapture({
  purpose,
  title,
  description,
  buttonText = 'Submit',
  successMessage = 'Success! Check your email for next steps.',
  className = '',
  showCloseButton = false,
  onClose,
  additionalFields = {},
}: EmailCaptureProps) {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const ausPhoneRegex = /^(?:\+61|0)[2-4789]\d{8}$/;

    // Required fields validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else {
      const cleanNumber = formData.phone.replace(/\D/g, '');
      const internationalNumber = cleanNumber.startsWith('0') 
        ? '+61' + cleanNumber.slice(1) 
        : cleanNumber;
      
      if (!ausPhoneRegex.test(internationalNumber)) {
        newErrors.phone = 'Please enter a valid Australian phone number';
      }
    }

    // Additional fields validation
    if (additionalFields.jobTitle && !formData.jobTitle.trim()) {
      newErrors.jobTitle = 'Job title is required';
    }

    if (additionalFields.industry && !formData.industry.trim()) {
      newErrors.industry = 'Industry is required';
    }

    if (additionalFields.companySize && !formData.companySize.trim()) {
      newErrors.companySize = 'Company size is required';
    }

    if (additionalFields.interests && !formData.interests.trim()) {
      newErrors.interests = 'Interests are required';
    }

    if (additionalFields.preferredContactTime && !formData.preferredContactTime.trim()) {
      newErrors.preferredContactTime = 'Preferred contact time is required';
    }

    if (additionalFields.timezone && !formData.timezone.trim()) {
      newErrors.timezone = 'Timezone is required';
    }

    if (additionalFields.message && !formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (additionalFields.unlockCode && !formData.unlockCode.trim()) {
      newErrors.unlockCode = 'Unlock code is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
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
          ...formData,
          purpose,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit');
      }

      setShowSuccess(true);
      setFormData(initialFormData);
      setErrors({});

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        if (onClose) onClose();
      }, 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, '');
    
    // Handle Australian number formatting
    if (phoneNumber.length === 0) return '';
    
    // Format based on length
    if (phoneNumber.length <= 2) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2)}`;
    } else if (phoneNumber.length <= 8) {
      return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 6)} ${phoneNumber.slice(6)}`;
    } else {
      return `${phoneNumber.slice(0, 2)} ${phoneNumber.slice(2, 6)} ${phoneNumber.slice(6, 10)}`;
    }
  };

  if (!isMounted) {
    return null;
  }

  if (showSuccess) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex items-center justify-center gap-3 text-emerald-400"
      >
        <CheckCircle className="w-6 h-6" />
        <span className="font-medium text-lg">{successMessage}</span>
      </motion.div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {showCloseButton && onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-gray-700/50 hover:bg-gray-600/50 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          aria-label="Close form"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {(title || description) && (
        <div className="mb-6">
          {title && <h3 className="text-xl font-bold text-white mb-2">{title}</h3>}
          {description && <p className="text-gray-400">{description}</p>}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 gap-4">
          {/* Required Fields */}
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 bg-gray-800 border ${
                errors.email ? 'border-red-500' : 'border-gray-700'
              } rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <div className="flex items-center gap-1 mt-1 text-red-400 text-sm" id="email-error">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </div>
            )}
          </div>

          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`w-full px-4 py-3 bg-gray-800 border ${
                errors.name ? 'border-red-500' : 'border-gray-700'
              } rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <div className="flex items-center gap-1 mt-1 text-red-400 text-sm" id="name-error">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </div>
            )}
          </div>

          <div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company name"
              className={`w-full px-4 py-3 bg-gray-800 border ${
                errors.company ? 'border-red-500' : 'border-gray-700'
              } rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              required
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? 'company-error' : undefined}
            />
            {errors.company && (
              <div className="flex items-center gap-1 mt-1 text-red-400 text-sm" id="company-error">
                <AlertCircle className="w-4 h-4" />
                {errors.company}
              </div>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                setFormData(prev => ({
                  ...prev,
                  phone: formatted
                }));
              }}
              placeholder="04XX XXX XXX"
              className={`w-full px-4 py-3 bg-gray-800 border ${
                errors.phone ? 'border-red-500' : 'border-gray-700'
              } rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              required
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && (
              <div className="flex items-center gap-1 mt-1 text-red-400 text-sm" id="phone-error">
                <AlertCircle className="w-4 h-4" />
                {errors.phone}
              </div>
            )}
            <p className="mt-1 text-sm text-gray-400">
              Enter your Australian mobile number (e.g., 04XX XXX XXX)
            </p>
          </div>

          {/* Additional Fields */}
          {additionalFields.jobTitle && (
            <div>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job title"
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  errors.jobTitle ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                required
                aria-invalid={!!errors.jobTitle}
                aria-describedby={errors.jobTitle ? 'jobTitle-error' : undefined}
              />
              {errors.jobTitle && (
                <div className="flex items-center gap-1 mt-1 text-red-400 text-sm" id="jobTitle-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.jobTitle}
                </div>
              )}
            </div>
          )}

          {additionalFields.industry && (
            <div>
              <input
                type="text"
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                placeholder="Industry"
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  errors.industry ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                required
                aria-invalid={!!errors.industry}
                aria-describedby={errors.industry ? 'industry-error' : undefined}
              />
              {errors.industry && (
                <div className="flex items-center gap-1 mt-1 text-red-400 text-sm" id="industry-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.industry}
                </div>
              )}
            </div>
          )}

          {additionalFields.companySize && (
            <div>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  errors.companySize ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                required
                aria-invalid={!!errors.companySize}
                aria-describedby={errors.companySize ? 'companySize-error' : undefined}
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501-1000">501-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
              {errors.companySize && (
                <div className="flex items-center gap-1 mt-1 text-red-400 text-sm" id="companySize-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.companySize}
                </div>
              )}
            </div>
          )}

          {additionalFields.interests && (
            <div>
              <input
                type="text"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                placeholder="Your interests"
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  errors.interests ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                required
                aria-invalid={!!errors.interests}
                aria-describedby={errors.interests ? 'interests-error' : undefined}
              />
              {errors.interests && (
                <div className="flex items-center gap-1 mt-1 text-red-400 text-sm" id="interests-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.interests}
                </div>
              )}
            </div>
          )}

          {additionalFields.preferredContactTime && (
            <div>
              <select
                name="preferredContactTime"
                value={formData.preferredContactTime}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  errors.preferredContactTime ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                required
                aria-invalid={!!errors.preferredContactTime}
                aria-describedby={errors.preferredContactTime ? 'preferredContactTime-error' : undefined}
              >
                <option value="">Select preferred contact time</option>
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 5PM)</option>
                <option value="evening">Evening (5PM - 8PM)</option>
              </select>
              {errors.preferredContactTime && (
                <div className="flex items-center gap-1 mt-1 text-red-400 text-sm" id="preferredContactTime-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.preferredContactTime}
                </div>
              )}
            </div>
          )}

          {additionalFields.timezone && (
            <div>
              <select
                name="timezone"
                value={formData.timezone}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  errors.timezone ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                required
                aria-invalid={!!errors.timezone}
                aria-describedby={errors.timezone ? 'timezone-error' : undefined}
              >
                <option value="">Select timezone</option>
                <option value="AEST">AEST (UTC+10)</option>
                <option value="AEDT">AEDT (UTC+11)</option>
                <option value="ACST">ACST (UTC+9:30)</option>
                <option value="ACDT">ACDT (UTC+10:30)</option>
                <option value="AWST">AWST (UTC+8)</option>
              </select>
              {errors.timezone && (
                <div className="flex items-center gap-1 mt-1 text-red-400 text-sm" id="timezone-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.timezone}
                </div>
              )}
            </div>
          )}

          {additionalFields.message && (
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={4}
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  errors.message ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <div className="flex items-center gap-1 mt-1 text-red-400 text-sm" id="message-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.message}
                </div>
              )}
            </div>
          )}

          {additionalFields.unlockCode && (
            <div>
              <input
                type="text"
                name="unlockCode"
                value={formData.unlockCode}
                onChange={handleChange}
                placeholder="Unlock code"
                className={`w-full px-4 py-3 bg-gray-800 border ${
                  errors.unlockCode ? 'border-red-500' : 'border-gray-700'
                } rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                required
                aria-invalid={!!errors.unlockCode}
                aria-describedby={errors.unlockCode ? 'unlockCode-error' : undefined}
              />
              {errors.unlockCode && (
                <div className="flex items-center gap-1 mt-1 text-red-400 text-sm" id="unlockCode-error">
                  <AlertCircle className="w-4 h-4" />
                  {errors.unlockCode}
                </div>
              )}
            </div>
          )}
        </div>

        {error && (
          <div className="flex items-center gap-2 text-red-400 text-sm">
            <AlertCircle className="w-4 h-4" />
            {error}
          </div>
        )}

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Processing...
            </div>
          ) : (
            buttonText
          )}
        </motion.button>
      </form>
    </div>
  );
} 