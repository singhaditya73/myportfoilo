import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "jurisai",
    title: "JurisAI",
    time: "2025",
    link: "https://github.com/singhaditya73",
    skills: [
      "RAG",
      "LangChain",
      "LLM Fine-Tuning",
      "QLoRA",
      "Microsoft Phi-3.5-mini",
      "Python",
      "IPC/CrPC",
    ],
    description: `A privacy-focused legal advisory platform for Indian citizens using RAG (IPC/CrPC) and fine-tuned Microsoft Phi-3.5-mini via QLoRA.
- Enables citizens to get legal guidance while ensuring data privacy.
- Leverages retrieval-augmented generation for accurate legal context.`,
    logo: "",
  },
  {
    id: "mediflow",
    title: "Mediflow",
    time: "2025",
    link: "https://github.com/singhaditya73",
    skills: [
      "IPFS",
      "BioBERT",
      "NLP",
      "FHIR",
      "Blockchain",
      "Python",
      "Healthcare",
    ],
    description: `A decentralized healthcare system using IPFS for storage and BioBERT NLP pipeline to structure clinical text into FHIR resources.
- Ensures patient data sovereignty with decentralized storage.
- Automatically structures unstructured clinical notes into standardized FHIR format.`,
    logo: "",
  },
  {
    id: "beatnet",
    title: "BeatNet",
    time: "2025",
    link: "https://github.com/singhaditya73",
    skills: [
      "WebRTC",
      "Socket.IO",
      "Node.js",
      "React",
      "Real-time Systems",
      "TypeScript",
    ],
    description: `A low-latency collaborative music platform using WebRTC and Socket.IO for real-time synchronization.
- Enables musicians to jam together remotely with minimal latency.
- Real-time audio streaming and session management.`,
    logo: "",
  },
  {
    id: "cryptozen",
    title: "CryptoZen",
    time: "03.2025 — present",
    link: "https://github.com/singhaditya73/CrytpoZen",
    skills: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "React Chart.js",
      "NextAuth",
      "GitHub OAuth",
      "PostgreSQL",
      "Prisma ORM",
    ],
    description: `Built a Next.js web application to track real-time cryptocurrency prices, market trends, and news. 
- Visualized 24-hour price fluctuations with interactive graphs. 
- Integrated GitHub Sign-in via NextAuth for secure user authentication.`,
    logo: "",
  },
  {
    id: "solx",
    title: "SolX",
    time: "05.2025 — present",
    link: "https://github.com/singhaditya73/SolFlow",
    skills: [
      "Next.js",
      "TypeScript",
      "Solana",
      "Solana Wallet Adapter",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    description: `SolX is a Solana-based web platform enabling users to send SOL and create tokens. 
- Integrated wallet functionality using Solana Wallet Adapter.
- Developed with a modern UI using shadcn/ui and Tailwind CSS.`,
    logo: "",
  },
];
