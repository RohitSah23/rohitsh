import swinguilogo from "../assets/UI.webp";
import lagomchainLogo from "../assets/lagomchain.jpeg";
import singhcoinLogo from "../assets/singhcoin.png";
import antierLogo from "../assets/antier.png";
import arbanciaLogo from "../assets/arbancia.png";
import bitnauticLogo from "../assets/bitnautic.jpeg";
import slayLogo from "../assets/slay.png";
import sargLogo from "../assets/sarg-logo.png";
import xIcon from "../assets/x.svg";
import linkedIcon from "../assets/linked.svg";
import discordIcon from "../assets/discord.svg";
import githubIcon from "../assets/github.svg";
import emailIcon from "../assets/email.svg";
import ethersLogo from "../assets/ethers.svg";
import openaiLogo from "../assets/ai/openai.svg";
import claudeLogo from "../assets/ai/claude.svg";
import geminiLogo from "../assets/ai/googlegemini.svg";
import perplexityLogo from "../assets/ai/perplexity.svg";
import huggingfaceLogo from "../assets/ai/huggingface.svg";
import langchainLogo from "../assets/ai/langchain.svg";
import n8nLogo from "../assets/ai/n8n.svg";
import elevenlabsLogo from "../assets/ai/elevenlabs.svg";
import fluxLogo from "../assets/ai/flux.svg";
import sunoLogo from "../assets/ai/suno.svg";
import replicateLogo from "../assets/ai/replicate.svg";
import ollamaLogo from "../assets/ai/ollama.svg";
import mistralLogo from "../assets/ai/mistralai.svg";
import resumePDF from "../assets/Rohit_Kumar_CV.pdf";

export { resumePDF };

export function toneStyle(tone) {
  if (!tone) return {};
  return {
    "--t-bg": tone.bg,
    "--t-fg": tone.fg,
    "--t-mute": tone.mute,
    "--t-acc": tone.acc,
    "--t-line": `${tone.fg}26`,
  };
}

export const SITE_METADATA = {
  name: "KR ROHIT",
  role: "AI Strategist @ Loud Labs · Founder @ Sarg Studio",
  location: "New Delhi, India · Remote",
  url: "https://www.rohitisog.com",
  description:
    "Zero-to-one builder across web products, Web3, and Generative AI. AI Strategist at Loud Labs; Full Stack Developer shipping React, Next.js, TypeScript, NestJS, and agentic workflows.",
  eyebrow: "AI Strategy · Full Stack · Web3",
};

/** First-person bio copy — single source for hero, about, and profile card. */
export const SITE_BIO = {
  intro:
    "I'm a builder focused on taking ideas from zero to one across web products, Web3 protocols, and applied Generative AI systems.",
  loudLabsBody:
    "I work with the Founder to architect the AI content and automation engine from the ground up—shipping automated AI pipelines for ideation, scripting, visuals, video, and publishing, alongside custom agentic workflows and internal tooling.",
  loudLabsUrl: "https://loudlabs.in/",
  engineering:
    "As a Full Stack Developer with 1.5+ years of experience, I've built and shipped production applications using React, Next.js, TypeScript, NestJS, MongoDB, and Solidity across Social, SaaS, RWA, and DeFi ecosystems.",
  closer:
    "Focused on fast execution, clean architecture, and building tools people actually use.",
  tagline: "Web products · Web3 · applied Generative AI",
  profileHeading:
    "Full-Stack AI Engineer passionate about Content Creation, Design & Technology.",
  heroLead:
    "AI Strategist at Loud Labs and Full Stack Developer—shipping agentic AI systems and production React, Next.js, TypeScript, and Web3 products.",
};

export const TONES = {
  chalk: { bg: "#f4f4f1", fg: "#17171a", mute: "#5d5d66", acc: "#2a35c4" },
  about: { bg: "#f6efdf", fg: "#2c2408", mute: "#675b2c", acc: "#9a3412" },
  projects: { bg: "#f3f5f8", fg: "#14192d", mute: "#4b5570", acc: "#2a35c4" },
  experience: { bg: "#f5f3ee", fg: "#241f17", mute: "#655c4d", acc: "#b45309" },
  skills: { bg: "#edf5f2", fg: "#11261f", mute: "#47645b", acc: "#0f766e" },
  education: { bg: "#f7f3f9", fg: "#241235", mute: "#684d80", acc: "#7c3aed" },
  closing: { bg: "#141738", fg: "#eceaf6", mute: "#a7a8c9", acc: "#f3a73b" },
};

export const SOCIAL_LINKS = [
  {
    id: "x",
    name: "X (Twitter)",
    handle: "@rohitisog",
    icon: xIcon,
    link: "https://x.com/rohitisog",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    handle: "in/rohitisog",
    icon: linkedIcon,
    link: "https://www.linkedin.com/in/rohitisog/",
  },
  {
    id: "github",
    name: "GitHub",
    handle: "RohitSah23",
    icon: githubIcon,
    link: "https://www.github.com/RohitSah23",
  },
  {
    id: "discord",
    name: "Discord",
    handle: "RohitSah23",
    icon: discordIcon,
    link: "https://discord.com/users/RohitSah23",
  },
  {
    id: "email",
    name: "Email",
    handle: "rohitisog@gmail.com",
    icon: emailIcon,
    link: "mailto:rohitisog@gmail.com",
  },
];

export const KEY_METRICS = [
  { value: "25K", label: "Sarg followers", sub: "@sarg.studio" },
  { value: "10+", label: "Products shipped", sub: "Web, Web3 & AI" },
  { value: "2", label: "Active roles", sub: "Founder & AI strategist" },
  { value: "2024", label: "Sarg Studio", sub: "Founded · still building" },
];

/** @sarg.studio — keep in sync with Sarg landing hero card */
export const SARG_STUDIO_SOCIAL = {
  handle: "sarg.studio",
  profileName: "Sarg Studio",
  bio: "Create it. Brand it. Grow it. 🔥",
  posts: "21",
  followers: "25K",
  following: "21",
  websiteUrl: "https://sarg.live",
  websiteLabel: "sarg.live",
  instagramUrl: "https://instagram.com/sarg.studio",
  logo: sargLogo,
};

/** Homepage selected work + hero spotlight (same five). */
export const SELECTED_WORK_IDS = [
  "swing-ui",
  "lagom-chain",
  "sarg-live",
  "slay-space",
  "bitnautic",
];

const SPOTLIGHT_PROJECTS_ALL = [
  {
    id: "swing-ui",
    title: "Swing UI",
    tagline: "Tailwind CSS Component Library",
    category: "Developer Tooling & UI",
    description:
      "A modern Tailwind CSS component library with 30+ accessible components, developer-first APIs, and production-ready design tokens.",
    metrics: "30+ Components · Open Source",
    image: swinguilogo,
    link: "https://swingui.com",
    repo: "https://github.com/RohitSah23/SwingUI",
    tone: { bg: "#e9edf9", fg: "#121b4a", mute: "#475283", acc: "#2a35c4" },
  },
  {
    id: "lagom-chain",
    title: "LagomChain",
    tagline: "EVM Layer 1 Blockchain for RWA",
    category: "Blockchain & Infrastructure",
    description:
      "An EVM-compatible Layer 1 blockchain platform for real-world asset tokenization with enterprise Web3 security and interactive developer documentation.",
    metrics: "Enterprise RWA · Web3 L1",
    image: lagomchainLogo,
    link: "https://lagomchain.com/",
    repo: null,
    tone: { bg: "#f8f3e5", fg: "#332408", mute: "#746034", acc: "#c97e14" },
  },
  {
    id: "sarg-live",
    title: "Sarg.live",
    tagline: "Studio platform & product hub",
    category: "Product & Studio",
    description:
      "Studio landing and product surface for Sarg—design, development, and shipped web experiences in one cohesive brand system.",
    metrics: "Studio · Product",
    image: sargLogo,
    link: "https://sarg.live",
    repo: null,
    tone: { bg: "#eef0e8", fg: "#0b0d0c", mute: "#4f5547", acc: "#6d4aff" },
  },
  {
    id: "slay-space",
    title: "Slay Space",
    tagline: "Web3 creator economy",
    category: "Web3 Platform",
    description:
      "Interactive engagement economy portal with decentralized creator profiles, wallet verification, and micro-reward tracking.",
    metrics: "Creator economy · Web3",
    image: slayLogo,
    link: "https://slayspace.io/",
    repo: null,
    tone: { bg: "#f3f5f8", fg: "#14192d", mute: "#4b5570", acc: "#2a35c4" },
  },
  {
    id: "bitnautic",
    title: "Bitnautic",
    tagline: "Maritime logistics portal",
    category: "SaaS Dashboard",
    description:
      "Decentralized maritime cargo portal with vessel tracking, shipment manifests, and dispatch workflows.",
    metrics: "Logistics · Dashboard",
    image: bitnauticLogo,
    link: "https://bitnautic.vercel.app/",
    repo: null,
    tone: { bg: "#edf5f2", fg: "#11261f", mute: "#47645b", acc: "#0f766e" },
  },
  {
    id: "arbancia",
    title: "Arbancia",
    tagline: "Luxury Brand Experience",
    category: "Showcase & Branding",
    description:
      "A luxury digital showcase engineered with high-precision typography grids and asset loading pipelines, achieving 40% faster initial paint.",
    metrics: "40% Faster Load · Bespoke Grid",
    image: arbanciaLogo,
    link: "https://arbancia.com",
    repo: null,
    tone: { bg: "#eaf3ea", fg: "#0d2916", mute: "#40644b", acc: "#1b8743" },
  },
  {
    id: "mintellect",
    title: "Mintellect",
    tagline: "Patent Tokenization with IP NFTs",
    category: "Web3 Intellectual Property",
    description:
      "A secure platform enabling inventors to tokenize patents into IP NFTs, facilitating fractional licensing, transparent verification, and decentralized trading.",
    metrics: "IP NFT Protocol · Fractionalization",
    image: null,
    link: "https://mintellect-ten.vercel.app/",
    repo: null,
    tone: { bg: "#efeaf9", fg: "#23114d", mute: "#584485", acc: "#6a2cc9" },
  },
  {
    id: "uthaan-rwa",
    title: "Uthaan RWA",
    tagline: "Real-World Asset Fractionalization",
    category: "DeFi & Tokenization",
    description:
      "Fractional real-world asset investment dashboard with live yield distribution monitoring, Web3 wallet connect, and automated smart contract purchases.",
    metrics: "Direct Wallet Auth · Yield Dash",
    image: null,
    link: "https://uthaan-rwa.vercel.app/",
    repo: null,
    tone: { bg: "#f9ede8", fg: "#3c170f", mute: "#7c4a40", acc: "#c44327" },
  },
];

export const SPOTLIGHT_PROJECTS = SELECTED_WORK_IDS.map((id) =>
  SPOTLIGHT_PROJECTS_ALL.find((p) => p.id === id)
).filter(Boolean);

export const ALL_PROJECTS = [
  {
    id: "swing-ui",
    name: "Swing UI",
    category: "featured",
    badge: "Open Source",
    image: swinguilogo,
    live: "https://swingui.com",
    repo: "https://github.com/RohitSah23/SwingUI",
    tags: ["React", "Tailwind CSS", "TypeScript", "Component Library", "Radix UI"],
    description:
      "Engineered a production-ready Tailwind CSS component system featuring 30+ accessible components, composable APIs, keyboard navigation, and theme hooks.",
  },
  {
    id: "lagom-chain",
    name: "Lagom Chain",
    category: "landing",
    badge: "Production Client",
    image: lagomchainLogo,
    live: "https://lagomchain.com/",
    repo: null,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Web3", "RWA Architecture"],
    description:
      "Architected the flagship website for LagomChain Layer 1, featuring interactive ecosystem guides, tokenization workflow explanations, and ultra-smooth responsive layout.",
  },
  {
    id: "sarg-live",
    name: "Sarg.live",
    category: "featured",
    badge: "Studio Platform",
    image: sargLogo,
    live: "https://sarg.live",
    repo: null,
    tags: ["React", "Next.js", "Tailwind CSS", "Product", "Studio"],
    description:
      "Studio platform and marketing surface for Sarg—unified branding, product storytelling, and high-conversion landing experiences.",
  },
  {
    id: "arbancia",
    name: "Arbancia",
    category: "featured",
    badge: "Client Brand",
    image: arbanciaLogo,
    live: "https://arbancia.com",
    repo: null,
    tags: ["React", "Performance Tuning", "Tailwind CSS", "Typography"],
    description:
      "Designed and developed a luxury branding showcase page. Cut initial layout render times by 40% through strict asset bundling and custom typography hierarchies.",
  },
  {
    id: "slay-space",
    name: "Slay Space",
    category: "landing",
    badge: "Web3 Platform",
    image: slayLogo,
    live: "https://slayspace.io/",
    repo: null,
    tags: ["React", "Web3", "Tailwind CSS", "Creator Economy"],
    description:
      "Crafted an interactive engagement economy portal with decentralized creator profiles, wallet verification, and instant micro-reward tracking.",
  },
  {
    id: "mintellect-app",
    name: "Mintellect Platform",
    category: "platform",
    badge: "DeFi / IP NFTs",
    image: null,
    live: "https://mintellect-ten.vercel.app/",
    repo: null,
    tags: ["React", "Ethers.js", "Smart Contracts", "IP NFTs", "Tailwind CSS"],
    description:
      "Co-engineered an on-chain patent tokenization interface using ERC-721/1155 IP NFTs to facilitate transparent global intellectual property licensing.",
  },
  {
    id: "uthaan-rwa",
    name: "Uthaan RWA",
    category: "platform",
    badge: "RWA Dashboard",
    image: null,
    live: "https://uthaan-rwa.vercel.app/",
    repo: null,
    tags: ["Next.js", "Web3", "Tailwind CSS", "REST APIs", "Yield Tracker"],
    description:
      "Engineered a fractional Real-World Asset tokenization dashboard enabling direct investor onboarding, yield analytics, and multi-wallet transactions.",
  },
  {
    id: "bitnautic",
    name: "Bitnautic Logistics",
    category: "platform",
    badge: "Logistics Portal",
    image: bitnauticLogo,
    live: "https://bitnautic.vercel.app/",
    repo: null,
    tags: ["React", "Vite", "Tailwind CSS", "Dashboard"],
    description:
      "Decentralized maritime cargo portal featuring vessel tracking telemetry, interactive shipment manifests, and cargo dispatch workflows.",
  },
  {
    id: "mintellect-org",
    name: "Mintellect Portal",
    category: "landing",
    badge: "Discovery Portal",
    image: null,
    live: "https://www.mintellect.org/",
    repo: null,
    tags: ["Next.js", "Tailwind CSS", "SEO", "Search Filters"],
    description:
      "Shipped an IP discovery portal with advanced faceted search filters, patent categorization, and an investor-inventor connection pipeline.",
  },
  {
    id: "branch-out-co",
    name: "BranchOutCo",
    category: "landing",
    badge: "Agency Site",
    image: null,
    live: "https://www.branchoutco.com/",
    repo: null,
    tags: ["React", "Tailwind CSS", "Conversion Optimization"],
    description:
      "Built a high-converting agency marketing website, increasing qualified consultation inquiries by 25% through streamlined layout hierarchy and form micro-interactions.",
  },
  {
    id: "leivia-salon",
    name: "Leivia Salon",
    category: "landing",
    badge: "Booking Web App",
    image: null,
    live: "https://leivia-salon.vercel.app/",
    repo: null,
    tags: ["React", "Tailwind CSS", "Interactive UI"],
    description:
      "Full-featured interactive booking platform with real-time appointment slot calculation, category menus, and mobile-first checkout screens.",
  },
];

export function getProjectsForHome() {
  return SELECTED_WORK_IDS.map((id) => ALL_PROJECTS.find((p) => p.id === id)).filter(
    Boolean
  );
}

export const EXPERIENCE_DATA = [
  {
    id: "sarg-studio",
    company: "Sarg Studio",
    companyUrl: "https://sarg.live",
    role: "Founder",
    date: "Jan 2024 – Present",
    location: "India · Remote",
    type: "Full-time",
    logo: sargLogo,
    logoContain: true,
    points: [
      "Founded Sarg Studio to ship design-led web products, studio landing experiences, and client platforms under one brand.",
      "Built and maintain sarg.live—the studio hub, product storytelling, and conversion-focused marketing surfaces.",
      "Own end-to-end delivery: UX, React/Next.js implementation, design systems, and production deploys.",
    ],
    products: [{ name: "Sarg.live", url: "https://sarg.live" }],
    clientSites: [],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Product Design",
      "Branding",
    ],
  },
  {
    id: "loud-labs",
    company: "Loud Labs",
    companyUrl: "https://loudlabs.in/",
    role: "AI Strategist",
    date: "Nov 2026 – Present",
    location: "New Delhi, India · Hybrid",
    type: "Full-time",
    logo: "/loudlabs.jpg",
    logoContain: true,
    points: [
      "Partnered with the Founder to architect Loud Labs' AI content engine from zero to one—full-stack internal tooling, custom API integrations, and automated agentic pipelines.",
      "Shipped end-to-end automation across ideation, scripting, visuals, video, and publishing workflows.",
      "Designed and built agentic workflows and operator tooling for content production at scale.",
    ],
    products: [],
    clientSites: [{ name: "Loud Labs", url: "https://loudlabs.in/" }],
    skills: [
      "Generative AI",
      "AI Agents",
      "Agentic Workflows",
      "TypeScript",
      "API Integrations",
      "Automation",
      "NestJS",
    ],
  },
  {
    id: "singhcoin",
    company: "Singh Coin",
    role: "Full Stack Developer",
    date: "Jan 2025 – Jun 2026",
    location: "London Area, UK · Remote",
    type: "Full-time",
    logo: singhcoinLogo,
    points: [
      "Developed and maintained scalable full-stack applications using React.js, Next.js, TypeScript, NestJS, and MongoDB across multiple production products.",
      "Built and shipped 10+ production web applications with Tailwind CSS, modular architecture, and strict TypeScript typing.",
      "Engineered 50+ modular, reusable UI components for scalable enterprise dashboards, admin consoles, and consumer landing pages.",
      "Integrated 25+ secure REST endpoints, JWT authentication flows, RBAC permissions, and Web3 wallet connections (MetaMask, WalletConnect).",
      "Achieved a 35% reduction in initial bundle load time by implementing route-level code splitting, asset preloading, and dynamic imports.",
      "Mentored junior developers and interns via structured pull request reviews, architecture guidance, and best-practice workshops.",
    ],
    products: [
      { name: "Mintellect", url: "https://mintellect-ten.vercel.app/" },
      { name: "Uthaan RWA", url: "https://uthaan-rwa.vercel.app/" },
      { name: "Bitnautic", url: "https://bitnautic.vercel.app/" },
      { name: "Nomtree Recipe", url: null, locked: true },
      { name: "Slay Merchant Panel", url: null, locked: true },
    ],
    clientSites: [
      { name: "Lagom Chain", url: "https://lagomchain.com/" },
      { name: "Slay Space", url: "https://slayspace.io/" },
      { name: "Mintellect", url: "https://www.mintellect.org/" },
      { name: "BranchOutCo", url: "https://www.branchoutco.com/" },
      { name: "Leivia Salon", url: "https://leivia-salon.vercel.app/" },
    ],
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "NestJS",
      "MongoDB",
      "Tailwind CSS",
      "REST APIs",
      "Web3",
      "Ethers.js",
    ],
  },
  {
    id: "antier",
    company: "Antier Solutions",
    role: "Software Developer & Trainer Intern",
    date: "Jan 2024 - May 2024",
    location: "Mohali, India",
    type: "Internship",
    logo: antierLogo,
    points: [
      "Developed blockchain decentralized applications (DApps) and tested smart contract interactions using Solidity and Ethers.js.",
      "Trained 20+ engineering interns in modern frontend architectures with React, state management, and Web3 RPC connectivity.",
      "Contributed to enterprise customer PoCs focusing on decentralized identity and tokenized asset workflows.",
    ],
    products: [],
    clientSites: [],
    skills: ["Solidity", "React", "Node.js", "Ethereum", "Hardhat", "Smart Contracts"],
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "AI Tools",
    skills: [
      { name: "OpenAI", image: openaiLogo },
      { name: "Claude", image: claudeLogo },
      { name: "Gemini", image: geminiLogo },
      { name: "Perplexity", image: perplexityLogo },
      { name: "Hugging Face", image: huggingfaceLogo },
      { name: "LangChain", image: langchainLogo },
      { name: "n8n", image: n8nLogo },
      { name: "ElevenLabs", image: elevenlabsLogo },
      { name: "Flux", image: fluxLogo },
      { name: "Suno", image: sunoLogo },
      { name: "Replicate", image: replicateLogo },
      { name: "Ollama", image: ollamaLogo },
      { name: "Mistral", image: mistralLogo },
    ],
  },
  {
    title: "Core Languages & Frameworks",
    skills: [
      { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Redux Toolkit", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "shadcn/ui", image: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4" },
    ],
  },
  {
    title: "Styling & Design Systems",
    skills: [
      { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "CSS3 / Sass", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Responsive UI", image: "" },
    ],
  },
  {
    title: "Backend, APIs & Databases",
    skills: [
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "NestJS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "JWT Auth", image: "" },
      { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
  {
    title: "Web3 & Blockchain",
    skills: [
      { name: "Solidity", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
      { name: "Ethers.js", image: ethersLogo },
      { name: "Ethereum", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" },
      { name: "Hardhat", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/hardhat/hardhat-original.svg" },
    ],
  },
  {
    title: "Tooling & Collaboration",
    skills: [
      { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Vite", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
      { name: "Vercel", image: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    id: "chai-code-web-dev",
    title: "Web Dev Cohort 1.0",
    issuer: "Chai Aur Code",
    date: "Jun 2025",
    location: "Online",
    credentialId: "101424602142981710249854",
    credentialUrl: "https://courses.chaicode.com/learn/certificate/10142460-214298",
    image: "/certificates/chai-code-web-dev-cohort.png",
    logo: "/chai-code-logo.png",
    logoDark: true,
    points: [
      "Completed Web Dev Cohort — Live 1.0, a 160+ hour program covering modern web development end to end.",
      "Certificate issued by Piyush Garg and Hitesh Choudhary.",
    ],
    skills: ["JavaScript", "TypeScript"],
  },
  {
    id: "blockchain-assoc",
    title: "Certified Blockchain Associate",
    issuer: "Antier School of Blocktech (ASB)",
    date: "11 Dec 2023",
    location: "Mohali, India",
    credentialUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7140752264255754240",
    image: "/certificates/blockchain-associate.jpg",
    points: [
      "Completed a 6-month Blockchain Development program at Antier Solutions and Antier School of Blocktech.",
      "Covered Solidity, smart-contract optimization, auditing, Hardhat testing, IPFS, and ERC-20, ERC-721, and ERC-1155.",
      "Studied DeFi exchange design through Uniswap and PancakeSwap.",
    ],
    skills: ["Solidity", "Smart Contracts", "Hardhat", "IPFS", "ERC20", "ERC721", "DeFi", "Ethereum"],
    logo: antierLogo,
  },
];

export const EDUCATION_DATA = [
  {
    id: "mca",
    college: "Chandigarh University, Mohali",
    degree: "MCA — Master of Computer Applications",
    date: "2025 - 2027",
    score: "CGPA: 9.0",
    scoreType: "cgpa",
    logo: "https://cdn.theorg.com/310dcd3f-46f1-495e-801a-258eea62e72e_thumb.jpg",
  },
  {
    id: "bca",
    college: "DAV College Jalandhar, Punjab",
    degree: "BCA — Bachelors of Computer Applications",
    date: "2020 - 2023",
    score: "77.41%",
    scoreType: "percentage",
    logo: "https://www.davjalandhar.com/wp-content/uploads/2022/07/logo-512x512-1.png",
  },
  {
    id: "senior-sec",
    college: "Doaba College Jalandhar, Punjab",
    degree: "10+2 Non-Medical",
    date: "2019 - 2020",
    score: "85.33%",
    scoreType: "percentage",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47pokGLAsB1K3NwUtPCSW7uAk6lMiJRvURg&s",
  },
  {
    id: "matric",
    college: "Jullundur Model Sr. Sec. School, Jalandhar",
    degree: "10th Matriculation",
    date: "2017 - 2018",
    score: "83.69%",
    scoreType: "percentage",
    logo: "https://static.vecteezy.com/system/resources/thumbnails/008/040/410/small_2x/school-logo-design-template-free-vector.jpg",
  },
];
