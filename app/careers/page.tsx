import { BriefcaseBusiness, Mail } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { GsapReveal } from "@/components/gsap-reveal";
import { CtaBand } from "@/components/cta-band";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { careerOpenings, companyInfo } from "@/lib/site-data";

const process = [
  {
    title: "Application Review",
    text: "Profiles are screened against role requirements and sector experience."
  },
  {
    title: "Technical Discussion",
    text: "Shortlisted candidates join a technical and practical problem-solving round."
  },
  {
    title: "Final Interview",
    text: "Leadership round focused on ownership mindset and execution capability."
  }
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers"
        subtitle="Join a team focused on consistency, technical rigor, and high-impact infrastructure outcomes."
        accent="Build With UltraChem"
        imageIndex={10}
      />

      <section className="container-shell py-10 sm:py-14">
        <GsapReveal>
          <p className="section-kicker">Open Roles</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
            Current Opportunities
          </h2>
        </GsapReveal>

        <div className="mt-6 grid auto-rows-fr gap-5 lg:grid-cols-3">
          {careerOpenings.map((opening, index) => (
            <GsapReveal key={opening.role} delay={index * 0.08} className="h-full">
              <article className="panel h-full border-l-4 border-safety-yellow p-6">
                <BriefcaseBusiness className="h-5 w-5 text-safety-yellow" />
                <h3 className="mt-3 text-2xl font-black uppercase leading-tight">
                  {opening.role}
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-safety-gray">
                  {opening.location} | {opening.type}
                </p>
                <p className="mt-3 text-sm text-safety-gray">{opening.description}</p>
                <a
                  href={`mailto:${companyInfo.email}?subject=Career%20Application%20for%20${encodeURIComponent(opening.role)}`}
                  className="mt-5 inline-flex items-center gap-2 bg-safety-yellow px-4 py-2 text-xs font-black uppercase text-safety-black hover:bg-safety-black hover:text-safety-yellow"
                >
                  <Mail className="h-3.5 w-3.5" />
                  Apply Now
                </a>
              </article>
            </GsapReveal>
          ))}
        </div>
      </section>

      <section className="bg-safety-light py-10 sm:py-14">
        <div className="container-shell">
          <GsapReveal>
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="section-kicker">Hiring Process</p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
                  Transparent And Structured
                </h2>
                <p className="mt-4 text-safety-gray">
                  We focus on technical capability, practical problem solving, and
                  project ownership.
                </p>
              </div>

              <article className="panel p-6">
                <Accordion type="single" collapsible>
                  {process.map((step, index) => (
                    <AccordionItem value={`step-${index}`} key={step.title}>
                      <AccordionTrigger>{step.title}</AccordionTrigger>
                      <AccordionContent>{step.text}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </article>
            </div>
          </GsapReveal>
        </div>
      </section>

      <CtaBand
        title="Don’t See A Matching Role?"
        description="Share your profile and domain expertise with our team. We will reach out when a relevant opportunity opens."
        primaryLabel="Send Resume"
        primaryHref={`mailto:${companyInfo.email}?subject=General%20Career%20Application`}
        secondaryLabel="Contact HR"
        secondaryHref="/contact"
      />
    </>
  );
}
