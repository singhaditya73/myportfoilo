import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    company: "cognigyz technologies",
    companyLogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCbO8YFKrfccq1RHL1pTpF-kkg-Wqzc8cBA&s",
    positions: [
      // {
      //   id: "76ce1cbc-7a20-40a5-818c-8334bcefbd83",
      //   title: "Backend Developer",
      //   year: "03.2025 - present",
      //   employmentType: "Full-time",
      //   icon: "code",
      //   skills: [
      //     "TypeScript",
      //     "Node.js",
      //     "LoopBack",
      //     "MongoDB",
      //     "Multi-tenacy",
      //   ],
      //   expanded: true,
      // },
      {
        id: "ml-intern-cognifyz-2025",
        title: "Machine Learning Intern",
        year: "2025-06 — 2025-07", // replace XX with start month if you want
        employmentType: "Internship",
        icon: "code",
        description: `- Worked on developing and training machine learning models.
- Assisted in data preprocessing and feature engineering.
- Collaborated with the team on deploying ML models for production.
- Conducted research on improving model accuracy and efficiency.`,
        skills: [
          "Python",
          "Machine Learning",
          "Data Preprocessing",
          "Model Training",
          "Research",
          "Collaboration",
        ],
        expanded: true,
      },
    ],
  },
  {
    company: "Freelance",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Full-stack Developer",
        year: "2024 — present",
        employmentType: "Part-time",
        description: `- Built a food delivery website with real-time order tracking and management.`,
        icon: "code",
        skills: [
          "nextjs",
          "React",
          "Express.js",
          "PostgresSQL",
          "Prisma",
          "OAuth",
          "cloudflare workers",
          "Hono",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "MongoDB",
          "Docker",
        ],
      },
    ],
  },
  {
    company: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Jaypee University of Engineering and technology",
        year: "07.2023 — present",
        icon: "education",
        description: `- Currently studying for a Bachelor's degree in Computer Science and Engineering.
- Awarded full fee reimbursement by Cummins Scholarship.
- Achieved a gold medal in cricket in a league match at college.`,
        skills: [
          "C",
          "C++",
          "Java",
          "Python",
          "Data Structures",
          "Algorithms",
          "MySQL",
          "Database management systems",
          "Object-oriented programing",
          "Software Engineering",
          "Self-learning",
          "Teamwork",
          "Presentation",
        ],
      },
    ],
  },
];
