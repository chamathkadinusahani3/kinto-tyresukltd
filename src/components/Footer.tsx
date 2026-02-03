import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/KINTOUKLOGO.png";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const handleCookieSettings = () => {
    // Trigger cookie settings modal
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <footer className="bg-[#000000] pt-16 pb-8 border-t border-[#2A2A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Kinto Logo"
              className="h-10 w-auto object-contain group-hover:opacity-80 transition"
            />
            <p className="text-gray-400 text-large leading-relaxed">
              A leading tyre brand from Japan, developing superior-quality tyres
              under Japanese engineering for over 50 years.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-red transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-red transition-colors" 
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-red transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-brand-red transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-large font-semibold text-white uppercase tracking-wider mb-4">
              Menu
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-brand-red text-large transition-colors">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-brand-red text-large transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-brand-red text-large transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-400 hover:text-brand-red text-large transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-brand-red text-large transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/dealer-registration" className="text-gray-400 hover:text-brand-red text-large transition-colors">
                  Become a Dealer
                </Link>
              </li>
            </ul>
          </div>

          {/* Head Office */}
          <div>
            <h3 className="text-large font-semibold text-white uppercase tracking-wider mb-4">
              Head Office
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-white font-medium text-large mb-2">
                  KINTO TYRES UK LTD
                </p>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 text-brand-red mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-400 text-large leading-relaxed">
                    132, Great North Road 
                    <br />
                    Hatfield, Hertfordshire,
                    <br />
                    United Kingdom AL9 5JN
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="w-4 h-4 text-brand-red mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-large">
                  <a href="tel:+447886686142" className="text-gray-400 hover:text-brand-red transition-colors block">
                    +44 7886 686142
                  </a>
                  <a href="tel:+441707912085" className="text-gray-400 hover:text-brand-red transition-colors block mt-1">
                    +44 1707 912085
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-4 h-4 text-brand-red mr-2 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@kinto-tyres.co.uk" className="text-gray-400 hover:text-brand-red text-large transition-colors">
                  info@kinto-tyres.co.uk 
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2A2A2A] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              2025 ©KINTO TYRE UK LTD. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <Link to="/privacy-policy" className="hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link to="/cookie-policy" className="hover:text-gray-400 transition-colors">
                Cookie Policy
              </Link>
              <span>•</span>
              <Link to="/terms-and-conditions" className="hover:text-gray-400 transition-colors">
                Terms & Conditions
              </Link>
              <span>•</span>
              <button 
                onClick={handleCookieSettings}
                className="hover:text-gray-400 transition-colors"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}