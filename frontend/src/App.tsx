import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { NewsPage } from './pages/NewsPage';
import { AboutPage } from './pages/AboutPage';
import { WarrantyPage } from './pages/WarrantyPage';
import { ContactPage } from './pages/ContactPage';
import { DealerRegistrationPage } from './pages/DealerRegistrationPage';
import { WarrantyRegistrationForm } from './components/warrantyregistration';
// Scroll to top on route change
function ScrollToTop() {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return     <BrowserRouter basename="/kinto-tyresukltd">
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-white bg-[#0A0A0A]">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/warranty" element={<WarrantyPage />} />
            <Route path="/contact" element={<ContactPage />} />
             <Route path="/dealer-registration" element={<DealerRegistrationPage />} />
               <Route path="/warrantyregistration" element={<WarrantyRegistrationForm />} />
          </Routes>
        </main>
        <Footer />
  
      </div>
    </BrowserRouter>;
}