export interface PackageFeature {
  text: string;
  highlighted?: boolean;
}

export interface PackageItem {
  id: string;
  name: string;
  tagline: string;
  targetAudience: string;
  price: string;
  priceNumeric?: number;
  period?: string;
  badge?: string;
  isPopular?: boolean;
  isFeatured?: boolean;
  ctaText: string;
  ctaAction: string;
  customNote?: string;
  features: PackageFeature[];
}

export interface ComparisonDimension {
  name: string;
  category?: string;
  values: {
    [packageId: string]: string | boolean;
  };
}

export const PACKAGES_DATA: PackageItem[] = [
  {
    id: 'starter-web',
    name: 'Digital Business & Web Presence',
    tagline: 'Professional, custom-designed corporate websites and digital identity tailored to your brand.',
    targetAudience: 'Startups, corporate firms & local businesses',
    price: 'Custom Scope Quote',
    badge: 'CORE SOLUTION',
    ctaText: 'Discuss Your Website',
    ctaAction: 'starter-web',
    features: [
      { text: 'Custom UI/UX designed around your brand identity' },
      { text: '100% mobile-responsive layout across all devices' },
      { text: 'Fast loading speeds & modern web performance' },
      { text: 'Direct WhatsApp click-to-chat integration' },
      { text: 'Custom lead capture & inquiry forms with instant alerts' },
      { text: 'Google Maps location & Business Profile sync' },
      { text: 'On-page SEO optimization for Google search' },
      { text: 'Google Analytics 4 & Search Console setup' },
      { text: 'Dedicated technical support & handover walkthrough' },
    ]
  },
  {
    id: 'ecommerce-solution',
    name: 'Custom E-Commerce & Storefronts',
    tagline: 'High-converting online stores engineered to showcase catalogs, manage inventory, and process orders.',
    targetAudience: 'Retailers, D2C brands, and manufacturers',
    price: 'Custom Scope Quote',
    badge: 'POPULAR',
    isPopular: true,
    isFeatured: true,
    ctaText: 'Build Your Online Store',
    ctaAction: 'ecommerce-solution',
    features: [
      { text: 'WooCommerce, Shopify or bespoke storefront architecture' },
      { text: 'Frictionless mobile checkout flow & customer accounts' },
      { text: 'Payment gateway integration (Cards, PayFast, Safepay, Bank)' },
      { text: 'Cash on Delivery (COD) & automated courier dispatch' },
      { text: 'Automated WhatsApp order notifications for customers & admin' },
      { text: 'Inventory management & product variation systems' },
      { text: 'Discount coupon codes & dynamic promotions engine' },
      { text: 'Product schema markup & e-commerce SEO optimization' },
      { text: 'Comprehensive admin dashboard training & ongoing support', highlighted: true },
    ]
  },
  {
    id: 'growth-marketing',
    name: 'Digital Growth, SEO & Performance Marketing',
    tagline: 'Systematic customer acquisition through high-intent search visibility and targeted paid advertising campaigns.',
    targetAudience: 'Growing businesses ready to scale sales & leads',
    price: 'Tailored Strategy Quote',
    badge: 'SCALING',
    ctaText: 'Scale Your Traffic & Leads',
    ctaAction: 'growth-marketing',
    features: [
      { text: 'In-depth website & market competitor audit' },
      { text: 'Technical SEO fix, site architecture & schema optimization' },
      { text: 'High-intent commercial keyword ranking for Pakistan & global' },
      { text: 'Google Business Profile local 3-pack dominance' },
      { text: 'Meta Ads (Facebook / Instagram) targeted lead campaigns' },
      { text: 'Conversion Rate Optimization (CRO) & funnel tuning' },
      { text: 'Automated executive monthly performance reporting' },
      { text: 'Retargeting pixel setup for high-intent visitors' },
      { text: 'Dedicated growth consultant & continuous review', highlighted: true },
    ]
  },
  {
    id: 'ai-automation',
    name: 'AI Chatbots, Workflows & Business Automation',
    tagline: 'Intelligent WhatsApp assistants, CRM integrations, and business process automation.',
    targetAudience: 'Companies looking to eliminate manual tasks and save hours',
    price: 'Custom Scope Quote',
    badge: 'AUTOMATION',
    ctaText: 'Automate Operations',
    ctaAction: 'ai-automation',
    features: [
      { text: '24/7 AI-powered WhatsApp & web chat assistants' },
      { text: 'Automated FAQs, pricing inquiries, and order routing' },
      { text: 'CRM & Google Sheets instant real-time synchronization' },
      { text: 'Automated invoice generation & notification pipelines' },
      { text: 'Executive BI dashboards & live financial/sales metrics' },
      { text: 'Custom API integrations with third-party software' },
      { text: 'Workflow hardening, data security & uptime monitoring' },
      { text: 'Priority SLA & continuous technical enhancements', highlighted: true },
    ]
  },
  {
    id: 'enterprise-full-suite',
    name: 'End-to-End Digital Partner Suite',
    tagline: 'Full-service digital ecosystem management covering web, marketing, AI, and ongoing technology infrastructure.',
    targetAudience: 'Established enterprises & fast-growing companies',
    price: 'Custom Enterprise Scope',
    badge: 'ENTERPRISE',
    ctaText: 'Consult Our Team',
    ctaAction: 'enterprise-full-suite',
    customNote: "Have specific enterprise requirements? Let's build your tailored roadmap.",
    features: [
      { text: 'Full technology architecture & digital roadmap consultation' },
      { text: 'Scalable web application or high-volume e-commerce infrastructure' },
      { text: 'Comprehensive SEO dominance & multi-channel ad management' },
      { text: 'Custom AI agent deployment & back-office process automation' },
      { text: 'Real-time multi-department business intelligence dashboards' },
      { text: 'Continuous security audits, speed tuning & CDN management' },
      { text: 'Dedicated senior account director & engineering team' },
      { text: 'Fast-response SLA & priority technical support', highlighted: true },
    ]
  }
];

export const COMPARISON_DIMENSIONS: ComparisonDimension[] = [
  {
    name: 'Primary Focus',
    values: {
      'starter-web': 'Brand Authority & Professional Web Presence',
      'ecommerce-solution': 'Online Sales, Product Catalog & Checkout',
      'growth-marketing': 'Search Rankings, Traffic & Lead Generation',
      'ai-automation': 'Operational Automation & AI Assistance',
      'enterprise-full-suite': 'Complete End-to-End Digital Transformation'
    }
  },
  {
    name: 'Website & UI Architecture',
    values: {
      'starter-web': 'Custom Tailored Responsive Architecture',
      'ecommerce-solution': 'Storefront UI/UX with Cart & Checkout',
      'growth-marketing': 'Conversion-Optimized Landing Funnels',
      'ai-automation': 'System & Portal Integrations',
      'enterprise-full-suite': 'Bespoke Scalable Infrastructure'
    }
  },
  {
    name: 'E-Commerce & Online Payments',
    values: {
      'starter-web': 'Inquiry & Consultation Routing',
      'ecommerce-solution': 'Full Store, Online Gateways & COD Setup',
      'growth-marketing': 'E-Commerce Funnel Optimization',
      'ai-automation': 'Automated Order & Invoicing Workflows',
      'enterprise-full-suite': 'Multi-channel / High-Volume Infrastructure'
    }
  },
  {
    name: 'Search Engine Optimization (SEO)',
    values: {
      'starter-web': 'On-Page SEO & Meta Tags',
      'ecommerce-solution': 'Product Schema & E-Commerce SEO',
      'growth-marketing': 'Comprehensive Technical, Keyword & Local SEO',
      'ai-automation': 'Search-Optimized Knowledge Base',
      'enterprise-full-suite': 'Full-Scale Competitive Dominance'
    }
  },
  {
    name: 'Automation & AI Capabilities',
    values: {
      'starter-web': 'WhatsApp Direct Click-to-Chat',
      'ecommerce-solution': 'Automated WhatsApp Order Alerts',
      'growth-marketing': 'Automated Inbound Lead Routing',
      'ai-automation': '24/7 AI Chatbot & Back-Office Automation',
      'enterprise-full-suite': 'Custom AI Assistants & Full ERP/CRM Sync'
    }
  },
  {
    name: 'Analytics & Reporting',
    values: {
      'starter-web': 'Google Analytics 4 & Search Console',
      'ecommerce-solution': 'GA4 Enhanced E-Commerce Tracking',
      'growth-marketing': 'Monthly Executive Performance Reports',
      'ai-automation': 'Live Workflow & Operational Dashboards',
      'enterprise-full-suite': 'Real-Time Enterprise BI Executive System'
    }
  },
  {
    name: 'Consultation & Support Model',
    values: {
      'starter-web': 'Post-Launch Support & Handover',
      'ecommerce-solution': 'Store Admin Training & Ongoing Support',
      'growth-marketing': 'Monthly Strategy Reviews & Account Manager',
      'ai-automation': 'Dedicated Technical Maintenance & SLAs',
      'enterprise-full-suite': 'Priority Dedicated Partner & Engineering Team'
    }
  }
];

export const COMPANY_CONTACT = {
  phone: '+92 320 4410 450',
  whatsapp: '923204410450',
  email: 'info@smartmultisolutions.com',
  address: 'Lahore, Punjab, Pakistan',
  hours: 'Mon - Sat: 9:00 AM - 7:00 PM PKT',
  tagline: 'Your Growth Partner',
  website: 'smartmultisolutions.com',
  mission: 'Build. Grow. Automate.',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = "Hi Smart Multi Solutions, I would like to discuss a tailored digital solution for my business.";
  const msg = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${COMPANY_CONTACT.whatsapp}?text=${msg}`;
}
