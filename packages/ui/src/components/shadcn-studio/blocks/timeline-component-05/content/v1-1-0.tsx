import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Badge } from "@workspace/ui/components/badge"
import case1 from "../../../../../../../../apps/web/assets/images/case1.png"

const V1_1_0_Content = () => {
  return (
    <div>
      <div className="space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Case Management System</h3>
          <p className="text-sm text-muted-foreground">
            We&apos;ve completely redesigned the Case Management System for
            v1.1.0. Cases are now hierarchical, trackable, and fully auditable —
            built for scaling legal, support, and operational workflows.
          </p>
        </div>
        <img
          src={case1}
          alt="Case Management System Demo"
          className="rounded-[10px] border"
        />
        <p className="text-sm text-muted-foreground">
          v1.1.0 introduces a complete overhaul of how cases are created,
          assigned, and resolved within the platform. Cases now support nested
          sub-cases, priority escalation, and role-based assignment — offering
          greater control and visibility across your entire caseload.
        </p>
        <p className="text-sm text-muted-foreground">
          The new system supports automatic SLA tracking and deadline alerts,
          making it easier than ever to stay on top of critical cases. Case
          fields, statuses, and workflows are now fully customizable, ensuring
          the system adapts to your team&apos;s unique processes as you scale.
        </p>
        <Accordion
          multiple
          className="mt-2 mb-0 w-full rounded-none"
          defaultValue={["item-1"]}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline [&>svg]:size-6">
              <Badge className="h-6 rounded-none border-none bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5">
                New
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <ul className="list-inside list-disc space-y-3 text-sm text-muted-foreground">
                <li>
                  Nested sub-cases support for breaking complex cases into
                  manageable tasks.
                </li>
                <li>
                  SLA tracking with automated deadline alerts and escalation
                  rules.
                </li>
                <li>
                  Unified case timeline — view all activity, notes, and
                  attachments in one place.
                </li>
                <li>
                  Shareable case links generate secure, temporary links to share
                  case progress with stakeholders.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline [&>svg]:size-6">
              <Badge className="h-6 rounded-none border-none bg-sky-600/10 text-sky-600 focus-visible:ring-sky-600/20 focus-visible:outline-none dark:bg-sky-400/10 dark:text-sky-400 dark:focus-visible:ring-sky-400/40 [a&]:hover:bg-sky-600/5 dark:[a&]:hover:bg-sky-400/5">
                Updates
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <ul className="list-inside list-disc space-y-3 text-sm text-muted-foreground">
                <li>
                  Smarter case assignment logic for balanced workload
                  distribution across agents.
                </li>
                <li>
                  Improved case search with advanced filters by status,
                  priority, assignee, and date range.
                </li>
                <li>
                  Faster case list rendering for high-volume queues (25% speed
                  boost).
                </li>
                <li>
                  Better error handling during case submission failures with
                  clearer recovery actions.
                </li>
                <li>
                  Updated case export manager for easier PDF and CSV report
                  generation.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline [&>svg]:size-6">
              <Badge className="h-6 rounded-none border-none bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 focus-visible:outline-none dark:bg-orange-400/10 dark:text-orange-400 dark:focus-visible:ring-orange-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-orange-400/5">
                Bug Fixes
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <ul className="list-inside list-disc space-y-3 text-sm text-muted-foreground">
                <li>
                  Fixed broken case references causing incorrect status
                  propagation in linked cases.
                </li>
                <li>
                  Corrected priority field mismatch when duplicating cases
                  across departments.
                </li>
                <li>
                  Resolved case dashboard lag when loading large case queues
                  with many attachments.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default V1_1_0_Content
