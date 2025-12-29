import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    // Check if user has already accepted cookies
    const accepted = localStorage.getItem('kinto-cookies-accepted');
    if (!accepted) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);
  const handleAccept = () => {
    localStorage.setItem('kinto-cookies-accepted', 'true');
    setIsVisible(false);
  };
  return <AnimatePresence>
      {isVisible && <motion.div initial={{
      y: 100,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} exit={{
      y: 100,
      opacity: 0
    }} transition={{
      duration: 0.5
    }} className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-[#2A2A2A] shadow-[0_-4px_20px_-1px_rgba(0,0,0,0.3)] z-50 p-4 md:p-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex-1 mr-4">
              <p className="text-sm text-gray-300">
                We use cookies to improve your experience and analyze site
                traffic. By continuing to use our site, you accept our cookie
                policy.
              </p>
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <button onClick={() => setIsVisible(false)} className="text-sm text-gray-400 hover:text-white underline transition-colors">
                Decline
              </button>
              <button onClick={handleAccept} className="bg-[#D31E2A] text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-[#B01820] transition-colors whitespace-nowrap flex-1 sm:flex-none shadow-glow">
                Accept Cookies
              </button>
            </div>
          </div>
        </motion.div>}
    </AnimatePresence>;
}