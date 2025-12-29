import React from 'react';
import { NewsCard } from '../components/NewsCard';
import { motion } from 'framer-motion';
import launch from "../assets/launch.png";
import heroImage from "../assets/news.png"; // ✅ Hero image

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export function NewsPage() {
  const newsItems = [
    {
      id: '1',
      title: 'KINTO UK LIMITED Launching',
      date: 'January 2026',
      image: launch,
      excerpt: 'KINTO UK Limited is a tyre distribution company specializing in wholesale import and supply of quality tyres to the UK market.'
    }
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="News Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            News & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            The latest stories, product announcements, and automotive insights from the world of KINTO.
          </motion.p>
        </div>
      </div>

      {/* ================= NEWS CARDS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsItems.map(item => (
            <NewsCard key={item.id} {...item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
