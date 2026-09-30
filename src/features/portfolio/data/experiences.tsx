import { BriefcaseBusinessIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "swdc-kjsse",
    companyName: "SwDC (Software Development Cell) KJSSE",
    companyWebsite: "https://swdc.somaiya.edu/p/agriprice/",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Mumbai, India",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "01.06.2026",
          end: "30.06.2026",
        },
        employmentType: "Internship",
        description: `- Worked on AgriPrice, a full-stack Farmer's Market Intelligence Dashboard, developing responsive React.js interfaces and integrating FastAPI backend services.
- Built interactive dashboards, real-time mandi price tracking, notifications, and mandi locator features using REST APIs and PostgreSQL.
- Contributed to a machine learning pipeline for 7-day and 30-day crop price forecasting.
- Dockerized the complete application with Docker Compose for streamlined development and deployment.`,
        skills: [
          "React.js",
          "FastAPI",
          "Python",
          "PostgreSQL",
          "REST APIs",
          "Machine Learning",
          "Docker",
          "Docker Compose",
        ],
        icon: <BriefcaseBusinessIcon />,
        isExpanded: true,
      },
    ],
  },
  {
    id: "enrich-lives-foundation",
    companyName: "Enrich Lives Foundation",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    location: "Mumbai, India",
    positions: [
      {
        id: "1",
        title: "Volunteer",
        employmentPeriod: {
          start: "12.2024",
          end: "02.2025",
        },
        employmentType: "Volunteer",
        description: `- Built a web-based attendance management system using Python and Excel.
- Supported attendance tracking and reporting for 300+ students.
- Implemented authentication.
- Added dynamic attendance marking by date/class.
- Added data analytics dashboards.
- Reduced manual effort by approximately 60%.
- Improved data accuracy by approximately 40%.
- Edited videos for the organisation's Instagram content.`,
        skills: ["Python", "Excel", "Data Analytics", "Video Editing"],
        icon: <BriefcaseBusinessIcon />,
        isExpanded: true,
      },
    ],
  },
]
