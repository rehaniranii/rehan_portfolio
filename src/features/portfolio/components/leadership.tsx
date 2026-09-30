import { ShieldIcon } from "lucide-react"

import { IconTile } from "@/components/ui/icon-tile"
import { Separator } from "@/components/ui/separator"
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { LEADERSHIP_ROLES } from "@/features/portfolio/data/leadership"
import type { LeadershipRole } from "@/features/portfolio/types/leadership"

const ID = "leadership"

export function Leadership() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Leadership and community</a>
          <PanelTitleSup>({LEADERSHIP_ROLES.length})</PanelTitleSup>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <div>
        {LEADERSHIP_ROLES.map((role) => (
          <LeadershipItem key={role.id} role={role} />
        ))}
      </div>
    </Panel>
  )
}

function LeadershipItem({ role }: { role: LeadershipRole }) {
  return (
    <div className="flex items-center">
      <IconTile className="mx-4">
        <ShieldIcon />
      </IconTile>

      <div className="flex-1 border-l border-dashed border-line p-4">
        <h3 className="mb-1 leading-snug font-medium">{role.title}</h3>

        <dl className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
          <div>
            <dt className="sr-only">Organization</dt>
            <dd>{role.organization}</dd>
          </div>

          <Separator
            className="data-vertical:h-4 data-vertical:self-center"
            orientation="vertical"
            aria-hidden
          />

          <div>
            <dt className="sr-only">Period</dt>
            <dd>{role.period}</dd>
          </div>
        </dl>

        {role.description && (
          <p className="mt-2 text-sm text-muted-foreground">
            {role.description}
          </p>
        )}
      </div>
    </div>
  )
}
