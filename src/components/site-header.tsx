import { useId } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"

import { MAIN_NAV } from "@/config/site"
import { Separator } from "@/components/ui/separator"
import { InkFilter } from "@/components/ink-filter"
import { NavDesktop } from "@/components/nav-desktop"
import { ThemeToggle } from "@/components/theme-toggle"
import { USER } from "@/features/portfolio/data/user"

const BrandContextMenu = dynamic(
  () => import("@/components/brand-context-menu")
)

export function SiteHeader() {
  const inkId = useId()

  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-height) items-center gap-2 border-x screen-line-bottom-border screen-line-top-border pr-2 pl-4 group-has-data-[slot=layout-wide]/layout:container after:z-1 sm:gap-4 md:max-w-3xl">
        <BrandContextMenu>
          <Link href="/" aria-label="Home">
            <span className="flex" style={{ filter: `url(#${inkId})` }}>
              <InkFilter id={inkId} density={2} />
              <span className="h-6 shrink-0 font-bold tracking-tight text-foreground">
                {USER.displayName}
              </span>
            </span>
          </Link>
        </BrandContextMenu>

        <div className="flex-1" />

        <NavDesktop items={MAIN_NAV} />

        <div className="flex items-center">
          <Separator
            orientation="vertical"
            className="mx-2 max-sm:hidden data-vertical:h-5 data-vertical:self-center"
          />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
