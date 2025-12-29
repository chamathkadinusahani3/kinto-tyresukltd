import React from 'react';
import { CheckCircle, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// ✅ IMPORT HERO IMAGE
import heroImage from '../assets/aboutus.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export function AboutPage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <img
          src={heroImage}
          alt="About KINTO Tyres"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            About KINTO Tyres UK Ltd
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            KINTO Tyres UK Ltd is a UK private limited company, established in 2025.
            We bring high-quality, affordable Japanese KINTO Tyres to drivers across the UK.
          </motion.p>
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Company Info */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Company</h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            <strong>Registered Office:</strong> 132 Great North Road, Hatfield, England, AL9 5JN
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            <strong>Company Type:</strong> Private Limited Company
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            KINTO Tyres UK Ltd is separate from KINTO UK Limited, which provides fleet and mobility
            solutions as part of the Toyota family. We are dedicated solely to providing high-quality
            tyres to UK drivers.
          </p>
        </motion.div>

        {/* Brand Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-24"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Our Brand</h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            KINTO Tyres is a Japanese brand focused on delivering safe, reliable, and affordable tyres
            for a wide range of vehicles.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Our tyres are engineered for excellent handling, durability, and performance in all
            driving conditions.
          </p>
        </motion.div>

        {/* Core Values */}
        <div>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-white mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: CheckCircle,
                title: 'Safety',
                desc: 'Every tyre is tested to ensure maximum safety and durability.'
              },
              {
                icon: Globe,
                title: 'Quality',
                desc: 'High-quality materials and strict quality control standards.'
              },
              {
                icon: Award,
                title: 'Performance',
                desc: 'Designed for comfort, stability, and superior road performance.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-brand-red" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
