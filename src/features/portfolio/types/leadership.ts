export type LeadershipRole = {
  id: string
  title: string
  organization: string
  /** Period format: "YYYY" or "YYYY - YYYY" */
  period: string
  description?: string
}
