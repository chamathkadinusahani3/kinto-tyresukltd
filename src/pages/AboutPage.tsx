import React from 'react';
import { CheckCircle, Globe, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import heroImage from '../assets/aboutus.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KINTO TYRES UK LIMITED",
  "foundingDate": "2025",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "132, Great North Road",
    "addressLocality": "Hatfield",
    "addressRegion": "Hertfordshire",
    "postalCode": "AL9 5JN",
    "addressCountry": "GB"
  },
  "email": "info@kinto-tyres.co.uk",
  "telephone": ["+44-7886-686142", "+44-1707-912085"],
  "url": "https://kinto-tyres.co.uk",
  "description": "KINTO Tyres UK Ltd brings high-quality, affordable Japanese KINTO Tyres to drivers across the United Kingdom."
};

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About KINTO TYRES UK - Japanese Quality & Excellence</title>
        <meta name="description" content="Learn about KINTO TYRES UK LIMITED. Established in 2025, we bring premium Japanese tyre technology to the UK. Located in Hatfield, Hertfordshire. Quality, safety, and performance guaranteed." />
        <meta name="keywords" content="kinto tyres uk, about kinto, japanese tyre brand, tyre company uk, hatfield tyres, tyre quality, japanese engineering" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kinto-tyres.co.uk/about" />
        <meta property="og:title" content="About KINTO TYRES UK - Japanese Quality & Excellence" />
        <meta property="og:description" content="KINTO Tyres UK Ltd brings high-quality, affordable Japanese tyres to the UK. Quality, safety, and performance." />
        <meta property="og:image" content="https://kinto-tyres.co.uk/og-image.jpg" />
        
        <link rel="canonical" href="https://kinto-tyres.co.uk/about" />
        
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      <div className="bg-[#0A0A0A] min-h-screen">
        <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="About KINTO Tyres UK - Japanese tyre excellence"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative z-10 text-center max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              About KINTO Tyres UK Ltd
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-200"
            >
              KINTO Tyres UK Ltd brings high-quality, affordable Japanese KINTO Tyres to drivers across
              the United Kingdom, ensuring safety, performance, and peace of mind on every journey.
            </motion.p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6">Our Company</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              <strong>Registered Office:</strong> 132 Great North Road, Hatfield, England, AL9 5JN
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              KINTO Tyres UK Ltd is dedicated to providing high-quality tyres to drivers across the United Kingdom. We cater to everyday car owners, fleet operators, and commercial vehicle drivers, ensuring our products meet the highest global standards for safety, durability, and performance.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6">Our Brand</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              KINTO Tyres is a Japanese-owned brand with a passion for creating affordable tyres 
              without compromising on quality. Every tyre undergoes strict quality checks to ensure excellence in:
            </p>
            <ul className="text-gray-400 list-disc list-inside space-y-1 mb-4">
              <li>Wet & Dry Handling and Braking</li>
              <li>High-Speed Stability</li>
              <li>Cornering Grip</li>
              <li>Traction</li>
              <li>Aquaplaning Resistance</li>
              <li>Fuel Efficiency</li>
              <li>Durability and Long-Term Reliability</li>
            </ul>
            <p className="text-gray-400 text-lg leading-relaxed">
              With safety, innovation, and customer confidence at the heart of everything we do, KINTO Tyres 
              is a brand drivers and partners can rely on.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-6">Vision & Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-2">
              <strong>Vision:</strong> To be the leading tyre brand in the UK, recognised for quality, innovation, and a seamless driving experience.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              <strong>Mission:</strong> To provide high-quality, safe, and reliable tyres through a nationwide dealer network, ensuring drivers can access the best products and services easily and confidently.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Certificates & Accreditations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { code: 'ECE', desc: 'Economic Commission of Europe' },
                { code: 'DOT', desc: 'Department Of Transportation, United States' },
                { code: 'CCC', desc: 'China Compulsory Certificate' },
                { code: 'TISI', desc: 'Thai Industrial Standards Institute' },
                { code: 'GSO', desc: 'GCC Standardization Organization' },
                { code: 'SASO', desc: 'The Saudi Standards, Metrology and Quality Organization' },
                { code: 'PS', desc: 'Philippine Standard Quality and/or Safety Mark' },
                { code: 'VR', desc: 'Vietnam Register Quality and Safety Management' }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-b from-[#1A1A1A] to-[#111111] rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold mb-2">{cert.code}</h3>
                  <p className="text-gray-400 text-sm">{cert.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

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
    </>
  );
}