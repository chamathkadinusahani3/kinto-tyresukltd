import React from 'react';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/KINTOUKLOGO.png";
import { motion, AnimatePresence } from 'framer-motion';
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
export function MobileMenu({
  isOpen,
  onClose
}: MobileMenuProps) {
  const location = useLocation();
  const links = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Products',
    path: '/products'
  }, {
    name: 'News',
    path: '/news'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Warranty',
    path: '/warranty'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <AnimatePresence>
      {isOpen && <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

          {/* Menu Panel */}
          <motion.div initial={{
        x: '100%'
      }} animate={{
        x: 0
      }} exit={{
        x: '100%'
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 200
      }} className="absolute right-0 top-0 bottom-0 w-[300px] bg-[#000000] border-l border-[#2A2A2A] shadow-2xl flex flex-col">
            <div className="p-6 flex justify-between items-center border-b border-[#000000]">
              <img
              src={logo}
              alt="Kinto Logo"
              className="h-14 w-auto object-contain group-hover:opacity-80 transition"
            />
              <button onClick={onClose} className="p-2 text-gray-400 hover:text-white hover:bg-[#2A2A2A] rounded-full transition-colors" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-6">
              <ul className="space-y-4">
                {links.map(link => <li key={link.path}>
                    <Link to={link.path} onClick={onClose} className={`block text-lg font-medium py-2 border-b border-[#2A2A2A] hover:text-brand-red transition-colors ${location.pathname === link.path ? 'text-brand-red' : 'text-gray-300'}`}>
                      {link.name}
                    </Link>
                  </li>)}
              </ul>
            </nav>

            <div className="p-6 bg-[#0A0A0A] border-t border-[#2A2A2A]">
              <div className="space-y-3 text-sm text-gray-400">
                <p>
                  Call us:{' '}
                  <a href="tel:+1234567890" className="text-gray-200 font-medium hover:text-brand-red transition-colors">
                   +44 7886 686142
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@kinto-tyres.com" className="text-gray-200 font-medium hover:text-brand-red transition-colors">
                    info@kinto-tyres.co.uk 
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>}
    </AnimatePresence>;
}