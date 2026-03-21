import { Badge } from "@workspace/ui/components/badge"
import type { ReactNode } from "react"

export interface Release {
  version: string
  date: string
  content: ReactNode
}

interface ChangelogContentProps {
  releases: Release[]
}

const ChangelogContent = ({ releases }: ChangelogContentProps) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8">
      {releases.map((release, index) => (
        <div
          key={release.version}
          id={String(index + 1)}
          className="relative flex scroll-mt-18 justify-end gap-2 sm:gap-3 md:gap-4"
        >
          {/* Desktop Version Badge and Date - Hidden on Mobile */}
          <div className="sticky top-19 hidden flex-col items-end gap-2 self-start pb-4 md:flex md:w-32 lg:w-36">
            <Badge className="flex w-auto justify-end rounded-sm bg-primary/10 text-xs font-medium text-primary transition-colors hover:bg-primary/20 sm:text-sm">
              {release.version}
            </Badge>
            <div className="text-right text-xs font-medium text-muted-foreground sm:text-sm">
              {release.date}
            </div>
          </div>

          {/* Timeline Connector - Responsive */}
          <div className="flex flex-col items-center">
            <div className="sticky top-19 flex size-5 items-center justify-center max-sm:top-5 sm:size-5.5 md:size-6">
              <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full bg-primary/20 transition-all duration-300 sm:size-4 md:size-4.5">
                <span className="size-2 rounded-full bg-primary sm:size-2.5 md:size-3" />
              </span>
            </div>
            {index < releases.length - 1 && (
              <span className="-mt-2.5 w-px flex-1 border border-gray-200 dark:border-gray-700" />
            )}
          </div>

          {/* Content Area */}
          <div className="flex flex-1 flex-col gap-3 pb-8 pl-2 sm:gap-4 sm:pb-10 sm:pl-3 md:pb-11 md:pl-4 lg:pl-6">
            {/* Mobile Version Badge and Date */}
            <div className="flex flex-col gap-1.5 sm:gap-2 md:hidden">
              <Badge className="flex w-fit rounded-sm bg-primary/10 text-xs text-primary sm:text-sm">
                {release.version}
              </Badge>
              <div className="text-xs font-medium text-muted-foreground sm:text-sm">
                {release.date}
              </div>
            </div>

            {/* Release Content */}
            <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
              {release.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ChangelogContent
