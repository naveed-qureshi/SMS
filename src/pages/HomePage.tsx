import React from 'react';
import { Hero } from '../components/home/Hero';
import { ClientLogos } from '../components/home/ClientLogos';
import { NeedsSection } from '../components/home/NeedsSection';
import { ValueProposition } from '../components/home/ValueProposition';
import { PackagesSection } from '../components/home/PackagesSection';
import { PackageComparison } from '../components/home/PackageComparison';
import { ConsultationWizard } from '../components/home/ConsultationWizard';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { GrowthTimeline } from '../components/home/GrowthTimeline';
import { PortfolioSection } from '../components/home/PortfolioSection';
import { WhySMS } from '../components/home/WhySMS';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { WhatWeBuildGrid } from '../components/home/WhatWeBuildGrid';
import { BlogPreview } from '../components/home/BlogPreview';
import { FaqSection } from '../components/home/FaqSection';
import { FinalCta } from '../components/home/FinalCta';

export const HomePage: React.FC = () => {
  const scrollToConsultation = () => {
    const el = document.getElementById('consultation-wizard');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onStartJourney={scrollToConsultation} />

      {/* 2. Client Trust Showcase: Edifier, SkyVolt, Organity, Serwizo, Shan Foods */}
      <ClientLogos />

      {/* 3. Immediate "What Do You Need?" Pathways */}
      <NeedsSection />

      {/* 4. The Big Value Proposition & Digital Journey */}
      <ValueProposition />

      {/* 5. Tailored Solutions & Capabilities */}
      <PackagesSection onSelectPackage={scrollToConsultation} />

      {/* 6. Capabilities Comparison Matrix */}
      <PackageComparison />

      {/* 7. "Not Sure What You Need?" 4-Step Consultation Wizard */}
      <ConsultationWizard />

      {/* 8. Comprehensive Services Section */}
      <ServicesOverview />

      {/* 9. How We Help You Grow (01 to 06 Timeline) */}
      <GrowthTimeline />

      {/* 10. Visual Case Studies / Portfolio */}
      <PortfolioSection />

      {/* 11. Why Smart Multi Solutions */}
      <WhySMS />

      {/* 12. Genuine Testimonials */}
      <TestimonialsSection />

      {/* 13. "What Can We Build For You?" Visual Grid */}
      <WhatWeBuildGrid />

      {/* 14. Digital Business Resources & Blog */}
      <BlogPreview />

      {/* 15. SEO-Friendly FAQ Accordion */}
      <FaqSection />

      {/* 16. Final High-Conversion CTA Banner */}
      <FinalCta onOpenConsultation={scrollToConsultation} />
    </main>
  );
};
