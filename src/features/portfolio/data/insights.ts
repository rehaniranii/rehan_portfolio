import "server-only"

import { unstable_cache } from "next/cache"

type ISODateString = string

export type InsightsSummary = {
  unique_visitors: number
  total_sessions: number
  total_screen_views: number
  avg_session_duration: number
}

export type InsightsSeriesItem = {
  date: ISODateString
  unique_visitors: number
  total_sessions: number
}

type DateRange = {
  startDate: ISODateString
  endDate: ISODateString
}

type OverviewResponse = DateRange & {
  summary: InsightsSummary
  series: InsightsSeriesItem[]
}

export type InsightsChanges = Record<keyof InsightsSummary, number | null>

export type InsightsResponse = OverviewResponse & {
  previous: (DateRange & { summary: InsightsSummary }) | null
  changes: InsightsChanges
}

export const getInsights = unstable_cache(
  async (): Promise<InsightsResponse | null> => {
    return null
  },
  ["openpanel-insights"],
  { revalidate: 86400 } // 1 day
)
