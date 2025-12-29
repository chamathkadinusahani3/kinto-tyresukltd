import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Truck, Bus, Mountain, ArrowRight } from 'lucide-react';
import heroCarImg from '../assets/hero-car.png';
import passengerSuvImg from '../assets/passenger-suv.png';
import lightTruckImg from '../assets/light-truck.png';
import truckBusImg from '../assets/truck-bus.png';
import offRoadImg from '../assets/off-road.png';
import kaiju2Img from '../assets/kaiju2.png';
import rush111Img from '../assets/rush111.png';
import prestigeP07Img from '../assets/prestige-p07.png';
import passenger from "../assets/passenger.png";
import lighttruck from "../assets/lighttruck.png";
import truckbus from "../assets/truckbus.png";
import offroad from "../assets/offroad.png";
import FORZA001 from "../assets/products/passenger/FORZA001.png";
import FALCOS88 from "../assets/products/passenger/FALCOS88.png";
import V36 from "../assets/products/passenger/V36.png";
import X68 from "../assets/products/passenger/X68.png";
import SC900 from "../assets/products/passenger/SC900.png";
import SC901 from "../assets/products/passenger/SC901.png";
import ST51 from "../assets/products/passenger/ST51.png";
import ST55 from "../assets/products/passenger/ST55.png";
import SW89 from "../assets/products/passenger/SW89.png";
import KAIJU2 from "../assets/products/passenger/KAIJU2.png";
import SM5 from "../assets/products/passenger/SM5.png";
import PRESAMT from "../assets/products/lighrtruck/PRESAMT.png";
import FUERTEK99 from "../assets/products/lighrtruck/FUERTEK99.png";
import SM1 from "../assets/products/lighrtruck/SM1.png";
import KMX707 from "../assets/products/truckbus/KMX707.png";
import SLH101 from "../assets/products/truckbus/SLH101.png";
import SLH100 from "../assets/products/truckbus/SLH100.png";
import KMX700 from "../assets/products/truckbus/KMX700.png";
import KMX703 from "../assets/products/truckbus/KMX703.png";
import KMN606 from "../assets/products/truckbus/KMN606.png";
import E3L3 from "../assets/products/offroad/E3L3.png";
import G2L2 from "../assets/products/offroad/G2L2.png";
import C1 from "../assets/products/offroad/C1.png";
import R3 from "../assets/products/offroad/R3.png";
import R4 from "../assets/products/offroad/R4.png";
import L5 from "../assets/products/offroad/L5.png";
import XF336 from "../assets/products/offroad/XF336.png";
import SKS from "../assets/products/offroad/SKS.png";
import R1W from "../assets/products/offroad/R1W.png";
import XF007 from "../assets/products/offroad/XF007.png";
import XF208 from "../assets/products/offroad/XF208.png";
import KA6 from "../assets/products/offroad/KA6.png";
import R1 from "../assets/products/offroad/R1.png";
import PR1 from "../assets/products/offroad/PR1.png";



import { Button } from '../components/ui/Button';

type Category = 'passenger' | 'light-truck' | 'truck-bus' | 'off-road';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('passenger');

  const categories = [
    { id: 'passenger' as Category, name: 'Passenger Car', icon: Car },
    { id: 'light-truck' as Category, name: 'Light Truck', icon: Truck },
    { id: 'truck-bus' as Category, name: 'Truck & Bus', icon: Bus },
    { id: 'off-road' as Category, name: 'Off The Road', icon: Mountain }
  ];

  const passengerProducts = [
    {
      name: 'FORZA 001',
      tagline: 'Deliver a thrilling ride with maximum precision.',
      image: FORZA001,
    },
    {
      name: 'FALCO S88',
      tagline: 'Perfect balance of dynamic appearance and sport-oriented performance.',
      image: FALCOS88
    },
    {
      name: 'V-36',
      tagline: 'Feel the greater stability and control.',
      image: V36,
    },
    {
      name: 'X-68+',
      tagline: 'Enjoy the ultimate handling and grip.',
      image: X68,
    },
    {
      name: 'SC-900',
      tagline: 'Quieter, Safer and Smoother Journey',
      image: SC900,
    },
    {
      name: 'SC-901',
      tagline: 'Cost-effective with long endurance.',
      image: SC901,
    },
    {
      name: 'ST-51',
      tagline: 'Longevity and performance on the highway.',
      image: ST51,
    },
    {
      name: 'ST-55',
      tagline: 'Pure street performance.',
      image: ST55,
    },
    {
      name: 'SW-89',
      tagline: 'High-speed travel on snow and ice.',
      image: SW89,
    },
    {
      name: 'KAIJU-2',
      tagline: 'Meet your daily adventures on and off the road.',
      image:KAIJU2,
    },
    {
      name: 'SM-5',
      tagline: 'Balance performance over various terrains.',
      image:SM5,
    }
  ];

  const lightTruckProducts = [
    {
      name: 'PRESA M/T',
      tagline: 'Experience go-anywhere performance with amazing traction.',
      image: PRESAMT,
    },
    {
      name: 'FUERTE K99',
      tagline: 'Address the multi-purpose needs of modern commercial vehicles.',
      image: FUERTEK99
    },
    {
      name: 'SM-1',
      tagline: 'Gain more mileage through extended periods of wear.',
      image: SM1,
    }
  ];

  const truckBusProducts = [
    {
      name: 'KMX707',
      tagline: 'Built for Performance and Durability',
      image: KMX707,
    },
    {
      name: 'SLH101',
      tagline: 'Exceptional mileage and retreadability',
      image: SLH101,
    },
    {
      name: 'SLH100',
      tagline: 'Even wear and reduced maintenance costs',
      image: SLH100,
    },
    {
      name: 'KMX700',
      tagline: 'High-performance for demanding routes',
      image: KMX700,
    },
    {
      name: 'KMX703',
      tagline: 'Innovative technology for maximum efficiency',
      image: KMX703,
    },
    {
      name: 'KMN606',
      tagline: 'Reliable performance for commercial fleets',
      image: KMN606,
    }
  ];

  const offRoadProducts = [
   {
      name: 'E3L3/E3L3+/E3L3B/ E3L3B+/E3L3C',
      tagline: 'Innovative technology for maximum efficiency',
      image: E3L3,
    },
    {
      name: 'G2L2',
      tagline: 'Innovative technology for maximum efficiency',
      image: G2L2,
    },
    {
      name: 'C1',
      tagline: 'Innovative technology for maximum efficiency',
      image: C1,
    },
    {
      name: 'R3',
      tagline: 'Innovative technology for maximum efficiency',
      image: R3,
    },
    {
      name: 'R4',
      tagline: 'Innovative technology for maximum efficiency',
      image: R4,
    },

    {
      name: 'L5',
      tagline: 'Innovative technology for maximum efficiency',
      image: L5,
    },

    {
      name: 'XF336',
      tagline: 'Innovative technology for maximum efficiency',
      image: XF336,
    },
    {
      name: 'SKS',
      tagline: 'Innovative technology for maximum efficiency',
      image: SKS,
    },
    {
      name: 'R1W',
      tagline: 'Innovative technology for maximum efficiency',
      image: R1W,
    },
    {
      name: 'XF007',
      tagline: 'Innovative technology for maximum efficiency',
      image: XF007,
    },
    {
      name: 'XF208',
      tagline: 'Innovative technology for maximum efficiency',
      image: XF208,
    },
    {
      name: 'KA6',
      tagline: 'Innovative technology for maximum efficiency',
      image: KA6,
    },
    {
      name: 'R1',
      tagline: 'Innovative technology for maximum efficiency',
      image: R1,
    },
    {
      name: 'PR1',
      tagline: 'Innovative technology for maximum efficiency',
      image: PR1,
    }
  ];

  const categoryContent = {
    passenger: {
      title: 'Passenger Car',
      subtitle: 'No matter the journey,',
      headline: 'KINTO TYRES is designed for power and pleasure',
      description:
        'Passenger car tires is discovered the thrill of driving, confidence-inspiring grip in the wet road, improved fuel efficiency for real savings, longer-lasting tread life and aiding comfort for smoother journey.',
      products: passengerProducts,
      image:passenger,
    },
    'light-truck': {
      title: 'Light Truck',
      subtitle: 'Go Anywhere!',
      headline: 'Allowing you to explore challenging terrain',
      description:
        'Premium quality All-Terrain tires are exclusively engineered for excellent Off-Road capabilities while delivering On-Road performance.',
      products: lightTruckProducts,
      image:lighttruck,
    },
    'truck-bus': {
      title: 'Truck & Bus',
      subtitle: 'Truck and Bus Tires',
      headline: 'Built for Performance and Durability',
      description:
        "Fleets today rely on high-performance truck and bus tires to deliver exceptional mileage, retreadability, even wear, and reduced maintenance costs per kilometer.",
      products: truckBusProducts,
      image:truckbus,
    },
    'off-road': {
      title: 'Off The Road',
      subtitle: 'The right by you!',
      headline:
        'KINTO OTR Tyres helps you get the maximum benefit for your business',
      description:
        'LOADER / GRADER / DUMP TRUCK / INDUSTRIAL MACHINERY / REACHSTACKER / EMPTY CONTAINER HANDLER / HEAVY FORKLIFT / TRACTOR / FORESTRY MACHINERY / HARVESTER / SPRAYER / FARM IMPLEMENT / TRAILER / SPREADER / GRAIN CART / SOIL PREPARATION & IRRIGATION EQUIPMENT.',
      products: offRoadProducts,
      image:offroad,
    }
  };

  const currentContent = categoryContent[activeCategory];

  return (
    <div className="bg-[#0A0A0A] min-h-screen">
     {/* Category Navigation */}
<div className="sticky top-[88px] z-30 bg-[#0A0A0A]/95 backdrop-blur-md shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 hide-scrollbar">
      {categories.map((cat) => {
        const IconComponent = cat.icon;
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex flex-shrink-0 items-center gap-2 px-5 py-3 whitespace-nowrap font-semibold text-sm md:text-base rounded-full transition-all duration-300 relative snap-start
              ${isActive ? 'bg-gradient-to-r from-brand-red via-[#ff4d5a] to-brand-red text-white shadow-lg scale-105' : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]/50'}
            `}
          >
            <IconComponent
              className={`transition-transform duration-300 ${isActive ? 'w-6 h-6 text-white' : 'w-5 h-5'}`}
            />
            <span>{cat.name}</span>

            {/* Active underline */}
            {isActive && (
              <motion.div
                layoutId="categoryIndicator"
                className="absolute -bottom-1 left-2 right-2 h-1 rounded-full bg-white/80"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </nav>
  </div>
</div>


      {/* Category Hero */}
      <motion.section
        key={activeCategory}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[400px] md:h-[500px] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src={currentContent.image}
            alt={currentContent.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <p className="text-brand-red font-semibold text-lg mb-2 uppercase tracking-wide">
              {currentContent.subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {currentContent.headline}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">{currentContent.description}</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {currentContent.title.toUpperCase()} TIRES
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentContent.products.map((product, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-brand-red/50 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden bg-[#0A0A0A]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
                  />
                 
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-red transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.tagline}</p>
                  <button className="inline-flex items-center text-brand-red font-medium text-sm hover:underline group">
                    View more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 bg-gradient-to-r from-[#1A1A1A] to-[#111] border border-[#2A2A2A] rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Need help choosing the right tyres?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Our tyre experts are here to help you find the perfect match for your vehicle and driving needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" className="px-8 py-3">
                Contact an Expert
              </Button>
              <Button href="/warranty" variant="outline" className="px-8 py-3 border-gray-600 hover:bg-white/10">
                View Warranty Info
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
