import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "kjsomaiya",
    school: "K.J. Somaiya School of Engineering",
    degree: "Bachelor of Technology (B.Tech)",
    fieldOfStudy: "Information Technology",
    period: {
      start: "08.2023",
    },
    cgpa: "8.9",
    skills: [
      "Python",
      "C++",
      "SQL",
      "Data Structures",
      "Algorithms",
      "Software Engineering",
    ],
    isExpanded: true,
  },
  {
    id: "stgregorios",
    school: "St. Gregorios High School",
    period: {
      start: "06.2013",
      end: "05.2023",
    },
    description: "Completed secondary education with 96% grade.",
    skills: [],
  },
]
