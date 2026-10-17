export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'muhammad-tariq',
    author: 'Muhammad Tariq',
    role: 'Director',
    company: 'Edifier Pakistan (edifier.pk)',
    quote: 'Smart Multi Solutions delivered a professional website and effective marketing support. Their team was reliable, responsive, and aligned everything perfectly with our brand vision and goals.',
    avatar: 'https://smartmultisolutions.com/wp-content/uploads/2025/12/tariq.jpg',
    rating: 5
  },
  {
    id: 'ammar-rana',
    author: 'Ammar Rana',
    role: 'CEO',
    company: 'SkyVolt (skyvolt.pk)',
    quote: 'Smart Multi Solutions delivered excellent service with quick turnaround and great communication. Their tailored approach truly improved our customer inquiries and workflow efficiency.',
    avatar: 'https://smartmultisolutions.com/wp-content/uploads/2025/12/Ammar-Rana.jpg',
    rating: 5
  },
  {
    id: 'zain-abbas-khan',
    author: 'Zain Abbas Khan',
    role: 'eCommerce Lead',
    company: 'Edifier Pakistan',
    quote: 'Collaborating with Smart Multi Solutions was a smooth and stress-free experience. They understood our custom requirements and executed the store architecture with precision.',
    avatar: 'https://smartmultisolutions.com/wp-content/uploads/2025/12/zain.jpg',
    rating: 5
  },
  {
    id: 'organity-rep',
    author: 'Engineering Management',
    role: 'Product Operations',
    company: 'Organity Electronics (organityengineering.com)',
    quote: 'The team developed a clean, technical digital portal that precisely showcases our hardware engineering capabilities to national and international clients.',
    avatar: 'https://smartmultisolutions.com/wp-content/uploads/2025/12/awais.jpg',
    rating: 5
  },
  {
    id: 'serwizo-rep',
    author: 'Operations Director',
    role: 'Platform Strategy',
    company: 'Serwizo (serwizo.com)',
    quote: 'From marketplace interface design to seamless WhatsApp inquiry integration, SMS provided an end-to-end digital partner experience tailored to our business model.',
    avatar: 'https://smartmultisolutions.com/wp-content/uploads/2025/12/tariq.jpg',
    rating: 5
  }
];
