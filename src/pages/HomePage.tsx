// HomePage.tsx - Updated with SEO
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Award, Zap, Car, Truck, Bus, Mountain } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { NewsCard } from '../components/NewsCard';
import { TyreSearchHero } from '../components/TyreSearchHero';
import { motion } from 'framer-motion';
import passenger from "../assets/home/passenger.png";
import lighttruck from "../assets/home/lighttruck.png";
import truckbus from "../assets/home/truckbus.png";
import offroad from "../assets/home/offroad.png";
import EV from "../assets/home/EV.png";
import launch from "../assets/launch.png";
import heroCarImg from '../assets/hero.png';
import { AnimatePresence } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};



// Validate UK postcode format
function validateUKPostcode(postcode: string): boolean {
  const postcodeRegex = /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i;
  return postcodeRegex.test(postcode.trim());
}

// Format postcode to standard format
function formatPostcode(postcode: string): string {
  const cleaned = postcode.replace(/\s/g, '').toUpperCase();
  if (cleaned.length < 5) return postcode;
  return cleaned.slice(0, -3) + ' ' + cleaned.slice(-3);
}

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "KINTO TYRES UK LIMITED",
  "alternateName": "KINTO UK",
  "url": "https://kinto-tyres.co.uk",
  "logo": "https://kinto-tyres.co.uk/logo.png",
  "description": "Leading Japanese tyre brand providing high-quality tyres for passenger cars, trucks, and commercial vehicles across the UK.",
  "foundingDate": "2025",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "132, Great North Road",
    "addressLocality": "Hatfield",
    "addressRegion": "Hertfordshire",
    "postalCode": "AL9 5JN",
    "addressCountry": "GB"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+44-7886-686142",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "GB"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+44-1707-912085",
      "contactType": "sales",
      "availableLanguage": "English",
      "areaServed": "GB"
    }
  ],
  "email": "info@kinto-tyres.co.uk"
};

// LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  "name": "KINTO TYRES UK LIMITED",
  "image": "https://kinto-tyres.co.uk/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "132, Great North Road",
    "addressLocality": "Hatfield",
    "addressRegion": "Hertfordshire",
    "postalCode": "AL9 5JN",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.7632,
    "longitude": -0.2217
  },
  "url": "https://kinto-tyres.co.uk",
  "telephone": "+44-7886-686142",
  "email": "info@kinto-tyres.co.uk",
  "priceRange": "££",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  }
};

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, localBusinessSchema]
};

export function HomePage() {
  const [postcode, setPostcode] = React.useState("");
  const [postcodeError, setPostcodeError] = React.useState("");
  const navigate = useNavigate();

  const productCategories = [
    {
      id: 'passenger-suv',
      name: 'Passenger Car',
      icon: Car,
      image: passenger,
    },
    {
      id: 'light-truck',
      name: 'Light Truck',
      icon: Truck,
      image: lighttruck,
    },
    {
      id: 'truck-bus',
      name: 'Truck & Bus',
      icon: Bus,
      image: truckbus
    },
    {
      id: 'off-road',
      name: 'Off-The-Road',
      icon: Mountain,
      image: offroad
    },
    {
      id: 'ev-tyres',
      name: 'Electric Vehicle',
      icon: Mountain,
      image: EV
    }
  ];

  const newsItems = [
    {
      id: '1',
      title: 'KINTO UK LIMITED Launching',
      date: 'January 2026',
      image: launch,
      excerpt: 'KINTO UK Limited is a tyre distribution company specializing in wholesale import and supply of quality tyres to the UK market.'
    },
  ];

  const handleDealerSearch = () => {
    setPostcodeError('');
    const trimmedPostcode = postcode.trim();

    if (!trimmedPostcode) {
      setPostcodeError('Please enter a postcode');
      return;
    }

    if (!validateUKPostcode(trimmedPostcode)) {
      setPostcodeError('Please enter a valid UK postcode (e.g., W1D 2HG)');
      return;
    }

    const formattedPostcode = formatPostcode(trimmedPostcode);
    navigate(`/dealers?postcode=${encodeURIComponent(formattedPostcode)}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleDealerSearch();
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>KINTO TYRES UK - Premium Japanese Tyres | Open 7 Days | Mobile Fitting</title>
        <meta name="description" content="Leading Japanese tyre brand in the UK. Premium quality tyres for all vehicles. 2-year warranty, mobile fitting available, open 7 days including Sunday. Professional fitting nationwide." />
        <meta name="keywords" content="kinto tyres uk, japanese tyres uk, premium tyres, truck tyres uk, passenger car tyres, 7 days open, sunday open, mobile fitting, tyre warranty uk, affordable car tyres" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kinto-tyres.co.uk" />
        <meta property="og:title" content="KINTO TYRES UK - Premium Japanese Tyres" />
        <meta property="og:description" content="Leading Japanese tyre brand in the UK. Premium quality tyres for all vehicles. 2-year warranty, open 7 days." />
        <meta property="og:image" content="https://kinto-tyres.co.uk/og-image.jpg" />
        <meta property="og:site_name" content="KINTO TYRES UK" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kinto-tyres.co.uk" />
        <meta property="twitter:title" content="KINTO TYRES UK - Premium Japanese Tyres" />
        <meta property="twitter:description" content="Leading Japanese tyre brand in the UK. Premium quality tyres for all vehicles." />
        <meta property="twitter:image" content="https://kinto-tyres.co.uk/og-image.jpg" />
        
        {/* Additional */}
        <link rel="canonical" href="https://kinto-tyres.co.uk" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(combinedSchema)}
        </script>
      </Helmet>

      <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
        <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">

  {/* Video Layer */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <iframe
      title="Kinto Tyres Background Video"
      src="https://www.youtube.com/embed/wZrNo51FK_0?autoplay=1&mute=1&controls=0&rel=0&showinfo=0&cc_load_policy=0&enablejsapi=1&loop=1&playlist=wZrNo51FK_0"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      className="pointer-events-none absolute
        md:top-[-220px] md:left-1/2 md:w-[1920px] md:h-[1080px] md:-translate-x-1/2 md:scale-[1.15]
        top-[-120px] left-1/2 w-[1400px] h-[788px] -translate-x-1/2 scale-[0.9]"
    />
  </div>

  {/* Black overlay */}
  <div className="absolute inset-0 z-10 bg-black/70" />

  {/* Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="max-w-2xl">

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
      >
        A Leading Tyre Brand
        <br />
        from Japan
      </motion.h1>

      {/* First paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed max-w-xl"
      >
        It all starts with our passion for innovation, developing
        superior-quality tyres under Japanese engineering.
      </motion.p>

      

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button href="/products" className="text-lg px-8 py-4">
          View Products
        </Button>
        <Button
          href="/about"
          variant="outline"
          className="text-white border-white hover:bg-white/10 text-lg px-8 py-4"
        >
          Learn More
        </Button>
      </motion.div>

    </div>
  </div>

  

</section>

      
        {/* Hero Section 1 - Static Image */}
        <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
          
          <div className="absolute inset-0 z-0">
  {/* Yellow radial glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-yellow/20 via-transparent to-transparent" />

  {/* FIXED background image */}
  <div
    className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-fixed mix-blend-overlay"
    style={{ backgroundImage: `url(${heroCarImg})` }}
  />

  {/* Dark gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
</div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center min-h-screen">
  <div className="max-w-2xl text-center">
    <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
  style={{ color: "#FF0000" }}
>
  Enjoy 2 Years and
  <br />
  50,000 KM Warranty
</motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed max-w-xl mx-auto"
    >
      At KINTO Tyres, we begin with a passion for innovation, crafting superior-quality tyres through Japanese engineering.
    </motion.p>
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto"
    >
      We continually push the boundaries of performance, safety, and quality—striving to be the ideal road companion for every journey.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      
      <Button
        href="/warranty"
        variant="outline"
        className="text-white border-white hover:bg-white/10 text-lg px-8 py-4"
      >
        Learn More
      </Button>
    </motion.div>
  </div>
</div>
        </section>

        {/* Tyre Search Section */}
        <section>
          <AnimatePresence>
            <motion.div>
              <TyreSearchHero />
            </motion.div>
          </AnimatePresence>

          {/* Buy Online Section */}
          <div className="bg-[#ff0000] text-black rounded-xl shadow-lg p-12 text-center my-8 mx-4 sm:mx-6 lg:mx-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              BUY ONLINE <span className="block">and get fitted</span>
            </h2>
            <p className="mb-6 text-lg md:text-xl text-white">
              Order your tyres online and get them fitted at a location near you.
            </p>
            <Button
              as="a"
              href="https://nutyre.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-[#ff0000] hover:bg-gray-900 hover:text-[#ff0000] px-6 py-3 rounded-lg font-semibold transition"
            >
              Learn More
            </Button>
          </div>
        </section>
 {/* products */}
       <section className="py-20 bg-black text-white">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold"
        >
          OUR PRODUCTS
        </motion.h2>
        <div className="w-16 h-1 bg-red-600 mx-auto mt-2"></div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mt-4"
        >
          Comprehensive tyre solutions for every vehicle type and driving condition
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-6 md:px-20">
        {productCategories.map((category) => (
          <motion.div
            key={category.id}
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative group cursor-pointer overflow-hidden rounded-xl border border-[#000000] hover:border-black transition-all duration-300"
          >
            <Link to="/products" className="block">
              <img
                src={category.image}
                alt={`${category.name} KINTO tyres - Premium Japanese quality`}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                <h3 className="font-bold text-lg">
                  {category.name} <span className="text-red-600">»</span>
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>


       {/* Become Dealer + Distributor Section */}
<div className="flex flex-col lg:flex-row gap-6 my-8 mx-4 sm:mx-6 lg:mx-8">
  {/* Become a Dealer */}
  <div className="flex-1 bg-[#c80000] text-white rounded-xl shadow-lg p-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      BECOME A DEALER <span className="block ">Join our dealer network</span>
    </h2>
    <p className="mb-6 text-lg md:text-xl text-black">
      Join our dealer network and grow your business.
    </p>
    <Button
      as="a"
      href="/dealer-registration" // Link to Dealer form page
      className="bg-black text-[#ff0000] hover:bg-gray-900 hover:text-[#ff0000] px-6 py-3 rounded-lg font-semibold transition"
    >
      Apply Now
    </Button>
  </div>
 
  {/* Become a Distributor */}
  <div className="flex-1 bg-[#c80000] text-white rounded-xl shadow-lg p-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      BECOME A DISTRIBUTOR <span className="block">Join our global network</span>
    </h2>
    <p className="mb-6 text-lg md:text-xl text-black">
      Apply now to become an authorized partner and distribute KINTO Tyres in Europe region.
    </p>
    <Button
      as="a"
      href="/distributor-registration" // Link to Distributor form page
      className="bg-black text-[#ff0000] hover:bg-gray-900 hover:text-[#ff0000] px-6 py-3 rounded-lg font-semibold transition"
    >
      Apply Now
    </Button>
  </div>
</div> 

    

        {/* Dealer Search Section */}
        <section className="py-8 md:py-12 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-black text-[#ff0000] rounded-xl shadow-lg p-8 md:p-12 text-center border border-[#2A2A2A]">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Search Your Nearest Dealer
              </h2>
              <p className="mb-6 text-lg text-white">
                Enter your UK postcode to find authorized KINTO dealers near you.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-start gap-4 max-w-md mx-auto">
                <div className="w-full md:flex-1">
                  <input
                    type="text"
                    placeholder="e.g., W1D 2HG"
                    value={postcode}
                    onChange={(e) => {
                      setPostcode(e.target.value.toUpperCase());
                      setPostcodeError('');
                    }}
                    onKeyPress={handleKeyPress}
                    className={`p-3 rounded-lg text-black w-full ${
                      postcodeError ? 'border-2 border-red-500' : ''
                    }`}
                    maxLength={8}
                    aria-label="Enter UK postcode"
                  />
                  {postcodeError && (
                    <p className="text-red-400 text-sm mt-2 text-left">
                      {postcodeError}
                    </p>
                  )}
                </div>
                <Button
                  onClick={handleDealerSearch}
                  className="bg-red-600 text-white hover:bg-red-500 px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap"
                >
                  Find Dealers
                </Button>
              </div>
            </div>
          </div>
        </section>




        {/* Why KINTO Tyres */}
        <section className="py-16 md:py-24 bg-[#111111]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why KINTO Tyres
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Experience the difference of Japanese engineering excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 text-center hover:border-brand-red transition-colors"
              >
                <div className="bg-gradient-to-br from-brand-red/20 to-brand-red/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-red">
                  <Award className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Premium Branding</h3>
                <p className="text-gray-400 leading-relaxed">
                  Recognized globally for superior quality and performance
                  standards that exceed industry expectations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 text-center hover:border-brand-red transition-colors"
              >
                <div className="bg-gradient-to-br from-brand-red/20 to-brand-red/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-red/20">
                  <Shield className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">2-Year or 50,000 KM Warranty</h3>
                <p className="text-gray-400 leading-relaxed">
                  Comprehensive coverage that demonstrates our confidence in the
                  durability and reliability of every tyre.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 text-center hover:border-brand-red/30 transition-colors"
              >
                <div className="bg-gradient-to-br from-brand-red/20 to-brand-red/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-red/20">
                  <Zap className="w-10 h-10 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Japanese Technology</h3>
                <p className="text-gray-400 leading-relaxed">
                  Advanced engineering and precision manufacturing that delivers
                  exceptional performance in all conditions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>




        {/* News Section */}
        <section className="py-16 md:py-24 bg-[#0A0A0A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex justify-between items-end mb-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Newsroom</h2>
                <p className="text-gray-400 max-w-2xl">
                  Latest product launches and announcements from KINTO Tyres
                </p>
              </div>
              <Link
                to="/news"
                className="hidden md:flex items-center text-brand-red font-medium hover:underline"
              >
                View More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
            >
              {newsItems.map(item => (
                <NewsCard key={item.id} {...item} />
              ))}
            </motion.div>

            <div className="text-center md:hidden">
              <Link
                to="/news"
                className="inline-flex items-center text-brand-red font-semibold hover:underline text-lg"
              >
                View More <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}