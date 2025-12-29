import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check, ArrowLeft, Shield, Truck, Zap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion } from 'framer-motion';
export function ProductDetailPage() {
  const {
    id
  } = useParams();
  // Mock data - in a real app this would come from an API based on ID
  const product = {
    name: 'KINTO Sport Pro',
    category: 'Ultra High Performance',
    season: 'Summer',
    price: 'From $189.00',
    description: 'The KINTO Sport Pro is engineered for drivers who demand the absolute best in handling and grip. Featuring our proprietary silica compound and asymmetric tread design, it delivers exceptional cornering stability and precise steering response on both wet and dry surfaces.',
    features: ['Asymmetric tread pattern for superior cornering', 'High-silica compound for wet weather grip', 'Reinforced sidewalls for precise steering', 'Optimized groove design to reduce hydroplaning', 'Low rolling resistance for better efficiency', 'Quiet ride technology'],
    specs: [{
      label: 'Speed Rating',
      value: 'Y (186 mph)'
    }, {
      label: 'Load Index',
      value: '92-105'
    }, {
      label: 'Treadwear',
      value: '300'
    }, {
      label: 'Traction',
      value: 'AA'
    }, {
      label: 'Temperature',
      value: 'A'
    }],
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da645217?auto=format&fit=crop&q=80&w=1200'
  };
  return <div className="bg-[#0A0A0A] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/products" className="inline-flex items-center text-gray-400 hover:text-brand-red transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Column */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="space-y-6">
            <div className="aspect-square bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-soft border border-[#2A2A2A] relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover object-center opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => <div key={i} className="aspect-square bg-[#1A1A1A] rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-brand-red transition-all border border-[#2A2A2A]">
                  <img src={product.image} alt="Detail view" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                </div>)}
            </div>
          </motion.div>

          {/* Info Column */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-brand-red uppercase bg-red-900/20 border border-red-900/30 rounded-full">
                {product.category}
              </span>
              <span className="ml-3 inline-block px-3 py-1 text-xs font-semibold tracking-wider text-gray-300 uppercase bg-[#2A2A2A] rounded-full">
                {product.season}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-medium text-brand-red mb-6">
              {product.price}
            </p>

            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              {product.description}
            </p>

            <div className="border-t border-[#2A2A2A] py-8 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {product.features.map((feature, index) => <li key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-brand-red mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">{feature}</span>
                  </li>)}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Technical Specifications
              </h3>
              <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-6">
                <div className="grid grid-cols-2 gap-y-4">
                  {product.specs.map((spec, index) => <div key={index}>
                      <dt className="text-xs text-gray-500 uppercase tracking-wide">
                        {spec.label}
                      </dt>
                      <dd className="text-sm font-medium text-gray-200 mt-1">
                        {spec.value}
                      </dd>
                    </div>)}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="flex-1 py-4 text-lg">Find a Dealer</Button>
              <Button variant="secondary" className="flex-1 py-4 text-lg">
                Download Spec Sheet
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg">
                <Shield className="w-6 h-6 text-brand-red mx-auto mb-2" />
                <span className="text-xs font-medium text-gray-300 block">
                  6-Year Warranty
                </span>
              </div>
              <div className="p-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg">
                <Truck className="w-6 h-6 text-brand-red mx-auto mb-2" />
                <span className="text-xs font-medium text-gray-300 block">
                  Free Shipping
                </span>
              </div>
              <div className="p-4 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg">
                <Zap className="w-6 h-6 text-brand-red mx-auto mb-2" />
                <span className="text-xs font-medium text-gray-300 block">
                  Fast Delivery
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>;
}