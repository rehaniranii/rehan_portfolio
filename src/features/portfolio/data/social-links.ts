import type { SocialProfile } from "@/features/portfolio/types/social-links"

export const SOCIAL = {
  github: {
    title: "GitHub",
    handle: "rehaniranii",
    href: "https://github.com/rehaniranii",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "rehan-irani",
    href: "https://www.linkedin.com/in/rehan-irani",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
