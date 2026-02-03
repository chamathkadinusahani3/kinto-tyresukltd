import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';


interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  advertising: boolean;
}

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
    functional: false,
    advertising: false
  });

  useEffect(() => {
    // Check if user has already accepted cookies
    const accepted = localStorage.getItem('kinto-cookies-accepted');
    if (!accepted) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(accepted);
        if (typeof saved === 'object') {
          setPreferences(saved);
          applyCookiePreferences(saved);
        }
      } catch (e) {
        // Old format, just keep it
      }
    }
  }, []);

  // Listen for cookie settings event from footer
  useEffect(() => {
    const handleOpenSettings = () => {
      setIsVisible(true);
      setShowSettings(true);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // Apply Google Analytics
    if (prefs.analytics && typeof window !== 'undefined') {
      enableGoogleAnalytics();
    } else {
      disableGoogleAnalytics();
    }

    // Apply advertising cookies
    if (prefs.advertising && typeof window !== 'undefined') {
      enableAdvertising();
    } else {
      disableAdvertising();
    }
  };

  const enableGoogleAnalytics = () => {
    // Initialize Google Analytics if not already done
    if (!(window as any).gtag) {
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'; // Replace with your GA ID
      script.async = true;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).gtag = function() {
        (window as any).dataLayer.push(arguments);
      };
      (window as any).gtag('js', new Date());
      (window as any).gtag('config', 'GA_MEASUREMENT_ID'); // Replace with your GA ID
    }
  };

  const disableGoogleAnalytics = () => {
    if ((window as any).gtag) {
      (window as any)['ga-disable-GA_MEASUREMENT_ID'] = true; // Replace with your GA ID
    }
  };

  const enableAdvertising = () => {
    // Initialize Facebook Pixel or other advertising pixels
    if (!(window as any).fbq) {
      (window as any).fbq = function() {
        ((window as any).fbq.q = (window as any).fbq.q || []).push(arguments);
      };
      (window as any).fbq.loaded = true;
      const script = document.createElement('script');
      script.src = 'https://connect.facebook.net/en_US/fbevents.js';
      script.async = true;
      document.head.appendChild(script);
      (window as any).fbq('init', 'YOUR_PIXEL_ID'); // Replace with your Pixel ID
      (window as any).fbq('track', 'PageView');
    }
  };

  const disableAdvertising = () => {
    // Clear advertising cookies
    document.cookie.split(';').forEach(cookie => {
      const name = cookie.split('=')[0].trim();
      if (name.startsWith('_fb') || name.startsWith('fr')) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    });
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('kinto-cookies-accepted', JSON.stringify(prefs));
    localStorage.setItem('kinto-cookies-date', new Date().toISOString());
    applyCookiePreferences(prefs);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      functional: true,
      advertising: true
    };
    setPreferences(allAccepted);
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const rejected = {
      necessary: true, // Always true
      analytics: false,
      functional: false,
      advertising: false
    };
    setPreferences(rejected);
    savePreferences(rejected);
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot toggle necessary cookies
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Main Cookie Banner */}
      <AnimatePresence>
        {isVisible && !showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-[#2A2A2A] shadow-[0_-4px_20px_-1px_rgba(0,0,0,0.3)] z-50 p-4 md:p-6"
          >
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm text-gray-300 mb-2">
                    We use cookies to improve your experience, analyze site traffic, and serve personalized content. 
                    By clicking "Accept All", you consent to our use of cookies.
                  </p>
                  <p className="text-xs text-gray-500">
                    Read our{' '}
                    <Link to="/cookie-policy" className="text-[#D31E2A] hover:underline">
                      Cookie Policy
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy-policy" className="text-[#D31E2A] hover:underline">
                      Privacy Policy
                   </Link>
                  </p>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto flex-wrap md:flex-nowrap">
                  <button
                    onClick={handleRejectAll}
                    className="text-sm text-gray-400 hover:text-white underline transition-colors"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="bg-[#2A2A2A] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#333] transition-colors whitespace-nowrap flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Customize
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="bg-[#D31E2A] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#B01820] transition-colors whitespace-nowrap shadow-glow flex items-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Accept All
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setShowSettings(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#2A2A2A]">
                  <h2 className="text-2xl font-bold text-white">Cookie Preferences</h2>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  Manage your cookie preferences below. You can enable or disable different types of cookies.
                </p>

                {/* Cookie Categories */}
                <div className="space-y-4 mb-6">
                  <CookieToggle
                    title="Strictly Necessary Cookies"
                    description="Essential for the website to function. These cookies enable core features like security, network management, and accessibility. They cannot be disabled."
                    enabled={preferences.necessary}
                    onChange={() => {}}
                    disabled={true}
                    required={true}
                  />

                  <CookieToggle
                    title="Analytics Cookies"
                    description="Help us understand how visitors interact with our website by collecting and reporting information anonymously (e.g., Google Analytics)."
                    enabled={preferences.analytics}
                    onChange={() => togglePreference('analytics')}
                  />

                  <CookieToggle
                    title="Functional Cookies"
                    description="Enable enhanced functionality and personalization, such as remembering your language preferences and region selection."
                    enabled={preferences.functional}
                    onChange={() => togglePreference('functional')}
                  />

                  <CookieToggle
                    title="Advertising Cookies"
                    description="Used to deliver relevant advertisements and track the effectiveness of advertising campaigns (e.g., Facebook Pixel, Google Ads)."
                    enabled={preferences.advertising}
                    onChange={() => togglePreference('advertising')}
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#2A2A2A]">
                  <button
                    onClick={handleSaveCustom}
                    className="bg-[#D31E2A] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#B01820] transition-colors shadow-glow flex-1"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="bg-[#2A2A2A] text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-[#333] transition-colors flex-1"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="text-gray-400 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors flex-1"
                  >
                    Reject All
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface CookieToggleProps {
  title: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
  disabled?: boolean;
  required?: boolean;
}

function CookieToggle({ title, description, enabled, onChange, disabled, required }: CookieToggleProps) {
  return (
    <div className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg p-4 hover:border-[#333] transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="text-white font-semibold">{title}</h4>
            {required && (
              <span className="text-xs bg-[#D31E2A]/20 text-[#D31E2A] px-2 py-0.5 rounded">
                Required
              </span>
            )}
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
        
        <button
          onClick={onChange}
          disabled={disabled}
          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#D31E2A] focus:ring-offset-2 focus:ring-offset-[#1A1A1A] ${
            enabled ? 'bg-[#D31E2A]' : 'bg-gray-600'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          role="switch"
          aria-checked={enabled}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
              enabled ? 'translate-x-5' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    </div>
  );
}