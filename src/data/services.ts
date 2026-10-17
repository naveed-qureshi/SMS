export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  category: 'digital-business' | 'digital-growth' | 'ai-automation' | 'business-support';
  categoryTitle: string;
  iconName: string;
  highlights: string[];
  deliverables: string[];
  whoNeedsThis: string[];
  faqs: { question: string; answer: string }[];
  popular?: boolean;
}

export interface ServiceCategory {
  id: 'digital-business' | 'digital-growth' | 'ai-automation' | 'business-support';
  title: string;
  tagline: string;
  description: string;
  badge: string;
  icon: string;
  services: ServiceItem[];
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: 'digital-business',
    title: 'Digital Business',
    tagline: 'Establish Authority & Sell Online',
    description: 'Create a professional digital presence that gives your business credibility and makes it effortless for customers in Pakistan and globally to find, contact, and buy from you.',
    badge: 'FOUNDATION & SALES',
    icon: 'Globe',
    services: [
      {
        id: 'web-dev',
        slug: 'website-development',
        name: 'Website Development',
        shortDesc: 'Modern, ultra-fast and conversion-focused business websites that represent your brand with authority.',
        fullDesc: 'We design and engineer bespoke, high-performance websites tailored specifically for Pakistani businesses, startups, and service providers. Moving away from generic bloated templates, we craft clean user journeys that turn casual visitors into loyal paying customers.',
        category: 'digital-business',
        categoryTitle: 'Digital Business',
        iconName: 'Layout',
        popular: true,
        highlights: [
          'Mobile-first responsive architecture',
          'Fast loading speeds optimized for Pakistan mobile networks',
          'Modern UI/UX focused on trust and conversions',
          'Easy-to-use CMS for effortless client updates'
        ],
        deliverables: [
          'Custom responsive design across all devices',
          'Lead capture contact forms & WhatsApp click-to-chat',
          'Integrated on-page SEO & Google Search Console submission',
          'Performance optimization with WebP images and clean markup',
          'Staff training video and 30-day post-launch support'
        ],
        whoNeedsThis: [
          'Startups launching their very first brand presence',
          'Established businesses operating with outdated websites',
          'Service providers, consultants, and corporate firms'
        ],
        faqs: [
          {
            question: 'How long does it take to develop a business website in Pakistan?',
            answer: 'A standard 5–8 page business website typically takes 7 to 14 working days from content collection to live deployment.'
          },
          {
            question: 'Can I easily update text, images, and services myself after launch?',
            answer: 'Yes! We provide an intuitive backend dashboard along with 1-on-1 walkthrough training so your team can make updates without coding.'
          }
        ]
      },
      {
        id: 'ecommerce-dev',
        slug: 'ecommerce-development',
        name: 'E-Commerce Development',
        shortDesc: 'Complete online stores with local payment gateways, Cash on Delivery, and courier tracking.',
        fullDesc: 'Build a profitable online retail presence with seamless shopping experiences designed for Pakistani consumer habits. From automated WhatsApp order confirmations to local payment integrations (PayFast, Safepay, Bank Transfers) and COD logistics, we cover every detail.',
        category: 'digital-business',
        categoryTitle: 'Digital Business',
        iconName: 'ShoppingBag',
        popular: true,
        highlights: [
          'Optimized for Cash on Delivery (COD) & online cards',
          'Fast checkout designed to minimize cart abandonment',
          'Inventory management & automated order notifications',
          'Direct WhatsApp customer inquiry buttons on every product'
        ],
        deliverables: [
          'WooCommerce / Shopify custom storefront setup',
          'Payment gateway integration (PayFast, Safepay, Debit/Credit)',
          'Courier and shipping rate calculation integration',
          'Customer account portals and order history tracking',
          'Discount codes, vouchers, and product review system'
        ],
        whoNeedsThis: [
          'Physical retail shop owners wanting to sell nationwide',
          'Brands currently relying solely on Instagram/Facebook DMs',
          'Wholesalers and manufacturers looking for B2B/B2C online orders'
        ],
        faqs: [
          {
            question: 'Which payment gateways can be integrated in Pakistan?',
            answer: 'We integrate all leading local payment gateways including PayFast, Safepay, JazzCash, EasyPaisa, and direct bank transfers alongside Cash on Delivery.'
          },
          {
            question: 'Can my store handle high traffic during sales like 11.11 or Blessed Friday?',
            answer: 'Yes. We architect e-commerce platforms with caching, optimized database queries, and CDN asset delivery to withstand traffic surges during major seasonal sales.'
          }
        ]
      },
      {
        id: 'domain-hosting',
        slug: 'website-development',
        name: 'Domain & Cloud Hosting',
        shortDesc: 'High-speed cloud servers with 99.9% uptime, SSD NVMe storage, and SSL certificates.',
        fullDesc: 'We handle your .pk or .com domain registration, DNS management, and reliable cloud hosting so your website stays online 24/7 without unexpected downtime.',
        category: 'digital-business',
        categoryTitle: 'Digital Business',
        iconName: 'Server',
        highlights: [
          'Official PKNIC .pk domain registration and setup',
          'NVMe SSD cloud hosting with global CDN caching',
          'Free SSL certificates for browser security compliance',
          'Automated daily and weekly site backups'
        ],
        deliverables: [
          'Domain registration and nameserver management',
          'Cloud hosting server configuration',
          'Free Let’s Encrypt SSL certificate deployment',
          'Disaster recovery backup routines'
        ],
        whoNeedsThis: [
          'New ventures needing their official corporate domain',
          'Companies suffering from slow hosting and server outages'
        ],
        faqs: [
          {
            question: 'Can you register .com.pk and .pk domains?',
            answer: 'Yes, we handle complete registration and verification for all PKNIC extensions as well as global TLDs like .com, .org, and .net.'
          }
        ]
      },
      {
        id: 'business-email',
        slug: 'website-development',
        name: 'Professional Business Email',
        shortDesc: 'Credible corporate email addresses (you@yourcompany.com) on Google Workspace or Outlook.',
        fullDesc: 'Eliminate unprofessional @gmail.com addresses and build corporate credibility with verified custom domain email accounts configured on your phone, Outlook, or webmail.',
        category: 'digital-business',
        categoryTitle: 'Digital Business',
        iconName: 'Mail',
        highlights: [
          'Instant credibility with clients and suppliers',
          'Spam protection and DKIM/SPF/DMARC authentication',
          'Mobile phone synchronization on iOS and Android',
          'Centralized user management for your team'
        ],
        deliverables: [
          'Custom email inbox setup (e.g. info@, sales@, yourname@)',
          'DNS email security records (SPF, DKIM, DMARC)',
          'Device configuration guides for Outlook and mobile'
        ],
        whoNeedsThis: [
          'Any Pakistani business wanting to establish professional authority'
        ],
        faqs: [
          {
            question: 'Can I check my business emails on my phone?',
            answer: 'Absolutely. We configure IMAP/Exchange settings so you receive and send emails seamlessly from your phone or tablet.'
          }
        ]
      },
      {
        id: 'google-business',
        slug: 'website-development',
        name: 'Google Business Profile',
        shortDesc: 'Get listed on Google Maps and local search when nearby customers look for your services.',
        fullDesc: 'Optimize your Google Business Profile (formerly Google My Business) to appear prominently in the coveted Google Map 3-pack for searches in Lahore, Karachi, Islamabad, and across Pakistan.',
        category: 'digital-business',
        categoryTitle: 'Digital Business',
        iconName: 'MapPin',
        highlights: [
          'Verification assistance and NAP (Name, Address, Phone) consistency',
          'Optimized category selection and service catalog listing',
          'Review generation strategy and customer trust building',
          'Direct click-to-call and Google Maps driving directions'
        ],
        deliverables: [
          'Google Business Profile registration & pin positioning',
          'High-resolution photo and logo upload',
          'Services menu and business operating hours setup'
        ],
        whoNeedsThis: [
          'Local retail stores, clinics, restaurants, law firms, and agencies'
        ],
        faqs: [
          {
            question: 'Why is Google Business Profile essential for Pakistani businesses?',
            answer: 'Over 80% of local service queries happen on smartphones with "near me" intent. Having a verified profile gets you direct phone calls and shop walk-ins.'
          }
        ]
      },
      {
        id: 'website-maintenance',
        slug: 'website-development',
        name: 'Website Care & Maintenance',
        shortDesc: 'Continuous security patching, speed audits, plugin updates, and off-site backups.',
        fullDesc: 'Never worry about malware, broken links, or plugin conflicts. Our care plans keep your digital platform secure, fast, and constantly running at peak efficiency.',
        category: 'digital-business',
        categoryTitle: 'Digital Business',
        iconName: 'ShieldCheck',
        highlights: [
          'Core and security software updates',
          '24/7 uptime monitoring and immediate troubleshooting',
          'Off-site automated backups',
          'Monthly technical checkups and speed maintenance'
        ],
        deliverables: [
          'Weekly security & plugin audits',
          'Cloud backups preserved off-site',
          'Priority support response for content tweaks'
        ],
        whoNeedsThis: [
          'Busy business owners who cannot afford website downtime or technical hassles'
        ],
        faqs: [
          {
            question: 'What happens if my website goes down or gets hacked?',
            answer: 'With our maintenance plan, we monitor your uptime continuously and restore your site immediately from our secure cloud backups at no extra charge.'
          }
        ]
      }
    ]
  },
  {
    id: 'digital-growth',
    title: 'Digital Growth',
    tagline: 'Get Found & Attract Customers',
    description: 'Having a digital presence is only the beginning. We help Pakistani businesses attract the right target audience and systematically turn online visibility into qualified leads and sales.',
    badge: 'VISIBILITY & LEADS',
    icon: 'TrendingUp',
    services: [
      {
        id: 'seo-services',
        slug: 'seo-services',
        name: 'Search Engine Optimization (SEO)',
        shortDesc: 'Rank on Page 1 of Google for high-intent search queries that drive continuous organic traffic.',
        fullDesc: 'We implement ethical, white-hat SEO strategies tailored for Pakistani and international markets. Through technical optimization, targeted keyword mapping, and authority building, we turn Google search into your company’s highest-converting acquisition channel.',
        category: 'digital-growth',
        categoryTitle: 'Digital Growth',
        iconName: 'Search',
        popular: true,
        highlights: [
          'In-depth competitor & keyword research',
          'On-page title, meta, content, and internal link optimization',
          'Technical SEO fixing core web vitals and crawl errors',
          'Transparent monthly organic traffic & ranking reports'
        ],
        deliverables: [
          'Comprehensive initial technical SEO audit',
          'Targeted keyword strategy document',
          'Schema markup & meta tag implementation',
          'Monthly ranking & organic visitor growth dashboard'
        ],
        whoNeedsThis: [
          'Companies tired of paying continuously for ads',
          'E-commerce stores wanting continuous product search traffic',
          'B2B services wanting inbound corporate inquiries'
        ],
        faqs: [
          {
            question: 'How long does SEO take to produce measurable results in Pakistan?',
            answer: 'Typical campaigns show noticeable keyword movement within 60–90 days, with substantial organic traffic growth achieved between months 4 to 6.'
          }
        ]
      },
      {
        id: 'local-seo',
        slug: 'seo-services',
        name: 'Local SEO for Pakistan',
        shortDesc: 'Dominate localized searches in Lahore, Karachi, Islamabad, and specific commercial hubs.',
        fullDesc: 'Target customers within your immediate city or service radius. We optimize your local citations, Google Maps presence, and location landing pages to capture high-intent local buyers.',
        category: 'digital-growth',
        categoryTitle: 'Digital Growth',
        iconName: 'Navigation',
        highlights: [
          'City-specific localized keyword targeting',
          'Google Maps 3-Pack rank enhancement',
          'Local business directory listings & citation building',
          'Customer review generation systems'
        ],
        deliverables: [
          'Local keyword map for major Pakistani cities',
          'Citation submissions on reputable regional portals',
          'Localized schema markup for your physical address'
        ],
        whoNeedsThis: [
          'Healthcare clinics, retail shops, contractors, schools, and restaurants'
        ],
        faqs: [
          {
            question: 'Can you help us rank in multiple cities across Pakistan?',
            answer: 'Yes! We create localized landing page structures and multi-city geographic targeting for businesses operating across Lahore, Karachi, and Islamabad.'
          }
        ]
      },
      {
        id: 'digital-marketing',
        slug: 'digital-marketing',
        name: 'Strategic Digital Marketing',
        shortDesc: 'Targeted multi-channel digital campaigns focused strictly on ROI, leads, and sales.',
        fullDesc: 'We plan and execute integrated digital marketing strategies that connect your brand with active buyers. From content funnels to lead magnets and conversion landing pages, we build sustainable customer acquisition engines.',
        category: 'digital-growth',
        categoryTitle: 'Digital Growth',
        iconName: 'Target',
        popular: true,
        highlights: [
          'Full-funnel audience research and persona mapping',
          'Offer design and conversion-focused copy',
          'Performance tracking with conversion pixels',
          'No vanity metrics—strictly leads, sales, and ROAS'
        ],
        deliverables: [
          'Comprehensive marketing strategy roadmap',
          'Ad creatives and compelling copywriting',
          'Weekly campaign performance reports'
        ],
        whoNeedsThis: [
          'Growing brands ready to scale beyond word-of-mouth'
        ],
        faqs: [
          {
            question: 'Do you manage both B2B and B2C campaigns?',
            answer: 'Yes, we tailor platforms and messaging accordingly — utilizing LinkedIn and Search for B2B, and Meta, TikTok, and Google Shopping for B2C retail.'
          }
        ]
      },
      {
        id: 'social-media',
        slug: 'social-media-management',
        name: 'Social Media Management',
        shortDesc: 'Engaging content, branded visuals, and active audience interaction across Meta and LinkedIn.',
        fullDesc: 'Build an active and trusted brand identity on Instagram, Facebook, and LinkedIn. We create professional graphics, engaging short videos/reels, and handle community interaction to turn followers into customers.',
        category: 'digital-growth',
        categoryTitle: 'Digital Growth',
        iconName: 'Share2',
        highlights: [
          'Consistent branded aesthetic and custom graphic design',
          'High-retention Reels, carousels, and product showcases',
          'Community management and prompt message response',
          'Monthly content calendars planned in advance'
        ],
        deliverables: [
          'Monthly 12-20 customized branded posts & reels',
          'Caption copywriting with localized Pakistani hashtags',
          'Community engagement monitoring and monthly reporting'
        ],
        whoNeedsThis: [
          'Retailers, hospitality, beauty, educational institutions, and lifestyle brands'
        ],
        faqs: [
          {
            question: 'Do you provide graphic design and video editing for social posts?',
            answer: 'Yes, our team handles the entire creative workflow including graphic templates, product photo retouching, reel editing, and caption copy.'
          }
        ]
      },
      {
        id: 'content-strategy',
        slug: 'digital-marketing',
        name: 'Content & Copywriting',
        shortDesc: 'Persuasive website copy and educational blog articles that position your company as an authority.',
        fullDesc: 'Words sell. We produce high-quality, human-written copy for your landing pages, service descriptions, and blog knowledge base to build deep trust and rank organically.',
        category: 'digital-growth',
        categoryTitle: 'Digital Growth',
        iconName: 'PenTool',
        highlights: [
          'Benefit-driven copy focused on customer pain points',
          'SEO-optimized articles targeting valuable search questions',
          'Clear brand voice suitable for your industry',
          'Clear calls to action that guide the reader to contact you'
        ],
        deliverables: [
          'Website page copy with revision rounds',
          'In-depth SEO articles and resource guides',
          'Email newsletter drafts and lead magnet copy'
        ],
        whoNeedsThis: [
          'Companies wanting clear, compelling messaging that distinguishes them from competitors'
        ],
        faqs: [
          {
            question: 'Do you write content in English or Urdu?',
            answer: 'We produce clean, professional English content as well as bilingual / Roman Urdu messaging where relevant for local campaigns.'
          }
        ]
      },
      {
        id: 'online-ads',
        slug: 'digital-marketing',
        name: 'Paid Advertising (Meta & Google Ads)',
        shortDesc: 'Laser-targeted paid ads on Google Search and Facebook/Instagram to generate immediate pipeline.',
        fullDesc: 'Maximize your advertising budget with carefully structured PPC campaigns. We optimize bids, negative keywords, and creative testing to ensure every rupee spent contributes to real revenue.',
        category: 'digital-growth',
        categoryTitle: 'Digital Growth',
        iconName: 'BarChart2',
        highlights: [
          'Google Search ads capturing high-intent immediate buyers',
          'Meta Ads (Facebook & Instagram) for visual product sales',
          'Continuous A/B testing of creatives and headlines',
          'Strict budget controls preventing ad waste'
        ],
        deliverables: [
          'Ad campaign architecture and tracking setup',
          'Creative assets and ad copy creation',
          'Weekly optimization logs and transparent expenditure tracking'
        ],
        whoNeedsThis: [
          'Businesses seeking rapid customer acquisition and e-commerce scale'
        ],
        faqs: [
          {
            question: 'What is the recommended minimum ad budget in Pakistan?',
            answer: 'For Google or Meta campaigns in Pakistan, we recommend starting with a minimum test ad spend of Rs. 30,000 to Rs. 50,000 per month paid directly to the ad platform.'
          }
        ]
      }
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    tagline: 'Work Smarter & Save Time',
    description: 'Artificial intelligence is no longer just for multinational tech giants. We help Pakistani small and medium businesses identify practical, high-value ways to automate routine tasks and improve customer responsiveness.',
    badge: 'EFFICIENCY & SPEED',
    icon: 'Cpu',
    services: [
      {
        id: 'ai-video-ads',
        slug: 'ai-generated-video-ads',
        name: 'AI Generated Video Ads',
        shortDesc: 'High-converting, studio-grade video commercials, avatars, and UGC ads built for Meta, TikTok & YouTube.',
        fullDesc: 'Supercharge your digital advertising ROAS with AI-generated video ads. We combine persuasive direct-response scripts, ultra-realistic AI voiceovers, photorealistic avatars, and high-impact motion graphics to deliver high-converting video creatives in days instead of weeks—at a fraction of traditional production costs.',
        category: 'ai-automation',
        categoryTitle: 'AI & Automation',
        iconName: 'Video',
        popular: true,
        highlights: [
          'Direct-response scripts tailored for Pakistani and international audiences',
          'Hyper-realistic AI human avatars and multilingual voiceovers (Urdu & English)',
          '9:16 vertical reels & 16:9 widescreen formats optimized for social ad platforms',
          'Fast turnaround testing multiple hooks to dramatically boost Meta & TikTok ad ROI'
        ],
        deliverables: [
          'High-definition MP4 commercial creatives ready for ad manager upload',
          'Engaging video captions, sound effects, and call-to-action cards',
          'Hook variation testing assets (multiple opening hooks per campaign)',
          'Complete commercial usage rights for all digital ad platforms'
        ],
        whoNeedsThis: [
          'E-commerce brands seeking higher ROAS on Meta & TikTok',
          'B2B & corporate service providers needing polished video explainers',
          'Solar, tech, real estate, and clinic brands wanting modern video marketing'
        ],
        faqs: [
          {
            question: 'How fast can an AI video ad be created?',
            answer: 'Typically between 48 to 72 hours from script approval, compared to 2-4 weeks for conventional camera production.'
          },
          {
            question: 'Can the video have Urdu voiceover and localized accents?',
            answer: 'Yes! We support natural Pakistani Urdu accents, international British/American accents, and bilingual scripts.'
          }
        ]
      },
      {
        id: 'ai-solutions',
        slug: 'ai-solutions',
        name: 'AI Business Solutions',
        shortDesc: 'Custom AI implementations that streamline document processing, drafting, and workflow analysis.',
        fullDesc: 'Identify exactly where artificial intelligence delivers tangible ROI in your business. We build tailored AI workflows that cut hours off administrative tasks, summarize client files, and extract actionable insights from business data.',
        category: 'ai-automation',
        categoryTitle: 'AI & Automation',
        iconName: 'Bot',
        popular: true,
        highlights: [
          'Custom prompt engineering and business knowledge bases',
          'Secure document analysis and summarization',
          'Workflow audits identifying repetitive time drains',
          'No complicated technical jargon—practical business tools'
        ],
        deliverables: [
          'AI implementation strategy tailored to your operations',
          'Configured custom AI tools & workflow integrations',
          'Staff operational training and best-practice guides'
        ],
        whoNeedsThis: [
          'SME owners and executives seeking to multiply staff productivity without hiring overhead'
        ],
        faqs: [
          {
            question: 'Is AI too complex or expensive for a small business in Pakistan?',
            answer: 'Not at all. We focus on lightweight, practical AI tools that connect to your existing spreadsheets and software, costing a fraction of traditional custom software.'
          }
        ]
      },
      {
        id: 'ai-support',
        slug: 'ai-solutions',
        name: 'AI Customer Support Assistants',
        shortDesc: '24/7 intelligent chatbots on WhatsApp and your website that answer FAQs and capture leads.',
        fullDesc: 'Never miss an inquiry at midnight or during busy hours. We train intelligent chatbots on your exact product catalog, business policies, and pricing to answer customer queries instantly and book appointments.',
        category: 'ai-automation',
        categoryTitle: 'AI & Automation',
        iconName: 'MessageSquare',
        highlights: [
          'Direct integration with WhatsApp Business and website live chat',
          'Trained exclusively on your company data and catalogs',
          'Smooth escalation to human staff when needed',
          'Instant lead qualification and contact information logging'
        ],
        deliverables: [
          'Trained AI chatbot engine with verified knowledge base',
          'WhatsApp / website chat widget installation',
          'Lead capture integration into Google Sheets or CRM'
        ],
        whoNeedsThis: [
          'E-commerce brands, real estate firms, clinics, service providers'
        ],
        faqs: [
          {
            question: 'Can the AI chatbot reply in Roman Urdu or English?',
            answer: 'Yes! Our bots understand conversational English, Urdu, and Roman Urdu so local Pakistani customers receive natural, courteous replies.'
          }
        ]
      },
      {
        id: 'ai-content',
        slug: 'ai-solutions',
        name: 'AI Content Generation Engines',
        shortDesc: 'Accelerate product descriptions, social media drafts, and catalog updates effortlessly.',
        fullDesc: 'Generate hundreds of accurate e-commerce product descriptions, email campaigns, and marketing drafts in minutes while maintaining brand voice and accuracy.',
        category: 'ai-automation',
        categoryTitle: 'AI & Automation',
        iconName: 'Sparkles',
        highlights: [
          'Bulk product catalog description generator',
          'Tone-of-voice alignment to your brand guidelines',
          'Human-in-the-loop review protocols for quality control',
          'Massive time savings for large SKU inventories'
        ],
        deliverables: [
          'Custom content generation templates',
          'Bulk description processing workflows',
          'Team guidelines for fast editing and publishing'
        ],
        whoNeedsThis: [
          'E-commerce retailers managing thousands of products, publishers'
        ],
        faqs: [
          {
            question: 'Will Google penalize AI-generated content on my website?',
            answer: 'Google evaluates content quality, accuracy, and helpfulness rather than whether AI assisted the process. We ensure all AI content is reviewed, value-rich, and factual.'
          }
        ]
      },
      {
        id: 'process-automation',
        slug: 'business-automation',
        name: 'Business Process Automation',
        shortDesc: 'Connect your website, Google Sheets, WhatsApp, CRM, and accounting software automatically.',
        fullDesc: 'Eliminate manual copy-pasting between systems. We create automated pipelines using Zapier, Make, and webhooks that instantly log leads, notify team members, generate invoices, and trigger customer alerts.',
        category: 'ai-automation',
        categoryTitle: 'AI & Automation',
        iconName: 'Workflow',
        popular: true,
        highlights: [
          'Zero human data-entry errors between software',
          'Instant WhatsApp alerts upon new website form submissions',
          'Automatic invoice and receipt dispatch upon order payment',
          'Hands-off customer data syncing to central databases'
        ],
        deliverables: [
          'Automated workflow pipeline setup',
          'Multi-app integrations (WhatsApp, Sheets, Gmail, CRM)',
          'Fail-safe error logging and monitoring alerts'
        ],
        whoNeedsThis: [
          'Growing teams overwhelmed by manual repetitive administrative tasks'
        ],
        faqs: [
          {
            question: 'Can you automatically send WhatsApp messages when a customer places an order?',
            answer: 'Yes! When an order is placed on your WooCommerce or custom store, an automated WhatsApp message with order details can be instantly sent to the customer and your dispatch team.'
          }
        ]
      },
      {
        id: 'data-analysis-ai',
        slug: 'business-intelligence',
        name: 'AI-Powered Data Analysis',
        shortDesc: 'Transform messy operational spreadsheets into actionable business insights with AI.',
        fullDesc: 'Ask natural language questions about your business sales, expenses, and inventory and get immediate answers, trends, and forecasts without needing a dedicated data analyst.',
        category: 'ai-automation',
        categoryTitle: 'AI & Automation',
        iconName: 'PieChart',
        highlights: [
          'Natural language querying of business performance',
          'Automated detection of top-selling products and profit margins',
          'Customer churn and repeat purchase pattern analysis',
          'Visual chart summaries delivered to your inbox'
        ],
        deliverables: [
          'Custom analysis models connected to your business metrics',
          'Automated weekly intelligence email digest',
          'Executive guidance on interpreting trends'
        ],
        whoNeedsThis: [
          'Founders and managing directors wanting rapid operational visibility'
        ],
        faqs: [
          {
            question: 'Is our sensitive company data kept confidential and secure?',
            answer: 'Yes. We configure private, secure API connections with enterprise data privacy standards so your proprietary figures are never exposed publicly or used for model training.'
          }
        ]
      },
      {
        id: 'productivity-automation',
        slug: 'business-automation',
        name: 'Productivity Automation',
        shortDesc: 'Streamline team scheduling, task assignments, and customer follow-up cadences.',
        fullDesc: 'Free your staff to focus on high-value business development by automating calendar bookings, status updates, client follow-ups, and internal team reminders.',
        category: 'ai-automation',
        categoryTitle: 'AI & Automation',
        iconName: 'CheckCircle2',
        highlights: [
          'Automated appointment and meeting booking links',
          'Scheduled follow-up email and WhatsApp reminders',
          'Task delegation triggers inside Slack or WhatsApp groups',
          'Elimination of back-and-forth scheduling friction'
        ],
        deliverables: [
          'Configured scheduling and CRM reminder workflows',
          'Team onboarding session',
          'Custom templates for recurring business notifications'
        ],
        whoNeedsThis: [
          'Consultancies, clinics, law offices, agencies, sales teams'
        ],
        faqs: [
          {
            question: 'How quickly can automation be set up for my business?',
            answer: 'Most standard workflow automations (like website-to-WhatsApp and Sheets integration) are deployed within 3 to 5 business days.'
          }
        ]
      }
    ]
  },
  {
    id: 'business-support',
    title: 'Business Support',
    tagline: 'Reliable Operations & Intelligence',
    description: 'Keep your business organized, compliant, and backed by reliable remote operations. We handle the critical back-office details so you can focus on leading and growing your company.',
    badge: 'OPERATIONS & BACK-OFFICE',
    icon: 'Layers',
    services: [
      {
        id: 'excel-solutions',
        slug: 'business-support',
        name: 'Excel Solutions & Advanced Modeling',
        shortDesc: 'Bespoke Excel and Google Sheets templates, financial models, and automated macros.',
        fullDesc: 'Transform cluttered spreadsheets into robust business tools. We develop custom Excel and Google Sheets systems with automated formulas, data validation, inventory tracking, and payroll calculations.',
        category: 'business-support',
        categoryTitle: 'Business Support',
        iconName: 'FileSpreadsheet',
        popular: true,
        highlights: [
          'Custom formula development (INDEX/MATCH, XLOOKUP, Dynamic Arrays)',
          'VBA macros and Google Apps Script automation',
          'Inventory, cost-of-goods, and cashflow modeling',
          'User-friendly layouts preventing accidental data corruption'
        ],
        deliverables: [
          'Tailored spreadsheet templates ready for immediate daily use',
          'Formula documentation and cell locking for data integrity',
          '1-on-1 walkthrough demonstration with your team'
        ],
        whoNeedsThis: [
          'Wholesalers, distributors, retailers, accounting teams, SME directors'
        ],
        faqs: [
          {
            question: 'Can you work on existing messy spreadsheets we already use?',
            answer: 'Yes! We frequently clean up, reorganize, and automate legacy spreadsheets that have become too slow or error-prone over time.'
          }
        ]
      },
      {
        id: 'data-management',
        slug: 'business-support',
        name: 'Data Management & Cleaning',
        shortDesc: 'Organize, sanitize, and migrate customer records, product catalogs, and databases.',
        fullDesc: 'Clean data is the foundation of smart business decisions. We remove duplicates, standardize phone and address formats, and migrate product catalogs accurately between systems.',
        category: 'business-support',
        categoryTitle: 'Business Support',
        iconName: 'Database',
        highlights: [
          'Duplicate detection and record deduplication',
          'Phone number formatting (e.g. standardizing for WhatsApp/SMS)',
          'CSV and database schema migration for e-commerce stores',
          'Strict confidentiality and non-disclosure compliance'
        ],
        deliverables: [
          'Sanitized master customer/product datasets',
          'Import-ready files for your CRM or store',
          'Summary discrepancy report'
        ],
        whoNeedsThis: [
          'Companies migrating to new platforms or preparing customer databases for marketing campaigns'
        ],
        faqs: [
          {
            question: 'How do you guarantee the security and privacy of our client data?',
            answer: 'We sign strict Non-Disclosure Agreements (NDAs) and process datasets in secure, encrypted environments with zero third-party disclosure.'
          }
        ]
      },
      {
        id: 'executive-dashboards',
        slug: 'business-intelligence',
        name: 'Executive Dashboards & BI',
        shortDesc: 'Live visual dashboards (Power BI / Looker Studio) displaying your key performance indicators.',
        fullDesc: 'Stop waiting for month-end reports. View your daily revenue, expenses, top sales channels, customer acquisition costs, and inventory levels in clean, interactive visual dashboards.',
        category: 'business-support',
        categoryTitle: 'Business Support',
        iconName: 'LineChart',
        popular: true,
        highlights: [
          'Looker Studio (Google) and Power BI interactive dashboards',
          'Real-time data feeds connected to your store, ads, and sheets',
          'Mobile-friendly executive snapshot view for on-the-go checks',
          'Clear charts showing trends, margins, and anomalies'
        ],
        deliverables: [
          'Live interactive cloud dashboard link with custom access permissions',
          'Automated weekly PDF snapshot dispatched to management',
          'Training on filtering and interacting with dashboard drill-downs'
        ],
        whoNeedsThis: [
          'Founders, Managing Directors, and Partners managing multi-department operations'
        ],
        faqs: [
          {
            question: 'Can the dashboard connect directly to Google Ads, Meta, and our website?',
            answer: 'Yes! We connect multiple live data connectors so your marketing spend, website traffic, and store revenues appear in one consolidated view.'
          }
        ]
      },
      {
        id: 'business-reporting',
        slug: 'business-intelligence',
        name: 'Business Reporting & Analysis',
        shortDesc: 'Periodic operational and financial reports that highlight what is working and what needs attention.',
        fullDesc: 'Get clear, jargon-free monthly business intelligence summaries. We analyze your performance figures and present actionable recommendations to improve profitability.',
        category: 'business-support',
        categoryTitle: 'Business Support',
        iconName: 'ClipboardList',
        highlights: [
          'Executive summary highlighting key milestones and risks',
          'Productivity and fulfillment cycle analysis',
          'Actionable recommendations prioritized by financial impact',
          'Comparative month-over-month and year-over-year benchmarking'
        ],
        deliverables: [
          'Monthly slide deck or executive PDF report',
          'Monthly review conference call to discuss findings'
        ],
        whoNeedsThis: [
          'Established SMEs looking for objective analysis and strategic direction'
        ],
        faqs: [
          {
            question: 'How does this differ from standard accounting reports?',
            answer: 'While accounting reports focus on past tax compliance, our business reporting focuses on strategic decision-making: customer acquisition, product margins, and growth levers.'
          }
        ]
      },
      {
        id: 'remote-accounting',
        slug: 'business-support',
        name: 'Remote Accounting Support',
        shortDesc: 'Bookkeeping, invoicing, and expense reconciliation without the overhead of full-time staff.',
        fullDesc: 'Maintain accurate financial records with dedicated remote bookkeeping support. We handle bank reconciliations, vendor invoice logging, and sales reporting on software like QuickBooks or Xero.',
        category: 'business-support',
        categoryTitle: 'Business Support',
        iconName: 'CreditCard',
        highlights: [
          'Daily and weekly transaction bookkeeping',
          'Accounts receivable and payable tracking',
          'Bank statement and payment gateway reconciliations',
          'Significantly lower cost than maintaining in-house department'
        ],
        deliverables: [
          'Updated ledger in QuickBooks / Xero / Excel',
          'Monthly profit & loss and cash balance summaries',
          'Expense categorization and audit trail'
        ],
        whoNeedsThis: [
          'Startups and small businesses seeking reliable books without hiring full-time internal accountants'
        ],
        faqs: [
          {
            question: 'Which accounting platforms do you support?',
            answer: 'We support QuickBooks Online, Xero, Wave, custom Excel/Sheets systems, and local bookkeeping workflows.'
          }
        ]
      },
      {
        id: 'virtual-support',
        slug: 'business-support',
        name: 'Virtual Business Support',
        shortDesc: 'Dedicated digital assistants to handle customer service, order dispatching, and admin tasks.',
        fullDesc: 'Scale your operational capacity with dependable remote administrative staff. Our team handles customer WhatsApp chats, courier tracking, email responses, and data entry under your direct supervision.',
        category: 'business-support',
        categoryTitle: 'Business Support',
        iconName: 'Headphones',
        highlights: [
          'Trained on professional business communication',
          'Daily activity logs and transparent task tracking',
          'Flexible part-time or full-time engagement models',
          'Immediate backup coverage preventing operational bottlenecks'
        ],
        deliverables: [
          'Dedicated remote assistant assigned to your operations',
          'Daily task completion log and summary updates',
          'Standard operating procedure (SOP) documentation'
        ],
        whoNeedsThis: [
          'E-commerce merchants needing order confirmation staff, busy professionals'
        ],
        faqs: [
          {
            question: 'Can the virtual assistant handle customer calls and WhatsApp chats?',
            answer: 'Yes, our assistants can manage incoming WhatsApp inquiries, confirm Cash on Delivery orders with customers, and coordinate dispatches with courier services.'
          }
        ]
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  for (const cat of SERVICES_DATA) {
    const found = cat.services.find(s => s.slug === slug || s.id === slug);
    if (found) return found;
  }
  return undefined;
}

export function getAllServices(): ServiceItem[] {
  return SERVICES_DATA.flatMap(c => c.services);
}
