import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "agro-saathi",
    title: "Agro Saathi",
    link: "",
    skills: [
      "Python",
      "AI/ML",
      "Plant Disease Detection",
      "Weather API",
      "Precision Agriculture",
    ],
    description:
      "Developed an intelligent farming assistant that provides real-time, data-driven guidance to farmers based on local weather conditions, soil factors, and geographic area. Integrated AI-powered plant disease detection to help farmers identify crop issues early and improve yield quality. Designed to make precision farming accessible, AgroSaathi empowers farmers with actionable insights for better decision-making and sustainable agriculture.",
    isExpanded: true,
  },
  {
    id: "algo-trade",
    title: "Algo-Trade",
    link: "",
    skills: [
      "Python",
      "Algorithmic Trading",
      "Backtesting",
      "Risk Management",
      "MACD",
      "EMA / SMA",
    ],
    description:
      "Designed and implemented a multi factor algorithmic trading system using Python, integrating trends (EMA, SMA), momentum (MACD) and volatility based indicators. Developed a backtesting engine with dynamic risk management (position sizing, stop loss, trailing stop loss) and evaluated performance using risk adjusted metrics such as Sharpe Ratio and maximum drawdown on real world market data. Achieved ~30% win rate under adverse market conditions while maintaining controlled drawdowns and positive risk-adjusted returns.",
  },
  {
    id: "aushadhcheck",
    title: "AushadhCheck",
    link: "",
    skills: [
      "FastAPI",
      "PostgreSQL",
      "Python",
      "REST APIs",
      "Automated Ingestion",
      "Batch Verification",
    ],
    description:
      "Developed a medicine safety platform that verifies drug batches against CDSCO Not-of-Standard-Quality (NSQ) alerts, enabling users to identify potentially unsafe medicines. Built REST APIs using FastAPI with PostgreSQL for drug-alert data management and integrated automated data ingestion, batch-level verification, and a notification pipeline to alert users when previously scanned medicines are flagged in newly published alerts.",
  },
]
