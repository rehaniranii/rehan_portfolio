import { BriefcaseBusinessIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
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
    isCurrentEmployer: true,
  },
]
