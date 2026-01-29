// DealersPage.tsx - Complete with SEO
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Navigation, ArrowLeft } from 'lucide-react';
import { dealers, calculateDistance } from '../data/dealersData';
import type { Dealer } from '../data/dealersData';

interface DealerWithDistance extends Dealer {
  distance: number;
}

export function DealersPage() {
  const [searchParams] = useSearchParams();
  const searchPostcode = searchParams.get('postcode');
  const [nearbyDealers, setNearbyDealers] = useState<DealerWithDistance[]>([]);
  const [loading, setLoading] = useState(true);

  // Create schema for dealer listings
  const localBusinessListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "KINTO Tyres Dealers in UK",
    "description": "Authorized KINTO tyre dealers across the United Kingdom",
    "itemListElement": nearbyDealers.slice(0, 10).map((dealer, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "AutoPartsStore",
        "name": dealer.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": dealer.address,
          "addressLocality": dealer.city,
          "postalCode": dealer.postcode,
          "addressCountry": "GB"
        },
        "telephone": dealer.phone,
        "email": dealer.email,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": dealer.coordinates.lat,
          "longitude": dealer.coordinates.lng
        }
      }
    }))
  };

  useEffect(() => {
    if (searchPostcode) {
      findNearbyDealers(searchPostcode);
    } else {
      setNearbyDealers(dealers.map(d => ({ ...d, distance: 0 })));
      setLoading(false);
    }
  }, [searchPostcode]);

  const findNearbyDealers = async (postcode: string) => {
    setLoading(true);
    
    // Get coordinates for the postcode
    const coords = await geocodePostcode(postcode);
    
    if (coords) {
      // Calculate distances and sort by nearest
      const dealersWithDistance = dealers.map(dealer => ({
        ...dealer,
        distance: calculateDistance(
          coords.lat,
          coords.lng,
          dealer.coordinates.lat,
          dealer.coordinates.lng
        )
      }));

      dealersWithDistance.sort((a, b) => a.distance - b.distance);
      setNearbyDealers(dealersWithDistance);
    } else {
      // If geocoding fails, show all dealers without distance
      setNearbyDealers(dealers.map(d => ({ ...d, distance: 0 })));
    }
    
    setLoading(false);
  };

  // Geocode UK postcode using postcodes.io (free API)
  const geocodePostcode = async (postcode: string): Promise<{ lat: number; lng: number } | null> => {
    try {
      const response = await fetch(`https://api.postcodes.io/postcodes/${postcode.replace(/\s/g, '')}`);
      const data = await response.json();
      
      if (data.status === 200 && data.result) {
        return { 
          lat: data.result.latitude, 
          lng: data.result.longitude 
        };
      }
    } catch (error) {
      console.error('Geocoding error:', error);
    }
    return null;
  };

  return (
    <>
      <Helmet>
        <title>
          {searchPostcode 
            ? `KINTO Dealers Near ${searchPostcode} - Find Your Local Stockist`
            : 'Find KINTO Tyre Dealers Near You - UK Wide Network'}
        </title>
        <meta name="description" content={
          searchPostcode
            ? `Find authorized KINTO tyre dealers near ${searchPostcode}. Professional fitting services, genuine products, and expert advice from certified dealers.`
            : 'Locate authorized KINTO tyre dealers across the UK. Professional fitting services in London, Manchester, Birmingham, and nationwide. Find your nearest stockist today.'
        } />
        <meta name="keywords" content="kinto dealers uk, tyre fitters near me, kinto stockists, tyre fitting locations, authorized dealers, tyre shops uk, professional tyre fitting" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://kinto-tyres.co.uk/dealers${searchPostcode ? `?postcode=${searchPostcode}` : ''}`} />
        <meta property="og:title" content={
          searchPostcode 
            ? `KINTO Dealers Near ${searchPostcode}`
            : 'Find KINTO Tyre Dealers Near You'
        } />
        <meta property="og:description" content="Locate authorized KINTO tyre dealers across the UK. Professional fitting and expert service." />
        <meta property="og:image" content="https://kinto-tyres.co.uk/og-image.jpg" />
        
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Find KINTO Tyre Dealers Near You" />
        <meta property="twitter:description" content="Locate authorized KINTO tyre dealers across the UK." />
        
        <link rel="canonical" href={`https://kinto-tyres.co.uk/dealers${searchPostcode ? `?postcode=${searchPostcode}` : ''}`} />
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessListSchema)}
        </script>
      </Helmet>

      <div className="bg-[#0A0A0A] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-gray-400 hover:text-brand-red transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Find Your Nearest KINTO Dealer
            </h1>
            {searchPostcode ? (
              <p className="text-gray-400 text-lg">
                Showing dealers near <span className="text-brand-red font-semibold">{searchPostcode}</span>
              </p>
            ) : (
              <p className="text-gray-400 text-lg">
                Authorized KINTO dealers across the United Kingdom
              </p>
            )}
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
              <p className="text-gray-400 mt-4">Searching for dealers...</p>
            </div>
          )}

          {/* Dealers Grid */}
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyDealers.map((dealer, index) => (
                <motion.div
                  key={dealer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 hover:border-brand-red/50 transition-colors"
                >
                  {/* Distance Badge */}
                  {searchPostcode && dealer.distance > 0 && (
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-red/20 text-brand-red border border-brand-red/30">
                        <Navigation className="w-3 h-3 mr-1" />
                        {dealer.distance.toFixed(1)} miles away
                      </span>
                    </div>
                  )}

                  {/* Dealer Name */}
                  <h2 className="text-xl font-bold text-white mb-4">
                    {dealer.name}
                  </h2>

                  {/* Contact Information */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start text-gray-300">
                      <MapPin className="w-5 h-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p>{dealer.address}</p>
                        <p>{dealer.city}, {dealer.postcode}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-300">
                      <Phone className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                      <a 
                        href={`tel:${dealer.phone}`} 
                        className="hover:text-brand-red transition-colors"
                        aria-label={`Call ${dealer.name}`}
                      >
                        {dealer.phone}
                      </a>
                    </div>

                    <div className="flex items-center text-gray-300">
                      <Mail className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                      <a 
                        href={`mailto:${dealer.email}`} 
                        className="hover:text-brand-red transition-colors text-sm"
                        aria-label={`Email ${dealer.name}`}
                      >
                        {dealer.email}
                      </a>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-white mb-2">Services:</h3>
                    <div className="flex flex-wrap gap-2">
                      {dealer.services.map((service, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs bg-[#2A2A2A] text-gray-300 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="border-t border-[#2A2A2A] pt-4 mb-4">
                    <div className="flex items-start text-sm">
                      <Clock className="w-4 h-4 text-brand-red mr-2 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-400">
                        <p>Mon-Fri: {dealer.openingHours.weekdays}</p>
                        <p>Sat: {dealer.openingHours.saturday}</p>
                        <p>Sun: {dealer.openingHours.sunday}</p>
                      </div>
                    </div>
                  </div>

                  {/* Get Directions Button */}
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      dealer.address + ', ' + dealer.city + ', ' + dealer.postcode
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-brand-red hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-colors"
                    aria-label={`Get directions to ${dealer.name}`}
                  >
                    Get Directions
                  </a>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results */}
          {!loading && nearbyDealers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg mb-4">No dealers found in your area.</p>
              <p className="text-gray-500">Please try a different postcode or contact us for assistance.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}