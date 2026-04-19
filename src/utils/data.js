export const projects = [
  {
    id: 'healthtrack-pro',
    title: 'HealthTrack Pro',
    category: 'Mobile App',
    industry: 'Health',
    service: 'Mobile Apps',
    shortDescription:
      'Patient monitoring platform that cut hospital readmission rates by 34% through real-time vitals tracking and automated clinical alerts.',
    overview:
      'HealthTrack Pro is a mobile-first patient monitoring system built for a regional hospital network managing 12,000+ patients across 5 facilities. The platform gives clinicians real-time visibility into patient vitals and triggers automated alerts when readings fall outside safe thresholds.',
    problem:
      "The hospital network relied on manual vital checks every 4–6 hours. Deteriorating patients were frequently missed between rounds, leading to preventable readmissions and escalating care costs. Clinical staff spent 40% of their time on documentation rather than direct patient care.",
    solution:
      "We built a React Native mobile app backed by a Node.js API that connects to bedside IoT monitors via Bluetooth Low Energy. A rule-based alert engine processes readings in real time and routes critical notifications to the right clinician within seconds. A companion web dashboard gives charge nurses a consolidated view of all active patients across every ward.",
    outcome:
      "Within 6 months of deployment, the hospital network saw a 34% reduction in 30-day readmission rates. Clinicians reclaimed 22 hours per week previously spent on manual documentation. The alert system now catches patient deterioration an average of 47 minutes earlier than manual rounds.",
    metrics: [
      { label: 'Reduction in readmissions', value: '34%' },
      { label: 'Patients monitored daily', value: '12,000+' },
      { label: 'Earlier deterioration detection', value: '47 min' },
    ],
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'BLE', 'Redis'],
    color: 'from-emerald-500 to-teal-600',
    featured: true,
  },
  {
    id: 'clearpay-dashboard',
    title: 'ClearPay Analytics',
    category: 'Web App',
    industry: 'Fintech',
    service: 'Web Development',
    shortDescription:
      'Payment intelligence platform processing $2.4B in annual transaction volume with sub-50ms query response times.',
    overview:
      'ClearPay Analytics is a real-time payment intelligence platform built for a Series B fintech processing over $2.4 billion in annual transactions. The platform gives finance and operations teams instant visibility into transaction health, fraud signals, and revenue trends.',
    problem:
      "The client's existing reporting ran on nightly batch jobs. By the time analysts spotted anomalies — chargebacks spiking, a merchant going offline, fraud patterns emerging — the financial damage was already done. Decision makers needed real-time data, not yesterday's numbers.",
    solution:
      "We architected a streaming data pipeline using Kafka and ClickHouse that indexes transactions in under 100ms. The React frontend uses GraphQL subscriptions for live updates without polling. A custom query engine lets analysts filter across 40+ dimensions without writing SQL.",
    outcome:
      "The platform now processes 4.2 million transactions per day with a p99 query latency of 48ms. The fraud team identified a $340K chargeback pattern within 8 minutes of it emerging — something that would have taken 18 hours to surface on the old system.",
    metrics: [
      { label: 'Annual transaction volume', value: '$2.4B' },
      { label: 'Query latency (p99)', value: '48ms' },
      { label: 'Fraud detection time', value: '8 min' },
    ],
    tech: ['React', 'GraphQL', 'Go', 'Kafka', 'ClickHouse', 'Redis'],
    color: 'from-blue-500 to-indigo-600',
    featured: true,
  },
  {
    id: 'fleetops-manager',
    title: 'FleetOps Manager',
    category: 'Web App',
    industry: 'Logistics',
    service: 'Web Development',
    shortDescription:
      'Fleet management system that reduced fuel costs by 18% and raised on-time delivery rates to 96.4% across 800 vehicles.',
    overview:
      'FleetOps Manager is an end-to-end fleet management platform for a national logistics operator running 800+ vehicles across 12 distribution hubs. The system handles route optimization, driver management, maintenance scheduling, and live vehicle tracking.',
    problem:
      "Dispatchers managed 800 vehicles through spreadsheets, phone calls, and a legacy desktop app from 2009. Route planning was manual and inefficient. Maintenance was entirely reactive — vehicles broke down in the field. Fuel costs ran 23% above industry benchmark.",
    solution:
      "We built a FastAPI backend integrated with Google Maps Platform for real-time routing and traffic data. The React frontend gives dispatchers a live map of every vehicle with ETA accuracy within 4 minutes. An ML-based maintenance model flags vehicles 2 weeks before likely failure based on mileage, load, and historical patterns.",
    outcome:
      "Fuel efficiency improved 18% through better routing. On-time delivery climbed from 81% to 96.4%. Unplanned vehicle downtime dropped 61% due to predictive maintenance. The dispatch team now handles 40% more volume with the same headcount.",
    metrics: [
      { label: 'Reduction in fuel costs', value: '18%' },
      { label: 'On-time delivery rate', value: '96.4%' },
      { label: 'Reduction in downtime', value: '61%' },
    ],
    tech: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Google Maps API', 'Redis'],
    color: 'from-orange-500 to-amber-600',
    featured: true,
  },
  {
    id: 'talenthive',
    title: 'TalentHive Platform',
    category: 'Web App',
    industry: 'SaaS',
    service: 'Web Development',
    shortDescription:
      'Recruitment automation platform that reduced average time-to-hire from 34 days to 11 days for enterprise teams.',
    overview:
      'TalentHive is a B2B SaaS recruitment platform that automates the screening, scheduling, and evaluation pipeline for enterprise hiring teams. The platform handles 50,000+ applicants per month across 200+ client companies.',
    problem:
      "Recruiting teams at mid-market companies were drowning in applicants but still missing good candidates. Manual screening was inconsistent. Interview scheduling took an average of 8 back-and-forth emails. Hiring managers received disorganized candidate packets that were impossible to compare at scale.",
    solution:
      "We built a multi-tenant Next.js SaaS platform with a structured screening engine that scores candidates against role-specific rubrics. An automated scheduling system integrates with Google Calendar and Outlook to book interviews without human coordination. A side-by-side comparison view lets hiring managers evaluate up to 4 candidates simultaneously.",
    outcome:
      "Average time-to-hire dropped from 34 days to 11 days. Candidate drop-off during scheduling fell 67%. Clients report a 2.3x improvement in offer acceptance rates, attributed to a faster, more professional candidate experience.",
    metrics: [
      { label: 'Time-to-hire reduction', value: '34→11 days' },
      { label: 'Applicants processed monthly', value: '50,000+' },
      { label: 'Scheduling drop-off reduction', value: '67%' },
    ],
    tech: ['Next.js', 'Node.js', 'MongoDB', 'AWS', 'Stripe', 'SendGrid'],
    color: 'from-violet-500 to-purple-600',
    featured: false,
  },
  {
    id: 'medisync-emr',
    title: 'MediSync EMR',
    category: 'Web App',
    industry: 'Health',
    service: 'Backend Systems',
    shortDescription:
      'HIPAA-compliant EMR system that unified 180,000 patient records and recovered $380K in annual billing revenue.',
    overview:
      'MediSync EMR is a HIPAA-compliant electronic medical records platform built for an independent physician practice network with 340 providers across 28 clinics. The system centralizes patient records, billing, prescriptions, and lab results in a single interface.',
    problem:
      "The practice network ran three separate legacy EMR systems after acquiring two smaller practices. Patient records were siloed. Providers couldn't see a patient's full history. Billing errors from data inconsistency were costing $400K+ annually.",
    solution:
      "We built a unified EMR platform with a Django/PostgreSQL backend, designed from the ground up for HIPAA compliance. A custom data migration pipeline unified 180,000 patient records from three legacy systems with 99.7% accuracy. Role-based access control ensures every provider sees exactly what their role permits.",
    outcome:
      "The practice network eliminated billing errors caused by data inconsistency, recovering $380K in annual revenue. Provider satisfaction improved significantly — time spent locating patient information dropped from 8 minutes to under 90 seconds per encounter.",
    metrics: [
      { label: 'Patient records unified', value: '180,000' },
      { label: 'Annual revenue recovered', value: '$380K' },
      { label: 'Record lookup time', value: '<90 sec' },
    ],
    tech: ['React', 'Django', 'PostgreSQL', 'Azure', 'Redis'],
    color: 'from-rose-500 to-pink-600',
    featured: false,
  },
  {
    id: 'tradeflow-analytics',
    title: 'TradeFlow Analytics',
    category: 'Web App',
    industry: 'Fintech',
    service: 'Backend Systems',
    shortDescription:
      'Algorithmic trading analytics platform processing 800,000 market events per second, cutting reporting time from 6 hours to 10 minutes.',
    overview:
      "TradeFlow Analytics is a high-performance market data and trade analytics platform built for a mid-size hedge fund managing $1.2B in assets. The system ingests live market feeds, runs backtests, and provides real-time P&L attribution across 15,000+ positions.",
    problem:
      "The fund's analytics stack was built on Excel and Python scripts that took 6+ hours to run daily reports. The team couldn't run intraday risk checks. When market conditions shifted, they were operating on yesterday's numbers.",
    solution:
      "We built a high-throughput ingestion pipeline using FastAPI and ClickHouse that processes 800,000 market events per second. A React dashboard renders live P&L and risk metrics in real time. The backtest engine runs historical simulations 40x faster than the previous Python scripts.",
    outcome:
      "The fund now runs continuous intraday risk checks that previously took overnight. Backtesting cycles dropped from 6 hours to under 10 minutes. The quant team attributes 2 alpha-generating strategies in Q1 to patterns surfaced by the new analytics engine.",
    metrics: [
      { label: 'Market events per second', value: '800,000' },
      { label: 'Backtest speed improvement', value: '40x' },
      { label: 'Report generation time', value: '6hr → 10min' },
    ],
    tech: ['React', 'FastAPI', 'ClickHouse', 'Kafka', 'Python', 'Redis'],
    color: 'from-cyan-500 to-blue-600',
    featured: false,
  },
]

export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: 'Globe',
    tagline: 'Production-grade web applications built to handle scale from day one.',
    description:
      "We build web applications that ship on time and hold up under real-world load. From marketing sites that convert to complex internal tools that your team actually uses — built with React, Next.js, and backend architectures that don't buckle under pressure.",
    deliverables: [
      'Custom React / Next.js applications',
      'Internal tools and admin dashboards',
      'E-commerce and payment integrations',
      'CMS integrations and content platforms',
      'Performance audits and optimization',
    ],
    impact:
      'Fast, reliable web software reduces support burden, improves user retention, and removes the bottlenecks that slow your team down.',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Apps',
    icon: 'Smartphone',
    tagline: 'Cross-platform apps that work exactly the way users expect them to.',
    description:
      "We build mobile applications for iOS and Android using React Native. Whether you need a consumer app, a field tool for your operations team, or a patient-facing health app — we build mobile software that earns five stars and keeps users coming back.",
    deliverables: [
      'Cross-platform React Native apps (iOS + Android)',
      'Offline-first architecture',
      'Push notifications and real-time sync',
      'BLE / IoT device integrations',
      'App Store submission and maintenance',
    ],
    impact:
      "A great mobile app extends your product into every pocket. Poor mobile UX drives users to competitors. There's no middle ground.",
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: 'Layers',
    tagline: 'Interfaces that reduce friction and guide users to the outcome you both want.',
    description:
      "We design interfaces grounded in how real users think and behave — not just visually polished, but structurally sound. Every design decision is tied to a user goal and a business outcome.",
    deliverables: [
      'User research and journey mapping',
      'Wireframes and information architecture',
      'High-fidelity UI design (Figma)',
      'Interactive prototypes',
      'Design systems and component libraries',
    ],
    impact:
      "Good UX reduces support tickets, increases conversion, and means your users accomplish their goals without calling you.",
  },
  {
    id: 'backend-systems',
    title: 'Backend Systems',
    icon: 'Server',
    tagline: 'Infrastructure that handles scale, reduces downtime, and supports long-term growth.',
    description:
      "We build the systems that power your product: APIs, data pipelines, authentication, integrations, and the infrastructure that keeps everything running. Built to scale, monitored in production, and documented so your team can own it.",
    deliverables: [
      'REST and GraphQL API development',
      'Database architecture and optimization',
      'Third-party API integrations',
      'Authentication and authorization systems',
      'Cloud infrastructure (AWS, GCP, Azure)',
    ],
    impact:
      "Unreliable backend systems cost you revenue, reputation, and engineering hours. A well-built backend is invisible — and that's the point.",
  },
]

export const industries = [
  {
    id: 'health',
    title: 'Health & MedTech',
    icon: 'Heart',
    description:
      'HIPAA-compliant platforms for hospitals, clinics, and health startups. We understand the regulatory landscape and the clinical workflows that software has to fit into.',
    examples: ['EMR systems', 'Patient monitoring apps', 'Telehealth platforms', 'Clinical decision support'],
  },
  {
    id: 'fintech',
    title: 'Fintech & Finance',
    icon: 'TrendingUp',
    description:
      'Financial infrastructure built for security, speed, and compliance. From payment processing systems to real-time trading analytics.',
    examples: ['Payment dashboards', 'Trading platforms', 'Fraud detection', 'Regulatory reporting'],
  },
  {
    id: 'logistics',
    title: 'Logistics & Operations',
    icon: 'Truck',
    description:
      'Operational software that reduces waste, improves routing, and gives your team real-time visibility across the supply chain.',
    examples: ['Fleet management', 'Route optimization', 'Warehouse systems', 'Dispatch tools'],
  },
  {
    id: 'saas',
    title: 'SaaS Products',
    icon: 'Cloud',
    description:
      'End-to-end B2B SaaS development — from MVP to multi-tenant platform. We help founders build products that ship fast and retain customers.',
    examples: ['Multi-tenant platforms', 'Subscription billing', 'API products', 'Developer tools'],
  },
]

export const stats = [
  { value: '48+', label: 'Projects Delivered' },
  { value: '6+', label: 'Years of Experience' },
  { value: '4', label: 'Industries Served' },
  { value: '98%', label: 'Client Retention' },
]

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business context, not just your feature list. What problem are you solving? Who uses this? What does success look like in 6 months?',
  },
  {
    number: '02',
    title: 'Planning',
    description:
      'Architecture decisions made early save months later. We map the system, define scope, and align on a realistic timeline before a line of code is written.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      "Interfaces designed around actual user behavior. We prototype and validate before committing to implementation, so you're not guessing at launch.",
  },
  {
    number: '04',
    title: 'Development',
    description:
      "Clean, documented code shipped in regular cycles. You have full visibility throughout — not a black box that opens at the deadline.",
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'Deployment is not the finish line. We handle rollout, monitor for issues, and make sure your team is set up to operate and iterate confidently.',
  },
]
