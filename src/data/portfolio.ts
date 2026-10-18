export interface ProjectItem {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  servicesDelivered: string[];
  description: string;
  desktopImage: string;
  mobileImage: string;
  image?: string; // backwards compatibility
  logo?: string;
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
    desktopImage: '/portfolio/edifier-desktop.png',
    mobileImage: '/portfolio/edifier-mobile.png',
    image: '/portfolio/edifier-desktop.png',
    logo: '/Clients/Edifier-logo1.jpg',
    liveUrl: 'https://edifier.pk',
    verified: true,
    featured: true,
    results: 'High conversion rate, seamless checkout flow, and nationwide product delivery integration.'
  },
  {
    id: 'electronics-mart',
    title: 'Electronics Mart - Full-Scale Luxury Appliance E-Commerce',
    clientName: 'Electronics Mart',
    industry: 'Luxury Electronics & Home Appliances',
    servicesDelivered: [
      'Full-Scale E-Commerce Storefront',
      'Category Floors & Filter Engine',
      'Inverter AC & Appliance Showcase',
      'Showroom Consultation & WhatsApp Funnel',
      'High-Speed Cloud Architecture'
    ],
    description: 'Engineered a high-performance e-commerce platform for Electronics Mart (electronicsmart.pk) featuring extensive appliance catalogs, multi-category floors, real-time lead capture, and streamlined customer checkout.',
    desktopImage: '/portfolio/electronicsmart-desktop.jpg',
    mobileImage: '/portfolio/electronicsmart-mobile.jpg',
    image: '/portfolio/electronicsmart-desktop.jpg',
    logo: '/Clients/ElectronicsMart-logo.jpg',
    liveUrl: 'https://electronicsmart.pk',
    verified: true,
    featured: true,
    results: 'High nationwide conversion rates and automated omnichannel order routing.'
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
    desktopImage: '/portfolio/skyvolt-desktop.png',
    mobileImage: '/portfolio/skyvolt-mobile.png',
    image: '/portfolio/skyvolt-desktop.png',
    logo: '/Clients/SkyVolt-logo.jpg',
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
    desktopImage: '/portfolio/organity-desktop.png',
    mobileImage: '/portfolio/organity-mobile.png',
    image: '/portfolio/organity-desktop.png',
    logo: '/Clients/Organity-logo.jpg',
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
    desktopImage: '/portfolio/serwizo-desktop.png',
    mobileImage: '/portfolio/serwizo-mobile.png',
    image: '/portfolio/serwizo-desktop.png',
    logo: '/Clients/Serwizo-logo3.jpg',
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
    description: 'Collaborating on digital initiatives and online ordering presence for Shan Foods (shanfoodspk.com), supporting customer engagement and digital product catalog clarity.',
    desktopImage: '/portfolio/shanfoods-desktop.png',
    mobileImage: '/portfolio/shanfoods-mobile.png',
    image: '/portfolio/shanfoods-desktop.png',
    logo: '/Clients/ShanFoods-logo.jpg',
    liveUrl: 'https://shanfoodspk.com',
    verified: true,
    featured: true,
    results: 'Enhanced digital reach and seamless brand asset distribution.'
  }
];
