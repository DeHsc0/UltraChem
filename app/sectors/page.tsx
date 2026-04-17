import { PageHero } from "@/components/page-hero";
import { GsapReveal } from "@/components/gsap-reveal";
import { CtaBand } from "@/components/cta-band";
import { SectorShowcaseGrid } from "@/components/sector-showcase-grid";
import { sectorProfiles } from "@/lib/site-data";

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
        <GsapReveal>
          <p className="section-kicker">Where We Work</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-tight">
            Sector Specific Performance Programs
          </h2>
          <p className="mt-4 max-w-3xl text-safety-gray">
            Explore each sector to see how UltraChem systems are aligned with
            exposure conditions, construction constraints, and long-term
            durability outcomes.
          </p>
        </GsapReveal>

        <SectorShowcaseGrid sectors={sectorProfiles} />
      </section>

      <CtaBand
        title="Serving Infrastructure Across India"
        description="From highways to water-retaining structures, UltraChem solutions are designed for long-term durability under aggressive exposure."
      />
    </>
  );
}
