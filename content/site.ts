// Single source of truth for the site's copy.
//
// EVERY claim here maps to a bullet id in the resume-modifier repo at
// truth/resume_truth.json, and the framing follows CLAUDE.md in that repo.
// The spine this file mirrors is jobs/_general_ai_engineering/content.json,
// the public default resume served at /resume.pdf. Site, resume and LinkedIn
// must tell the same story: a recruiter who sees two of the three should not
// be able to find a contradiction.
//
// Direction (settled 2026-08-26): the FIRST NOUN IS THE ROLE, NOT THE
// TECHNOLOGY. Solutions and delivery lead; data, automation and AI are what
// the delivery is made of. Do not let a keyword pull this back toward ML.

export type Domain = "delivery" | "automation" | "data-ai" | "engineering";

// Mirrors the resume's skills-section headings so the two documents scan alike
export const DOMAIN_LABELS: Record<Domain, string> = {
  delivery: "Solution Delivery",
  automation: "Integration & Automation",
  "data-ai": "Data & AI",
  engineering: "Engineering",
};

export type Hue = "cyan" | "magenta" | "violet";

// Each career domain owns one instrument hue, used consistently everywhere
export const DOMAIN_HUE: Record<Domain, Hue> = {
  delivery: "cyan",
  automation: "violet",
  "data-ai": "magenta",
  engineering: "cyan",
};

export const personal = {
  name: "Harish Prabhu",
  fullName: "Harish Prabhu P",
  location: "Singapore",
  email: "harishprabhu51@gmail.com",
  linkedin: "https://www.linkedin.com/in/harishprabhup",
  github: "https://github.com/havzzzz",
  resumePath: "/resume.pdf",
  role: "Solutions & Delivery Engineer",
  eyebrow: "Singapore · Solution Delivery · Automation · Data & AI",
  thesis: "I turn customers' messy operations into automated, measurable systems.",
  subline:
    "Solutions and delivery engineer. I scope the problem with the business, build the fix inside whatever the environment allows, and then prove it worked. I have done that across four business units and opposite four external delivery partners, and I have worked inside the operations I now automate.",
};

export const about = {
  paragraphs: [
    // fp-01, edu-01. Operations context: tc-01, mbs-01.
    "I am a solutions and delivery engineer, and an Artificial Intelligence undergraduate at NTU on a work-study degree. Since 2020 I have worked inside operations most analysts only ever see through a dashboard: a national emergency hotline, the cage floor of Marina Bay Sands, and the customer service engine room of FairPrice Group.",
    // fp-21, fp-01, fp-22, fp-25, fp-20, fp-26, fp-28.
    "At FairPrice Group I joined as maternity cover for a senior executive, learned the domain across every business unit inside a week, and took over live responsibilities immediately. I became Project-In-Charge across all four business units and the customer service side's single point of contact opposite four external delivery partners: Viseo on the Salesforce Einstein chatbot, Deloitte, Nautilus on IVR telephony, and a remote developer. On the Beverage Container Return Scheme, Singapore's national deposit-return programme, I mapped the microservices and API flow, led the Zendesk build with the RPA team, ran system integration testing, led UAT, and was one of three sign-offs on the go decision, signing for the customer service side.",
    // fp-07, fp-04, fp-30, mbs-01, tc-01.
    "The part that is harder to find is that I also built the fixes myself when the environment allowed it. I had no official VS Code access, so the ticket classifier shipped as JavaScript on Google Apps Script. First reply SLA went from 75% to 98%, manual triage fell 40%, and 20 person-hours a day came back. Before FairPrice: S$500,000+ a day reconciled under AML and customer due diligence obligations at Marina Bay Sands, and 10,000+ emergency calls handled at 98% accuracy, ranked first in performance, at Tele-Centre.",
    // Direction statement. CLAUDE.md target path.
    "Scoping with the customer and then building the fix is what forward deployed and solutions work actually is, and it is the combination I keep coming back to. It is where I am pointed: solutions engineering, technical delivery and implementation work, run inside a customer's operation rather than my own.",
  ],
  facts: [
    { label: "Base", value: "Singapore" },
    {
      label: "Education",
      value: "BTech in Computing (Artificial Intelligence), NTU, 2025 - 2029",
    },
    {
      label: "Focus",
      value: "Solution delivery · Systems integration & automation · Data & AI",
    },
    {
      label: "Toolkit core",
      value: "Python · SQL · BigQuery · Zendesk APIs · Google Apps Script",
    },
    { label: "Certifications", value: "10, from Google, Microsoft, IBM, Duke, NTU and Jeppesen" },
    {
      label: "Availability",
      value:
        "Weekday, full-time, now through 2029. NTU-structured 12-month industry attachment, Aug 2028 - Aug 2029, convertible to full-time after graduation.",
    },
  ],
};

// Hero instrument readouts. Every figure traces to a verified truth bullet.
export const readouts = [
  {
    label: "First reply SLA",
    unit: "%",
    from: 75,
    to: 98,
    detail: "after automation",
    kind: "gauge" as const,
    hue: "cyan" as const,
  },
  {
    // fp-07. The production classifier is RULE-BASED and does not route.
    // "routing" must never attach to this figure.
    label: "Manual triage",
    unit: "%",
    from: 0,
    to: -40,
    detail: "rule-based classifier",
    kind: "delta" as const,
    hue: "magenta" as const,
  },
  {
    label: "Interactions in scope",
    unit: "/mo",
    from: 0,
    to: 50000,
    detail: "across 4 business units",
    kind: "count" as const,
    hue: "magenta" as const,
  },
  {
    label: "Person-hours saved",
    unit: "/day",
    from: 0,
    to: 20,
    detail: "automated workflows",
    kind: "count" as const,
    hue: "violet" as const,
  },
];

export type Project = {
  title: string;
  problem: string;
  built: string;
  result: string;
  domains: Domain[];
  stack: string[];
  repo?: string;
  demo?: string;
  video?: string;
};

// Ordered deliberately: delivery first, then the systems built under
// constraint, then analytics, then engineering. The first three cards are
// what a delivery lead reads before deciding whether to keep scrolling.
export const projects: Project[] = [
  {
    // fp-20, fp-26, fp-28
    title: "A National Deposit Scheme, Delivered",
    problem:
      "Singapore's Beverage Container Return Scheme added a statutory deposit to pre-packaged drinks with a launch date set by regulation. The mechanics had to work inside a retail and ecommerce platform that already existed, and inside a customer service operation that had to answer for it on day one.",
    built:
      "I mapped the full flow of microservices and API calls the integration would touch, so delivery teams could see where new scheme behaviour met existing platform behaviour before anything entered a sprint. From March 2026 I led the customer service side: planning and coordinating with product managers, delivering the Zendesk and macro build alongside the RPA team, including how the deposit calculations were handled.",
    result:
      "Ran system integration testing, led UAT, and was one of three sign-offs on the go decision, signing for the customer service side. Not UAT coordination: accountability for whether it shipped.",
    domains: ["delivery", "engineering"],
    stack: ["Microservices", "REST APIs", "Zendesk", "SIT & UAT", "Solution Design"],
  },
  {
    // fp-22, fp-25, fp-23, fp-24, fp-27
    title: "Four Vendors, One Point of Contact",
    problem:
      "Four external parties were building into the same customer service operation on separate programmes, and the customer service side needed one person accountable for all of them.",
    built:
      "I was that point of contact: Viseo on the Salesforce Einstein chatbot, Deloitte on the Link team, Nautilus on IVR telephony, and a remote freelance developer whose Zendesk backend scripting I assigned and directed. I led the IVR decision-tree redesign with Nautilus end to end, from the decision through implementation to presenting the outcome, including prioritising callers with an order placed in the previous 24 hours. I ran UAT for Einstein chatbot V2 and drove decision-tree changes with the ML team.",
    result:
      "I requested and reviewed chatbot performance data from Viseo and owned the Salesforce dashboard they supplied, holding the vendor to account on measured performance rather than on assurances.",
    domains: ["delivery"],
    stack: ["Vendor Management", "IVR Design", "UAT", "Zendesk", "Requirements"],
  },
  {
    // fp-29, fp-07
    title: "Ticket Classification, Shipped Under Constraint",
    problem:
      "A company-wide migration to Salesforce broke the Zendesk sidebar apps agents used to check Link customer accounts, and only a handful of agents had Salesforce access. The backlog that built up from November to January was too large to categorise by hand, across 50,000+ monthly interactions.",
    built:
      "Three stages. BERTopic and BERT topic analysis over historical Zendesk ticket data to surface the real category structure. A rule-based classification engine in Python encoding the rules and checking constraints that analysis produced. Then a JavaScript port running on Google Apps Script, because that was what the environment permitted and I had no official VS Code access. It categorises incoming tickets into a Google Sheet the Link team works from.",
    result:
      "Manual triage down 40%. I also presented a categorised overview of the backlog to director-level executives. The sophisticated approach told me what the rules were; the rules are what shipped.",
    domains: ["data-ai", "automation"],
    stack: ["BERTopic", "Python", "JavaScript", "Google Apps Script", "BigQuery"],
  },
  {
    // fp-04, fp-08, fp-30, fp-38
    title: "First Response, Engineered Against the SLA",
    problem:
      "First replies to customers depended on whoever was available, holding first reply SLA at 75%. The department's commitment was 24 hours, and the breaches that hurt were the ones that fell outside working hours.",
    built:
      "A per-business-unit automated response system on Google Apps Script, Zendesk APIs and webhook integrations, processing 1,000+ daily tickets. It runs every 15 minutes, replies within working hours, and guarantees a first touch by the 23-hour mark unless an agent has already replied: a deliberate one-hour margin ahead of a 24-hour SLA rather than a race against it. I set the success metrics before launch, led UAT, and measured the impact after.",
    result:
      "First reply SLA up from 75% to 98%, 20 person-hours saved daily. CSAT rose from 86% to 92% over the same period as the wider automation programme.",
    domains: ["automation", "delivery"],
    stack: ["Google Apps Script", "Zendesk API", "Webhooks", "JavaScript"],
  },
  {
    // fp-15, fp-09, fp-33, fp-32, fp-34, fp-31
    title: "Zendesk as an Internal Platform",
    problem:
      "Zendesk served 100+ agents across four business units, and the work around it was manual: access requests chased by hand, tickets landing on the wrong desk, and Voice of Customer decks rebuilt every day by looking tickets up one at a time.",
    built:
      "I was subject matter expert (SME) for Zendesk and administrator of the company's CRM platform: password resets, macro management, and automation flows for the ticket lifecycle and for routing tickets to the correct party. I built a Zendesk access request workflow where staff submit a form and ticket creation triggers an automated response, and automated Voice of Customer slide generation against the Zendesk API, pulling target categories into Google Sheets and generating slides from a checkbox-driven function.",
    result:
      "The slide pipeline logs which ticket was used and when, so anyone can trace a slide back to its source. Nobody asked for the audit trail; a tool people rely on should be able to show its work.",
    domains: ["automation", "delivery"],
    stack: ["Zendesk Admin", "Zendesk API", "Google Apps Script", "Google Sheets"],
  },
  {
    // fp-02, fp-03, fp-35, fp-36
    title: "Customer Experience Dashboards and Diagnostics",
    problem:
      "Four business units had no shared, self-serve view of CSAT, SLA compliance, contact rate or resolution trends, and customers were failing somewhere between channels with nobody able to say where at scale.",
    built:
      "A dashboard suite in Google Looker Studio on BigQuery data, plus Zendesk Explore, deployed as the single source of customer experience truth for cross-functional stakeholders. Alongside it, root cause analysis and funnel diagnostics over 50,000+ monthly interactions, and pipeline-integrity review on the BigQuery feeds coming out of Zendesk.",
    result:
      "Adopted across business units as self-serve reporting. The diagnostics set the chatbot, IVR and automation strategy across divisions.",
    domains: ["data-ai"],
    stack: ["BigQuery", "Looker Studio", "Zendesk Explore", "SQL", "Python"],
  },
  {
    // fp-06, fp-27
    title: "RPA and GenAI Impact Programme",
    problem:
      "Automation and chatbot initiatives were shipping without a framework to prove they moved customer experience metrics, which meant nobody could say what deserved continued funding.",
    built:
      "I managed the UiPath RPA programme end to end: requirements, delivery coordination with the vendor team who built the bots, and operational ROI measurement frameworks. I used LLM prompt engineering to evaluate chatbot automation impact against CX metrics.",
    result:
      "Defined the ROI measurement standard the automation programme was funded against.",
    domains: ["automation", "delivery"],
    stack: ["UiPath", "LLM Prompt Engineering", "GenAI", "ROI Frameworks"],
  },
  {
    // makanos_backend_project, projects_pool.makanos
    title: "MakanOS: Hawker Centre Discovery Platform",
    problem:
      "Singapore's hawker centre data sits across separate government sources with no shared interface to search or filter against. A five-person team project for an NTU software engineering module.",
    built:
      "I owned the backend and data layer: a FastAPI REST API on PostgreSQL with PostGIS for geospatial queries, an ETL pipeline ingesting data.gov.sg open data with idempotent upserts and chunked batch loading, Alembic schema migrations and JWT authentication. I also authored the ERD, data dictionary and architecture diagrams the team built against. The frontend was my teammates' work.",
    result:
      "A working full-stack platform serving public datasets behind one geospatial interface.",
    domains: ["engineering", "data-ai"],
    stack: ["FastAPI", "PostgreSQL/PostGIS", "SQLAlchemy", "Alembic", "JWT Auth", "Python"],
  },
  {
    // sc2207_database_project, projects_pool.globallogistics
    title: "GlobalLogistics: Warehouse and Supply Chain Schema",
    problem:
      "A seven-person NTU databases project needed a warehouse and supply chain schema designed from the requirements up, rather than queried from something that already existed.",
    built:
      "I coordinated the schema design within the team, drafted the Client, Purchase Order, Shipment and Employee tables, normalised the functional dependencies, drafted the ERD specification in Chen notation, and wrote the SQL DDL for table creation.",
    result:
      "27 tables in third normal form, with analytical SQL across CTEs, window functions and relational division. The one piece of my work that proves schema design rather than warehouse consumption.",
    domains: ["engineering", "data-ai"],
    stack: ["MS SQL Server", "3NF Modelling", "ERD Design", "Analytical SQL"],
  },
  {
    // portfolio_site, side_projects, local_llm_deployment
    title: "This Site, and What Else Gets Built",
    problem:
      "Production work sets the stack. Personal projects are where I pick it, and where a tool gets tried before it goes anywhere that matters.",
    built:
      "This site, designed and deployed myself on Next.js, React and TypeScript. Alongside it, full-stack project work at NTU on Python, FastAPI and React, and running models locally with Ollama to understand what self-hosted inference actually costs.",
    result: "A habit of building end to end, with another project in progress.",
    domains: ["engineering", "data-ai"],
    stack: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "Ollama"],
  },
];

export type Role = {
  company: string;
  title: string;
  dates: string;
  summary: string;
  bullets: string[];
};

// Titles are the OFFICIAL titles from truth. They do not flex, on any surface,
// for any employer. Scope and seniority are carried by the parenthetical
// clarifier and by the bullets, never by substituting a different title.
export const experience: Role[] = [
  {
    company: "FairPrice Group",
    title: "Executive - Service Analytics (Customer Service)",
    dates: "Nov 2025 - May 2026",
    // fp-21
    summary:
      "Joined as maternity cover for a senior executive, learned the domain across every business unit inside a week, and took over live responsibilities immediately. Primary analytics resource and Project-In-Charge across retail stores, ecommerce, food services and Link.",
    bullets: [
      // fp-01, fp-05, fp-16, fp-19
      "Project-In-Charge across all four business units, framing problems with the business and translating them into specifications, user stories and acceptance criteria, and working alongside product managers on feature changes shipped to the customer support website.",
      // fp-22, fp-25, fp-23
      "Single point of contact for four external delivery partners on separate programmes: Viseo on the Salesforce Einstein chatbot, Deloitte, Nautilus on IVR telephony, and a remote developer. Led the IVR decision-tree redesign end to end with Nautilus, from decision through build to presenting the outcome.",
      // fp-20, fp-26, fp-28
      "On the BCRS regulatory rollout: mapped the microservices and API call flow, led the customer service build on Zendesk with the RPA team, ran system integration testing, led UAT, and was one of three sign-offs on the go decision, signing for the customer service side.",
      // fp-07, fp-30, fp-04
      "Built the classification engine and the automated reply systems featured above, in Apps Script because that was what the environment permitted, taking first reply SLA from 75% to 98% and cutting manual triage 40%.",
      // fp-15, fp-09, fp-33
      "Subject matter expert (SME) for Zendesk and administrator of the company's CRM platform for 100+ agents, owning configuration, macros, automation flows and workflow design.",
      // fp-37, fp-29
      "Presented Voice of Customer daily through the Chinese New Year peak to around 50 attendees, and presented a categorised overview of the Salesforce-migration ticket backlog to director-level executives.",
    ],
  },
  {
    company: "Marina Bay Sands",
    title: "Cage Cashier (High-Value Transactions, AML/CDD)",
    dates: "Nov 2024 - Oct 2025",
    summary: "High-value financial operations in a GRA-regulated environment.",
    bullets: [
      // mbs-01
      "Reconciled S$500,000+ daily in multi-currency transactions under GRA-regulated cage controls.",
      // mbs-01, mbs-04
      "Performed fraud detection, AML/PMLTF compliance monitoring and customer due diligence under GRA licensing, and completed formal PMLTF training as part of regulated cage operations.",
      // mbs-02, mbs-03
      "Troubleshot system discrepancies, balanced transactions against computerized casino systems under strict security protocols, and supported internal and external audit activities.",
    ],
  },
  {
    company: "Singapore Army",
    title: "Full-Time National Serviceman (NSF)",
    dates: "Sep 2022 - Sep 2024",
    summary: "Operational security duties, as guardroom second-in-command.",
    bullets: [
      // ns-03
      "Supervised a team of 8 personnel on operational security duties.",
    ],
  },
  {
    company: "Tele-Centre Services",
    title: "Customer Care Officer (Data & Reporting)",
    dates: "Feb 2020 - Aug 2020",
    summary:
      "Emergency response operations for MOH Emergency and the 993 Ambulance Hotline.",
    bullets: [
      // tc-01
      "Ranked 1st in performance while managing 10,000+ emergency calls at a 98% accuracy rate.",
      // tc-02
      "Trained new staff with data-driven insights, improving team call resolution efficiency by 25%.",
    ],
  },
];

export const education = {
  degree: "BTech in Computing (Work-Study Degree)",
  // AI ONLY. Never "Data Science and Artificial Intelligence", "Data Science & AI" or "DSAI".
  specialization: "Artificial Intelligence",
  institution: "Nanyang Technological University, Singapore",
  dates: "2025 - 2029",
};

export type SkillGroup = { label: string; items: string[] };

// Order mirrors the resume: delivery, then integration and automation, then
// data. Every line here must be answerable with "which project or role backs
// this?". Anything that is not, comes off.
export const skillGroups: SkillGroup[] = [
  {
    label: "Solution Delivery",
    items: [
      "Vendor & External Partner Management",
      "Stakeholder Engagement & Requirements Framing",
      "User Stories & Acceptance Criteria",
      "Regulatory & Compliance Delivery",
      "Agile Kanban, Backlog Management",
      "SIT, UAT & Release Sign-Off",
      "Executive & Large-Audience Presentation",
      "JIRA, Confluence",
    ],
  },
  {
    label: "Systems Integration & Automation",
    items: [
      "Workflow Automation Design",
      "REST APIs, OpenAPI, Webhook Integrations",
      "Microservices & Data Flow Mapping",
      "Google Apps Script",
      "Zendesk (CRM Admin, Subject Matter Expert (SME)), Salesforce",
      "Apigee (API Gateway)",
      "UiPath RPA (programme management)",
      "API Testing (Postman), Test Plan & Case Design",
    ],
  },
  {
    label: "Data & Analytics",
    items: [
      "SQL",
      "Python (Pandas, NumPy, scikit-learn)",
      "BigQuery",
      "Google Looker Studio, Zendesk Explore",
      "Root Cause & Funnel Analysis",
      "KPI Dashboard Design",
      "A/B Testing, Retention Metrics",
      "Tableau, Power BI (working knowledge)",
    ],
  },
  {
    label: "AI & LLM (Working Knowledge)",
    items: [
      "Google Vertex AI",
      "Google Gemini",
      "LLM Prompt Engineering",
      "LangChain, LlamaIndex",
      "Model Context Protocol (MCP)",
      "Ollama (local inference)",
      "BERTopic & BERT topic analysis",
      "Rule-based classification engine design",
    ],
  },
  {
    label: "Software & Full-Stack",
    items: [
      "Python, FastAPI",
      "React, Next.js",
      "TypeScript, JavaScript",
      "Java (NTU project work)",
      "PostgreSQL with PostGIS, SQL Server",
      "SQLAlchemy, Alembic",
      "Data Pipelines & ETL",
      "Git",
    ],
  },
  {
    label: "Platform & Enterprise",
    items: [
      "Google Cloud Platform",
      "Azure",
      "SAP (basic working knowledge)",
      "Zendesk Platform Administration",
      "Windows & Linux troubleshooting",
      "MS Excel, MS Office",
    ],
  },
];

export const certifications = [
  "Google AI Essentials",
  "Large Language Models · Google Cloud",
  "Data Science Methodology · IBM",
  "Certified Full Stack Developer · NTU",
  "Azure Cloud Services · Microsoft",
  "Data Science Math Skills · Duke",
  "Behavioral Finance · Duke",
  "Basic Aerospace Knowledge · Jeppesen",
  "Google IT Support Professional Certificate",
  "Digital Marketing & Ecommerce · Google",
];

export const beyond = [
  {
    label: "Aviation",
    line: "Self-studied ATPL theory: flight planning, aircraft performance, meteorology and navigation. Jeppesen-certified in basic aerospace knowledge, and a home flight simulation setup flown with real-world procedures.",
  },
  {
    label: "Music Production",
    line: "Composes and produces cinematic and neoclassical pieces.",
  },
  {
    label: "NeuroAI",
    line: "Reading and following research at the intersection of neuroscience and machine learning.",
  },
  {
    label: "Racing",
    line: "Motorsport follower with an eye on race craft and telemetry.",
  },
];
