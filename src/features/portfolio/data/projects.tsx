import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "agro-saathi",
    title: "Agro Saathi",
    period: {
      start: "01.2025",
    },
    link: "",
    skills: [
      "Python",
      "AI/ML",
      "Weather API",
      "Data Analysis",
      "Agriculture Tech",
    ],
    description:
      "An intelligent farming assistant designed to provide real-time, data-driven guidance to farmers using local weather conditions, soil factors, and geographic information.",
    isExpanded: true,
  },
  {
    id: "algo-trade",
    title: "Algo-Trade",
    period: {
      start: "06.2024",
    },
    link: "",
    skills: ["Python", "EMA", "SMA", "MACD", "Backtesting", "Position Sizing"],
    description:
      "A Python-based multi-factor algorithmic trading system integrating trend, momentum and volatility indicators. *Note: Backtesting results showed promising performance metrics including Sharpe Ratio evaluation and maximum drawdown analysis.*",
  },
  {
    id: "somaiyasat",
    title: "SomaiyaSat & SomaiyaPod",
    period: {
      start: "03.2025",
    },
    link: "",
    skills: [
      "PocketQube",
      "AI Routing",
      "M17",
      "Codec2",
      "SSTV",
      "Satellite Computing",
    ],
    description:
      "A PocketQube mission concept featuring autonomous AI-based inter-satellite data routing and advanced multi-mode amateur radio payloads.",
  },
  {
    id: "kr-irani-website",
    title: "K.R. Irani & Sons Website",
    period: {
      start: "09.2024",
    },
    link: "",
    skills: ["React", "Vite", "Tailwind CSS", "shadcn/ui", "Responsive Design"],
    description:
      "A modern company website developed for K.R. Irani & Sons, a manufacturing business producing oils, paints, varnishes and related products.",
  },
]
