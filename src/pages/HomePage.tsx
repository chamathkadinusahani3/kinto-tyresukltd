import React, { Children, Component } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Zap, Car, Truck, Bus, Mountain } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { NewsCard } from '../components/NewsCard';
import { TyreSearchHero } from '../components/TyreSearchHero';
import { motion } from 'framer-motion';
import passenger from "../assets/passenger.png";
import lighttruck from "../assets/lighttruck.png";
import truckbus from "../assets/truckbus.png";
import offroad from "../assets/offroad.png";
import launch from "../assets/launch.png";
import heroCarImg from '../assets/hero.png';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function HomePage() {
   const [postcode, setPostcode] = React.useState("");
  const productCategories = [
    {
      id: 'passenger-suv',
      name: 'Passenger & SUV',
      icon: Car,
      image:passenger,
    },
    {
      id: 'light-truck',
      name: 'Light Truck',
      icon: Truck,
      image:lighttruck,
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
   const handleDealerSearch = () => {               // <-- Add this
    if (!postcode) {
      alert("Please enter a postcode");
      return;
    }
    window.open("https://nutyre.co.uk/find-a-fitter", "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
  
  {/* YouTube Video Background */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <iframe
      className="absolute top-1/2 left-1/2 w-[120%] h-[180%] -translate-x-1/2 -translate-y-1/2 scale-110 pointer-events-none"
      src="https://www.youtube.com/embed/wZrNo51FK_0?autoplay=1&mute=1&loop=1&playlist=wZrNo51FK_0&controls=0&showinfo=0&rel=0"
      title="KINTO Tyres Hero Video"
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowFullScreen
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div className="max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-4"
      >
        <span className="inline-block px-4 py-2 bg-brand-[#ff0000] border border-brand-[#ff0000] rounded-full text-brand-red text-sm font-semibold tracking-wide uppercase">
          KINTO Tyres
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
      >
        A Leading Tire Brand
        <br />
        from Japan
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed max-w-xl"
      >
        It all starts with our passion for innovation, developing
        superior-quality tires under Japanese engineering.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl"
      >
        KINTO Tyres pushes the boundaries of performance, safety, and
        quality—your ideal road companion.
      </motion.p>

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



      {/* NEW: Tyre Search Section */}
      <TyreSearchHero />

 {/* Buy Online + Dealer Search Section */}
<section className="py-16 md:py-24 px-6 max-w-7xl mx-auto flex flex-col gap-12">

  {/* Buy Online */}
  <div className="bg-[#ff0000] text-black rounded-xl shadow-lg p-12 text-center">
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
      className="bg-black text-[#ff0000] hover:bg-gray-900 hover:text-[#ff0000] px-6 py-3 rounded-lg font-semibold transition"
    >
      Learn More
    </Button>
  </div>

 
 
      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Products</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive tire solutions for every vehicle type and driving
              condition
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {productCategories.map(category => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  variants={item}
                  className="group relative overflow-hidden rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] hover:border-brand-[#ff0000] transition-all duration-300"
                >
                  <Link to="/products" className="block">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-black/50 to-transparent" />
                      <div className="absolute top-4 right-4 bg-brand-red/90 backdrop-blur-sm p-3 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors">
                        {category.name}
                      </h3>
                      <div className="flex items-center text-brand-red text-sm font-medium">
                        View Products{' '}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>


       {/* Dealer Search */}
  <div className="bg-black text-[#ff0000] rounded-xl shadow-lg p-12 text-center">
    <h3 className="text-2xl md:text-3xl font-bold mb-4">
      Search Your Nearest Dealer
    </h3>
    <p className="mb-6 text-lg text-white">
      Enter your UK postcode to find a dealer near you.
    </p>
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Enter UK postcode"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
        className="p-3 rounded-lg text-black w-full md:flex-1"
      />
      <Button
        onClick={handleDealerSearch}
        className="bg-red-600 text-black hover:bg-red-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Search
      </Button>
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
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 text-center hover:border-brand-[#ff0000] transition-colors"
            >
              <div className="bg-gradient-to-br from-brand-red/20 to-brand-red/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-[#ff0000]">
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
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 text-center hover:border-brand-[#ff0000] transition-colors"
            >
              <div className="bg-gradient-to-br from-brand-red/20 to-brand-red/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-brand-red/20">
                <Shield className="w-10 h-10 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2-Year or 50,000 KM Warranty</h3>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive coverage that demonstrates our confidence in the
                durability and reliability of every tire.
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
  );
}
