export type Domain = "data-ai" | "automation" | "product" | "engineering";

export const DOMAIN_LABELS: Record<Domain, string> = {
  "data-ai": "Data & AI",
  automation: "Automation",
  product: "Product Analytics",
  engineering: "Engineering",
};

export type Hue = "cyan" | "magenta" | "violet";

// Each career domain owns one instrument hue, used consistently everywhere
export const DOMAIN_HUE: Record<Domain, Hue> = {
  "data-ai": "magenta",
  automation: "cyan",
  product: "violet",
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
  eyebrow: "Singapore · Solutions Delivery · Data & AI",
  thesis: "I turn customers' messy operations into automated, measurable systems.",
  subline:
    "Analyst and builder across data, AI and automation. I have worked inside the operations I now automate: regulated casino finance, emergency hotlines, and a 50,000-interaction service floor.",
};

export const about = {
  paragraphs: [
    "I am an Artificial Intelligence undergraduate at NTU on a work-study degree, and since 2020 I have worked inside operations most analysts only ever see through a dashboard: a national emergency hotline, the cage floor of Marina Bay Sands, and the customer service engine room of FairPrice Group.",
    "That path shaped how I work. At Tele-Centre I handled 10,000+ emergency calls at 98% accuracy and ranked first in performance. At Marina Bay Sands I reconciled S$500,000+ a day in a GRA-regulated environment where the controls were not negotiable. At FairPrice Group I became the primary analytics resource across all four business units, and the customer service side's point of contact for four external vendors, shipping the automations and dashboards that cut manual triage by 40% and took first reply SLA from 75% to 98%.",
    "The pattern in everything I build: find where an operation leaks time or accuracy, automate the fix, and put a number on the result. I am now aiming at solutions engineering and forward-deployed roles, where that same pattern runs inside a customer's operation instead of my own.",
  ],
  facts: [
    { label: "Base", value: "Singapore" },
    {
      label: "Education",
      value: "BTech in Computing (Artificial Intelligence), NTU, 2025 - 2029",
    },
    { label: "Focus", value: "Data & AI · Automation · Product Analytics" },
    { label: "Toolkit core", value: "Python · SQL · BigQuery · BERT · UiPath" },
    { label: "Certifications", value: "10, from Google, Microsoft, IBM, Duke, NTU and Jeppesen" },
    {
      label: "Availability",
      value:
        "Weekday, full-time, now through 2029. NTU-structured 12-month industry attachment, Aug 2028 - Aug 2029, convertible to full-time after graduation.",
    },
  ],
};

// Hero instrument readouts. Every figure traces to verified work history.
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
    label: "Manual triage",
    unit: "%",
    from: 0,
    to: -40,
    detail: "via NLP routing",
    kind: "delta" as const,
    hue: "magenta" as const,
  },
  {
    label: "Interactions analyzed",
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

export const projects: Project[] = [
  {
    title: "Ticket Classification, Shipped Under Constraint",
    problem:
      "A migration to Salesforce broke the sidebar apps agents used to check customer accounts, and only a handful had Salesforce access. The backlog that built up over three months was too large to categorise by hand, across 50,000+ monthly interactions.",
    built:
      "Three stages. BERTopic and BERT topic analysis over historical ticket data in BigQuery to find the real category structure. A rule-based classification engine in Python encoding the rules that analysis produced, with checking constraints drawn from past tickets. Then a JavaScript port running on Google Apps Script, because that was what the environment permitted and I had no VS Code access. It categorises incoming tickets into a sheet the Link team works from.",
    result:
      "Manual triage down 40%. The sophisticated approach told me what the rules were; the rules are what shipped.",
    domains: ["data-ai", "automation"],
    stack: ["BERTopic", "Python", "JavaScript", "Google Apps Script", "BigQuery"],
  },
  {
    title: "Automated Response System",
    problem:
      "First replies to customers depended on agent availability, holding the first reply SLA at 75%.",
    built:
      "An automated response architecture on Google Apps Script, Zendesk APIs and webhook integrations: intelligent routing and auto-responses over 1,000+ daily tickets, with success metrics, UAT and post-launch measurement owned end to end.",
    result: "First reply SLA up from 75% to 98%, saving 20 person-hours daily.",
    domains: ["automation"],
    stack: ["Google Apps Script", "Zendesk API", "Webhooks"],
  },
  {
    title: "Customer Experience Dashboards",
    problem:
      "Four business units had no shared, self-serve view of CSAT, SLA compliance, contact rate or resolution trends.",
    built:
      "A dashboard suite built in Google Looker Studio on BigQuery data, plus Zendesk Explore, designed and deployed as the single source of customer experience truth for cross-functional stakeholders.",
    result: "Adopted across business units as self-serve analytics reporting.",
    domains: ["data-ai", "product"],
    stack: ["BigQuery", "Looker Studio", "Zendesk Explore", "SQL"],
  },
  {
    title: "Customer Journey Diagnostics",
    problem:
      "Customers were failing somewhere between channels, but nobody could say where or why at scale.",
    built:
      "Root cause analysis and funnel diagnostics over 50,000+ monthly interactions to locate journey failure points and quantify their cost.",
    result:
      "Findings set the chatbot, IVR and automation strategy across divisions.",
    domains: ["data-ai", "product"],
    stack: ["SQL", "BigQuery", "Funnel Analysis", "Python"],
  },
  {
    title: "BCRS Regulatory Integration",
    problem:
      "Singapore's national Beverage Container Return Scheme had a statutory launch date, and the deposit mechanics had to work inside a retail and ecommerce platform that already existed.",
    built:
      "A full map of the microservices and API calls the integration would touch, so delivery teams could see exactly where new scheme behaviour met existing platform behaviour before anything was committed to a sprint.",
    result:
      "Integration points and dependencies understood up front, against a deadline set by regulation rather than by us.",
    domains: ["engineering", "product"],
    stack: ["Microservices", "REST APIs", "Systems Integration", "Solution Design"],
  },
  {
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
    title: "This Site, and What Else Gets Built",
    problem:
      "Production work sets the stack. Personal projects are where I pick it, and where a tool gets tried before it goes anywhere that matters.",
    built:
      "This site, designed and deployed myself on Next.js, React and TypeScript. Alongside it, full-stack project work at NTU on Python, FastAPI and React, and running models locally with Ollama to understand what self-hosted inference actually costs.",
    result: "A habit of building end to end, with another project in progress.",
    domains: ["engineering", "data-ai"],
    stack: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "Ollama"],
  },
  {
    title: "RPA & GenAI Impact Program",
    problem:
      "Automation and chatbot initiatives were shipping without a framework to prove they moved customer experience metrics.",
    built:
      "Managed the UiPath RPA program end to end: requirements, delivery coordination and operational ROI frameworks, using LLM prompt engineering to evaluate chatbot automation impact on CX metrics.",
    result: "Defined the ROI measurement standard for the automation program.",
    domains: ["automation", "product", "engineering"],
    stack: ["UiPath", "LLM Prompt Engineering", "GenAI"],
  },
];

export type Role = {
  company: string;
  title: string;
  dates: string;
  summary: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    company: "FairPrice Group",
    title: "Executive - Service Analytics (Customer Service)",
    dates: "Nov 2025 - May 2026",
    summary:
      "Primary analytics resource across all FairPrice Group business units: retail stores, ecommerce, food services and Link.",
    bullets: [
      "Project-In-Charge across all four business units, framing problems with the business and translating them into specifications, user stories and acceptance criteria.",
      "Single point of contact for four external delivery partners on separate programmes: Viseo on the Salesforce Einstein chatbot, Deloitte, Nautilus on IVR telephony, and a remote developer. Led the IVR decision-tree redesign end to end with Nautilus, from decision through build to presenting the outcome.",
      "On the BCRS regulatory rollout: mapped the microservices and API call flow, led the customer service build on Zendesk with the RPA team, ran system integration testing, led UAT, and was one of three sign-offs on the go decision, signing for the customer service side.",
      "Built the classification engine and automated reply systems featured above, administered Zendesk for 100+ agents, and presented Voice of Customer daily through the Chinese New Year peak, to around 50 attendees.",
    ],
  },
  {
    company: "Marina Bay Sands",
    title: "Cage Cashier (High-Value Transactions, AML/CDD)",
    dates: "Nov 2024 - Oct 2025",
    summary:
      "High-value financial operations in a GRA-regulated environment.",
    bullets: [
      "Reconciled S$500,000+ daily in multi-currency transactions under GRA-regulated cage controls.",
      "Performed fraud detection, AML/PMLTF compliance monitoring and customer due diligence under GRA licensing.",
      "Troubleshot system discrepancies and balanced transactions against computerized casino systems under strict security protocols.",
    ],
  },
  {
    company: "Singapore Army",
    title: "Full-Time National Serviceman (NSF)",
    dates: "Sep 2022 - Sep 2024",
    summary: "Operational security duties, as guardroom second-in-command.",
    bullets: [
      "Supervised a team of 7 to 8 personnel on operational security duties.",
    ],
  },
  {
    company: "Tele-Centre Services",
    title: "Customer Care Officer (Data & Reporting)",
    dates: "Feb 2020 - Aug 2020",
    summary:
      "Emergency response operations for MOH Emergency and the 993 Ambulance Hotline.",
    bullets: [
      "Ranked 1st in performance while managing 10,000+ emergency calls at a 98% accuracy rate.",
      "Trained new staff with data-driven insights, improving team call resolution efficiency by 25%.",
    ],
  },
];

export const education = {
  degree: "BTech in Computing (Work-Study Degree)",
  specialization: "Artificial Intelligence",
  institution: "Nanyang Technological University, Singapore",
  dates: "2025 - 2029",
};

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "AI & LLM Engineering",
    items: [
      "Google Vertex AI",
      "Google Gemini",
      "LLM Prompt Engineering",
      "LangChain",
      "LlamaIndex",
      "Model Context Protocol (MCP)",
      "Ollama (local inference)",
    ],
  },
  {
    label: "Automation & Platform",
    items: [
      "Google Apps Script",
      "Zendesk API",
      "UiPath RPA",
      "Workflow Design",
      "Apigee (API Gateway)",
      "Git",
      "SAP (basic working knowledge)",
    ],
  },
  {
    label: "NLP & Text Classification",
    items: [
      "BERTopic topic modelling over real ticket data",
      "Rule-based classification engine design",
      "Data Pipelines & ETL",
    ],
  },
  {
    label: "Software & Full-Stack",
    items: [
      "Python, FastAPI",
      "React, Next.js",
      "TypeScript, JavaScript",
      "Java (NTU project work)",
      "PostgreSQL, SQL Server",
      "REST APIs, OpenAPI",
      "Webhook Integrations",
    ],
  },
  {
    label: "Data & Analytics",
    items: [
      "SQL",
      "BigQuery",
      "Python (Pandas, NumPy, scikit-learn)",
      "Looker Studio",
      "A/B Testing",
      "Funnel Analysis",
      "KPI Dashboard Design",
    ],
  },
  {
    label: "Product & Delivery",
    items: [
      "Agile Kanban",
      "User Stories & Acceptance Criteria",
      "Backlog Management",
      "SIT, UAT & Release Sign-Off",
      "Vendor & External Partner Management",
      "JIRA",
      "Confluence",
      "API Testing (Postman)",
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
