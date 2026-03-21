import { Badge } from "@workspace/ui/components/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import rds1 from "../../../../../../../../apps/web/assets/images/RDS1.png"

const V1_3_0_Content = () => {
  return (
    <div>
      <div className="space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">
            Records Disposition and Inventory System
          </h3>
          <p className="text-sm text-muted-foreground">
            We&apos;re launching the Records Inventory Tracker, a new way to
            manage, audit, and monitor all administrative records across
            sections — giving records officers full visibility into what exists,
            what&apos;s due for disposition, and what requires action.
          </p>
        </div>
        <div className="space-y-3">
          <p className="font-medium">Now you can :</p>
          <ul className="ml-2 list-inside list-disc space-y-3 text-sm text-muted-foreground">
            <li>
              View and verify the actual inventory of records held under the
              Administrative Records Section
            </li>
            <li>
              Track retention schedules and flag records approaching their
              disposition date
            </li>
            <li>
              Automatically detect missing, duplicate, or unclassified record
              entries
            </li>
          </ul>
        </div>
        <img
          src={rds1}
          alt="Records Inventory Tracker Demo"
          className="rounded-none"
        />
        <Accordion
          multiple
          className="mb-5 w-full rounded-none"
          defaultValue={["item-1"]}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline [&>svg]:size-6">
              <Badge className="h-6 rounded-sm border-none bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5">
                New
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <ul className="list-inside list-disc space-y-3 text-sm text-muted-foreground">
                <li>
                  Inventory Snapshot view a real-time count of all records held
                  under the Administrative Records Section by record series and
                  classification.
                </li>
                <li>
                  Disposition Due Tracker flag records that have met or exceeded
                  their retention period and are ready for review or disposal.
                </li>
                <li>
                  Section-level audit log track who accessed, updated, or
                  endorsed a record entry within the section.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline [&>svg]:size-6">
              <Badge className="h-6 rounded-sm border-none bg-sky-600/10 text-sky-600 focus-visible:ring-sky-600/20 focus-visible:outline-none dark:bg-sky-400/10 dark:text-sky-400 dark:focus-visible:ring-sky-400/40 [a&]:hover:bg-sky-600/5 dark:[a&]:hover:bg-sky-400/5">
                Updates
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <ul className="list-inside list-disc space-y-3 text-sm text-muted-foreground">
                <li>
                  Faster inventory loading for sections with large record
                  volumes (−30% load time)
                </li>
                <li>
                  Improved record classification filter — search by record type,
                  date range, custody holder, or disposition status
                </li>
                <li>
                  Retention schedule entries now auto-update when a
                  record&apos;s status changes during disposition review
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline [&>svg]:size-6">
              <Badge className="h-6 rounded-sm border-none bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 focus-visible:outline-none dark:bg-orange-400/10 dark:text-orange-400 dark:focus-visible:ring-orange-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-orange-400/5">
                Bug Fixes
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <ul className="list-inside list-disc space-y-3 text-sm text-muted-foreground">
                <li>
                  Fixed inventory count discrepancies when records were moved
                  between sections without re-classification
                </li>
                <li>
                  Resolved duplicate record entries appearing in the disposition
                  queue after bulk import
                </li>
                <li>
                  Fixed incorrect retention period calculation for records with
                  amended custody dates
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="rounded-none bg-primary/10 px-3 py-1 text-xs leading-4.5 font-medium text-destructive">
                  Administrative Records
                </div>
                <div className="rounded-none bg-primary/10 px-3 py-1 text-xs leading-4.5 font-medium text-destructive">
                  Disposition Review
                </div>
                <div className="rounded-none bg-primary/10 px-3 py-1 text-xs leading-4.5 font-medium text-destructive">
                  Retention Schedule
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default V1_3_0_Content
