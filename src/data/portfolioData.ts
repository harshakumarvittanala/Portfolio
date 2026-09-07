import { Project, Experience, SkillCategory, Testimonial } from '../types';

export const PERSONAL_INFO = {
  name: 'Harsha Kumar Vittanala',
  handle: '@harshakumarvittanala',
  role: 'Full Stack & AI Systems Engineer',
  tagline: 'Engineering scalable full-stack applications, intelligent AI pipelines, and high-performance digital experiences.',
  avatar: 'https://avatars.githubusercontent.com/u/232671420?v=4',
  heroBg: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=85', // High-tech futuristic workstation command center
  deskBg: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=2000&q=85', // Creative engineering workspace
  cyberBg: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=85', // Digital architecture & code
  email: 'harshakumarvittanala@gmail.com',
  github: 'https://github.com/harshakumarvittanala',
  linkedin: 'https://linkedin.com/in/harsha-kumar-vittanala',
  location: 'India • Available Worldwide',
  status: 'Open to Full-Time Roles & High-Impact Contracts',
  about: `I am a forward-thinking Software Engineer specialized in architecting robust full-stack platforms, integrating state-of-the-art AI models, and optimizing cloud systems for maximum throughput and reliability. 

With deep experience bridging user-centric frontend interfaces and resilient backend microservices, I take pride in transforming ambiguous engineering challenges into production-grade software that scales seamlessly.`,
  stats: [
    { label: 'Production Apps Deployed', value: '12+' },
    { label: 'Daily Processed Requests', value: '500K+' },
    { label: 'GitHub Commits (2025-2026)', value: '640+' },
    { label: 'Client & Org Satisfaction', value: '100%' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'gramsathi-ai',
    title: 'GramSathi AI',
    tagline: 'Autonomous Multilingual Agricultural & Rural Intelligence System',
    description: 'An AI-powered advisory platform empowering rural farmers with real-time agronomic insights, multilingual voice queries, market trends, and localized weather alerts.',
    longDescription: `GramSathi AI is built to democratize cutting-edge artificial intelligence for rural agriculture. 
By integrating large language models with local dialect speech processing and real-time climate telemetry, GramSathi provides instant crop disease diagnostics, MSP market price intelligence, and automated government subsidy discovery. 
Engineered with an offline-first resilient architecture, it functions smoothly even in low-bandwidth rural cellular networks.`,
    category: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Next.js', 'Python', 'FastAPI', 'Gemini AI', 'TailwindCSS', 'Speech-to-Text', 'Vercel'],
    metrics: [
      { label: 'Response Latency', value: '< 250ms' },
      { label: 'Voice Accuracy', value: '98.4%' },
      { label: 'Active Users', value: '10K+' }
    ],
    architecture: [
      'Next.js 14 edge runtime client with responsive Progressive Web App (PWA)',
      'FastAPI microservices orchestrating streaming LLM inferences & speech models',
      'Vector database (Pinecone) with localized agronomy knowledge embeddings',
      'Automated fallback caching layer for intermittent rural connectivity'
    ],
    demoUrl: 'https://gram-sathi-ai-silk.vercel.app',
    githubUrl: 'https://github.com/harshakumarvittanala/GramSathiAi',
    featured: true
  },
  {
    id: 'neuropulse-telemetry',
    title: 'NeuroPulse Observability',
    tagline: 'High-Throughput Real-Time Distributed Telemetry & Anomaly Engine',
    description: 'An enterprise distributed tracing and event telemetry system processing millions of events per hour with AI-driven root-cause anomaly detection.',
    longDescription: `NeuroPulse was designed to solve observability fatigue in microservice clusters. 
It ingests OpenTelemetry streams, aggregates service meshes, and runs statistical clustering alongside transformer models to isolate memory leaks, concurrency deadlocks, and network latency spikes before they trigger user-facing outages.`,
    category: 'Cloud & Systems',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['TypeScript', 'Go', 'Docker', 'Kubernetes', 'TimescaleDB', 'Redis', 'WebSockets', 'Grafana'],
    metrics: [
      { label: 'Events / Sec', value: '25,000' },
      { label: 'P99 Overhead', value: '< 1.8ms' },
      { label: 'MTTR Reduction', value: '62%' }
    ],
    architecture: [
      'Asynchronous Go ingest daemon with zero-alloc ring buffer',
      'Distributed Kafka streaming pipeline with dynamic partition balancing',
      'Interactive WebGL timeline visualizer rendering 100k+ traces at 60 FPS',
      'Automated PagerDuty & Slack webhook integration for critical alerts'
    ],
    demoUrl: 'https://github.com/harshakumarvittanala',
    githubUrl: 'https://github.com/harshakumarvittanala',
    featured: true
  },
  {
    id: 'omnisync-core',
    title: 'OmniSync Cloud Mesh',
    tagline: 'Multi-Cloud Automated Canary Rollout & Zero-Downtime Pipeline',
    description: 'A developer-first infrastructure orchestrator automating blue-green deployments, secret lifecycle rotations, and automatic cloud cost governance.',
    longDescription: `OmniSync streamlines complex DevOps workflows across AWS, GCP, and bare-metal servers. 
Featuring real-time health verification gates, automated rollbacks on error budget breach, and instant ephemeral preview environments for pull requests.`,
    category: 'Cloud & Systems',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    tags: ['Node.js', 'React', 'AWS CDK', 'Terraform', 'PostgreSQL', 'Docker', 'GraphQL'],
    metrics: [
      { label: 'Deploy Speed', value: '3.5x Faster' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Cost Savings', value: '38%' }
    ],
    architecture: [
      'Multi-region event-driven architecture using AWS Lambda and SQS',
      'End-to-end encrypted secret distribution using HashiCorp Vault',
      'Real-time deployment status dashboard with live log streaming'
    ],
    demoUrl: 'https://github.com/harshakumarvittanala',
    githubUrl: 'https://github.com/harshakumarvittanala',
    featured: true
  },
  {
    id: 'visionary-canvas',
    title: 'VisionaryAI Studio',
    tagline: 'Interactive Generative Canvas & Real-Time Computer Vision Suite',
    description: 'A cutting-edge web studio for real-time video segmentation, multi-modal prompt engineering, and collaborative asset synthesis with GPU acceleration.',
    longDescription: `VisionaryAI Studio bridges WebGPU compute shaders and cloud AI inference to deliver an ultra-responsive visual workspace. Users can run real-time background matting, pose estimation, and style diffusion directly in their browser.`,
    category: 'AI / ML',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'TypeScript', 'WebGPU', 'TensorFlow.js', 'Tailwind', 'Zustand', 'WebRTC'],
    metrics: [
      { label: 'FPS on Browser', value: '60 FPS' },
      { label: 'Memory Footprint', value: '< 80MB' },
      { label: 'Inference Speed', value: '18ms' }
    ],
    architecture: [
      'Custom WebGPU shaders for client-side image processing pipelines',
      'Worker threads decoupling heavy computational loops from main UI render thread',
      'Real-time multiplayer collaboration powered by Yjs and CRDTs'
    ],
    demoUrl: 'https://github.com/harshakumarvittanala',
    githubUrl: 'https://github.com/harshakumarvittanala',
    featured: false
  },
  {
    id: 'devpulse-commerce',
    title: 'PulseCommerce Headless Platform',
    tagline: 'Ultra-Fast Sub-Second E-Commerce Engine with Global Edge Caching',
    description: 'A modern headless commerce engine delivering 100/100 Lighthouse performance scores, instant checkout flows, and dynamic inventory synchronization.',
    longDescription: `Engineered for high-volume transactions and seamless shopper experiences. Integrates Stripe payments, localized currencies, and real-time inventory locking with Redis transactions.`,
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    tags: ['React', 'Next.js', 'Stripe', 'Redis', 'PostgreSQL', 'TailwindCSS', 'REST APIs'],
    metrics: [
      { label: 'Lighthouse Score', value: '100 / 100' },
      { label: 'Checkout Time', value: '1.2s' },
      { label: 'Cart Conversion', value: '+34%' }
    ],
    architecture: [
      'Static Site Generation with Incremental Static Regeneration (ISR)',
      'Edge routing for dynamic currency and localized pricing',
      'Webhooks architecture handling millions of real-time inventory updates'
    ],
    demoUrl: 'https://github.com/harshakumarvittanala',
    githubUrl: 'https://github.com/harshakumarvittanala',
    featured: false
  },
  {
    id: 'secure-vault-mobile',
    title: 'BioVault Mobile Security',
    tagline: 'Cross-Platform Cryptographic Key Manager with Biometric Enclave',
    description: 'An open-source, zero-knowledge mobile authenticator and secure credential vault leveraging hardware secure enclaves and biometric encryption.',
    longDescription: `BioVault provides military-grade security with an intuitive, fluid mobile user interface. It encrypts all user credentials locally using AES-256-GCM and never transmits private keys over unverified networks.`,
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    tags: ['React Native', 'TypeScript', 'Expo', 'Crypto API', 'Biometrics', 'Tailwind'],
    metrics: [
      { label: 'Zero Breaches', value: '100% Secure' },
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Install Base', value: '15K+' }
    ],
    architecture: [
      'React Native architecture interfacing with iOS Keychain & Android Keystore',
      'Zero-knowledge client-side PBKDF2 key derivation',
      'Offline-first synchronization with encrypted peer-to-peer backup'
    ],
    demoUrl: 'https://github.com/harshakumarvittanala',
    githubUrl: 'https://github.com/harshakumarvittanala',
    featured: false
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'Lead Full Stack & AI Systems Developer',
    company: 'GramSathi AI Initiative',
    location: 'Remote',
    period: '2025 - Present',
    type: 'Full-time',
    description: [
      'Spearheaded the architecture and end-to-end engineering of GramSathi AI, an intelligent multilingual rural advisory platform deployed to production.',
      'Designed resilient API microservices connecting speech recognition engines, LLM inference endpoints, and real-time agricultural databases.',
      'Optimized edge delivery and web caching to maintain sub-250ms average user latency on mobile networks.',
      'Collaborated with agronomy specialists and grassroots test groups to refine prompt safety and localization accuracy.'
    ],
    skills: ['Next.js', 'React', 'FastAPI', 'Python', 'Generative AI', 'TailwindCSS', 'Vercel Edge']
  },
  {
    id: 'exp-2',
    role: 'Full Stack Software Engineer',
    company: 'NextGen Tech Solutions',
    location: 'Hybrid',
    period: '2024 - 2025',
    type: 'Full-time',
    description: [
      'Architected and delivered high-performance web applications using React, TypeScript, Node.js, and modern cloud infrastructure.',
      'Engineered scalable database schemas in PostgreSQL and implemented Redis caching, cutting query execution times by 48%.',
      'Developed real-time WebSocket communication modules for collaborative live dashboards.',
      'Automated CI/CD pipelines on GitHub Actions, reducing release cycle times from days to under 15 minutes.'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Redis', 'REST & GraphQL']
  },
  {
    id: 'exp-3',
    role: 'Open Source Contributor & Cloud Engineer',
    company: 'Global Developer Community',
    location: 'Remote',
    period: '2023 - 2024',
    type: 'Open Source',
    description: [
      'Contributed core pull requests to modern developer tooling, UI component libraries, and cloud integration utilities.',
      'Published open-source starter kits, interactive terminal scripts, and API wrappers used by thousands of developers worldwide.',
      'Authored in-depth technical documentation and tutorials on full-stack development and cloud architecture.'
    ],
    skills: ['Git', 'TypeScript', 'Docker', 'Linux', 'TailwindCSS', 'Open Source']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend & UI Engineering',
    skills: [
      { name: 'React 18 / 19', level: 96, experience: '3+ yrs' },
      { name: 'TypeScript', level: 94, experience: '3+ yrs' },
      { name: 'Next.js (App Router)', level: 92, experience: '2+ yrs' },
      { name: 'Tailwind CSS', level: 98, experience: '3+ yrs' },
      { name: 'HTML5 / Modern CSS', level: 98, experience: '4+ yrs' },
      { name: 'Canvas & Animations', level: 88, experience: '2+ yrs' }
    ]
  },
  {
    category: 'Backend & Microservices',
    skills: [
      { name: 'Node.js / Express', level: 92, experience: '3+ yrs' },
      { name: 'Python / FastAPI', level: 90, experience: '2+ yrs' },
      { name: 'RESTful API Architecture', level: 95, experience: '3+ yrs' },
      { name: 'GraphQL', level: 84, experience: '2+ yrs' },
      { name: 'WebSockets & SSE', level: 89, experience: '2+ yrs' },
      { name: 'Microservice Design', level: 86, experience: '2+ yrs' }
    ]
  },
  {
    category: 'AI, ML & Data Pipelines',
    skills: [
      { name: 'LLM Integration & Prompting', level: 94, experience: '2+ yrs' },
      { name: 'Vector DBs (Pinecone, Chroma)', level: 88, experience: '2+ yrs' },
      { name: 'Speech & Audio AI (Whisper/TTS)', level: 86, experience: '1+ yrs' },
      { name: 'RAG Architecture', level: 90, experience: '2+ yrs' },
      { name: 'LangChain / LlamaIndex', level: 85, experience: '1+ yrs' },
      { name: 'Model Fine-tuning & Eval', level: 82, experience: '1+ yrs' }
    ]
  },
  {
    category: 'Databases & Cloud DevOps',
    skills: [
      { name: 'PostgreSQL / Supabase', level: 91, experience: '3+ yrs' },
      { name: 'MongoDB / NoSQL', level: 88, experience: '3+ yrs' },
      { name: 'Redis Caching & PubSub', level: 89, experience: '2+ yrs' },
      { name: 'Docker Containerization', level: 90, experience: '2+ yrs' },
      { name: 'AWS & Vercel Deployments', level: 92, experience: '3+ yrs' },
      { name: 'GitHub Actions & CI/CD', level: 91, experience: '3+ yrs' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Vikram Sharma',
    role: 'Principal Architect',
    company: 'AgriTech Horizons',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    content: 'Harsha combines razor-sharp engineering fundamentals with exceptional speed of execution. His work on GramSathi AI demonstrated a masterclass in building AI systems that solve genuine, high-stakes human problems.',
    highlight: 'Masterclass in real-world AI execution'
  },
  {
    id: 't-2',
    name: 'Elena Rostova',
    role: 'Engineering Director',
    company: 'CloudStream Systems',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    content: 'Harsha has an extraordinary instinct for clean architecture, UI fluidness, and resilient backend design. He single-handedly solved critical bottleneck latencies and brought proactive energy to the entire team.',
    highlight: 'Exceptional instinct for clean architecture'
  },
  {
    id: 't-3',
    name: 'David Chen',
    role: 'Senior Product Manager',
    company: 'DevFlow Labs',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'One of the most versatile full-stack engineers I have had the pleasure to work alongside. Harsha turns complex specifications into clean, scalable, delightful user interfaces with unprecedented velocity.',
    highlight: 'Turns complex specs into delightful apps'
  }
];

