export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  estimateOption: string;
  headline: string;
  summary: string;
  description: string;
  scopeItems: string[];
  image: string;
  imageAlt: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  priorities: string[];
}

export interface ServiceAreaItem {
  id: string;
  city: string;
  headline: string;
  intro: string;
  facilitiesServed: string[];
  schedulingNote: string;
  ctaLabel: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  roleOrContext: string;
  sourceLabel: string;
  sourceUrl: string;
}

export const COMPANY_INFO = {
  name: 'Capitol Cleaning',
  established: '1990',
  phoneDisplay: '(405) 748-3030',
  phoneHref: 'tel:+14057483030',
  email: 'admin@capitolcleaningokc.com',
  emailHref: 'mailto:admin@capitolcleaningokc.com',
  location: 'Oklahoma City, Oklahoma',
  originalWebsite: 'https://www.capitolcleaningokc.com/',
  googleReviewsSearch:
    'https://www.google.com/search?q=Capitol+Cleaning+Oklahoma+City+reviews',
};

export const HERO_IMAGE = {
  src: '/images/hero-commercial-lobby.webp',
  alt: 'Immaculate modern commercial office lobby with polished limestone floors and warm wood paneling maintained to professional standards',
};

export const ABOUT_IMAGE = {
  src: '/images/about-okc-architecture.webp',
  alt: 'Architectural view of a clean modern multi-story commercial building atrium and limestone staircase',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'commercial-cleaning',
    number: '01',
    title: 'Commercial Cleaning',
    estimateOption: 'Commercial Cleaning',
    headline: 'Customized cleaning programs for offices and commercial facilities.',
    summary:
      'Structured cleaning plans built around the layout, occupancy, and presentation standards of your business property.',
    description:
      'First impressions in a commercial building begin in the lobby, corridors, and shared workspaces. Capitol Cleaning develops facility-specific cleaning programs designed to keep professional environments consistently orderly for staff, tenants, and visitors.',
    scopeItems: [
      'Reception areas, lobbies, and shared building corridors',
      'Workstations, conference rooms, and executive suites',
      'Interior glass partitions, entry doors, and storefront windows',
      'Trash removal, recycling collection, and liner replacement',
      'Customized task checklists aligned to building operations',
    ],
    image: '/images/hero-commercial-lobby.webp',
    imageAlt: 'Polished commercial office lobby and stone reception desk kept spotless for clients and tenants',
  },
  {
    id: 'janitorial-services',
    number: '02',
    title: 'Janitorial Services',
    estimateOption: 'Janitorial Services',
    headline: 'Recurring cleaning schedules tailored to building operations.',
    summary:
      'Dependable ongoing janitorial care with consistent cleaning crews assigned to your facility on a daily, multi-day, or weekly schedule.',
    description:
      'Ongoing facility upkeep depends on familiarity and follow-through. By assigning consistent cleaning teams who know your building’s security procedures and high-traffic areas, Capitol Cleaning supports uninterrupted daily business operations.',
    scopeItems: [
      'Daily, several-times-weekly, or weekly recurring service',
      'Restroom cleaning, restocking, and fixture care',
      'Breakrooms, kitchenettes, and employee dining spaces',
      'Day porter options and scheduled after-hours cleaning',
      'Consistent team assignments with active quality oversight',
    ],
    image: '/images/service-office-workspace.webp',
    imageAlt: 'Clean executive conference room and glass-walled corporate workspace ready for daily operations',
  },
  {
    id: 'sanitizing-services',
    number: '03',
    title: 'Sanitizing Services',
    estimateOption: 'Sanitizing Services',
    headline: 'Professional sanitizing and disinfecting services for commercial environments.',
    summary:
      'Targeted high-touch surface sanitizing and commercial disinfecting designed for shared workplaces and customer-facing facilities.',
    description:
      'High-traffic commercial environments require focused attention on shared contact points. Our sanitizing protocols address door hardware, restroom fixtures, counters, and common-area surfaces using commercial-grade disinfecting procedures.',
    scopeItems: [
      'Door handles, push plates, railings, and elevator controls',
      'Shared reception counters, conference tables, and seating',
      'Restroom surfaces, sinks, partitions, and touchpoints',
      'Breakroom appliances, counters, and shared fixtures',
      'Scheduled disinfecting integrated into recurring janitorial plans',
    ],
    image: '/images/service-sanitizing-medical.webp',
    imageAlt: 'Sanitized modern medical office waiting room and stone reception desk with clean millwork',
  },
  {
    id: 'floor-care',
    number: '04',
    title: 'Floor Care',
    estimateOption: 'Floor Care',
    headline: 'Cleaning and maintenance services for commercial flooring.',
    summary:
      'Routine and restorative floor care—from daily vacuuming and mopping to machine scrubbing, buffing, stripping, and waxing.',
    description:
      'Commercial flooring endures constant foot traffic and shapes the appearance of the entire building. Capitol Cleaning maintains carpeted, vinyl, tile, and hard-surface commercial floors to protect surface longevity and maintain a clean finish.',
    scopeItems: [
      'Commercial carpet vacuuming and spot maintenance',
      'Hard-surface sweeping, damp mopping, and machine scrubbing',
      'High-speed buffing and finish restoration for high-traffic halls',
      'VCT and hard floor stripping and waxing programs',
      'Scheduled semi-annual or seasonal floor maintenance plans',
    ],
    image: '/images/service-floor-care.webp',
    imageAlt: 'Gleaming freshly buffed commercial corridor floor reflecting linear architectural lighting',
  },
  {
    id: 'office-facility-cleaning',
    number: '05',
    title: 'Office & Facility Cleaning',
    estimateOption: 'Commercial Cleaning',
    headline: 'Cleaning of restrooms, common areas, workspaces, and commercial spaces.',
    summary:
      'Detailed upkeep for restrooms, break areas, high dusting, glass entryways, and back-of-house commercial zones.',
    description:
      'Every corner of a commercial facility reflects the standards of the business inside it. Beyond routine surface cleaning, Capitol Cleaning addresses high dusting, interior and storefront glass, restroom sanitation, and post-project cleanup needs.',
    scopeItems: [
      'High dusting of vents, ledges, lighting fixtures, and partitions',
      'Thorough restroom sanitation and odor control',
      'Storefront and interior glass window cleaning',
      'Common lounges, hallways, stairwells, and utility zones',
      'Post-construction or tenant turn-over commercial cleanup',
    ],
    image: '/images/service-office-workspace.webp',
    imageAlt: 'Well-maintained corporate workspace, conference table, and spotless floor-to-ceiling glass partitions',
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'corporate-offices',
    title: 'Corporate Offices',
    subtitle: 'Single-tenant & multi-suite buildings',
    description:
      'Quiet, thorough after-hours or scheduled maintenance that keeps executive suites, open workfloors, conference rooms, and client lobbies crisp every morning.',
    priorities: [
      'Presentation-ready reception areas and boardrooms',
      'Dust-free desks, monitors, and glass partitions',
      'Consistent restroom and breakroom upkeep',
    ],
  },
  {
    id: 'medical-offices',
    title: 'Medical Offices',
    subtitle: 'Outpatient clinics & healthcare practices',
    description:
      'Careful attention to waiting rooms, patient corridors, restrooms, and high-touch surfaces to support a clean, welcoming environment for patients and clinical staff.',
    priorities: [
      'Detailed waiting room and reception surface care',
      'Focused sanitizing of shared touchpoints and fixtures',
      'Clean, slip-conscious hard floor maintenance',
    ],
  },
  {
    id: 'retail-environments',
    title: 'Retail Environments',
    subtitle: 'Showrooms, storefronts & commercial plazas',
    description:
      'Spotless customer walkways, gleaming storefront glass, and tidy fitting or service areas that reinforce customer confidence from the sidewalk in.',
    priorities: [
      'Streak-free entrance doors and display windows',
      'High-traffic floor care, buffing, and dust control',
      'Clean customer restrooms and back-office spaces',
    ],
  },
  {
    id: 'warehouses-industrial',
    title: 'Warehouses & Industrial Facilities',
    subtitle: 'Distribution centers & manufacturing offices',
    description:
      'Practical, durable janitorial programs addressing heavy-traffic employee locker rooms, breakrooms, administrative offices, and operational corridors.',
    priorities: [
      'Breakroom, restroom, and administrative office cleaning',
      'Dust and debris management in transitional hallways',
      'Heavy-duty scrubbing for resilient commercial flooring',
    ],
  },
  {
    id: 'educational-facilities',
    title: 'Educational Facilities',
    subtitle: 'Schools, academies & training centers',
    description:
      'Dependable daily or multi-weekly cleaning tailored to classrooms, hallways, restrooms, and administrative wings where durability and sanitation matter daily.',
    priorities: [
      'High-touch desk, door, and handrail sanitizing',
      'High-traffic corridor and classroom floor upkeep',
      'Restroom sanitation and supply replenishment',
    ],
  },
  {
    id: 'financial-community',
    title: 'Financial & Community Buildings',
    subtitle: 'Banks, churches & professional institutions',
    description:
      'Discreet, trustworthy cleaning teams screened for professional environments where building security, confidentiality, and care for finishes are essential.',
    priorities: [
      'Screened, consistent crews respecting secure areas',
      'Careful cleaning of wood, stone, and glass finishes',
      'Flexible scheduling around public hours and services',
    ],
  },
];

export const HERITAGE_MILESTONES = [
  {
    period: 'Established 1990',
    title: 'Rooted in Oklahoma City',
    detail:
      'Founded in 1990 as a locally operated commercial cleaning company dedicated to long-term relationships with Oklahoma businesses.',
  },
  {
    period: '30+ Years Experience',
    title: 'Continuity Across Decades',
    detail:
      'More than three decades of hands-on commercial janitorial experience across corporate offices, medical clinics, retail, and industrial spaces.',
  },
  {
    period: 'Consistent Crews',
    title: 'Accountability at Every Visit',
    detail:
      'Background-checked staff, consistent team assignments, quality-control oversight, and customized schedules built around each facility.',
  },
];

export const CREDIBILITY_POINTS = [
  {
    title: 'Locally Operated & Accountable',
    description:
      'Family-owned and locally operated in Oklahoma City since 1990, with direct communication and responsive local management.',
  },
  {
    title: 'Consistent Cleaning Teams',
    description:
      'We assign consistent, familiar crews to your property so your facility’s layout, priorities, and security routines are respected.',
  },
  {
    title: 'Customized Cleaning Schedules',
    description:
      'Every cleaning program is tailored to your square footage, operating hours, foot traffic, and specific surface care requirements.',
  },
  {
    title: 'Quality-Control Practices',
    description:
      'Structured supervision and clear task scopes help ensure reliable cleanliness week after week without constant follow-up from your team.',
  },
  {
    title: 'Screened & Insured Personnel',
    description:
      'As published by Capitol Cleaning, our staff undergoes screening and background checks, and operations are licensed, bonded, and insured.',
  },
  {
    title: 'References Available Upon Request',
    description:
      'Prospective commercial clients can request local business references directly during the estimate and walkthrough conversation.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Tell Us About Your Facility',
    description:
      'Share your property type, city or ZIP code, preferred schedule, and the commercial cleaning or floor care services your building requires.',
  },
  {
    number: '02',
    title: 'Build the Right Cleaning Plan',
    description:
      'Discuss building priorities, service frequency, access protocols, and specialty needs such as floor stripping, waxing, or targeted sanitizing.',
  },
  {
    number: '03',
    title: 'Maintain a Professional Environment',
    description:
      'Enjoy steady, detail-focused commercial care delivered by consistent crews backed by open communication and quality-control practices.',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'gonzales',
    quote:
      'If you are looking for a great commercial cleaning company, Shelley and her team are fantastic! I highly recommend her team to anyone needing a business or warehouse cleaning company.',
    author: 'Daniel Gonzales',
    roleOrContext: 'Owner, AlphaPRO Roofing & Construction',
    sourceLabel: 'Published Client Testimonial · capitolcleaningokc.com',
    sourceUrl: 'https://www.capitolcleaningokc.com/',
  },
  {
    id: 'office-client',
    quote:
      'This is the best place to have clean the office! They do a superb job dusting and on the floors and they have options to have the floors stripped and waxed and to do high dusting and to clean the big windows on the front of the store. The cleaners are courteous and do a great job!',
    author: 'Commercial Office & Storefront Client',
    roleOrContext: 'Published Customer Review',
    sourceLabel: 'Published Client Review · capitolcleaningokc.com',
    sourceUrl: 'https://www.capitolcleaningokc.com/',
  },
  {
    id: 'floor-care-client',
    quote:
      'Capitol Cleaning is the most service oriented cleaning place I have worked with! They are prompt in answering my questions and completing any requests I have and our business is so clean after they are done! I also get their floor care done twice a year and it is exceptional!',
    author: 'Recurring Commercial & Floor Care Client',
    roleOrContext: 'Published Customer Review',
    sourceLabel: 'Published Client Review · capitolcleaningokc.com',
    sourceUrl: 'https://www.capitolcleaningokc.com/',
  },
];

export const SERVICE_AREAS: ServiceAreaItem[] = [
  {
    id: 'oklahoma-city',
    city: 'Oklahoma City',
    headline: 'Commercial Cleaning in Oklahoma City, Oklahoma',
    intro:
      'Headquartered in the Oklahoma City metro since 1990, Capitol Cleaning partners with businesses across downtown, Midtown, Northwest OKC, and commercial corridors throughout the city.',
    facilitiesServed: [
      'Corporate offices and multi-tenant buildings',
      'Medical clinics and professional practices',
      'Retail storefronts, warehouses, and industrial offices',
    ],
    schedulingNote: 'Daily, multi-day, weekly, and custom after-hours schedules.',
    ctaLabel: 'Request an Oklahoma City Cleaning Estimate',
  },
  {
    id: 'edmond',
    city: 'Edmond',
    headline: 'Commercial Cleaning in Edmond, Oklahoma',
    intro:
      'Focused commercial cleaning and recurring janitorial maintenance for Edmond offices, medical suites, schools, and local commercial properties—tailored to your building’s exact operating schedule.',
    facilitiesServed: [
      'Professional offices and executive parks',
      'Dental, medical, and outpatient offices',
      'Retail centers, educational facilities, and churches',
    ],
    schedulingNote: 'Custom cleaning programs including routine floor care and high-touch sanitizing.',
    ctaLabel: 'Request an Edmond Cleaning Estimate',
  },
  {
    id: 'norman',
    city: 'Norman',
    headline: 'Commercial Cleaning in Norman, Oklahoma',
    intro:
      'Dependable commercial cleaning and janitorial programs supporting Norman businesses, medical offices, educational institutions, and commercial workspaces with consistent local crews.',
    facilitiesServed: [
      'Office buildings and institutional facilities',
      'Medical and health-related professional offices',
      'Retail spaces and community properties',
    ],
    schedulingNote: 'Flexible recurring frequencies aligned with business hours and seasonal floor upkeep.',
    ctaLabel: 'Request a Norman Cleaning Estimate',
  },
  {
    id: 'moore',
    city: 'Moore',
    headline: 'Commercial Cleaning in Moore, Oklahoma',
    intro:
      'Reliable janitorial services, office cleaning, and commercial floor care for growing businesses and commercial facilities throughout Moore and the south metro corridor.',
    facilitiesServed: [
      'Commercial offices and service headquarters',
      'Retail storefronts and commercial showrooms',
      'Medical offices and light industrial workspaces',
    ],
    schedulingNote: 'Tailored scopes covering restrooms, breakrooms, glass, and floor maintenance.',
    ctaLabel: 'Request a Moore Cleaning Estimate',
  },
  {
    id: 'yukon',
    city: 'Yukon',
    headline: 'Commercial Cleaning in Yukon, Oklahoma',
    intro:
      'Consistent commercial cleaning and building maintenance for Yukon business owners, office administrators, and facility managers seeking long-term service reliability.',
    facilitiesServed: [
      'Professional and administrative offices',
      'Medical clinics and customer-facing storefronts',
      'Warehouses and commercial operations centers',
    ],
    schedulingNote: 'Customized checklists and screened teams assigned for ongoing accountability.',
    ctaLabel: 'Request a Yukon Cleaning Estimate',
  },
  {
    id: 'midwest-city',
    city: 'Midwest City',
    headline: 'Commercial Cleaning in Midwest City, Oklahoma',
    intro:
      'Commercial janitorial, sanitizing, and hard-floor maintenance programs serving offices, retail locations, and commercial facilities across Midwest City.',
    facilitiesServed: [
      'Corporate and administrative offices',
      'Medical and professional service offices',
      'Retail facilities and industrial support offices',
    ],
    schedulingNote: 'Recurring daily or weekly janitorial care plus periodic floor stripping and waxing.',
    ctaLabel: 'Request a Midwest City Cleaning Estimate',
  },
];

export const ADDITIONAL_CONFIRMED_COMMUNITIES = [
  'Mustang',
  'Del City',
  'Nichols Hills',
  'Bethany',
  'Warr Acres',
];
