// src/data/dealersData.ts

export interface Dealer {
  id: string;
  name: string;
  address: string;
  city: string;
  postcode: string;
  phone: string;
  email: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  services: string[];
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const dealers: Dealer[] = [
  {
    id: '1',
    name: 'Kinto Tyres London Central',
    address: '123 Oxford Street',
    city: 'London',
    postcode: 'W1D 2HG',
    phone: '020 7123 4567',
    email: 'london@kintotyres.co.uk',
    coordinates: { lat: 51.5155, lng: -0.1410 },
    services: ['Tyre Fitting', 'Wheel Alignment', 'Balancing', 'MOT'],
    openingHours: {
      weekdays: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '2',
    name: 'Kinto Tyres Manchester',
    address: '45 Deansgate',
    city: 'Manchester',
    postcode: 'M3 2AY',
    phone: '0161 234 5678',
    email: 'manchester@kintotyres.co.uk',
    coordinates: { lat: 53.4808, lng: -2.2426 },
    services: ['Tyre Fitting', 'Wheel Alignment', 'Balancing'],
    openingHours: {
      weekdays: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 4:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '3',
    name: 'Kinto Tyres Birmingham',
    address: '78 Bull Street',
    city: 'Birmingham',
    postcode: 'B4 6AF',
    phone: '0121 456 7890',
    email: 'birmingham@kintotyres.co.uk',
    coordinates: { lat: 52.4814, lng: -1.8998 },
    services: ['Tyre Fitting', 'Wheel Alignment', 'Balancing', 'MOT', 'Repairs'],
    openingHours: {
      weekdays: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: '10:00 AM - 2:00 PM'
    }
  },
  {
    id: '4',
    name: 'Kinto Tyres Leeds',
    address: '56 Briggate',
    city: 'Leeds',
    postcode: 'LS1 6HD',
    phone: '0113 789 0123',
    email: 'leeds@kintotyres.co.uk',
    coordinates: { lat: 53.7997, lng: -1.5437 },
    services: ['Tyre Fitting', 'Wheel Alignment', 'Balancing'],
    openingHours: {
      weekdays: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '5',
    name: 'Kinto Tyres Bristol',
    address: '34 Park Street',
    city: 'Bristol',
    postcode: 'BS1 5JG',
    phone: '0117 234 5678',
    email: 'bristol@kintotyres.co.uk',
    coordinates: { lat: 51.4545, lng: -2.5879 },
    services: ['Tyre Fitting', 'Balancing', 'MOT'],
    openingHours: {
      weekdays: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 4:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '6',
    name: 'Kinto Tyres Liverpool',
    address: '89 Bold Street',
    city: 'Liverpool',
    postcode: 'L1 4HY',
    phone: '0151 234 5678',
    email: 'liverpool@kintotyres.co.uk',
    coordinates: { lat: 53.4084, lng: -2.9916 },
    services: ['Tyre Fitting', 'Wheel Alignment', 'Balancing', 'Repairs'],
    openingHours: {
      weekdays: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '7',
    name: 'Kinto Tyres Edinburgh',
    address: '12 Princes Street',
    city: 'Edinburgh',
    postcode: 'EH2 2ER',
    phone: '0131 234 5678',
    email: 'edinburgh@kintotyres.co.uk',
    coordinates: { lat: 55.9533, lng: -3.1883 },
    services: ['Tyre Fitting', 'Wheel Alignment', 'Balancing', 'MOT'],
    openingHours: {
      weekdays: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 5:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '8',
    name: 'Kinto Tyres Glasgow',
    address: '45 Buchanan Street',
    city: 'Glasgow',
    postcode: 'G1 3HL',
    phone: '0141 234 5678',
    email: 'glasgow@kintotyres.co.uk',
    coordinates: { lat: 55.8642, lng: -4.2518 },
    services: ['Tyre Fitting', 'Wheel Alignment', 'Balancing'],
    openingHours: {
      weekdays: '8:00 AM - 6:00 PM',
      saturday: '9:00 AM - 4:00 PM',
      sunday: 'Closed'
    }
  }
];

// Haversine formula to calculate distance between two coordinates in miles
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}