import React from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
interface ProductCardProps {
  id: string;
  name: string;
  spec: string;
  image: string;
}
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0
  }
};
export function ProductCard({
  id,
  name,
  spec,
  image
}: ProductCardProps) {
  return <motion.div variants={item} className="group flex flex-col bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] overflow-hidden hover:border-brand-red/50 transition-colors duration-300 h-full">
      <div className="relative aspect-[4/3] bg-[#0A0A0A] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-400 mb-4">{spec}</p>
        <div className="mt-auto">
          <Button variant="outline" href={`/products/${id}`} fullWidth className="text-sm py-2 border-[#333] hover:bg-[#252525] hover:border-gray-500">
            View Details
          </Button>
        </div>
      </div>
    </motion.div>;
}