import Image from "next/image";
import { CheckCircle2, Quote } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { GsapReveal } from "@/components/gsap-reveal";
import { CtaBand } from "@/components/cta-band";
import {
  companyProfileParagraphs,
  directorMessage,
  getAsset,
  qualityAssurancePoints,
  sectors,
  technicalServices
} from "@/lib/site-data";

const competencePoints = [
  "Concrete durability enhancement",
  "Waterproofing and moisture protection",
  "Corrosion protection of reinforcement steel",
  "Structural life extension systems",
  "Repair and rehabilitation solutions",
  "Compatibility engineering for real site conditions"
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About UltraChem"
        subtitle="A professionally managed construction chemicals company delivering high-performance and cost-efficient systems for infrastructure and building projects."
        imageIndex={2}
      />

      <section className="container-shell py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr]">
          <GsapReveal>
            <div>
              <p className="section-kicker">Company Profile</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
                Building Infrastructure with Consistency
              </h2>
              {companyProfileParagraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-safety-gray">
                  {paragraph}
                </p>
              ))}
            </div>
          </GsapReveal>

          <GsapReveal delay={0.15}>
            <div className="relative min-h-[360px] overflow-hidden border-l-4 border-safety-yellow shadow-panel">
              <Image
                src={getAsset(4)}
                alt="UltraChem operations"
                fill
                className="object-cover"
              />
            </div>
          </GsapReveal>
        </div>
      </section>

      <section id="vision" className="bg-safety-light py-10 sm:py-14">
        <div className="container-shell grid auto-rows-fr gap-6 lg:grid-cols-2">
          <GsapReveal className="h-full">
            <article className="panel h-full border-l-4 border-safety-yellow p-8">
              <p className="section-kicker">Vision</p>
              <p className="mt-4 text-lg font-semibold text-safety-black">
                To become a leading and trusted construction chemicals brand
                recognized for quality excellence, technical innovation, and
                long-term performance across infrastructure and building sectors.
              </p>
            </article>
          </GsapReveal>

          <GsapReveal delay={0.1} className="h-full">
            <article className="panel h-full border-l-4 border-safety-yellow p-8">
              <p className="section-kicker">Mission</p>
              <p className="mt-4 text-lg font-semibold text-safety-black">
                To deliver superior-quality construction chemical products built
                on research-backed performance standards and dependable field
                outcomes.
              </p>
            </article>
          </GsapReveal>
        </div>
      </section>

      <section id="services" className="container-shell py-10 sm:py-14">
        <GsapReveal>
          <p className="section-kicker">Core Competence</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-tight">
            Engineered For Real Site Challenges
          </h2>
        </GsapReveal>

        <div className="mt-6 grid auto-rows-fr gap-4 md:grid-cols-2">
          {competencePoints.map((point, index) => (
            <GsapReveal key={point} delay={index * 0.07} className="h-full">
              <article className="panel h-full flex items-center gap-3 border-l-4 border-safety-yellow p-5">
                <CheckCircle2 className="h-5 w-5 text-safety-yellow" />
                <p className="font-semibold uppercase tracking-wide">{point}</p>
              </article>
            </GsapReveal>
          ))}
        </div>
      </section>

      <section className="bg-safety-light py-10 sm:py-14">
        <div className="container-shell grid auto-rows-fr gap-6 lg:grid-cols-2">
          <GsapReveal className="h-full">
            <article className="panel h-full border-l-4 border-safety-yellow p-8">
              <p className="section-kicker">Technical Services & Site Support</p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight">
                Performance Beyond Products
              </h2>
              <p className="mt-4 text-sm text-safety-gray">
                We ensure correct selection, correct application, and correct
                performance.
              </p>
              <ul className="mt-5 space-y-2">
                {technicalServices.map((service) => (
                  <li key={service} className="border-l-2 border-safety-yellow pl-3">
                    {service}
                  </li>
                ))}
              </ul>
            </article>
          </GsapReveal>

          <GsapReveal delay={0.1} className="h-full">
            <article className="panel h-full border-l-4 border-safety-yellow p-8">
              <p className="section-kicker">Quality Assurance</p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight">
                Consistency Is Our Foundation
              </h2>
              <ul className="mt-5 space-y-2">
                {qualityAssurancePoints.map((point) => (
                  <li key={point} className="border-l-2 border-safety-yellow pl-3">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </GsapReveal>
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <GsapReveal>
            <article className="panel h-full border-l-4 border-safety-yellow p-8">
              <p className="section-kicker">Industries Served</p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight">
                Trusted Across The Nation
              </h2>
              <div className="mt-5 grid auto-rows-fr gap-3 sm:grid-cols-2">
                {sectors.map((sector) => (
                  <p
                    key={sector}
                    className="border border-black/10 bg-safety-light px-3 py-2 text-sm font-semibold uppercase tracking-wide"
                  >
                    {sector}
                  </p>
                ))}
              </div>
            </article>
          </GsapReveal>

          <GsapReveal delay={0.1}>
            <article className="panel h-full border-l-4 border-safety-yellow p-8">
              <p className="section-kicker">Director&apos;s Message</p>
              <Quote className="mt-4 h-6 w-6 text-safety-yellow" />
              <p className="mt-4 text-base leading-relaxed text-safety-gray">
                {directorMessage}
              </p>
            </article>
          </GsapReveal>
        </div>
      </section>

      <CtaBand
        title="Consistency Is Our Foundation"
        description="Every batch is precision-engineered and quality-validated to ensure dependable results across every project."
      />
    </>
  );
}
