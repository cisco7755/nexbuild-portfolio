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
    duration: '14 weeks',
    deliverables: ['React Native app (iOS + Android)', 'BLE device integration layer', 'Real-time alert engine', 'Node.js REST API', 'Charge nurse web dashboard'],
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
    duration: '16 weeks',
    deliverables: ['Kafka + ClickHouse streaming pipeline', 'React dashboard with GraphQL subscriptions', 'Custom 40-dimension query engine', 'Real-time fraud signal alerts', 'Transaction health reporting'],
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
    duration: '11 weeks',
    deliverables: ['FastAPI backend with Maps integration', 'Live dispatch dashboard (React)', 'ML predictive maintenance model', 'Driver management portal', 'Route optimization engine'],
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
    duration: '20 weeks',
    deliverables: ['Multi-tenant Next.js SaaS platform', 'Candidate screening engine', 'Calendar-integrated scheduling', 'Side-by-side comparison view', 'Stripe subscription billing'],
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
    duration: '24 weeks',
    deliverables: ['HIPAA-compliant EMR (Django + PostgreSQL)', 'Legacy data migration pipeline (3 systems)', 'Role-based access control', 'Prescription and lab results module', 'Billing and revenue cycle management'],
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
    duration: '18 weeks',
    deliverables: ['FastAPI + ClickHouse ingestion pipeline', 'Real-time P&L and risk dashboard', 'Backtest engine (40x speed)', 'Live market data feed integration', 'Portfolio attribution reporting'],
  },
  {
    id: 'whistler-mobile',
    title: 'Whistler — Social Community App',
    category: 'Mobile App',
    industry: 'Social',
    service: 'Mobile Apps',
    shortDescription:
      'Cross-platform social community app for iOS and Android, enabling users to create communities, share moments, attend events, and message in real time.',
    overview:
      'Whistler is a full-featured social community platform built as a React Native application for iOS and Android. The app allows users to discover and join communities by interest, share moments, co-create events, connect with people, and communicate through real-time direct and group messaging — all in a single, cohesive experience.',
    problem:
      "Existing social platforms fragment community interaction across multiple apps — one for messaging, one for event planning, one for content sharing. Users in niche communities struggled to find purpose-built spaces that combined discovery, communication, and event coordination without noise from irrelevant content and algorithmic feeds.",
    solution:
      "We built a React Native application from the ground up with a structured community model at its core. Each community has its own discussion board, member directory, event calendar, and moments feed. Real-time messaging is powered by Firebase, with support for direct messages, group chats, emoji reactions, and media sharing. Push notifications via Firebase Cloud Messaging keep members engaged across iOS and Android. Google and Apple sign-in reduce onboarding friction. An interest-selection flow on first launch means the feed is immediately relevant — no cold-start problem.",
    outcome:
      "Whistler launched on both the App Store and Google Play with a full suite of social features typically split across multiple apps. The interest-driven onboarding and community-first architecture produced a feed relevance rate that drove measurably higher session depth compared to category benchmarks. The app is live and actively growing its community base.",
    metrics: [
      { label: 'Platforms shipped', value: 'iOS + Android' },
      { label: 'Core feature modules', value: '12+' },
      { label: 'Auth providers', value: 'Google · Apple · Email' },
    ],
    tech: ['React Native', 'TypeScript', 'Firebase', 'Node.js', 'PostgreSQL', 'Redux'],
    color: 'from-sky-500 to-indigo-600',
    featured: true,
    duration: '28 weeks',
    deliverables: ['React Native app (iOS + Android)', 'Firebase real-time messaging', 'Community and events system', 'Moments content feed', 'Google & Apple SSO', 'Push notification system'],
    liveUrl: import.meta.env.VITE_WHISTLER_PLAYSTORE_URL,
    liveLabel: 'View on Play Store',
  },
  {
    id: 'whistler-admin',
    title: 'Whistler — Admin Dashboard',
    category: 'Web App',
    industry: 'Social',
    service: 'Web Development',
    shortDescription:
      'Operations and moderation dashboard for the Whistler platform — giving the team full visibility into communities, users, moments, and activity in real time.',
    overview:
      'The Whistler Admin Dashboard is a React/TypeScript web application that serves as the internal control plane for the entire Whistler social platform. It gives the operations and trust-and-safety team real-time visibility into platform activity and the tools to act on it — community management, user moderation, moment review, and activity analytics — all from a single, well-structured interface.',
    problem:
      "As Whistler grew, manually managing community health, reviewing reported content, and keeping track of user behaviour across thousands of interactions became unworkable. The team needed structured tooling to stay ahead of moderation queues, identify bad actors quickly, and have reliable data on how the platform was actually being used.",
    solution:
      "We built a multi-section admin dashboard using React, TypeScript, TanStack Query, and TanStack Table. The Dashboard gives an at-a-glance view of platform-wide KPIs — daily active users, new community registrations, moment submissions, and flagged content counts. The Communities module lets admins browse, inspect, and act on any community, including editing metadata and removing violating content. The Users module supports search, filtering, and account-level actions including suspension and role assignment. The Moments and Moderation sections provide queued review workflows so the team processes reports in priority order rather than hunting for them. Activity logs maintain a tamper-evident audit trail of every admin action for accountability.",
    outcome:
      "Moderation response time dropped from hours to under 15 minutes for high-priority reports. The ops team now manages the platform's full user and community lifecycle through a single tool instead of direct database queries and ad-hoc scripts. Onboarding new trust-and-safety staff went from days of training to a few hours.",
    metrics: [
      { label: 'Moderation response time', value: '<15 min' },
      { label: 'Admin modules', value: '7 core areas' },
      { label: 'Audit trail coverage', value: '100%' },
    ],
    tech: ['React', 'TypeScript', 'TanStack Query', 'TanStack Table', 'Tailwind CSS', 'Vite'],
    color: 'from-violet-500 to-indigo-600',
    featured: false,
    duration: '10 weeks',
    deliverables: ['React/TypeScript admin SPA', 'Community moderation queue', 'User management and suspension tools', 'Moments review workflow', 'Activity audit log'],
    liveUrl: import.meta.env.VITE_WHISTLER_ADMIN_URL,
    liveLabel: 'View Admin Demo',
  },
  {
    id: 'beta-buy',
    title: 'BetaBuy — Multi-Vendor Marketplace',
    category: 'Web App',
    industry: 'E-commerce',
    service: 'Web Development',
    shortDescription:
      'Full-stack multi-vendor marketplace with buyer, seller, and admin portals — supporting product listings, flash sales, checkout, KYC, payouts, and dispute resolution.',
    overview:
      'BetaBuy is a production-ready multi-vendor e-commerce marketplace built with React, TypeScript, and a robust REST API backend. The platform supports three distinct user roles — buyers, sellers, and administrators — each with a dedicated portal and workflow. Buyers shop across categories, track deals and flash sales, manage wishlists, and set price alerts. Sellers onboard through a KYC process, manage product catalogues, fulfill orders, and withdraw earnings to their wallet. Admins oversee the entire marketplace: products, users, sellers, orders, payouts, and dispute resolution.',
    problem:
      "Building a marketplace that serves three fundamentally different user types — each with distinct needs, permissions, and workflows — without the product fragmenting into an unusable mess is a hard design and engineering problem. Most off-the-shelf solutions force compromises that hurt the seller experience (overly simplified product management) or the admin experience (no real dispute tools). The client needed a platform they owned end-to-end, with no vendor lock-in.",
    solution:
      "We built BetaBuy as a single React/TypeScript application with role-based routing and conditional UI rendering — one codebase, three coherent experiences. The buyer portal includes a homepage with featured products and flash sales, category browsing, full-text search, product detail pages with review surfaces, a cart and multi-step checkout flow, order tracking, wishlists, price alerts, and a referral system. The seller portal provides a guided KYC onboarding flow, a product management interface with bulk actions, an orders fulfillment view, payout history, and a wallet for managing earnings. The admin portal consolidates user management, seller verification, product moderation, order oversight, dispute adjudication, and payout approvals in a single dashboard with data tables and audit trails. Zustand handles shared state, TanStack Query manages server state with caching, and Zod enforces schema validation at every form boundary.",
    outcome:
      "BetaBuy shipped with all three portals fully functional in a single deployment. The seller KYC flow reduced onboarding time from manual email back-and-forth to a self-service process completed in under 10 minutes. The dispute resolution module gives admins a structured workflow that replaced an untracked email chain. The platform is built and deployed on Vercel with environment-driven configuration for zero-downtime updates.",
    metrics: [
      { label: 'User roles supported', value: '3 portals' },
      { label: 'Seller KYC onboarding', value: '<10 min' },
      { label: 'Feature modules', value: '20+ pages' },
    ],
    tech: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'React Hook Form', 'Zod', 'Tailwind CSS', 'Vite'],
    color: 'from-amber-500 to-orange-600',
    featured: true,
    duration: '22 weeks',
    deliverables: ['Buyer shopping portal', 'Seller dashboard with KYC onboarding', 'Admin control panel', 'Flash sales and deals engine', 'Dispute resolution workflow', 'Seller wallet and payout system'],
    liveUrl: import.meta.env.VITE_BETABUY_URL,
    liveLabel: 'View Live Site',
  },
  {
    id: 'clientshot',
    title: 'Clientshot — Customer Feedback Platform',
    category: 'Web App',
    industry: 'Health',
    service: 'Web Development',
    shortDescription:
      'Enterprise-grade customer feedback and business intelligence platform for healthcare organisations, enabling real-time survey collection, analytics, and multi-channel communication across web, email, SMS, and WhatsApp.',
    overview:
      'Clientshot is a production-ready customer feedback and business intelligence platform built for healthcare providers, hospitals, and service organisations. The Angular 18 web application gives teams the tools to design custom feedback forms, deploy them across multiple channels simultaneously, collect responses in real time, and turn raw feedback into actionable analytics — all from a single, role-aware dashboard. The platform is live at clientshot.com and serves enterprise clients across the healthcare sector.',
    problem:
      "Healthcare organisations collect patient and client feedback through disconnected channels — paper forms, email surveys, SMS, and WhatsApp — with no unified view of responses and no way to act on trends as they emerge. Feedback data sits in silos, reporting is manual, and the gap between what patients experience and what management sees can stretch to weeks. Service quality issues that should surface immediately instead compound silently.",
    solution:
      "We built a comprehensive feedback platform on Angular 18 with a microservices backend (Java/Spring Boot for core logic, NestJS for real-time messaging, PostgreSQL for storage, Redis for caching) hosted on AWS. The form builder supports branching logic, multiple question types (scale, preference, multi-point, open text), and reusable form templates. Completed forms are deployed to web, email (via Mailgun), SMS, and WhatsApp Business API in one action. Responses stream into dashboards in real time using Socket.IO. The analytics layer surfaces ratings by department, service point, and branch — with drill-down into individual responses and commendation or complaint tagging. Role-based access ensures department managers see only their data, while organisation administrators have full cross-branch visibility. Billing is integrated with Paystack for subscription management.",
    outcome:
      "Clientshot is live at clientshot.com and actively used by healthcare clients managing multi-branch operations. Organisations report closing the feedback loop with patients in near real time rather than reviewing weekly batch reports. The multi-channel deployment model increased survey completion rates by eliminating the friction of channel switching. The platform's modular architecture allowed the team to ship new question types and channel integrations without disrupting existing client workflows.",
    metrics: [
      { label: 'Feedback channels supported', value: '4 (Web · Email · SMS · WhatsApp)' },
      { label: 'Architecture', value: 'Microservices on AWS' },
      { label: 'Status', value: 'Live — clientshot.com' },
    ],
    tech: ['Angular 18', 'TypeScript', 'Java', 'Spring Boot', 'NestJS', 'PostgreSQL', 'Redis', 'Socket.IO', 'AWS', 'Paystack'],
    color: 'from-teal-500 to-emerald-600',
    featured: true,
    duration: '32 weeks',
    deliverables: ['Angular 18 SPA with drag-and-drop form builder', 'Multi-channel deployment (Web, Email, SMS, WhatsApp)', 'Real-time analytics dashboard', 'Microservices backend (Java + NestJS)', 'Role-based access control', 'Paystack billing integration'],
    liveUrl: import.meta.env.VITE_CLIENTSHOT_URL,
    liveLabel: 'View Live Site',
  },
  {
    id: 'clientshot-admin',
    title: 'Clientshot — Operations Admin',
    category: 'Web App',
    industry: 'Health',
    service: 'Web Development',
    shortDescription:
      'Internal operations dashboard for the Clientshot platform — giving the SeamHealth team full control over company accounts, facilities, branches, and platform-wide activity.',
    overview:
      'The Clientshot Admin Panel is an Angular 18 web application that serves as the internal control plane for the entire Clientshot platform. It gives the SeamHealth operations team centralised visibility into every company account, facility, and branch onboarded to the platform — with the tooling to manage account lifecycles, review activity logs, and monitor platform-wide health from a single, secure interface.',
    problem:
      "As the Clientshot platform grew and onboarded multiple enterprise clients, managing accounts, verifying facilities, and resolving issues through direct database access and ad-hoc scripts became untenable. The operations team needed a purpose-built interface that mapped to the actual lifecycle of a Clientshot account — from initial onboarding and facility setup through to ongoing monitoring and support — without requiring engineering involvement for routine operations tasks.",
    solution:
      "We built a dedicated admin Angular application with a clean separation of concerns across four core areas. The Overview module gives an at-a-glance summary of platform activity — active accounts, recently onboarded facilities, and flagged items requiring action. The Accounts module provides searchable, filterable account lists with drill-down into individual account detail, subscription status, and branch structure. The Facilities module lets admins view, verify, and manage healthcare facilities linked to each account. The Branch View allows the team to inspect individual branches — their configured service points, departments, and form deployments. A full Activity Log maintains a timestamped audit trail of every admin action taken within the panel, ensuring accountability and supporting compliance requirements.",
    outcome:
      "The operations team went from relying on engineering to run database queries for account changes to self-serving 95% of account management tasks through the admin panel. Onboarding a new enterprise client — from account creation to facility configuration — was reduced from a multi-day coordination process to a same-day operation. The audit log eliminated ambiguity in support escalations by providing a clear chain of actions for every account.",
    metrics: [
      { label: 'Account tasks self-served', value: '95%' },
      { label: 'Client onboarding time', value: 'Same-day' },
      { label: 'Admin modules', value: '4 core areas' },
    ],
    tech: ['Angular 18', 'TypeScript', 'RxJS', 'Angular CDK', 'Chart.js', 'SCSS'],
    color: 'from-indigo-500 to-blue-600',
    featured: false,
    duration: '8 weeks',
    deliverables: ['Angular 18 admin SPA', 'Account and facility management', 'Branch configuration tools', 'Activity audit log', 'Client onboarding workflow'],
    liveUrl: import.meta.env.VITE_CLIENTSHOT_ADMIN_URL,
    liveLabel: 'View Admin Demo',
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

export const testimonials = [
  {
    quote:
      "Nexbuild delivered exactly what they scoped — on time, under budget. The codebase they handed over was clean enough that our in-house team could maintain it from day one.",
    name: 'Dr. Amara Osei',
    title: 'CTO, Regional Hospital Network',
    industry: 'Health',
    initials: 'AO',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    quote:
      "We'd worked with two agencies before Nexbuild. Both overpromised and underdelivered. These guys flagged a scope problem in week two that would have cost us three months if it had surfaced at launch.",
    name: 'Tunde Adeyemi',
    title: 'Founder, ClearPay',
    industry: 'Fintech',
    initials: 'TA',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    quote:
      "The dashboard went from concept to live in 11 weeks. Our ops team was tracking 200+ vehicles the next morning. I've never seen a handover that smooth.",
    name: 'Fatima Al-Hassan',
    title: 'Head of Operations, FleetOps',
    industry: 'Logistics',
    initials: 'FA',
    color: 'from-orange-500 to-amber-500',
  },
]
