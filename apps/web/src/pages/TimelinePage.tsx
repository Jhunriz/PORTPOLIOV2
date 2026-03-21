import V1_1_0_Content from "@workspace/ui/components/shadcn-studio/blocks/timeline-component-05/content/v1-1-0"
import V1_2_0_Content from "@workspace/ui/components/shadcn-studio/blocks/timeline-component-05/content/v1-2-0"
import V1_3_0_Content from "@workspace/ui/components/shadcn-studio/blocks/timeline-component-05/content/v1-3-0"
import ChangelogContent, {
  type Release,
} from "@workspace/ui/components/shadcn-studio/blocks/timeline-component-05/timeline-component-05"

// Helper function to parse date strings for comparison
const parseDate = (dateStr: string): Date => {
  if (dateStr.includes(",")) {
    return new Date(dateStr)
  }
  return new Date(dateStr)
}

// Define releases with their actual versions
const allReleases: Release[] = [
  {
    version: "v1.3.0",
    date: "November 7, 2025",
    content: <V1_3_0_Content />,
  },
  {
    version: "v1.2.0",
    date: "March 22, 2025",
    content: <V1_2_0_Content />,
  },
  {
    version: "v1.1.0",
    date: "October 2024",
    content: <V1_1_0_Content />,
  },
]

// Sort releases by date to identify the latest
const sortedReleases = [...allReleases].sort((a, b) => {
  return parseDate(b.date).getTime() - parseDate(a.date).getTime()
})

// Create the final releases array with proper labeling
export const releases: Release[] = sortedReleases.map((release, index) => ({
  ...release,
  version: index === 0 ? "Latest" : "Previous Release", // Change "Previous Release" to whatever label you want
}))

const TimelinePage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto max-w-4xl px-4 py-10 md:px-8 md:py-16">
        <div className="flex flex-col items-start">
          <ChangelogContent releases={releases} />
        </div>
      </div>
    </div>
  )
}

export default TimelinePage
