import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://example.com",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const LICENSE = {
  name: "MIT License",
  url: "#",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  { title: "About", href: "/#about" as Route },
  { title: "Projects", href: "/#projects" as Route },
  { title: "Experience", href: "/#experience" as Route },
  { title: "Achievements", href: "/#achievements" as Route },
  { title: "Contact", href: "/#contact" as Route },
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/" as Route,
  },
  ...MAIN_NAV,
]

export const X_HANDLE = ""
export const GITHUB_USERNAME = SOCIAL.github.handle
export const SOURCE_CODE_GITHUB_REPO = "rehaniranii/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/rehaniranii/portfolio"

export const SPONSORSHIP_URL = ""

export const UTM_PARAMS = {
  utm_source: "rehanirani.dev",
}
