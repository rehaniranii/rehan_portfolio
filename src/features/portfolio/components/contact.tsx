import { MailIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

const ID = "contact"

export function Contact() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Get in touch</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent>
        <p className="mb-6 text-balance text-muted-foreground">
          Interested in collaborating, have a question, or just want to say
          hello? Feel free to reach out.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="default"
            size="sm"
            className="gap-2"
            nativeButton={false}
            render={
              <a
                href={`mailto:${atob(USER.emailB64)}`}
                target="_blank"
                rel="noopener"
              >
                <MailIcon />
                Send an email
              </a>
            }
          />

          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            nativeButton={false}
            render={
              <a href={SOCIAL.github.href} target="_blank" rel="noopener">
                <GitHubIcon />
                GitHub
              </a>
            }
          />

          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            nativeButton={false}
            render={
              <a href={SOCIAL.linkedin.href} target="_blank" rel="noopener">
                <LinkedInIcon />
                LinkedIn
              </a>
            }
          />
        </div>
      </PanelContent>
    </Panel>
  )
}
