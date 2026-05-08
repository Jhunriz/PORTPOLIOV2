import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { Badge } from "@workspace/ui/components/badge"
import { CopyCode } from "@workspace/ui/components/ui/copy-code"

const V1_2_0_Content = () => {
  const codeExample = `# AWS CLI – Useful commands for exam prep
aws s3 ls                          # List S3 buckets
aws ec2 describe-instances         # List EC2 instances
aws iam list-users                 # List IAM users
aws cloudwatch get-metric-stats    # Check CloudWatch metrics`

  return (
    <div className="w-full">
      <div className="space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">
            AWS Cloud Practitioner Study Roadmap
          </h3>
          <p className="text-sm text-muted-foreground">
            A structured path to help you pass the AWS Certified Cloud
            Practitioner (CLF-C02) exam — covering core domains, hands-on
            practice, and exam strategy.
          </p>
        </div>
        <ul className="ml-2 list-inside list-disc space-y-3 text-sm text-muted-foreground">
          <li>
            Understand core AWS services and the shared responsibility model
          </li>
          <li>Practice with AWS Free Tier and hands-on labs</li>
          <li>Take timed mock exams to build confidence</li>
        </ul>
        <div className="flex flex-wrap items-center gap-4">
          {/* Cloud Concepts */}
          <div className="flex items-center gap-1.5 rounded-[6px] bg-amber-600/10 px-3 py-1 dark:bg-amber-400/10">
            <span className="text-xs font-medium">☁️ Cloud Concepts</span>
          </div>
          {/* Security */}
          <div className="flex items-center gap-1.5 rounded-[6px] bg-sky-600/10 px-3 py-1 dark:bg-sky-400/10">
            <span className="text-xs font-medium">
              🔐 Security & Compliance
            </span>
          </div>
          {/* Billing */}
          <div className="flex items-center gap-1.5 rounded-[6px] bg-destructive/10 px-3 py-1">
            <span className="text-xs font-medium">💰 Billing & Pricing</span>
          </div>
        </div>
        <CopyCode code={codeExample} />
        <p className="text-sm text-muted-foreground">
          The AWS Cloud Practitioner certification is the ideal entry point into
          the AWS ecosystem. It validates your understanding of core cloud
          concepts, key AWS services, security best practices, architecture
          principles, and billing models. This roadmap walks you through each
          exam domain in a logical order — from foundational concepts to
          hands-on practice and final exam prep.
        </p>
        <Accordion
          multiple
          className="mb-2 w-full rounded-none"
          defaultValue={["item-1"]}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline [&>svg]:size-6">
              <Badge className="h-6 rounded-none border-none text-left truncate max-w-[180px] sm:max-w-none bg-green-600/10 text-green-600 focus-visible:ring-green-600/20 focus-visible:outline-none dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 [a&]:hover:bg-green-600/5 dark:[a&]:hover:bg-green-400/5">
                Phase 1 – Foundations
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <ul className="list-inside list-disc space-y-3 text-sm text-muted-foreground">
                <li>
                  Cloud concepts learn the benefits of cloud computing, CapEx vs
                  OpEx, and the AWS global infrastructure (regions, AZs, edge
                  locations).
                </li>
                <li>
                  Core services get familiar with EC2, S3, RDS, Lambda, VPC, and
                  CloudFront at a high level.
                </li>
                <li>
                  Shared Responsibility Model understand what AWS manages vs
                  what the customer is responsible for.
                </li>
                <li>
                  Free Tier practice spin up your first EC2 instance and S3
                  bucket using the AWS Free Tier account.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline [&>svg]:size-6">
              <Badge className="h-6 rounded-none border-none text-left truncate max-w-[180px] sm:max-w-none bg-sky-600/10 text-sky-600 focus-visible:ring-sky-600/20 focus-visible:outline-none dark:bg-sky-400/10 dark:text-sky-400 dark:focus-visible:ring-sky-400/40 [a&]:hover:bg-sky-600/5 dark:[a&]:hover:bg-sky-400/5">
                Phase 2 – Core Domains
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <ul className="list-inside list-disc space-y-3 text-sm text-muted-foreground">
                <li>
                  Security & compliance study IAM, MFA, AWS Shield, WAF,
                  CloudTrail, and the AWS Well-Architected Framework.
                </li>
                <li>
                  Billing & pricing understand the pricing models (on-demand,
                  reserved, spot), AWS Cost Explorer, Budgets, and Support
                  plans.
                </li>
                <li>
                  Technology domain review managed services like ECS, SNS, SQS,
                  Elastic Beanstalk, and CloudFormation.
                </li>
                <li>
                  AWS Partner & support resources explore Trusted Advisor, AWS
                  Marketplace, and the different support tiers.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline [&>svg]:size-6">
              <Badge className="h-6 rounded-none border-none text-left truncate max-w-[180px] sm:max-w-none bg-amber-600/10 text-amber-600 focus-visible:ring-amber-600/20 focus-visible:outline-none dark:bg-orange-400/10 dark:text-orange-400 dark:focus-visible:ring-orange-400/40 [a&]:hover:bg-amber-600/5 dark:[a&]:hover:bg-orange-400/5">
                Phase 3 – Exam Prep
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <ul className="list-inside list-disc space-y-3 text-sm text-muted-foreground">
                <li>
                  Take at least 3 full-length timed mock exams (65 questions
                  each)
                </li>
                <li>
                  Review every wrong answer and map it back to the official exam
                  guide domains
                </li>
                <li>
                  Use AWS Skill Builder for official practice question sets and
                  digital course content
                </li>
                <li>
                  Revisit tricky topics like AWS Organizations, SCPs, and
                  multi-account strategies
                </li>
                <li>
                  Schedule your exam at a Pearson VUE test center or online
                  proctored session
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default V1_2_0_Content
