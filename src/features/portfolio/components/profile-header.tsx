import { USER } from "@/features/portfolio/data/user"

import { FlipSentences } from "./flip-sentences"
import { PronounceMyName } from "./pronounce-my-name"
import { VerifiedIcon } from "./verified-icon"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom border-x border-line screen-line-bottom-border after:z-1">
      {/* Banner */}
      <div className="relative aspect-3/1 w-full overflow-hidden border-b border-line bg-zinc-100 sm:aspect-3.5/1 dark:bg-zinc-900">
        {USER.banner ? (
          <img
            className="size-full object-cover select-none"
            src={USER.banner}
            alt={`${USER.displayName}'s banner`}
          />
        ) : (
          <div className="size-full bg-linear-to-r from-zinc-200 via-zinc-100 to-zinc-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900" />
        )}
      </div>

      <div className="grid grid-cols-[auto_1fr]">
        <div className="flex flex-col justify-end border-r border-line pb-2 sm:pb-3">
          <div className="relative z-2 mx-1.5 -mt-14 flex outline-none min-[24rem]:-mt-16 sm:mx-3 sm:-mt-20">
            <div className="relative size-28 rounded-full bg-background ring-4 ring-background min-[24rem]:size-32 sm:size-40">
              <img
                className="block size-full rounded-[inherit] object-cover select-none dark:hidden"
                src={USER.avatarSketch ?? USER.avatar}
                alt={`${USER.displayName}'s avatar`}
              />
              <img
                className="hidden size-full rounded-[inherit] object-cover select-none dark:block"
                src={USER.avatar}
                alt={`${USER.displayName}'s avatar`}
              />
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] inset-ring-1 inset-ring-foreground/30 dark:inset-ring-foreground/10" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <div className="flex -translate-x-px items-center gap-2 py-2 pl-4 sm:py-3">
            <h1 className="-translate-y-px text-[1.75rem]/none font-medium tracking-tight sm:text-[2rem]/none">
              {USER.displayName}
            </h1>

            <VerifiedIcon className="size-4.5 select-none" aria-hidden />

            {USER.namePronunciationUrl && (
              <PronounceMyName
                namePronunciationUrl={USER.namePronunciationUrl}
              />
            )}
          </div>

          <FlipSentences className="flex min-h-12 items-center border-t border-line py-2 pr-3 pl-4 leading-snug sm:min-h-10">
            {USER.flipSentences}
          </FlipSentences>
        </div>
      </div>
    </div>
  )
}
