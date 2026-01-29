// ProductDetailPage.tsx - Updated with SEO
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
import { products } from '../data/productsData';

// Table components remain the same...
function PassengerCarTable({ sizes }: { sizes: any[] }) {
  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-brand-red text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Size</th>
              <th className="px-4 py-3 text-left font-semibold">Loading Index</th>
              <th className="px-4 py-3 text-left font-semibold">Load Capacity (kg)</th>
              <th className="px-4 py-3 text-left font-semibold">Speed Rating</th>
              <th className="px-4 py-3 text-left font-semibold">Standard Rim</th>
              <th className="px-4 py-3 text-left font-semibold">Section Width (mm)</th>
              <th className="px-4 py-3 text-left font-semibold">Overall Diameter (mm)</th>
              <th className="px-4 py-3 text-left font-semibold">Max. Pressure (kPa)</th>
              <th className="px-4 py-3 text-left font-semibold">UTQG</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A2A2A]">
            {sizes.map((size, index) => (
              <tr key={index} className="hover:bg-[#0A0A0A] transition-colors">
                <td className="px-4 py-3 text-white font-medium">{size.size}</td>
                <td className="px-4 py-3 text-gray-300">{size.loadIndex}</td>
                <td className="px-4 py-3 text-gray-300">{size.loadCapacity}</td>
                <td className="px-4 py-3 text-gray-300">{size.speedRating}</td>
                <td className="px-4 py-3 text-gray-300">{size.standardRim}</td>
                <td className="px-4 py-3 text-gray-300">{size.sectionWidth}</td>
                <td className="px-4 py-3 text-gray-300">{size.overallDiameter}</td>
                <td className="px-4 py-3 text-gray-300">{size.maxPressure}</td>
                <td className="px-4 py-3 text-gray-300">{size.utqg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function LightTruckTable({ sizes }: { sizes: any[] }) {
  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-brand-red text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Size</th>
              <th className="px-4 py-3 text-left font-semibold">Ply</th>
              <th className="px-4 py-3 text-left font-semibold">Loading Index</th>
              <th className="px-4 py-3 text-left font-semibold">Load Capacity (kg)</th>
              <th className="px-4 py-3 text-left font-semibold">Speed Rating</th>
              <th className="px-4 py-3 text-left font-semibold">Standard Rim</th>
              <th className="px-4 py-3 text-left font-semibold">Section Width (mm)</th>
              <th className="px-4 py-3 text-left font-semibold">Overall Diameter (mm)</th>
              <th className="px-4 py-3 text-left font-semibold">Max. Pressure (kPa)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A2A2A]">
            {sizes.map((size, index) => (
              <tr key={index} className="hover:bg-[#0A0A0A] transition-colors">
                <td className="px-4 py-3 text-white font-medium">{size.size}</td>
                <td className="px-4 py-3 text-gray-300">{size.ply || '-'}</td>
                <td className="px-4 py-3 text-gray-300">{size.loadIndex}</td>
                <td className="px-4 py-3 text-gray-300">{size.loadCapacity}</td>
                <td className="px-4 py-3 text-gray-300">{size.speedRating}</td>
                <td className="px-4 py-3 text-gray-300">{size.standardRim}</td>
                <td className="px-4 py-3 text-gray-300">{size.sectionWidth}</td>
                <td className="px-4 py-3 text-gray-300">{size.overallDiameter}</td>
                <td className="px-4 py-3 text-gray-300">{size.maxPressure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TruckBusTable({ sizes }: { sizes: any[] }) {
  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-brand-red text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Size</th>
              <th className="px-4 py-3 text-left font-semibold">Description</th>
              <th className="px-4 py-3 text-left font-semibold">Ply Rating</th>
              <th className="px-4 py-3 text-left font-semibold">Tread Depth (mm)</th>
              <th className="px-4 py-3 text-left font-semibold">Standard Rim</th>
              <th className="px-4 py-3 text-left font-semibold">TT/TL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A2A2A]">
            {sizes.map((size, index) => (
              <tr key={index} className="hover:bg-[#0A0A0A] transition-colors">
                <td className="px-4 py-3 text-white font-medium">{size.size}</td>
                <td className="px-4 py-3 text-gray-300">{size.description}</td>
                <td className="px-4 py-3 text-gray-300">{size.plyRating}</td>
                <td className="px-4 py-3 text-gray-300">{size.treadDepth}</td>
                <td className="px-4 py-3 text-gray-300">{size.standardRim}</td>
                <td className="px-4 py-3 text-gray-300">{size.ttTl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function OffRoadTable({ sizes }: { sizes: any[] }) {
  return (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-brand-red text-white">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Size</th>
              <th className="px-4 py-3 text-left font-semibold">PR</th>
              <th className="px-4 py-3 text-left font-semibold">Standard Rim</th>
              <th className="px-4 py-3 text-left font-semibold">Load Capacity (kg) / Inflated Pressure (kPa)</th>
              <th className="px-4 py-3 text-left font-semibold">Section Width (mm)</th>
              <th className="px-4 py-3 text-left font-semibold">Overall Diameter (mm)</th>
              <th className="px-4 py-3 text-left font-semibold">TTF/TL</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#2A2A2A]">
            {sizes.map((size, index) => (
              <tr key={index} className="hover:bg-[#0A0A0A] transition-colors">
                <td className="px-4 py-3 text-white font-medium">{size.size}</td>
                <td className="px-4 py-3 text-gray-300">{size.pr}</td>
                <td className="px-4 py-3 text-gray-300">{size.standardRim}</td>
                <td className="px-4 py-3 text-gray-300">{size.loadCapacityPressure}</td>
                <td className="px-4 py-3 text-gray-300">{size.sectionWidth}</td>
                <td className="px-4 py-3 text-gray-300">{size.overallDiameter}</td>
                <td className="px-4 py-3 text-gray-300">{size.ttfTl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="bg-[#0A0A0A] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  // Create Product Schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "KINTO"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "KINTO TYRES"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "KINTO TYRES UK LIMITED"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  // Create Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kinto-tyres.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://kinto-tyres.co.uk/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `https://kinto-tyres.co.uk/products/${product.id}`
      }
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [productSchema, breadcrumbSchema]
  };

  const renderSpecificationTable = () => {
    switch (product.category) {
      case 'passenger':
      case 'suv':
      case '4x4':
        return <PassengerCarTable sizes={product.sizes} />;
      case 'light-truck':
        return <LightTruckTable sizes={product.sizes} />;
      case 'truck-bus':
        return <TruckBusTable sizes={product.sizes} />;
      case 'off-road':
        return <OffRoadTable sizes={product.sizes} />;
      default:
        return <PassengerCarTable sizes={product.sizes} />;
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{product.name} - Premium Japanese Tyre | KINTO TYRES UK</title>
        <meta name="description" content={`${product.description} Available in ${product.sizes.length} sizes. 2-year warranty included. Professional fitting available across the UK. ${product.season || ''}`} />
        <meta name="keywords" content={`${product.name}, ${product.category} tyres, japanese tyres uk, kinto tyres, premium tyres, ${product.season || ''} tyres`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://kinto-tyres.co.uk/products/${product.id}`} />
        <meta property="og:title" content={`${product.name} - KINTO TYRES UK`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${product.name} - KINTO TYRES UK`} />
        <meta property="twitter:description" content={product.description} />
        <meta property="twitter:image" content={product.image} />
        
        <link rel="canonical" href={`https://kinto-tyres.co.uk/products/${product.id}`} />
        
        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(combinedSchema)}
        </script>
      </Helmet>

      <div className="bg-[#0A0A0A] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/products" 
              className="inline-flex items-center text-gray-400 hover:text-brand-red transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="aspect-square bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-soft border border-[#2A2A2A] relative">
                <img
                  src={product.image}
                  alt={`${product.name} - Premium Japanese ${product.category} tyre by KINTO`}
                  className="w-full h-full object-cover object-center opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent" />
              </div>
            </motion.div>

            {/* Info Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-brand-red uppercase bg-red-900/20 border border-red-900/30 rounded-full">
                  {product.category.replace('-', ' ')}
                </span>
                {product.season && (
                  <span className="ml-3 inline-block px-3 py-1 text-xs font-semibold tracking-wider text-gray-300 uppercase bg-[#2A2A2A] rounded-full">
                    {product.season}
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
              
              {product.priceRange && (
                <p className="text-2xl font-medium text-brand-red mb-6">
                  {product.priceRange}
                </p>
              )}

              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                {product.description}
              </p>

              <div className="border-t border-[#2A2A2A] py-8 mb-8">
                <h2 className="text-lg font-semibold text-white mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 gap-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Available Sizes Summary */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-white mb-4">
                  Available Sizes ({product.sizes.length})
                </h2>
                <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6 max-h-96 overflow-y-auto">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {product.sizes.slice(0, 12).map((size, index) => (
                      <div
                        key={index}
                        className="bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg p-3 hover:border-brand-red/50 transition-colors"
                      >
                        <div className="text-white font-semibold text-sm">{size.size}</div>
                        <div className="text-gray-500 text-xs mt-1">
                          {size.speedRating || size.pr} Rated
                        </div>
                      </div>
                    ))}
                  </div>
                  {product.sizes.length > 12 && (
                    <p className="text-gray-400 text-sm mt-4 text-center">
                      + {product.sizes.length - 12} more sizes available
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Full Specifications Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Complete Size Specifications
            </h2>
            {renderSpecificationTable()}
          </motion.div>
        </div>
      </div>
    </>
  );
}