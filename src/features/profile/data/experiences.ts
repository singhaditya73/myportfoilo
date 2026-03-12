import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    company: "Palisadoes Foundation",
    companyLogo: "https://avatars.githubusercontent.com/u/24500036?s=200&v=4",
    current: true,
    positions: [
      {
        id: "palisadoes-oss-2025",
        title: "Open Source Contributor",
        year: "Dec 2025 — Present",
        employmentType: "Open Source",
        icon: "code",
        description: `- Standardized MinIO-based file management across Talawa Admin and Talawa API.
- Migrated 10+ components from Base64 uploads to presigned object storage, reducing payload size by ~33%.
- Built a cross-platform one-click installation script with 95%+ test coverage.`,
        skills: [
          "TypeScript",
          "React",
          "Node.js",
          "MinIO",
          "GraphQL",
          "Testing",
        ],
        expanded: true,
      },
    ],
  },
  {
    company: "Zulip",
    companyLogo: "https://avatars.githubusercontent.com/u/4921959?s=200&v=4",
    current: true,
    positions: [
      {
        id: "zulip-oss-2026",
        title: "Open Source Contributor",
        year: "Feb 2026 — Present",
        employmentType: "Open Source",
        icon: "code",
        description: `- Implemented local echo for "mark as unread," enabling instant UI feedback and fixing offline failures for 100K+ users.
- Added queue-cancellation logic and tests for reliable read/unread transitions.`,
        skills: [
          "Python",
          "Django",
          "JavaScript",
          "Testing",
          "Real-time Systems",
        ],
        expanded: true,
      },
    ],
  },
  {
    company: "Gemini CLI (Google)",
    companyLogo: "https://avatars.githubusercontent.com/u/1342004?s=200&v=4",
    current: true,
    positions: [
      {
        id: "gemini-cli-oss-2026",
        title: "Open Source Contributor",
        year: "Feb 2026 — Present",
        employmentType: "Open Source",
        icon: "code",
        description: `- Fixed a critical agent behavior bug causing unintended code truncation during automated edits.`,
        skills: ["TypeScript", "CLI Tools", "AI Agents", "Bug Fixing"],
        expanded: true,
      },
    ],
  },

  {
    company: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Jaypee University of Engineering and Technology",
        year: "07.2023 — 2027",
        icon: "education",
        description: `- B.Tech in Computer Science and Engineering | CGPA: 7.86
- Awarded full fee reimbursement by Cummins Scholarship.
- Achieved a gold medal in cricket in a league match at college.`,
        skills: [
          "C/C++",
          "Python",
          "Java",
          "Data Structures",
          "Algorithms",
          "MySQL",
          "DBMS",
          "OOP",
          "Software Engineering",
        ],
      },
    ],
  },
];
