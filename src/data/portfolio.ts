export interface ProjectItem {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  servicesDelivered: string[];
  description: string;
  image: string;
  liveUrl?: string;
  verified: boolean;
  featured?: boolean;
  results?: string;
}

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'edifier-pakistan',
    title: 'Edifier Pakistan - Official E-Commerce Store & Digital Strategy',
    clientName: 'Edifier Pakistan',
    industry: 'Consumer Electronics & Premium Audio',
    servicesDelivered: [
      'WooCommerce E-Commerce Storefront',
      'Mobile-First Responsive UI/UX',
      'Digital Marketing & Meta Ads Strategy',
      'Local Payment Gateways & Cash on Delivery',
      'Inventory Synchronization & Speed Optimization'
    ],
    description: 'Designed and deployed an e-commerce storefront for the official distributor of Edifier premium audio products in Pakistan (edifier.pk). Streamlined the checkout process, integrated automated order notifications, and executed performance marketing campaigns aligned with their global brand identity.',
    image: 'https://smartmultisolutions.com/wp-content/uploads/2026/09/SMS-Business-Growth-scaled.jpg',
    liveUrl: 'https://edifier.pk',
    verified: true,
    featured: true,
    results: 'High conversion rate, seamless checkout flow, and nationwide product delivery integration.'
  },
  {
    id: 'skyvolt-tech',
    title: 'SkyVolt - Solar Energy & Clean-Tech Solutions Platform',
    clientName: 'SkyVolt',
    industry: 'Renewable Energy & Solar Engineering',
    servicesDelivered: [
      'Corporate Web Architecture',
      'Solar Capacity & ROI Calculation Leads',
      'Inbound Lead Capture & WhatsApp Routing',
      'Search Engine Optimization (SEO)'
    ],
    description: 'Developed a corporate web platform for SkyVolt (skyvolt.pk) to showcase commercial, industrial, and residential solar systems across Pakistan. Engineered interactive consultation funnels that connect inbound prospects directly with their engineering sales team.',
    image: 'https://smartmultisolutions.com/wp-content/uploads/2026/09/Your-Business-First-scaled.webp',
    liveUrl: 'https://skyvolt.pk',
    verified: true,
    featured: true,
    results: 'Substantial increase in qualified residential & commercial solar inquiries.'
  },
  {
    id: 'organity-electronics',
    title: 'Organity Electronics - Hardware Engineering & IoT Hub',
    clientName: 'Organity Electronics',
    industry: 'Smart Hardware, Embedded Systems & Electronics',
    servicesDelivered: [
      'Industrial Product Showcase',
      'Technical Specification Catalog',
      'B2B RFQ & Quote Request Workflows',
      'Corporate Branding & Global Web Presence'
    ],
    description: 'Built a specialized technical platform for Organity Electronics (organityengineering.com) to present hardware development, PCB design services, and smart device engineering. Streamlined the technical quotation process for corporate clients.',
    image: 'https://smartmultisolutions.com/wp-content/uploads/2025/07/Experties.jpg',
    liveUrl: 'https://organityengineering.com',
    verified: true,
    featured: true,
    results: 'Streamlined B2B technical inquiries and elevated international brand credibility.'
  },
  {
    id: 'serwizo-platform',
    title: 'Serwizo - On-Demand Multi-Services Marketplace',
    clientName: 'Serwizo',
    industry: 'On-Demand Services & Digital Marketplace',
    servicesDelivered: [
      'Multi-Category Service Booking UI',
      'Service Provider Onboarding Funnel',
      'Customer Support & WhatsApp Helpdesk',
      'Mobile-Optimized Booking Workflows'
    ],
    description: 'Constructed an on-demand service ecosystem for Serwizo (serwizo.com), allowing users to explore residential and commercial maintenance services, schedule appointments, and connect directly with verified specialists.',
    image: 'https://smartmultisolutions.com/wp-content/uploads/2025/07/contact-banner-765x1024.jpg',
    liveUrl: 'https://serwizo.com',
    verified: true,
    featured: true,
    results: 'Smooth customer scheduling workflows and automated dispatch alerts.'
  },
  {
    id: 'shan-foods',
    title: 'Shan Foods - Digital Asset & Brand Showcase Solutions',
    clientName: 'Shan Foods',
    industry: 'FMCG, Global Foods & Recipe Portals',
    servicesDelivered: [
      'Digital Presence & Campaign Support',
      'Performance Web Optimization',
      'Catalog & Digital Distribution Structuring',
      'Enterprise Digital Strategy'
    ],
    description: 'Collaborating on digital initiatives and presence enhancements for Shan Foods (shanfoodspk.com), the household spices and culinary brand, supporting customer engagement and digital product catalog clarity.',
    image: 'https://smartmultisolutions.com/wp-content/uploads/2026/09/SMS-Business-Growth-scaled.jpg',
    liveUrl: 'https://shanfoodspk.com',
    verified: true,
    featured: true,
    results: 'Enhanced digital reach and seamless brand asset distribution.'
  }
];
