export type Domain = "data-ai" | "automation" | "product";

export const DOMAIN_LABELS: Record<Domain, string> = {
  "data-ai": "Data & AI",
  automation: "Automation",
  product: "Product Analytics",
};

export type Hue = "cyan" | "magenta" | "violet";

// Each career domain owns one instrument hue, used consistently everywhere
export const DOMAIN_HUE: Record<Domain, Hue> = {
  "data-ai": "magenta",
  automation: "cyan",
  product: "violet",
};

export const personal = {
  name: "Harish Prabhu",
  fullName: "Harish Prabhu P",
  location: "Singapore",
  email: "harishprabhu51@gmail.com",
  linkedin: "https://www.linkedin.com/in/harishprabhup",
  // TODO: replace with real GitHub profile URL when Harish provides it
  github: "https://github.com",
  resumePath: "/resume.pdf",
  eyebrow: "Singapore · Data & AI · Automation",
  thesis: "I turn messy operations into automated, measurable systems.",
  subline:
    "Analyst and builder across data, AI and automation. I have worked inside the operations I now automate: regulated casino finance, emergency hotlines, and a 50,000-interaction service floor.",
};

export const about = {
  paragraphs: [
    "I am a Data Science & Artificial Intelligence undergraduate at NTU on a work-study degree, and since 2020 I have worked inside operations most analysts only ever see through a dashboard: a national emergency hotline, the cage floor of Marina Bay Sands, and the customer service engine room of FairPrice Group.",
    "That path shaped how I work. At Tele-Centre I handled 10,000+ emergency calls at 98% accuracy and ranked first in performance. At Marina Bay Sands I processed S$500,000+ a day in a GRA-regulated environment where 100% reconciliation was the only acceptable number. At FairPrice Group I became the primary analytics resource across four business units, building NLP pipelines, automated workflows and dashboards that cut manual triage by 40% and lifted first reply SLA from 75% to 98%.",
    "The pattern in everything I build: find where an operation leaks time or accuracy, automate the fix, and put a number on the result. I am open to roles across data, AI, automation and product analytics.",
  ],
  facts: [
    { label: "Base", value: "Singapore" },
    {
      label: "Education",
      value: "BTech in Computing (Data Science & AI), NTU, 2025 - 2029",
    },
    { label: "Focus", value: "Data & AI · Automation · Product Analytics" },
    { label: "Toolkit core", value: "Python · SQL · BigQuery · BERT · UiPath" },
    { label: "Certifications", value: "10, from Google, IBM, Microsoft, Duke, NTU and Jeppesen" },
    { label: "Status", value: "Open to opportunities" },
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
};

export const projects: Project[] = [
  {
    title: "NLP Ticket Intelligence Pipeline",
    problem:
      "50,000+ monthly customer interactions were being categorized and routed by hand, slowly and inconsistently.",
    built:
      "An NLP classification pipeline using BERT models (BERTopic, transformer embeddings) feeding BigQuery for real-time categorization and automated routing.",
    result: "40% reduction in manual triage across the service floor.",
    domains: ["data-ai", "automation"],
    stack: ["BERTopic", "Transformers", "Python", "BigQuery"],
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
      "A dashboard suite on BigQuery, Tableau and Zendesk Explore, designed and deployed as the single source of customer experience truth for cross-functional stakeholders.",
    result: "Adopted across business units as self-serve analytics reporting.",
    domains: ["data-ai", "product"],
    stack: ["BigQuery", "Tableau", "Zendesk Explore", "SQL"],
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
    title: "RPA & GenAI Impact Program",
    problem:
      "Automation and chatbot initiatives were shipping without a framework to prove they moved customer experience metrics.",
    built:
      "Managed the UiPath RPA program end to end: requirements, delivery coordination and operational ROI frameworks, using LLM prompt engineering to evaluate chatbot automation impact on CX metrics.",
    result: "Defined the ROI measurement standard for the automation program.",
    domains: ["automation", "product"],
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
    title: "Service Analytics, Project-In-Charge",
    dates: "Nov 2025 - May 2026",
    summary:
      "Primary analytics resource across all FairPrice Group business units: retail stores, ecommerce, food services and Link.",
    bullets: [
      "Led end-to-end customer service analytics projects and daily Voice of Customer analysis for cross-functional stakeholders.",
      "Built the NLP ticket classification pipeline and automated response system featured above, and managed the Zendesk platform for 100+ agents.",
      "Worked with Product Managers in Agile Kanban as UAT lead, translating 100+ agent insights into data-backed feature briefs, user stories and BRDs.",
    ],
  },
  {
    company: "Marina Bay Sands",
    title: "Financial Operations Specialist",
    dates: "Nov 2024 - Oct 2025",
    summary:
      "High-value financial operations in a GRA-regulated environment.",
    bullets: [
      "Processed S$500,000+ daily in multi-currency transactions with 100% reconciliation accuracy.",
      "Performed fraud detection, AML/PMLTF compliance monitoring and customer due diligence under GRA licensing.",
      "Troubleshot system discrepancies and balanced transactions against computerized casino systems under strict security protocols.",
    ],
  },
  {
    company: "Tele-Centre Services",
    title: "Customer Care Data Analyst",
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
  specialization: "Data Science & Artificial Intelligence",
  institution: "Nanyang Technological University, Singapore",
  dates: "2025 - 2029",
};

export type SkillGroup = { label: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Data & Analytics",
    items: [
      "SQL",
      "BigQuery",
      "Python (Pandas, NumPy, scikit-learn)",
      "Tableau",
      "Power BI",
      "A/B Testing",
      "Funnel Analysis",
      "KPI Dashboard Design",
    ],
  },
  {
    label: "ML & NLP",
    items: [
      "BERT Models (BERTopic, Transformers)",
      "NLP Text Classification",
      "Feature Engineering",
      "LLM Prompt Engineering",
      "Real-time Data Processing",
    ],
  },
  {
    label: "Automation & Engineering",
    items: [
      "Google Apps Script",
      "Zendesk API",
      "UiPath RPA",
      "Workflow Design",
      "Git",
      "CI/CD Pipelines",
      "Terraform",
      "JavaScript",
      "Java",
    ],
  },
  {
    label: "Product & Delivery",
    items: [
      "Agile Kanban",
      "User Stories & Acceptance Criteria",
      "Backlog Management",
      "UAT Planning & Execution",
      "JIRA",
      "Azure DevOps",
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
  "Technical Support Fundamentals · Google",
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
