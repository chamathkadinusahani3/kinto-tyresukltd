import React, { useState } from 'react';
import { Search, Car, Gauge, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type SearchMode = 'registration' | 'size';

interface SearchResult {
  width: string;
  profile: string;
  diameter: string;
  brand: string;
  model: string;
  price: number;
}

export function TyreSearchHero() {
  const [searchMode, setSearchMode] = useState<SearchMode>('registration');
  const [registration, setRegistration] = useState('');
  const [postcode, setPostcode] = useState('');
  const [width, setWidth] = useState('');
  const [profile, setProfile] = useState('');
  const [diameter, setDiameter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Validation functions
  const validateRegistration = (reg: string): boolean => {
    // UK registration format validation
    const regPattern = /^[A-Z]{2}[0-9]{2}\s?[A-Z]{3}$|^[A-Z][0-9]{1,3}[A-Z]{3}$/;
    return regPattern.test(reg);
  };

  const validatePostcode = (pc: string): boolean => {
    // UK postcode validation
    const postcodePattern = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]?\s?[0-9][A-Z]{2}$/;
    return postcodePattern.test(pc);
  };

  // API call simulation - replace with your actual API
  const searchByRegistration = async (reg: string, pc: string) => {
    try {
      setIsLoading(true);
      setError('');

      // Validation
      if (!validateRegistration(reg)) {
        throw new Error('Please enter a valid UK registration number');
      }

      if (pc && !validatePostcode(pc)) {
        throw new Error('Please enter a valid UK postcode');
      }

      // Replace this with your actual API call
      const response = await fetch('/api/tyres/search-by-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ registration: reg, postcode: pc }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch tyre data');
      }

      const data = await response.json();
      setSearchResults(data.results);
      
      // Redirect to results page or show results
      window.location.href = `/search-results?reg=${reg}${pc ? `&postcode=${pc}` : ''}`;
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const searchBySize = async (w: string, p: string, d: string, pc: string) => {
    try {
      setIsLoading(true);
      setError('');

      // Validation
      if (!w || !p || !d) {
        throw new Error('Please select width, profile, and diameter');
      }

      if (pc && !validatePostcode(pc)) {
        throw new Error('Please enter a valid UK postcode');
      }

      // Replace this with your actual API call
      const response = await fetch('/api/tyres/search-by-size', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          width: w, 
          profile: p, 
          diameter: d,
          postcode: pc 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch tyre data');
      }

      const data = await response.json();
      setSearchResults(data.results);
      
      // Redirect to results page or show results
      window.location.href = `/search-results?width=${w}&profile=${p}&diameter=${d}${pc ? `&postcode=${pc}` : ''}`;
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    setError('');
    
    if (searchMode === 'registration') {
      searchByRegistration(registration, postcode);
    } else {
      searchBySize(width, profile, diameter, postcode);
    }
  };

  // Common tyre sizes for dropdowns
  const widths = ['175', '185', '195', '205', '215', '225', '235', '245', '255', '265', '275', '285', '295', '305'];
  const profiles = ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'];
  const diameters = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22'];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A]" />

      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect Tyres
          </h2>
          <p className="text-gray-400 text-lg">
            Search by registration number or tyre size
          </p>
        </motion.div>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] rounded-3xl border border-[#2A2A2A] shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          {/* Tab Switcher */}
          <div className="relative flex border-b border-[#2A2A2A]">
            <button
              onClick={() => {
                setSearchMode('registration');
                setError('');
              }}
              className={`flex-1 relative px-8 py-6 text-center transition-colors duration-300 ${
                searchMode === 'registration' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                <Car className="w-5 h-5" />
                <span className="font-semibold">By Registration</span>
              </div>
            </button>
            <button
              onClick={() => {
                setSearchMode('size');
                setError('');
              }}
              className={`flex-1 relative px-8 py-6 text-center transition-colors duration-300 ${
                searchMode === 'size' ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <div className="flex items-center justify-center gap-3">
                <Gauge className="w-5 h-5" />
                <span className="font-semibold">By Tyre Size</span>
              </div>
            </button>

            {/* Animated indicator */}
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-600 to-red-400"
              initial={false}
              animate={{
                x: searchMode === 'registration' ? '0%' : '100%',
                width: '50%'
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30
              }}
            />
          </div>

          {/* Search Content */}
          <div className="p-8 md:p-12">
            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-400"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {searchMode === 'registration' ? (
                <motion.div
                  key="registration"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="relative group">
                    <input
                      type="text"
                      value={registration}
                      onChange={(e) => setRegistration(e.target.value.toUpperCase())}
                      placeholder="Enter UK Registration Number"
                      className="w-full px-6 py-5 bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-2xl text-white text-lg placeholder-gray-600 focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-600/20 transition-all duration-300 group-hover:border-[#333]"
                      maxLength={8}
                      disabled={isLoading}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-red-600/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  
                  <div className="relative group">
                    <input
                      type="text"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                      placeholder="Postcode"
                      className="w-full px-6 py-5 bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-2xl text-white text-lg placeholder-gray-600 focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-600/20 transition-all duration-300 group-hover:border-[#333]"
                      maxLength={8}
                      disabled={isLoading}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-red-600/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Example: AB12 CDE or AB12CDE
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="size"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Width */}
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Width (mm)
                      </label>
                      <select
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="w-full px-4 py-4 bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-xl text-white appearance-none cursor-pointer focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-600/20 transition-all duration-300 group-hover:border-[#333]"
                        disabled={isLoading}
                      >
                        <option value="" className="bg-[#1A1A1A]">Select</option>
                        {widths.map((w) => (
                          <option key={w} value={w} className="bg-[#1A1A1A]">{w}</option>
                        ))}
                      </select>
                      <div className="absolute inset-0 rounded-xl bg-red-600/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Profile */}
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Profile (%)
                      </label>
                      <select
                        value={profile}
                        onChange={(e) => setProfile(e.target.value)}
                        className="w-full px-4 py-4 bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-xl text-white appearance-none cursor-pointer focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-600/20 transition-all duration-300 group-hover:border-[#333]"
                        disabled={isLoading}
                      >
                        <option value="" className="bg-[#1A1A1A]">Select</option>
                        {profiles.map((p) => (
                          <option key={p} value={p} className="bg-[#1A1A1A]">{p}</option>
                        ))}
                      </select>
                      <div className="absolute inset-0 rounded-xl bg-red-600/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Diameter */}
                    <div className="relative group">
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Diameter (in)
                      </label>
                      <select
                        value={diameter}
                        onChange={(e) => setDiameter(e.target.value)}
                        className="w-full px-4 py-4 bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-xl text-white appearance-none cursor-pointer focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-600/20 transition-all duration-300 group-hover:border-[#333]"
                        disabled={isLoading}
                      >
                        <option value="" className="bg-[#1A1A1A]">Select</option>
                        {diameters.map((d) => (
                          <option key={d} value={d} className="bg-[#1A1A1A]">{d}</option>
                        ))}
                      </select>
                      <div className="absolute inset-0 rounded-xl bg-red-600/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Postcode 
                    </label>
                    <input
                      type="text"
                      value={postcode}
                      onChange={(e) => setPostcode(e.target.value.toUpperCase())}
                      placeholder="Enter postcode"
                      className="w-full px-6 py-4 bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-xl text-white placeholder-gray-600 focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-600/20 transition-all duration-300 group-hover:border-[#333]"
                      maxLength={8}
                      disabled={isLoading}
                    />
                    <div className="absolute inset-0 rounded-xl bg-red-600/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Example: 205/55 R16
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Search Button */}
            <motion.button
              onClick={handleSearch}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              disabled={isLoading}
              className="relative w-full mt-8 px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-2xl overflow-hidden group shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Animated glow effect */}
              {!isLoading && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              )}

              <span className="relative flex items-center justify-center gap-3">
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-6 h-6" />
                    Search Tyres
                  </>
                )}
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Real-time availability</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-600 rounded-full" />
            <span>Best price guarantee</span>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}