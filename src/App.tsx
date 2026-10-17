import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PackagesPage } from './pages/PackagesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { LegalPage } from './pages/LegalPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 font-sans antialiased selection:bg-orange-sms selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Core Primary Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact-us" element={<ContactPage />} />

            {/* 9 Dedicated High-Value SEO Service Routes (Section 22) */}
            <Route
              path="/website-development"
              element={<ServiceDetailPage customSlug="website-development" />}
            />
            <Route
              path="/ecommerce-development"
              element={<ServiceDetailPage customSlug="ecommerce-development" />}
            />
            <Route
              path="/seo-services"
              element={<ServiceDetailPage customSlug="seo-services" />}
            />
            <Route
              path="/digital-marketing"
              element={<ServiceDetailPage customSlug="digital-marketing" />}
            />
            <Route
              path="/social-media-management"
              element={<ServiceDetailPage customSlug="social-media-management" />}
            />
            <Route
              path="/ai-solutions"
              element={<ServiceDetailPage customSlug="ai-solutions" />}
            />
            <Route
              path="/business-automation"
              element={<ServiceDetailPage customSlug="business-automation" />}
            />
            <Route
              path="/business-intelligence"
              element={<ServiceDetailPage customSlug="business-intelligence" />}
            />
            <Route
              path="/business-support"
              element={<ServiceDetailPage customSlug="business-support" />}
            />

            {/* Dynamic Services Route for All 24 Services */}
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            {/* Governance, Transparency & Legal Routes */}
            <Route path="/privacy-policy" element={<LegalPage initialTab="privacy" />} />
            <Route path="/terms" element={<LegalPage initialTab="terms" />} />
            <Route path="/milestones-policy" element={<LegalPage initialTab="milestones" />} />
            <Route path="/cookie-policy" element={<LegalPage initialTab="cookies" />} />

            {/* Catch-all Redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
