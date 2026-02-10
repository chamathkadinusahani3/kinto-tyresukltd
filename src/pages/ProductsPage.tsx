import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Truck, Bus, Mountain, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

// Import your images
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
import evtyres from "../assets/ev.png";
import FORZA001 from "../assets/products/passenger/FORZA001.png";
import FALCOS88 from "../assets/products/passenger/FALCOS88.png";
import V36 from "../assets/products/passenger/V36.png";
import X68 from "../assets/products/passenger/X68.png";
import SC900 from "../assets/products/passenger/SC900.png";
import SC901 from "../assets/products/passenger/SC901.png";
import ST51 from "../assets/products/passenger/ST51.png";
import ST55 from "../assets/products/passenger/ST55.png";
import SW89 from "../assets/products/passenger/SW89.png";
import SW99 from "../assets/products/passenger/SW99.png";
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
import RGN200 from "../assets/products/truckbus/RGN200.png";
import E3L3 from "../assets/products/offroad/E3L3.png";
import E3L3PLUS from "../assets/products/offroad/E3L3+.png";
import E3L3B from "../assets/products/offroad/E3L3B.png";
import E3L3BPLUS from "../assets/products/offroad/E3L3B+.png";
import E3L3C from "../assets/products/offroad/E3L3C.png";
import G2L2 from "../assets/products/offroad/G2L2.png";
import C1 from "../assets/products/offroad/C1.png";
import L5S from "../assets/products/offroad/L5S.png";
import R3 from "../assets/products/offroad/R3.png";
import R4 from "../assets/products/offroad/R4.png";
import L5 from "../assets/products/offroad/L5.png";
import XF336 from "../assets/products/offroad/XF336.png";
import SKS1 from "../assets/products/offroad/SKS1.png";
import SKS3 from "../assets/products/offroad/SKS3.png";
import R1W from "../assets/products/offroad/R1W.png";
import XF007 from "../assets/products/offroad/XF007.png";
import XF007A from "../assets/products/offroad/XF007A.png";
import XF208 from "../assets/products/offroad/XF208.png";
import KA6 from "../assets/products/offroad/KA6.png";
import R1 from "../assets/products/offroad/R1.png";
import R1PLUS from "../assets/products/offroad/R1PLUS.png";
import R1MIN1 from "../assets/products/offroad/R1MIN1.png";
import R1MIN2 from "../assets/products/offroad/R1MIN2.png";
import R1MIN3 from "../assets/products/offroad/R1MIN3.png";
import R1MIN4 from "../assets/products/offroad/R1MIN4.png";
import R1MIN5 from "../assets/products/offroad/R1MIN5.png";
import PR1 from "../assets/products/offroad/PR1.png";
import PRESTIGEP07 from "../assets/products/evtyres/PRESTIGEP07.png";


type Category =
  | 'passenger'
  | 'light-truck'
  | 'truck-bus'
  | 'off-road'
  | 'ev-tyres';

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
  const navigate = useNavigate();

  const categories = [
    { id: 'passenger' as Category, name: 'Passenger Car', icon: Car },
    { id: 'light-truck' as Category, name: 'Light Truck', icon: Truck },
    { id: 'truck-bus' as Category, name: 'Truck & Bus', icon: Bus },
    { id: 'off-road' as Category, name: 'Off The Road', icon: Mountain },
    { id: 'ev-tyres' as Category, name: 'EV Tyres', icon: Car }
  ];

  const passengerProducts = [
    {
      id: 'FORZA 001',
      name: 'FORZA 001',
      tagline: 'Deliver a thrilling ride with maximum precision.',
      image: FORZA001,
    },
   {
      id: 'FALCO S88',
      name: 'FALCO S88',
      tagline: 'Perfect balance of dynamic appearance and sport-oriented performance.',
      image: FALCOS88
    },
    {
      id: 'V-36',
      name: 'V-36',
      tagline: 'Feel the greater stability and control.',
      image: V36,
    },
    {
      id: 'X-68+',
      name: 'X-68+',
      tagline: 'Enjoy the ultimate handling and grip.',
      image: X68,
    },
    {
      id: 'SC-900',
      name: 'SC-900',
      tagline: 'Quieter, Safer and Smoother Journey',
      image: SC900,
    },
    {
      id: 'SC-901',
      name: 'SC-901',
      tagline: 'Cost-effective with long endurance.',
      image: SC901,
    },
    {
      id: 'ST-51',
      name: 'ST-51',
      tagline: 'Longevity and performance on the highway.',
      image: ST51,
    },
    {
      id: 'ST-55',
      name: 'ST-55',
      tagline: 'Pure street performance.',
      image: ST55,
    },
    {
      id: 'SW-89',
      name: 'SW-89',
      tagline: 'High-speed travel on snow and ice.',
      image: SW89,
    },
    {
      id: 'SW99',
      name: 'SW-99',
      tagline: 'High-speed travel on snow and ice.',
      image: SW99,
    },
    {
      id: 'KAIJU-2',
      name: 'KAIJU-2',
      tagline: 'Meet your daily adventures on and off the road.',
      image:KAIJU2,
    },
    {
      id: 'SM-5',
      name: 'SM-5',
      tagline: 'Balance performance over various terrains.',
      image:SM5,
    }
  ];

  const lightTruckProducts = [
    {
      id: 'PRESA MT',
      name: 'PRESA M/T',
      tagline: 'Experience go-anywhere performance with amazing traction.',
      image: PRESAMT,
    },
    {
      id: 'FUERTE K99',
      name: 'FUERTE K99',
      tagline: 'Address the multi-purpose needs of modern commercial vehicles.',
      image: FUERTEK99
    },
    {
      id: 'SM-1',
      name: 'SM-1',
      tagline: 'Gain more mileage through extended periods of wear.',
      image: SM1,
    }
  ];

  const truckBusProducts = [
    {
      id: 'KMX707',
      name: 'KMX707',
      tagline: 'Built for Performance and Durability',
      image: KMX707,
    },
    {
      id: 'SLH101',
      name: 'SLH101',
      tagline: 'Exceptional mileage and retreadability',
      image: SLH101,
    },
    {
      id: 'SLH100',
      name: 'SLH100',
      tagline: 'Even wear and reduced maintenance costs',
      image: SLH100,
    },
    {
      id: 'KMX700',
      name: 'KMX700',
      tagline: 'High-performance for demanding routes',
      image: KMX700,
    },
    {
      id: 'KMX703',
      name: 'KMX703',
      tagline: 'Innovative technology for maximum efficiency',
      image: KMX703,
    },
    {
      id: 'KMN606',
      name: 'KMN606',
      tagline: 'Reliable performance for commercial fleets',
      image: KMN606,
    },
    {
      id: 'RGN200',
      name: 'RGN200',
      tagline: 'Reliable performance for commercial fleets',
      image: RGN200,
    }
  ];

  const offRoadProducts = [
   {
      id: 'E3L3',
      name: 'E3L3',
      tagline: 'Innovative technology for maximum efficiency',
      image: E3L3,
    },
    {
      id: 'E3L3+',
      name: 'E3L3+',
      tagline: 'Innovative technology for maximum efficiency',
      image: E3L3PLUS,
    },
    {
      id: 'E3L3B',
      name: 'E3L3B',
      tagline: 'Innovative technology for maximum efficiency',
      image: E3L3B,
    },
    {
      id: 'E3L3B+',
      name: 'E3L3B+',
      tagline: 'Innovative technology for maximum efficiency',
      image: E3L3BPLUS,
    },
    {
      id: 'E3L3C',
      name: 'E3L3C',
      tagline: 'Innovative technology for maximum efficiency',
      image: E3L3C,
    },
    {
      id: 'G2L2',
      name: 'G2L2',
      tagline: 'Innovative technology for maximum efficiency',
      image: G2L2,
    },
    {
      id: 'C1',
      name: 'C1',
      tagline: 'Innovative technology for maximum efficiency',
      image: C1,
    },
     {
      id: 'L5S',
      name: 'L5S',
      tagline: 'Innovative technology for maximum efficiency',
      image: L5S,
    },
    {
      id: 'R3',
      name: 'R3',
      tagline: 'Innovative technology for maximum efficiency',
      image: R3,
    },
    {
      id: 'R4',
      name: 'R4',
      tagline: 'Innovative technology for maximum efficiency',
      image: R4,
    },

    {
      id: 'L5',
      name: 'L5',
      tagline: 'Innovative technology for maximum efficiency',
      image: L5,
    },

    {
      id: 'XF336',
      name: 'XF336',
      tagline: 'Innovative technology for maximum efficiency',
      image: XF336,
    },
    {
      id: 'SKS1',
      name: 'SKS1',
      tagline: 'Innovative technology for maximum efficiency',
      image: SKS1,
    },
    {
      id: 'SKS3',
      name: 'SKS3',
      tagline: 'Innovative technology for maximum efficiency',
      image: SKS3,
    },
    {
      id: 'R1W',
      name: 'R1W',
      tagline: 'Innovative technology for maximum efficiency',
      image: R1W,
    },
    {
      id: 'XF007',
      name: 'XF007',
      tagline: 'Innovative technology for maximum efficiency',
      image: XF007,
    },
    {
      id: 'XF007A',
      name: 'XF007A',
      tagline: 'Innovative technology for maximum efficiency',
      image: XF007A,
    },
    {
      id: 'XF208',
      name: 'XF208',
      tagline: 'Innovative technology for maximum efficiency',
      image: XF208,
    },
    {
      id: 'KA6',
      name: 'KA6',
      tagline: 'Innovative technology for maximum efficiency',
      image: KA6,
    },
    {
      id: 'R1',
      name: 'R1',
      tagline: 'Innovative technology for maximum efficiency',
      image: R1,
    },
    {
      id: 'R1PLUS',
      name: 'R1+',
      tagline: 'Innovative technology for maximum efficiency',
      image: R1PLUS,
    },
    {
      id: 'R1MIN1',
      name: 'R1-1',
      tagline: 'Innovative technology for maximum efficiency',
      image: R1MIN1,
    },
    {
      id: 'R1MIN2',
      name: 'R1-2',
      tagline: 'Innovative technology for maximum efficiency',
      image: R1MIN2,
    },
    {
      id: 'R1MIN3',
      name: 'R1-3',
      tagline: 'Innovative technology for maximum efficiency',
      image: R1MIN3,
    },
    {
      id: 'R1MIN4',
      name: 'R1-4',
      tagline: 'Innovative technology for maximum efficiency',
      image: R1MIN4,
    },
    {
      id: 'R1MIN5',
      name: 'R1-5',
      tagline: 'Innovative technology for maximum efficiency',
      image: R1MIN5,
    },

    {
      id: 'PR1',
      name: 'PR1',
      tagline: 'Innovative technology for maximum efficiency',
      image: PR1,
    }
  ];

  const evProducts = [
    {
      id: 'PRESTIGEP07',
      name: 'PRESTIGE P07',
      tagline: 'Luxury performance with a dramatic silence',
      image: PRESTIGEP07,
    }
  ];

 

  const categoryContent = {
    passenger: {
      title: 'Passenger Car',
      subtitle: 'No matter the journey,',
      headline: 'KINTO TYRES is designed for power and pleasure',
      description: 'Passenger car tyres is discovered the thrill of driving, confidence-inspiring grip in the wet road, improved fuel efficiency for real savings, longer-lasting tread life and aiding comfort for smoother journey.',
      products: passengerProducts,
      image: passenger,
    },
    'light-truck': {
      title: 'Light Truck',
      subtitle: 'Go Anywhere!',
      headline: 'Allowing you to explore challenging terrain',
      description:
        'Premium quality All-Terrain tyres are exclusively engineered for excellent Off-Road capabilities while delivering On-Road performance.',
      products: lightTruckProducts,
      image:lighttruck,
    },
    'truck-bus': {
      title: 'Truck & Bus',
      subtitle: 'Truck and Bus Tyres',
      headline: 'Built for Performance and Durability',
      description:
        "Fleets today rely on high-performance truck and bus tyres to deliver exceptional mileage, retreadability, even wear, and reduced maintenance costs per kilometer.",
      products: truckBusProducts,
      image:truckbus,
    },
    'off-road': {
      title: 'Off The Road',
      subtitle: 'The right by you!',
      headline:
        'KINTO OTR Tyres helps you get the maximum benefit for your business',
      description:
        'Loader, Grader, Dump Truck, Industrial Machinery, Reachstacker, Empty Container Handler, Heavy Forklift, Tractor, Forestry Machinery, Harvester, Sprayer, Farm Implement, Trailer, Spreader, Grain Cart, Soil Preparation & Irrigation Equipment',
      products: offRoadProducts,
      image:offroad,
    },
    'ev-tyres': {
  title: 'Electric Vehicle Tyres',
  subtitle: 'Future of Mobility',
  headline: 'Engineered for Electric Performance, Silence and Efficiency',
  description:
    'EV tyres handle higher loads, instant torque, low rolling resistance, and ultra-low noise for electric vehicles—delivering longer range, smoother rides, and better grip with KINTO EV-ready technology.',
  products: evProducts,
  image:evtyres, 
  }
  };

  const currentContent = categoryContent[activeCategory];

  // Function to handle product click
  const handleProductClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen">

    
  {/* Category Navigation */}
  <div className="sticky top-[88px] z-30 bg-[#0A0A0A]/95 backdrop-blur-md shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* SCROLL CONTAINER */}
      <div className="overflow-x-auto hide-scrollbar">
        <nav
          className="
            flex flex-nowrap gap-2 sm:gap-4
            py-4
            min-w-max
            snap-x snap-mandatory
          "
        >
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1 sm:gap-2
                  flex-shrink-0
                  px-3 py-2 sm:px-5 sm:py-3
                  whitespace-nowrap
                  font-semibold text-xs sm:text-sm md:text-base
                  rounded-full
                  transition-all duration-300
                  relative snap-start
                  ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-red via-[#ff4d5a] to-brand-red text-white shadow-lg scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]/50'
                  }`}
              >
                <IconComponent
                  className={`transition-transform duration-300 ${
                    isActive
                      ? 'w-4 h-4 sm:w-6 sm:h-6 text-white'
                      : 'w-3 h-3 sm:w-5 sm:h-5'
                  }`}
                />
                <span>{cat.name}</span>

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
      className="max-w-3xl mt-16 md:mt-24 lg:mt-32" // <-- added margin-top
    >
      <p className="text-brand-red font-semibold text-lg mb-2 uppercase tracking-wide">
        {currentContent.subtitle}
      </p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
        {currentContent.headline}
      </h1>
      <p className="text-lg text-gray-300 leading-relaxed">
        {currentContent.description}
      </p>
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
              {currentContent.title.toUpperCase()} TYRES
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
                key={product.id}
                variants={item}
                className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl overflow-hidden hover:border-brand-red/50 transition-all duration-300 cursor-pointer"
                onClick={() => handleProductClick(product.id)}
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
                  <button 
                    className="inline-flex items-center text-brand-red font-medium text-sm hover:underline group"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product.id);
                    }}
                  >
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