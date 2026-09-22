"use client"

import { ArrowUpRight } from "lucide-react"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  return (
    <ContextMenu>
      <ContextMenuTrigger>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-fit">
        <ContextMenuItem render={<a href="/" target="_blank" />}>
          <ArrowUpRight />
          Open Link in New Tab
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default BrandContextMenu
