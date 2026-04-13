import Image from "next/image";
import { Download, FileText } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { GsapReveal } from "@/components/gsap-reveal";
import { CtaBand } from "@/components/cta-band";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { getAsset, resources } from "@/lib/site-data";

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        title="Resources"
        subtitle="Download technical literature, browse project visuals, and access practical guidance from the UltraChem team."
        accent="Knowledge Center"
        imageIndex={7}
      />

      <section className="container-shell py-10 sm:py-14" id="downloads">
        <GsapReveal>
          <p className="section-kicker">Downloads</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
            Technical Documents
          </h2>
        </GsapReveal>

        <div className="mt-6 grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
          {resources.downloads.map((item, index) => (
            <GsapReveal key={item} delay={index * 0.08} className="h-full">
              <article className="panel h-full border-l-4 border-safety-yellow p-5">
                <FileText className="h-5 w-5 text-safety-yellow" />
                <h3 className="mt-3 text-xl font-black uppercase">{item}</h3>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 border border-safety-black px-3 py-2 text-xs font-black uppercase hover:border-safety-yellow hover:text-safety-yellow"
                >
                  <Download className="h-3.5 w-3.5" />
                  Request Download
                </button>
              </article>
            </GsapReveal>
          ))}
        </div>
      </section>

      <section className="bg-safety-light py-10 sm:py-14">
        <div className="container-shell">
          <GsapReveal>
            <p className="section-kicker">Gallery</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
              Project Highlights
            </h2>
          </GsapReveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <GsapReveal key={`gallery-image-${index}`} delay={index * 0.05}>
                <div className="relative min-h-[180px] overflow-hidden border border-black/10 shadow-panel">
                  <Image
                    src={getAsset(index + 3)}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </GsapReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-10 sm:py-14">
        <GsapReveal>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-kicker">FAQ</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
                Resource Support
              </h2>
              <p className="mt-4 text-safety-gray">
                Find quick answers on product selection, technical support, and
                document access.
              </p>
            </div>

            <article className="panel p-6">
              <Accordion type="single" collapsible>
                {resources.faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </article>
          </div>
        </GsapReveal>
      </section>

      <CtaBand
        title="Need Technical Documents For A Specific Product?"
        description="Our team can provide TDS, method statements, and recommendation sheets as per your project brief."
      />
    </>
  );
}
