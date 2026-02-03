import React, { useState } from 'react';
import { Menu, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MobileMenu } from './MobileMenu';
import { motion } from 'framer-motion';
import logo from "../assets/KINTOUKLOGO.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'News', path: '/news' },
    { name: 'About', path: '/about' },
    { name: 'Warranty', path: '/warranty' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#000000] backdrop-blur-md border-b border-[#2A2A2A] sticky top-0 z-40"
      >
        {/* Top Bar */}
        <div className="bg-[#1A1A1A] text-gray-400 py-2 px-4 hidden md:block border-b border-[#2A2A2A]">
          <div className="max-w-7xl mx-auto flex justify-end space-x-6 text-xs font-medium tracking-wide">
            <a href="tel:+447886686142" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-3 h-3 mr-2" />
              +44 7886 686142
            </a>
            <a href="mailto:info@kinto-tyres.co.uk" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-3 h-3 mr-2" />
              info@kinto-tyres.co.uk
            </a>
          </div>
        </div>

        {/* Main Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img
                src={logo}
                alt="Kinto Logo"
                className="h-20 w-auto object-contain group-hover:opacity-80 transition"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-9">
              {links.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xl font-medium transition-colors hover:text-brand-red relative py-2 ${
                    location.pathname === link.path ? 'text-brand-red' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red"
                    />
                  )}
                </Link>
              ))}

              {/* 🌍 Language Switch (Desktop Only) */}
              <div id="google_translate_container" className="ml-6"></div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-red"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
