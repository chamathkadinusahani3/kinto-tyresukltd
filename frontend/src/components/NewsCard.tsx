import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
interface NewsCardProps {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
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
export function NewsCard({
  id,
  title,
  date,
  image,
  excerpt
}: NewsCardProps) {
  return <motion.article variants={item} className="flex flex-col bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] overflow-hidden h-full hover:border-gray-700 transition-colors">
      <div className="aspect-video bg-[#0A0A0A] overflow-hidden relative">
        <img src={image} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60" />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4 mr-2" />
          <time>{date}</time>
        </div>
        <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
          <Link to={`/news`} className="hover:text-brand-red transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-3 flex-grow">{excerpt}</p>
        <Link to={`/news`} className="inline-flex items-center text-brand-red font-medium hover:text-[#ff4d5a] transition-colors mt-auto">
          Read Article
        </Link>
      </div>
    </motion.article>;
}