// src/data/productsData.ts
import FORZA001 from '../assets/products/passenger/FORZA001.png';
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
import R1PLUS from "../assets/products/offroad/R1PLUS.png";
import PR1 from "../assets/products/offroad/PR1.png";
import RGN200 from "../assets/products/truckbus/RGN200.png";
import PRESTIGEP07 from "../assets/products/evtyres/PRESTIGEP07.png";

export interface TyreSize {
  size: string; // e.g., "185/55R15"
  loadIndex: string;
  loadCapacity: string;
  speedRating: string;
  standardRim: string;
  sectionWidth: string;
  overallDiameter: string;
  maxPressure: string;
  utqg: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'passenger' | 'light-truck' | 'truck-bus' | 'off-road'| 'ev-tyres';
  tagline: string;
  description: string;
  image: string;
  features: string[];
  sizes: TyreSize[];
  season?: string;
  priceRange?: string;
}

// Helper function to parse size string into components
export function parseTyreSize(sizeStr: string) {
  // Format: "185/55R15" or "265/65R17"
  const match = sizeStr.match(/(\d+)\/(\d+)R(\d+)/);
  if (match) {
    return {
      width: match[1],
      profile: match[2],
      diameter: match[3]
    };
  }
  return null;
}

export const products: Product[] = [
  {
    id: 'FORZA 001',
    name: 'FORZA 001',
    category: 'passenger',
    tagline: 'Deliver a thrilling ride with maximum precision.',
    description: 'Fleets today need more miles, greater retreadability, longer even-wear and less maintenance costs per kilometer from their tyres. Given the extreme demands of today\'s transport industry, Kinto\'s technology helps you get the most out of your tyre investments.',
    image: FORZA001,   
    season: 'All Season',

    features: [
      'A Shape & Aggressive Groove for dynamic handling',
      'Triple & Half Groove for improved stability',
      'Wide Centre Rib for precise cornering',
      'Pulse Groove for better drainage',
      'Silica Tread Compound for fuel efficiency'
    ],
    sizes: [
      { size: '185/55R15', loadIndex: '86 XL', loadCapacity: '530', speedRating: 'V', standardRim: '6J', sectionWidth: '194', overallDiameter: '585', maxPressure: '340', utqg: '280 A A' },
      { size: '195/50R15', loadIndex: '82', loadCapacity: '475', speedRating: 'V', standardRim: '6J', sectionWidth: '201', overallDiameter: '577', maxPressure: '340', utqg: '280 A A' },
      { size: '195/55R15', loadIndex: '85', loadCapacity: '515', speedRating: 'V', standardRim: '6J', sectionWidth: '201', overallDiameter: '595', maxPressure: '340', utqg: '280 A A' },
      { size: '195/50R16', loadIndex: '88 XL', loadCapacity: '560', speedRating: 'V', standardRim: '6J', sectionWidth: '201', overallDiameter: '602', maxPressure: '340', utqg: '280 A A' },
      { size: '205/45ZR17', loadIndex: '88 XL', loadCapacity: '560', speedRating: 'W', standardRim: '7J', sectionWidth: '206', overallDiameter: '616', maxPressure: '340', utqg: '280 A A' },
      { size: '215/45ZR17', loadIndex: '91 XL', loadCapacity: '615', speedRating: 'W', standardRim: '7J', sectionWidth: '213', overallDiameter: '626', maxPressure: '340', utqg: '280 A A' },
      { size: '225/45ZR18', loadIndex: '95 XL', loadCapacity: '690', speedRating: 'W', standardRim: '7 1/2J', sectionWidth: '225', overallDiameter: '659', maxPressure: '340', utqg: '280 A A' },
      { size: '235/40ZR18', loadIndex: '95 XL', loadCapacity: '690', speedRating: 'W', standardRim: '8 1/2J', sectionWidth: '241', overallDiameter: '645', maxPressure: '340', utqg: '280 A A' }
    ]
  },
  {
  id: 'FALCO S88',
  name: 'FALCO S88',
  category: 'passenger',
  tagline: 'Perfect balance of dynamic appearance and sport-oriented performance.',
  description: 'Aggressive and dynamic tread patterns don’t just deliver great looks, they also deliver superb handling. Increased handling stability provides powerful traction in dry conditions while maintaining confidence and control on wet road surfaces.',
  image: FALCOS88, // make sure this import exists
  season: 'All Season',

  features: [
    'A Shape & Aggressive Groove for sporty handling and appearance',
    'Triple & Half Groove for improved rigidity and steering response',
    'Wide Centre Rib and Curved Groove Wall for precise cornering',
    'Pulse Groove for better drainage and anti-hydroplaning',
    'Silica Tread Compound for improved fuel efficiency and wet traction'
  ],

  sizes: [
    {
      size: '265/65R17',
      loadIndex: '116 XL',
      loadCapacity: '1250',
      speedRating: 'H',
      standardRim: '8J',
      sectionWidth: '272',
      overallDiameter: '776',
      maxPressure: '300',
      utqg: '420 A A'
    },
    {
      size: '265/60R18',
      loadIndex: '114 XL',
      loadCapacity: '1180',
      speedRating: 'V',
      standardRim: '8J',
      sectionWidth: '272',
      overallDiameter: '775',
      maxPressure: '300',
      utqg: '420 A A'
    },
    {
      size: '265/50ZR20',
      loadIndex: '111 XL',
      loadCapacity: '1090',
      speedRating: 'W',
      standardRim: '9J',
      sectionWidth: '265',
      overallDiameter: '774',
      maxPressure: '340',
      utqg: '420 A A'
    }
  ]
},

  {
  id: 'V-36',
  name: 'V-36',
  category: 'passenger', // change to 'suv' if you prefer
  tagline: 'Feel the greater stability and control.',
  description: 'Aggressive and dynamic tread patterns don’t just deliver great looks, they also deliver superb handling. Increased handling stability provides powerful traction in dry conditions while maintaining confidence and control on both wet and dry road surfaces.',
  image: V36, 
  season: 'All Season',

  features: [
    'A Shape & Aggressive Groove for sporty handling and appearance',
    'Triple & Half Groove for improved rigidity and steering response',
    'Wide Centre Rib and Curved Groove Wall for precise cornering performance',
    'Pulse Groove for better drainage and anti-hydroplaning',
    'Silica Tread Compound for improved fuel efficiency and wet traction'
  ],

  sizes: [
    {
      size: '195/50R15',
      loadIndex: '82',
      loadCapacity: '475',
      speedRating: 'V',
      standardRim: '6J',
      sectionWidth: '201',
      overallDiameter: '577',
      maxPressure: '300',
      utqg: '320 A A'
    },
    {
      size: '195/55R15',
      loadIndex: '82',
      loadCapacity: '515',
      speedRating: 'V',
      standardRim: '6J',
      sectionWidth: '201',
      overallDiameter: '595',
      maxPressure: '300',
      utqg: '320 A A'
    },
    {
      size: '225/50R15',
      loadIndex: '95 XL',
      loadCapacity: '690',
      speedRating: 'V',
      standardRim: '7J',
      sectionWidth: '233',
      overallDiameter: '607',
      maxPressure: '340',
      utqg: '320 A A'
    },
    {
      size: '245/45ZR18',
      loadIndex: '100 XL',
      loadCapacity: '800',
      speedRating: 'W',
      standardRim: '8J',
      sectionWidth: '243',
      overallDiameter: '677',
      maxPressure: '340',
      utqg: '320 A A'
    },
    {
      size: '255/50R18',
      loadIndex: '106 XL',
      loadCapacity: '950',
      speedRating: 'V',
      standardRim: '8J',
      sectionWidth: '265',
      overallDiameter: '713',
      maxPressure: '340',
      utqg: '320 A A'
    },
    {
      size: '255/55R18',
      loadIndex: '109 XL',
      loadCapacity: '1030',
      speedRating: 'V',
      standardRim: '8J',
      sectionWidth: '265',
      overallDiameter: '737',
      maxPressure: '340',
      utqg: '320 A A'
    },
    {
      size: '265/60R18',
      loadIndex: '110',
      loadCapacity: '1060',
      speedRating: 'H',
      standardRim: '8J',
      sectionWidth: '272',
      overallDiameter: '775',
      maxPressure: '300',
      utqg: '320 A A'
    },
    {
      size: '275/40ZR18',
      loadIndex: '103 XL',
      loadCapacity: '875',
      speedRating: 'W',
      standardRim: '9 1/2J',
      sectionWidth: '278',
      overallDiameter: '677',
      maxPressure: '340',
      utqg: '320 A A'
    },
    {
      size: '285/45ZR18',
      loadIndex: '107 XL',
      loadCapacity: '975',
      speedRating: 'W',
      standardRim: '9 1/2J',
      sectionWidth: '285',
      overallDiameter: '677',
      maxPressure: '340',
      utqg: '320 A A'
    },
    {
      size: '265/50R20',
      loadIndex: '107',
      loadCapacity: '975',
      speedRating: 'V',
      standardRim: '8 1/2J',
      sectionWidth: '277',
      overallDiameter: '774',
      maxPressure: '300',
      utqg: '320 A A'
    }
  ]
}
,
 {
  id: 'X-68+',
  name: 'X-68+',
  category: 'passenger', // change to 'suv' if needed
  tagline: 'Enjoy the ultimate handling and grip.',
  description: 'Aggressive and dynamic tread patterns don’t just deliver great looks, they also deliver superb handling. Increased handling stability provides powerful traction in dry conditions while maintaining confidence and control on both wet and dry road surfaces.',
  image: X68, // ensure this import exists
  season: 'All Season',

  features: [
    'A Shape & Aggressive Groove for superior handling and grip',
    'Triple & Half Groove for improved rigidity and steering response',
    'Wide Centre Rib and Curved Groove Wall for precise cornering',
    'Pulse Groove for better drainage and anti-hydroplaning',
    'Silica Tread Compound for improved fuel efficiency and wet traction'
  ],

  sizes: [
    {
      size: '245/45ZR18',
      loadIndex: '100 XL',
      loadCapacity: '800',
      speedRating: 'W',
      standardRim: '8J',
      sectionWidth: '243',
      overallDiameter: '677',
      maxPressure: '340',
      utqg: '280 A A'
    },
    {
      size: '255/50R18',
      loadIndex: '106 XL',
      loadCapacity: '950',
      speedRating: 'V',
      standardRim: '8J',
      sectionWidth: '265',
      overallDiameter: '713',
      maxPressure: '340',
      utqg: '280 A A'
    },
    {
      size: '285/40ZR18',
      loadIndex: '101',
      loadCapacity: '825',
      speedRating: 'W',
      standardRim: '9.5J',
      sectionWidth: '285',
      overallDiameter: '677',
      maxPressure: '300',
      utqg: '280 A A'
    }
  ]
}
,
{
  id: 'SC-900',
  name: 'SC-900',
  category: 'passenger',
  tagline: 'Quieter, Safer and Smoother Journey.',
  description: 'Aggressive and dynamic tread patterns don’t just deliver great looks, they also deliver superb handling. Increased handling stability provides powerful traction in dry conditions while maintaining confidence, safety and comfort on wet and dry road surfaces.',
  image: SC900, // ensure this import exists
  season: 'All Season',

  features: [
    'A Shape & Aggressive Groove for stable and quiet handling',
    'Triple & Half Groove for improved rigidity and steering response',
    'Wide Centre Rib and Curved Groove Wall for precise cornering performance',
    'Pulse Groove for better drainage and anti-hydroplaning',
    'Silica Tread Compound for improved fuel efficiency and wet traction'
  ],

  sizes: [
    {
      size: '185/55R16',
      loadIndex: '83',
      loadCapacity: '487',
      speedRating: 'V',
      standardRim: '6J',
      sectionWidth: '194',
      overallDiameter: '610',
      maxPressure: '300',
      utqg: '380 A A'
    },
    {
      size: '195/45ZR16',
      loadIndex: '84 XL',
      loadCapacity: '500',
      speedRating: 'V',
      standardRim: '6 1/2J',
      sectionWidth: '195',
      overallDiameter: '582',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '195/55R16',
      loadIndex: '87',
      loadCapacity: '545',
      speedRating: 'V',
      standardRim: '6J',
      sectionWidth: '201',
      overallDiameter: '620',
      maxPressure: '300',
      utqg: '380 A A'
    },
    {
      size: '205/45ZR16',
      loadIndex: '87 XL',
      loadCapacity: '545',
      speedRating: 'W',
      standardRim: '7J',
      sectionWidth: '206',
      overallDiameter: '590',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '205/55R16',
      loadIndex: '91',
      loadCapacity: '615',
      speedRating: 'V/W',
      standardRim: '6 1/2J',
      sectionWidth: '214',
      overallDiameter: '632',
      maxPressure: '300',
      utqg: '380 A A'
    },
    {
      size: '205/60R16',
      loadIndex: '92',
      loadCapacity: '630',
      speedRating: 'H',
      standardRim: '6J',
      sectionWidth: '209',
      overallDiameter: '652',
      maxPressure: '300',
      utqg: '380 A A'
    },
    {
      size: '205/65R16',
      loadIndex: '95',
      loadCapacity: '690',
      speedRating: 'H',
      standardRim: '6J',
      sectionWidth: '209',
      overallDiameter: '672',
      maxPressure: '300',
      utqg: '380 A A'
    },
    {
      size: '215/45ZR16',
      loadIndex: '90 XL',
      loadCapacity: '600',
      speedRating: 'V',
      standardRim: '7J',
      sectionWidth: '213',
      overallDiameter: '600',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '215/55ZR16',
      loadIndex: '97 XL',
      loadCapacity: '730',
      speedRating: 'W',
      standardRim: '7J',
      sectionWidth: '226',
      overallDiameter: '642',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '215/60R16',
      loadIndex: '95',
      loadCapacity: '690',
      speedRating: 'H',
      standardRim: '6 1/2J',
      sectionWidth: '221',
      overallDiameter: '664',
      maxPressure: '300',
      utqg: '380 A A'
    },
    {
      size: '225/50R16',
      loadIndex: '92',
      loadCapacity: '630',
      speedRating: 'W',
      standardRim: '7J',
      sectionWidth: '233',
      overallDiameter: '632',
      maxPressure: '300',
      utqg: '380 A A'
    },
    {
      size: '225/55ZR16',
      loadIndex: '99 XL',
      loadCapacity: '775',
      speedRating: 'W',
      standardRim: '7J',
      sectionWidth: '233',
      overallDiameter: '654',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '225/60R16',
      loadIndex: '98',
      loadCapacity: '750',
      speedRating: 'V',
      standardRim: '6 1/2J',
      sectionWidth: '228',
      overallDiameter: '676',
      maxPressure: '300',
      utqg: '380 A A'
    },
    {
      size: '235/60R16',
      loadIndex: '100',
      loadCapacity: '800',
      speedRating: 'H',
      standardRim: '7J',
      sectionWidth: '240',
      overallDiameter: '688',
      maxPressure: '300',
      utqg: '380 A A'
    },
    {
      size: '205/40ZR17',
      loadIndex: '84 XL',
      loadCapacity: '500',
      speedRating: 'W',
      standardRim: '7 1/2J',
      sectionWidth: '212',
      overallDiameter: '596',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '205/45ZR17',
      loadIndex: '88 XL',
      loadCapacity: '560',
      speedRating: 'W',
      standardRim: '7J',
      sectionWidth: '206',
      overallDiameter: '616',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '205/50ZR17',
      loadIndex: '93 XL',
      loadCapacity: '650',
      speedRating: 'W',
      standardRim: '6 1/2J',
      sectionWidth: '214',
      overallDiameter: '638',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '205/55ZR17',
      loadIndex: '95 XL',
      loadCapacity: '690',
      speedRating: 'W',
      standardRim: '6 1/2J',
      sectionWidth: '213',
      overallDiameter: '657',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '215/40ZR17',
      loadIndex: '87 XL',
      loadCapacity: '545',
      speedRating: 'W',
      standardRim: '7 1/2J',
      sectionWidth: '218',
      overallDiameter: '604',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '215/45ZR17',
      loadIndex: '91 XL',
      loadCapacity: '615',
      speedRating: 'W',
      standardRim: '7J',
      sectionWidth: '213',
      overallDiameter: '626',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '215/50ZR17',
      loadIndex: '95 XL',
      loadCapacity: '690',
      speedRating: 'W',
      standardRim: '7J',
      sectionWidth: '226',
      overallDiameter: '648',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '215/55ZR17',
      loadIndex: '98 XL',
      loadCapacity: '750',
      speedRating: 'W',
      standardRim: '7J',
      sectionWidth: '226',
      overallDiameter: '668',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '225/45ZR17',
      loadIndex: '94 XL',
      loadCapacity: '670',
      speedRating: 'W',
      standardRim: '7 1/2J',
      sectionWidth: '225',
      overallDiameter: '634',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '225/50ZR17',
      loadIndex: '98 XL',
      loadCapacity: '750',
      speedRating: 'W',
      standardRim: '7J',
      sectionWidth: '233',
      overallDiameter: '658',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '225/55ZR17',
      loadIndex: '101 XL',
      loadCapacity: '825',
      speedRating: 'W',
      standardRim: '7J',
      sectionWidth: '233',
      overallDiameter: '680',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '235/45ZR17',
      loadIndex: '97 XL',
      loadCapacity: '730',
      speedRating: 'W',
      standardRim: '8J',
      sectionWidth: '236',
      overallDiameter: '644',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '235/50ZR17',
      loadIndex: '100 XL',
      loadCapacity: '800',
      speedRating: 'W',
      standardRim: '7 1/2J',
      sectionWidth: '245',
      overallDiameter: '668',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '235/55ZR17',
      loadIndex: '103 XL',
      loadCapacity: '875',
      speedRating: 'W',
      standardRim: '7 1/2J',
      sectionWidth: '245',
      overallDiameter: '690',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '245/40ZR17',
      loadIndex: '95 XL',
      loadCapacity: '690',
      speedRating: 'W',
      standardRim: '8 1/2J',
      sectionWidth: '248',
      overallDiameter: '628',
      maxPressure: '340',
      utqg: '380 A A'
    },
    {
      size: '245/45ZR17',
      loadIndex: '99 XL',
      loadCapacity: '775',
      speedRating: 'W',
      standardRim: '8J',
      sectionWidth: '243',
      overallDiameter: '652',
      maxPressure: '340',
      utqg: '380 A A'
    }
  ]
},

{
  id: 'SC-901',
  name: 'SC-901',
  category: 'passenger',
  tagline: 'Cost-effective with long endurance.',
  description: 'Aggressive and dynamic tread patterns don’t just deliver great looks, they also deliver superb handling. Increased handling stability provides powerful traction in dry conditions while delivering long-lasting performance, durability, and cost efficiency for everyday driving.',
  image: SC901, // ensure this import exists
  season: 'All Season',

  features: [
    'A Shape & Aggressive Groove for balanced handling and durability',
    'Triple & Half Groove for improved rigidity and steering response',
    'Wide Centre Rib and Curved Groove Wall for enhanced stability and even wear',
    'Pulse Groove for better drainage and anti-hydroplaning',
    'Silica Tread Compound for improved fuel efficiency and wet traction'
  ],

  sizes: [
    { size: '155/65R13', loadIndex: '73', loadCapacity: '365', speedRating: 'T', standardRim: '4 1/2J', sectionWidth: '157', overallDiameter: '532', maxPressure: '300', utqg: '360 A A' },
    { size: '155/70R13', loadIndex: '75', loadCapacity: '387', speedRating: 'T', standardRim: '4 1/2J', sectionWidth: '157', overallDiameter: '548', maxPressure: '300', utqg: '360 A A' },
    { size: '155/80R13', loadIndex: '79', loadCapacity: '437', speedRating: 'T', standardRim: '4 1/2J', sectionWidth: '157', overallDiameter: '578', maxPressure: '300', utqg: '360 A A' },
    { size: '165/65R13', loadIndex: '77', loadCapacity: '412', speedRating: 'T', standardRim: '5J', sectionWidth: '170', overallDiameter: '544', maxPressure: '300', utqg: '360 A A' },
    { size: '165/70R13', loadIndex: '79', loadCapacity: '437', speedRating: 'T', standardRim: '5J', sectionWidth: '170', overallDiameter: '562', maxPressure: '300', utqg: '360 A A' },
    { size: '165/80R13', loadIndex: '83', loadCapacity: '487', speedRating: 'T', standardRim: '4 1/2J', sectionWidth: '165', overallDiameter: '594', maxPressure: '300', utqg: '360 A A' },
    { size: '175/70R13', loadIndex: '82', loadCapacity: '475', speedRating: 'T', standardRim: '5J', sectionWidth: '177', overallDiameter: '576', maxPressure: '300', utqg: '360 A A' },
    { size: '185/70R13', loadIndex: '86', loadCapacity: '530', speedRating: 'T', standardRim: '5 1/2J', sectionWidth: '189', overallDiameter: '590', maxPressure: '300', utqg: '360 A A' },

    { size: '155/65R14', loadIndex: '75', loadCapacity: '387', speedRating: 'T', standardRim: '4 1/2J', sectionWidth: '157', overallDiameter: '558', maxPressure: '300', utqg: '360 A A' },
    { size: '165/55R14', loadIndex: '72', loadCapacity: '335', speedRating: 'V', standardRim: '5J', sectionWidth: '165', overallDiameter: '538', maxPressure: '300', utqg: '360 A A' },
    { size: '165/60R14', loadIndex: '75', loadCapacity: '387', speedRating: 'H', standardRim: '5J', sectionWidth: '170', overallDiameter: '554', maxPressure: '300', utqg: '360 A A' },
    { size: '165/65R14', loadIndex: '79', loadCapacity: '437', speedRating: 'T', standardRim: '5J', sectionWidth: '170', overallDiameter: '570', maxPressure: '300', utqg: '360 A A' },
    { size: '165/70R14', loadIndex: '85 XL', loadCapacity: '515', speedRating: 'T', standardRim: '5J', sectionWidth: '170', overallDiameter: '588', maxPressure: '300', utqg: '360 A A' },
    { size: '175/65R14', loadIndex: '86 XL', loadCapacity: '475', speedRating: 'H', standardRim: '5J', sectionWidth: '177', overallDiameter: '584', maxPressure: '300', utqg: '360 A A' },
    { size: '175/70R14', loadIndex: '84', loadCapacity: '500', speedRating: 'T', standardRim: '5J', sectionWidth: '177', overallDiameter: '602', maxPressure: '300', utqg: '360 A A' },
    { size: '185/55R14', loadIndex: '80', loadCapacity: '450', speedRating: 'H', standardRim: '6J', sectionWidth: '194', overallDiameter: '560', maxPressure: '300', utqg: '360 A A' },
    { size: '185/60R14', loadIndex: '82', loadCapacity: '475', speedRating: 'H', standardRim: '5 1/2J', sectionWidth: '189', overallDiameter: '578', maxPressure: '300', utqg: '360 A A' },
    { size: '185/65R14', loadIndex: '86', loadCapacity: '530', speedRating: 'H', standardRim: '5 1/2J', sectionWidth: '189', overallDiameter: '596', maxPressure: '300', utqg: '360 A A' },
    { size: '185/70R14', loadIndex: '88', loadCapacity: '560', speedRating: 'T', standardRim: '5 1/2J', sectionWidth: '189', overallDiameter: '616', maxPressure: '300', utqg: '360 A A' },
    { size: '195/60R14', loadIndex: '86', loadCapacity: '530', speedRating: 'H', standardRim: '6J', sectionWidth: '201', overallDiameter: '590', maxPressure: '300', utqg: '360 A A' },
    { size: '195/70R14', loadIndex: '91', loadCapacity: '615', speedRating: 'T', standardRim: '6J', sectionWidth: '201', overallDiameter: '630', maxPressure: '300', utqg: '360 A A' },

    { size: '175/65R15', loadIndex: '84', loadCapacity: '500', speedRating: 'H', standardRim: '5J', sectionWidth: '177', overallDiameter: '609', maxPressure: '300', utqg: '360 A A' },
    { size: '185/55R15', loadIndex: '82', loadCapacity: '475', speedRating: 'V', standardRim: '6J', sectionWidth: '194', overallDiameter: '585', maxPressure: '300', utqg: '360 A A' },
    { size: '185/60R15', loadIndex: '88 XL', loadCapacity: '560', speedRating: 'H', standardRim: '5 1/2J', sectionWidth: '189', overallDiameter: '603', maxPressure: '300', utqg: '360 A A' },
    { size: '185/65R15', loadIndex: '88', loadCapacity: '560', speedRating: 'H', standardRim: '5 1/2J', sectionWidth: '189', overallDiameter: '621', maxPressure: '300', utqg: '360 A A' },
    { size: '195/50R15', loadIndex: '82', loadCapacity: '475', speedRating: 'V', standardRim: '6J', sectionWidth: '201', overallDiameter: '577', maxPressure: '300', utqg: '360 A A' },
    { size: '195/55R15', loadIndex: '85', loadCapacity: '515', speedRating: 'V', standardRim: '6J', sectionWidth: '201', overallDiameter: '595', maxPressure: '300', utqg: '360 A A' },
    { size: '195/60R15', loadIndex: '88', loadCapacity: '560', speedRating: 'V', standardRim: '6J', sectionWidth: '201', overallDiameter: '615', maxPressure: '300', utqg: '360 A A' },
    { size: '195/65R15', loadIndex: '91', loadCapacity: '615', speedRating: 'V/H', standardRim: '6J', sectionWidth: '201', overallDiameter: '635', maxPressure: '300', utqg: '360 A A' },
    { size: '205/60R15', loadIndex: '91', loadCapacity: '615', speedRating: 'V', standardRim: '6J', sectionWidth: '209', overallDiameter: '627', maxPressure: '300', utqg: '360 A A' },
    { size: '205/65R15', loadIndex: '94', loadCapacity: '670', speedRating: 'H', standardRim: '6J', sectionWidth: '209', overallDiameter: '647', maxPressure: '300', utqg: '360 A A' },
    { size: '205/70R15', loadIndex: '96', loadCapacity: '710', speedRating: 'T', standardRim: '6J', sectionWidth: '209', overallDiameter: '710', maxPressure: '300', utqg: '360 A A' },
    { size: '215/65R15', loadIndex: '100 XL', loadCapacity: '800', speedRating: 'H', standardRim: '6 1/2J', sectionWidth: '221', overallDiameter: '661', maxPressure: '340', utqg: '360 A A' },
    { size: '215/70R15', loadIndex: '98', loadCapacity: '750', speedRating: 'T', standardRim: '6 1/2J', sectionWidth: '221', overallDiameter: '683', maxPressure: '300', utqg: '360 A A' },
    { size: '225/60R15', loadIndex: '96', loadCapacity: '710', speedRating: 'V', standardRim: '6 1/2J', sectionWidth: '228', overallDiameter: '651', maxPressure: '300', utqg: '360 A A' },

    { size: '195/50R16', loadIndex: '88', loadCapacity: '560', speedRating: 'V', standardRim: '6J', sectionWidth: '201', overallDiameter: '602', maxPressure: '300', utqg: '360 A A' },
    { size: '195/55R16', loadIndex: '87', loadCapacity: '545', speedRating: 'V', standardRim: '6J', sectionWidth: '201', overallDiameter: '620', maxPressure: '300', utqg: '360 A A' },
    { size: '195/60R16', loadIndex: '89', loadCapacity: '580', speedRating: 'V/H', standardRim: '6J', sectionWidth: '201', overallDiameter: '640', maxPressure: '300', utqg: '360 A A' },
    { size: '205/60R16', loadIndex: '92', loadCapacity: '630', speedRating: 'V', standardRim: '6J', sectionWidth: '209', overallDiameter: '652', maxPressure: '300', utqg: '360 A A' },
    { size: '215/60R16', loadIndex: '95', loadCapacity: '690', speedRating: 'T', standardRim: '6 1/2J', sectionWidth: '221', overallDiameter: '664', maxPressure: '300', utqg: '360 A A' },
    { size: '215/65R16', loadIndex: '98', loadCapacity: '750', speedRating: 'T', standardRim: '6 1/2J', sectionWidth: '221', overallDiameter: '686', maxPressure: '300', utqg: '360 A A' }
  ]
},
{
  id: 'ST-51',
  name: 'ST-51',
  category: 'suv', // highway-focused SUV / light truck tyre
  tagline: 'Longevity and performance on the highway.',
  description: 'Aggressive and dynamic tread patterns don’t just deliver great looks, they also deliver superb handling. Increased handling stability provides powerful traction in dry conditions while ensuring long-lasting mileage and stable highway performance.',
  image: ST51, // ensure this import exists
  season: 'All Season',

  features: [
    'A Shape & Aggressive Groove for stable highway handling',
    'Triple & Half Groove for improved rigidity and steering response',
    'Wide Centre Rib and Curved Groove Wall for enhanced straight-line stability',
    'Pulse Groove for better drainage and anti-hydroplaning',
    'Silica Tread Compound for improved fuel efficiency and wet traction'
  ],

  sizes: [
    {
      size: '235/75R15',
      loadIndex: '109 XL',
      loadCapacity: '1030',
      speedRating: 'T',
      standardRim: '6 1/2J',
      sectionWidth: '235',
      overallDiameter: '733',
      maxPressure: '340',
      utqg: '420 A A'
    },
    {
      size: '215/65R16',
      loadIndex: '98',
      loadCapacity: '750',
      speedRating: 'H',
      standardRim: '6 1/2J',
      sectionWidth: '221',
      overallDiameter: '686',
      maxPressure: '300',
      utqg: '420 A A'
    },
    {
      size: '215/70R16',
      loadIndex: '100',
      loadCapacity: '800',
      speedRating: 'H',
      standardRim: '6 1/2J',
      sectionWidth: '221',
      overallDiameter: '708',
      maxPressure: '300',
      utqg: '420 A A'
    },
    {
      size: '245/70R16',
      loadIndex: '111 XL',
      loadCapacity: '1090',
      speedRating: 'T',
      standardRim: '7J',
      sectionWidth: '248',
      overallDiameter: '750',
      maxPressure: '340',
      utqg: '420 A A'
    },
    {
      size: '265/70R16',
      loadIndex: '112',
      loadCapacity: '1120',
      speedRating: 'T',
      standardRim: '8J',
      sectionWidth: '265',
      overallDiameter: '777',
      maxPressure: '300',
      utqg: '420 A A'
    },
    {
      size: '215/60R17',
      loadIndex: '96',
      loadCapacity: '710',
      speedRating: 'V',
      standardRim: '6 1/2J',
      sectionWidth: '221',
      overallDiameter: '690',
      maxPressure: '300',
      utqg: '420 A A'
    },
    {
      size: '225/60R17',
      loadIndex: '99',
      loadCapacity: '775',
      speedRating: 'V',
      standardRim: '6 1/2J',
      sectionWidth: '228',
      overallDiameter: '702',
      maxPressure: '300',
      utqg: '420 A A'
    },
    {
      size: '225/65R17',
      loadIndex: '102',
      loadCapacity: '850',
      speedRating: 'T',
      standardRim: '6 1/2J',
      sectionWidth: '228',
      overallDiameter: '724',
      maxPressure: '300',
      utqg: '420 A A'
    },
    {
      size: '265/65R17',
      loadIndex: '112',
      loadCapacity: '1120',
      speedRating: 'T',
      standardRim: '8J',
      sectionWidth: '272',
      overallDiameter: '776',
      maxPressure: '300',
      utqg: '420 A A'
    },
    {
      size: '265/70R17',
      loadIndex: '115',
      loadCapacity: '1215',
      speedRating: 'T',
      standardRim: '8J',
      sectionWidth: '272',
      overallDiameter: '804',
      maxPressure: '300',
      utqg: '420 A A'
    },
    {
      size: '235/55R18',
      loadIndex: '104 XL',
      loadCapacity: '900',
      speedRating: 'V',
      standardRim: '7 1/2J',
      sectionWidth: '245',
      overallDiameter: '715',
      maxPressure: '340',
      utqg: '420 A A'
    },
    {
      size: '235/60R18',
      loadIndex: '107 XL',
      loadCapacity: '975',
      speedRating: 'V',
      standardRim: '7J',
      sectionWidth: '240',
      overallDiameter: '739',
      maxPressure: '340',
      utqg: '420 A A'
    },
    {
      size: '265/60R18',
      loadIndex: '110',
      loadCapacity: '1060',
      speedRating: 'H',
      standardRim: '8J',
      sectionWidth: '272',
      overallDiameter: '775',
      maxPressure: '300',
      utqg: '420 A A'
    },
    {
      size: '275/55R20',
      loadIndex: '117 XL',
      loadCapacity: '1285',
      speedRating: 'T',
      standardRim: '8 1/2J',
      sectionWidth: '284',
      overallDiameter: '810',
      maxPressure: '340',
      utqg: '420 A A'
    },
    {
      size: '275/60R20',
      loadIndex: '115',
      loadCapacity: '1215',
      speedRating: 'T',
      standardRim: '8J',
      sectionWidth: '279',
      overallDiameter: '838',
      maxPressure: '300',
      utqg: '420 A A'
    }
  ]
},
{
  id: 'ST-55',
  name: 'ST-55',
  category: 'suv', // street-performance SUV / luxury SUV tyre
  tagline: 'Pure street performance.',
  description: 'Aggressive and dynamic tread patterns don’t just deliver great looks, they also deliver superb handling. Increased handling stability provides powerful traction in dry conditions while delivering confident cornering and braking performance on urban and highway roads.',
  image: ST55, // make sure this image is imported
  season: 'All Season',

  features: [
    'A Shape & Aggressive Groove for sporty street handling',
    'Triple & Half Groove for quicker steering response',
    'Wide Centre Rib and Curved Groove Wall for enhanced cornering stability',
    'Pulse Groove for improved water evacuation and hydroplaning resistance',
    'Silica Tread Compound for better wet grip and fuel efficiency'
  ],

  sizes: [
    {
      size: '265/50R20',
      loadIndex: '111 XL',
      loadCapacity: '1090',
      speedRating: 'V',
      standardRim: '8 1/2J',
      sectionWidth: '277',
      overallDiameter: '774',
      maxPressure: '340',
      utqg: '400 A A'
    },
    {
      size: '235/30R22',
      loadIndex: '90 XL',
      loadCapacity: '600',
      speedRating: 'W',
      standardRim: '8 1/2J',
      sectionWidth: '242',
      overallDiameter: '701',
      maxPressure: '340',
      utqg: '400 A A'
    },
    {
      size: '265/35R22',
      loadIndex: '102 XL',
      loadCapacity: '850',
      speedRating: 'V',
      standardRim: '9 1/2J',
      sectionWidth: '271',
      overallDiameter: '745',
      maxPressure: '340',
      utqg: '400 A A'
    },
    {
      size: '265/40R22',
      loadIndex: '106 XL',
      loadCapacity: '950',
      speedRating: 'V',
      standardRim: '9 1/2J',
      sectionWidth: '271',
      overallDiameter: '771',
      maxPressure: '340',
      utqg: '400 A A'
    },
    {
      size: '305/40R22',
      loadIndex: '114 XL',
      loadCapacity: '1180',
      speedRating: 'V',
      standardRim: '11J',
      sectionWidth: '313',
      overallDiameter: '803',
      maxPressure: '340',
      utqg: '400 A A'
    },
    {
      size: '305/45R22',
      loadIndex: '118 XL',
      loadCapacity: '1320',
      speedRating: 'V',
      standardRim: '10J',
      sectionWidth: '303',
      overallDiameter: '833',
      maxPressure: '340',
      utqg: '400 A A'
    },
    {
      size: '305/35R24',
      loadIndex: '112 XL',
      loadCapacity: '1120',
      speedRating: 'V',
      standardRim: '11J',
      sectionWidth: '313',
      overallDiameter: '824',
      maxPressure: '340',
      utqg: '400 A A'
    }
  ]
},

{
  id: 'SW-89',
  name: 'SW-89',
  category: 'passenger', // winter-focused passenger / sedan / hatchback tyre
  tagline: 'High-speed travel on snow and ice.',
  description: 'Designed for confident winter driving, SW-89 delivers stability and control at high speeds on snow and icy roads. Its advanced tread design enhances grip, braking and steering precision while maintaining comfort and efficiency in cold conditions.',
  image: SW89, // ensure this image is imported
  season: 'Winter',

  features: [
    'A Shape & Aggressive Groove for improved winter traction',
    'Triple & Half Groove for enhanced steering response and stability',
    'Wide Centre Rib and Curved Groove Wall for confident cornering on slippery surfaces',
    'Pulse Groove design for effective water and slush evacuation',
    'Silica Tread Compound for superior cold-weather grip and wet performance'
  ],

  sizes: [
    { size: '185/60R15', loadIndex: '84', loadCapacity: '500', speedRating: 'T', standardRim: '5 1/2J', sectionWidth: '189', overallDiameter: '603', maxPressure: '300', utqg: '-' },
    { size: '185/65R15', loadIndex: '88', loadCapacity: '560', speedRating: 'T', standardRim: '5 1/2J', sectionWidth: '189', overallDiameter: '621', maxPressure: '300', utqg: '-' },
    { size: '195/55R15', loadIndex: '85', loadCapacity: '515', speedRating: 'T', standardRim: '6J', sectionWidth: '201', overallDiameter: '595', maxPressure: '300', utqg: '-' },
    { size: '195/60R15', loadIndex: '88', loadCapacity: '560', speedRating: 'T', standardRim: '6J', sectionWidth: '201', overallDiameter: '615', maxPressure: '300', utqg: '-' },
    { size: '195/65R15', loadIndex: '91', loadCapacity: '615', speedRating: 'T', standardRim: '6J', sectionWidth: '201', overallDiameter: '635', maxPressure: '300', utqg: '-' },
    { size: '205/65R15', loadIndex: '94', loadCapacity: '670', speedRating: 'T', standardRim: '6J', sectionWidth: '209', overallDiameter: '647', maxPressure: '300', utqg: '-' },
    { size: '205/55R16', loadIndex: '91', loadCapacity: '615', speedRating: 'H', standardRim: '6 1/2J', sectionWidth: '214', overallDiameter: '632', maxPressure: '300', utqg: '-' },
    { size: '205/60R16', loadIndex: '96 XL', loadCapacity: '710', speedRating: 'H', standardRim: '6J', sectionWidth: '209', overallDiameter: '652', maxPressure: '340', utqg: '-' },
    { size: '215/55R16', loadIndex: '97 XL', loadCapacity: '730', speedRating: 'H', standardRim: '7J', sectionWidth: '226', overallDiameter: '642', maxPressure: '340', utqg: '-' },
    { size: '215/60R16', loadIndex: '95', loadCapacity: '690', speedRating: 'H', standardRim: '6 1/2J', sectionWidth: '221', overallDiameter: '664', maxPressure: '300', utqg: '-' },
    { size: '225/55R16', loadIndex: '99 XL', loadCapacity: '775', speedRating: 'T', standardRim: '7J', sectionWidth: '233', overallDiameter: '654', maxPressure: '340', utqg: '-' },
    { size: '215/50R17', loadIndex: '95 XL', loadCapacity: '690', speedRating: 'H', standardRim: '7J', sectionWidth: '226', overallDiameter: '648', maxPressure: '340', utqg: '-' },
    { size: '215/55R17', loadIndex: '98 XL', loadCapacity: '750', speedRating: 'H', standardRim: '7J', sectionWidth: '226', overallDiameter: '668', maxPressure: '340', utqg: '-' },
    { size: '225/45R17', loadIndex: '94 XL', loadCapacity: '670', speedRating: 'H', standardRim: '7 1/2J', sectionWidth: '225', overallDiameter: '634', maxPressure: '340', utqg: '-' },
    { size: '225/50R17', loadIndex: '98 XL', loadCapacity: '750', speedRating: 'H', standardRim: '7J', sectionWidth: '233', overallDiameter: '658', maxPressure: '340', utqg: '-' },
    { size: '225/55R17', loadIndex: '101 XL', loadCapacity: '825', speedRating: 'H', standardRim: '7J', sectionWidth: '233', overallDiameter: '680', maxPressure: '340', utqg: '-' },
    { size: '245/45R18', loadIndex: '100 XL', loadCapacity: '800', speedRating: 'H', standardRim: '8J', sectionWidth: '243', overallDiameter: '677', maxPressure: '340', utqg: '-' }
  ]
},
{
  id: 'SW99',
  name: 'SW-99',
  category: 'passenger', // winter-focused passenger / sedan / hatchback tyre
  tagline: 'Driving safely on snow and ice with confident handling.',
  description: 'SW-99 is designed for winter driving, providing superior traction, stability, and predictable handling on snow and icy roads. Its advanced uni-directional tread and zigzag grooves enhance grip, braking, and steering precision in cold conditions.',
  image: SW99, // ensure this image is imported
  season: 'Winter',

  features: [
    'Advanced uni-directional tread design for predictable handling',
    'Zigzag circumferential grooves for improved snow grip',
    'Cavity shape for effective water and ice film removal',
    'Enhanced biting edges for snow traction',
    'Optimized tread compound for superior cold-weather performance'
  ],

  sizes: [
    { size: '215/65R16', loadIndex: '98', loadCapacity: '750', speedRating: 'T', standardRim: '6 1/2J', sectionWidth: '221', overallDiameter: '686', maxPressure: '300', utqg: '-' },
    { size: '215/70R16', loadIndex: '100', loadCapacity: '800', speedRating: 'T', standardRim: '6 1/2J', sectionWidth: '221', overallDiameter: '708', maxPressure: '300', utqg: '-' },
    { size: '235/70R16', loadIndex: '106', loadCapacity: '950', speedRating: 'T', standardRim: '7J', sectionWidth: '240', overallDiameter: '736', maxPressure: '300', utqg: '-' },
    { size: '245/70R16', loadIndex: '107', loadCapacity: '975', speedRating: 'T', standardRim: '7J', sectionWidth: '248', overallDiameter: '750', maxPressure: '300', utqg: '-' },
    { size: '215/60R17', loadIndex: '96', loadCapacity: '710', speedRating: 'T', standardRim: '6 1/2J', sectionWidth: '221', overallDiameter: '690', maxPressure: '300', utqg: '-' },
    { size: '225/60R17', loadIndex: '99', loadCapacity: '775', speedRating: 'T', standardRim: '6 1/2J', sectionWidth: '228', overallDiameter: '702', maxPressure: '300', utqg: '-' },
    { size: '255/60R17', loadIndex: '106', loadCapacity: '950', speedRating: 'H', standardRim: '7 1/2J', sectionWidth: '260', overallDiameter: '738', maxPressure: '300', utqg: '-' },
    { size: '225/65R17', loadIndex: '102', loadCapacity: '850', speedRating: 'T', standardRim: '6 1/2J', sectionWidth: '228', overallDiameter: '724', maxPressure: '300', utqg: '-' },
    { size: '265/65R17', loadIndex: '112', loadCapacity: '1120', speedRating: 'T', standardRim: '8J', sectionWidth: '272', overallDiameter: '776', maxPressure: '300', utqg: '-' },
    { size: '235/55R18', loadIndex: '104 XL', loadCapacity: '900', speedRating: 'H', standardRim: '7 1/2J', sectionWidth: '245', overallDiameter: '715', maxPressure: '340', utqg: '-' },
    { size: '255/55R18', loadIndex: '109 XL', loadCapacity: '1030', speedRating: 'H', standardRim: '8J', sectionWidth: '265', overallDiameter: '737', maxPressure: '340', utqg: '-' },
    { size: '235/60R18', loadIndex: '107 XL', loadCapacity: '975', speedRating: 'H', standardRim: '7J', sectionWidth: '240', overallDiameter: '739', maxPressure: '340', utqg: '-' },
    { size: '265/60R18', loadIndex: '110', loadCapacity: '1060', speedRating: 'H', standardRim: '8J', sectionWidth: '272', overallDiameter: '775', maxPressure: '300', utqg: '-' },
    { size: '285/60R18', loadIndex: '120 XL', loadCapacity: '1400', speedRating: 'T', standardRim: '8 1/2J', sectionWidth: '292', overallDiameter: '799', maxPressure: '340', utqg: '-' },
    { size: '245/55R19', loadIndex: '103', loadCapacity: '875', speedRating: 'V', standardRim: '7 1/2J', sectionWidth: '253', overallDiameter: '753', maxPressure: '300', utqg: '-' },
    { size: '255/55R19', loadIndex: '111 XL', loadCapacity: '1090', speedRating: 'H', standardRim: '8J', sectionWidth: '265', overallDiameter: '763', maxPressure: '340', utqg: '-' },
    { size: '275/45R20', loadIndex: '110 XL', loadCapacity: '1060', speedRating: 'H', standardRim: '9J', sectionWidth: '273', overallDiameter: '756', maxPressure: '340', utqg: '-' }
  ]
},


{
  id: 'KAIJU-2',
  name: 'KAIJU-2',
  category: '4x4',
  tagline: 'Meet your daily adventures on and off the road.',
  description: 'KAIJU-2 is built for daily adventures, both on and off the road. Its robust tread design ensures stability, traction, and durability in diverse conditions, while maintaining comfort and performance.',
  image: KAIJU2,
  season: 'All Terrain',

  features: [
    'A Shape & Aggressive Groove for dynamic off-road handling',
    'Triple & Half Groove for improved stability and cornering',
    'Wide Centre Rib and Curved Groove Wall for precise control',
    'Pulse Groove design for better drainage and anti-hydroplaning',
    'Silica Tread Compound for enhanced fuel efficiency and wet traction'
  ],

  sizes: [
    { size: '245/70R16', loadIndex: '111 XL', loadCapacity: '1090', speedRating: 'T', standardRim: '7J', sectionWidth: '248', overallDiameter: '750', maxPressure: '350', utqg: '560 A B' },
    { size: '265/70R16', loadIndex: '116 XL', loadCapacity: '1250', speedRating: 'T', standardRim: '8J', sectionWidth: '272', overallDiameter: '778', maxPressure: '350', utqg: '560 A B' },
    { size: '265/75R16', loadIndex: '116 XL', loadCapacity: '1250', speedRating: 'T', standardRim: '7 1/2J', sectionWidth: '267', overallDiameter: '804', maxPressure: '350', utqg: '560 A B' },
    { size: '265/65R17', loadIndex: '116 XL', loadCapacity: '1250', speedRating: 'T', standardRim: '8J', sectionWidth: '272', overallDiameter: '776', maxPressure: '350', utqg: '560 A B' },
    { size: '285/70R17', loadIndex: '120 XL', loadCapacity: '1400', speedRating: 'T', standardRim: '8 1/2J', sectionWidth: '292', overallDiameter: '838', maxPressure: '350', utqg: '560 A B' },
    { size: '265/60R18', loadIndex: '114 XL', loadCapacity: '1180', speedRating: 'T', standardRim: '8J', sectionWidth: '272', overallDiameter: '775', maxPressure: '350', utqg: '560 A B' },
    { size: '275/65R18', loadIndex: '116 XL', loadCapacity: '1250', speedRating: 'T', standardRim: '8J', sectionWidth: '275', overallDiameter: '815', maxPressure: '350', utqg: '560 A B' },
    { size: '265/50R20', loadIndex: '111 XL', loadCapacity: '1090', speedRating: 'T', standardRim: '8 1/2J', sectionWidth: '277', overallDiameter: '774', maxPressure: '350', utqg: '560 A B' },
    { size: '275/55R20', loadIndex: '117 XL', loadCapacity: '1285', speedRating: 'T', standardRim: '8 1/2J', sectionWidth: '284', overallDiameter: '810', maxPressure: '350', utqg: '560 A B' }
  ]
},

{
  id: 'SM-5',
  name: 'SM-5',
  category: '4x4',
  tagline: 'Balance performance over various terrains.',
  description: 'SM-5 delivers reliable performance across diverse terrains, combining durability, traction, and comfort for both on- and off-road driving.',
  image: SM5,
  season: 'All Terrain',

  features: [
    'A Shape & Aggressive Groove for dynamic handling',
    'Triple & Half Groove for improved stability and steering response',
    'Wide Centre Rib and Curved Groove Wall for precise cornering',
    'Pulse Groove for better drainage and anti-hydroplaning',
    'Silica Tread Compound for fuel efficiency and wet traction'
  ],

  sizes: [
    { size: '235/70R16', loadIndex: '106', loadCapacity: '950', speedRating: 'T', standardRim: '7J', sectionWidth: '240', overallDiameter: '736', maxPressure: '300', utqg: '560 A B' },
    { size: '265/70R16', loadIndex: '112', loadCapacity: '1120', speedRating: 'T', standardRim: '8J', sectionWidth: '272', overallDiameter: '778', maxPressure: '300', utqg: '560 A B' },
    { size: '275/70R16', loadIndex: '114', loadCapacity: '1180', speedRating: 'S', standardRim: '8J', sectionWidth: '279', overallDiameter: '792', maxPressure: '300', utqg: '560 A B' },
    { size: '265/65R17', loadIndex: '112', loadCapacity: '1120', speedRating: 'S', standardRim: '8J', sectionWidth: '272', overallDiameter: '776', maxPressure: '300', utqg: '560 A B' },
    { size: '275/65R17', loadIndex: '115', loadCapacity: '1215', speedRating: 'S', standardRim: '8J', sectionWidth: '279', overallDiameter: '790', maxPressure: '300', utqg: '560 A B' },
    { size: '285/65R17', loadIndex: '116', loadCapacity: '1250', speedRating: 'S', standardRim: '8 1/2J', sectionWidth: '292', overallDiameter: '802', maxPressure: '300', utqg: '560 A B' },
    { size: '265/40R18', loadIndex: '101 XL', loadCapacity: '825', speedRating: 'V', standardRim: '9 1/2J', sectionWidth: '271', overallDiameter: '669', maxPressure: '340', utqg: '560 A B' }
  ]
}
,
{
  id: 'PRESA MT',
  name: 'PRESA M/T',
  category: 'light-truck', // updated category
  tagline: 'Experience go-anywhere performance with amazing traction.',
  description: 'PRESA M/T delivers exceptional off-road performance with superior traction and durability. Designed for demanding terrain, it combines rugged construction with precise handling for both on- and off-road adventures.',
  image: PRESAMT,
  season: 'All Terrain / Off-Road',

  features: [
    'A Shape & Aggressive Groove for dynamic handling',
    'Triple & Half Groove for improved stability',
    'Wide Centre Rib and Curved Groove Wall for precise cornering',
    'Pulse Groove for effective water and mud evacuation',
    'Silica Tread Compound for improved wet and off-road traction'
  ],

  sizes: [
    { size: '215/75R15LT', loadIndex: '100/97', loadCapacity: '800/730', speedRating: 'Q', standardRim: '6J', sectionWidth: '215', overallDiameter: '703', maxPressure: '248', utqg: '-' },
    { size: '235/75R15LT', loadIndex: '104/101', loadCapacity: '900/825', speedRating: 'Q', standardRim: '6 1/2J', sectionWidth: '235', overallDiameter: '733', maxPressure: '248', utqg: '-' },
    { size: '30X9.50R15LT', loadIndex: '104', loadCapacity: '900', speedRating: 'Q', standardRim: '7 1/2J', sectionWidth: '241', overallDiameter: '762', maxPressure: '241', utqg: '-' },
    { size: '235/85R16LT', loadIndex: '120/116', loadCapacity: '1400/1250', speedRating: 'Q', standardRim: '6 1/2J', sectionWidth: '235', overallDiameter: '812', maxPressure: '345', utqg: '-' },
    { size: '245/75R16LT', loadIndex: '120/116', loadCapacity: '1400/1250', speedRating: 'Q', standardRim: '7J', sectionWidth: '248', overallDiameter: '780', maxPressure: '345', utqg: '-' },
    { size: '265/75R16LT', loadIndex: '123/120', loadCapacity: '1550/1400', speedRating: 'Q', standardRim: '7 1/2J', sectionWidth: '267', overallDiameter: '810', maxPressure: '345', utqg: '-' },
    { size: '245/75R17', loadIndex: '112', loadCapacity: '1120', speedRating: 'S', standardRim: '7J', sectionWidth: '248', overallDiameter: '800', maxPressure: '248', utqg: '-' },
    { size: '255/75R17LT', loadIndex: '111/108', loadCapacity: '1090/1000', speedRating: 'Q', standardRim: '7J', sectionWidth: '255', overallDiameter: '814', maxPressure: '345', utqg: '-' },
    { size: '265/65R17LT', loadIndex: '120/117', loadCapacity: '1400/1285', speedRating: 'Q', standardRim: '8J', sectionWidth: '265', overallDiameter: '776', maxPressure: '345', utqg: '-' },
    { size: '265/70R17LT', loadIndex: '118/115', loadCapacity: '1320/1215', speedRating: 'Q', standardRim: '8J', sectionWidth: '272', overallDiameter: '810', maxPressure: '345', utqg: '-' },
    { size: '285/65R17', loadIndex: '116', loadCapacity: '1250', speedRating: 'S', standardRim: '8 1/2J', sectionWidth: '285', overallDiameter: '802', maxPressure: '248', utqg: '-' },
    { size: '265/60R18', loadIndex: '110', loadCapacity: '1060', speedRating: 'S', standardRim: '8J', sectionWidth: '272', overallDiameter: '775', maxPressure: '240', utqg: '-' },
    { size: '285/60R18', loadIndex: '116', loadCapacity: '1250', speedRating: 'S', standardRim: '8 1/2J', sectionWidth: '285', overallDiameter: '799', maxPressure: '248', utqg: '-' }
  ]
},
{
  id: 'FUERTE K99',
  name: 'FUERTE K99',
  category: 'light-truck', // light truck / commercial category
  tagline: 'Address the multi-purpose needs of modern commercial vehicles.',
  description: 'FUERTE K99 is designed for commercial vehicles needing reliable performance and durability. It balances strength, handling, and traction for various loads and road conditions.',
  image: FUERTEK99, // ensure this image is imported
  season: 'All Season',

  features: [
    'A Shape & Aggressive Groove for dynamic handling',
    'Triple & Half Groove for improved stability',
    'Wide Centre Rib and Curved Groove Wall for precise cornering',
    'Pulse Groove for better water and mud drainage',
    'Silica Tread Compound for enhanced wet traction and fuel efficiency'
  ],

  sizes: [
    { size: '195R14C', loadIndex: '106/104', loadCapacity: '950/900', speedRating: 'S', standardRim: '5 1/2J', sectionWidth: '206', overallDiameter: '666', maxPressure: '450', utqg: '-' },
    { size: '205/70R15C', loadIndex: '106/104', loadCapacity: '950/900', speedRating: 'S', standardRim: '6J', sectionWidth: '205', overallDiameter: '669', maxPressure: '450', utqg: '-' },
    { size: '215/70R15C', loadIndex: '109/107', loadCapacity: '1030/975', speedRating: 'S', standardRim: '6 1/2J', sectionWidth: '215', overallDiameter: '683', maxPressure: '450', utqg: '-' }
  ]
},

{
  id: 'SM-1',
  name: 'SM-1',
  category: 'light-truck',
  tagline: 'Gain more mileage through extended periods of wear.',
  description: 'SM-1 is engineered for commercial and light truck applications requiring long-lasting durability and consistent performance. Its robust construction supports heavy loads while delivering stable handling and extended tread life.',
  image: SM1, // make sure this is imported
  season: 'All Season',

  features: [
    'A Shape & Aggressive Groove for dynamic handling',
    'Triple & Half Groove for improved stability',
    'Wide Centre Rib and Curved Groove Wall for precise cornering',
    'Pulse Groove for enhanced water evacuation',
    'Silica Tread Compound for improved durability and wet performance'
  ],

  sizes: [
    { size: '165R13C', loadIndex: '89/88', loadCapacity: '615/580', speedRating: 'S', standardRim: '4.50B', sectionWidth: '167', overallDiameter: '596', maxPressure: '375', utqg: '-' },
    { size: '185R14C', loadIndex: '102/100', loadCapacity: '850/800', speedRating: 'R', standardRim: '5 1/2J', sectionWidth: '189', overallDiameter: '652', maxPressure: '450', utqg: '-' },
    { size: '195R14C', loadIndex: '106/104', loadCapacity: '950/900', speedRating: 'R', standardRim: '5 1/2J', sectionWidth: '198', overallDiameter: '666', maxPressure: '450', utqg: '-' },
    { size: '195R15C', loadIndex: '106/104', loadCapacity: '950/900', speedRating: 'N', standardRim: '5 1/2J', sectionWidth: '198', overallDiameter: '690', maxPressure: '450', utqg: '-' },
    { size: '195/70R15C', loadIndex: '104/102', loadCapacity: '755/710', speedRating: 'R', standardRim: '6J', sectionWidth: '201', overallDiameter: '655', maxPressure: '450', utqg: '-' },
    { size: '205/70R15C', loadIndex: '106/104', loadCapacity: '950/900', speedRating: 'R', standardRim: '6J', sectionWidth: '206', overallDiameter: '669', maxPressure: '450', utqg: '-' },
    { size: '225/70R15C', loadIndex: '112/110', loadCapacity: '975/875', speedRating: 'S', standardRim: '6 1/2J', sectionWidth: '228', overallDiameter: '697', maxPressure: '450', utqg: '-' },
    { size: '215/75R16C', loadIndex: '116/114', loadCapacity: '1250/1180', speedRating: 'R', standardRim: '6J', sectionWidth: '216', overallDiameter: '728', maxPressure: '475', utqg: '-' },
    { size: '245/75R16C', loadIndex: '120/116', loadCapacity: '1400/1250', speedRating: 'S', standardRim: '7J', sectionWidth: '248', overallDiameter: '774', maxPressure: '550', utqg: '-' },
    { size: '265/70R17C', loadIndex: '112/109', loadCapacity: '1320/1215', speedRating: 'S', standardRim: '8J', sectionWidth: '272', overallDiameter: '804', maxPressure: '450', utqg: '-' }
  ]
},

{
  id: 'KMX707',
  name: 'KMX707',
  category: 'truck-bus',
  tagline: 'More miles, greater retreadability, lower cost per kilometer.',
  description:
    "Fleets today need more miles, greater retreadability, longer even-wear and less maintenance costs per kilometer from their tyres. Given the extreme demands of today's transport industry, Kinto's technology helps you get the most out of your tyre investments.",
  image: KMX707, // make sure this is imported
  season: 'All Season',

  features: [
    'Designed for long-haul and regional transport applications',
    'Enhanced retreadability for extended tyre life',
    'Even-wear tread design for consistent performance',
    'Reduced maintenance cost per kilometer',
    'Engineered for extreme transport industry demands'
  ],

  sizes: [
    {
      size: '11R22.5',
      description: '149/146L',
      plyRating: '18',
      treadDepth: '15',
      standardRim: '8.25',
      ttTl: 'TL'
    },
    {
      size: '295/80R22.5',
      description: '154/149M',
      plyRating: '18',
      treadDepth: '16',
      standardRim: '9',
      ttTl: 'TL'
    }
  ]
},

{
  id: 'SLH101',
  name: 'SLH101',
  category: 'truck-bus',
  tagline: 'More miles, greater retreadability, lower cost per kilometer.',
  description:
    "Fleets today need more miles, greater retreadability, longer even-wear and less maintenance costs per kilometer from their tyres. Given the extreme demands of today's transport industry, Kinto's technology helps you get the most out of your tyre investments.",
  image: SLH101, // make sure this is imported
  season: 'All Season',

  features: [
    'Optimised for long-haul and regional transport fleets',
    'Greater retreadability for extended service life',
    'Even-wear tread design for consistent mileage',
    'Reduced maintenance cost per kilometer',
    'Built to withstand extreme transport industry demands'
  ],

  sizes: [
    {
      size: '11R22.5',
      description: '149/146L',
      plyRating: '18',
      treadDepth: '15',
      standardRim: '8.25',
      ttTl: 'TL'
    },
    {
      size: '295/80R22.5',
      description: '154/149M',
      plyRating: '18',
      treadDepth: '16',
      standardRim: '9',
      ttTl: 'TL'
    }
  ]
},

{
  id: 'SLH100',
  name: 'SLH100',
  category: 'truck-bus',
  tagline: 'Greater mileage, retreadability, and lower cost per kilometer.',
  description:
    "Fleets today need more miles, greater retreadability, longer even-wear and less maintenance costs per kilometer from their tyres. Given the extreme demands of today's transport industry, Kinto's technology helps you get the most out of your tyre investments.",
  image: SLH100, // make sure this image is imported
  season: 'All Season',

  features: [
    'Designed for extended mileage and even wear',
    'Enhanced retreadability for fleet efficiency',
    'Durable casing for heavy-duty applications',
    'Reliable performance under extreme transport conditions'
  ],

  sizes: [
    {
      size: '11R22.5',
      description: '148/145M',
      plyRating: '18',
      treadDepth: '14',
      standardRim: '8.25',
      ttTl: 'TL'
    },
    {
      size: '295/80R22.5',
      description: '154/149M',
      plyRating: '18',
      treadDepth: '14',
      standardRim: '9',
      ttTl: 'TL'
    }
  ]
},
{
  id: 'KMX700',
  name: 'KMX700',
  category: 'truck-bus',
  tagline: 'Built for long-haul durability and lower cost per kilometer.',
  description:
    "Fleets today need more miles, greater retreadability, longer even-wear and less maintenance costs per kilometer from their tyres. Given the extreme demands of today's transport industry, Kinto's technology helps you get the most out of your tyre investments.",
  image: KMX700, // make sure this is imported

  features: [
    'Designed for long-distance fleet operations',
    'Enhanced retreadability for extended tyre life',
    'Even wear pattern for consistent performance',
    'Reduced maintenance cost per kilometer',
    'Optimized casing strength for heavy loads'
  ],

  sizes: [
    {
      size: '10.00R20',
      description: '149/146K',
      plyRating: '18',
      treadDepth: '16',
      standardRim: '7.5',
      ttTl: 'TT'
    },
    {
      size: '11.00R20',
      description: '152/149K',
      plyRating: '18',
      treadDepth: '16.5',
      standardRim: '8',
      ttTl: 'TT'
    },
    {
      size: '12.00R20',
      description: '154/151K',
      plyRating: '18',
      treadDepth: '17',
      standardRim: '8.5',
      ttTl: 'TT'
    },
    {
      size: '315/80R22.5',
      description: '161/154J',
      plyRating: '22',
      treadDepth: '14.5',
      standardRim: '9',
      ttTl: 'TL'
    }
  ]
},
{
  id: 'KMX703',
  name: 'KMX703',
  category: 'truck-bus',
  tagline: 'Reliable performance with extended service life.',
  description:
    "Fleets today need more miles, greater retreadability, longer even-wear and less maintenance costs per kilometer from their tyres. Given the extreme demands of today's transport industry, Kinto's technology helps you get the most out of your tyre investments.",
  image: KMX703, // make sure this is imported

  features: [
    'Optimized for commercial fleet operations',
    'Even wear pattern for longer mileage',
    'Strong casing for enhanced retreadability',
    'Stable handling under heavy loads',
    'Lower operating cost per kilometer'
  ],

  sizes: [
    {
      size: '7.00R16',
      description: '118/114L',
      plyRating: '14',
      treadDepth: '9.5',
      standardRim: '5.5',
      ttTl: 'TT'
    },
    {
      size: '7.50R16',
      description: '122/118L',
      plyRating: '14',
      treadDepth: '10',
      standardRim: '6',
      ttTl: 'TT'
    }
  ]
},

{
  id: 'KMN606',
  name: 'KMN606',
  category: 'truck-bus',
  tagline: 'Built for extreme transport demands with superior durability.',
  description: 'KMN606 is designed for heavy-duty truck and bus applications, delivering excellent mileage, retreadability, and reduced maintenance costs under extreme operating conditions.',
  image: KMN606, // make sure this is imported
  season: 'All Season',

  features: [
    'Designed for long mileage and even wear',
    'High retreadability for fleet efficiency',
    'Robust casing for heavy-duty operations',
    'Optimized tread depth for durability',
    'Reduced cost per kilometer'
  ],

  sizes: [
    {
      size: '10.00R20',
      loadIndex: '149/146G',
      plyRating: '18',
      treadDepth: '18.5',
      standardRim: '7.5',
      ttTl: 'TT'
    },
    {
      size: '11.00R20',
      loadIndex: '152/149G',
      plyRating: '18',
      treadDepth: '20',
      standardRim: '8',
      ttTl: 'TT'
    },
    {
      size: '12.00R20',
      loadIndex: '154/151K',
      plyRating: '18',
      treadDepth: '20',
      standardRim: '8.5',
      ttTl: 'TT'
    }
  ]
},
{
  id: 'RGN200',
  name: 'RGN200',
  category: 'truck-bus',
  tagline: 'Long-mileage regional tyre engineered for fleet efficiency.',
  description:
    'RGN200 is designed to meet the extreme demands of today’s transport industry, delivering more miles, greater retreadability, and longer, even wear. Built with Kinto’s advanced tyre technology, it helps fleets reduce maintenance costs per kilometer while maximizing return on tyre investment.',
  image: RGN200, // make sure this is imported
  season: 'All Season',

  features: [
    'Optimized tread design for long and even wear',
    'Enhanced retreadability for extended tyre life',
    'Reduced maintenance cost per kilometer',
    'Durable casing for regional and long-haul operations',
    'Reliable performance under heavy fleet usage'
  ],

  sizes: [
    {
      size: '295/80R22.5',
      description: '154/149M',
      plyRating: '18',
      treadDepth: '20',
      standardRim: '9',
      ttTl: 'TL'
    },
    {
      size: '315/80R22.5',
      description: '154/151M, 157/154L',
      plyRating: '18',
      treadDepth: '20',
      standardRim: '9',
      ttTl: 'TL'
    },
    {
      size: '11R22.5',
      description: '148/145M',
      plyRating: '16',
      treadDepth: '19.5',
      standardRim: '8.25',
      ttTl: 'TL'
    },
    {
      size: '12R22.5',
      description: '152/149M',
      plyRating: '18',
      treadDepth: '19.5',
      standardRim: '9',
      ttTl: 'TL'
    }
  ]
},

{
  id: 'E3L3',
  name: 'E3L3',
  category: 'off-road',
  tagline: 'Heavy-duty earthmover tyres built for extreme load and durability.',
  description: 'E3L3 tyres are engineered for demanding off-road, mining, and construction applications, delivering superior load capacity, cut resistance, and long service life under harsh working conditions.',
  image: E3L3, // make sure this is imported
  season: 'All Season',

  features: [
    'Extra-deep E3/L3 tread for long wear life',
    'High load-carrying capability for heavy equipment',
    'Strong casing for resistance against cuts and impacts',
    'Excellent traction on rough and loose surfaces',
    'Reliable performance in mining and construction sites'
  ],

  sizes: [
    {
      size: '7.50-16',
      pr: '14',
      standardRim: '6.00',
      loadCapacityPressure: '1500 / 210',
      sectionWidth: '185',
      overallDiameter: '761',
      ttfTl: 'TTF'
    },
    {
      size: '8.25-16',
      pr: '14',
      standardRim: '6.50',
      loadCapacityPressure: '1700 / 240',
      sectionWidth: '235',
      overallDiameter: '855',
      ttfTl: 'TTF'
    },
    {
      size: '9.00-16',
      pr: '16',
      standardRim: '6.50',
      loadCapacityPressure: '2120 / 280',
      sectionWidth: '255',
      overallDiameter: '890',
      ttfTl: 'TTF'
    },
    {
      size: '12.00-16',
      pr: '16',
      standardRim: '6.50',
      loadCapacityPressure: '2700 / 280',
      sectionWidth: '325',
      overallDiameter: '1145',
      ttfTl: 'TTF'
    },
    {
      size: '20.5/70-16',
      pr: '12',
      standardRim: '6.50H',
      loadCapacityPressure: '1600 / 280',
      sectionWidth: '340',
      overallDiameter: '920',
      ttfTl: 'TTF'
    },
    {
      size: '16/70-20',
      pr: '16',
      standardRim: '13.00',
      loadCapacityPressure: '2600 / 350',
      sectionWidth: '410',
      overallDiameter: '1067',
      ttfTl: 'TTF'
    },
    {
      size: '16/70-24',
      pr: '18',
      standardRim: '13.00',
      loadCapacityPressure: '5150 / 450',
      sectionWidth: '410',
      overallDiameter: '1175',
      ttfTl: 'TTF'
    },
    {
      size: '14.00-24',
      pr: '24',
      standardRim: '11.00',
      loadCapacityPressure: '5150 / 575',
      sectionWidth: '375',
      overallDiameter: '1370',
      ttfTl: 'TTF'
    },
    {
      size: '16.00-24',
      pr: '24',
      standardRim: '11.25 / 2.0',
      loadCapacityPressure: '10600 / 650',
      sectionWidth: '430',
      overallDiameter: '1495',
      ttfTl: 'TTF'
    },
    {
      size: '16.00-25',
      pr: '28',
      standardRim: '11.25 / 2.0',
      loadCapacityPressure: '11500 / 750',
      sectionWidth: '430',
      overallDiameter: '1490',
      ttfTl: 'TTF'
    },
    {
      size: '18.00-25',
      pr: '32',
      standardRim: '13.00 / 2.5',
      loadCapacityPressure: '16000 / 850',
      sectionWidth: '495',
      overallDiameter: '1615',
      ttfTl: 'TTF'
    },
    {
      size: '15.5-25',
      pr: '20',
      standardRim: '12.00 / 1.3',
      loadCapacityPressure: '3625 / 325',
      sectionWidth: '395',
      overallDiameter: '1275',
      ttfTl: 'TTF'
    },
    {
      size: '17.5-25',
      pr: '20',
      standardRim: '14.00 / 1.5',
      loadCapacityPressure: '5000 / 400',
      sectionWidth: '445',
      overallDiameter: '1350',
      ttfTl: 'TTF/TL'
    },
    {
      size: '20.5-25',
      pr: '24',
      standardRim: '17.00 / 2.0',
      loadCapacityPressure: '5400 / 275',
      sectionWidth: '520',
      overallDiameter: '1490',
      ttfTl: 'TTF/TL'
    },
    {
      size: '23.5-25',
      pr: '24',
      standardRim: '19.50 / 2.5',
      loadCapacityPressure: '8000 / 350',
      sectionWidth: '595',
      overallDiameter: '1615',
      ttfTl: 'TTF/TL'
    },
    {
      size: '17.5-25',
      pr: '20',
      standardRim: '14.00 / 1.5',
      loadCapacityPressure: '5000 / 400',
      sectionWidth: '445',
      overallDiameter: '1350',
      ttfTl: 'TL'
    },
    {
      size: '23.5-25',
      pr: '24',
      standardRim: '19.50 / 2.5',
      loadCapacityPressure: '8000 / 350',
      sectionWidth: '595',
      overallDiameter: '1615',
      ttfTl: 'TL'
    },
    {
      size: '26.5-25',
      pr: '28',
      standardRim: '22.00 / 3.0',
      loadCapacityPressure: '15500 / 475',
      sectionWidth: '645',
      overallDiameter: '1743',
      ttfTl: 'TTF'
    },
    {
      size: '29.5-25',
      pr: '28',
      standardRim: '25.00 / 3.5',
      loadCapacityPressure: '17500 / 425',
      sectionWidth: '750',
      overallDiameter: '1850',
      ttfTl: 'TL'
    }
  ]
},
{
  id: 'E3L3+',
  name: 'E3L3+',
  category: 'off-road',
  tagline: 'Enhanced E3/L3 tyres with higher load capacity for extreme duty.',
  description: 'E3L3+ tyres are an upgraded version of the E3/L3 pattern, designed for heavy earthmoving, mining, and construction operations where higher load capacity, durability, and stability are critical.',
  image: E3L3PLUS, 
  season: 'All Season',

  features: [
    'Enhanced load capacity compared to standard E3/L3 tyres',
    'Extra-deep tread for extended service life',
    'Reinforced casing for severe mining and quarry conditions',
    'Excellent traction on rocky and loose terrain',
    'Stable performance under high inflation pressure'
  ],

  sizes: [
    {
      size: '17.5-25',
      pr: '20',
      standardRim: '14.00 / 1.5',
      loadCapacityPressure: '8250 / 575',
      sectionWidth: '445',
      overallDiameter: '1350',
      ttfTl: 'TTF/TL'
    },
    {
      size: '20.5-25',
      pr: '24',
      standardRim: '17.00 / 2.0',
      loadCapacityPressure: '10300 / 525',
      sectionWidth: '520',
      overallDiameter: '1490',
      ttfTl: 'TTF/TL'
    },
    {
      size: '23.5-25',
      pr: '24',
      standardRim: '19.50 / 2.5',
      loadCapacityPressure: '12500 / 475',
      sectionWidth: '595',
      overallDiameter: '1615',
      ttfTl: 'TTF/TL'
    }
  ]
},
{
  id: 'E3L3B',
  name: 'E3L3B',
  category: 'off-road',
  tagline: 'Heavy-duty E3/L3 bias tyres engineered for tough terrain.',
  description: 'E3L3B tyres are built for demanding earthmoving and construction environments, offering strong bias construction, high load capacity, and reliable traction on rough and rocky surfaces.',
  image: E3L3B, // make sure this is imported
  season: 'All Season',

  features: [
    'Bias construction for enhanced toughness',
    'High load-carrying capability for heavy equipment',
    'Deep E3/L3 tread for long service life',
    'Strong casing for resistance to cuts and impacts',
    'Reliable traction in construction and mining applications'
  ],

  sizes: [
    {
      size: '17.5-25',
      pr: '20',
      standardRim: '14.00 / 1.5',
      loadCapacityPressure: '8250 / 575',
      sectionWidth: '445',
      overallDiameter: '1350',
      ttfTl: 'TTF'
    },
    {
      size: '20.5-25',
      pr: '24',
      standardRim: '17.00 / 2.0',
      loadCapacityPressure: '10300 / 525',
      sectionWidth: '520',
      overallDiameter: '1490',
      ttfTl: 'TTF'
    },
    {
      size: '23.5-25',
      pr: '24',
      standardRim: '19.50 / 2.5',
      loadCapacityPressure: '12500 / 475',
      sectionWidth: '595',
      overallDiameter: '1615',
      ttfTl: 'TTF'
    }
  ]
},
{
  id: 'E3L3B+',
  name: 'E3L3B+',
  category: 'off-road',
  tagline: 'Upgraded bias E3/L3 tyres with optimized load efficiency.',
  description: 'E3L3B+ tyres are an enhanced bias-construction variant of the E3/L3 pattern, designed for earthmoving and construction equipment requiring optimized load capacity, durability, and consistent performance on harsh terrain.',
  image: E3L3BPLUS, // make sure this is imported
  season: 'All Season',

  features: [
    'Enhanced bias construction for tough working conditions',
    'Optimized load capacity with balanced inflation pressure',
    'Deep E3/L3 tread for extended tyre life',
    'Reinforced casing to resist cuts and impacts',
    'Consistent traction on rocky and uneven surfaces'
  ],

  sizes: [
    {
      size: '17.5-25',
      pr: '20',
      standardRim: '14.00 / 1.5',
      loadCapacityPressure: '7300 / 475',
      sectionWidth: '445',
      overallDiameter: '1350',
      ttfTl: 'TTF'
    },
    {
      size: '20.5-25',
      pr: '24',
      standardRim: '17.00 / 2.0',
      loadCapacityPressure: '9500 / 450',
      sectionWidth: '520',
      overallDiameter: '1490',
      ttfTl: 'TTF'
    },
    {
      size: '23.5-25',
      pr: '24',
      standardRim: '19.50 / 2.5',
      loadCapacityPressure: '10900 / 375',
      sectionWidth: '595',
      overallDiameter: '1615',
      ttfTl: 'TTF'
    }
  ]
},
{
  id: 'E3L3C',
  name: 'E3L3C',
  category: 'off-road',
  tagline: 'Compact E3/L3 tyres for light earthmoving and utility use.',
  description: 'E3L3C tyres are designed for compact loaders and light earthmoving equipment, offering reliable traction, durability, and stable performance in construction and utility applications.',
  image: E3L3C, // make sure this is imported
  season: 'All Season',

  features: [
    'Compact E3/L3 tread for light-duty earthmoving',
    'Durable casing for construction and utility work',
    'Stable load handling under moderate inflation pressure',
    'Good traction on loose and uneven surfaces',
    'Long service life in compact equipment applications'
  ],

  sizes: [
    {
      size: '8.25-16',
      pr: '12',
      standardRim: '6.50H',
      loadCapacityPressure: '650 / 210',
      sectionWidth: '235',
      overallDiameter: '855',
      ttfTl: 'TTF'
    },
    {
      size: '20.5/70-16',
      pr: '14',
      standardRim: '8.50H',
      loadCapacityPressure: '1600 / 280',
      sectionWidth: '340',
      overallDiameter: '920',
      ttfTl: 'TTF'
    },
    {
      size: '23.5/70-16',
      pr: '16',
      standardRim: '8.50H',
      loadCapacityPressure: '1600 / 320',
      sectionWidth: '345',
      overallDiameter: '925',
      ttfTl: 'TTF'
    }
  ]
},

{
  id: 'G2L2',
  name: 'G2L2',
  category: 'off-road',
  tagline: 'Built for extreme off-the-road applications.',
  description: 'G2L2 is designed for heavy-duty off-the-road use, delivering high load capacity, strong casing strength, and reliable performance in harsh working conditions.',
  image: G2L2, // make sure this is imported
  season: 'All Season',

  features: [
    'High load carrying capability',
    'Reinforced casing for harsh terrains',
    'Stable performance under heavy pressure',
    'Optimized tread design for durability',
    'Reliable traction in off-road conditions'
  ],

  sizes: [
    {
      size: '13.00-24',
      pr: '12',
      standardRim: '8.00TG',
      loadCapacityPressure: '3070 / 325',
      sectionWidth: '330',
      overallDiameter: '1280',
      ttfTl: 'TTF'
    },
    {
      size: '14.00-24 XL',
      pr: '16',
      standardRim: '8.00TG',
      loadCapacityPressure: '3650 / 375',
      sectionWidth: '362',
      overallDiameter: '1348',
      ttfTl: 'TTF'
    },
    {
      size: '15.5-25',
      pr: '12',
      standardRim: '12.00/1.3',
      loadCapacityPressure: '2650 / 250',
      sectionWidth: '395',
      overallDiameter: '1275',
      ttfTl: 'TTF'
    },
    {
      size: '17.5-25',
      pr: '20',
      standardRim: '14.00/1.5',
      loadCapacityPressure: '2900 / 200',
      sectionWidth: '445',
      overallDiameter: '1145',
      ttfTl: 'TTF'
    },
    {
      size: '20.5-25',
      pr: '20',
      standardRim: '17.00/2.0',
      loadCapacityPressure: '4000 / 225',
      sectionWidth: '520',
      overallDiameter: '1490',
      ttfTl: 'TTF'
    },
    {
      size: '23.5-25',
      pr: '24',
      standardRim: '19.00/2.5',
      loadCapacityPressure: '4750 / 200',
      sectionWidth: '595',
      overallDiameter: '1615',
      ttfTl: 'TTF'
    }
  ]
},
{
  id: 'R3',
  name: 'R3',
  category: 'off-road',
  tagline: 'Heavy-duty traction for demanding off-road operations.',
  description: 'R3 is engineered for tough off-road environments, offering strong load capacity, durable construction, and stable performance under high pressure.',
  image: R3, // make sure this is imported
  season: 'All Season',

  features: [
    'High load capacity for heavy-duty applications',
    'Durable casing construction',
    'Stable performance under high inflation pressure',
    'Optimized tread for off-road traction',
    'Reliable operation in harsh environments'
  ],

  sizes: [
    {
      size: '23.1-26',
      pr: '12',
      standardRim: 'DW20',
      loadCapacityPressure: '3610 / 170',
      sectionWidth: '587',
      overallDiameter: '1580',
      ttfTl: 'TTF/TL'
    },
    {
      size: '23.1-26',
      pr: '14',
      standardRim: 'DW20',
      loadCapacityPressure: '3970 / 200',
      sectionWidth: '587',
      overallDiameter: '1580',
      ttfTl: 'TTF/TL'
    },
    {
      size: '23.1-26',
      pr: '16',
      standardRim: 'DW20',
      loadCapacityPressure: '4300 / 230',
      sectionWidth: '587',
      overallDiameter: '1580',
      ttfTl: 'TTF/TL'
    }
  ]
},
{
  id: 'R4',
  name: 'R4',
  category: 'off-road',
  tagline: 'Reliable traction and durability for demanding off-road applications.',
  description: 'R4 is designed for construction, agricultural, and industrial off-road use, delivering strong load support, durability, and consistent performance in harsh working conditions.',
  image: R4, // make sure this is imported
  season: 'All Season',

  features: [
    'High load-bearing capacity',
    'Durable casing for rough terrain',
    'Stable performance under heavy inflation pressure',
    'Optimized tread for off-road traction',
    'Long service life in demanding environments'
  ],

  sizes: [
    {
      size: '16.9-24 XL',
      pr: '16',
      standardRim: 'W15L',
      loadCapacityPressure: '3550 / 350',
      sectionWidth: '430',
      overallDiameter: '1335',
      ttfTl: 'TL'
    },
    {
      size: '16.9-28',
      pr: '12',
      standardRim: 'W15L',
      loadCapacityPressure: '3450 / 260',
      sectionWidth: '430',
      overallDiameter: '1435',
      ttfTl: 'TL'
    },
    {
      size: '18.4-26',
      pr: '12',
      standardRim: 'DW16A',
      loadCapacityPressure: '3875 / 250',
      sectionWidth: '467',
      overallDiameter: '1426',
      ttfTl: 'TL'
    },
    {
      size: '17.5L-24',
      pr: '12',
      standardRim: 'DW15L',
      loadCapacityPressure: '3000 / 260',
      sectionWidth: '445',
      overallDiameter: '1241',
      ttfTl: 'TL'
    },
    {
      size: '19.5L-24',
      pr: '12',
      standardRim: 'W16L',
      loadCapacityPressure: '2145 / 210',
      sectionWidth: '495',
      overallDiameter: '1314',
      ttfTl: 'TL'
    },
    {
      size: '21L-24',
      pr: '12',
      standardRim: 'DW18A',
      loadCapacityPressure: '3875 / 220',
      sectionWidth: '533',
      overallDiameter: '1402',
      ttfTl: 'TL'
    }
  ]
},
{
  id: 'L5',
  name: 'L5',
  category: 'off-road',
  tagline: 'Heavy-duty tyres for construction and mining applications.',
  description: 'L5 tyres are designed for extreme load conditions in construction, mining, and industrial applications, providing high load support, durability, and stable performance under heavy inflation pressures.',
  image: L5, // make sure this is imported
  season: 'All Season',

  features: [
    'High load-bearing capacity',
    'Durable casing for tough terrains',
    'Stable performance under heavy inflation pressure',
    'Optimized tread for off-road traction',
    'Long service life in demanding environments'
  ],

  sizes: [
    {
      size: '17.5-25',
      pr: '24',
      standardRim: '14.00/1.5',
      loadCapacityPressure: '7300 / 475',
      sectionWidth: '420',
      overallDiameter: '1340',
      ttfTl: 'TTF/TL'
    },
    {
      size: '20.5-25',
      pr: '24',
      standardRim: '17.00/2.0',
      loadCapacityPressure: '9500 / 450',
      sectionWidth: '500',
      overallDiameter: '1479',
      ttfTl: 'TTF/TL'
    },
    {
      size: '23.5-25',
      pr: '28',
      standardRim: '19.50/2.5',
      loadCapacityPressure: '10900 / 375',
      sectionWidth: '568',
      overallDiameter: '1588',
      ttfTl: 'TTF/TL'
    },
    {
      size: '23.5-25',
      pr: '32',
      standardRim: '19.50/2.5',
      loadCapacityPressure: '11500 / 390',
      sectionWidth: '568',
      overallDiameter: '1588',
      ttfTl: 'TTF/TL'
    },
    {
      size: '26.5-25',
      pr: '32',
      standardRim: '22.00/3.00',
      loadCapacityPressure: '15500 / 475',
      sectionWidth: '643',
      overallDiameter: '1758',
      ttfTl: 'TTF/TL'
    }
  ]
},
{
  id: 'XF336',
  name: 'XF336',
  category: 'off-road',
  tagline: 'Reliable traction and versatility for agricultural applications.',
  description: 'XF336 is designed for agricultural use, delivering excellent traction, durability, and stable performance across different terrains while supporting moderate to heavy loads.',
  image: XF336, // make sure this is imported
  season: 'All Season',

  features: [
    'Optimized tread for agricultural traction',
    'Durable casing for long service life',
    'Stable performance under inflation pressure',
    'Supports moderate to heavy loads',
    'Versatile for different farm applications'
  ],

  sizes: [
    {
      size: '16/70R24',
      pr: '18',
      standardRim: '13.00',
      loadCapacityPressure: '5900 / 350',
      sectionWidth: '410',
      overallDiameter: '1175',
      ttfTl: 'TTF'
    },
    {
      size: '16/70-24',
      pr: '18',
      standardRim: '13.00',
      loadCapacityPressure: '5600 / 350',
      sectionWidth: '410',
      overallDiameter: '1175',
      ttfTl: 'TTF'
    },
    {
      size: '16/70R20',
      pr: '16',
      standardRim: '13.00',
      loadCapacityPressure: '5900 / 350',
      sectionWidth: '410',
      overallDiameter: '1075',
      ttfTl: 'TTF'
    },
    {
      size: '16/70-20',
      pr: '16',
      standardRim: '13.00',
      loadCapacityPressure: '5600 / 350',
      sectionWidth: '410',
      overallDiameter: '1075',
      ttfTl: 'TTF'
    },
    {
      size: '20.5/70R16',
      pr: '16',
      standardRim: '8.50H',
      loadCapacityPressure: '3150 / 350',
      sectionWidth: '410',
      overallDiameter: '1075',
      ttfTl: 'TTF'
    },
    {
      size: '20.5/70-16',
      pr: '16',
      standardRim: '8.50H',
      loadCapacityPressure: '2850 / 350',
      sectionWidth: '410',
      overallDiameter: '1075',
      ttfTl: 'TTF'
    }
  ]
},
{
  id: 'R1W',
  name: 'R1-W',
  category: 'off-road',
  tagline: 'Reliable traction and performance for demanding off-road applications.',
  description: 'R1-W tyres are designed for off-road use, providing excellent traction, durability, and stable performance in tough terrains while supporting moderate loads.',
  image: R1W, // make sure this is imported
  season: 'All Season',

  features: [
    'Optimized tread for off-road traction',
    'Durable casing for long service life',
    'Stable performance under inflation pressure',
    'Supports moderate loads',
    'Versatile for different terrains and applications'
  ],

  sizes: [
    {
      size: '16/70-20',
      pr: '18',
      standardRim: '13.00',
      loadCapacityPressure: '5150 / 450',
      sectionWidth: '410',
      overallDiameter: '1075',
      ttfTl: 'TTF'
    },
    {
      size: '16/70-24',
      pr: '18',
      standardRim: '13.00',
      loadCapacityPressure: '5150 / 450',
      sectionWidth: '410',
      overallDiameter: '1175',
      ttfTl: 'TTF'
    }
  ]
},
{
  id: 'XF208',
  name: 'XF208',
  category: 'off-road',
  tagline: 'Compact and durable tyres for versatile off-road applications.',
  description: 'XF208 tyres are designed for off-road and industrial use, offering excellent load support, durability, and stable performance in compact and medium-sized vehicles or equipment.',
  image: XF208, // make sure this is imported
  season: 'All Season',

  features: [
    'Durable casing for industrial and off-road use',
    'Stable performance under inflation pressure',
    'Supports a wide range of loads',
    'Optimized tread for traction and maneuverability',
    'Long service life in versatile applications'
  ],

  sizes: [
    {
      size: '5.00-8',
      pr: '10',
      standardRim: '3.50D',
      loadCapacityPressure: '1295 / 900',
      sectionWidth: '137',
      overallDiameter: '470',
      ttfTl: 'TTF'
    },
    {
      size: '18x7-8',
      pr: '14',
      standardRim: '4.33',
      loadCapacityPressure: '1450 / 900',
      sectionWidth: '168',
      overallDiameter: '465',
      ttfTl: 'TTF'
    },
    {
      size: '23*9-10',
      pr: '16',
      standardRim: '7.00',
      loadCapacityPressure: '2300 / 800',
      sectionWidth: '229',
      overallDiameter: '584',
      ttfTl: 'TTF'
    },
    {
      size: '6.00-9',
      pr: '10',
      standardRim: '4.00',
      loadCapacityPressure: '1505 / 860',
      sectionWidth: '160',
      overallDiameter: '540',
      ttfTl: 'TTF'
    },
    {
      size: '7.00-9',
      pr: '10',
      standardRim: '5.00',
      loadCapacityPressure: '1995 / 860',
      sectionWidth: '190',
      overallDiameter: '590',
      ttfTl: 'TTF'
    },
    {
      size: '7.00-15',
      pr: '12',
      standardRim: '5.50',
      loadCapacityPressure: '2500 / 860',
      sectionWidth: '199',
      overallDiameter: '760',
      ttfTl: 'TTF'
    },
    {
      size: '6.50-10',
      pr: '10',
      standardRim: '5.00',
      loadCapacityPressure: '1655 / 970',
      sectionWidth: '178',
      overallDiameter: '590',
      ttfTl: 'TTF'
    },
    {
      size: '7.00-12',
      pr: '12',
      standardRim: '5.00',
      loadCapacityPressure: '2060 / 860',
      sectionWidth: '192',
      overallDiameter: '676',
      ttfTl: 'TTF'
    },
    {
      size: '8.25-12',
      pr: '12',
      standardRim: '6.50',
      loadCapacityPressure: '3060 / 720',
      sectionWidth: '210',
      overallDiameter: '728',
      ttfTl: 'TTF'
    },
    {
      size: '28x9-15',
      pr: '14',
      standardRim: '7.00',
      loadCapacityPressure: '3075 / 970',
      sectionWidth: '221',
      overallDiameter: '684',
      ttfTl: 'TTF'
    },
    {
      size: '8.25-15',
      pr: '14',
      standardRim: '6.50',
      loadCapacityPressure: '3775 / 720',
      sectionWidth: '236',
      overallDiameter: '834',
      ttfTl: 'TTF'
    },
    {
      size: '250-15',
      pr: '18',
      standardRim: '7.50',
      loadCapacityPressure: '4350 / 850',
      sectionWidth: '250',
      overallDiameter: '735',
      ttfTl: 'TTF'
    },
    {
      size: '300-15',
      pr: '20',
      standardRim: '8.00',
      loadCapacityPressure: '5940 / 930',
      sectionWidth: '300',
      overallDiameter: '840',
      ttfTl: 'TTF'
    }
  ]
},
{
  id: 'KA6',
  name: 'KA6',
  category: 'off-road',
  tagline: 'Durable tyres for industrial and construction applications.',
  description: 'KA-6 tyres are designed for industrial and construction use, providing strong load support, durability, and stable performance on rough terrains.',
  image: KA6, // make sure this is imported
  season: 'All Season',

  features: [
    'Durable casing for rough terrain',
    'Stable performance under inflation pressure',
    'Supports moderate loads',
    'Optimized tread for traction and stability',
    'Long service life in industrial applications'
  ],

  sizes: [
    {
      size: '12.4-24',
      pr: '10',
      standardRim: 'W11',
      treadDepth: '48',
      loadCapacityPressure: '160',
      sectionWidth: '315',
      overallDiameter: '1160',
      ttfTl: 'TT'
    },
    {
      size: '12.4-24',
      pr: '10',
      standardRim: 'W12',
      treadDepth: '50',
      loadCapacityPressure: '160',
      sectionWidth: '345',
      overallDiameter: '1260',
      ttfTl: 'TT'
    }
  ]
},
{
  id: 'C1',
  name: 'C1',
  category: 'off-road',
  tagline: 'Strong and reliable tyres for heavy-duty off-road applications.',
  description: 'C-1 tyres are engineered for off-road and industrial use, delivering excellent load-carrying capability, durability, and stable performance under demanding working conditions.',
  image: C1, // make sure this is imported
  season: 'All Season',

  features: [
    'High load-carrying capacity',
    'Durable casing for industrial and off-road use',
    'Stable performance under high inflation pressure',
    'Optimized tread for traction and control',
    'Long service life in demanding environments'
  ],

  sizes: [
    {
      size: '750-15',
      pr: '16',
      standardRim: '6.00',
      loadCapacityPressure: '2650 / 750',
      sectionWidth: '215',
      overallDiameter: '785',
      ttfTl: 'TTF'
    },
    {
      size: '750-16',
      pr: '16',
      standardRim: '6.00',
      loadCapacityPressure: '3100 / 930',
      sectionWidth: '215',
      overallDiameter: '805',
      ttfTl: 'TTF'
    },
    {
      size: '900-20',
      pr: '20',
      standardRim: '7.00',
      loadCapacityPressure: '4750 / 825',
      sectionWidth: '255',
      overallDiameter: '1015',
      ttfTl: 'TTF'
    },
    {
      size: '1100-20',
      pr: '20',
      standardRim: '8.00',
      loadCapacityPressure: '5450 / 725',
      sectionWidth: '290',
      overallDiameter: '1080',
      ttfTl: 'TTF'
    },
    {
      size: '13/80-20',
      pr: '24',
      standardRim: '8.50',
      loadCapacityPressure: '5430 / 800',
      sectionWidth: '319',
      overallDiameter: '1060',
      ttfTl: 'TTF'
    },
    {
      size: '14/70-20',
      pr: '24',
      standardRim: '10.00',
      loadCapacityPressure: '4270 / 500',
      sectionWidth: '356',
      overallDiameter: '1070',
      ttfTl: 'TTF'
    },
    {
      size: '16/70-20',
      pr: '24',
      standardRim: '13.00',
      loadCapacityPressure: '4270 / 500',
      sectionWidth: '410',
      overallDiameter: '1075',
      ttfTl: 'TTF'
    }
  ]
},
{
  id: 'L5S',
  name: 'L5S',
  category: 'off-road',
  tagline: 'Heavy-duty strength and stability for demanding off-road operations.',
  description: 'L5-S tyres are engineered for tough off-road and industrial applications, offering high load capacity, durability, and reliable performance under extreme working conditions.',
  image: L5S, // make sure this is imported
  season: 'All Season',

  features: [
    'High load-carrying capacity',
    'Durable casing for harsh environments',
    'Stable performance under high inflation pressure',
    'Optimized tread for off-road traction',
    'Long service life in demanding applications'
  ],

  sizes: [
    {
      size: '750-15',
      pr: '16',
      standardRim: '6.00',
      loadCapacityPressure: '2650 / 750',
      sectionWidth: '215',
      overallDiameter: '785',
      ttfTl: 'TTF'
    },
    {
      size: '9.75-18',
      pr: '10',
      standardRim: '7.50',
      loadCapacityPressure: '3260 / 670',
      sectionWidth: '270',
      overallDiameter: '975',
      ttfTl: 'TTF'
    },
    {
      size: '9.00-20',
      pr: '20',
      standardRim: '7.00',
      loadCapacityPressure: '4750 / 825',
      sectionWidth: '255',
      overallDiameter: '1015',
      ttfTl: 'TTF'
    },
    {
      size: '10.00-20',
      pr: '20',
      standardRim: '7.50',
      loadCapacityPressure: '3260 / 670',
      sectionWidth: '278',
      overallDiameter: '1051',
      ttfTl: 'TTF'
    },
    {
      size: '11.00-20',
      pr: '20',
      standardRim: '8.00',
      loadCapacityPressure: '5450 / 725',
      sectionWidth: '290',
      overallDiameter: '1080',
      ttfTl: 'TTF'
    },
    {
      size: '12.00-20',
      pr: '20',
      standardRim: '8.50',
      loadCapacityPressure: '5450 / 725',
      sectionWidth: '315',
      overallDiameter: '1175',
      ttfTl: 'TTF'
    },
    {
      size: '12.00-24',
      pr: '28',
      standardRim: '8.50',
      loadCapacityPressure: '6150 / 675',
      sectionWidth: '315',
      overallDiameter: '1275',
      ttfTl: 'TTF'
    },
    {
      size: '405/70-20',
      pr: '20',
      standardRim: '13.00',
      loadCapacityPressure: '4270 / 500',
      sectionWidth: '410',
      overallDiameter: '1075',
      ttfTl: 'TTF'
    },
    {
      size: '255/70D406',
      pr: '16',
      standardRim: '7.50',
      loadCapacityPressure: '3260 / 670',
      sectionWidth: '255',
      overallDiameter: '406',
      ttfTl: 'TTF'
    }
  ]
},
{
  id: 'SKS1',
  name: 'SKS1',
  category: 'off-road',
  tagline: 'Reliable tubeless performance for skid steer and off-road equipment.',
  description: 'SKS-1 tyres are designed for skid steer and off-road machinery, offering strong load support, durability, and dependable tubeless performance in tough working environments.',
  image: SKS1, // make sure this is imported
  season: 'All Season',

  features: [
    'Tubeless design for reduced downtime',
    'Strong load-carrying capability',
    'Durable casing for rough terrains',
    'Stable performance under working pressure',
    'Long service life in demanding applications'
  ],

  sizes: [
    {
      size: '10-16.5',
      pr: '12',
      standardRim: '8.25',
      loadCapacityPressure: '2170 / 520',
      sectionWidth: '261',
      overallDiameter: '779',
      ttfTl: 'TL'
    },
    {
      size: '12-16.5',
      pr: '14',
      standardRim: '9.75',
      loadCapacityPressure: '2900 / 550',
      sectionWidth: '300',
      overallDiameter: '790',
      ttfTl: 'TL'
    }
  ]
},

{
  id: 'SKS3',
  name: 'SKS3',
  category: 'off-road',
  tagline: 'Heavy-duty tubeless tyres for skid steer and off-road applications.',
  description: 'SKS-3 tyres are engineered for skid steer loaders and off-road equipment, delivering enhanced load capacity, durability, and reliable tubeless performance in demanding working environments.',
  image: SKS3, // make sure this is imported
  season: 'All Season',

  features: [
    'Tubeless design for improved reliability',
    'Enhanced load-carrying capacity',
    'Reinforced casing for tough terrains',
    'Stable performance under high inflation pressure',
    'Long service life in heavy-duty applications'
  ],

  sizes: [
    {
      size: '10-16.5',
      pr: '12',
      standardRim: '8.25',
      loadCapacityPressure: '2375 / 620',
      sectionWidth: '264',
      overallDiameter: '773',
      ttfTl: 'TL'
    },
    {
      size: '12-16.5',
      pr: '14',
      standardRim: '9.75',
      loadCapacityPressure: '3075 / 620',
      sectionWidth: '307',
      overallDiameter: '831',
      ttfTl: 'TL'
    }
  ]
},
{
  id: 'XF007',
  name: 'XF007',
  category: 'off-road',
  tagline: 'High load-capacity tyres for heavy-duty off-road applications.',
  description: 'XF007 tyres are designed for demanding off-road and industrial operations, offering exceptional load-carrying capacity, durability, and stable performance under high inflation pressures.',
  image: XF007, // make sure this is imported
  season: 'All Season',

  features: [
    'Very high load-carrying capacity',
    'Reinforced casing for heavy-duty use',
    'Stable performance under high inflation pressure',
    'Optimized tread for off-road traction',
    'Long service life in demanding environments'
  ],

  sizes: [
    {
      size: '9.00-20',
      pr: '20',
      standardRim: '7.00',
      loadCapacityPressure: '8215 / 700',
      sectionWidth: '259',
      overallDiameter: '1038',
      ttfTl: 'TTF'
    },
    {
      size: '10.00-20',
      pr: '20',
      standardRim: '7.50',
      loadCapacityPressure: '8215 / 750',
      sectionWidth: '278',
      overallDiameter: '1073',
      ttfTl: 'TTF'
    }
  ]
},
{
  id: 'XF007A',
  name: 'XF007A',
  category: 'off-road',
  tagline: 'High load-capacity tyre for heavy-duty off-road operations.',
  description: 'XF007A is designed for heavy-duty off-road and industrial applications, offering excellent load support, durability, and stable performance under high inflation pressure.',
  image: XF007A, // make sure this is imported
  season: 'All Season',

  features: [
    'High load-carrying capacity',
    'Reinforced casing for durability',
    'Stable performance under high inflation pressure',
    'Optimized tread for off-road traction',
    'Long service life in demanding environments'
  ],

  sizes: [
    {
      size: '9.00-20',
      pr: '20',
      standardRim: '7.00',
      loadCapacityPressure: '8215 / 700',
      sectionWidth: '259',
      overallDiameter: '1038',
      ttfTl: 'TTF'
    }
  ]
},
{
  id: 'R1',
  name: 'R1',
  category: 'off-road',
  tagline: 'Reliable agricultural tyre for consistent field performance.',
  description: 'R1 is a classic agricultural tyre designed to deliver dependable traction, durability, and balanced performance for farming operations across varied terrain.',
  image: R1, // make sure this is imported
  season: 'All Season',

  features: [
    'Deep tread for strong agricultural traction',
    'Durable casing for long service life',
    'Stable performance under working pressure',
    'Suitable for tractors and farm equipment',
    'Consistent grip on soft and firm soil'
  ],

  sizes: [
    {
      size: '8-16',
      pr: '8',
      standardRim: 'W6',
      treadDepth: '29',
      loadCapacityPressure: '800 / 250',
      sectionWidth: '208',
      overallDiameter: '824',
      ttfTl: 'TT'
    },
    {
      size: '8-18',
      pr: '8',
      standardRim: 'W6',
      treadDepth: '29',
      loadCapacityPressure: '900 / 250',
      sectionWidth: '211',
      overallDiameter: '840',
      ttfTl: 'TT'
    }
  ]
},
{
  id: 'R1PLUS',
  name: 'R1+',
  category: 'off-road',
  tagline: 'High-traction agricultural tyre for demanding field conditions.',
  description: 'R1+ is an enhanced agricultural tyre with deeper tread and reinforced casing, designed to deliver superior traction, durability, and stable performance in muddy, wet, and loose soil conditions.',
  image: R1PLUS, // make sure this is imported
  season: 'All Season',

  features: [
    'Extra-deep tread for superior agricultural traction',
    'Durable casing for extended service life',
    'Stable performance under working pressure',
    'Suitable for tractors and farm machinery',
    'Enhanced grip in soft, muddy, and loose soil'
  ],

  sizes: [
    {
      size: '8.3-22',
      pr: '10',
      standardRim: 'W7',
      treadDepth: '45',
      loadCapacityPressure: '790 / 270',
      sectionWidth: '210',
      overallDiameter: '970',
      ttfTl: 'TT'
    },
    {
      size: '9.5-22',
      pr: '10',
      standardRim: 'W8',
      treadDepth: '45',
      loadCapacityPressure: '980 / 280',
      sectionWidth: '240',
      overallDiameter: '970',
      ttfTl: 'TT'
    },
    {
      size: '13.6-26',
      pr: '10',
      standardRim: 'W12',
      treadDepth: '47',
      loadCapacityPressure: '1790 / 250',
      sectionWidth: '345',
      overallDiameter: '1300',
      ttfTl: 'TT'
    }
  ]
},
{
  id: 'R1MIN1',
  name: 'R1-1',
  category: 'off-road',
  tagline: 'Reliable agricultural tyre for light to medium farming operations.',
  description:
    'R1-1 is a traditional agricultural tyre designed for tractors and farm equipment, offering dependable traction, balanced tread depth, and consistent performance across dry, wet, and loose soil conditions.',
  image: R1MIN1, // make sure this is imported
  season: 'All Season',

  features: [
    'Optimized tread design for agricultural traction',
    'Balanced tread depth for longer tyre life',
    'Stable performance under field working pressure',
    'Suitable for tractors and light farm machinery',
    'Reliable grip in dry, wet, and loose soil conditions'
  ],

  sizes: [
    {
      size: '5.00-12',
      pr: '6',
      standardRim: '4.00E',
      treadDepth: '18',
      loadCapacityPressure: '320 / 210',
      sectionWidth: '145',
      overallDiameter: '590',
      ttfTl: 'TT'
    },
    {
      size: '6.00-12',
      pr: '8',
      standardRim: '4.50E',
      treadDepth: '21',
      loadCapacityPressure: '450 / 300',
      sectionWidth: '165',
      overallDiameter: '640',
      ttfTl: 'TT'
    },
    {
      size: '7.50-16 (8-16)',
      pr: '8',
      standardRim: 'W6',
      treadDepth: '23',
      loadCapacityPressure: '670 / 250',
      sectionWidth: '208',
      overallDiameter: '828',
      ttfTl: 'TT'
    },
    {
      size: '7.50-18 (8-18)',
      pr: '8',
      standardRim: '6.00',
      treadDepth: '23',
      loadCapacityPressure: '900 / 250',
      sectionWidth: '210',
      overallDiameter: '840',
      ttfTl: 'TT'
    },
    {
      size: '8.3-20',
      pr: '8',
      standardRim: 'W7',
      treadDepth: '25',
      loadCapacityPressure: '785 / 300',
      sectionWidth: '210',
      overallDiameter: '895',
      ttfTl: 'TT'
    },
    {
      size: '8.3-22',
      pr: '10',
      standardRim: 'W7',
      treadDepth: '45',
      loadCapacityPressure: '790 / 270',
      sectionWidth: '210',
      overallDiameter: '970',
      ttfTl: 'TT'
    },
    {
      size: '9.5-22',
      pr: '8',
      standardRim: 'W8',
      treadDepth: '25',
      loadCapacityPressure: '940 / 210',
      sectionWidth: '240',
      overallDiameter: '970',
      ttfTl: 'TT'
    },
    {
      size: '8.3-24',
      pr: '8',
      standardRim: 'W7',
      treadDepth: '26',
      loadCapacityPressure: '630 / 250',
      sectionWidth: '210',
      overallDiameter: '995',
      ttfTl: 'TT'
    },
    {
      size: '9.5-24',
      pr: '8',
      standardRim: 'W8',
      treadDepth: '26',
      loadCapacityPressure: '1090 / 280',
      sectionWidth: '240',
      overallDiameter: '1050',
      ttfTl: 'TT'
    },
    {
      size: '11.2-24',
      pr: '8',
      standardRim: 'W10',
      treadDepth: '30',
      loadCapacityPressure: '1225 / 240',
      sectionWidth: '285',
      overallDiameter: '1105',
      ttfTl: 'TT'
    }
  ]
},
{
  id: 'R1MIN2',
  name: 'R1-2',
  category: 'off-road',
  tagline: 'High-traction agricultural tyre for heavy-duty farming applications.',
  description:
    'R1-2 is a robust agricultural tyre designed for tractors operating under heavy load conditions. With deeper tread depth and reinforced construction, it delivers excellent traction, stability, and durability in demanding field environments.',
  image: R1MIN2, // make sure this is imported
  season: 'All Season',

  features: [
    'Deep tread design for enhanced agricultural traction',
    'Strong casing for heavy-duty load handling',
    'Stable performance under low and moderate inflation pressure',
    'Ideal for medium to large tractors',
    'Reliable grip in wet, muddy, and loose soil conditions'
  ],

  sizes: [
    {
      size: '11-32',
      pr: '10',
      standardRim: 'W10',
      treadDepth: '30',
      loadCapacityPressure: '1080 / 160',
      sectionWidth: '305',
      overallDiameter: '1460',
      ttfTl: 'TT'
    },
    {
      size: '16.9-34',
      pr: '10',
      standardRim: 'W15L',
      treadDepth: '37',
      loadCapacityPressure: '2605 / 200',
      sectionWidth: '430',
      overallDiameter: '1585',
      ttfTl: 'TT'
    }
  ]
},
{
  id: 'R1MIN3',
  name: 'R1-3',
  category: 'off-road',
  tagline: 'Heavy-duty agricultural tyre for high-power tractor applications.',
  description:
    'R1-3 is a premium agricultural tyre engineered for high-horsepower tractors and demanding farm operations. Featuring deeper tread depth and a reinforced casing, it delivers exceptional traction, load capacity, and long-lasting performance in tough field conditions.',
  image: R1MIN3, // make sure this is imported
  season: 'All Season',

  features: [
    'Extra-deep tread for superior traction',
    'Reinforced casing for heavy load applications',
    'Stable and reliable performance under field conditions',
    'Designed for medium to large agricultural tractors',
    'Excellent grip in wet, muddy, and loose soil'
  ],

  sizes: [
    {
      size: '12.4-24',
      pr: '12',
      standardRim: 'W11',
      treadDepth: '30',
      loadCapacityPressure: '1415 / 230',
      sectionWidth: '315',
      overallDiameter: '1160',
      ttfTl: 'TT'
    },
    {
      size: '13.6-24',
      pr: '10',
      standardRim: 'W12',
      treadDepth: '27',
      loadCapacityPressure: '1545 / 210',
      sectionWidth: '345',
      overallDiameter: '1210',
      ttfTl: 'TT'
    },
    {
      size: '13.6-28',
      pr: '8',
      standardRim: 'W12',
      treadDepth: '32',
      loadCapacityPressure: '1645 / 210',
      sectionWidth: '345',
      overallDiameter: '1310',
      ttfTl: 'TT'
    },
    {
      size: '14.9-24',
      pr: '8',
      standardRim: 'W13',
      treadDepth: '27',
      loadCapacityPressure: '1760 / 180',
      sectionWidth: '378',
      overallDiameter: '1265',
      ttfTl: 'TT'
    },
    {
      size: '14.9-28',
      pr: '12',
      standardRim: 'W13',
      treadDepth: '32',
      loadCapacityPressure: '2120 / 230',
      sectionWidth: '378',
      overallDiameter: '1365',
      ttfTl: 'TT'
    },
    {
      size: '14.9-30',
      pr: '10',
      standardRim: 'W13',
      treadDepth: '32',
      loadCapacityPressure: '2190 / 230',
      sectionWidth: '378',
      overallDiameter: '1415',
      ttfTl: 'TT'
    },
    {
      size: '16.9-28',
      pr: '10',
      standardRim: 'W15L',
      treadDepth: '40',
      loadCapacityPressure: '2380 / 200',
      sectionWidth: '430',
      overallDiameter: '1435',
      ttfTl: 'TT'
    },
    {
      size: '16.9-30',
      pr: '10',
      standardRim: 'W15L',
      treadDepth: '32',
      loadCapacityPressure: '2455 / 200',
      sectionWidth: '430',
      overallDiameter: '1485',
      ttfTl: 'TT'
    },
    {
      size: '18.4-30',
      pr: '12',
      standardRim: 'W16L',
      treadDepth: '35',
      loadCapacityPressure: '3150 / 230',
      sectionWidth: '467',
      overallDiameter: '1550',
      ttfTl: 'TT'
    },
    {
      size: '18.4-34',
      pr: '12',
      standardRim: 'W16L',
      treadDepth: '35',
      loadCapacityPressure: '3350 / 230',
      sectionWidth: '467',
      overallDiameter: '1655',
      ttfTl: 'TT'
    },
    {
      size: '18.4-38',
      pr: '12',
      standardRim: 'W16L',
      treadDepth: '35',
      loadCapacityPressure: '3575 / 230',
      sectionWidth: '467',
      overallDiameter: '1755',
      ttfTl: 'TT'
    }
  ]
},
{
  id: 'R1MIN4',
  name: 'R1-4',
  category: 'off-road',
  tagline: 'Extra-deep tread agricultural tyre for maximum field traction.',
  description:
    'R1-4 is a heavy-duty agricultural tyre designed for tractors operating in demanding soil conditions. Its extra-deep tread and strong casing provide superior traction, stability, and long service life during intensive farming operations.',
  image: R1MIN4, // make sure this is imported
  season: 'All Season',

  features: [
    'Extra-deep tread design for maximum traction',
    'Strong casing for heavy agricultural applications',
    'Stable performance under working pressure',
    'Designed for high-torque tractor operations',
    'Excellent grip in wet, muddy, and loose soil conditions'
  ],

  sizes: [
    {
      size: '13.6-38',
      pr: '10',
      standardRim: 'DW11',
      treadDepth: '32',
      loadCapacityPressure: '1910 / 210',
      sectionWidth: '330',
      overallDiameter: '1575',
      ttfTl: 'TT'
    }
  ]
},
{
  id: 'R1MIN5',
  name: 'R1-5',
  category: 'off-road',
  tagline: 'Durable agricultural tyre for balanced traction and load performance.',
  description:
    'R1-5 is an agricultural tyre designed for reliable field performance, offering balanced tread depth, strong casing construction, and consistent traction for tractors operating in varied soil conditions.',
  image: R1MIN5, // make sure this is imported
  season: 'All Season',

  features: [
    'Balanced tread depth for efficient traction',
    'Strong casing for dependable load handling',
    'Stable performance under recommended inflation pressure',
    'Suitable for medium-duty tractor applications',
    'Reliable grip in dry, wet, and loose soil conditions'
  ],

  sizes: [
    {
      size: '11.2-28',
      pr: '8',
      standardRim: 'W10',
      treadDepth: '32',
      loadCapacityPressure: '1305 / 240',
      sectionWidth: '285',
      overallDiameter: '1205',
      ttfTl: 'TT'
    },
    {
      size: '12.4-28',
      pr: '10',
      standardRim: 'W11',
      treadDepth: '36',
      loadCapacityPressure: '1510 / 230',
      sectionWidth: '315',
      overallDiameter: '1260',
      ttfTl: 'TT'
    }
  ]
},
{
  id: 'PR1',
  name: 'PR-1',
  category: 'off-road',
  tagline: 'Extra-deep tread paddy and agricultural tyre for superior traction.',
  description:
    'PR-1 is a high-traction agricultural and paddy tyre engineered with an extra-deep tread pattern to deliver exceptional grip, flotation, and durability. It is ideal for wet, muddy, and soft soil conditions where maximum traction and self-cleaning are essential.',
  image: PR1, // make sure this is imported
  season: 'All Season',

  features: [
    'Extra-deep tread for superior traction in wet and muddy fields',
    'Excellent self-cleaning properties for paddy applications',
    'Strong casing for enhanced durability and load capacity',
    'Stable performance under low inflation pressure',
    'Ideal for tractors operating in paddy and soft soil conditions'
  ],

  sizes: [
    {
      size: '6.50-16',
      pr: '8',
      standardRim: '5.00F',
      treadDepth: '60',
      loadCapacityPressure: '560 / 250',
      sectionWidth: '165',
      overallDiameter: '830',
      ttfTl: 'TTF'
    },
    {
      size: '7.50-16',
      pr: '10',
      standardRim: '5.50F',
      treadDepth: '60',
      loadCapacityPressure: '750 / 300',
      sectionWidth: '195',
      overallDiameter: '890',
      ttfTl: 'TTF'
    },
    {
      size: '8.3-20',
      pr: '10',
      standardRim: 'W7',
      treadDepth: '68',
      loadCapacityPressure: '970 / 270',
      sectionWidth: '210',
      overallDiameter: '950',
      ttfTl: 'TTF'
    },
    {
      size: '8.3-24',
      pr: '10',
      standardRim: 'W7',
      treadDepth: '68',
      loadCapacityPressure: '1135 / 270',
      sectionWidth: '210',
      overallDiameter: '1050',
      ttfTl: 'TTF'
    },
    {
      size: '9.5-24',
      pr: '10',
      standardRim: 'W8',
      treadDepth: '76',
      loadCapacityPressure: '1315 / 240',
      sectionWidth: '240',
      overallDiameter: '1150',
      ttfTl: 'TTF'
    },
    {
      size: '11.2-24',
      pr: '12',
      standardRim: 'W10',
      treadDepth: '76',
      loadCapacityPressure: '1465 / 210',
      sectionWidth: '285',
      overallDiameter: '1205',
      ttfTl: 'TTF'
    },
    {
      size: '11-32',
      pr: '12',
      standardRim: 'W10',
      treadDepth: '82',
      loadCapacityPressure: '1080 / 160',
      sectionWidth: '305',
      overallDiameter: '1460',
      ttfTl: 'TTF'
    }
  ]
},
{
  id: 'PRESTIGEP07',
  name: 'PRESTIGE P07',
  category: 'ev-tyres',
  tagline: 'Luxury performance with a dramatic silence.',
  description: 'Prestige P07 is engineered with Twist Edge-Cutting Technology to control block stiffness, prevent uneven wear and extend tyre life. Its precise groove and staggered sipe arrangement significantly reduce road noise while enhancing steering stability for a quieter, smoother and more comfortable driving experience.',
  image: PRESTIGEP07,
  season: 'All Season',

  features: [
    'Twist Edge-Cutting Technology to prevent uneven wear',
    'Optimized groove arrangement for noise reduction',
    'Staggered groove and sipe design for steering stability',
    'Enhanced ride comfort with ultra-quiet performance',
    'Extended tread life with balanced block stiffness'
  ],

  sizes: [
    { size: '175/65R14', loadIndex: '86 XL', loadCapacity: '530', speedRating: 'H', standardRim: '5J', sectionWidth: '177', overallDiameter: '584', maxPressure: '340', utqg: '280 A A' },
    { size: '185/65R14', loadIndex: '90 XL', loadCapacity: '600', speedRating: 'H', standardRim: '5 1/2J', sectionWidth: '189', overallDiameter: '596', maxPressure: '340', utqg: '280 A A' },
    { size: '185/55R15', loadIndex: '86 XL', loadCapacity: '530', speedRating: 'V', standardRim: '6J', sectionWidth: '184', overallDiameter: '585', maxPressure: '340', utqg: '280 A A' },
    { size: '185/60R15', loadIndex: '88 XL', loadCapacity: '560', speedRating: 'H', standardRim: '5 1/2J', sectionWidth: '189', overallDiameter: '603', maxPressure: '340', utqg: '280 A A' },
    { size: '185/65R15', loadIndex: '92 XL', loadCapacity: '630', speedRating: 'H', standardRim: '5 1/2J', sectionWidth: '189', overallDiameter: '621', maxPressure: '340', utqg: '280 A A' },
    { size: '195/55R15', loadIndex: '89 XL', loadCapacity: '580', speedRating: 'V', standardRim: '6J', sectionWidth: '201', overallDiameter: '595', maxPressure: '340', utqg: '280 A A' },
    { size: '195/60R15', loadIndex: '92 XL', loadCapacity: '630', speedRating: 'H', standardRim: '6J', sectionWidth: '201', overallDiameter: '615', maxPressure: '340', utqg: '280 A A' },
    { size: '195/65R15', loadIndex: '95 XL', loadCapacity: '690', speedRating: 'H', standardRim: '6J', sectionWidth: '201', overallDiameter: '635', maxPressure: '340', utqg: '280 A A' },
    { size: '185/55R16', loadIndex: '87 XL', loadCapacity: '545', speedRating: 'V', standardRim: '6J', sectionWidth: '201', overallDiameter: '609', maxPressure: '340', utqg: '280 A A' },
    { size: '195/60R16', loadIndex: '93 XL', loadCapacity: '650', speedRating: 'H', standardRim: '6J', sectionWidth: '201', overallDiameter: '640', maxPressure: '340', utqg: '280 A A' },
    { size: '205/55ZR16', loadIndex: '94 XL', loadCapacity: '670', speedRating: 'W', standardRim: '6 1/2J', sectionWidth: '214', overallDiameter: '632', maxPressure: '340', utqg: '280 A A' },
    { size: '215/55R16', loadIndex: '97 XL', loadCapacity: '730', speedRating: 'H', standardRim: '7J', sectionWidth: '226', overallDiameter: '642', maxPressure: '340', utqg: '280 A A' },
    { size: '215/60R16', loadIndex: '96 XL', loadCapacity: '710', speedRating: 'H', standardRim: '6J', sectionWidth: '209', overallDiameter: '652', maxPressure: '340', utqg: '280 A A' },
    { size: '205/45ZR17', loadIndex: '88 XL', loadCapacity: '560', speedRating: 'W', standardRim: '7J', sectionWidth: '206', overallDiameter: '616', maxPressure: '340', utqg: '280 A A' },
    { size: '215/45ZR17', loadIndex: '91 XL', loadCapacity: '615', speedRating: 'W', standardRim: '7J', sectionWidth: '213', overallDiameter: '626', maxPressure: '340', utqg: '280 A A' },
    { size: '215/50ZR17', loadIndex: '95 XL', loadCapacity: '690', speedRating: 'W', standardRim: '7J', sectionWidth: '226', overallDiameter: '648', maxPressure: '340', utqg: '280 A A' },
    { size: '215/55ZR17', loadIndex: '98 XL', loadCapacity: '750', speedRating: 'W', standardRim: '7J', sectionWidth: '226', overallDiameter: '668', maxPressure: '340', utqg: '280 A A' },
    { size: '215/60ZR17', loadIndex: '96 XL', loadCapacity: '710', speedRating: 'W', standardRim: '7J', sectionWidth: '215', overallDiameter: '690', maxPressure: '340', utqg: '280 A A' },
    { size: '225/55ZR17', loadIndex: '101 XL', loadCapacity: '825', speedRating: 'W', standardRim: '7J', sectionWidth: '223', overallDiameter: '680', maxPressure: '340', utqg: '280 A A' },
    { size: '215/55ZR18', loadIndex: '99 XL', loadCapacity: '775', speedRating: 'V', standardRim: '7J', sectionWidth: '215', overallDiameter: '693', maxPressure: '340', utqg: '280 A A' },
    { size: '225/45ZR18', loadIndex: '95 XL', loadCapacity: '690', speedRating: 'V', standardRim: '7 1/2J', sectionWidth: '225', overallDiameter: '659', maxPressure: '340', utqg: '280 A A' },
    { size: '225/50ZR18', loadIndex: '99 XL', loadCapacity: '775', speedRating: 'W', standardRim: '7J', sectionWidth: '223', overallDiameter: '683', maxPressure: '340', utqg: '280 A A' },
    { size: '235/45ZR18', loadIndex: '98 XL', loadCapacity: '750', speedRating: 'W', standardRim: '8J', sectionWidth: '236', overallDiameter: '669', maxPressure: '340', utqg: '280 A A' },
    { size: '235/50ZR18', loadIndex: '101 XL', loadCapacity: '825', speedRating: 'W', standardRim: '7 1/2J', sectionWidth: '245', overallDiameter: '693', maxPressure: '340', utqg: '280 A A' },
    { size: '235/60ZR18', loadIndex: '103 XL', loadCapacity: '875', speedRating: 'W', standardRim: '8J', sectionWidth: '225', overallDiameter: '739', maxPressure: '340', utqg: '280 A A' },
    { size: '245/45ZR18', loadIndex: '100 XL', loadCapacity: '800', speedRating: 'W', standardRim: '8J', sectionWidth: '243', overallDiameter: '677', maxPressure: '340', utqg: '280 A A' },
    { size: '225/55ZR19', loadIndex: '99 XL', loadCapacity: '775', speedRating: 'V', standardRim: '8J', sectionWidth: '240', overallDiameter: '731', maxPressure: '340', utqg: '280 A A' }
  ]
},

];

// Search function
export function searchTyresBySize(width: string, profile: string, diameter: string): Product[] {
  const searchSize = `${width}/${profile}R${diameter}`;
  
  return products.filter(product => 
    product.sizes.some(size => size.size === searchSize)
  );
}

