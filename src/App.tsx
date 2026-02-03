// src/App.tsx - Updated with SEO
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TyreSearchHero } from './components/TyreSearchHero';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { NewsPage } from './pages/NewsPage';
import { AboutPage } from './pages/AboutPage';
import { WarrantyPage } from './pages/WarrantyPage';
import { ContactPage } from './pages/ContactPage';
import { DealerRegistrationPage } from './pages/DealerRegistrationPage';
import { DistributorRegistrationPage } from './pages/DistributorRegistrationPage';
import { WarrantyRegistrationForm } from './components/warrantyregistration';
import { DealersPage } from './pages/DealersPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { TermsAndConditionsPage } from './pages/TermsAndConditionsPage';
import { CookieBanner } from './components/CookieBanner';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen font-sans text-white bg-[#0A0A0A]">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/search" element={<TyreSearchHero />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/warranty" element={<WarrantyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/dealers" element={<DealersPage />} />
              <Route path="/dealer-registration" element={<DealerRegistrationPage />} />
              <Route path="/distributor-registration" element={<DistributorRegistrationPage />} />
              <Route path="/warrantyregistration" element={<WarrantyRegistrationForm />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            </Routes>
          </main>
          <Footer />
             <CookieBanner />
        </div>
      </Router>
    </HelmetProvider>
  );
};