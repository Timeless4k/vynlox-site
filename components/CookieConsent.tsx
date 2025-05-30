'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

// Add type declarations for Google Analytics
declare global {
  interface Window {
    'ga-disable-G-8C6E5WQEKH'?: boolean;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

type CookieConsent = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

const defaultConsent: CookieConsent = {
  necessary: true, // Always true as these are essential
  analytics: false,
  marketing: false,
  preferences: false,
};

// Migration function to handle old cookie consent format
const migrateOldConsent = (savedConsent: string): CookieConsent => {
  try {
    // Try to parse as JSON first
    return JSON.parse(savedConsent) as CookieConsent;
  } catch {
    // If parsing fails, it's the old format
    if (savedConsent === 'accepted') {
      return {
        necessary: true,
        analytics: true,
        marketing: true,
        preferences: true,
      };
    } else {
      return {
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false,
      };
    }
  }
};

type CookieConsentProps = {
  forceShowPreferences?: boolean;
  onClose?: () => void;
};

// Helper to check if GA script is already loaded
function isGAScriptLoaded() {
  return !!document.querySelector('script[src*="googletagmanager.com/gtag/js?id=G-8C6E5WQEKH"]');
}

// Helper to inject GA script
function injectGAScript() {
  if (isGAScriptLoaded()) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-8C6E5WQEKH';
  document.head.appendChild(script);
  if (!window.dataLayer) window.dataLayer = [];
  function gtag(){window.dataLayer!.push(arguments);}
  window.gtag = gtag;
  window.gtag('js', new Date());
  window.gtag('config', 'G-8C6E5WQEKH');
}

// Helper to remove GA script
function removeGAScript() {
  const script = document.querySelector('script[src*="googletagmanager.com/gtag/js?id=G-8C6E5WQEKH"]');
  if (script) script.remove();
  // Optionally clear dataLayer and gtag
  window.dataLayer = [];
  window.gtag = undefined;
}

export default function CookieConsent({ forceShowPreferences = false, onClose }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(forceShowPreferences);
  const [consent, setConsent] = useState<CookieConsent>(defaultConsent);

  useEffect(() => {
    if (forceShowPreferences) {
      setShowBanner(true);
      setShowPreferences(true);
      return;
    }
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem('cookieConsent');
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      const parsedConsent = migrateOldConsent(savedConsent);
      setConsent(parsedConsent);
      updateAnalytics(parsedConsent.analytics);
    }
  }, [forceShowPreferences]);

  // Reload consent from localStorage whenever preferences panel is opened
  useEffect(() => {
    if (showPreferences) {
      const savedConsent = localStorage.getItem('cookieConsent');
      if (savedConsent) {
        const parsedConsent = migrateOldConsent(savedConsent);
        setConsent(parsedConsent);
      }
    }
  }, [showPreferences]);

  const updateAnalytics = (enabled: boolean) => {
    if (enabled) {
      window['ga-disable-G-8C6E5WQEKH'] = false;
      injectGAScript();
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    } else {
      window['ga-disable-G-8C6E5WQEKH'] = true;
      removeGAScript();
      // Clear existing GA cookies
      document.cookie.split(';').forEach(cookie => {
        if (cookie.trim().startsWith('_ga=') || cookie.trim().startsWith('_gid=')) {
          document.cookie = cookie.trim() + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        }
      });
    }
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(consent));
    updateAnalytics(consent.analytics);
    setShowBanner(false);
    setShowPreferences(false);
    if (onClose) onClose();
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setConsent(allAccepted);
    handleSavePreferences();
  };

  const handleRejectAll = () => {
    const allRejected = {
      necessary: true, // Necessary cookies can't be rejected
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setConsent(allRejected);
    handleSavePreferences();
  };

  const handleToggle = (type: keyof CookieConsent) => {
    if (type === 'necessary') return; // Can't toggle necessary cookies
    setConsent(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-[#1E293B] border-t border-gray-700 p-4 z-50"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {!showPreferences ? (
              // Initial banner
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-gray-300 text-sm">
                  <p>
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. 
                    You can customize your preferences in our{' '}
                    <button 
                      onClick={() => setShowPreferences(true)}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Cookie Settings
                    </button>
                    {' '}or read our{' '}
                    <a 
                      href="/terms#section-8" 
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Cookie Policy
                    </a>.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={handleRejectAll}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
                  >
                    Accept All
                  </button>
                </div>
              </div>
            ) : (
              // Preferences panel
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Cookie Preferences</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Necessary Cookies</h4>
                      <p className="text-sm text-gray-400">Required for the website to function properly</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={consent.necessary}
                        disabled
                        className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Analytics Cookies</h4>
                      <p className="text-sm text-gray-400">Help us understand how visitors interact with our website</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={consent.analytics}
                        onChange={() => handleToggle('analytics')}
                        className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Marketing Cookies</h4>
                      <p className="text-sm text-gray-400">Used to track visitors across websites for marketing purposes</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={consent.marketing}
                        onChange={() => handleToggle('marketing')}
                        className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-white">Preference Cookies</h4>
                      <p className="text-sm text-gray-400">Remember your settings and preferences</p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={consent.preferences}
                        onChange={() => handleToggle('preferences')}
                        className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-purple-600 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-4 pt-4">
                  <button
                    onClick={() => {
                      setShowPreferences(false);
                      if (forceShowPreferences && onClose) onClose();
                      if (!forceShowPreferences) setShowBanner(false);
                    }}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 