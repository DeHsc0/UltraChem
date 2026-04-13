import Image from "next/image";
import { Building2 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { GsapReveal } from "@/components/gsap-reveal";
import { CtaBand } from "@/components/cta-band";
import { getAsset, sectors } from "@/lib/site-data";

export default function SectorsPage() {
  return (
    <>
      <PageHero
        title="Sectors"
        subtitle="UltraChem systems are used across infrastructure, transport, industrial, and water-retaining projects."
        accent="Industries Served"
        imageIndex={6}
      />

      <section className="container-shell py-10 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <GsapReveal>
              <p className="section-kicker">Where We Work</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-tight">
                Performance In Demanding Conditions
              </h2>
            </GsapReveal>

            <div className="mt-6 grid auto-rows-fr gap-4 md:grid-cols-2">
              {sectors.map((sector, index) => (
                <GsapReveal key={sector} delay={index * 0.06} className="h-full">
                  <article className="panel h-full flex items-center gap-3 border-l-4 border-safety-yellow p-4">
                    <Building2 className="h-5 w-5 text-safety-yellow" />
                    <p className="text-sm font-bold uppercase tracking-wide">{sector}</p>
                  </article>
                </GsapReveal>
              ))}
            </div>
          </div>

          <GsapReveal delay={0.1}>
            <div className="relative min-h-[500px] overflow-hidden border-b-4 border-safety-yellow shadow-panel">
              <Image
                src={getAsset(8)}
                alt="UltraChem sectors"
                fill
                className="object-cover"
              />
            </div>
          </GsapReveal>
        </div>
      </section>

      <CtaBand
        title="Serving Infrastructure Across India"
        description="From highways to water-retaining structures, UltraChem solutions are designed for long-term durability under aggressive exposure."
      />
    </>
  );
}
