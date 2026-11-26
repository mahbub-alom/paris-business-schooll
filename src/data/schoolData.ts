export const MEDIA_ASSETS = {
  heroCampus: '/src/assets/images/hero_valmont_campus_1795715322356.jpg',
  belvedereInterior: '/src/assets/images/campus_belvedere_interior_1795715323746.jpg',
  seminarLecture: '/src/assets/images/program_seminar_lecture_1795715325576.jpg',
  internationalCollab: '/src/assets/images/international_students_collab_1795715324969.jpg',
  researchAuditorium: '/src/assets/images/research_faculty_auditorium_1795715326399.jpg',
} as const;

export type ProgramLevel = 'Master in Management' | 'Bachelor' | 'MSc' | 'MBA & DBA';

export interface CurriculumYear {
  year: string;
  title: string;
  summary: string;
  modules: string[];
}

export interface AcademicProgram {
  slug: string;
  title: string;
  shortTitle: string;
  level: ProgramLevel;
  degreeAwarded: string;
  duration: string;
  ects: number;
  language: '100% English' | 'English or Bilingual';
  format: 'Full-Time' | 'Full-Time or Work-Study' | 'Part-Time Executive';
  campus: string;
  intakes: string;
  tuitionAnnual: string;
  field: string;
  image: string;
  tagline: string;
  overview: string;
  highlights: string[];
  specializations: string[];
  curriculum: CurriculumYear[];
  careerOutcomes: {
    placementRate: string;
    averageSalary: string;
    roles: string[];
    recruiters: string[];
  };
  admissionsCriteria: string[];
  director: {
    name: string;
    role: string;
    quote: string;
  };
}

export const PROGRAMS: AcademicProgram[] = [
  {
    slug: 'master-in-management',
    title: 'Master in Management Program',
    shortTitle: 'Master in Management (MiM)',
    level: 'Master in Management',
    degreeAwarded: 'State-Recognized Master Degree',
    duration: '5 Years (or 2–3 Year Direct Entry)',
    ects: 300,
    language: 'English or Bilingual',
    format: 'Full-Time or Work-Study',
    campus: 'Paris — Latin Quarter',
    intakes: 'September',
    tuitionAnnual: '€13,900 / year',
    field: 'General Management & Strategy',
    image: MEDIA_ASSETS.heroCampus,
    tagline:
      'Our flagship interdisciplinary Master in Management curriculum uniting quantitative management, international immersion, and executive specialization.',
    overview:
      'Designed for ambitious secondary-school graduates and international transfer candidates, the Master in Management program builds rigorous analytical capability across economics, finance, data governance, and responsible leadership. Students spend at least one academic year abroad across our 165 partner universities and choose from 14 final-year majors, including corporate work-study tracks in Years 4 and 5.',
    highlights: [
      'State-recognized Master degree accredited by EFMD EQUIS, AACSB, and AMBA',
      'Mandatory international academic exchange or double degree across 48 countries',
      'Optional 24-month corporate work-study track fully funded by host firms',
      'Interdisciplinary minor available with partner engineering and design faculties',
    ],
    specializations: [
      'Corporate Finance & Capital Markets',
      'Strategy, Consulting & Transformation',
      'Data Analytics & AI Product Management',
      'International Luxury & Brand Strategy',
      'Entrepreneurship & Venture Creation',
      'Sustainable Supply Chain & Energy Economics',
    ],
    curriculum: [
      {
        year: 'Years 1 & 2',
        title: 'Foundations of Economics, Governance & Humanities',
        summary: 'Core management frameworks combined with applied statistics, business law, and European geopolitical literacy.',
        modules: [
          'Microeconomics & Market Architecture',
          'Financial Accounting & Managerial Control',
          'Quantitative Methods & Python for Analysts',
          'Geopolitics, Ethics & Civic Responsibility',
        ],
      },
      {
        year: 'Year 3',
        title: 'Global Immersion & Interdisciplinary Studio',
        summary: 'Full academic year abroad at a partner university paired with a cross-cultural consulting dossier.',
        modules: [
          'International Exchange (2 Semesters)',
          'Cross-Border Operations Field Study',
          'Second & Third Foreign Language Mastery',
          'Applied Sector Internship (4–6 Months)',
        ],
      },
      {
        year: 'Years 4 & 5',
        title: 'Master Cycle Specialization & Corporate Integration',
        summary: 'Deep vertical mastery through a chosen major, research thesis, and full-time corporate mission or apprenticeship.',
        modules: [
          'Specialized Major Track (60 ECTS)',
          'Executive Strategy & Boardroom Simulation',
          'Applied Master Research Thesis',
          'Final Management Placement or Work-Study Track',
        ],
      },
    ],
    careerOutcomes: {
      placementRate: '97% employed within 6 months',
      averageSalary: '€54,200 starting gross package',
      roles: ['Strategy Consultant', 'M&A Analyst', 'Product Strategist', 'ESG Finance Associate', 'International Brand Manager'],
      recruiters: ['Bain & Company', 'LVMH', 'BNP Paribas', 'Schneider Electric', 'Capgemini Invent'],
    },
    admissionsCriteria: [
      'Year 1 Entry: National High School Diploma (via National Admissions Portal & Entrance Exam) or International High School Diploma',
      'Year 3 / Year 4 Direct Entry: Completed 120 or 180 ECTS undergraduate degree in any discipline',
      'English proficiency (IELTS 6.5 / TOEFL iBT 88) for the 100% English track',
      'Structured individual motivation interview with faculty and alumni jury',
    ],
    director: {
      name: 'Prof. Claire Delacroix, PhD',
      role: 'Dean of the Master in Management Program',
      quote:
        'Technical fluency alone no longer distinguishes an executive. We train graduates who read balance sheets alongside ecological constraints and cultural nuance.',
    },
  },
  {
    slug: 'international-bachelor-in-management',
    title: 'International Bachelor in Management',
    shortTitle: 'Bachelor in Management',
    level: 'Bachelor',
    degreeAwarded: 'State-Recognized Bachelor Degree',
    duration: '3 Years',
    ects: 180,
    language: '100% English',
    format: 'Full-Time or Work-Study',
    campus: 'Paris — Latin Quarter',
    intakes: 'September & January',
    tuitionAnnual: '€11,200 / year',
    field: 'International Business',
    image: MEDIA_ASSETS.internationalCollab,
    tagline:
      'An intensive three-year undergraduate degree combining operational business mastery, global mobility, and early corporate experience.',
    overview:
      'Built for globally minded undergraduates, the International Bachelor in Management bridges academic discipline with immediate professional execution. Across three years, students complete up to 12 months of corporate internships, study a semester abroad, and specialize in International Trade, Luxury Marketing, or Financial Markets during their final year.',
    highlights: [
      '100% English instruction with dedicated language integration for international students',
      'Guaranteed semester abroad across Europe, North America, or Asia in Year 2',
      'Year 3 specialization available in corporate work-study format',
      'Direct progression pathway into PBS MSc or Master in Management Year 4',
    ],
    specializations: [
      'International Trade & Export Development',
      'Luxury Retail & Brand Communication',
      'Banking, Audit & Corporate Finance',
      'Digital Commerce & Growth Operations',
    ],
    curriculum: [
      {
        year: 'Year 1',
        title: 'Core Business Literacy & Applied Projects',
        summary: 'Essential commercial, analytical, and organizational foundations with live company briefs.',
        modules: [
          'Principles of Marketing & Consumer Insight',
          'Financial & Management Accounting',
          'Business Mathematics & Spreadsheet Modeling',
          'Global Economic History & Institutions',
        ],
      },
      {
        year: 'Year 2',
        title: 'International Mobility & Operational Management',
        summary: 'Semester abroad paired with corporate finance, commercial negotiation, and data literacy.',
        modules: [
          'International Semester Exchange',
          'Corporate Finance & Valuation Basics',
          'B2B Negotiation & Commercial Strategy',
          'Applied Summer Internship (3 Months)',
        ],
      },
      {
        year: 'Year 3',
        title: 'Track Specialization & Capstone Thesis',
        summary: 'Focused industry curriculum culminating in an operational consulting capstone.',
        modules: [
          'Specialization Track Seminars',
          'Entrepreneurship & Business Plan Lab',
          'Bachelor Applied Thesis',
          '6-Month Placement or Work-Study Contract',
        ],
      },
    ],
    careerOutcomes: {
      placementRate: '94% employed or pursuing Master study within 4 months',
      averageSalary: '€38,500 starting gross package',
      roles: ['Junior Business Developer', 'Financial Controller', 'Brand Coordinator', 'Operations Analyst'],
      recruiters: ['L’Oréal', 'KPMG', 'Sanofi', 'Michelin', 'Richemont'],
    },
    admissionsCriteria: [
      'Secondary school diploma (IB, A-Levels, National High School Diploma, or recognized equivalent)',
      'Academic transcripts from the last two years of secondary education',
      'English proficiency (IELTS 6.0 / TOEFL iBT 80 / Duolingo 105)',
      'Online or on-campus motivation interview',
    ],
    director: {
      name: 'Dr. Henrik Lindqvist',
      role: 'Academic Director, Undergraduate Studies',
      quote:
        'From the first semester, our undergraduates work on real market problems alongside practitioners, building intellectual rigor and commercial judgment.',
    },
  },
  {
    slug: 'bachelor-tech-and-quantitative-management',
    title: 'Bachelor in Tech & Quantitative Management',
    shortTitle: 'Bachelor Tech for Management',
    level: 'Bachelor',
    degreeAwarded: 'Bachelor of Science in Technology & Management',
    duration: '3 Years',
    ects: 180,
    language: '100% English',
    format: 'Full-Time',
    campus: 'Paris — Latin Quarter',
    intakes: 'September',
    tuitionAnnual: '€11,800 / year',
    field: 'Data, AI & Digital Systems',
    image: MEDIA_ASSETS.belvedereInterior,
    tagline:
      'A hybrid undergraduate degree uniting software engineering literacy, statistical modeling, and strategic product leadership.',
    overview:
      'Co-designed with our partner institute of applied sciences, the Bachelor in Tech & Quantitative Management prepares hybrid profiles able to translate machine learning, cloud systems, and algorithmic decision-making into viable commercial architecture.',
    highlights: [
      '50% quantitative & computer science modules, 50% management & product economics',
      'Weekly studio labs inside the PBS Data & Simulation Hub',
      'Industry hackathon partnerships with European AI and industrial software firms',
      'Prepares for both quantitative MSc degrees and immediate product analyst roles',
    ],
    specializations: [
      'Applied Data Engineering & Decision Science',
      'Digital Product Architecture & FinTech',
      'Cybersecurity Governance & Digital Risk',
    ],
    curriculum: [
      {
        year: 'Year 1',
        title: 'Computational Foundations & Managerial Economics',
        summary: 'Programming fluency, probability theory, and digital business models.',
        modules: ['Python & Algorithmic Thinking', 'Linear Algebra & Probability', 'Digital Economics & Platforms', 'Relational Databases & SQL'],
      },
      {
        year: 'Year 2',
        title: 'Applied Analytics & Systems Design',
        summary: 'Statistical inference, cloud infrastructure, and agile product delivery.',
        modules: ['Machine Learning Foundations', 'Product Management & UX Research', 'Corporate Finance for Tech Ventures', 'International Tech Immersion'],
      },
      {
        year: 'Year 3',
        title: 'AI Governance & Industry Capstone',
        summary: 'End-to-end deployment of an enterprise analytics solution with a corporate sponsor.',
        modules: ['Applied Deep Learning & NLP', 'AI Regulation & European Data Law', 'Enterprise Capstone Project', '6-Month Tech Management Internship'],
      },
    ],
    careerOutcomes: {
      placementRate: '96% placed within 4 months',
      averageSalary: '€43,000 starting gross package',
      roles: ['Junior Data Analyst', 'Technical Product Manager', 'FinTech Operations Specialist', 'Digital Transformation Analyst'],
      recruiters: ['Dassault Systèmes', 'Mistral AI Ecosystem', 'Accenture', 'Doctolib', 'Amadeus'],
    },
    admissionsCriteria: [
      'Strong quantitative background in secondary mathematics',
      'High school diploma or international equivalent',
      'English proficiency (IELTS 6.0 / TOEFL iBT 80)',
      'Analytical case discussion during admissions interview',
    ],
    director: {
      name: 'Prof. Nadia Benali, PhD',
      role: 'Chair of Quantitative Management',
      quote:
        'Organizations no longer separate engineers from strategists. Our graduates speak both languages natively.',
    },
  },
  {
    slug: 'msc-ai-business-analytics-cybersecurity',
    title: 'MSc in AI, Business Analytics & Cybersecurity',
    shortTitle: 'MSc AI & Business Analytics',
    level: 'MSc',
    degreeAwarded: 'Master of Science (CGE Accredited)',
    duration: '12 or 24 Months',
    ects: 90,
    language: '100% English',
    format: 'Full-Time or Work-Study',
    campus: 'Paris — Latin Quarter',
    intakes: 'September & February',
    tuitionAnnual: '€17,400 (1-Year Track)',
    field: 'Data, AI & Digital Systems',
    image: MEDIA_ASSETS.seminarLecture,
    tagline:
      'Master enterprise AI deployment, econometric forecasting, and cyber-resilience governance for European and global organizations.',
    overview:
      'The MSc in AI, Business Analytics & Cybersecurity equips postgraduate candidates to lead data-intensive transformation while navigating regulatory compliance, cyber-risk quantification, and ethical model auditing.',
    highlights: [
      'Hands-on Bloomberg, Python, Spark, and enterprise cloud lab certifications included',
      'Real-world consulting sprints with Chief Data Officers and CISOs',
      'Aligned with the EU AI Act and NIS2 regulatory frameworks',
      '1-year accelerated track (4-year Bachelor) or 2-year track (3-year Bachelor)',
    ],
    specializations: [
      'Generative AI & Enterprise Automation',
      'Cyber Risk Governance & Compliance',
      'Econometric & Marketing Intelligence',
    ],
    curriculum: [
      {
        year: 'Term 1',
        title: 'Statistical Modeling & Enterprise Data Architecture',
        summary: 'Advanced econometrics, data engineering pipelines, and governance.',
        modules: ['Predictive Analytics & Machine Learning', 'Cloud Data Architecture & Governance', 'Cybersecurity Risk Frameworks', 'Strategic Analytics for Executives'],
      },
      {
        year: 'Term 2',
        title: 'AI Strategy, Cyber Defense & Applied Thesis',
        summary: 'Specialized workshops, board-level crisis simulations, and corporate placement.',
        modules: ['Generative AI Product Strategy', 'EU AI Act & Privacy Engineering', 'Executive Cyber-Crisis Simulation', 'Applied Research Thesis & 6-Month Internship'],
      },
    ],
    careerOutcomes: {
      placementRate: '98% employed within 6 months',
      averageSalary: '€58,500 starting gross package',
      roles: ['AI Strategy Consultant', 'Lead Business Analyst', 'Cyber Governance Advisor', 'Data Product Manager'],
      recruiters: ['Capgemini', 'Thales', 'BCG X', 'Société Générale', 'Orange Cyberdefense'],
    },
    admissionsCriteria: [
      '3-year Bachelor (for 24-month track) or 4-year Bachelor / Master 1 (for 12-month track)',
      'Demonstrated quantitative aptitude or relevant professional experience',
      'English proficiency (IELTS 6.5 / TOEFL iBT 88)',
      'Motivation dossier and jury interview',
    ],
    director: {
      name: 'Prof. Matteo Ferretti, PhD',
      role: 'Director, MSc AI & Business Analytics',
      quote:
        'Algorithmic advantage decays quickly without organizational discipline and security resilience. We teach the complete lifecycle.',
    },
  },
  {
    slug: 'msc-luxury-heritage-brand-management',
    title: 'MSc in Luxury & Heritage Brand Management',
    shortTitle: 'MSc Luxury & Brand Management',
    level: 'MSc',
    degreeAwarded: 'Master of Science (CGE Accredited)',
    duration: '12 or 24 Months',
    ects: 90,
    language: '100% English',
    format: 'Full-Time',
    campus: 'Paris, France',
    intakes: 'September',
    tuitionAnnual: '€18,900 (1-Year Track)',
    field: 'Luxury, Culture & Creative Industries',
    image: MEDIA_ASSETS.belvedereInterior,
    tagline:
      'Explore fine watchmaking, luxury textiles, and global brand strategy from the heart of Paris’s creative and luxury capital.',
    overview:
      'Anchored in Paris’s centuries-old luxury and craftsmanship industries, this MSc blends brand stewardship, omnichannel clienteling, sustainable sourcing, and luxury financial valuation.',
    highlights: [
      'Study seminars in Paris with private heritage workshop visits',
      'Direct mentorship from executives at leading European luxury houses',
      'Dedicated module on circular luxury, traceability, and heritage preservation',
      'Annual Luxury Brand Challenge judged by Chief Merchandising Officers',
    ],
    specializations: [
      'Fine Watchmaking & High Jewelry Management',
      'Global Retail, Clienteling & Omnichannel Experience',
      'Sustainable Craftsmanship & Supply Traceability',
    ],
    curriculum: [
      {
        year: 'Term 1',
        title: 'Luxury House Economics & Cultural Capital',
        summary: 'Understanding scarcity economics, heritage storytelling, and global luxury consumers.',
        modules: ['Economics of Luxury & Pricing Architecture', 'Creative Direction & Heritage Strategy', 'Global Clienteling & CRM Analytics', 'Luxury Supply Chain & Raw Material Ethics'],
      },
      {
        year: 'Term 2',
        title: 'Watchmaking & Heritage Lab & Industry Placement',
        summary: 'Field immersion in European craftsmanship hubs paired with an applied luxury consulting thesis.',
        modules: ['Fine Watchmaking & Heritage Intensive', 'Luxury Financial Control & Retail KPIs', 'Intellectual Property & Counterfeit Defense', 'MSc Dissertation & Luxury House Internship'],
      },
    ],
    careerOutcomes: {
      placementRate: '95% employed within 6 months',
      averageSalary: '€52,000 starting gross package',
      roles: ['International Merchandising Manager', 'Retail Operations Lead', 'Clienteling Strategist', 'Brand Heritage Manager'],
      recruiters: ['Richemont', 'Hermès', 'Kering', 'LVMH', 'Patek Philippe'],
    },
    admissionsCriteria: [
      'Completed undergraduate degree (3-year or 4-year Bachelor) in business, arts, or humanities',
      'Strong interest in luxury ecosystems, heritage, or creative retail',
      'English proficiency (IELTS 6.5 / TOEFL iBT 88)',
      'Admissions portfolio review and panel interview',
    ],
    director: {
      name: 'Prof. Éléonore de Vries',
      role: 'Academic Chair, Luxury & Heritage',
      quote:
        'Enduring luxury houses balance century-old craft with contemporary commercial rigor. Our Lyon–Geneva corridor puts students inside that tension.',
    },
  },
  {
    slug: 'msc-international-sustainable-finance',
    title: 'MSc in International & Sustainable Finance',
    shortTitle: 'MSc International Finance',
    level: 'MSc',
    degreeAwarded: 'Master of Science (CFA University Affiliation Track)',
    duration: '12 or 24 Months',
    ects: 90,
    language: '100% English',
    format: 'Full-Time or Work-Study',
    campus: 'Geneva & Lyon',
    intakes: 'September & February',
    tuitionAnnual: '€18,200 (1-Year Track)',
    field: 'Finance & Sustainable Economics',
    image: MEDIA_ASSETS.researchAuditorium,
    tagline:
      'Rigorous training in corporate valuation, capital markets, and green transition finance embedded in Geneva’s private banking ecosystem.',
    overview:
      'Structured around CFA Institute curriculum standards and European taxonomy regulations, the MSc in International & Sustainable Finance prepares analysts and investment associates for investment banking, private equity, asset management, and climate finance.',
    highlights: [
      '24-terminal Bloomberg & Refinitiv Market Room access on both campuses',
      'Curriculum aligned with CFA Level I & II and EFFAS ESG Analyst certifications',
      'Live student-managed €250,000 Sustainable Equity Simulation Fund',
      'Direct recruitment forums with Geneva, Zurich, Paris, and London financial institutions',
    ],
    specializations: [
      'M&A, Private Equity & Corporate Advisory',
      'Sustainable Asset Management & Green Bonds',
      'Quantitative Risk & Treasury Architecture',
    ],
    curriculum: [
      {
        year: 'Term 1',
        title: 'Valuation, Markets & Quantitative Asset Pricing',
        summary: 'Intensive financial modeling, fixed income, derivatives, and corporate restructuring.',
        modules: ['Advanced Corporate Valuation & LBO Modeling', 'Fixed Income & Derivatives Pricing', 'Financial Econometrics in Python', 'IFRS Reporting & Forensic Analysis'],
      },
      {
        year: 'Term 2',
        title: 'Transition Finance, Portfolio Strategy & Placement',
        summary: 'Climate risk stress-testing, impact investing, and corporate placement.',
        modules: ['Sustainable Finance & EU Taxonomy', 'Private Equity & Venture Financing', 'Portfolio Management Workshop', 'Applied Finance Thesis & 6-Month Placement'],
      },
    ],
    careerOutcomes: {
      placementRate: '97% employed within 6 months',
      averageSalary: '€61,800 starting gross package',
      roles: ['Investment Banking Analyst', 'ESG Portfolio Analyst', 'Private Equity Associate', 'Corporate Treasury Specialist'],
      recruiters: ['Lombard Odier', 'UBS', 'Rothschild & Co', 'Amundi', 'BNP Paribas CIB'],
    },
    admissionsCriteria: [
      'Bachelor degree in Finance, Economics, Engineering, Mathematics, or Management',
      'Strong quantitative transcripts (GMAT optional but recommended for scholarships)',
      'English proficiency (IELTS 6.5 / TOEFL iBT 88)',
      'Technical finance and motivation interview',
    ],
    director: {
      name: 'Prof. Laurent Mercier, CFA, PhD',
      role: 'Director, MSc International & Sustainable Finance',
      quote:
        'Capital allocation is the decisive lever of the industrial transition. We teach finance with empirical precision and fiduciary integrity.',
    },
  },
  {
    slug: 'msc-supply-chain-global-operations',
    title: 'MSc in Global Supply Chain & Industrial Transition',
    shortTitle: 'MSc Global Supply Chain',
    level: 'MSc',
    degreeAwarded: 'Master of Science (CGE Accredited)',
    duration: '12 Months',
    ects: 90,
    language: '100% English',
    format: 'Full-Time or Work-Study',
    campus: 'Paris — Latin Quarter',
    intakes: 'September',
    tuitionAnnual: '€16,800 (1-Year Track)',
    field: 'Operations & Industrial Strategy',
    image: MEDIA_ASSETS.heroCampus,
    tagline:
      'Design resilient, low-carbon European and global value chains using predictive operations analytics and circular procurement.',
    overview:
      'Anchored in France’s premier European industrial and logistics hub, this MSc trains operations leaders to optimize international logistics, decarbonize manufacturing networks, and manage geopolitical supply disruptions.',
    highlights: [
      'Lean Six Sigma Green Belt certification embedded in the core curriculum',
      'Industrial site audits with European pharmaceutical, aerospace, and energy manufacturers',
      'Dedicated focus on Scope 3 carbon accounting and resilient nearshoring',
    ],
    specializations: [
      'Predictive Logistics & Digital Twin Operations',
      'Sustainable Procurement & Circular Sourcing',
    ],
    curriculum: [
      {
        year: 'Term 1',
        title: 'Operations Optimization & Strategic Sourcing',
        summary: 'Network design, inventory mathematics, and global supplier governance.',
        modules: ['Operations Research & Network Optimization', 'Strategic Procurement & Contract Law', 'ERP & Digital Supply Chain Systems', 'Carbon Accounting & Scope 3 Diagnostics'],
      },
      {
        year: 'Term 2',
        title: 'Resilience Engineering & Corporate Mission',
        summary: 'Live industrial audit, Lean Six Sigma certification, and 6-month placement.',
        modules: ['Geopolitics of Maritime & Rail Corridors', 'Lean Six Sigma Certification Lab', 'Applied Supply Chain Dissertation', '6-Month Industrial Placement'],
      },
    ],
    careerOutcomes: {
      placementRate: '98% employed within 6 months',
      averageSalary: '€53,500 starting gross package',
      roles: ['Supply Chain Architect', 'Global Sourcing Manager', 'Operations Transformation Lead', 'Circular Logistics Planner'],
      recruiters: ['Airbus', 'Sanofi', 'Schneider Electric', 'CMA CGM', 'BioMérieux'],
    },
    admissionsCriteria: [
      '4-year Bachelor or Master 1 in Business, Engineering, or Industrial Economics',
      'English proficiency (IELTS 6.5 / TOEFL iBT 88)',
      'Individual motivation interview',
    ],
    director: {
      name: 'Prof. Arnaud Vasseur, PhD',
      role: 'Director, Supply Chain & Operations',
      quote:
        'Resilient supply chains are now a boardroom strategic asset. We prepare leaders who combine operational rigor with climate accountability.',
    },
  },
  {
    slug: 'international-mba',
    title: 'International MBA',
    shortTitle: 'International MBA',
    level: 'MBA & DBA',
    degreeAwarded: 'Master of Business Administration (AMBA Accredited)',
    duration: '12 Months Full-Time',
    ects: 90,
    language: '100% English',
    format: 'Full-Time',
    campus: 'Geneva & Lyon',
    intakes: 'September',
    tuitionAnnual: '€34,500 (Total Program)',
    field: 'Executive Leadership',
    image: MEDIA_ASSETS.seminarLecture,
    tagline:
      'An intensive 12-month leadership accelerator for mid-career professionals pivoting into global general management or cross-border ventures.',
    overview:
      'With an average cohort age of 31 and over 25 nationalities in a deliberately intimate 45-participant class, the PBS International MBA integrates executive strategy, corporate governance, international residency weeks, and personalized C-suite career coaching.',
    highlights: [
      'AMBA-accredited cohort capped at 45 experienced managers for high faculty engagement',
      'Two international leadership residencies in Zurich and Singapore',
      'Dedicated Executive Career Coach and board-level mentorship program',
      '10-week Live Strategic Consulting Engagement with a multinational partner',
    ],
    specializations: [
      'Corporate Strategy & Cross-Border M&A',
      'Climate Transition & Industrial Leadership',
      'Entrepreneurial Acquisition & Venture Scaling',
    ],
    curriculum: [
      {
        year: 'Modules 1–2',
        title: 'Executive Core & Quantitative Decision-Making',
        summary: 'Financial strategy, organizational architecture, and macroeconomic risk.',
        modules: ['Corporate Finance & Capital Allocation', 'Competitive Strategy & Industry Structure', 'Leadership, Power & Organizational Change', 'Global Macroeconomics & Trade Policy'],
      },
      {
        year: 'Modules 3–4',
        title: 'Global Residencies & Boardroom Capstone',
        summary: 'Specialization electives, international immersions, and executive consulting mission.',
        modules: ['Zurich Sustainable Finance Residency', 'Singapore APAC Growth Residency', 'Boardroom Governance Simulation', 'Executive Consulting Capstone'],
      },
    ],
    careerOutcomes: {
      placementRate: '95% career transition or promotion within 3 months',
      averageSalary: '€96,400 post-MBA compensation (+44% uplift)',
      roles: ['Strategy Director', 'Business Unit Head', 'VP Operations', 'Principal Consultant', 'Venture Founder'],
      recruiters: ['McKinsey & Company', 'Novartis', 'Nestlé', 'Amazon Europe', 'Roland Berger'],
    },
    admissionsCriteria: [
      'Recognized Bachelor degree or higher',
      'Minimum 3 years of progressive full-time professional experience (average 6 years)',
      'GMAT (600+ recommended), GRE, or PBS Executive Assessment',
      'Two professional references and executive admissions interview',
    ],
    director: {
      name: 'Prof. Alistair Vance, DBA',
      role: 'Director of MBA & Executive Education',
      quote:
        'An MBA should sharpen how you think under ambiguity, not simply add terminology. Our cohort learns as much from each other’s leadership scars as from the case library.',
    },
  },
  {
    slug: 'doctorate-of-business-administration',
    title: 'Doctorate of Business Administration (DBA)',
    shortTitle: 'Executive DBA',
    level: 'MBA & DBA',
    degreeAwarded: 'Doctorate of Business Administration',
    duration: '3 Years Part-Time',
    ects: 180,
    language: '100% English',
    format: 'Part-Time Executive',
    campus: 'Geneva, Lyon & Hybrid Seminars',
    intakes: 'October',
    tuitionAnnual: '€14,500 / year',
    field: 'Applied Executive Research',
    image: MEDIA_ASSETS.researchAuditorium,
    tagline:
      'Transform senior executive experience into peer-reviewed management scholarship through rigorous applied doctoral research.',
    overview:
      'Designed for C-suite leaders, senior partners, and institutional directors, the PBS Executive DBA pairs structured doctoral methodology seminars with one-to-one supervision by publishing research faculty.',
    highlights: [
      'Modular weekend & hybrid residencies tailored to global executive schedules',
      'Individual supervision by senior PBS research chairs',
      'Direct publication coaching for peer-reviewed management journals and books',
    ],
    specializations: [
      'Corporate Governance & Institutional Economics',
      'AI Ethics & Organizational Design',
      'Energy Economics & Industrial Decarbonization',
    ],
    curriculum: [
      {
        year: 'Year 1',
        title: 'Epistemology & Research Methodology',
        summary: 'Qualitative and quantitative research design, literature synthesis, and doctoral proposal defense.',
        modules: ['Philosophy of Management Science', 'Quantitative Econometric Design', 'Qualitative Case & Ethnographic Inquiry', 'Doctoral Research Proposal Defense'],
      },
      {
        year: 'Years 2 & 3',
        title: 'Field Investigation, Publication & Defense',
        summary: 'Empirical data collection, international research colloquium, and final thesis defense.',
        modules: ['Empirical Fieldwork & Advisory Clinics', 'Annual PBS Research Colloquium', 'Academic & Practitioner Publication Track', 'Final Doctoral Viva Voce Defense'],
      },
    ],
    careerOutcomes: {
      placementRate: '100% executive leadership, board advisory, or visiting faculty roles',
      averageSalary: 'C-Suite / Board Partner Level',
      roles: ['Board Independent Director', 'Chief Strategy Officer', 'Managing Partner', 'Visiting Professor of Practice'],
      recruiters: ['Global Financial Institutions', 'Multilateral Organizations', 'Tier-1 Consultancies', 'European Industrial Groups'],
    },
    admissionsCriteria: [
      'Master degree or MBA from an accredited institution',
      'Minimum 8 years of senior management or executive leadership experience',
      'Preliminary 1,500-word doctoral research statement',
      'Interview with the Doctoral Academic Committee',
    ],
    director: {
      name: 'Prof. Dr. Sabine Kohlberg',
      role: 'Dean of Research & Doctoral Studies',
      quote:
        'Our DBA candidates bring real strategic dilemmas from the boardroom and return with empirical frameworks that reshape their industries.',
    },
  },
];

export const KEY_FIGURES = [
  { value: '4,250', label: 'Students across Paris, France', context: 'Academic Year 2025–2026' },
  { value: '128', label: 'Nationalities on campus', context: '42% international cohorts' },
  { value: '165', label: 'Partner universities worldwide', context: 'Across 48 countries' },
  { value: '3,400+', label: 'Corporate & institutional partners', context: 'Active hiring & research network' },
  { value: '96.4%', label: 'Graduate placement rate', context: 'Employed within 6 months' },
];

export const ACCREDITATIONS = [
  {
    code: 'EQUIS',
    title: 'EFMD Quality Improvement System',
    description: 'Awarded for institutional academic excellence, corporate links, and deep internationalization.',
  },
  {
    code: 'AACSB',
    title: 'Association to Advance Collegiate Schools of Business',
    description: 'Recognizes rigorous faculty scholarship and continuous assurance of learning standards.',
  },
  {
    code: 'AMBA',
    title: 'Association of MBAs',
    description: 'Certifies the highest international standard across our MBA and Executive Doctorate portfolio.',
  },
  {
    code: 'CGE',
    title: 'Conference of Business Schools (CGE)',
    description: 'Full institutional member confirming selective French higher education academic governance.',
  },
];

export interface ResearchChair {
  id: string;
  name: string;
  director: string;
  focus: string;
  summary: string;
  metrics: string;
}

export const RESEARCH_CHAIRS: ResearchChair[] = [
  {
    id: 'energy-climate',
    name: 'Center for Energy Transition & Climate Economics',
    director: 'Prof. Dr. Henrik Lindqvist & Prof. Laurent Mercier',
    focus: 'Decarbonization Finance · Grid Economics · Industrial Policy',
    summary:
      'Investigates sovereign green bond pricing, industrial Scope 3 accounting standards, and capital allocation across European clean-energy infrastructure.',
    metrics: '48 peer-reviewed papers · €3.2M European Horizon grants',
  },
  {
    id: 'responsible-ai',
    name: 'Chair in Algorithmic Governance & Responsible AI',
    director: 'Prof. Nadia Benali, PhD',
    focus: 'EU AI Act · Human-in-the-Loop Decision Systems · Cyber Resilience',
    summary:
      'Examines how boards audit automated decision engines, measure model bias in credit and hiring, and align AI productivity with labor transitions.',
    metrics: '34 peer-reviewed papers · 12 corporate observatory partners',
  },
  {
    id: 'heritage-luxury',
    name: 'Observatory of Heritage Economics & Cultural Capital',
    director: 'Prof. Éléonore de Vries',
    focus: 'Craftsmanship Ecosystems · Circular Luxury · Intellectual Property',
    summary:
      'Studies value creation in multi-generational European luxury houses, supply-chain provenance in fine watchmaking and textiles, and intergenerational stewardship.',
    metrics: '29 peer-reviewed papers · Paris Annual Heritage Symposium',
  },
];

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  department: 'Finance & Economics' | 'Strategy & Governance' | 'Data & Technology' | 'Marketing & Heritage';
  phd: string;
  expertise: string;
  recentWork: string;
}

export const FACULTY_DIRECTORY: FacultyMember[] = [
  {
    id: 'f1',
    name: 'Prof. Claire Delacroix',
    title: 'Dean of Master in Management & Professor of Strategy',
    department: 'Strategy & Governance',
    phd: 'PhD in Management Science, University of St. Gallen',
    expertise: 'Corporate transformation, European industrial alliances, board governance',
    recentWork: 'Strategic Management Journal (2025)',
  },
  {
    id: 'f2',
    name: 'Prof. Laurent Mercier',
    title: 'Professor of Financial Markets & Transition Finance',
    department: 'Finance & Economics',
    phd: 'PhD in Financial Economics, LSE · CFA Charterholder',
    expertise: 'Green sovereign debt, carbon pricing, European banking regulation',
    recentWork: 'Journal of Financial Economics (2026)',
  },
  {
    id: 'f3',
    name: 'Prof. Nadia Benali',
    title: 'Chair of Quantitative Management',
    department: 'Data & Technology',
    phd: 'PhD in Applied Mathematics, ETH Zurich',
    expertise: 'Algorithmic auditing, stochastic optimization, enterprise AI governance',
    recentWork: 'Management Science (2025)',
  },
  {
    id: 'f4',
    name: 'Prof. Éléonore de Vries',
    title: 'Professor of Luxury & Cultural Economics',
    department: 'Marketing & Heritage',
    phd: 'PhD in Economic Sociology, Sciences Po Paris',
    expertise: 'Heritage brand equity, scarcity markets, sustainable artisanal supply chains',
    recentWork: 'Journal of Consumer Research (2025)',
  },
  {
    id: 'f5',
    name: 'Prof. Sabine Kohlberg',
    title: 'Dean of Research & Doctoral Studies',
    department: 'Finance & Economics',
    phd: 'PhD in Economics, University of Mannheim',
    expertise: 'Macroeconomic policy, monetary transmission, sovereign risk',
    recentWork: 'Review of Economic Studies (2026)',
  },
  {
    id: 'f6',
    name: 'Prof. Matteo Ferretti',
    title: 'Associate Professor of Data Systems & Cybersecurity',
    department: 'Data & Technology',
    phd: 'PhD in Information Systems, Bocconi University',
    expertise: 'Cyber-risk quantification, enterprise data architecture, platform regulation',
    recentWork: 'MIS Quarterly (2025)',
  },
  {
    id: 'f7',
    name: 'Prof. Arnaud Vasseur',
    title: 'Professor of Operations & Circular Supply Chains',
    department: 'Strategy & Governance',
    phd: 'PhD in Industrial Engineering, CentraleSupélec',
    expertise: 'Resilient nearshoring, Scope 3 supply chain optimization, maritime corridors',
    recentWork: 'Journal of Operations Management (2026)',
  },
  {
    id: 'f8',
    name: 'Prof. Alistair Vance',
    title: 'Professor of Executive Leadership & Corporate Diplomacy',
    department: 'Strategy & Governance',
    phd: 'DBA, Cranfield School of Management',
    expertise: 'Post-merger cultural integration, C-suite decision-making under uncertainty',
    recentWork: 'Academy of Management Perspectives (2025)',
  },
];

export interface ResearchArticle {
  id: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
}

export const INSIGHTS_ARTICLES: ResearchArticle[] = [
  {
    id: 'green-capital-cost-2026',
    category: 'Finance & Climate',
    date: 'November 2026',
    readTime: '6 min read',
    author: 'Prof. Laurent Mercier & Prof. Sabine Kohlberg',
    title: 'Does Transition Credibility Lower the Cost of European Corporate Debt?',
    excerpt:
      'Analyzing 1,400 Eurozone corporate bond issuances between 2021 and 2026 reveals a 28-basis-point spread advantage for firms with audited Scope 3 trajectories.',
    image: MEDIA_ASSETS.researchAuditorium,
    body: [
      'For nearly a decade, institutional investors debated whether sustainability-linked corporate debt represented a genuine repricing of transition risk or a temporary marketing premium. Drawing on a newly assembled dataset of 1,420 investment-grade Eurozone bond issuances from 2021 through mid-2026, our Center for Energy Transition & Climate Economics isolates the financial value of verifiable industrial decarbonization.',
      'Our empirical findings draw a sharp distinction between self-declared climate pledges and third-party audited capital expenditure plans. Issuers whose transition pathways align with verifiable plant-level abatement schedules enjoy an average 28-basis-point reduction in primary issuance spreads compared with sector peers—an advantage that widens to 41 basis points during periods of energy-price volatility.',
      'Conversely, firms publishing broad qualitative commitments without verifiable interim milestones receive no statistically significant discount from institutional buyers. Fixed-income desks increasingly treat carbon-intensity exposure as a forward cash-flow liability under the EU Emissions Trading System.',
      'For Chief Financial Officers and treasury committees, the implication is concrete: transition disclosure is no longer an investor-relations exercise, but a measurable determinant of balance-sheet resilience.',
    ],
  },
  {
    id: 'eu-ai-act-boardrooms',
    category: 'Algorithmic Governance',
    date: 'October 2026',
    readTime: '5 min read',
    author: 'Prof. Nadia Benali',
    title: 'Auditing High-Risk AI Inside European Financial Institutions',
    excerpt:
      'Field evidence from 24 European banks shows why model-risk committees must integrate operational compliance before deployment rather than post-hoc.',
    image: MEDIA_ASSETS.seminarLecture,
    body: [
      'As high-risk obligations under the European AI Act take full operational effect across credit underwriting, fraud scoring, and workforce analytics, executive boards face an unfamiliar governance mandate: auditing probabilistic systems whose behavior shifts as underlying economic regimes evolve.',
      'Across 24 field interviews with Chief Risk Officers and Lead Data Scientists in Lyon, Paris, Frankfurt, and Geneva, our chair identified three organizational bottlenecks: fragmented model lineage documentation, misaligned incentives between commercial product teams and compliance officers, and insufficient human-override training for frontline decision-makers.',
      'Institutions that outperform on both deployment velocity and regulatory readiness embed quantitative compliance engineers directly inside product squads during early architecture reviews—cutting approval cycles by 37% while eliminating late-stage model recalls.',
    ],
  },
  {
    id: 'heritage-supply-chains',
    category: 'Luxury & Heritage',
    date: 'September 2026',
    readTime: '4 min read',
    author: 'Prof. Éléonore de Vries',
    title: 'Why Vertical Integration of Artisanal Workshops Defines Luxury Margins',
    excerpt:
      'From heritage silk workshops to fine watchmaking valleys, securing generational craftsmanship has become the decisive competitive moat for luxury groups.',
    image: MEDIA_ASSETS.belvedereInterior,
    body: [
      'Over the past five years, major European luxury groups have accelerated acquisitions of small specialist workshops—enamelers, tanners, dial-makers, and silk weavers—whose master artisans are nearing retirement.',
      'Our Observatory of Heritage Economics tracked 68 workshop acquisitions across France, Switzerland, and northern Italy. Beyond securing scarce production capacity, vertical ownership enables luxury houses to establish accredited apprentice academies, guaranteeing both provenance traceability and enduring gross-margin leadership.',
    ],
  },
];

export interface PartnerUniversity {
  name: string;
  city: string;
  country: string;
  region: 'Europe' | 'North America' | 'Asia-Pacific' | 'Latin America' | 'Middle East & Africa';
  accreditation: string;
  tracks: string;
}

export const PARTNER_UNIVERSITIES: PartnerUniversity[] = [
  { name: 'University of St. Gallen (HSG)', city: 'St. Gallen', country: 'Switzerland', region: 'Europe', accreditation: 'EQUIS · AACSB · AMBA', tracks: 'Bachelor & Master Exchange' },
  { name: 'Bocconi University', city: 'Milan', country: 'Italy', region: 'Europe', accreditation: 'EQUIS · AACSB · AMBA', tracks: 'Master in Management & MSc' },
  { name: 'WHU — Otto Beisheim School of Management', city: 'Vallendar', country: 'Germany', region: 'Europe', accreditation: 'EQUIS · AACSB', tracks: 'Bachelor & Master in Management' },
  { name: 'IE University', city: 'Madrid', country: 'Spain', region: 'Europe', accreditation: 'EQUIS · AACSB · AMBA', tracks: 'Bachelor & MBA Exchange' },
  { name: 'Copenhagen Business School', city: 'Copenhagen', country: 'Denmark', region: 'Europe', accreditation: 'EQUIS · AACSB · AMBA', tracks: 'Master in Management & MSc' },
  { name: 'University of Warwick — WBS', city: 'Coventry', country: 'United Kingdom', region: 'Europe', accreditation: 'EQUIS · AACSB · AMBA', tracks: 'Double Degree & Exchange' },
  { name: 'McGill University — Desautels', city: 'Montreal', country: 'Canada', region: 'North America', accreditation: 'EQUIS · AACSB', tracks: 'Bachelor & Master in Management' },
  { name: 'University of Texas at Austin — McCombs', city: 'Austin', country: 'United States', region: 'North America', accreditation: 'AACSB', tracks: 'Master in Management & MBA' },
  { name: 'UC Berkeley Extension Global Track', city: 'Berkeley', country: 'United States', region: 'North America', accreditation: 'WSCUC', tracks: 'Tech & Entrepreneurship Semester' },
  { name: 'Queen’s University — Smith School', city: 'Kingston', country: 'Canada', region: 'North America', accreditation: 'EQUIS · AACSB', tracks: 'Bachelor & Master Exchange' },
  { name: 'National University of Singapore (NUS)', city: 'Singapore', country: 'Singapore', region: 'Asia-Pacific', accreditation: 'EQUIS · AACSB', tracks: 'Master in Management & MBA Residency' },
  { name: 'Keio University Business School', city: 'Tokyo', country: 'Japan', region: 'Asia-Pacific', accreditation: 'EQUIS · AACSB', tracks: 'Master & MBA Exchange' },
  { name: 'Yonsei University School of Business', city: 'Seoul', country: 'South Korea', region: 'Asia-Pacific', accreditation: 'EQUIS · AACSB · AMBA', tracks: 'Bachelor & Master Exchange' },
  { name: 'University of Melbourne — MBS', city: 'Melbourne', country: 'Australia', region: 'Asia-Pacific', accreditation: 'EQUIS · AACSB', tracks: 'Master Exchange' },
  { name: 'FGV EAESP', city: 'São Paulo', country: 'Brazil', region: 'Latin America', accreditation: 'EQUIS · AACSB · AMBA', tracks: 'Bachelor & Master in Management' },
  { name: 'Tecnológico de Monterrey — EGADE', city: 'Monterrey', country: 'Mexico', region: 'Latin America', accreditation: 'EQUIS · AACSB · AMBA', tracks: 'Master & MBA Exchange' },
  { name: 'University of Cape Town — GSB', city: 'Cape Town', country: 'South Africa', region: 'Middle East & Africa', accreditation: 'EQUIS · AACSB · AMBA', tracks: 'Impact & MBA Exchange' },
  { name: 'American University of Beirut — OSB', city: 'Beirut', country: 'Lebanon', region: 'Middle East & Africa', accreditation: 'AACSB', tracks: 'Bachelor & Master Exchange' },
];

export interface SchoolEvent {
  id: string;
  type: 'Open Day' | 'Webinar' | 'Masterclass' | 'Career Forum';
  date: string;
  time: string;
  location: string;
  title: string;
  description: string;
  audience: string;
}

export const UPCOMING_EVENTS: SchoolEvent[] = [
  {
    id: 'evt-open-day-lyon',
    type: 'Open Day',
    date: 'December 12, 2026',
    time: '09:30 – 16:30 CET',
    location: 'PBS Paris Campus',
    title: 'Winter Campus Open Day — Master in Management & Bachelor Programs',
    description:
      'Tour the historic vaulted library and trading room, attend a live economics mini-lecture, and meet current students and admissions directors.',
    audience: 'High school students, transfer candidates & parents',
  },
  {
    id: 'evt-webinar-msc',
    type: 'Webinar',
    date: 'December 16, 2026',
    time: '18:00 – 19:15 CET',
    location: 'Online Live Session',
    title: 'MSc Portfolio & International Scholarships Q&A',
    description:
      'Explore our 100% English MSc tracks in AI, Sustainable Finance, and Luxury Management, including application timelines and merit tuition waivers.',
    audience: 'International & European undergraduate graduates',
  },
  {
    id: 'evt-masterclass-luxury',
    type: 'Masterclass',
    date: 'January 14, 2027',
    time: '17:30 – 19:00 CET',
    location: 'Paris Campus & Livestream',
    title: 'Masterclass: Economics of Fine Watchmaking & Circular Provenance',
    description:
      'Led by Prof. Éléonore de Vries with guest Managing Director of a leading European fine watchmaking house.',
    audience: 'Prospective MSc, MBA candidates & alumni',
  },
  {
    id: 'evt-career-forum',
    type: 'Career Forum',
    date: 'January 22, 2027',
    time: '10:00 – 18:00 CET',
    location: 'PBS Paris Campus',
    title: 'Annual Corporate Recruitment & Work-Study Forum',
    description:
      'Over 85 corporate partners on campus for structured internship, graduate program, and apprenticeship interviews.',
    audience: 'Current PBS students & corporate recruiters',
  },
  {
    id: 'evt-webinar-mba',
    type: 'Webinar',
    date: 'February 04, 2027',
    time: '12:30 – 13:30 CET',
    location: 'Online Live Session',
    title: 'International MBA & Executive DBA Information Session',
    description:
      'Speak directly with Prof. Alistair Vance and MBA alumni about career acceleration, financing options, and international residencies.',
    audience: 'Experienced professionals (3+ years)',
  },
  {
    id: 'evt-open-day-spring',
    type: 'Open Day',
    date: 'February 20, 2027',
    time: '10:00 – 17:00 CET',
    location: 'Paris, France Campuses',
    title: 'Spring Interdisciplinary Open House & Admissions Clinics',
    description:
      'Bring your CV and transcripts for one-on-one feedback from admissions advisors and experience student association showcases.',
    audience: 'All prospective undergraduate & graduate applicants',
  },
];

export const STUDENT_ASSOCIATIONS = [
  {
    name: 'PBS Student Consulting',
    category: 'Consulting & Enterprise',
    members: '65 active student consultants',
    description: 'Student-run consultancy delivering market research, financial due diligence, and digital audits for SMEs and major European groups.',
  },
  {
    name: 'Paris Finance & Investment Club',
    category: 'Finance & Markets',
    members: '140 members',
    description: 'Manages the €250,000 simulated sustainable equity portfolio and hosts weekly M&A technical prep workshops.',
  },
  {
    name: 'Climate & Transition Society',
    category: 'Sustainability & Civic Action',
    members: '110 members',
    description: 'Organizes the annual Paris Climate Economics Symposium, campus zero-waste initiatives, and local biodiversity projects.',
  },
  {
    name: 'PBS Arts & Luxury Society',
    category: 'Culture & Craftsmanship',
    members: '95 members',
    description: 'Curates private gallery evenings, heritage workshop visits, and the annual European Heritage Innovation Award.',
  },
  {
    name: 'International Student Office',
    category: 'Global Community',
    members: '180 buddies',
    description: 'Welcomes incoming exchange and full-degree international students with airport pickups, buddy pairings, and cultural weekend trips.',
  },
  {
    name: 'PBS Venture Foundry',
    category: 'Entrepreneurship',
    members: '80 founders',
    description: 'Connects student startup teams with alumni angel investors, legal clinics, and prototyping mentors inside PBS Paris Campus.',
  },
];

export const ALUMNI_STORIES = [
  {
    name: 'Camille Rochefort',
    degree: 'Master in Management (MiM) · Class of 2021',
    role: 'Engagement Manager, Bain & Company — Paris',
    quote:
      'My exchange semester in St. Gallen and my final-year apprenticeship in energy strategy gave me the analytical maturity to step directly into strategy consulting. Four years on, I now lead European decarbonization cases.',
  },
  {
    name: 'Kenji Takahashi',
    degree: 'MSc in International & Sustainable Finance · Class of 2023',
    role: 'ESG Fixed Income Associate, Lombard Odier — Geneva',
    quote:
      'Studying between Paris placed me in direct conversation with Swiss portfolio managers every week. The Bloomberg labs and CFA alignment made the transition into institutional asset management seamless.',
  },
  {
    name: 'Amara Okafor',
    degree: 'International MBA · Class of 2024',
    role: 'Director of European Operations, Schneider Electric — Lyon',
    quote:
      'Before PBS, I led regional engineering teams in Lagos. The MBA sharpened my financial judgment and European regulatory fluency, leading to a cross-border operations director role within two months of graduation.',
  },
];

export const CORPORATE_PARTNERS = [
  'BNP Paribas',
  'LVMH',
  'Schneider Electric',
  'Lombard Odier',
  'Bain & Company',
  'Sanofi',
  'Richemont',
  'Capgemini Invent',
  'L’Oréal',
  'Airbus',
  'UBS',
  'KPMG',
];

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  category: string;
  summary: string;
  body: string[];
}

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 'news-equis-2025',
    date: '15 December 2025',
    title: 'PBS (Paris Business School) renews EQUIS accreditation for five years',
    category: 'Campus life',
    summary:
      'EFMD’s international peer-review committee commended PBS’s interdisciplinary curriculum, research output, and deep corporate ties.',
    body: [
      'PBS (Paris Business School) has secured full five-year renewal of its EFMD EQUIS accreditation, confirming its place among the select group of Triple Crown accredited institutions worldwide holding EQUIS, AACSB, and AMBA.',
      'The international review panel highlighted the inauguration of PBS Paris Campus in Lyon, the expansion of our Geneva sustainable finance track, and the integration of climate-economics modules across every degree level.',
    ],
  },
  {
    id: 'news-ft-2026',
    date: '9 September 2026',
    title: 'Financial Times 2026: PBS enters the European Top 20 for Masters in Management',
    category: 'Campus life',
    summary:
      'Driven by career progression, international mobility, and alumni salary growth, the Master in Management program climbs six places.',
    body: [
      'In the 2026 Financial Times Masters in Management ranking, PBS (Paris Business School)’s Master in Management program rose six positions into the European Top 20.',
      'PBS ranked particularly strongly in international course experience, carbon-footprint teaching integration, and three-year post-graduation career progression across consulting, finance, and industrial strategy.',
    ],
  },
  {
    id: 'news-bachelor-2026',
    date: '27 January 2026',
    title: 'PBS ranked 4th in the 2026 National Bachelor in Management Ranking',
    category: 'Rankings',
    summary:
      'Independent audit recognizes our three-year International Bachelor for academic selectivity, international exchange breadth, and corporate placement.',
    body: [
      'Our International Bachelor in Management climbed to 4th place nationwide in the 2026 Bachelor ranking, earning top marks for mandatory international mobility and early work-study integration.',
    ],
  },
  {
    id: 'news-student-portrait-2026',
    date: '23 February 2026',
    title: 'Clara Lindström: balancing elite alpine athletics and Master in Management studies',
    category: 'Testimonials',
    summary:
      'How PBS’s tailored academic schedule allows high-performance student athletes to pursue a Master in Management without compromise.',
    body: [
      'Through PBS’s High-Performance Artist & Athlete Track, Master in Management student Clara Lindström combines European alpine competition with corporate finance coursework and remote faculty tutoring.',
    ],
  },
  {
    id: 'news-risk-management-2026',
    date: '14 April 2026',
    title: 'Climate & cyber risk management: surging demand across European boards',
    category: 'Expertise',
    summary:
      'New PBS faculty research examines why integrated risk officers have become the fastest-growing executive recruitment segment.',
    body: [
      'Drawing on interviews with 40 European Chief Risk Officers, PBS’s Finance and Data departments demonstrate how climate stress-testing and EU AI Act compliance are reshaping corporate governance roles.',
    ],
  },
];

export const DEAN_CONVERSATION = {
  deanName: 'Prof. Claire Delacroix',
  deanRole: 'Dean of PBS (Paris Business School)',
  episodeLabel: 'Episode 02',
  episodeTitle: 'Why is research at the heart of business schools?',
  description:
    'Dean’s Conversation features Prof. Claire Delacroix sharing her perspective on the major issues shaping higher education and the world of work today. Through this short, direct format, she discusses her vision, convictions, and insights into the evolving student experience.',
  keyTakeaways: [
    'Why empirical faculty research protects management education from short-lived corporate fads.',
    'How students inside PBS Paris Campus engage directly with our three research chairs from Year 1.',
    'Bridging financial valuation, algorithmic governance, and ecological transition inside one curriculum.',
  ],
};

