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
  category: 'passenger' | 'light-truck' | 'truck-bus' | 'off-road';
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
    description: 'Fleets today need more miles, greater retreadability, longer even-wear and less maintenance costs per kilometer from their tires. Given the extreme demands of today\'s transport industry, Kinto\'s technology helps you get the most out of your tire investments.',
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



];

// Search function
export function searchTyresBySize(width: string, profile: string, diameter: string): Product[] {
  const searchSize = `${width}/${profile}R${diameter}`;
  
  return products.filter(product => 
    product.sizes.some(size => size.size === searchSize)
  );
}

