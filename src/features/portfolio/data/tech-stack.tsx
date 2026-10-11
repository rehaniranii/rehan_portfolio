import { AtomIcon, DatabaseIcon, FileSpreadsheetIcon } from "lucide-react"

import {
  CppIcon,
  GitHubIcon,
  JsIcon,
  QiskitIcon,
  ReactIcon,
  ScikitLearnIcon,
  ShadcnIcon,
  TailwindCssIcon,
  TsIcon,
} from "@/components/icons"

import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  // Languages
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H9.08l-.14-.01-.13-.02-.12-.04-.11-.06-.1-.08-.08-.11-.07-.15-.05-.18-.04-.21-.02-.26-.01-.31v-1.5l.02-.31.04-.26.05-.21.07-.18.08-.15.1-.11.11-.08.12-.06.13-.04.14-.02h4.52l.27.01.55.07.82.16 1.05.3.88.46c.15.1.32.22.5.38a4.44 4.44 0 0 1 .46.5l.03.04zm-9.89 2.2a.77.77 0 0 0-.58-.23c-.2 0-.39.08-.55.23a.75.75 0 0 0-.23.55c0 .2.08.39.23.55.16.15.35.23.55.23.21 0 .4-.08.56-.23.16-.16.23-.35.23-.55 0-.21-.07-.4-.23-.55zm15.42 4.28.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01h-.16l-.06-.01H11.6v.83h4.15l.14.01.13.02.12.04.11.06.1.08.08.11.07.15.05.18.04.21.02.26.01.31v1.5l-.02.31-.04.26-.05.21-.07.18-.08.15-.1.11-.11.08-.12.06-.13.04-.14.02H11.2l-.27-.01-.55-.07-.82-.16-1.05-.3-.88-.46a4.57 4.57 0 0 1-.96-.88l-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h4.88l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21V11.2h4.52zm-3.23 11.22a.77.77 0 0 0 .58.23c.2 0 .39-.08.55-.23.16-.16.23-.35.23-.55 0-.2-.07-.39-.23-.55a.77.77 0 0 0-.55-.23.77.77 0 0 0-.56.23c-.16.16-.23.35-.23.55 0 .21.07.4.23.55z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Language"],
  },
  {
    key: "cpp",
    title: "C++",
    href: "https://isocpp.org/",
    icon: <CppIcon />,
    categories: ["Language"],
  },
  {
    key: "sql",
    title: "SQL",
    href: "https://en.wikipedia.org/wiki/SQL",
    icon: <DatabaseIcon />,
    categories: ["Language"],
  },
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <JsIcon />,
    categories: ["Language"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: <TsIcon />,
    categories: ["Language"],
  },

  // Web
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    icon: <ReactIcon />,
    categories: ["Web"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    icon: <TailwindCssIcon />,
    categories: ["Web"],
  },
  {
    key: "shadcnui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com",
    icon: <ShadcnIcon />,
    categories: ["Web"],
  },
  {
    key: "vite",
    title: "Vite",
    href: "https://vitejs.dev",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M23.167 3.328l-1.077 15.525c-.17 2.457-2.637 4.093-4.82 3.197L12 19.86l-5.27 2.19c-2.183.896-4.65-.74-4.82-3.197L.833 3.328c-.144-2.072 1.93-3.6 3.864-2.846L12 3.332l7.303-2.85c1.934-.754 4.008.774 3.864 2.846z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Web"],
  },

  // Tools
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden>
        <path
          d="M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"
          fill="currentColor"
        />
      </svg>
    ),
    categories: ["Tools"],
  },
  {
    key: "github",
    title: "GitHub",
    href: "https://github.com",
    icon: <GitHubIcon />,
    categories: ["Tools"],
  },
  {
    key: "excel",
    title: "Excel",
    href: "https://www.microsoft.com/en-us/microsoft-365/excel",
    icon: <FileSpreadsheetIcon />,
    categories: ["Tools"],
  },

  // AI/ML
  {
    key: "scikit-learn",
    title: "scikit-learn",
    href: "https://scikit-learn.org/",
    icon: <ScikitLearnIcon />,
    categories: ["AI/ML"],
  },
  {
    key: "qiskit",
    title: "Qiskit",
    href: "https://qiskit.org/",
    icon: <QiskitIcon />,
    categories: ["AI/ML"],
  },
  {
    key: "pennylane",
    title: "PennyLane",
    href: "https://pennylane.ai/",
    icon: <AtomIcon />,
    categories: ["AI/ML"],
  },
]
