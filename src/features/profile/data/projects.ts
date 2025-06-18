import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "transfund",
    title: "Transfund",
    time: "04.2025 — present",
    link: "https://github.com/singhaditya73/paytm", // Add your GitHub or live URL if available
    skills: [
      "MERN Stack",
      "MongoDB",
      "Express.js",
      "Node.js",
      "React.js",
      "Tailwind CSS",
      "JWT",
      "Axios",
      "ZOD",
    ],
    description: `Engineered a scalable MERN stack app for secure dummy money transfers with responsive UI using React.js and Tailwind CSS. 
- Implemented JWT-based authentication and access control, reducing unauthorized access by 40% through log analysis.`,
    logo: "", // Optional: add logo URL if you have one
  },
  {
    id: "cryptozen",
    title: "CryptoZen",
    time: "03.2025 — present",
    link: "https://github.com/singhaditya73/CrytpoZen", // Add your GitHub or live URL if available
    skills: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "React Chart.js",
      "NextAuth",
      "GitHub OAuth",
      "PostgreSQL",
      "Prisma ORM",
      "Lucide Icons",
    ],
    description: `Built a Next.js web application to track real-time cryptocurrency prices, market trends, and news. 
- Visualized 24-hour price fluctuations with interactive graphs. 
- Integrated GitHub Sign-in via NextAuth for secure user authentication.`,
    logo: "",
  },
  {
    id: "discord-quiz-bot",
    title: "Discord Quiz Bot",
    time: "02.2025",
    link: "https://github.com/singhaditya73/discord-bot", // GitHub or video link if available
    skills: ["Python", "Discord API", "Real-Time Ranking", "Bot Development"],
    description: `Developed an interactive Discord bot for conducting quizzes with real-time ranking updates. 
- Successfully deployed during a college event, boosting engagement and participation.`,
    logo: "",
  },
  {
    id: "solx",
    title: "SolX",
    time: "05.2025 — present",
    link: "https://github.com/singhaditya73/SolFlow", // GitHub or live deployment link
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
