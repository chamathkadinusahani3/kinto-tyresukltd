import React, { useState } from 'react';
import { Search, AlertCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { searchTyresBySize, Product } from '../data/productsData';
import tyreSizeGuide from "../assets/tyre-size-guide.png";

export function TyreSearchHero() {
  const [width, setWidth] = useState('');
  const [profile, setProfile] = useState('');
  const [diameter, setDiameter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  const searchBySize = async (w: string, p: string, d: string) => {
    try {
      setIsLoading(true);
      setError('');
      setHasSearched(false);

      if (!w || !p || !d) {
        throw new Error('Please select width, profile, and diameter');
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));

      // Search products
      const results = searchTyresBySize(w, p, d);
      
      setSearchResults(results);
      setHasSearched(true);

      if (results.length === 0) {
        setError(`No tyres found for size ${w}/${p}R${d}. Try another size.`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    setError('');
    searchBySize(width, profile, diameter);
  };

  const handleReset = () => {
    setWidth('');
    setProfile('');
    setDiameter('');
    setSearchResults([]);
    setHasSearched(false);
    setError('');
  };

  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  const widths = ['175', '185', '195', '205', '215', '225', '235', '245', '255', '265', '275', '285', '295', '305'];
  const profiles = ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'];
  const diameters = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#111] to-[#0A0A0A] py-12">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Perfect Tyres
          </h2>
          <p className="text-gray-400 text-lg">Search by tyre size</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] rounded-3xl border border-[#2A2A2A] shadow-2xl overflow-hidden backdrop-blur-xl p-8 md:p-12"
        >
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-xl flex items-center gap-3 text-red-400"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm flex-1">{error}</span>
                <button onClick={() => setError('')} className="hover:text-red-300">
                  <X className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid g rid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative group">
              <label className="block text-sm font-medium text-gray-400 mb-2">Width (mm)</label>
              <select
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className="w-full px-4 py-4 bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-xl text-white appearance-none cursor-pointer focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-600/20 transition-all duration-300 group-hover:border-[#333]"
                disabled={isLoading}
              >
                <option value="">Select</option>
                {widths.map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>

            <div className="relative group">
              <label className="block text-sm font-medium text-gray-400 mb-2">Profile (%)</label>
              <select
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
                className="w-full px-4 py-4 bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-xl text-white appearance-none cursor-pointer focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-600/20 transition-all duration-300 group-hover:border-[#333]"
                disabled={isLoading}
              >
                <option value="">Select</option>
                {profiles.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div className="relative group">
              <label className="block text-sm font-medium text-gray-400 mb-2">Diameter (in)</label>
              <select
                value={diameter}
                onChange={(e) => setDiameter(e.target.value)}
                className="w-full px-4 py-4 bg-[#0A0A0A] border-2 border-[#2A2A2A] rounded-xl text-white appearance-none cursor-pointer focus:border-red-600 focus:outline-none focus:ring-4 focus:ring-red-600/20 transition-all duration-300 group-hover:border-[#333]"
                disabled={isLoading}
              >
                <option value="">Select</option>
                {diameters.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={handleSearch}
              disabled={isLoading || !width || !profile || !diameter}
              className="relative flex-1 px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative flex items-center justify-center gap-3">
                {isLoading ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-6 h-6" />
                    Search Tyres
                  </>
                )}
              </span>
            </button>

            {(width || profile || diameter || hasSearched) && (
              <button
                onClick={handleReset}
                className="px-6 py-5 bg-[#2A2A2A] text-white font-bold text-lg rounded-2xl hover:bg-[#333] transition-all duration-300"
              >
                Reset
              </button>
            )}
          </div>

          {/* Tyre Size Guide */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className="mt-16"
        >
          <div className="bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] rounded-2xl border border-[#2A2A2A] overflow-hidden shadow-2xl">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-brand-red/10 p-3 rounded-lg border border-brand-red/20">
                  <svg
                    className="w-6 h-6 text-brand-red"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    How to Read Tyre Size
                  </h3>
                  <p className="text-sm text-gray-400">
                    Example guide to help you identify tyre size numbers on your
                    tyre
                  </p>
                </div>
              </div>

              <div className="relative rounded-xl overflow-hidden bg-white/5 border border-[#2A2A2A]">
                <img
                  src={tyreSizeGuide}
                  alt="Tyre size guide showing W (Width), P (Profile), and R (Diameter) markings on a tyre"
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0A0A0A] rounded-lg p-4 border border-[#2A2A2A]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-sm">
                      W
                    </div>
                    <span className="text-white font-semibold">Width</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Tyre width in millimeters (e.g., 205)
                  </p>
                </div>

                <div className="bg-[#0A0A0A] rounded-lg p-4 border border-[#2A2A2A]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-sm">
                      P
                    </div>
                    <span className="text-white font-semibold">Profile</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Aspect ratio as percentage (e.g., 55)
                  </p>
                </div>

                <div className="bg-[#0A0A0A] rounded-lg p-4 border border-[#2A2A2A]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-sm">
                      R
                    </div>
                    <span className="text-white font-semibold">Diameter</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Rim diameter in inches (e.g., 17)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </motion.div>
      </section>

      

     {/* Results Section */}
{hasSearched && (
  <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
>
  <motion.section
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.9, opacity: 0 }}
    className="w-full max-w-5xl bg-[#1A1A1A] rounded-2xl shadow-2xl relative p-6 overflow-y-auto max-h-[90vh]"
  >
    {/* Close Button */}
    <button
      onClick={() => setHasSearched(false)}
      className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition-colors z-10"
    >
      ✕
    </button>

    {/* Header */}
    <div className="mb-6 text-center">
      <h2 className="text-3xl font-bold text-white mb-2">Search Results</h2>
      <p className="text-gray-400">
        Showing tyres for size: {width}/{profile}R{diameter} ({searchResults.length} {searchResults.length === 1 ? 'result' : 'results'})
      </p>
    </div>

    {/* Results */}
    {searchResults.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A] hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/10 cursor-pointer group"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="aspect-square bg-[#0A0A0A] overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-2 py-1 text-xs font-semibold text-red-400 bg-red-900/20 rounded-full mb-2">
                {product.category.replace('-', ' ').toUpperCase()}
              </span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {product.tagline}
              </p>
              {product.priceRange && (
                <p className="text-lg font-bold text-red-600 mb-4">
                  {product.priceRange}
                </p>
              )}
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">
                  Size: {width}/{profile}R{diameter}
                </span>
                <button className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ) : (
      // No Results
      <div className="text-center py-12 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A]">
        <AlertCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400 text-lg mb-4">
          No tyres found for size {width}/{profile}R{diameter}
        </p>
        <p className="text-gray-500 text-sm mb-6">
          Try adjusting your search criteria or browse all products
        </p>
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
        >
          Browse All Products
        </button>
      </div>
    )}
  </motion.section>
</motion.div>

)}

    </div>
  );
}